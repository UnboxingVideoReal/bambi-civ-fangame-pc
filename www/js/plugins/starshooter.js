/**
 * Starshooter enemy class. Gunner with a star pattern (360 degrees Spray emitter).
 *
 * Additional parameters:
 *
 * - n: number of points for the star.
 * @constructor
 * @memberOf BHell
 * @extends BHell.BHell_Enemy_Gunner_Base
 */
var BHell_Enemy_Starshooter = my.BHell_Enemy_Starshooter = function() {
    this.initialize.apply(this, arguments);
};

BHell_Enemy_Starshooter.prototype = Object.create(BHell_Enemy_Gunner_Base.prototype);
BHell_Enemy_Starshooter.prototype.constructor = BHell_Enemy_Starshooter;

BHell_Enemy_Starshooter.prototype.initialize = function (x, y, image, params, parent, enemyList) {
    BHell_Enemy_Gunner_Base.prototype.initialize.call(this, x, y, image, params, parent, enemyList);

    this.n = 5;

    if (params != null) {
        this.shots = params.shots || this.shots;
    }

    var emitterParams = {};
    emitterParams.x = 0;
    emitterParams.y = 0;
    emitterParams.period = this.period;
    emitterParams.angle = this.angle;
    emitterParams.aim_x = this.aimX;
    emitterParams.aim_y = this.aimY;
    emitterParams.aim = this.aim;
    emitterParams.always_aim = this.alwaysAim;
    emitterParams.a = 0;
    emitterParams.b = 2 * Math.PI;
    emitterParams.n = this.n;
    emitterParams.bullet = Object.assign({}, this.bullet);

    this.emitters.push(new my.BHell_Emitter_Spray(this.x, this.y, emitterParams, parent, my.enemyBullets));
};