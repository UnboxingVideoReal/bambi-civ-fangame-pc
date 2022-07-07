//=============================================================================
// MalElementEX
// MalElementsEX.js
// version 1.6
//=============================================================================
/*:
 * @plugindesc Allows Actors, enemies, weapons, classes, armors and states to affect elements boosting skill effects by a set amount.
 * Also allows elements to be lessened and further to allow element absorption.
 *
 * @author Maliki79
 *
 * @help
 * Actor, Enemy, Class, Weapon, Armor and State Notetags :
 * <element_boost: elementID boost > 
 * <element_Dboost: elementID boost >
 * <object_element: number >
 *  Note1: Do not forget the spaces near the end of the expressions!
 *  Note2: The <Object_element> tag can be applied to skills and items as well.
 *  
 *
 *  When battler uses a skill or item given an Object Element #, the raw damage/healing of the attack will
 *  be multiplied by the boost amount. (This only applies to damage formula values.)
 *  You can give Object Elements to pretty much anything in your game.
 * 
 *     Repeats of the tags on weapons, armors, states, classes will have a cumulative effect.
 *     Examples:
 *     Notetag: <element_boost: 1 2>
 *     Result: If the attack normally does 100 damage, this tag will raise the damage to 300.  (100 + 200 bonus)
 *             If this tag were used on a state applied first, the damage would become 500.
 *
 *     Notetag: <element_Dboost: 1 0.25> 
 *     Result: If the attack normally does 100 damage, this tag would lower the damage to 75. (100 - 25)
 *
 *     Notetag: <element_Dboost: 1 1>  
 *     Result: If the attack normally does 100 damage, this tag would lower the damage to 0. (100 - 100) 
 *             If this tag were used on a state applied first, the damage would become -100. (100 - 200) 
 *             This damage would be converted to healing and absorbed.
 *
 *   You can assign multiple elements to objects as well, and if subjects and/or targets are affected by multiple elements, 
 *   the results will be added to the appropriate boost multiplier.
 *   
 *   You can tag Skills or Items with the tag <priorityObj> and that skill/item will NOT gain additional object elements 
 *	 from any other sources. (Element boosts will still work.)
 *   
 *   You can also tag Skills/Items with <ignoreEquipElementObjects> ant those skills/item will NOT gain additional object
 *   elements from equipment. (Element boosts will still work.)
 */
 
 var MalElementsRefresh = Game_Battler.prototype.refresh;
 Game_Battler.prototype.refresh = function()
 {
 MalElementsRefresh.call(this);
 this.setElementRates();
 };
 
Game_Actor.prototype.setElementRates = function() 
{
	this.elementA = [];
	this.elementD = [];
	this.setElements($dataActors[this.actorId()].note);
	this.setElements(this.currentClass().note);
	for(var i = 0; i < this.equips().length; ++i) if(this.equips()[i])this.setElements(this.equips()[i].note);
	for(var i = 0; i < this.states().length; ++i) if(this.states()[i]) this.setElements(this.states()[i].note);		
};

Game_Enemy.prototype.setElementRates = function() 
{
	this.elementA = [];
	this.elementD = [];
	this.setElements($dataEnemies[this.enemyId()].note);
	for(var i = 0; i < this.states().length; ++i) if(this.states()[i]) this.setElements(this.states()[i].note);		
};

Game_Battler.prototype.setElements = function(note)
{
	var noteread = note;
    while(noteread.indexOf("element_boost") > -1)
	{
		var notereg = noteread.split("<element_boost: ");
		var match = notereg[1].split(" ");
		var bonuselem = Number(match[0]);
		var bonusvalue = Number(match[1]);
		noteread = noteread.replace("element_boost", " ");
		if (this.elementA[bonuselem]){
			this.elementA[bonuselem] += bonusvalue;
		} else {
			this.elementA[bonuselem] = bonusvalue;
		}
	}
	while(noteread.indexOf("element_Dboost") > -1)
	{
		var notereg = noteread.split("<element_Dboost: ");
		var match = notereg[1].split(" ");
		var bonuselem = Number(match[0]);
		var bonusvalue = Number(match[1]);
		noteread = noteread.replace("element_Dboost", " ");
		if (this.elementD[bonuselem]){
			this.elementD[bonuselem] += bonusvalue;
		} else {
			this.elementD[bonuselem] = bonusvalue;
		}
	}
};

Game_Action.prototype.setObjEle = function() {
	
	this._objectE = [];
	this.subject().setObjects(this.item(), this);
	console.log(this._objectE);
};

Game_Actor.prototype.setObjects = function(item, action) 
{
	this.setElementObjects(item.note, action);
	if(!item.meta.priorityObj)
	{
		this.setElementObjects($dataActors[this.actorId()].note, action);
		this.setElementObjects(this.currentClass().note, action);
		if(!item.meta.ignoreEquipElementObjects) for(var i = 0; i < this.equips().length; ++i) if(this.equips()[i])this.setElementObjects(this.equips()[i].note, action);
		for(var i = 0; i < this.states().length; ++i) if(this.states()[i]) this.setElementObjects(this.states()[i].note, action);	
	}
};

Game_Enemy.prototype.setObjects = function(item, action) 
{
	this.setElementObjects(item.note, action);
	if(!item.meta.priorityObj)
	{
		this.setElementObjects($dataEnemies[this.enemyId()].note, action);
		for(var i = 0; i < this.states().length; ++i) if(this.states()[i]) this.setElementObjects(this.states()[i].note, action);		
	}
};

Game_Battler.prototype.setElementObjects = function(note, action)
{
var noteread = note;

	while(noteread.indexOf("object_element") > -1)
	{
	var notereg = noteread.split("<object_element: ");
	var match = notereg[1].split(" ");
	var elem2 = Number(match[0]);
	noteread = noteread.replace("object_element", " ");
	if(action._objectE.indexOf(elem2) == -1) action._objectE.push(elem2);
	}
};

var MalElements = Game_Action.prototype.makeDamageValue
Game_Action.prototype.makeDamageValue = function(target, critical)
{
	var EleA = 1;
	var EleD = 1;
	var item = this.item();
	this.setObjEle();
    var baseValue = this.evalDamageFormula(target);
	value = Math.round(value);
    var value = baseValue; //var value = baseValue * this.calcElementRate(target);
    if (this.isPhysical()) value *= target.pdr;
    if (this.isMagical()) value *= target.mdr;
    if (baseValue < 0) value *= target.rec;
    if (critical) value = this.applyCritical(value);
    //Element attack bonus
	EleA += this.ElementAttackBoost(this.subject().elementA);
	//Element Defence bonus
	EleD -= this.ElementDefBoost(target.elementD);
    value = this.applyVariance(value, item.damage.variance);
    value = this.applyGuard(value, target);
    value *= EleA;
	value *= EleD;
	value = Math.round(value);
	this.calcElementRate(EleD);
    return value;
};

Game_Action.prototype.ElementAttackBoost = function(atkE){

	var num = 0;
	var objele = this._objectE;
	for(var i = 0; i < objele.length; ++i){
		if(atkE[objele[i]]) num += atkE[objele[i]];
	}
	return num;
};

Game_Action.prototype.ElementDefBoost = function(defE){

	var num = 0;
	var objele = this._objectE;
	for(var i = 0; i < objele.length; ++i){
		if(defE[objele[i]]) num += defE[objele[i]];
	}
	return num;
};

//Compatability overwrite for Victor's Damage Popups
Game_Action.prototype.calcElementRate = function(target) {
	var result = target;
	console.log(result);
	if (result > 1) {
		this._resist = 'weak';
	} else if (result > 0 && result < 1) {
		this._resist = 'resist';
	} else if (result === 0) {
		this._resist = 'immune';
	} else if (result < 0) {
		this._resist = 'absorb';
	} else {
		this._resist = ''
	}
	//return result;
};