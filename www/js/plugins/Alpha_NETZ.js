/*:
 * @plugindesc (v.0.7.5)[BASIC] Multiplayer for RPG Maker
 * @author Pheonix KageDesu
 * @target MZ MV
 * @url https://kdworkshop.net/plugins/alpha-net-z/
 *
 * @help
 *
 * Alpha NET Z plugin is still in development
 *
 * WebPage: https://kdworkshop.net/plugins/alpha-net-z/
 * Documentation: https://github.com/KageDesu/Alpha-NET-Z/wiki
 *
 * Required content:
 *  - file css\anet.css
 *  - folder img\Alpha\*all files*
 *
 *

 * @param ANETZ @text @desc
 * 
 * 
 * @param connection:s
 * @text Connection
 * @type struct<LConnectionSettings>
 * @default {"serverIp":"anetzglobal.ru","serverPort":"3034","isHttpsConnection:b":"false"}
 * @desc [PRO] Connection to server configuration
 * 
 * 
 * @param spacer|gamesettings @text‏‏‎ ‎@desc ===============================================
 * 
 * @param gameModeSettingsGroup
 * @text Multiplayer Settings
 * 
 * @param onlySameMap:b
 * @parent gameModeSettingsGroup
 * @type boolean
 * @text Wait Map Transfer?
 * @default false
 * @desc When player transferred to the new map he will wait until all players not transfered on same map.
 * 
 * @param singlePlayerAllowed:b
 * @parent gameModeSettingsGroup
 * @type boolean
 * @text New Game Allowed?
 * @default true
 * @desc If false, the menu item "New Game" will not be displayed in title menu
 * 
 * @param roomFilter:b
 * @parent gameModeSettingsGroup
 * @type boolean
 * @text Rooms Filter?
 * @on ON
 * @off OFF
 * @default false
 * @desc [PRO] If filter is ON, you can see only this (same) game rooms in lobby
 * 
 * @param joinStartedAllowed:b
 * @parent gameModeSettingsGroup
 * @type boolean
 * @text Join to Game Allowed?
 * @default false
 * @desc If true, player can join in rooms with already started game
 * 
 * @param joinStartedAndLoadedAllowed:b
 * @parent joinStartedAllowed:b
 * @type boolean
 * @text Join to Loaded Game?
 * @default true
 * @desc If true, player can join in rooms with started and loaded from savefile game
 * 
 * 
 * @param onJoinCE:int
 * @parent joinStartedAllowed:b
 * @text On Player Joined CE
 * @type common_event
 * @default 0
 * @desc That common event will be called when player joined game. CE called ONLY for this player.
 * 
 * @param isJoinRandomOptionExists:b
 * @parent gameModeSettingsGroup
 * @type boolean
 * @text Join Random Room Option
 * @default true
 * @desc Show the Join Random Room option?
 * 
 * @param saveLoadGame:b
 * @parent gameModeSettingsGroup
 * @type boolean
 * @text Save and Load Allowed?
 * @on YES
 * @off NO
 * @default true
 * @desc Can player save and load network game?
 * 
 * @param networkStatusIcons:b
 * @parent gameModeSettingsGroup
 * @type boolean
 * @text Is show network icons?
 * @on YES
 * @off NO
 * @default true
 * @desc Network current state icons above players (menu, event, battle, etc...)
 * 
 * @param inGameChat:b
 * @parent gameModeSettingsGroup
 * @type boolean
 * @text In-Game Chat?
 * @on YES
 * @off NO
 * @default false
 * @desc [PRO] In-Game chat on Map Scene? (More chat settings will be in next update...)
 * 
 * @param chatStartMessage
 * @parent inGameChat:b
 * @text Start Message
 * @default \}Welcome to Alpha NET Z, \C[1]'T'\C[6] to chat
 * @desc Message when New Game started. Leave empty if not need any start message.
 * 
 * @param chatOpenCloseKey
 * @parent inGameChat:b
 * @text Chat Key
 * @default t
 * @desc Key to open (close) chat window in game.
 * 
 * @param chatSayKey
 * @parent inGameChat:b
 * @text Say Key
 * @default t
 * @desc Key to open input message scene. Only when chat visible. Can be same with Chat Key.
 * 
 * @param clickOnChatToSay:b
 * @parent inGameChat:b
 * @type boolean
 * @text Is click to Say?
 * @on YES
 * @off NO
 * @default true
 * @desc Click in chat window to open input message scene. Only when chat visible.
 * 
 * @param playerMenuSettingsGroup:b
 * @parent gameModeSettingsGroup
 * @type boolean
 * @text In-Game Player Menu?
 * @on YES
 * @off NO
 * @default true
 * @desc [PRO] In-Game player menu? (Right mouse click on another player to open menu)
 * 
 * @param defaultIPLMenuCommands
 * @parent playerMenuSettingsGroup:b
 * @text Default Commands
 * @desc Default menu commands
 * 
 * @param PlayerMenuItem_trade:s
 * @parent defaultIPLMenuCommands
 * @text Trade
 * @type struct<LPlayerMenuOption> 
 * @desc Send trade request for another player
 * @default {"text:str":"Trade","visible:b":"true","switchId:i":"0","minDist:i":"1","value:i":"0"}
 * 
 * @param PlayerMenuItem_status:s
 * @parent defaultIPLMenuCommands
 * @text Status
 * @type struct<LPlayerMenuOption> 
 * @desc Show another player character status screen
 * @default {"text:str":"Status","visible:b":"true","switchId:i":"0","minDist:i":"0","value:i":"0"}
 * 
 * @param PlayerMenuItem_follow:s
 * @parent defaultIPLMenuCommands
 * @text Follow
 * @type struct<LPlayerMenuOption> 
 * @desc Start following another player character on map
 * @default {"text:str":"Follow","visible:b":"true","switchId:i":"0","minDist:i":"0","value:i":"0"}
 * 
 * @param userIPLMenuCommands:structA
 * @parent playerMenuSettingsGroup:b
 * @text Custom Commands
 * @type struct<LPlayerMenuOption>[]
 * @desc Your commands for player menu
 * @default []
 * 
 * @param tradeSettingsGroup
 * @parent gameModeSettingsGroup
 * @text Trade Settings
 * @desc [PRO] Trade between players
 * 
 * @param isTradeModalWindowActive:b
 * @parent tradeSettingsGroup
 * @type boolean
 * @text Is need trade confirm window?
 * @on YES
 * @off NO
 * @default true
 * @desc If false - trade will start immedently for paleyr when someone sent trade request for him
 * 
 * @param tradeModalWindow_openSE
 * @parent isTradeModalWindowActive:b
 * @text Confirm window SE
 * @type file
 * @require 1
 * @dir audio/se/
 * @default Bell3
 * @desc SE when trade confirm window is pop up
 * 
 * @param tradeModalWindow_text
 * @parent isTradeModalWindowActive:b
 * @text Trade request text
 * @default Accept \C[1]Trade\C[0] from \C[2]%1\C[0]?
 * @desc Trade confirm window text. %1 - another player name (who requested trade with you).
 * 
 * @param tradeModalWindow_hkYes
 * @parent isTradeModalWindowActive:b
 * @text Hotkey for Yes
 * @default y
 * @desc Hotkey for answer "Yes" (case sensetive)
 * 
 * @param tradeModalWindow_hkNo
 * @parent isTradeModalWindowActive:b
 * @text Hotkey for No
 * @default n
 * @desc Hotkey for answer "No" (case sensetive)
 * 
 * @param spacer|playerssettings @text‏‏‎ ‎@desc ===============================================
 * 
 * @param playersSettingsGroup
 * @text Players Settings
 * 
 * @param actorsForNetwork:intA
 * @parent playersSettingsGroup
 * @type actor[]
 * @text Actors
 * @default ["1","2","3","4"]
 * @desc Available actors for network game players.
 * 
 * @param maxPlayersInRoom:int
 * @text Players per Room
 * @parent playersSettingsGroup
 * @type number
 * @min 2
 * @default 4
 * @desc [PRO] Maximum players in one Room. Should be <= Actors count. Max 2 for BASIC version.
 * 
 * @param isActorSelectionAllowed:b
 * @parent playersSettingsGroup
 * @text Actor selection?
 * @type boolean
 * @default true
 * @desc Can player select actor in lobby?
 * 
 * @param isSinglePlayerStartAllowed:b
 * @parent playersSettingsGroup
 * @text One player start?
 * @type boolean
 * @default true
 * @desc If in room only 1 player (host), he can start game alone?
 * 
 * @param playerActorNameType
 * @parent playersSettingsGroup
 * @text Player Name for Actor
 * @type select
 * @option Not Show
 * @option Instead Name
 * @option Instead Nickname
 * @default Instead Nickname
 * @desc Show network player name instead of his Actor name (or nickname)
 * 
 * @param playerLeaveGameCommonEvent:int
 * @parent playersSettingsGroup
 * @text On Player Disconnect CE
 * @type common_event
 * @default 0
 * @desc That common event will be called when somebody leave (disconnect) game. 0 - nothing
 * 
 * @param globalData:s
 * @text Global Data
 * @type struct<LGlobalData>
 * @default {"globalVariablesIds:intA":"[]","globalSwitchesIds:intA":"[]"}
 * @desc All this data will be automatically synchronized between all players
 * 
 * @param spacer|othersettings @text‏‏‎ ‎@desc ===============================================
 * 
 * @param otherSettingsGroup
 * @text Other Settings
 * 
 * @param textInputMaxLength:i
 * @text Input Max Length
 * @parent otherSettingsGroup
 * @type number
 * @min 3
 * @default 12
 * @desc Input field (room or player name) max characters count
 * 
 * @param localeDB:struct
 * @text Localization
 * @parent otherSettingsGroup
 * @type struct<LLocaleDB>
 * @default {"network":"Network","createRoom":"Create Room","joinRoom":"Join Room","joinRandomRoom":"Join Random Room","settings":"Settings","start":"Start","leave":"Leave","joinGame":"Join Game","ready":"Ready","character":"Character","close":"Close","welcome":"Welcome, %1","playersCount":"Players on server: %1"}
 * @desc You can translate or change embedded plugin text
 * 
 * @param spacer|endHolder @text‏‏‎ ‎@desc ===============================================
 * 
 * @command EventStartOptions
 * @text Event Options
 * @desc Event network start options
 * 
 * @arg whoSelector
 * @text Who can start
 * @type select
 * @option All
 * @option Master
 * @option Master Except
 * @option Actor List
 * @option Actor List Except
 * @desc Select who can start this event
 * @default All
 * 
 * @arg actorList
 * @text Actors List
 * @type actor[]
 * @default []
 * @desc Actors list for 'Execute For' if you select 'Actor List' or 'Actor List Except'
 * 
 * @arg lockMode
 * @text Lock Event?
 * @type boolean
 * @default false
 * @desc If true - event will be locked while executed. Nobody can't start locked event
 * 
 * @arg sharedMode
 * @text Shared Mode
 * @type select
 * @option No
 * @option Strict
 * @option Optional
 * @desc Shared event - starts for all players simultaneously, synchronized commands execution
 * @default No
 * 
 * 
 * @command EventCommandSelector
 * @text Command Options
 * @desc Next Event Command network start options
 * 
 * @arg whoSelector
 * @text Execute for
 * @type select
 * @option All
 * @option Master
 * @option Master Except
 * @option Actor List
 * @option Actor List Except
 * @option Me Except
 * @desc Select for who this event command will be executed
 * @default All
 * 
 * @arg actorList
 * @text Actors List
 * @type actor[]
 * @default []
 * @desc Actors list for 'Execute For' if you select 'Actor List' or 'Actor List Except'
 * 
 * @arg scope
 * @text Scope
 * @type select
 * @option Same map
 * @option All world
 * @default Same map
 * @desc For which players will the virtual command be executed?
 * 
 * @arg executeMode
 * @text Execute Mode
 * @type select
 * @option Auto
 * @option Virtual
 * @option Common Event
 * @default Auto
 * @desc How this command will be exectuted for other players. Read Wiki for more info
 * 
 * @command SharedBattle
 * @text Set Shared Battle
 * @desc Make next Battle Processing command shared between all players
 * 
 * @arg battleId
 * @text ID
 * @default
 * @desc Unique battle ID. Empty - not shared battle (by default)
 * 
 * @command EMPTY_HOLDER
 * @text ‏
 * @desc
 * @default
 * 
 */
/*~struct~LConnectionSettings:
@param serverIp
@text IP
@type combo
@option localhost
@option anetzglobal.ru
@desc Server IP address (ip4) or domain name
@default anetzglobal.ru

@param serverPort
@text Port
@default 3034

@param isHttpsConnection:b
@text Is HTTPS (SSL) ?
@type boolean
@on Yes, https
@off No, http
@default false
@desc Is use secure connection via https protocol? anetzglobal.ru uses port 3035 for secure connection.
*/

/*~struct~LConnectionSettings:ru
@param serverIp
@text IP
@type combo
@option localhost
@option anetzglobal.ru
@desc Сервер IP адрес (ip4) или имя домена
@default anetzglobal.ru

@param serverPort
@text Порт
@default 3034

@param isHttpsConnection:b
@text Исп. HTTPS (SSL) ?
@type boolean
@on Да, https
@off Нет, http
@default false
@desc Использовать защищённое соединение через https протокол? anetzglobal.ru исп. порт 3035 для SSL.
*/


/*~struct~LGlobalData:
@param globalVariablesIds:intA
@type variable[]
@text Variables
@default []
@desc Variables for auto synchronizaton

@param globalSwitchesIds:intA
@type switch[]
@text Switches
@default []
@desc Switches for auto synchronizaton
*/

/*~struct~LGlobalData:ru
@param globalVariablesIds:intA
@type variable[]
@text Переменные
@default []
@desc Список переменных которые будут автоматически синхронизированы между всеми игроками

@param globalSwitchesIds:intA
@type switch[]
@text Переключатели
@default []
@desc Список переключателей которые будут автоматически синхронизированы между всеми игроками
*/

/*~struct~LLocaleDB:
@param network
@default Network

@param createRoom
@default Create Room

@param joinRoom
@default Join Room

@param joinRandomRoom
@default Join Random Room

@param settings
@default Settings

@param start
@default Start

@param leave
@default Leave

@param joinGame
@default Join Game

@param ready
@default Ready

@param character
@default Character

@param close
@default Close

@param welcome
@default Welcome, %1
@desc %1 will be replaced by Player Name

@param playersCount
@default Players on server: %1
@desc %1 will be replaced by players count (number)
*/

/*~struct~LLocaleDB:ru
@param network
@default Мультиплеер

@param createRoom
@default Создать комнату

@param joinRoom
@default Присоединиться

@param joinRandomRoom
@default Слуйчайная комната

@param settings
@default Настройки

@param start
@default Начать

@param leave
@default Покинуть

@param joinGame
@default Вступить

@param ready
@default Готов

@param character
@default Персонаж

@param close
@default Закрыть

@param welcome
@default Привет, %1
@desc %1 будет заменён на имя игрока

@param playersCount
@default Игроков на сервере: %1
@desc %1 будет заменён на количество игроков (число)
*/

/*~struct~LPlayerMenuOption:
 @param text:str
 @text Title
 @type text 
 @desc Option title. Supports control-characters, like \C[x] for color
 @default Option 

 @param visible:b
 @text Is Visible?
 @type boolean 
 @on Yes
 @off No
 @desc Is this option visible in Player Menu? If false - not appears in menu at all
 @default true 

 @param switchId:i
 @text Switch ID
 @type switch 
 @desc Switch ID for enable this option. 0 - always enabled, no any switch
 @default 0 

 @param minDist:i
 @text Active distance
 @type number 
 @min 0
 @max 100
 @desc Minimum distance between players for enable this option. 0 - any distance, no limit
 @default 0

 @param value:i
 @text Common Event
 @type common_event
 @desc Common event ID for this command
 @default 0
*/

/*~struct~LPlayerMenuOption:ru
 @param text:str
 @text Заголовок
 @type text 
 @desc Заголовок пунтка меню. Поддерживает символы управления как и сообщения, например \C[x] для смены цвета
 @default Моя опция 

 @param visible:b
 @text Видимость
 @type boolean 
 @on Да
 @off Нет
 @desc Эту опцию будет видно в меню игрока? Если НЕТ - вообще не появится в меню
 @default true 

 @param switchId:i
 @text Переключатель
 @type switch 
 @desc Переключатель для активации этой опции. 0 - всегда активна
 @default 0 

 @param minDist:i
 @text Дистанция
 @type number 
 @min 0
 @max 100
 @desc Минимальная дистанция между игроками для активации этой опции. 0 - всегда активна
 @default 0

 @param value:i
 @text Событие
 @type common_event
 @desc Общее событие, которое будет вызвано при выборе этой опции меню
 @default 0
*/

/*:ru
 * @plugindesc (v.0.7.5)[BASIC] Мультиплеер для RPG Maker
 * @author Pheonix KageDesu
 * @target MZ MV
 * @url https://kdworkshop.net/plugins/alpha-net-z/
 *
 * @help
 *
 * Alpha NET Z плагин всё ещё находится в активной разработке
 *
 * Сайт: https://kdworkshop.net/plugins/alpha-net-z/
 * Документация: https://github.com/KageDesu/Alpha-NET-Z/wiki
 * (пока только на английском)
 *
 * Необходимые плагину файлы:
 *  - файл css\anet.css
 *  - папка img\Alpha\*все картинки*
 *
 *

 * @param ANETZ @text @desc
 * 
 * 
 * @param connection:s
 * @text Соединение
 * @type struct<LConnectionSettings>
 * @default {"serverIp":"anetzglobal.ru","serverPort":"3034","isHttpsConnection:b":"false"}
 * @desc [PRO] Настройки подключения к серверу
 * 
 * 
 * @param spacer|gamesettings @text‏‏‎ ‎@desc ===============================================
 * 
 * @param gameModeSettingsGroup
 * @text Мультиплеер
 * 
 * @param onlySameMap:b
 * @parent gameModeSettingsGroup
 * @type boolean
 * @text Ждать игроков при смене карты?
 * @default false
 * @desc Когда игрок перемещается на другую карту, он будет ждать пока все остальные не перейдут на данную карту вместе с ним
 * 
 * @param singlePlayerAllowed:b
 * @parent gameModeSettingsGroup
 * @type boolean
 * @text Одиночная игра?
 * @default true
 * @desc Если ВЫКЛ., то пункт "Новая игра" (одиночная) не появится в главном меню
 * 
 * @param roomFilter:b
 * @parent gameModeSettingsGroup
 * @type boolean
 * @text Фильтр комнат
 * @on ВКЛ
 * @off ВЫКЛ
 * @default false
 * @desc [PRO] Если фильтр ВКЛ., то игрок будет видеть все комнаты только данной (аналогичной) игры
 * 
 * @param joinStartedAllowed:b
 * @parent gameModeSettingsGroup
 * @type boolean
 * @text Присоединение к игре
 * @default false
 * @desc Если ВКЛ., игрок сможет подключаться к комнатам с уже запущенной игрой
 * 
 * @param joinStartedAndLoadedAllowed:b
 * @parent joinStartedAllowed:b
 * @type boolean
 * @text Присоединение к загруженной игре
 * @default true
 * @desc Если ВКЛ., игрок сможет подключаться к запущенной игре, которая была загруженная из файла сохранения
 * 
 * 
 * @param onJoinCE:int
 * @parent joinStartedAllowed:b
 * @text Общее событие
 * @type common_event
 * @default 0
 * @desc Общее событие для ТЕКУЩЕГО игрока, когда он присоединился к игре.
 * 
 * @param isJoinRandomOptionExists:b
 * @parent gameModeSettingsGroup
 * @type boolean
 * @text Случайная комната
 * @default true
 * @desc Показывать опцию присоединиться к случайной комнате в сетевом меню?
 * 
 * @param saveLoadGame:b
 * @parent gameModeSettingsGroup
 * @type boolean
 * @text Сохранение и загрузка
 * @on YES
 * @off NO
 * @default true
 * @desc Может ли игрок сохранять и загружать сетевую игру?
 * 
 * @param networkStatusIcons:b
 * @parent gameModeSettingsGroup
 * @type boolean
 * @text Иконки-статусы
 * @on YES
 * @off NO
 * @default true
 * @desc Показывать иконки-статусы над головой другого игрока? (меню, событие, битва, ...)
 * 
 * @param inGameChat:b
 * @parent gameModeSettingsGroup
 * @type boolean
 * @text Чат?
 * @on YES
 * @off NO
 * @default false
 * @desc [PRO] Включить чат в игре? (Больше настроек чата будет добавлено позже...)
 * 
 * @param chatStartMessage
 * @parent inGameChat:b
 * @text Начальное сообщение
 * @default \}Welcome to Alpha NET Z, \C[1]'T'\C[6] to chat
 * @desc Сообщение приветствие в чате
 * 
 * @param chatOpenCloseKey
 * @parent inGameChat:b
 * @text Открыть чат
 * @default t
 * @desc Кнопка чтобы открыть \ закрыть окно чата в игре
 * 
 * @param chatSayKey
 * @parent inGameChat:b
 * @text Сказать в чат
 * @default t
 * @desc Кнопка чтобы открыть сцену ввода сообщения (только когда чат открыт) Может быть одинаковой с кнопкой открыть чат
 * 
 * @param clickOnChatToSay:b
 * @parent inGameChat:b
 * @type boolean
 * @text Нажать что сказать?
 * @on YES
 * @off NO
 * @default true
 * @desc Можно ли нажать мышкой на оконо чата чтобы открыть сцену ввода? (только когда чат открыт)
 * 
 * @param playerMenuSettingsGroup:b
 * @parent gameModeSettingsGroup
 * @type boolean
 * @text Меню игрока
 * @on YES
 * @off NO
 * @default true
 * @desc [PRO] Меню игрока будет работать в игре? (Открыть меню - нажать правой кнопкой по другому игроку)
 * 
 * @param defaultIPLMenuCommands
 * @parent playerMenuSettingsGroup:b
 * @text Стандартные пункты меню
 * @desc Default menu commands
 * 
 * @param PlayerMenuItem_trade:s
 * @parent defaultIPLMenuCommands
 * @text Торговать
 * @type struct<LPlayerMenuOption> 
 * @desc Отправить запрос торговли другому игроку
 * @default {"text:str":"Trade","visible:b":"true","switchId:i":"0","minDist:i":"1","value:i":"0"}
 * 
 * @param PlayerMenuItem_status:s
 * @parent defaultIPLMenuCommands
 * @text Статус
 * @type struct<LPlayerMenuOption> 
 * @desc Посмотреть окно статуса другого игрока
 * @default {"text:str":"Status","visible:b":"true","switchId:i":"0","minDist:i":"0","value:i":"0"}
 * 
 * @param PlayerMenuItem_follow:s
 * @parent defaultIPLMenuCommands
 * @text Следовать
 * @type struct<LPlayerMenuOption> 
 * @desc Начать следовать за другим игроком (только текущая карта)
 * @default {"text:str":"Follow","visible:b":"true","switchId:i":"0","minDist:i":"0","value:i":"0"}
 * 
 * @param userIPLMenuCommands:structA
 * @parent playerMenuSettingsGroup:b
 * @text Пользовательские пункты меню
 * @type struct<LPlayerMenuOption>[]
 * @desc Вы можете добавить в меню свои комманды
 * @default []
 * 
 * @param tradeSettingsGroup
 * @parent gameModeSettingsGroup
 * @text Настройки обмена
 * @desc [PRO] Торговля (обмен) между игроками
 * 
 * @param isTradeModalWindowActive:b
 * @parent tradeSettingsGroup
 * @type boolean
 * @text Потверждение?
 * @on YES
 * @off NO
 * @default true
 * @desc Нужно ли потверждение торговли другим игроком?
 * 
 * @param tradeModalWindow_openSE
 * @parent isTradeModalWindowActive:b
 * @text Звук
 * @type file
 * @require 1
 * @dir audio/se/
 * @default Bell3
 * @desc SE звук когда окно потверждения появляется на экране
 * 
 * @param tradeModalWindow_text
 * @parent isTradeModalWindowActive:b
 * @text Текст
 * @default Accept \C[1]Trade\C[0] from \C[2]%1\C[0]?
 * @desc Текст окна потверждения. %1 - имя другого игрока, который запрашивает обмен с текущим игроком
 * 
 * @param tradeModalWindow_hkYes
 * @parent isTradeModalWindowActive:b
 * @text Кнопка ДА
 * @default y
 * @desc Кнопка на клавиатуре для быстрого ответа Да
 * 
 * @param tradeModalWindow_hkNo
 * @parent isTradeModalWindowActive:b
 * @text Кнопка НЕТ
 * @default n
 * @desc Кнопка на клавиатуре для быстрого ответа Нет
 * 
 * @param spacer|playerssettings @text‏‏‎ ‎@desc ===============================================
 * 
 * @param playersSettingsGroup
 * @text Настройки игроков
 * 
 * @param actorsForNetwork:intA
 * @parent playersSettingsGroup
 * @type actor[]
 * @text Персонажи
 * @default ["1","2","3","4"]
 * @desc Персонажи которые будут доступны в сетевой игре
 * 
 * @param maxPlayersInRoom:int
 * @text Кол-во игроков
 * @parent playersSettingsGroup
 * @type number
 * @min 2
 * @default 4
 * @desc [PRO] Макс. кол-во игроков в комнате. 2 - для базовой версии. Число не должно превыщать кол-во персонажей (Персонажи)
 * 
 * @param isActorSelectionAllowed:b
 * @parent playersSettingsGroup
 * @text Выбор персонажа?
 * @type boolean
 * @default true
 * @desc Может ли игрок выбирать персонажа перед началом игры?
 * 
 * @param isSinglePlayerStartAllowed:b
 * @parent playersSettingsGroup
 * @text Один игрок
 * @type boolean
 * @default true
 * @desc Можно ли стартовать сетевую игру если только один игрок в комнате (хост)?
 * 
 * @param playerActorNameType
 * @parent playersSettingsGroup
 * @text Имя игрока
 * @type select
 * @option Not Show
 * @option Instead Name
 * @option Instead Nickname
 * @default Instead Nickname
 * @desc Как будет отображаться имя игрока в игре
 * 
 * @param playerLeaveGameCommonEvent:int
 * @parent playersSettingsGroup
 * @text Покинул игру
 * @type common_event
 * @default 0
 * @desc Общее событие, которое будет вызвано у всех, когда кто-то покидает игру (выходит)
 * 
 * @param globalData:s
 * @text Глобальные данные
 * @type struct<LGlobalData>
 * @default {"globalVariablesIds:intA":"[]","globalSwitchesIds:intA":"[]"}
 * @desc Эти данные будут автоматически синхронизироваться между всеми игроками
 * 
 * @param spacer|othersettings @text‏‏‎ ‎@desc ===============================================
 * 
 * @param otherSettingsGroup
 * @text Другое
 * 
 * @param textInputMaxLength:i
 * @text Макс. длина текста
 * @parent otherSettingsGroup
 * @type number
 * @min 3
 * @default 12
 * @desc Макс. допустимая длина текста для названия комнаты или имени игрока
 * 
 * @param localeDB:struct
 * @text Локализация
 * @parent otherSettingsGroup
 * @type struct<LLocaleDB>
 * @default {"network":"Network","createRoom":"Create Room","joinRoom":"Join Room","joinRandomRoom":"Join Random Room","settings":"Settings","start":"Start","leave":"Leave","joinGame":"Join Game","ready":"Ready","character":"Character","close":"Close","welcome":"Welcome, %1","playersCount":"Players on server: %1"}
 * @desc Изменение и перевод служебного текста плагина
 * 
 * @param spacer|endHolder @text‏‏‎ ‎@desc ===============================================
 * 
 * @command EventStartOptions
 * @text Правила запуска события
 * @desc Задать правила запуска события
 * 
 * @arg whoSelector
 * @text Кто может запустить?
 * @type select
 * @option All
 * @option Master
 * @option Master Except
 * @option Actor List
 * @option Actor List Except
 * @desc Кто может запустить данное событие
 * @default All
 * 
 * @arg actorList
 * @text Персонажи
 * @type actor[]
 * @default []
 * @desc Список персонажей для опции 'Execute For' если вы выбрали 'Actor List' или 'Actor List Except'
 * 
 * @arg lockMode
 * @text Блокировка события?
 * @type boolean
 * @default false
 * @desc Если Да - событие будет заблокировано при запуске. Никто другой не может запустить такое событие.
 * 
 * @arg sharedMode
 * @text Общий режим
 * @type select
 * @option No
 * @option Strict
 * @option Optional
 * @desc Общее событие - запускается для всех игроков на карте сразу, команды будут выполняться синхронизировано одинаково для всех
 * @default No
 * 
 * 
 * @command EventCommandSelector
 * @text Правила запуска команды
 * @desc Задать правила запуска следующей команды события
 * 
 * @arg whoSelector
 * @text Кто может запустить?
 * @type select
 * @option All
 * @option Master
 * @option Master Except
 * @option Actor List
 * @option Actor List Except
 * @option Me Except
 * @desc Кто может запустить следующую команду события
 * @default All
 * 
 * @arg actorList
 * @text Персонажи
 * @type actor[]
 * @default []
 * @desc Список персонажей для опции 'Execute For' если вы выбрали 'Actor List' или 'Actor List Except'
 * 
 * @arg scope
 * @text Область
 * @type select
 * @option Same map
 * @option All world
 * @default Same map
 * @desc Для всех игроков (All world) или только на текущей карте будет выполняться команда?
 * 
 * @arg executeMode
 * @text Режим
 * @type select
 * @option Auto
 * @option Virtual
 * @option Common Event
 * @default Auto
 * @desc Как именно данная команда будет выполнена для других игроков. Читайте документацию.
 * 
 * @command SharedBattle
 * @text Общ. битва
 * @desc Сделать следующую битву общей - другой игрок сможет присоединиться к битве
 * 
 * @arg battleId
 * @text ID
 * @default
 * @desc Уникальный идентификатор битвы. Пусто - битва НЕ будет общей (только локальной)
 * 
 * @command EMPTY_HOLDER
 * @text ‏
 * @desc
 * @default
 * 
 */

// * INITIAL S FILE

var Imported = Imported || {};
Imported.Alpha_NETZ = true;

var ANET = {};
ANET.Version = 75; // 0.7.5

ANET.MinServerRev = 114; // * Необходимая ревизия сервера

// * Данный символ переопределяется в 1_DevSymbol_TEST как dev
ANET._define = 'build'; // * По умолчанию -> сборка

ANET.link = function (library) {
    this[library.name] = library;
};

ANET.isDEV = function () {
    return ANET._define == 'dev';
};

ANET.w = (e) => KDCore.warning('', e);


/*
# ==========================================================================
# ==========================================================================
#
#   EMBEDDED PHEONIX KAGEDESU PLUGINS CORE LIBRARY
#   (This plugin may not use the entire code of this library)
#
# ==========================================================================
# ==========================================================================
 * 


 * 


 */

// Generated by CoffeeScript 2.6.1
// ==========================================================================
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ KDCore.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
// * LIBRARY WITH MZ AND MZ SUPPORT
//! {OUTER FILE}

//?rev 01.02.22
var KDCore;

window.Imported = window.Imported || {};

Imported.KDCore = true;

KDCore = KDCore || {};

// * Двузначные числа нельзя в версии, сравнение идёт по первой цифре поулчается (3.43 - нельзя, можно 3.4.3)
//%[МЕНЯТЬ ПРИ ИЗМЕНЕНИИ]
KDCore._fileVersion = '2.8';

// * Методы и библиотеки данной версии
KDCore._loader = 'loader_' + KDCore._fileVersion;

KDCore[KDCore._loader] = [];

// * Добавить библиотеку на загрузку
KDCore.registerLibraryToLoad = function(lib) {
  return KDCore[KDCore._loader].push(lib);
};

if ((KDCore.Version != null) && KDCore.Version >= KDCore._fileVersion) {
  // * ПРОПУСКАЕМ ЗАГРУЗКУ, так как уже загруженна более новая
  console.log('XDev KDCore ' + KDCore._fileVersion + ' skipped by new or exists version');
  KDCore._requireLoadLibrary = false;
} else {
  KDCore.Version = KDCore._fileVersion;
  KDCore.LIBS = KDCore.LIBS || {};
  KDCore.register = function(library) {
    return this.LIBS[library.name] = library;
  };
  window.KDCore = KDCore;
  // * ТРЕБУЕТСЯ ЗАГРУЗКА БИБЛИОТЕК
  KDCore._requireLoadLibrary = true;
}

// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  Array.prototype.delete = function() {
    var L, a, ax, what;
    what = void 0;
    a = arguments;
    L = a.length;
    ax = void 0;
    while (L && this.length) {
      what = a[--L];
      while ((ax = this.indexOf(what)) !== -1) {
        this.splice(ax, 1);
      }
    }
    return this;
  };
  Array.prototype.max = function() {
    return Math.max.apply(null, this);
  };
  Array.prototype.min = function() {
    return Math.min.apply(null, this);
  };
  Array.prototype.sample = function() {
    if (this.length === 0) {
      return [];
    }
    return this[KDCore.SDK.rand(0, this.length - 1)];
  };
  Array.prototype.first = function() {
    return this[0];
  };
  Array.prototype.last = function() {
    return this[this.length - 1];
  };
  Array.prototype.shuffle = function() {
    var k, n, v;
    n = this.length;
    while (n > 1) {
      n--;
      k = KDCore.SDK.rand(0, n + 1);
      v = this[k];
      this[k] = this[n];
      this[n] = v;
    }
  };
  Array.prototype.count = function() {
    return this.length;
  };
  Array.prototype.isEmpty = function() {
    return this.length === 0;
  };
  // * Ищет элемент, у которого поле ID == id
  Array.prototype.getById = function(id) {
    return this.getByField('id', id);
  };
  // * Ищет элемент, у которого поле FIELD (имя поля) == value
  return Array.prototype.getByField = function(field, value) {
    var e;
    try {
      return this.find(function(item) {
        return item[field] === value;
      });
    } catch (error) {
      e = error;
      console.warn(e);
      return null;
    }
  };
});

// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  Number.prototype.do = function(method) {
    return KDCore.SDK.times(this, method);
  };
  Number.prototype.clamp = function(min, max) {
    return Math.min(Math.max(this, min), max);
  };
  return Number.prototype.any = function(number) {
    return (number != null) && number > 0;
  };
});

// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  String.prototype.toCss = function() {
    return KDCore.Color.FromHex(this).CSS;
  };
  String.prototype.toCSS = function() {
    return this.toCss();
  };
  String.prototype.isEmpty = function() {
    return this.length === 0 || !this.trim();
  };
  String.isNullOrEmpty = function(str) {
    return (str == null) || str.isEmpty();
  };
  String.any = function(str) {
    return !String.isNullOrEmpty(str);
  };
  return String.prototype.replaceAll = function(search, replacement) {
    var target;
    target = this;
    return target.split(search).join(replacement);
  };
});

// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  KDCore.isMV = function() {
    return Utils.RPGMAKER_NAME.contains("MV");
  };
  KDCore.isMZ = function() {
    return !KDCore.isMV();
  };
  KDCore.warning = function(msg, error) {
    if (msg != null) {
      console.warn(msg);
    }
    if (error != null) {
      console.warn(error);
    }
  };
  KDCore.makeid = function(length) {
    var characters, charactersLength, i, result;
    result = '';
    characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    charactersLength = characters.length;
    i = 0;
    while (i < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      i++;
    }
    return result;
  };
  return KDCore.makeId = function() {
    return KDCore.makeid(...arguments);
  };
});

// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  var SDK;
  //?[DEPRECATED]
  // * SDK
  //------------------------------------------------------------------------------
  SDK = function() {
    throw new Error('This is a static class');
  };
  SDK.rand = function(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
  };
  SDK.setConstantToObject = function(object, constantName, constantValue) {
    object[constantName] = constantValue;
    if (typeof object[constantName] === 'object') {
      Object.freeze(object[constantName]);
    }
    Object.defineProperty(object, constantName, {
      writable: false
    });
  };
  SDK.convertBitmapToBase64Data = function(bitmap) {
    return bitmap._canvas.toDataURL('image/png');
  };
  SDK.times = function(times, method) {
    var i, results;
    i = 0;
    results = [];
    while (i < times) {
      method(i);
      results.push(i++);
    }
    return results;
  };
  SDK.toGlobalCoord = function(layer, coordSymbol = 'x') {
    var node, t;
    t = layer[coordSymbol];
    node = layer;
    while (node) {
      t -= node[coordSymbol];
      node = node.parent;
    }
    return (t * -1) + layer[coordSymbol];
  };
  SDK.canvasToLocalX = function(layer, x) {
    while (layer) {
      x -= layer.x;
      layer = layer.parent;
    }
    return x;
  };
  SDK.canvasToLocalY = function(layer, y) {
    while (layer) {
      y -= layer.y;
      layer = layer.parent;
    }
    return y;
  };
  SDK.isInt = function(n) {
    return Number(n) === n && n % 1 === 0;
  };
  SDK.isFloat = function(n) {
    return Number(n) === n && n % 1 !== 0;
  };
  SDK.checkSwitch = function(switchValue) {
    if (switchValue === 'A' || switchValue === 'B' || switchValue === 'C' || switchValue === 'D') {
      return true;
    }
    return false;
  };
  SDK.toNumber = function(string, none = 0) {
    var number;
    if (string == null) {
      return none;
    }
    number = Number(string);
    if (isNaN(number)) {
      return none;
    }
    return number;
  };
  //@[EXTEND]
  return KDCore.SDK = SDK;
});

// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  var __alias_Bitmap_blt_kdCore, __alias_Bitmap_fillAll_kdCore;
  //@[ALIAS]
  __alias_Bitmap_fillAll_kdCore = Bitmap.prototype.fillAll;
  Bitmap.prototype.fillAll = function(color) {
    if (color instanceof KDCore.Color) {
      return this.fillRect(0, 0, this.width, this.height, color.CSS);
    } else {
      return __alias_Bitmap_fillAll_kdCore.call(this, color);
    }
  };
  //@[ALIAS]
  __alias_Bitmap_blt_kdCore = Bitmap.prototype.blt;
  Bitmap.prototype.blt = function(source, sx, sy, sw, sh, dx, dy, dw, dh) {
    if (this._needModBltDWH > 0) {
      dh = dw = this._needModBltDWH;
      __alias_Bitmap_blt_kdCore.call(this, source, sx, sy, sw, sh, dx, dy, dw, dh);
      this._needModBltDWH = null;
    } else {
      __alias_Bitmap_blt_kdCore.call(this, ...arguments);
    }
  };
  Bitmap.prototype.drawIcon = function(x, y, icon, size = 32) {
    var bitmap;
    bitmap = null;
    if (icon instanceof Bitmap) {
      bitmap = icon;
    } else {
      bitmap = KDCore.BitmapSrc.LoadFromIconIndex(icon).bitmap;
    }
    return this.drawOnMe(bitmap, x, y, size, size);
  };
  Bitmap.prototype.drawOnMe = function(bitmap, x = 0, y = 0, sw = 0, sh = 0) {
    if (sw <= 0) {
      sw = bitmap.width;
    }
    if (sh <= 0) {
      sh = bitmap.height;
    }
    this.blt(bitmap, 0, 0, bitmap.width, bitmap.height, x, y, sw, sh);
  };
  Bitmap.prototype.drawInMe = function(bitmap) {
    return Bitmap.prototype.drawOnMe(bitmap, 0, 0, this.width, this.height);
  };
  return Bitmap.prototype.drawTextFull = function(text, position = 'center') {
    return this.drawText(text, 0, 0, this.width, this.height, position);
  };
});

// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  var _input_onKeyDown, _input_onKeyUp, i, j, k, l;
  Input.KeyMapperPKD = {};
//Numbers
  for (i = j = 48; j <= 57; i = ++j) {
    Input.KeyMapperPKD[i] = String.fromCharCode(i);
  }
//Letters Upper
  for (i = k = 65; k <= 90; i = ++k) {
    Input.KeyMapperPKD[i] = String.fromCharCode(i).toLowerCase();
  }
//Letters Lower (for key code events)
  for (i = l = 97; l <= 122; i = ++l) {
    Input.KeyMapperPKD[i] = String.fromCharCode(i).toLowerCase();
  }
  
  //@[ALIAS]
  _input_onKeyDown = Input._onKeyDown;
  Input._onKeyDown = function(event) {
    _input_onKeyDown.call(this, event);
    if (Input.keyMapper[event.keyCode]) {
      return;
    }
    Input._setStateWithMapperPKD(event.keyCode);
  };
  //@[ALIAS]
  _input_onKeyUp = Input._onKeyUp;
  Input._onKeyUp = function(event) {
    _input_onKeyUp.call(this, event);
    if (Input.keyMapper[event.keyCode]) {
      return;
    }
    Input._setStateWithMapperPKD(event.keyCode, false);
  };
  //?NEW
  Input._setStateWithMapperPKD = function(keyCode, state = true) {
    var symbol;
    symbol = Input.KeyMapperPKD[keyCode];
    if (symbol != null) {
      return this._currentState[symbol] = state;
    }
  };
  //?NEW
  Input.isCancel = function() {
    return Input.isTriggered('cancel') || TouchInput.isCancelled();
  };
  //?NEW
  return TouchInput.toPoint = function() {
    return new KDCore.Point(TouchInput.x, TouchInput.y);
  };
});

// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  PluginManager.getPluginParametersByRoot = function(rootName) {
    var pluginParameters, property;
    for (property in this._parameters) {
      if (this._parameters.hasOwnProperty(property)) {
        pluginParameters = this._parameters[property];
        if (PluginManager.isPluginParametersContentKey(pluginParameters, rootName)) {
          return pluginParameters;
        }
      }
    }
    return PluginManager.parameters(rootName);
  };
  return PluginManager.isPluginParametersContentKey = function(pluginParameters, key) {
    return pluginParameters[key] != null;
  };
});

// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  var ___Sprite_alias_Move_KDCORE_2;
  Sprite.prototype.moveToCenter = function(dx = 0, dy = 0) {
    return this.move(-this.bitmap.width / 2 + dx, -this.bitmap.height / 2 + dy);
  };
  Sprite.prototype.setStaticAnchor = function(floatX = 1, floatY = 1) {
    this.x -= Math.round(this.width * floatX);
    this.y -= Math.round(this.height * floatY);
  };
  Sprite.prototype.moveToParentCenter = function() {
    if (!this.parent) {
      return;
    }
    return this.move(this.parent.width / 2, this.parent.height / 2);
  };
  ___Sprite_alias_Move_KDCORE_2 = Sprite.prototype.move;
  Sprite.prototype.move = function(x, y) {
    if (x instanceof Array) {
      return ___Sprite_alias_Move_KDCORE_2.call(this, x[0], x[1]);
    } else if (x instanceof KDCore.Point || ((x != null ? x.x : void 0) != null)) {
      return ___Sprite_alias_Move_KDCORE_2.call(this, x.x, x.y);
    } else if ((x != null) && (x._x != null)) {
      return ___Sprite_alias_Move_KDCORE_2.call(this, x._x, x._y);
    } else {
      return ___Sprite_alias_Move_KDCORE_2.call(this, x, y);
    }
  };
  Sprite.prototype.isContainsPoint = function(point) {
    var rect, rx, ry;
    if (this.width === 0 || this.height === 0) {
      return false;
    }
    rx = KDCore.SDK.toGlobalCoord(this, 'x');
    ry = KDCore.SDK.toGlobalCoord(this, 'y');
    rect = this._getProperFullRect(rx, ry);
    return rect.contains(point.x, point.y);
  };
  // * Возвращает Rect с учётом Scale и Anchor спрайта
  Sprite.prototype._getProperFullRect = function(rx, ry) {
    var height, width, x, y;
    width = this.width * Math.abs(this.scale.x);
    height = this.height * Math.abs(this.scale.y);
    x = rx - this.anchor.x * width;
    y = ry - this.anchor.y * height;
    if (this.anchor.x === 0 && this.scale.x < 0) {
      x += this.width * this.scale.x;
    }
    if (this.anchor.y === 0 && this.scale.y < 0) {
      y += this.height * this.scale.y;
    }
    return new PIXI.Rectangle(x, y, width, height);
  };
  Sprite.prototype.fillAll = function(color) {
    if (color != null) {
      return this.bitmap.fillAll(color);
    } else {
      return this.fillAll(KDCore.Color.WHITE);
    }
  };
  return Sprite.prototype.removeFromParent = function() {
    if (this.parent != null) {
      return this.parent.removeChild(this);
    }
  };
});

// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  return TouchInput.toMapPoint = function() {
    return this.toPoint().convertToMap();
  };
});

// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  KDCore.Utils = KDCore.Utils || {};
  return (function() {
    var _;
    _ = KDCore.Utils;
    _.getJDataById = function(id, source) {
      var d, j, len;
      for (j = 0, len = source.length; j < len; j++) {
        d = source[j];
        if (d.id === id) {
          return d;
        }
      }
      return null;
    };
    _.hasMeta = function(symbol, obj) {
      return (obj.meta != null) && (obj.meta[symbol] != null);
    };
    _.getValueFromMeta = function(symbol, obj) {
      if (!_.hasMeta(symbol, obj)) {
        return null;
      }
      return obj.meta[symbol];
    };
    _.getNumberFromMeta = function(symbol, obj) {
      var value;
      if (!_.hasMeta(symbol, obj)) {
        return null;
      }
      if (obj.meta[symbol] === true) {
        return 0;
      } else {
        value = KDCore.SDK.toNumber(obj.meta[symbol], 0);
      }
      return value;
    };
    _.isSceneMap = function() {
      try {
        return !SceneManager.isSceneChanging() && SceneManager._scene instanceof Scene_Map;
      } catch (error) {
        return false;
      }
    };
    _.isSceneBattle = function() {
      try {
        return !SceneManager.isSceneChanging() && SceneManager._scene instanceof Scene_Battle;
      } catch (error) {
        return false;
      }
    };
    _.getEventCommentValue = function(commentCode, list) {
      var comment, e, i, item;
      try {
        if (list && list.length > 1) {
          i = 0;
          while (i < list.length) {
            item = list[i++];
            if (!item) {
              continue;
            }
            if (item.code === 108) {
              comment = item.parameters[0];
              if (comment.contains(commentCode)) {
                return comment;
              }
            }
          }
        }
      } catch (error) {
        e = error;
        console.warn(e);
      }
      return null;
    };
    _.getEventCommentValueArray = function(commentCode, list) {
      var comment, comments, e, i, item;
      try {
        comments = [];
        if (list && list.length > 1) {
          i = 0;
          while (i < list.length) {
            item = list[i++];
            if (!item) {
              continue;
            }
            if (item.code === 108) {
              comment = item.parameters[0];
              if (comment.contains(commentCode)) {
                comments.push(comment);
              }
            }
          }
        }
      } catch (error) {
        e = error;
        console.warn(e);
      }
      return comments;
    };
    _.getPositionPointFromJSON = function(jsonSettings) {
      return _.convertPositionPointFromJSON(jsonSettings.position);
    };
    _.convertPositionPointFromJSON = function(position) {
      var e, x, y;
      try {
        x = position[0];
        y = position[1];
        if (!KDCore.SDK.isInt(x)) {
          x = eval(x);
        }
        if (!KDCore.SDK.isInt(y)) {
          y = eval(y);
        }
        return new KDCore.Point(x, y);
      } catch (error) {
        e = error;
        console.warn('Utils.getPositionPointFromJSON', e);
        return KDCore.Point.Empty;
      }
    };
    _.jsonPos = function(jsonPosition) {
      return _.convertPositionPointFromJSON(jsonPosition);
    };
    _.jsonPosXY = function(jsonPosition) {
      var e, x, y;
      try {
        ({x, y} = jsonPosition);
        return new KDCore.Point(eval(x), eval(y));
      } catch (error) {
        e = error;
        console.warn('Utils.jsonPosXY', e);
        return KDCore.Point.Empty;
      }
    };
    _.getVar = function(id) {
      return $gameVariables.value(id);
    };
    _.setVar = function(id, value) {
      return $gameVariables.setValue(id, value);
    };
    _.addToVar = function(id, value) {
      var prevVal;
      prevVal = _.getVar(id);
      return _.setVar(id, prevVal + value);
    };
    _.playSE = function(seFileName, pitch = 100, volume = 100) {
      var sound;
      if (seFileName == null) {
        return;
      }
      if (seFileName === "") {
        return;
      }
      sound = {
        name: seFileName,
        pan: 0,
        pitch: pitch,
        volume: volume
      };
      AudioManager.playStaticSe(sound);
    };
    _.getItemTypeId = function(item) {
      if (DataManager.isWeapon(item)) {
        return 1;
      } else if (DataManager.isArmor(item)) {
        return 2;
      }
      return 0;
    };
    _.getItemByType = function(itemId, typeId) {
      var data;
      data = [$dataItems, $dataWeapons, $dataArmors];
      return data[typeId][itemId];
    };
    _.loadFont = function(name) {
      if (!KDCore.isMZ()) {
        return;
      }
      if (String.isNullOrEmpty(name)) {
        return;
      }
      if (FontManager._states[name] != null) {
        return;
      }
      FontManager.load(name, name + ".ttf");
    };
    _.convertTimeShort = function(seconds) {
      var e;
      try {
        if (seconds > 59) {
          return Math.floor(seconds / 60) + 'm';
        } else {
          return seconds;
        }
      } catch (error) {
        e = error;
        console.warn(e);
        return seconds;
      }
    };
    _.isPointInScreen = function(point, margin = 10) {
      var maxH, maxW, screenMargin, x, y;
      ({x, y} = point);
      maxW = Graphics.width;
      maxH = Graphics.height;
      // * Граница от краёв экрана
      screenMargin = margin;
      if (x < screenMargin) {
        return false;
      }
      if (y < screenMargin) {
        return false;
      }
      if (x > (maxW - screenMargin)) {
        return false;
      }
      if (y > (maxH - screenMargin)) {
        return false;
      }
      return true;
    };
    // * Ассинхронная загрузка изображения, возвращает bitmap, когда загружен
    // * Пример использования loadImageAsync(a, b).then(метод)
    // в метод будет передан bitmap первым аргументом
    _.loadImageAsync = async function(folder, filename) {
      var promise;
      promise = new Promise(function(resolve, reject) {
        var b;
        b = ImageManager.loadBitmap("img/" + folder + "/", filename);
        return b.addLoadListener(function() {
          return resolve(b);
        });
      });
      return (await promise);
    };
  })();
});

// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  return Window_Base.prototype.drawFaceWithCustomSize = function(faceName, faceIndex, x, y, finalSize) {
    this.contents._needModBltDWH = finalSize;
    this.drawFace(faceName, faceIndex, x, y);
  };
});

// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  return (function() {    // * Input Extension: KDGamepad
    //------------------------------------------------------------------------------
    // * Поддержка расширенного управления через геймпад (свой модуль)
    var ALIAS___updateGamepadState, _;
    //@[DEFINES]
    _ = Input;
    // * Активировать работу модуля KDGamepad
    _.activateExtendedKDGamepad = function() {
      return _._kdIsGamepadExtended = true;
    };
    //@[ALIAS]
    ALIAS___updateGamepadState = _._updateGamepadState;
    _._updateGamepadState = function(gamepad) {
      if (Input._kdIsGamepadExtended === true) {
        KDGamepad.update();
      }
      if ((typeof $gameTemp !== "undefined" && $gameTemp !== null ? $gameTemp.__kdgpStopDefaultGamepad : void 0) === true) {
        return;
      }
      // * Режим перемещения без DPad
      // * В оригинале игрок также ходит по DPad клавишам, что может быть не удобно
      // * например при работе с инвентарём
      if (KDGamepad.isNoDPadMoving()) {
        if (KDGamepad.isDPadAny()) {
          Input.clear();
          return;
        }
      }
      ALIAS___updateGamepadState.call(this, gamepad);
    };
    window.KDGamepad = function() {
      return new Error("This is static class");
    };
    window.addEventListener("gamepadconnected", function(event) {
      var e;
      try {
        return KDGamepad.refresh();
      } catch (error) {
        // * Можно напрямую
        //unless KDGamepad.isExists()
        //    if event.gamepad? and event.gamepad.mapping == 'standard'
        //        KDGamepad.init(event.gamepad)
        e = error;
        KDCore.warning(e);
        return KDGamepad.stop();
      }
    });
    window.addEventListener("gamepaddisconnected", function(event) {
      var e;
      if (!KDGamepad.isExists()) {
        return;
      }
      try {
        if ((event.gamepad != null) && event.gamepad === KDGamepad.gamepad) {
          return KDGamepad.stop();
        }
      } catch (error) {
        e = error;
        KDCore.warning(e);
        return KDGamepad.stop();
      }
    });
    KDGamepad.stopDefaultGamepad = function() {
      $gameTemp.__kdgpStopDefaultGamepad = true;
    };
    KDGamepad.resumeDefaultGamepad = function() {
      $gameTemp.__kdgpStopDefaultGamepad = null;
    };
    // * Ссылка на геймпад
    KDGamepad.gamepad = null;
    // * Подключён ли Gamepad ?
    KDGamepad.isExists = function() {
      return KDGamepad.gamepad != null;
    };
    // * Инициализация состояния кнопок
    // * Этот метод вызывается автоматически из Refresh или при подключении Gamepad
    KDGamepad.init = function(gamepad) {
      KDGamepad.gamepad = gamepad;
      this._isActive = true;
      this.buttonNames = [
        'A', // 0
        'B', // 1
        'X', // 2
        'Y', // 3
        'LB', // 4
        'RB', // 5
        'LTrigger', // 6
        'RTrigger', // 7
        'Back', // 8
        'Start', // 9
        'LStick', // 10
        'RStick', // 11
        'dUp', // 12
        'dDown', // 13
        'dLeft', // 14
        'dRight' // 15
      ];
      this.reset();
    };
    // * Аналог Input.clear
    KDGamepad.clear = function() {
      return KDGamepad.reset();
    };
    // * Сбросить состояние кнопок
    KDGamepad.reset = function() {
      this.leftStick = {
        x: 0,
        y: 0
      };
      this.rightStick = {
        x: 0,
        y: 0
      };
      this.buttons = {};
      this.buttonsPressed = {};
      this.prevButtons = {};
    };
    
    // * Остановить учёт геймпада
    KDGamepad.stop = function() {
      KDGamepad.reset();
      KDGamepad.gamepad = null;
    };
    // * Функция проверки что нажата кнопка на геймпаде
    KDGamepad._buttonPressed = function(gamepad, index) {
      var b, e;
      try {
        if (!gamepad || !gamepad.buttons || index >= gamepad.buttons.length) {
          return false;
        }
        b = gamepad.buttons[index];
        if (b == null) {
          return false;
        }
        if (typeof b === 'object') {
          // * Можно упростить
          return b.pressed;
        }
        return b === 1.0;
      } catch (error) {
        e = error;
        KDCore.warning(e);
        return false;
      }
    };
    // * Каждый кадр (обновление состояний)
    KDGamepad.update = function() {
      var e, gp, i, isDown, j, len, name, ref;
      if (!KDGamepad.isActive()) {
        return;
      }
      KDGamepad.refresh();
      if (!KDGamepad.isExists()) {
        return;
      }
      try {
        gp = KDGamepad.gamepad;
        ref = this.buttonNames;
        // * Проверка состояний кнопок
        for (i = j = 0, len = ref.length; j < len; i = ++j) {
          name = ref[i];
          this.buttons[name] = false;
          isDown = KDGamepad._buttonPressed(gp, i);
          if (isDown === true) {
            this.prevButtons[name] = true;
          } else {
            // * Срабатываение только при нажал - отпустил
            if (this.prevButtons[name] === true) {
              this.buttons[name] = true;
              this.prevButtons[name] = false;
            }
          }
        }
        // * Проверка стиков
        this.leftStick.x = gp.axes[0];
        this.leftStick.y = gp.axes[1];
        this.rightStick.x = gp.axes[2];
        this.rightStick.y = gp.axes[3];
      } catch (error) {
        e = error;
        KDCore.warning(e);
        KDGamepad.stop();
      }
    };
    // * Обновить и проверить состояние Gamepad
    // * Надо каждый раз это вызывать
    KDGamepad.refresh = function() {
      var e, gamepads, gp, i, isGamepadRefreshed, j, ref;
      try {
        isGamepadRefreshed = false;
        if (navigator.getGamepads) {
          gamepads = navigator.getGamepads();
        } else if (navigator.webkitGetGamepads) {
          gamepads = navigator.webkitGetGamepads();
        }
        if (gamepads != null) {
          for (i = j = 0, ref = gamepads.length; (0 <= ref ? j < ref : j > ref); i = 0 <= ref ? ++j : --j) {
            gp = gamepads[i];
            if ((gp != null) && gp.mapping === 'standard') {
              isGamepadRefreshed = true;
              if (KDGamepad.buttonNames != null) {
                KDGamepad.gamepad = gp;
              } else {
                KDGamepad.init(gp);
              }
              break;
            }
          }
        }
        if (!isGamepadRefreshed) {
          // * Если не был найден не один gamepad - отключаем систему
          KDGamepad.stop();
        }
      } catch (error) {
        e = error;
        KDCore.warning(e);
        KDGamepad.stop();
      }
    };
    // * Любое нажатие кнопки
    KDGamepad.isKeyAny = function(name) {
      return KDGamepad.isKey(name) || KDGamepad.isKeyPressed(name);
    };
    // * Нажата ли кнопка (trigger нажал - отпустил)
    KDGamepad.isKey = function(name) {
      if (!KDGamepad.isExists()) {
        return false;
      }
      if (this.buttons == null) {
        return false;
      }
      return this.buttons[name] === true;
    };
    // * Нажата ли кнопка (continues зажата)
    KDGamepad.isKeyPressed = function(name) {
      if (!KDGamepad.isExists()) {
        return false;
      }
      if (this.buttons == null) {
        return false;
      }
      return this.prevButtons[name] === true;
    };
    KDGamepad.isDPadAny = function() {
      return KDGamepad.isKeyAny("dLeft") || KDGamepad.isKeyAny("dRight") || KDGamepad.isKeyAny("dUp") || KDGamepad.isKeyAny("dDown");
    };
    KDGamepad.isActive = function() {
      return this._isActive === true;
    };
    // * Временно отключить обработку KDGamepad
    KDGamepad.setActive = function(_isActive) {
      this._isActive = _isActive;
      if (KDGamepad.isActive()) {
        KDGamepad.refresh();
      } else {
        KDGamepad.stop();
      }
    };
    // * Отключить перемещение игрока на DPad
    KDGamepad.setNoDPadMovingMode = function(_noDpadMoving) {
      this._noDpadMoving = _noDpadMoving;
    };
    return KDGamepad.isNoDPadMoving = function() {
      return this._noDpadMoving === true;
    };
  })();
});

// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  var BitmapSrc;
  BitmapSrc = (function() {
    //?[DEPRECATED]
    class BitmapSrc {
      constructor() {
        this.bitmap = null;
      }

      static LoadFromIconIndex(iconIndex) {
        var bs, icon_bitmap, iconset, ph, pw, sx, sy;
        bs = new BitmapSrc();
        if (BitmapSrc.CACHE[iconIndex] == null) {
          iconset = ImageManager.loadSystem('IconSet');
          if (KDCore.isMV()) {
            pw = Window_Base._iconWidth;
            ph = Window_Base._iconHeight;
          } else {
            pw = ImageManager.iconWidth;
            ph = ImageManager.iconHeight;
          }
          sx = iconIndex % 16 * pw;
          sy = Math.floor(iconIndex / 16) * ph;
          icon_bitmap = new Bitmap(pw, ph);
          icon_bitmap.addLoadListener(function() {
            icon_bitmap.blt(iconset, sx, sy, pw, ph, 0, 0);
          });
          BitmapSrc.CACHE[iconIndex] = icon_bitmap;
        }
        bs.bitmap = BitmapSrc.CACHE[iconIndex];
        return bs;
      }

      static LoadFromImageFolder(filename) {
        var bs;
        bs = new BitmapSrc();
        bs.bitmap = ImageManager.loadPicture(filename);
        return bs;
      }

      static LoadFromBase64(data, name) {
        var bs;
        bs = new BitmapSrc();
        if (name != null) {
          if (BitmapSrc.CACHE[name] != null) {
            bs.bitmap = BitmapSrc.CACHE[name];
          } else {
            BitmapSrc.CACHE[name] = Bitmap.load(data);
            bs.bitmap = BitmapSrc.CACHE[name];
          }
        } else {
          bs.bitmap = Bitmap.load(data);
        }
        return bs;
      }

      static LoadFromMemory(symbol) {
        var bs;
        bs = new BitmapSrc();
        if (BitmapSrc.CACHE[symbol] != null) {
          bs.bitmap = BitmapSrc.CACHE[symbol];
        } else {
          bs.bitmap = ImageManager.loadEmptyBitmap();
        }
        return bs;
      }

    };

    BitmapSrc.CACHE = {};

    return BitmapSrc;

  }).call(this);
  //@[EXTEND]
  return KDCore.BitmapSrc = BitmapSrc;
});

// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  var Changer;
  // * Класс который может плавно изменять какой-либо параметр
  // * Работает в стиле chain методов

    // * ------------------ ПРИМЕР ----------------------------------

    // * Меняем прозрачность 4 раза, туда-сюда, затем выводим done в консоль

    //@changer = new AA.Changer(someSprite)
  //@changer.change('opacity').from(255)
  //            .to(0).step(5).speed(1).delay(30).repeat(4).reverse()
  //            .start().done(() -> console.log('done'))
  //@changer.update()

    // * -------------------------------------------------------------
  Changer = class Changer {
    constructor(obj) {
      this.obj = obj;
      // * Количество кадров, в которые будет обновление
      this._field = null; // * название поля
      this._speed = 1; // * frames
      this._step = 1; // * шаг изменения значения
      this._from = 0; // * Начальное значение
      this._to = 0; // * Конечное значение
      this._thread = null;
      this._orienation = true; // * Направление + или - step (true = +)
      this._delay = 0; // * Задержка старта
      this._changer = null; // * Ссылка на следующий changer
      this._isRepeat = false; // * Надо ли поторить себя снова
      this._onDoneMethod = null; // * Метод будет выполнен в конце (при завершении)
      this._isPrepared = false; // * Элемента был подготовлен (установлено значение from)
    }

    start() {
      if (this._field == null) {
        return;
      }
      if (this._from === this._to) {
        return;
      }
      if (this._delay > 0) {
        this._delayThread = new KDCore.TimedUpdate(this._delay, this._startThread.bind(this));
        this._delayThread.once();
      } else {
        this._startThread();
      }
      return this;
    }

    isStarted() {
      return (this._thread != null) || (this._delayThread != null);
    }

    from(_from) {
      this._from = _from;
      return this;
    }

    to(_to) {
      this._to = _to;
      return this;
    }

    step(_step) {
      this._step = _step;
      return this;
    }

    speed(_speed) {
      this._speed = _speed;
      return this;
    }

    change(_field) {
      this._field = _field;
      return this;
    }

    // * Снова повторить (не совместим с then)
    // * Если ничего не указать, или <= 0 -> то бескончно
    repeat(_repeatCount = 0) {
      this._repeatCount = _repeatCount;
      if (this._repeatCount <= 0) {
        this._repeatCount = null;
      }
      this._isRepeat = true;
      this._changer = null;
      return this;
    }

    // * Снова повторить, но поменять местами to и from (работает только с repeat >= 2)
    reverse() {
      this._isReverse = true;
      return this;
    }

    isDone() {
      if (!this._isPrepared) {
        // * Чтобы не было выхода пока ждёт Delay
        return false;
      }
      // * Если от 255 до 0 (например)
      if (this._orienation === false) {
        // * То может быть меньше нуля (т.к. @step динамический)
        return this.value() <= this._to;
      } else {
        return this.value() >= this._to;
      }
    }

    value() {
      return this.obj[this._field];
    }

    stop() {
      this._thread = null;
      this._delayThread = null;
      if (this._changer == null) {
        // * Если есть связанный Changer, то не выполняем метод завршения
        return this._callDoneMethod();
      }
    }

    // * При ожидании, значения устанавливаются не сразу
    delay(_delay) {
      this._delay = _delay;
      return this;
    }

    // * Выполнить другой Changer после этого
    // * Не совместим с Repeat
    // * НЕЛЬЗЯ зацикливать, не будет работать
    // * Соединённый не надо обновлять вне, он обновляется в этом
    then(_changer) {
      this._changer = _changer;
      this._isRepeat = false;
      return this;
    }

    // * Этот метод будт выполнене в конце
    done(_onDoneMethod) {
      this._onDoneMethod = _onDoneMethod;
      return this;
    }

    // * Шаг можно выполнить и в ручную
    makeStep() {
      if (!this.isStarted()) {
        this._prepare();
      }
      this._makeStep();
      return this;
    }

    update() {
      var ref;
      if (this.isStarted()) {
        if (this._delay > 0) {
          if ((ref = this._delayThread) != null) {
            ref.update();
          }
        }
        if (this._thread != null) {
          this._updateMainThread();
        }
      } else {
        // * Если хоть раз был запущен
        if (this._isBeenStarted === true) {
          if (this._changer != null) {
            this._updateChainedChanger();
          }
        }
      }
    }

  };
  (function() {    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ Changer.coffee
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var _;
    //@[DEFINES]
    _ = Changer.prototype;
    _._prepare = function() {
      if (this._field == null) {
        return;
      }
      this._orienation = this._from < this._to;
      if (!this._orienation) {
        this._step *= -1;
      }
      // * Устанавливаем начальное значение
      this.obj[this._field] = this._from;
      this._isPrepared = true;
    };
    _._makeStep = function() {
      var value;
      if (this.isDone()) {
        return;
      }
      value = this.value();
      value += this._step;
      this.obj[this._field] = value;
    };
    _._startThread = function() {
      this._prepare();
      if (this.isDone()) {
        return;
      }
      this._thread = new KDCore.TimedUpdate(this._speed, this._makeStep.bind(this));
      return this._isBeenStarted = true;
    };
    _._updateChainedChanger = function() {
      if (this._changer.isStarted()) {
        this._changer.update();
        if (this._changer.isDone()) {
          this._callDoneMethod();
          this._changer.stop();
          return this._changer = null;
        }
      } else {
        return this._changer.start();
      }
    };
    _._restart = function() {
      if (!this._isCanRepeatMore()) {
        return;
      }
      if (this._repeatCount == null) {
        // * Если указано! число повторений, то onDone метод не вызываем
        this._callDoneMethod();
      }
      if (this._isReverse === true) {
        this._swapFromTo();
      }
      this._prepare();
      return this.start();
    };
    _._swapFromTo = function() {
      var t;
      t = this._from;
      this._from = this._to;
      this._to = t;
      // * Инвентируем число step
      this._step *= -1;
    };
    _._callDoneMethod = function() {
      if (this._onDoneMethod != null) {
        return this._onDoneMethod();
      }
    };
    _._isCanRepeatMore = function() {
      if (this._repeatCount == null) {
        return true;
      }
      this._repeatCount--;
      if (this._repeatCount <= 0) {
        this.stop();
        return false;
      }
      return true;
    };
    _._updateMainThread = function() {
      this._thread.update();
      if (this.isDone()) {
        if (this._isRepeat === true) {
          this._restart();
        } else {
          if (this._changer != null) {
            this._updateChainedChanger();
          }
          this.stop();
        }
      }
    };
  })();
  // ■ END Changer.coffee
  //---------------------------------------------------------------------------

  //@[EXTEND]
  return KDCore.Changer = Changer;
});

// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  var Color;
  Color = (function() {
    class Color {
      constructor(r1 = 255, g1 = 255, b1 = 255, a1 = 255) {
        this.r = r1;
        this.g = g1;
        this.b = b1;
        this.a = a1;
      }

      getLightestColor(lightLevel) {
        var bf, newColor, p;
        bf = 0.3 * this.R + 0.59 * this.G + 0.11 * this.B;
        p = 0;
        newColor = [0, 0, 0, 0];
        if (bf - lightLevel >= 0) {
          if (bf >= 0) {
            p = Math.abs(bf - lightLevel) / lightLevel;
          }
          newColor = this.ARR.map(function(c) {
            return c - (p * c);
          });
        } else {
          if (bf >= 0) {
            p = (lightLevel - bf) / (255 - bf);
          }
          newColor = this.ARR.map(function(c) {
            return [(255 - c) * p + c, 255].min();
          });
        }
        return new Color(newColor[0], newColor[1], newColor[2], newColor[3]);
      }

      clone() {
        return this.reAlpha(this.a);
      }

      reAlpha(newAlpha) {
        return new Color(this.r, this.g, this.b, newAlpha || 255);
      }

      static AddConstantColor(name, color) {
        color.toHex();
        color.toArray();
        color.toCSS();
        KDCore.SDK.setConstantToObject(Color, name, color);
      }

      toHex() {
        var b, g, r;
        if (this._colorHex != null) {
          return this._colorHex;
        }
        r = Math.floor(this.r).toString(16).padZero(2);
        g = Math.floor(this.g).toString(16).padZero(2);
        b = Math.floor(this.b).toString(16).padZero(2);
        return this._colorHex = '#' + r + g + b;
      }

      toArray() {
        if (this._colorArray != null) {
          return this._colorArray;
        }
        return this._colorArray = [this.r, this.g, this.b, this.a];
      }

      toCSS() {
        var na, nb, ng, nr;
        if (this._colorCss != null) {
          return this._colorCss;
        }
        nr = Math.round(this.r);
        ng = Math.round(this.g);
        nb = Math.round(this.b);
        na = this.a / 255;
        return this._colorCss = `rgba(${nr},${ng},${nb},${na})`;
      }

      toNumber() {
        return Number(this.toHex().replace("#", "0x"));
      }

      static Random() {
        var a, b, c;
        a = KDCore.SDK.rand(1, 254);
        b = KDCore.SDK.rand(1, 254);
        c = KDCore.SDK.rand(1, 254);
        return new Color(a, b, c, 255);
      }

      static FromHex(hexString) {
        var color, result;
        result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexString);
        color = null;
        if (result != null) {
          color = {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
          };
        }
        if (color != null) {
          return new Color(color.r, color.g, color.b, 255);
        } else {
          return Color.NONE;
        }
      }

    };

    Object.defineProperties(Color.prototype, {
      R: {
        get: function() {
          return this.r;
        },
        configurable: true
      },
      G: {
        get: function() {
          return this.g;
        },
        configurable: true
      },
      B: {
        get: function() {
          return this.b;
        },
        configurable: true
      },
      A: {
        get: function() {
          return this.a;
        },
        configurable: true
      },
      ARR: {
        get: function() {
          return this.toArray();
        },
        configurable: true
      },
      CSS: {
        get: function() {
          return this.toCSS();
        },
        configurable: true
      },
      HEX: {
        get: function() {
          return this.toHex();
        },
        configurable: true
      },
      OX: {
        get: function() {
          return this.toNumber();
        },
        configurable: true
      }
    });

    Color.AddConstantColor('NONE', new Color(0, 0, 0, 0));

    Color.AddConstantColor('BLACK', new Color(0, 0, 0, 255));

    Color.AddConstantColor('WHITE', new Color(255, 255, 255, 255));

    Color.AddConstantColor('RED', new Color(255, 0, 0, 255));

    Color.AddConstantColor('GREEN', new Color(0, 255, 0, 255));

    Color.AddConstantColor('BLUE', new Color(0, 0, 255, 255));

    Color.AddConstantColor('AQUA', new Color(128, 255, 255, 255));

    Color.AddConstantColor('MAGENTA', new Color(128, 0, 128, 255));

    Color.AddConstantColor('YELLOW', new Color(255, 255, 0, 255));

    Color.AddConstantColor('ORANGE', new Color(255, 128, 0, 255));

    return Color;

  }).call(this);
  //@[EXTEND]
  return KDCore.Color = Color;
});

// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  var Color, DevLog, __TMP_LOGS__;
  Color = KDCore.Color;
  __TMP_LOGS__ = [];
  DevLog = class DevLog {
    constructor(prefix = "") {
      this.prefix = prefix;
      this._isShow = typeof DEV !== 'undefined';
      this._color = Color.BLACK;
      this._backColor = Color.WHITE;
      __TMP_LOGS__.push(this);
    }

    on() {
      this._isShow = true;
      return this;
    }

    off() {
      this._isShow = false;
      return this;
    }

    applyRandomColors() {
      this.applyRandomWithoutBackgroundColors();
      this.setBackColor(Color.Random());
      return this;
    }

    applyRandomWithoutBackgroundColors() {
      this.setColor(Color.Random());
      return this;
    }

    setColor(color) {
      this._color = color;
      return this;
    }

    setBackColor(backColor) {
      this._backColor = backColor;
      return this;
    }

    applyLibraryColors() {
      this.setColors(new Color(22, 120, 138, 0), Color.BLACK);
      return this;
    }

    setColors(color, backColor) {
      this.setColor(color);
      this.setBackColor(backColor);
      return this;
    }

    applyExtensionColors() {
      this.setColors(new Color(22, 143, 137, 0), Color.BLACK.getLightestColor(60));
      return this;
    }

    applyWarningColors() {
      this.setColors(Color.ORANGE, Color.BLACK.getLightestColor(100));
      return this;
    }

    p(text) {
      if (!this._isShow) {
        return;
      }
      if (text == null) {
        console.log("");
      }
      this._printText(text);
    }

    _printText(text) {
      text = this.prefix + " : " + text;
      if (this._isUsingColor()) {
        return this._printTextWithColors(text);
      } else {
        return console.log(text);
      }
    }

    _isUsingColor() {
      return this._color !== Color.BLACK || this._backColor !== Color.WHITE;
    }

    _printTextWithColors(text) {
      var args;
      args = ['%c' + text, `color: ${this._color.HEX} ; background: ${this._backColor.HEX};`];
      return window.console.log.apply(console, args);
    }

    static CreateForLib(library) {
      var dlog;
      dlog = new DevLog(library.name);
      dlog.applyLibraryColors();
      return dlog;
    }

    static EnableAllLogs() {
      return __TMP_LOGS__.forEach(function(log) {
        return log.on();
      });
    }

  };
  //@[EXTEND]
  return KDCore.DevLog = DevLog;
});

// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  //@[AUTO EXTEND]
  //?[DEPRECATED]
  return KDCore.ParametersManager = class ParametersManager {
    constructor(pluginName) {
      this.pluginName = pluginName;
      this._cache = {};
      this._parameters = PluginManager.getPluginParametersByRoot(this.pluginName);
    }

    isLoaded() {
      return (this._parameters != null) && this._parameters.hasOwnProperty(this.pluginName);
    }

    isHasParameter(name) {
      return this._parameters[name] != null;
    }

    getString(name) {
      return this._parameters[name];
    }

    convertField(object, fieldName) {
      var e;
      try {
        object[fieldName] = JSON.parse(object[fieldName] || 'false');
      } catch (error) {
        e = error;
        console.error('Error while convert field ' + e.name);
        object[fieldName] = false;
      }
      return object;
    }

    convertImage(object, fieldName) {
      return object[fieldName] = this.loadImage(object[fieldName]);
    }

    loadImage(filename, smooth) {
      var e, path;
      try {
        if (filename) {
          path = filename.split('/');
          filename = path.last();
          path = path.first() + '/';
          return ImageManager.loadBitmap('img/' + path, filename, 0, smooth || true);
        } else {
          return ImageManager.loadEmptyBitmap();
        }
      } catch (error) {
        e = error;
        console.error(e);
        return ImageManager.loadEmptyBitmap();
      }
    }

    getFromCacheOrInit(name, func) {
      var object;
      if (!this.isInCache(name)) {
        if (func != null) {
          object = func.call(this);
          this.putInCache(name, object);
        }
      }
      return this.getFromCache(name);
    }

    isInCache(name) {
      return this._cache.hasOwnProperty(name);
    }

    putInCache(name, object) {
      return this._cache[name] = object;
    }

    getFromCache(name) {
      return this._cache[name];
    }

    getNumber(name) {
      var number;
      number = this.getObject(name);
      if (KDCore.SDK.isInt(number)) {
        return number;
      }
      return 0;
    }

    getObject(name) {
      if (this.isHasParameter(name)) {
        return JSON.parse(this.getString(name) || '{}');
      } else {
        return {};
      }
    }

    getBoolean(name) {
      if (this.isHasParameter(name)) {
        return JSON.parse(this.getString(name) || false);
      } else {
        return false;
      }
    }

    getBooleanFromCacheWithDefault(name, defaultValue) {
      if (this.isHasParameter(name)) {
        return this.getBooleanFromCache(name);
      } else {
        return defaultValue;
      }
    }

    getNumberFromCacheWithDefault(name, defaultValue) {
      if (this.isHasParameter(name)) {
        return this.getNumberFromCache(name);
      } else {
        return defaultValue;
      }
    }

    getStringFromCacheWithDefault(name, defaultValue) {
      if (this.isHasParameter(name)) {
        return this.getStringFromCache(name);
      } else {
        return defaultValue;
      }
    }

    getBooleanFromCache(name) {
      return this.getFromCacheOrInit(name, function() {
        return this.getBoolean(name);
      });
    }

    getNumberFromCache(name) {
      return this.getFromCacheOrInit(name, function() {
        return this.getNumber(name);
      });
    }

    getStringFromCache(name) {
      return this.getFromCacheOrInit(name, function() {
        return this.getString(name);
      });
    }

  };
});

// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  //@[AUTO EXTEND]
  return KDCore.ParamLoader = class ParamLoader {
    constructor(pluginName) {
      this.pluginName = pluginName;
      this.paramsRaw = PluginManager.getPluginParametersByRoot(this.pluginName);
      this.params = this.parseParameters(this.paramsRaw);
    }

    parseParameters(paramSet) {
      var clearKey, key, params, typeKey, value;
      params = {};
      for (key in paramSet) {
        value = paramSet[key];
        clearKey = this.parseKey(key);
        typeKey = this.parseKeyType(key);
        params[clearKey] = this.parseParamItem(typeKey, value);
      }
      return params;
    }

    parseKey(keyRaw) {
      return keyRaw.split(":")[0];
    }

    parseKeyType(keyRaw) {
      return keyRaw.split(":")[1];
    }

    // * Проверка, загружены ли параметры плагина
    isLoaded() {
      return (this.paramsRaw != null) && this.paramsRaw.hasOwnProperty(this.pluginName);
    }

    // * Имя параметра без ключа
    isHasParameter(paramName) {
      return this.params[paramName] != null;
    }

    
      // * Возвращает значение параметра (def - по умолчанию, если не найден)
    getParam(paramName, def) {
      if (this.isHasParameter(paramName)) {
        return this.params[paramName];
      } else {
        return def;
      }
    }

    // * Данные ключи должны идти после названия параметра через :
    // * Пример: @param ShowDelay:int, @param TestBool:bool
    // * Текстовые параметры, которые надо вернуть как есть, можно без типа (text, file, combo, ...)
    parseParamItem(type, item) {
      var e;
      if (type == null) {
        return item;
      }
      try {
        switch (type) {
          case "int":
          case "i":
            return parseInt(item);
          case "intA": // * массив чисел
            if (String.any(item)) {
              return JsonEx.parse(item).map((e) => {
                return this.parseParamItem("int", e);
              });
            } else {
              return [];
            }
            break;
          case "bool":
          case "b":
          case "e":
            return eval(item);
          case "struct":
          case "s":
            if (String.any(item)) {
              return this.parseParameters(JsonEx.parse(item));
            } else {
              return null;
            }
            break;
          case "structA": // * массив структур
            return JsonEx.parse(item).map((e) => {
              return this.parseParameters(JsonEx.parse(e));
            });
          case "str":
            return item;
          case "strA":
            if (String.any(item)) {
              return JsonEx.parse(item).map((e) => {
                return this.parseParamItem("str", e);
              });
            } else {
              return [];
            }
            break;
          case "note": // * если несколько строк в тексте
            return JsonEx.parse(item);
          case "css":
            return item.toCss();
          case "color":
            return KDCore.Color.FromHex(item);
          default:
            return item;
        }
      } catch (error) {
        e = error;
        console.warn(e);
        return item;
      }
    }

  };
});

// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  var Point;
  Point = (function() {
    class Point {
      constructor(_x = 0, _y = 0) {
        this._x = _x;
        this._y = _y;
      }

      clone() {
        return new Point(this._x, this._y);
      }

      toString() {
        return "[" + this._x + " ; " + this._y + "]";
      }

      isSame(anotherPoint) {
        return this.x === anotherPoint.x && this.y === anotherPoint.y;
      }

      convertToCanvas() {
        return new Point(Graphics.pageToCanvasX(this._x), Graphics.pageToCanvasY(this._y));
      }

      convertToMap() {
        return new Point($gameMap.canvasToMapX(this._x), $gameMap.canvasToMapY(this._y));
      }

      convertToScreen() {
        return new Point(this.screenX(), this.screenY());
      }

      screenX() {
        var t, tw;
        t = $gameMap.adjustX(this._x);
        tw = $gameMap.tileWidth();
        return Math.round(t * tw + tw / 2);
      }

      screenY() {
        var t, th;
        t = $gameMap.adjustY(this._y);
        th = $gameMap.tileHeight();
        return Math.round(t * th + th);
      }

      round() {
        return new Point(Math.round(this._x), Math.round(this._y));
      }

      floor() {
        return new Point(Math.floor(this._x), Math.floor(this._y));
      }

      mapPointOnScreen() {
        var nx, ny;
        nx = (this._x * $gameMap.tileWidth()) - ($gameMap.displayX() * $gameMap.tileWidth());
        ny = (this._y * $gameMap.tileHeight()) - ($gameMap.displayY() * $gameMap.tileHeight());
        return new Point(nx, ny);
      }

      multiplyBy(val) {
        return new Point(this._x * val, this._y * val);
      }

      simple() {
        return new PIXI.Point(this.x, this.y);
      }

      delta(point) {
        var dx, dy;
        dx = point.x - this._x;
        dy = point.y - this._y;
        return new KDCore.Point(dx, dy);
      }

      static _getEmpty() {
        if (Point._emptyPoint == null) {
          Point._emptyPoint = new Point(0, 0);
        }
        return Point._emptyPoint;
      }

    };

    Object.defineProperties(Point.prototype, {
      x: {
        get: function() {
          return this._x;
        },
        configurable: true
      },
      y: {
        get: function() {
          return this._y;
        },
        configurable: true
      }
    });

    Object.defineProperties(Point, {
      Empty: {
        get: function() {
          return Point._getEmpty();
        },
        configurable: false
      }
    });

    Array.prototype.toPoint = function() {
      return new Point(this[0], this[1]);
    };

    Sprite.prototype.toPoint = function() {
      return new Point(this.x, this.y);
    };

    Game_CharacterBase.prototype.toPoint = function() {
      return new Point(this.x, this.y);
    };

    return Point;

  }).call(this);
  //@[EXTEND]
  return KDCore.Point = Point;
});

// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  return KDCore.Sprite = (function(superClass) {
    //@[AUTO EXTEND]
    class Sprite extends superClass {
      constructor() {
        super(...arguments);
      }

      b() {
        return this.bitmap;
      }

      clear() {
        return this.bitmap.clear();
      }

      add(child) {
        return this.addChild(child);
      }

      bNew(w, h) {
        if (h == null) {
          h = w;
        }
        return this.bitmap = new Bitmap(w, h);
      }

      bImg(filename, sourceFolder) {
        var getterFunc;
        getterFunc = function(filename) {
          return ImageManager.loadPicture(filename);
        };
        if (sourceFolder != null) {
          getterFunc = function(filename) {
            return ImageManager.loadBitmap("img/" + sourceFolder + "/", filename);
          };
        }
        return this.bitmap = getterFunc(filename);
      }

      onReady(method) {
        if (method != null) {
          return this.bitmap.addLoadListener(method);
        }
      }

      drawText() {
        return this.bitmap.drawText(...arguments);
      }

      drawTextFull(text, position = "center") {
        if (this.textSettingsPosition != null) {
          position = this.textSettingsPosition;
        }
        return this.bitmap.drawTextFull(text, position);
      }

      //?DEPRECATED
      drawTextWithSettings(text) {
        this.clear();
        this.drawTextFull(text, this.textSettingsPosition);
      }

      //? x, y, icon, size
      drawIcon() {
        return this.bitmap.drawIcon(...arguments);
      }

      moveByJson(settings) {
        var pos;
        pos = KDCore.Utils.getPositionPointFromJSON(settings);
        return this.move(pos.x, pos.y);
      }

      applyTextSettingsByJson(sprite, settings) {
        this.applyTextSettingsByExtraSettings(sprite, settings.text);
      }

      applyTextSettingsByExtraSettings(sprite, s) {
        sprite.move(s.marginX, s.marginY);
        sprite.b().fontSize = s.fontSize;
        sprite.b().textColor = KDCore.Color.FromHex(s.textColor).CSS;
        sprite.b().outlineWidth = s.outlineWidth;
        if (s.outlineColor != null) {
          sprite.b().outlineColor = KDCore.Color.FromHex(s.outlineColor).CSS;
        }
        if (s.fontFace != null) {
          sprite.b().fontFace = s.fontFace;
        }
        sprite.b().fontItalic = s.fontItalic;
        sprite.visible = s.visible;
      }

      isReady() {
        var i, j, ref;
        if (this.bitmap != null) {
          if (!this.bitmap.isReady()) {
            return false;
          }
        }
        for (i = j = 0, ref = this.children.length; (0 <= ref ? j < ref : j > ref); i = 0 <= ref ? ++j : --j) {
          if (!this.children[i].bitmap.isReady()) {
            return false;
          }
        }
        return true;
      }

      inPosition(point) {
        return this.isContainsPoint(point);
      }

      isUnderMouse() {
        return this.inPosition(TouchInput);
      }

      // * Из параметров плагина
      applyFontParam(font) {
        var b;
        if (font == null) {
          return;
        }
        b = this.b();
        if (font.size != null) {
          b.fontSize = font.size;
        }
        if (!String.isNullOrEmpty(font.face)) {
          b.fontFace = font.face;
        }
        if (font.italic != null) {
          b.fontItalic = font.italic;
        }
      }

      applyOutlineParam(outline) {
        var b;
        if (outline == null) {
          return;
        }
        b = this.b();
        if (outline.width != null) {
          b.outlineWidth = outline.width;
        }
        if (!String.isNullOrEmpty(outline.color)) {
          b.outlineColor = outline.color;
        }
      }

      static FromImg(filename, sourceFolder) {
        var s;
        s = new KDCore.Sprite();
        s.bImg(filename, sourceFolder);
        return s;
      }

      static FromBitmap(w, h) {
        var s;
        s = new KDCore.Sprite();
        s.bNew(w, h);
        return s;
      }

      static FromTextSettings(settings) {
        var s;
        s = KDCore.Sprite.FromBitmap(settings.textBoxWidth, settings.textBoxHeight);
        s.applyTextSettingsByExtraSettings(s, settings);
        s.textSettingsPosition = settings.position;
        return s;
      }

      // * Загрузчик из параметров плагина (безопасный)
      static FromParams(pluginParams) {
        var e, margins, s, size;
        try {
          size = pluginParams.size;
          s = KDCore.Sprite.FromBitmap(size.w, size.h);
          s.textSettingsPosition = pluginParams.alignment;
          margins = pluginParams.margins;
          if (margins != null) {
            s.move(margins.x, margins.y);
          }
          s.applyFontParam(pluginParams.font);
          s.applyOutlineParam(pluginParams.outline);
          if (!String.isNullOrEmpty(pluginParams.textColor)) {
            s.b().textColor = pluginParams.textColor;
          }
          if (pluginParams.visible != null) {
            s.visible = pluginParams.visible;
          }
          return s;
        } catch (error) {
          e = error;
          console.warn('Something wrong with Text Settings!', e);
          return KDCore.Sprite.FromBitmap(60, 30);
        }
      }

    };

    return Sprite;

  }).call(this, Sprite);
});

// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  //@[AUTO EXTEND]
  return KDCore.TimedUpdate = class TimedUpdate {
    constructor(interval, method) {
      this.interval = interval;
      this.method = method;
      this._timer = 0;
      this._once = false;
    }

    update() {
      if (this.interval == null) {
        return;
      }
      if (this._timer++ >= this.interval) {
        this.call();
        this._timer = 0;
        if (this._once === true) {
          return this.stop();
        }
      }
    }

    once() {
      return this._once = true;
    }

    onUpdate(method) {
      this.method = method;
    }

    stop() {
      return this.interval = null;
    }

    isAlive() {
      return this.interval != null;
    }

    // * Рандомизировать интервал @interval (-min, +max)
    applyTimeRange(min, max) {
      var value;
      if (!this.isAlive()) {
        return;
      }
      value = KDCore.SDK.rand(min, max);
      return this.interval += value;
    }

    call() {
      if (this.method != null) {
        return this.method();
      }
    }

  };
});

// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  
    // * Button (Sprite_XButton)

    //@[AUTO EXTEND]
  //?DEPRECATED
  return KDCore.Button = class Button extends Sprite {
    constructor() {
      super();
      this._mouseIn = false;
      this._touching = false;
      this._slowUpdateActive = false;
      this._localMode = false;
      this._images = [];
      this._checkAlpha = false;
      this._textSprite = null;
      this._textPosition = 0;
      this._override = false; // * TouchClick in game messages not work anymore if TRUE
      this._clickHandlers = [];
      this._manualHided = false;
      this._manualDisabled = false;
      this._condition = null; // * Условие для Visible
      this._condition2 = null; // * Условие для Enable \ Disable
      this._disabled = false;
      this._infoData = null;
      this._isNeedShowText = false;
      return;
    }

    isMouseInButton() {
      return this._mouseIn === true;
    }

    isActive() {
      return this.visible === true;
    }

    activateSlowUpdate() {
      return this._slowUpdateActive = true;
    }

    setLocalMode() {
      this._realX = this.x;
      this._realY = this.y;
      return this._localMode = true;
    }

    setAlphaMode() {
      return this._checkAlpha = true;
    }

    // * above, below
    setTextPosition(position) {
      return this._textPosition = position;
    }

    setHelpText(text, size) {
      return this._createText(text, size);
    }

    setInfoData(data) {
      return this._infoData = data;
    }

    setOverrideMode() {
      return this._override = true;
    }

    isOverride() {
      return this._override === true && this.isActive() && this.touchInButton();
    }

    isDisabled() {
      return this._disabled === true;
    }

    isEnabled() {
      return !this.isDisabled();
    }

    isNeedShowText() {
      return this._isNeedShowText === true;
    }

    addClickHandler(method) {
      return this._clickHandlers.push(method);
    }

    clearClickHandlers() {
      return this._clickHandlers = [];
    }

    isLocalMode() {
      return this._localMode === true;
    }

    setCondition(method) {
      return this._condition = method;
    }

    setConditionForDisable(method) {
      return this._condition2 = method;
    }

    getInfoData() {
      return this._infoData;
    }

    simulateClick() { //?NEW
      return this.applyClickedState();
    }

    simulateClickManual() { //?NEW
      this.simulateClick();
      return setTimeout((() => {
        try {
          return this.applyNormalState();
        } catch (error) {

        }
      }), 50);
    }

    prepare() { //?NEW
      return this.slowUpdate();
    }

    realX() {
      if (this.isLocalMode()) {
        return this._realX;
      } else {
        return this.x;
      }
    }

    realY() {
      if (this.isLocalMode()) {
        return this._realY;
      } else {
        return this.y;
      }
    }

    show() {
      this.visible = true;
      return this._manualHided = false;
    }

    hide() {
      this.visible = false;
      return this._manualHided = true;
    }

    disable() {
      this._disabled = true;
      this._manualDisabled = true;
      this.refreshEnDisState();
      return this._mouseIn = false;
    }

    enable() {
      this._disabled = false;
      this._manualDisabled = false;
      return this.refreshEnDisState();
    }

    update() {
      super.update();
      if (this._destroyed === true) {
        return;
      }
      this.updateMouseClick();
      this.updatePosition();
      if (!this._slowUpdateActive) {
        this.slowUpdate();
      }
      return this.updateComplexTextVisible();
    }

    slowUpdate() {
      if (this._destroyed === true) {
        return;
      }
      this.updateMouseTracking();
      this.updateConditionForVisible();
      return this.updateConditionForEnabling();
    }

    updateMouseTracking() {
      if (!this.isActive()) {
        return;
      }
      if (this.isDisabled()) {
        return;
      }
      if (this.cursorInButton()) {
        this._onMouseEnter();
        return this._mouseIn = true;
      } else {
        this._onMouseLeave();
        return this._mouseIn = false;
      }
    }

    // * In MZ TouchInput always have X,Y
    cursorInButton() {
      return this.touchInButton();
    }

    xyInButton(x, y) {
      var inRect, rect, rx, ry;
      rx = KDCore.SDK.toGlobalCoord(this, 'x');
      ry = KDCore.SDK.toGlobalCoord(this, 'y');
      rect = new PIXI.Rectangle(rx, ry, this._realWidth(), this._realHeight());
      inRect = rect.contains(x, y);
      if (inRect === true && this._checkAlpha === true) {
        return this._checkAlphaPixel(x - rx, y - ry);
      } else {
        return inRect;
      }
    }

    _realWidth() {
      if (this._hasImage()) {
        return this._mainImage().width;
      } else {
        return this.width;
      }
    }

    _hasImage() {
      return this._mainImage() != null;
    }

    _mainImage() {
      return this._images[0];
    }

    _realHeight() {
      if (this._hasImage()) {
        return this._mainImage().height;
      } else {
        return this.height;
      }
    }

    _checkAlphaPixel(x, y) {
      var pixel;
      pixel = this._hasImage() ? this._mainImage().bitmap.getAlphaPixel(x, y) : this.bitmap.getAlphaPixel(x, y);
      return pixel >= 200;
    }

    _onMouseEnter() {
      if (this._mouseIn === true) {
        return;
      }
      if (!this.isDisabled()) {
        this.applyCoverState();
      }
      this._showText();
      if (this.getInfoData() != null) {
        return this._startComplexTimer();
      }
    }

    _onMouseLeave() {
      if (this._mouseIn === false) {
        return;
      }
      if (!this.isDisabled()) {
        this.applyNormalState();
      }
      this._hideText();
      return this._stopComplexTimer();
    }

    _showText() {
      if (this._textSprite == null) {
        return;
      }
      this._updateTextPosition();
      return this._textSprite.visible = true;
    }

    _hideText() {
      if (this._textSprite == null) {
        return;
      }
      return this._textSprite.visible = false;
    }

    _startComplexTimer() {
      this._stopComplexTimer();
      return this._cTimer = setTimeout((() => {
        if (this._mouseIn === true) {
          return this._isNeedShowText = true;
        }
      }), 1000);
    }

    _stopComplexTimer() {
      if (this._cTimer != null) {
        clearTimeout(this._cTimer);
      }
      return this._isNeedShowText = false;
    }

    updateMouseClick() {
      if (!this.isActive()) {
        this._unTouch();
        return;
      }
      if (this.isDisabled()) {
        return;
      }
      if (TouchInput.isTriggered() && this.touchInButton()) {
        this._touching = true;
        this.applyClickedState();
      }
      if (this._touching === true) {
        if (TouchInput.isReleased() || !this.touchInButton()) {
          this._unTouch();
          if (TouchInput.isReleased()) {
            return this.callClickHandler();
          }
        }
      }
    }

    _unTouch() {
      this._touching = false;
      if (this.touchInButton()) {
        return this.applyCoverState();
      } else {
        return this.applyNormalState();
      }
    }

    touchInButton() {
      return this.xyInButton(TouchInput.x, TouchInput.y);
    }

    callClickHandler() {
      if (this._clickHandlers.length > 0) {
        return this._clickHandlers.forEach(function(method) {
          return method();
        });
      }
    }

    updatePosition() {
      var p;
      if (!this._localMode) {
        return;
      }
      p = new KDCore.Point(this._realX, this._realY);
      return this.move(p.screenX(), p.screenY());
    }

    updateConditionForVisible() {
      var result;
      if (this._condition == null) {
        return;
      }
      if (this._manualHided === true) {
        return;
      }
      try {
        result = this._condition();
        return this.visible = !result;
      } catch (error) {
        console.warn('wrong condition in button');
        return this.visible = true;
      }
    }

    updateConditionForEnabling() {
      if (!this._condition2) {
        return;
      }
      if (this._manualDisabled === true) {
        return;
      }
      try {
        this._disabled = this._condition2();
        return this.refreshEnDisState();
      } catch (error) {
        console.warn('wrong condition in button for enable state');
        return this.disable();
      }
    }

    setButtonImages(img1, img2, img3, img4) {
      if (this._images != null) {
        this._images.forEach(function(img) {
          if (img != null) {
            return img.parent.removeChild(img);
          }
        });
      }
      this._images = [new Sprite(img1), img2 != null ? new Sprite(img2) : void 0, img3 != null ? new Sprite(img3) : void 0, img4 != null ? new Sprite(img4) : void 0];
      this._images.forEach((img) => {
        if (img != null) {
          return this.addChild(img);
        }
      });
      return this.applyNormalState();
    }

    applyNormalState() {
      var ref;
      this.refreshImages();
      return (ref = this._images[0]) != null ? ref.visible = true : void 0;
    }

    refreshImages() {
      return this._images.forEach(function(img) {
        return img != null ? img.visible = false : void 0;
      });
    }

    applyCoverState() {
      this.refreshImages();
      if (this._images[1] != null) {
        return this._images[1].visible = true;
      } else {
        return this.applyNormalState();
      }
    }

    applyClickedState() {
      this.refreshImages();
      if (this._images[2] != null) {
        return this._images[2].visible = true;
      } else {
        return this.applyNormalState();
      }
    }

    _createText(text, size) {
      var h, w;
      if (this._textSprite) {
        this.removeChild(this._textSprite);
      }
      w = Math.round(((size / 10) + 1) * 5 * text.length);
      h = size + 4;
      this._textSprite = new Sprite(new Bitmap(w, h));
      this._textSprite.bitmap.fontSize = size;
      this._textSprite.bitmap.drawText(text, 0, h / 2, w, 1, 'center');
      this._textSprite.visible = false;
      return this.addChild(this._textSprite);
    }

    _updateTextPosition() {
      var nx, ny;
      if (!this._textSprite) {
        return;
      }
      nx = this._realWidth() / 2 - this._textSprite.width / 2;
      if (this._textPosition === 0) {
        ny = -this._textSprite.height;
      } else {
        ny = this._realHeight() + this._textSprite.height / 2;
      }
      return this._textSprite.move(nx, ny);
    }

    applyDisableState() {
      var ref;
      this.refreshImages();
      return (ref = this._images[3]) != null ? ref.visible = true : void 0;
    }

    refreshEnDisState() {
      if (this.isDisabled()) {
        this.applyDisableState();
        return this._hideText();
      } else {
        if (this._mouseIn === false) {
          return this.applyNormalState();
        }
      }
    }

    //else
    //    do @applyCoverState
    updateComplexTextVisible() {}

    applyScale(mod) {
      var i, img, len, ref;
      ref = this._images;
      for (i = 0, len = ref.length; i < len; i++) {
        img = ref[i];
        if (img != null) {
          img.scale.x = mod;
          img.scale.y = mod;
        }
      }
    }

    static FromSet(imgName, sourceFolder = null) {
      var button, getterFunc, img0, img1;
      getterFunc = function(filename) {
        return ImageManager.loadPicture(filename);
      };
      if (sourceFolder != null) {
        getterFunc = function(filename) {
          return ImageManager.loadBitmap("img/" + sourceFolder + "/", filename);
        };
      }
      img0 = getterFunc(imgName + "_00");
      img1 = getterFunc(imgName + "_01");
      button = new KDCore.Button();
      button.setButtonImages(img0, img1, img0, img0);
      return button;
    }

    static FromSetFull(imgName, sourceFolder = null) {
      var button, getterFunc, img0, img1, img2, img3;
      getterFunc = function(filename) {
        return ImageManager.loadPicture(filename);
      };
      if (sourceFolder != null) {
        getterFunc = function(filename) {
          return ImageManager.loadBitmap("img/" + sourceFolder + "/", filename);
        };
      }
      img0 = getterFunc(imgName + "_00");
      img1 = getterFunc(imgName + "_01");
      img2 = getterFunc(imgName + "_02");
      img3 = getterFunc(imgName + "_03");
      button = new KDCore.Button();
      button.setButtonImages(img0, img1, img2, img3);
      return button;
    }

  };
});

// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  var Sprite_ButtonsGroup;
  // * Класс для реализации набора кнопок переключателей (Tabs)
  // * Когда только одна кнопка может быть нажата (выбрана)

    //rev 07.10.21
  Sprite_ButtonsGroup = class Sprite_ButtonsGroup extends KDCore.Sprite {
    // buttonsArray = [
    //       {image: NAME, position: [X,Y]}, ...
    //    ]
    constructor(buttonsArray, activeIndex, clickCallback) {
      var button, i, len;
      super();
      this.clickCallback = clickCallback;
      this._buttons = [];
      for (i = 0, len = buttonsArray.length; i < len; i++) {
        button = buttonsArray[i];
        this._createButton(button);
      }
      this._onButtonClick(activeIndex);
      return;
    }

    getSelectedIndex() {
      return this._buttons.findIndex(function(btn) {
        return !btn.isEnabled();
      });
    }

  };
  (function() {    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ PRIVATE
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var _;
    //@[DEFINES]
    _ = Sprite_ButtonsGroup.prototype;
    _._createButton = function({image, position}) {
      var btn, index, method;
      // * Так как кнопки работают как переключатели, то 03 должен быть всегда
      index = this._buttons.length;
      btn = new KDCore.ButtonM(image, true, "Alpha");
      btn.move(position);
      method = () => {
        return this._onButtonClick(index);
      };
      btn.addClickHandler(method);
      this._buttons.push(btn);
      this.add(btn);
    };
    _._onButtonClick = function(index = 0) {
      var ref;
      this._resetAllButtons();
      if ((ref = this._buttons[index]) != null) {
        ref.disable(); // * Нажата
      }
      if (this.clickCallback != null) {
        this.clickCallback();
      }
    };
    _._resetAllButtons = function() {
      var btn, i, len, ref;
      ref = this._buttons;
      for (i = 0, len = ref.length; i < len; i++) {
        btn = ref[i];
        if (btn != null) {
          btn.enable();
        }
      }
    };
  })();
  // ■ END PRIVATE
  //---------------------------------------------------------------------------
  return KDCore.Sprite_ButtonsGroup = Sprite_ButtonsGroup;
});

// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad((function() {
  var Sprite_TilingFrame;
  Sprite_TilingFrame = class Sprite_TilingFrame extends KDCore.Sprite {
    constructor(width, height, skinBitmap) {
      super();
      this.width = width;
      this.height = height;
      this.skinBitmap = skinBitmap;
      this._createParts();
      this._refreshAll();
    }

    _createParts() {
      var i, j;
      this.backSprite = new Sprite();
      this.addChild(this.backSprite);
      this.content = new Sprite();
      this.addChild(this.content);
      this._outFrame = new Sprite();
      for (i = j = 0; j < 8; i = ++j) {
        this._outFrame.addChild(new Sprite());
      }
      return this.addChild(this._outFrame);
    }

    // * Отступ, чтобы за рамку не выходить
    _fillPadding() {
      return 2;
    }

    // * Размер частей на картинке
    _fillImagePartWidth() {
      return 96;
    }

    _fillImagePartHeight() {
      return 96;
    }

    // * Толщина рамки
    _frameThickness() {
      return 12;
    }

    _refreshAll() {
      this._refreshBack();
      return this._refreshTFrame();
    }

    _refreshBack() {
      var fh, fw, h, m, sprite, w;
      m = this._fillPadding();
      w = Math.max(0, this.width - m * 2);
      h = Math.max(0, this.height - m * 2);
      sprite = this.backSprite;
      sprite.bitmap = this.skinBitmap;
      // * Координаты фона из картинки
      fw = this._fillImagePartWidth();
      fh = this._fillImagePartHeight();
      sprite.setFrame(0, 0, fw, fh);
      sprite.move(m, m);
      sprite.scale.x = w / fw;
      return sprite.scale.y = h / fh;
    }

    _refreshTFrame() {
      var drect, fh, fw, j, len, m, ref, spr, srect;
      fw = this._fillImagePartWidth();
      fh = this._fillImagePartHeight();
      // * Положение назначения
      drect = {
        x: 0,
        y: 0,
        width: this.width,
        height: this.height
      };
      // * Координаты рамки на картинке
      srect = {
        x: fw,
        y: 0,
        width: fw,
        height: fh
      };
      m = this._frameThickness(); // * Толщина
      ref = this._outFrame.children;
      for (j = 0, len = ref.length; j < len; j++) {
        spr = ref[j];
        spr.bitmap = this.skinBitmap;
      }
      if (KDCore.isMZ()) {
        Window.prototype._setRectPartsGeometry.call(this, this._outFrame, srect, drect, m);
      } else {
        this._setRectPartsGeometry(this._outFrame, srect, drect, m);
      }
    }

    // * Этот метод существует в MZ, но нет в MV
    //? From MZ
    _setRectPartsGeometry(sprite, srect, drect, m) {
      var child, children, dh, dmh, dmw, dw, dx, dy, j, len, sh, smh, smw, sw, sx, sy;
      sx = srect.x;
      sy = srect.y;
      sw = srect.width;
      sh = srect.height;
      dx = drect.x;
      dy = drect.y;
      dw = drect.width;
      dh = drect.height;
      smw = sw - m * 2;
      smh = sh - m * 2;
      dmw = dw - m * 2;
      dmh = dh - m * 2;
      children = sprite.children;
      sprite.setFrame(0, 0, dw, dh);
      sprite.move(dx, dy);
      // corner
      children[0].setFrame(sx, sy, m, m);
      children[1].setFrame(sx + sw - m, sy, m, m);
      children[2].setFrame(sx, sy + sw - m, m, m);
      children[3].setFrame(sx + sw - m, sy + sw - m, m, m);
      children[0].move(0, 0);
      children[1].move(dw - m, 0);
      children[2].move(0, dh - m);
      children[3].move(dw - m, dh - m);
      // edge
      children[4].move(m, 0);
      children[5].move(m, dh - m);
      children[6].move(0, m);
      children[7].move(dw - m, m);
      children[4].setFrame(sx + m, sy, smw, m);
      children[5].setFrame(sx + m, sy + sw - m, smw, m);
      children[6].setFrame(sx, sy + m, m, smh);
      children[7].setFrame(sx + sw - m, sy + m, m, smh);
      children[4].scale.x = dmw / smw;
      children[5].scale.x = dmw / smw;
      children[6].scale.y = dmh / smh;
      children[7].scale.y = dmh / smh;
      // center
      if (children[8] != null) {
        children[8].setFrame(sx + m, sy + m, smw, smh);
        children[8].move(m, m);
        children[8].scale.x = dmw / smw;
        children[8].scale.y = dmh / smh;
      }
      for (j = 0, len = children.length; j < len; j++) {
        child = children[j];
        child.visible = dw > 0 && dh > 0;
      }
    }

  };
  return KDCore.Sprite_TilingFrame = Sprite_TilingFrame;
}));

// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  var Window_ExtTextLineBase;
  // * Данное окно используется как основа для Sprite_UITextExt
  //rev 07.10.21
  Window_ExtTextLineBase = class Window_ExtTextLineBase extends Window_Base {
    constructor(rect, fontSettings) {
      super(rect);
      this.fontSettings = fontSettings;
      this.createContents();
      // * Всегда прозрачное окно
      this.setBackgroundType(2);
    }

    // * Нет отступов
    updatePadding() {
      return this.padding = 0;
    }

    // * Нет отступов
    itemPadding() {
      return 0;
    }

    textPadding() {
      return 0;
    }

    standardPadding() {
      return 0;
    }

    contentsWidth() {
      return this.width;
    }

    contentsHeight() {
      return this.height;
    }

    // * Более гибкая настройка размера текста при { }
    makeFontBigger() {
      return this.contents.fontSize += 1;
    }

    makeFontSmaller() {
      if (this.contents.fontSize > 1) {
        return this.contents.fontSize -= 1;
      }
    }

    // * Применение своих шрифта и размера текста
    resetFontSettings() {
      super.resetFontSettings();
      if (this.fontSettings == null) {
        return;
      }
      if (String.any(this.fontSettings.face)) {
        this.contents.fontFace = this.fontSettings.face;
      }
      if (this.fontSettings.size > 0) {
        this.contents.fontSize = this.fontSettings.size;
      }
      if (this.fontSettings.italic != null) {
        this.contents.fontItalic = this.fontSettings.italic;
      }
    }

  };
  return KDCore.Window_ExtTextLineBase = Window_ExtTextLineBase;
});

// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  // * Button M
  //------------------------------------------------------------------------------
  //@[AUTO EXTEND]
  // * Button Mini - упрощённый класс Sprite_XButton (KDCore.Button)

    // * Принимает название файла изображения кнопки без _00
  // * Названия изображения должны быть в стандартном формате _00, _01, [_03]
  // * _02 - не используются в этом классе

    // * Класс использует глобальную временную переменную для определения находится ли мышь в зоне кнопки

    // * Если isFull - true, значит нужен _03
  KDCore.ButtonM = class ButtonM extends KDCore.Sprite {
    constructor(filename, isFull = false, sourceFolder = null) {
      super();
      this._bitmaps = [];
      this._disabled = false;
      this._isTriggered = false;
      // * Когда произошло нажатие на кнопку
      this._handler = null;
      this._isCanBeClicked = true;
      this._isManualHoverMode = false;
      this._isManualSelected = false;
      this._loadBitmaps(filename, isFull, sourceFolder);
      this._setImageState(0);
      this._createThread();
    }

    setManualHover() {
      return this._isManualHoverMode = true;
    }

    disableManualHover() {
      return this._isManualHoverMode = false;
    }

    setManualSelected(_isManualSelected) {
      this._isManualSelected = _isManualSelected;
    }

    enableClick() {
      return this._isCanBeClicked = true;
    }

    disableClick() {
      return this._isCanBeClicked = false;
    }

    desaturate() {
      this.filters = [new PIXI.filters.ColorMatrixFilter()];
      this.filters[0].desaturate();
    }

    isMouseIn() {
      if (this._isManualHoverMode === true) {
        return this._isManualSelected;
      } else {
        return this.inPosition(TouchInput);
      }
    }

    isActive() {
      if (this._isCanBeClicked === false) {
        return false;
      }
      if (this.parent != null) {
        return this.parent.visible === true && this.visible === true;
      } else {
        return this.visible === true;
      }
    }

    isDisabled() {
      return this._disabled === true;
    }

    addClickHandler(_handler) {
      this._handler = _handler;
    }

    clearClickHandler() {
      return this._handler = null;
    }

    // * Воспроизводит визуальный эффект нажатия
    simulateClick() {
      if (!this.isActive()) {
        return;
      }
      if (this.isDisabled()) {
        return;
      }
      if (this.isMouseIn()) {
        return;
      }
      this._startSimulation();
    }

    isEnabled() {
      return !this.isDisabled();
    }

    refreshState(isEnable = true) {
      if (isEnable === true) {
        if (this.isDisabled()) {
          this.enable();
        }
      } else {
        if (this.isEnabled()) {
          this.disable();
        }
      }
    }

    disable() {
      this._disabled = true;
      return this._setImageState(2);
    }

    enable() {
      this._disabled = false;
      return this._setImageState(0);
    }

    click() {
      if (this._handler != null) {
        return this._handler();
      }
    }

    update() {
      super.update();
      return this._updateMain();
    }

  };
  return (function() {    
    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ ButtonM Implementation
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var _, alias_SM_isAnyButtonPressed, alias_SM_onMapLoaded;
    //@[DEFINES]
    _ = KDCore.ButtonM.prototype;
    _._loadBitmaps = function(filename, isFull = false, sourceFolder = null) {
      var getterFunc;
      getterFunc = this._getGetter(sourceFolder);
      this._bitmaps.push(getterFunc(filename + '_00'));
      this._bitmaps.push(getterFunc(filename + '_01'));
      if (isFull) {
        this._bitmaps.push(getterFunc(filename + '_03'));
      }
    };
    _._getGetter = function(sourceFolder = null) {
      var getterFunc;
      getterFunc = function(filename) {
        return ImageManager.loadPicture(filename);
      };
      if (sourceFolder !== null) {
        getterFunc = function(filename) {
          return ImageManager.loadBitmap('img/' + sourceFolder + '/', filename);
        };
      }
      return getterFunc;
    };
    _._setImageState = function(index = 0) {
      if (this._bitmaps[index] == null) {
        index = 0;
      }
      this.bitmap = this._bitmaps[index];
      this._lastState = index;
    };
    _._createThread = function() {
      this.hoverThread = new KDCore.TimedUpdate(3, this._updateHover.bind(this));
      this.hoverThread.applyTimeRange(-1, 1);
      this.hoverThread.call();
    };
    //?[DYNAMIC]
    _._updateMain = function() {
      this._updateMouseLogic();
      if (!this.isActive()) {
        if (($gameTemp.kdButtonUnderMouse != null) && $gameTemp.kdButtonUnderMouse === this) {
          return $gameTemp.kdButtonUnderMouse = null;
        }
      }
    };
    _._updateMouseLogic = function() {
      this.hoverThread.update();
      return this._updateMouseClick();
    };
    _._updateHover = function() {
      if (!this.isActive()) {
        return;
      }
      // * чтобы эффект нажатия не прекратить
      if (this._isTriggered === true) {
        return;
      }
      if (this.isMouseIn()) {
        if (this._lastState !== 1) {
          if (!this.isDisabled()) {
            this._setImageState(1);
          }
          $gameTemp.kdButtonUnderMouse = this;
        }
      } else {
        if (this._lastState !== 0) {
          if (!this.isDisabled()) {
            this._setImageState(0);
          }
          if ($gameTemp.kdButtonUnderMouse === this) {
            $gameTemp.kdButtonUnderMouse = null;
          }
        } else if ($gameTemp.kdButtonUnderMouse === this) {
          $gameTemp.kdButtonUnderMouse = null;
        }
      }
    };
    _._updateMouseClick = function() {
      if (!this.isActive()) {
        return;
      }
      if (this.isDisabled()) {
        return;
      }
      if (TouchInput.isTriggered() && this.isMouseIn()) {
        this._isTriggered = true;
        this._setImageState(0);
      }
      if (this._isTriggered === true) {
        if (TouchInput.isReleased()) {
          this._isTriggered = false;
          if (this.isMouseIn()) {
            this.click();
          }
        }
      }
    };
    _._startSimulation = function() {
      this._setImageState(1);
      this._simulateThread = new KDCore.TimedUpdate(10, () => {
        return this._setImageState(0);
      });
      this._simulateThread.once();
      return this._updateMain = this._updateMouseClickSimulated;
    };
    _._updateMouseClickSimulated = function() {
      this._simulateThread.update();
      if (!this._simulateThread.isAlive()) {
        this._simulateThread = null;
        this._updateMain = this._updateMouseLogic;
      }
    };
    // * Теперь при нажатии на любую кнопку, игрок не будет ходить по карте

    //@[ALIAS]
    alias_SM_isAnyButtonPressed = Scene_Map.prototype.isAnyButtonPressed;
    Scene_Map.prototype.isAnyButtonPressed = function() {
      if ($gameTemp.kdButtonUnderMouse != null) {
        return true;
      } else {
        return alias_SM_isAnyButtonPressed.call(this);
      }
    };
    //TODO: Добавить доп. проверку?
    //@[ALIAS]
    alias_SM_onMapLoaded = Scene_Map.prototype.onMapLoaded;
    Scene_Map.prototype.onMapLoaded = function() {
      $gameTemp.kdButtonUnderMouse = null;
      setTimeout((function() {
        return $gameTemp.kdButtonUnderMouse = null;
      }), 50);
      return alias_SM_onMapLoaded.call(this);
    };
  })();
});

// ■ END ButtonM Implementation
//---------------------------------------------------------------------------

// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  // * Button Mini User - класс с определением файла каждого состояния отдельно
  // * Принимает теже аргументы, только заместо имени файла, три изображения (имени)
  // ? states = { main, hover, disabled }
  return KDCore.ButtonMU = class ButtonMU extends KDCore.ButtonM {
    constructor() {
      super(...arguments);
    }

    //$[OVER]
    _loadBitmaps(states, isFull = true, sourceFolder = null) {
      var getterFunc;
      getterFunc = this._getGetter(sourceFolder);
      this._bitmaps.push(getterFunc(states.main));
      this._bitmaps.push(getterFunc(states.hover));
      // * Optional 03
      if (String.any(states.disabled)) {
        this._bitmaps.push(getterFunc(states.disabled));
      }
    }

  };
});

// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  var Sprite_TilingLine;
  Sprite_TilingLine = class Sprite_TilingLine extends KDCore.Sprite_TilingFrame {
    constructor() {
      super(...arguments);
    }

    //$[OVER BASE ALL BELOW]
    _fillPadding() {
      return 0;
    }

    _refreshTFrame() {} // * EMPTY

    _fillImagePartWidth() {
      return 4;
    }

    _fillImagePartHeight() {
      return 26;
    }

  };
  return KDCore.Sprite_TilingLine = Sprite_TilingLine;
});

// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  // * Пространство имён для всех UIElements
  KDCore.UI = KDCore.UI || {};
  (function() {    // * Общий класс для всех UI элементов
    //?rev 13.10.20
    var Sprite_UIElement;
    Sprite_UIElement = (function() {
      // * ABSTRACT значит что класс сам по себе ничего не создаёт, не хранит данные
      //@[ABSTRACT]
      class Sprite_UIElement extends KDCore.Sprite {
        constructor(params) {
          super();
          this.params = params;
          this._init();
        }

        // * Стандартный набор настроек
        defaultParams() {
          return {
            visible: true
          };
        }

        // * Общий метод (есть у всех элементов)
        // * По умолчанию вызывает drawText, но потомки могут переопределить
        draw() {
          return this.drawText(...arguments);
        }

        // * Общий метод
        drawText() {} // * EMPTY

        
          // * Если изначально невидимый (из параметров), то не активный вообще
        isActive() {
          return this.params.visible === true;
        }

        rootImageFolder() {
          return Sprite_UIElement.RootImageFolder;
        }

        // * Сделать чёрно белым
        desaturate() {
          this.filters = [new PIXI.filters.ColorMatrixFilter()];
          this.filters[0].desaturate();
        }

        // * Общий метод (можно ли редактировать визуально)
        isCanBeEdited() {
          return false;
        }

        // * Общий метод (надо ли скрывать при игровом сообщнии)
        isHaveHideWithMessageFlag() {
          return false;
        }

        // * Общий метод (находится ли объект под мышкой)
        isUnderMouse() {
          var ref;
          return (ref = this.zeroChild()) != null ? ref.isUnderMouse() : void 0;
        }

        // * Параметры первого элемента (если он есть)
        realWidth() {
          var child;
          child = this.zeroChild();
          if (child != null) {
            if (child instanceof KDCore.UI.Sprite_UIElement) {
              return child.realWidth();
            } else {
              return child.width;
            }
          }
          return 0;
        }

        realHeight() {
          var child;
          child = this.zeroChild();
          if (child != null) {
            if (child instanceof KDCore.UI.Sprite_UIElement) {
              return child.realHeight();
            } else {
              return child.height;
            }
          }
          return 0;
        }

        // * Первый "физический" элемент (спрайт)
        zeroChild() {
          return this.children[0];
        }

        // * Метод восстановления значения на стандартные настройки
        reset(property) {
          var e;
          try {
            switch (property) {
              case "position":
                this._resetPosition();
                break;
              default:
                this[property] = this.params[property];
            }
          } catch (error) {
            e = error;
            KDCore.warning(e);
          }
        }

      };

      // * Корневая директория для изображений
      Sprite_UIElement.RootImageFolder = "Alpha";

      return Sprite_UIElement;

    }).call(this);
    KDCore.UI.Sprite_UIElement = Sprite_UIElement;
  })();
  return (function() {    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ PRIVATE.coffee
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var _;
    //@[DEFINES]
    _ = KDCore.UI.Sprite_UIElement.prototype;
    _._init = function() {
      var e;
      this._prepare();
      try {
        return this._createContent();
      } catch (error) {
        e = error;
        KDCore.warning(e);
        // * Если при создании произошла ошибка, отключаем элемент
        return this.isActive = function() {
          return false;
        };
      }
    };
    
    // * Подготовка элемента (проверка параметров)
    _._prepare = function() {
      if (this.params == null) {
        this.params = this.defaultParams();
      }
      return this.visible = this.params.visible;
    };
    // * Наследники создают свои элементы в этом методе
    _._createContent = function() {}; // * EMPTY
    
    // * Сброс позиции
    _._resetPosition = function() {
      var x, y;
      ({x, y} = this.params.position);
      this.move(x, y);
    };
  })();
});

// ■ END PRIVATE.coffee
//---------------------------------------------------------------------------

// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  (function() {
    var Sprite_UIButton;
    // * Кнопка на экране, можно нажимать
    Sprite_UIButton = class Sprite_UIButton extends KDCore.UI.Sprite_UIElement {
      constructor() {
        super(...arguments);
      }

      // * Стандартный набор настроек
      defaultParams() {
        return {
          visible: true,
          image: "Button_Inventory",
          isHaveDisabled: true,
          click: "console.log('click')" // * число или код
        };
      }

      // * Кнопка не поддерживает перерисовку
      draw() {} // * EMPTY

      disable() {
        var ref;
        return (ref = this.button) != null ? ref.disable() : void 0;
      }

      enable() {
        var ref;
        return (ref = this.button) != null ? ref.enable() : void 0;
      }

      setState(isEnabled) {
        if (isEnabled) {
          return this.enable();
        } else {
          return this.disable();
        }
      }

      
        // * Просто вызов метода
      call() {
        var ref;
        return (ref = this.button) != null ? ref.click() : void 0;
      }

      // * Вызов метода с симуляцией нажатия
      click() {
        var ref, ref1;
        if ((ref = this.button) != null) {
          ref.click();
        }
        return (ref1 = this.button) != null ? ref1.simulateClick() : void 0;
      }

    };
    KDCore.UI.Sprite_UIButton = Sprite_UIButton;
  })();
  return (function() {    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ PRIVATE.coffee
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var _;
    //@[DEFINES]
    _ = KDCore.UI.Sprite_UIButton.prototype;
    //$[OVER]
    _._createContent = function() {
      if (this.params.image.isEmpty()) {
        KDCore.warning('You try create Button without image');
        return;
      }
      this.button = new KDCore.ButtonM(this.params.image, this.params.isHaveDisabled, this.rootImageFolder());
      this.add(this.button);
      return this._registerClickMethod();
    };
    _._registerClickMethod = function() {
      var commonEventId, e, method, ref, script;
      if (!String.any(this.params.click)) {
        return;
      }
      method = null;
      try {
        // * Если число, то значит общее событие
        if (isFinite(this.params.click)) {
          commonEventId = parseInt(this.params.click);
          if (commonEventId > 0) {
            method = function() {
              return $gameTemp.reserveCommonEvent(commonEventId);
            };
          }
        } else {
          // * Иначе скрипт
          script = this.params.click;
          method = function() {
            return eval(script);
          };
        }
        return this.button.addClickHandler(method);
      } catch (error) {
        e = error;
        KDCore.warning(e);
        return (ref = this.button) != null ? ref.clearClickHandler() : void 0;
      }
    };
  })();
});

// ■ END PRIVATE.coffee
//---------------------------------------------------------------------------

// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  (function() {    // * Рисует лицо персонажа (из папки Faces)
    var Sprite_UIFace;
    Sprite_UIFace = class Sprite_UIFace extends KDCore.UI.Sprite_UIElement {
      constructor() {
        super(...arguments);
      }

      // * Стандартный набор настроек
      defaultParams() {
        return {
          visible: true,
          faceName: "Actor1",
          faceIndex: 0,
          mirror: false,
          size: 144
        };
      }

      draw() {
        return this.drawFace(...arguments);
      }

      drawFace(faceName, faceIndex) {
        return this._drawFaceWhenReady(faceName, faceIndex);
      }

    };
    KDCore.UI.Sprite_UIFace = Sprite_UIFace;
  })();
  return (function() {    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ PRIVATE.coffee
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var _;
    //@[DEFINES]
    _ = KDCore.UI.Sprite_UIFace.prototype;
    //$[OVER]
    _._createContent = function() {
      return this._createFaceSprite();
    };
    _._createFaceSprite = function() {
      this._faceSpr = KDCore.Sprite.FromBitmap(this.params.size);
      if (this.params.mirror === true) {
        this._flipFaceSpr();
      }
      this.add(this._faceSpr);
      this._drawFaceWhenReady(this.params.faceName, this.params.faceIndex);
    };
    _._flipFaceSpr = function() {
      this._faceSpr.scale.x = -1;
      this._faceSpr.x = this.params.size;
    };
    _._drawFaceWhenReady = function(name, index = 0) {
      var ref;
      if ((ref = this._faceSpr) != null) {
        ref.clear();
      }
      if (!String.any(name)) {
        return;
      }
      if (index < 0) {
        return;
      }
      this._drawOnReady = {name, index};
      this._faceSourceBitmap = ImageManager.loadFace(name);
      this._faceSourceBitmap.addLoadListener(this._drawFace.bind(this));
      this._drawFace();
    };
    _._drawFace = function() {
      var fh, fw, size, sx, sy;
      if (this._faceSpr == null) {
        return;
      }
      this._faceSpr.clear();
      if (!String.any(this._drawOnReady.name)) {
        return;
      }
      fw = ImageManager.faceWidth;
      fh = ImageManager.faceHeight;
      size = this.params.size;
      sx = (this._drawOnReady.index % 4) * fw;
      sy = Math.floor(this._drawOnReady.index / 4) * fh;
      this._faceSpr.bitmap.blt(this._faceSourceBitmap, sx, sy, fw, fh, 0, 0, size, size);
    };
  })();
});

// ■ END PRIVATE.coffee
//---------------------------------------------------------------------------

// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  (function() {
    var Sprite_UIGauge;
    Sprite_UIGauge = class Sprite_UIGauge extends KDCore.UI.Sprite_UIElement {
      constructor() {
        super(...arguments);
      }

      // * Стандартный набор настроек
      defaultParams() {
        return {
          visible: true,
          fill: "",
          foreground: "",
          mask: "",
          backColor: "#000000".toCss(),
          backOpacity: 255,
          vertical: false
        };
      }

      draw() {
        return this.drawGauge(...arguments);
      }

      drawGauge(percent = 1) {
        this._lastValue = percent;
        return this._drawGauge(percent);
      }

      isVertical() {
        return this.params.vertical === true;
      }

    };
    KDCore.UI.Sprite_UIGauge = Sprite_UIGauge;
  })();
  return (function() {    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ PRIVATE.coffee
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var _;
    //@[DEFINES]
    _ = KDCore.UI.Sprite_UIGauge.prototype;
    //$[OVER]
    _._createContent = function() {
      // * Загружается главное изображение, затем уже все остальные, т.к. нужны размеры
      return this._loadFillImage();
    };
    _._loadFillImage = function() {
      // * Главное изображение, поэтому если не указано, то ничего
      if (this.params.fill.isEmpty()) {
        KDCore.warning('You try create Gauge without fill image');
        return;
      }
      KDCore.Utils.loadImageAsync(this.rootImageFolder(), this.params.fill).then(this._createParts.bind(this));
    };
    // * Получаем изображение заполнения и создаём части (т.к. есть размеры)
    _._createParts = function(fillBitmap) {
      this.fillBitmap = fillBitmap;
      this._createBackground();
      this._createFillLayer();
      this._loadForeground();
      this._loadMask();
      return this._onReady();
    };
    _._createBackground = function() {
      this.background = KDCore.Sprite.FromBitmap(this.fillBitmap.width, this.fillBitmap.height);
      this.background.b().fillAll(this.params.backColor);
      this.background.opacity = this.params.backOpacity;
      return this.add(this.background);
    };
    _._createFillLayer = function() {
      this.fillLayer = KDCore.Sprite.FromBitmap(this.fillBitmap.width, this.fillBitmap.height);
      return this.add(this.fillLayer);
    };
    _._loadForeground = function() {
      var fore;
      if (String.isNullOrEmpty(this.params.foreground)) {
        return;
      }
      fore = KDCore.Sprite.FromImg(this.params.foreground, this.rootImageFolder());
      return this.add(fore);
    };
    _._loadMask = function() {
      var mask;
      if (String.isNullOrEmpty(this.params.mask)) {
        return;
      }
      mask = KDCore.Sprite.FromImg(this.params.mask, this.rootImageFolder());
      this.mask = mask;
      return this.add(mask);
    };
    // * Если что-то было до готовности, нарисовать
    _._onReady = function() {
      this.drawGauge(this._lastValue);
    };
    _._drawGauge = function(percent) {
      if (this.fillLayer == null) {
        return;
      }
      this.fillLayer.clear();
      if (this.isVertical()) {
        return this._drawVerGauge(percent);
      } else {
        return this._drawHorGauge(percent);
      }
    };
    _._drawHorGauge = function(percent) {
      var w;
      w = this.fillBitmap.width * percent;
      return this.fillLayer.b().blt(this.fillBitmap, 0, 0, w, this.fillLayer.height, 0, 0);
    };
    _._drawVerGauge = function(percent) {
      var h, hy;
      h = this.fillBitmap.height * percent;
      hy = this.fillBitmap.height - h;
      this.fillLayer.b().blt(this.fillBitmap, 0, 0, this.fillLayer.width, h, 0, hy);
    };
  })();
});

// ■ END PRIVATE.coffee
//---------------------------------------------------------------------------

// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  (function() {
    var Sprite_UIIcon;
    Sprite_UIIcon = class Sprite_UIIcon extends KDCore.UI.Sprite_UIElement {
      constructor() {
        super(...arguments);
      }

      // * Стандартный набор настроек
      defaultParams() {
        return {
          visible: true,
          index: 0,
          size: 32
        };
      }

      draw() {
        return this.drawIcon(...arguments);
      }

      drawIcon(index = 0) {
        this._lastValue = index;
        return this._drawIcon(index);
      }

    };
    KDCore.UI.Sprite_UIIcon = Sprite_UIIcon;
  })();
  return (function() {    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ PRIVATE.coffee
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var _;
    //@[DEFINES]
    _ = KDCore.UI.Sprite_UIIcon.prototype;
    //$[OVER]
    _._createContent = function() {
      this._createIcon();
      return this._drawIcon(this.params.index);
    };
    _._createIcon = function() {
      this._icon = KDCore.Sprite.FromBitmap(this.params.size, this.params.size);
      this.add(this._icon);
      return this._onReady();
    };
    _._onReady = function() {
      return this.drawIcon(this._lastValue);
    };
    _._drawIcon = function(index) {
      this._icon.clear();
      if (index <= 0) {
        return;
      }
      this._icon.drawIcon(0, 0, index, this.params.size);
    };
  })();
});

// ■ END PRIVATE.coffee
//---------------------------------------------------------------------------

// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  (function() {
    var Sprite_UIImage;
    Sprite_UIImage = class Sprite_UIImage extends KDCore.UI.Sprite_UIElement {
      constructor() {
        super(...arguments);
      }

      // * Стандартный набор настроек
      defaultParams() {
        return {
          visible: true,
          image: ""
        };
      }

      draw() {
        return this.drawImage(...arguments);
      }

      drawImage(image) {
        return this._drawImage(image);
      }

    };
    KDCore.UI.Sprite_UIImage = Sprite_UIImage;
  })();
  return (function() {    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ PRIVATE.coffee
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var _;
    //@[DEFINES]
    _ = KDCore.UI.Sprite_UIImage.prototype;
    //$[OVER]
    _._createContent = function() {
      return this._drawImage(this.params.image);
    };
    _._drawImage = function(image) {
      this._clearImage();
      if (!String.isNullOrEmpty(image)) {
        this._image = KDCore.Sprite.FromImg(image, this.rootImageFolder());
        this.add(this._image);
      }
    };
    _._clearImage = function() {
      if (this._image == null) {
        return;
      }
      this._image.visible = false;
      this.removeChild(this._image);
      return this._image = null;
    };
  })();
});

// ■ END PRIVATE.coffee
//---------------------------------------------------------------------------

// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  (function() {
    var Sprite_UIRect;
    Sprite_UIRect = class Sprite_UIRect extends KDCore.UI.Sprite_UIElement {
      constructor() {
        super(...arguments);
      }

      // * Стандартный набор настроек
      defaultParams() {
        return {
          visible: true,
          size: {
            w: 60,
            h: 20
          },
          fillColor: "#FFFFFF".toCss(),
          fillOpacity: 255,
          borderColor: "#000000".toCss(),
          borderThickness: 1,
          borderOpacity: 255
        };
      }

      draw() {
        return this.fill(...arguments);
      }

      fill(color, opacity = 255) {
        return this._fill(color, opacity);
      }

      drawBorder(color, thickness = 1, opacity = 255) {
        return this._drawBorder(color, thickness, opacity);
      }

    };
    KDCore.UI.Sprite_UIRect = Sprite_UIRect;
  })();
  return (function() {    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ PRIVATE.coffee
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var _;
    //@[DEFINES]
    _ = KDCore.UI.Sprite_UIRect.prototype;
    //$[OVER]
    _._createContent = function() {
      if (String.any(this.params.fillColor)) {
        this._createFill();
        this.fill(this.params.fillColor, this.params.fillOpacity);
      }
      if (String.any(this.params.borderColor) && this.params.borderThickness > 0) {
        this._createBorder();
        return this.drawBorder(this.params.borderColor, this.params.borderThickness, this.params.borderOpacity);
      }
    };
    _._createFill = function() {
      this._fillSpr = KDCore.Sprite.FromBitmap(this.params.size.w, this.params.size.h);
      return this.addChild(this._fillSpr);
    };
    _._createBorder = function() {
      this._borderSprite = KDCore.Sprite.FromBitmap(this.params.size.w, this.params.size.h);
      return this.addChild(this._borderSprite);
    };
    _._fill = function(color, opacity) {
      if (this._fillSpr == null) {
        return;
      }
      this._fillSpr.fillAll(color);
      this._fillSpr.opacity = opacity;
    };
    _._drawBorder = function(color, thickness, opacity) {
      var b;
      if (this._borderSprite == null) {
        return;
      }
      this._borderSprite.clear();
      b = this._borderSprite.b();
      // * Top line
      b.fillRect(0, 0, b.width, thickness, color);
      // * Bottom line
      b.fillRect(0, b.height - thickness, b.width, thickness, color);
      // * Left line
      b.fillRect(0, 0, thickness, b.height, color);
      // * Right line
      b.fillRect(b.width - thickness, 0, thickness, b.height, color);
      return this._borderSprite.opacity = opacity;
    };
  })();
});

// ■ END PRIVATE.coffee
//---------------------------------------------------------------------------

// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  (function() {    //rev 30.12.21
    var Sprite_UIText;
    Sprite_UIText = class Sprite_UIText extends KDCore.UI.Sprite_UIElement {
      constructor() {
        super(...arguments);
      }

      // * Стандартный набор настроек
      defaultParams() {
        return {
          visible: true,
          size: {
            w: 60,
            h: 20
          },
          alignment: "center",
          font: {
            face: null,
            size: 18,
            italic: false
          },
          margins: {
            x: 0,
            y: 0
          },
          outline: {
            color: null,
            width: 2
          },
          textColor: "#FFFFFF".toCss()
        };
      }

      //?DYNAMIC
      // * Сперва рисуем по готовности, а как загрузился спрайт, меняем
      drawText(text) {
        return this._drawTextWhenReady(text);
      }

      // * Сборка текста с учётом формата
      drawTextWithFormat(/*format string, arguments parameters... */) {
        var text;
        text = this._convertFormatedString(...arguments);
        this.drawText(text);
      }

      // * Пишет текст с определённым цветом (один раз)
      drawTextColor(text, colorCss) {
        if (this._textSpr == null) {
          return;
        }
        this._textSpr.b().textColor = colorCss;
        this.drawText(text);
        this._textSpr.b().textColor = this.params.textColor;
      }

    };
    KDCore.UI.Sprite_UIText = Sprite_UIText;
  })();
  return (function() {    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ PRIVATE.coffee
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var _;
    //@[DEFINES]
    _ = KDCore.UI.Sprite_UIText.prototype;
    //$[OVER]
    _._createContent = function() {
      return this._createTextSprite();
    };
    _._createTextSprite = function() {
      this._textSpr = KDCore.Sprite.FromParams(this.params);
      this._textSpr.onReady(this._onReady.bind(this));
      return this.add(this._textSpr);
    };
    // * Выполнить по готовности
    _._onReady = function() {
      // * Переключить метод, так как уже готов
      this.drawText = this._drawText;
      // * Написать то что нужно было до готовности (если есть)
      if (this._drawOnReady == null) {
        return;
      }
      this.drawText(this._drawOnReady);
      this._drawOnReady = null;
    };
    _._drawText = function(text) {
      if (this._textSpr == null) {
        return;
      }
      this._textSpr.clear();
      if (text != null) {
        this._textSpr.drawTextFull(text);
      }
    };
    // * Написать текст когда будет готов
    _._drawTextWhenReady = function(text) {
      this._drawOnReady = text;
      return this._drawText(text);
    };
    
    // * Заменить вхождения %1, %2 на значения параметров
    _._convertFormatedString = function(/*text, args...*/) {
      var e, i, j, ref, text;
      try {
        text = arguments[0];
        for (i = j = 1, ref = arguments.length; (1 <= ref ? j < ref : j > ref); i = 1 <= ref ? ++j : --j) {
          try {
            if (arguments[i] == null) {
              continue;
            }
            text = text.replace("%" + i, arguments[i]);
          } catch (error) {
            e = error;
            KDCore.UI.warning(e);
            text = "[wrong format text input]";
          }
        }
        return text;
      } catch (error) {
        e = error;
        KDCore.UI.warning(e);
        return "[wrong format text input]";
      }
    };
  })();
});

// ■ END PRIVATE.coffee
//---------------------------------------------------------------------------

// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  (function() {    //rev 30.12.21
    var Sprite_UITextExt;
    Sprite_UITextExt = class Sprite_UITextExt extends KDCore.UI.Sprite_UIText {
      constructor() {
        super(...arguments);
      }

      // * Стандартный набор настроек
      defaultParams() {
        return {
          visible: true,
          size: {
            w: 200,
            h: 60
          },
          font: {
            face: null,
            size: 14,
            italic: false
          },
          margins: {
            x: 0,
            y: 0
          },
          // * новые параметры (KDCore 2.7)
          //?null могут быть
          singleLine: false,
          forceCentered: false
        };
      }

      //$[OVER]
      // * Данный метод не поддерживается, так как тут основа не Sprite, а Window
      drawTextColor() {
        return this.drawText(...arguments);
      }

    };
    KDCore.UI.Sprite_UITextExt = Sprite_UITextExt;
  })();
  return (function() {    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ PRIVATE.coffee
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var _;
    //@[DEFINES]
    _ = KDCore.UI.Sprite_UITextExt.prototype;
    //$[OVER]
    _._createTextSprite = function() {
      var rect;
      rect = new PIXI.Rectangle(0, 0, this.params.size.w, this.params.size.h);
      this._textSpr = new KDCore.Window_ExtTextLineBase(rect, this.params.font);
      this._textSpr.x = this.params.margins.x || 0;
      this._textSpr.y = this.params.margins.y || 0;
      this.add(this._textSpr);
      // * На следующий кадр, чтобы не было потери текста (опасно)
      //setTimeout (=> @_onReady() ), 10
      this._onReady(); // * Сразу
    };
    
    //$[OVER]
    _._drawText = function(text) {
      if (this._textSpr == null) {
        return;
      }
      this._textSpr.contents.clear();
      if (this.params.forceCentered === true) {
        this._textSpr.drawTextExInCenter(text, 0, 0, this._textSpr.width, this._textSpr.height);
      } else {
        if (this.params.singleLine === true) {
          this._textSpr.drawTextEx(text, 0, 0, this._textSpr.width);
        } else {
          // * По умолчанию
          this._textSpr.drawTextExWithWordWrap(text, 0, 0, this._textSpr.width);
        }
      }
    };
  })();
});

// ■ END PRIVATE.coffee
//---------------------------------------------------------------------------

// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  (function() {
    var Sprite_UITextWithBack;
    Sprite_UITextWithBack = class Sprite_UITextWithBack extends KDCore.UI.Sprite_UIElement {
      constructor() {
        super(...arguments);
      }

      // * Стандартный набор настроек
      defaultParams() {
        return {
          visible: true,
          text: {
            visible: true,
            size: {
              w: 60,
              h: 20
            },
            alignment: "center",
            font: {
              face: null,
              size: 18,
              italic: false
            },
            margins: {
              x: 0,
              y: 0
            },
            outline: {
              color: null,
              width: 2
            },
            textColor: "#000000".toCss()
          },
          rect: {
            visible: true,
            size: {
              w: 60,
              h: 20
            },
            fillColor: "#FFFFFF".toCss(),
            fillOpacity: 255,
            borderColor: "#000000".toCss(),
            borderThickness: 1,
            borderOpacity: 255
          },
          textMargins: {
            x: 0,
            y: 0
          }
        };
      }

      draw() {
        return this.drawText(...arguments);
      }

      // * Aргументы смотри в Sprite_UIText
      drawText() {
        return this.text.draw(...arguments);
      }

      drawTextColor() {
        return this.text.drawTextColor(...arguments);
      }

      // * Аргументы смотри в Sprite_UIRect
      fill() {
        return this.rect.fill(...arguments);
      }

      drawBorder() {
        return this.rect.drawBorder(...arguments);
      }

      //$[OVER]
      isUnderMouse() {
        return this.rect.isUnderMouse();
      }

    };
    KDCore.UI.Sprite_UITextWithBack = Sprite_UITextWithBack;
  })();
  return (function() {    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ PRIVATE.coffee
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var _;
    //@[DEFINES]
    _ = KDCore.UI.Sprite_UITextWithBack.prototype;
    //$[OVER]
    _._createContent = function() {
      this._createRect();
      return this._createText();
    };
    _._createRect = function() {
      this.rect = new KDCore.UI.Sprite_UIRect(this.params.rect);
      return this.addChild(this.rect);
    };
    _._createText = function() {
      var x, y;
      this.text = new KDCore.UI.Sprite_UIText(this.params.text);
      ({x, y} = this.params.textMargins);
      this.text.move(x, y);
      return this.addChild(this.text);
    };
  })();
});

// ■ END PRIVATE.coffee
//---------------------------------------------------------------------------

// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  (function() {
    var Sprite_UIColorGauge;
    Sprite_UIColorGauge = class Sprite_UIColorGauge extends KDCore.UI.Sprite_UIGauge {
      constructor() {
        super(...arguments);
      }

      // * Стандартный набор настроек
      defaultParams() {
        return {
          visible: true,
          size: {
            w: 100,
            h: 40
          },
          fill: "#FFFFFF", // * В отличии от Gauge, тут цвет, а не картинка
          foreground: "", // картинка
          mask: "", // картинка
          backColor: "#000000".toCss(),
          backOpacity: 255,
          vertical: false
        };
      }

    };
    KDCore.UI.Sprite_UIColorGauge = Sprite_UIColorGauge;
  })();
  return (function() {    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ PRIVATE.coffee
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var _;
    //@[DEFINES]
    _ = KDCore.UI.Sprite_UIColorGauge.prototype;
    //$[OVER]
    // * Заместо изображения используем простой Bitmap с заливкой цвета
    _._loadFillImage = function() {
      var fillBitmap;
      fillBitmap = new Bitmap(this.params.size.w, this.params.size.h);
      fillBitmap.fillAll(this.params.fill);
      this._createParts(fillBitmap);
    };
  })();
});

// ■ END PRIVATE.coffee
//---------------------------------------------------------------------------

// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  var ALIAS__processEscapeCharacter, _;
  //@[DEFINES]
  _ = Window_Base.prototype;
  //@[ALIAS]
  ALIAS__processEscapeCharacter = _.processEscapeCharacter;
  _.processEscapeCharacter = function(code, textState) {
    switch (code) {
      case 'CHEX':
        this.pProcessColorChangeHex(this.pObtainEscapeParamHexColor(textState));
        break;
      case 'ISZ':
        this.pProcessDrawIconSized(this.pObtainEscapeParamIconArr(textState), textState);
        break;
      case 'PSZ':
        this.pProcessDrawPictureSized(this.pObtainEscapeParamImgArr(textState), textState, false);
        break;
      case 'PSB':
        this.pProcessDrawPictureSized(this.pObtainEscapeParamImgArr(textState), textState, true);
        break;
      default:
        ALIAS__processEscapeCharacter.call(this, code, textState);
    }
  };
  //?NEW
  _.pObtainEscapeParamHexColor = function(textState) {
    var arr, regExp, textPart;
    regExp = /^\[(#?([0-9a-fA-F]{2}){3}|([0-9a-fA-F]){3})\]/;
    textPart = textState.text.slice(textState.index);
    arr = regExp.exec(textPart);
    if (arr != null) {
      textState.index += arr[0].length;
      return arr[1];
    } else {
      return "";
    }
  };
  //?NEW
  _.pObtainEscapeParamIconArr = function(textState) {
    var arr, params, regExp, textPart;
    regExp = /^\[(\d+,\s*\d+,\s*-?\d+,\s*-?\d+)\]/;
    textPart = textState.text.slice(textState.index);
    arr = regExp.exec(textPart);
    if (arr != null) {
      textState.index += arr[0].length;
      if (arr[1] != null) {
        params = arr[1].split(",").map(function(i) {
          return parseInt(i.trim());
        });
        return params;
      }
    }
    return [];
  };
  //?NEW
  _.pObtainEscapeParamImgArr = function(textState) {
    var arr, params, regExp, textPart;
    regExp = /^\[(\w+,\s*\d+,\s*\d+,\s*-?\d+,\s*-?\d+)\]/;
    textPart = textState.text.slice(textState.index);
    arr = regExp.exec(textPart);
    if (arr != null) {
      textState.index += arr[0].length;
      if (arr[1] != null) {
        params = arr[1].split(",").map(function(i) {
          if (isFinite(i)) {
            return parseInt(i.trim());
          } else {
            return i;
          }
        });
        return params;
      }
    }
    return [];
  };
  //?NEW
  _.pProcessColorChangeHex = function(colorHex) {
    var e;
    try {
      this.changeTextColor(colorHex);
    } catch (error) {
      e = error;
      KDCore.warning(e);
      this.resetTextColor();
    }
  };
  //?NEW
  //?params: [INDEX, SIZE, DX, DY]
  _.pProcessDrawIconSized = function(params, textState) {
    var dx, dy, e, iconIndex, size, staticMargin, x, y;
    try {
      if (params == null) {
        return;
      }
      if (params.isEmpty()) {
        return;
      }
      size = params[1];
      if (params[1] == null) {
        size = ImageManager.iconWidth;
      }
      if (params[2] == null) {
        params[2] = 0;
      }
      if (params[3] == null) {
        params[3] = 0;
      }
      iconIndex = params[0];
      dx = params[2];
      dy = params[3];
      staticMargin = 2;
      x = textState.x + staticMargin + dx;
      y = textState.y + staticMargin + dy;
      // * Только в режиме рисования
      if (textState.drawing === true) {
        this.contents.drawIcon(x, y, iconIndex, size);
      }
      textState.x += size + (staticMargin * 2) + dx;
    } catch (error) {
      e = error;
      KDCore.warning(e);
    }
  };
  //?NEW
  //?params: [NAME, W, H, DX, DY]
  _.pProcessDrawPictureSized = function(params, textState, isUnderText = false) {
    var drawBitmap, drawProcess, e, height, name, source, width, x, y;
    try {
      if (params == null) {
        return;
      }
      if (params.isEmpty()) {
        return;
      }
      name = params[0];
      if (!String.any(name)) {
        return;
      }
      width = params[1];
      height = params[2];
      if (params[3] == null) {
        params[3] = 0;
      }
      if (params[4] == null) {
        params[4] = 0;
      }
      x = textState.x + 2 + params[3];
      y = textState.y + 2 + params[4];
      drawBitmap = this.contents;
      source = this.pGetSourceImageForDrawPictureSized(name);
      if (textState.drawing === true) {
        drawProcess = function() {
          var e;
          try {
            if (drawBitmap == null) {
              return;
            }
            return drawBitmap.drawOnMe(source, x, y, width, height);
          } catch (error) {
            e = error;
            return KDCore.warning(e);
          }
        };
        source.addLoadListener(drawProcess);
      }
      if (isUnderText !== true) {
        // * Вариант, что текст не будет "перескакивать" за ширину картинки а пойдёт поверх (т.е. фоновая картинка)
        // * Если картине не preload, то может "вылезти" на текст потом, так как рисоваться будет позже
        textState.x += width + 4 + params[3];
      }
    } catch (error) {
      e = error;
      KDCore.warning(e);
    }
  };
  // * Данный метод вынесен отдельно, чтобы можно было переопределять папки
  return _.pGetSourceImageForDrawPictureSized = function(name) {
    return ImageManager.loadPicture(name);
  };
});

// Generated by CoffeeScript 2.6.1


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  var FloatingWindow;
  
    // * Общий класс для всех окон на карте
  /*parameters
      {
          draggable: true,
          closeButton: true,
          moveToCenter: true,
          alwaysOnTop: true,
          header: true
      }
  */
  FloatingWindow = class FloatingWindow extends KDCore.Sprite {
    constructor(mainParent, windowW, windowH, parameters) {
      super();
      this.mainParent = mainParent;
      this.windowW = windowW;
      this.windowH = windowH;
      this.parameters = parameters;
      this._init();
      return;
    }

    static StaticSettings() {
      return {
        draggable: false,
        closeButton: false,
        moveToCenter: false,
        alwaysOnTop: false,
        header: false
      };
    }

    // * Статическое окно с дочерним
    static StaticWindow(parent, sub) {
      var p, w;
      p = KDCore.FloatingWindow.StaticSettings();
      w = new KDCore.FloatingWindow(parent, sub.width, sub.height, p);
      w.setSubWindow(sub);
      w.open();
      return w;
    }

    isActive() {
      return this.visible === true;
    }

    isReady() {
      return this._isReady === true;
    }

    isMouseIn() {
      return this.inPosition(TouchInput);
    }

    isOpen() {
      return this.isActive();
    }

    // * Дочернее окно (если есть)
    sub() {
      return this._subw;
    }

    setOnReadyHandler(_readyHandler) {
      this._readyHandler = _readyHandler;
      if ((this._readyHandler != null) && this._isReady === true) {
        return this._readyHandler();
      }
    }

    isDraggable() {
      return this._isDraggable === true && (this._headerSpr != null) && this._headerSpr.visible === true && this.isOpen();
    }

    setCloseHandler(_closeHandler) {
      this._closeHandler = _closeHandler;
    }

    callCloseHandler() {
      if (this._closeHandler != null) {
        return this._closeHandler();
      }
    }

    setDraggingHandler(_dragHandler) {
      this._dragHandler = _dragHandler;
    }

    setDragEndHandler(_dragEndHandler) {
      this._dragEndHandler = _dragEndHandler;
    }

    hideHeader() {} //TODO:

    hideCloseButton() {} //TODO:

    
      // * Сдвиг заголовка по X, чтобы рамку не задевал
    headerMarginX() {
      return 2;
    }

    // * Сдвиг заголовка по Y, чтобы рамку не задевал
    headerMarginY() {
      return 0;
    }

    // * Стандартная позиция кнопки "закрыть"
    closeButtonPosition() {
      return {
        x: this.width - 24,
        y: 4
      };
    }

    open() {
      if (this.isOpen()) {
        return;
      }
      this._open();
      this._afterOpen();
    }

    close() {
      if (!this.isOpen()) {
        return;
      }
      this._close();
      this._afterClose();
    }

    rootImageFolder() {
      return "Alpha/Windows";
    }

    update() {
      super.update();
      this._updateMouseCheckThread();
      this._updateDragging();
    }

    // * Добавить спрайт на специальный слой контента
    addContent(sprite) {
      return this._contentLayer.addChild(sprite);
    }

    // * Добавить дочернее окно
    setSubWindow(w) {
      this._subw = w;
      this.addContent(w);
    }

    destroy() {
      this._close();
      return Sprite.prototype.destroy.call(this);
    }

  };
  (function() {    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ PRIVATE.coffee
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var _;
    //@[DEFINES]
    _ = FloatingWindow.prototype;
    _._init = function() {
      var ref;
      // * Окно всегда закрыто
      this.visible = false;
      // * Контент прогрузился?
      this._isReady = false;
      this._applyParameters();
      if (this._isAlwaysOnTop === false) {
        // * Если не всегда поверх окон, то добавляем сразу к родителю (один раз)
        if ((ref = this.mainParent) != null) {
          ref.addChild(this);
        }
      }
      this._initFloatingSystem();
      this._createLayers();
      this._loadWindowFrame();
    };
    // * Тут ничего не создавать, не двигать, так как
    // * конент создаётся Async, см. метод _createCustomElements
    _._applyParameters = function() {
      var p;
      this._applyDefaults();
      if (this.parameters == null) {
        return;
      }
      p = this.parameters;
      if (p.draggable != null) {
        this._isDraggable = p.draggable;
      }
      if (p.moveToCenter != null) {
        this._isMoveToCenter = p.moveToCenter;
      }
      if (p.header != null) {
        this._isHeaderVisible = p.header;
      }
      if (p.closeButton != null) {
        this._isHaveCloseButton = p.closeButton;
      }
      if (p.alwaysOnTop != null) {
        this._isAlwaysOnTop = p.alwaysOnTop;
      }
    };
    _._applyDefaults = function() {
      // * Окно можно перетаскивать мышкой (по умолчанию - да)
      this._isDraggable = true;
      this._isMoveToCenter = true;
      this._isHeaderVisible = true;
      this._isHaveCloseButton = true;
      this._isAlwaysOnTop = true;
    };
    _._initFloatingSystem = function() {
      if ($gameTemp._floatingWindows == null) {
        // * Создаём массив окон, он нужен для правильного
        // закрытия окон (по очереди) и перемещения drag and drop
        // с учётом верхнего окна
        $gameTemp._floatingWindows = [];
      }
      // * Вспомогательная переменная, чтобы не вызывать методы каждый кадр
      this._mouseIn = false;
      // * Тоже вспомогательная переменная
      this._dragging = false;
    };
    _._moveToStartPosition = function() {
      if (this._isMoveToCenter === true) {
        return this.moveToCenter(Graphics.width / 2, Graphics.height / 2);
      }
    };
    _._closeButtonClick = function() {
      // * При исчезании, кнопка не успевает себя "удалить"
      $gameTemp.kdButtonUnderMouse = null;
      this.callCloseHandler();
      return this.close();
    };
    (function() {      // * DRAGGING
      // -----------------------------------------------------------------------
      _._updateDragging = function() {
        if (!this.isDraggable()) {
          return;
        }
        // * Если мы уже двигаем окно, но мышка вышла за границы, то можно дальше двигать
        // * Только если мышка не в окне и не двигали ранее, то не проверяем
        if (this._mouseIn === false && this._dragging === false) {
          return;
        }
        // * Если существует объект который сейчас dragging
        if ($gameTemp.pkdDraggableInstance != null) {
          // * Если этот объект не этот объект, то выходим из метода
          if ($gameTemp.pkdDraggableInstance !== this) {
            return;
          }
        }
        if (TouchInput.isLongPressed()) {
          if (this._dragging === false) {
            this._onDragStart();
          } else {
            this._onDragging();
          }
        } else {
          this._stopDragging();
        }
      };
      _._onDragStart = function() {
        // * Проверка, в области Header или нет
        if (!this._isMouseInHeader()) {
          return;
        }
        // * Разница в координатах курсора и объекта, чтобы убрать эффект "прыжка"
        this.opacity = 200;
        this._deltaXY = this.getDeltaXY();
        this._dragging = true;
        // * Устанавливаем глобальную ссылку на объект перемещения
        $gameTemp.pkdDraggableInstance = this;
      };
      _.getDeltaXY = function() {
        var p;
        p = new KDCore.Point(this.x, this.y);
        return p.delta(TouchInput);
      };
      _._onDragging = function() {
        // * Защита от перетаскивания за края экрана
        if (!this._isNewMousePositionOnScreen()) {
          return;
        }
        this.move(TouchInput.x - this._deltaXY.x, TouchInput.y - this._deltaXY.y);
        if (this._dragHandler != null) {
          return this._dragHandler();
        }
      };
      _._stopDragging = function() {
        if (this._dragging === true) {
          this._dragging = false;
          this.opacity = 255;
          this._clearDraggableGlocalInstance();
          if (this._dragEndHandler != null) {
            this._dragEndHandler();
          }
        }
      };
      // * Освобождаем глобальную ссылку
      _._clearDraggableGlocalInstance = function() {
        if ($gameTemp.pkdDraggableInstance === this) {
          return $gameTemp.pkdDraggableInstance = null;
        }
      };
      _._isMouseInHeader = function() {
        if (this._headerSpr == null) {
          return false;
        }
        return this._headerSpr.isContainsPoint(TouchInput);
      };
      _._isNewMousePositionOnScreen = function() {
        return KDCore.Utils.isPointInScreen(TouchInput, 10);
      };
    })();
    (function() {      // -----------------------------------------------------------------------

      // * CREATE ELEMENTS
      // -----------------------------------------------------------------------
      
      // * Слои нужны, так как изображения загружаються асинхронно
      _._createLayers = function() {
        this._mainLayer = new Sprite();
        this._contentLayer = new Sprite();
        this._headerLayer = new Sprite();
        this._closeButtonLayer = new Sprite();
        this.addChild(this._mainLayer);
        this.addChild(this._contentLayer);
        this.addChild(this._headerLayer);
        this.addChild(this._closeButtonLayer);
      };
      _._loadWindowFrame = function() {
        return KDCore.Utils.loadImageAsync(this.rootImageFolder(), "windowFrame").then(this._createWindow.bind(this));
      };
      _._createWindow = function(frameImage) {
        this.bitmap = new Bitmap(this.windowW, this.windowH);
        this.wFrame = new KDCore.Sprite_TilingFrame(this.windowW, this.windowH, frameImage);
        this._mainLayer.addChild(this.wFrame);
        this._createParts();
      };
      _._createParts = function() {
        this._loadHeader();
        if (this._isHaveCloseButton === true) {
          this._createCloseButton();
        }
        this._moveToStartPosition();
        this._createCustomElements();
        // * Окно готово
        this._isReady = true;
        if (this._readyHandler != null) {
          this._readyHandler();
        }
      };
      _._loadHeader = function() {
        return KDCore.Utils.loadImageAsync(this.rootImageFolder(), "headerLine").then(this._createHeader.bind(this));
      };
      _._createHeader = function(headerLineImage) {
        var w;
        w = this.windowW - (this.headerMarginX() * 2);
        this._headerSpr = new KDCore.Sprite_TilingLine(w, headerLineImage.height, headerLineImage);
        this._headerSpr.x = this.headerMarginX();
        this._headerSpr.y = this.headerMarginY();
        this._headerLayer.addChild(this._headerSpr);
        if (this._isHeaderVisible === true) {
          // * Сдвигаем контент, чтобы было начало под заголовком
          this._contentLayer.y += headerLineImage.height + this.headerMarginY();
        } else {
          this._headerSpr.visible = false;
        }
      };
      _._createCloseButton = function() {
        this._closeButton = new KDCore.ButtonM("windowCloseButton", false, this.rootImageFolder());
        this._closeButtonLayer.addChild(this._closeButton);
        this._closeButton.move(this.closeButtonPosition());
        this._closeButton.addClickHandler(this._closeButtonClick.bind(this));
      };
      // * Наследники создают свои элементы в этом методе
      // * Есть специальный метод addContent()
      _._createCustomElements = function() {}; // * EMPTY
    })();
    (function() {      // -----------------------------------------------------------------------

      // * MOUSE
      // -----------------------------------------------------------------------
      
      // * Определение если мышка в области окна
      //TODO: Есть проблема при открытии окна сразу под курсором
      _._registerMouseInOut = function() {
        if (!this.isOpen()) {
          return;
        }
        if (this.isMouseIn()) {
          if (this._mouseIn === false) {
            this._mouseIn = true;
            this._onMouseIn();
          }
        } else {
          if (this._mouseIn === true) {
            this._mouseIn = false;
            this._onMouseOut();
          }
        }
      };
      // * Используется похожая система что и в KDCore.ButtonM
      _._onMouseIn = function() {
        return $gameTemp.floatingWindowUnderMouse = this;
      };
      _._onMouseOut = function() {
        if ($gameTemp.floatingWindowUnderMouse === this) {
          return $gameTemp.floatingWindowUnderMouse = null;
        }
      };
      // * Будем проверять мышка ли в окне только при открытом окне
      _._createMouseCheckThread = function() {
        this._mouseCheckThread = new KDCore.TimedUpdate(1, this._registerMouseInOut.bind(this));
        this._updateMouseCheckThread = () => {
          return this._mouseCheckThread.update();
        };
        return this._mouseCheckThread.call();
      };
      // * Когда окно закрывается, никаких проверок, обнуляем метод
      _._destroyMouseCheckThread = function() {
        this._mouseCheckThread = null;
        return this._updateMouseCheckThread = function() {};
      };
      //?DYNAMIC
      _._updateMouseCheckThread = function() {}; // * EMPTY
    })();
    (function() {      // -----------------------------------------------------------------------

      // * OPEN OR CLOSE
      // -----------------------------------------------------------------------
      _._open = function() {
        var ref;
        this.visible = true;
        $gameTemp._floatingWindows.push(this);
        if (this._isAlwaysOnTop === true) {
          // * Окно, которое открывается, всегда снова выше остальных (опция)
          if ((ref = this.mainParent) != null) {
            ref.addChild(this);
          }
        }
        return this._createMouseCheckThread();
      };
      _._afterOpen = function() {}; // * EMPTY
      _._close = function() {
        this.visible = false;
        if (this._isAlwaysOnTop === true) {
          this.removeFromParent();
        }
        this._clearDraggableGlocalInstance();
        $gameTemp._floatingWindows.delete(this);
        this._onMouseOut();
        return this._destroyMouseCheckThread();
      };
      _._afterClose = function() {}; // * EMPTY
    })();
  })();
  (function() {    // ■ END PRIVATE.coffee
    //---------------------------------------------------------------------------

    // * Если окно под курсором, нельзя нажимать на карте для движения игрока
    // -----------------------------------------------------------------------
    (function() {      //╒═════════════════════════════════════════════════════════════════════════╛
      // ■ Scene_Map.coffee
      //╒═════════════════════════════════════════════════════════════════════════╛
      //---------------------------------------------------------------------------
      var ALIAS__isAnyButtonPressed, ALIAS__processMapTouch, _;
      
      //@[DEFINES]
      _ = Scene_Map.prototype;
      if (KDCore.isMZ()) {
        //@[ALIAS]
        ALIAS__isAnyButtonPressed = _.isAnyButtonPressed;
        _.isAnyButtonPressed = function() {
          if ($gameTemp.floatingWindowUnderMouse != null) {
            return true;
          } else {
            return ALIAS__isAnyButtonPressed.call(this);
          }
        };
      } else {
        //@[ALIAS]
        ALIAS__processMapTouch = _.processMapTouch;
        _.processMapTouch = function() {
          if ($gameTemp.floatingWindowUnderMouse != null) {
            return;
          }
          return ALIAS__processMapTouch.call(this);
        };
      }
    })();
  })();
  //@[EXTEND]
  // ■ END Scene_Map.coffee
  //---------------------------------------------------------------------------
  return KDCore.FloatingWindow = FloatingWindow;
});

// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  var ALIAS___onMouseUp, ALIAS___onRightButtonDown, ALIAS__clear, ALIAS__update, _;
  // * Right mouse pressed
  // * Определение когда правая (вторая) кнопка мыши зажата и удерживается

  //@[DEFINES]
  _ = TouchInput;
  //@[ALIAS]
  ALIAS__clear = _.clear;
  _.clear = function() {
    ALIAS__clear.call(this);
    this._kdMousePressed2 = false;
    this._kdPressedTime2 = 0;
  };
  //@[ALIAS]
  ALIAS___onRightButtonDown = _._onRightButtonDown;
  _._onRightButtonDown = function(event) {
    var check;
    ALIAS___onRightButtonDown.call(this, event);
    // * Это значит что ALIAS метод прошёл (верные X и Y в Canvas)
    if (KDCore.isMZ()) {
      check = this._newState.cancelled === true;
    } else {
      check = this._events.cancelled === true;
    }
    if (check === true) {
      this._kdMousePressed2 = true;
      this._kdPressedTime2 = 0;
    }
  };
  //@[ALIAS]
  ALIAS___onMouseUp = _._onMouseUp;
  _._onMouseUp = function(event) {
    ALIAS___onMouseUp.call(this, event);
    if (event.button === 2) {
      this._kdMousePressed2 = false;
    }
  };
  //@[ALIAS]
  ALIAS__update = _.update;
  _.update = function() {
    ALIAS__update.call(this);
    if (this.kdIsPressed2()) {
      return this._kdPressedTime2++;
    }
  };
  //?[NEW]
  return _.kdIsPressed2 = function() {
    return this._kdMousePressed2 === true;
  };
});

// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  // * Методы из RPG Maker MZ которых нет в RPG Maker MV
  if (KDCore.isMZ()) {
    return;
  }
  (function() {    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ Scene_Base.coffee
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var _;
    
    //@[DEFINES]
    _ = Scene_Base.prototype;
    _.calcWindowHeight = function(numLines, selectable) {
      if (selectable === true) {
        return Window_Selectable.prototype.fittingHeight(numLines);
      } else {
        return Window_Base.prototype.fittingHeight(numLines);
      }
    };
  })();
  (function() {    // ■ END Scene_Base.coffee
    //---------------------------------------------------------------------------

    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ Window_Selectable.coffee
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var _;
    
    //@[DEFINES]
    _ = Window_Selectable.prototype;
    _.itemLineRect = function(index) {
      return this.itemRect(index);
    };
  })();
  (function() {    // ■ END Window_Selectable.coffee
    //---------------------------------------------------------------------------

    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ Window_Base.coffee
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var ALIAS__initialize, ALIAS__processEscapeCharacter, _;
    //@[DEFINES]
    _ = Window_Base.prototype;
    // * Чтоб можно было Rectangle принимать в конструктор
    //@[ALIAS]
    ALIAS__initialize = _.initialize;
    _.initialize = function(x, y, w, h) {
      if (x instanceof PIXI.Rectangle) {
        return ALIAS__initialize.call(this, x.x, x.y, x.width, x.height);
      } else {
        return ALIAS__initialize.call(this, ...arguments);
      }
    };
    
    // * В MZ используется FS для изменения размера шрифта в тексте
    //@[ALIAS]
    ALIAS__processEscapeCharacter = _.processEscapeCharacter;
    _.processEscapeCharacter = function(code, textState) {
      if (code === "FS") {
        this.contents.fontSize = this.obtainEscapeParam(textState);
      } else {
        ALIAS__processEscapeCharacter.call(this, code, textState);
      }
    };
  })();
  (function() {    // ■ END Window_Base.coffee
    //---------------------------------------------------------------------------

    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ Spriteset_Map.coffee
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var _;
    
    //@[DEFINES]
    _ = Spriteset_Map.prototype;
    _.findTargetSprite = function(target) {
      return this._characterSprites.find(function(sprite) {
        return sprite.checkCharacter(target);
      });
    };
  })();
  return (function() {    // ■ END Spriteset_Map.coffee
    //---------------------------------------------------------------------------

    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ Sprite_Character.coffee
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var _;
    
    //@[DEFINES]
    _ = Sprite_Character.prototype;
    _.checkCharacter = function(character) {
      return this._character === character;
    };
  })();
});

// ■ END Sprite_Character.coffee
//---------------------------------------------------------------------------

// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  var alias_SM_processMapTouch, alias_TIOMM;
  //?SMouse better alternative
  if (KDCore.isMZ()) {
    return;
  }
  // * Для ButtonM
  //@[ALIAS]
  alias_SM_processMapTouch = Scene_Map.prototype.processMapTouch;
  Scene_Map.prototype.processMapTouch = function() {
    if ($gameTemp.kdButtonUnderMouse != null) {
      if ($gameTemp.kdButtonUnderMouse.parent == null) {
        return $gameTemp.kdButtonUnderMouse = null;
      } else {

      }
    } else {
      return alias_SM_processMapTouch.call(this);
    }
  };
  //@[ALIAS]
  alias_TIOMM = TouchInput._onMouseMove;
  TouchInput._onMouseMove = function(event) {
    var x, y;
    alias_TIOMM.call(this, event);
    x = Graphics.pageToCanvasX(event.pageX);
    y = Graphics.pageToCanvasY(event.pageY);
    if (Graphics.isInsideCanvas(x, y)) {
      return this._onHover(x, y);
    }
  };
  
  //?NEW, from MZ
  return TouchInput._onHover = function(_x, _y) {
    this._x = _x;
    this._y = _y;
  };
});

// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  var ALIAS__clear, ALIAS__update, _;
  if (KDCore.isMZ()) {
    return;
  }
  //@[DEFINES]
  _ = Input;
  //@[ALIAS]
  ALIAS__clear = _.clear;
  _.clear = function() {
    ALIAS__clear.call(this);
    return this._virtualButton = null;
  };
  //@[ALIAS]
  ALIAS__update = _.update;
  _.update = function() {
    ALIAS__update.call(this);
    if (this._virtualButton == null) {
      return;
    }
    this._latestButton = this._virtualButton;
    this._pressedTime = 0;
    return this._virtualButton = null;
  };
  return _.virtualClick = function(buttonName) {
    return this._virtualButton = buttonName;
  };
});

// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  var alias_WBDTEX_KDCore29122021;
  // * <center>, для RPG Maker MZ и если нету Visu Message Core
  if (KDCore.isMZ()) {
    alias_WBDTEX_KDCore29122021 = Window_Base.prototype.drawTextEx;
    Window_Base.prototype.drawTextEx = function(text, x, y, width) {
      var e, newText;
      try {
        if (Imported.VisuMZ_1_MessageCore !== true) { // * В Visu уже есть <center>
          if (String.any(text) && text.contains("<center>")) {
            if (text[0] === "<" && text[1] === "c") { // * Должен быть в начале строки
              newText = text.replace("<center>", "");
              this.drawTextExInCenter(newText, x, y, width);
              return;
            }
          }
        }
      } catch (error) {
        e = error;
        KDCore.warning(e);
      }
      alias_WBDTEX_KDCore29122021.call(this, ...arguments);
    };
  }
  //?NEW
  Window_Base.prototype.drawTextExInCenter = function(text, x, y, width, height) {
    var e, newX, newY, textSize;
    try {
      if (KDCore.isMV()) { // * В MV нет поддержки данного метода
        this.drawTextEx(...arguments);
        return;
      }
      textSize = this.textSizeEx(text);
      newX = x + width / 2 - textSize.width / 2;
      if ((height != null) && height > 0) {
        newY = y + height / 2 - textSize.height / 2;
      } else {
        newY = y;
      }
      this.drawTextEx(text, newX, newY, width);
    } catch (error) {
      e = error;
      KDCore.warning(e);
      this.drawTextEx(text, x, y, width);
    }
  };
  //?NEW
  Window_Base.prototype.drawTextExWithWordWrap = function(text, x, y, width, maxLines) {
    var maxWidth, wrappedText;
    maxWidth = this.contentsWidth();
    wrappedText = Window_Message.prototype.pWordWrap.call(this, text, width || maxWidth, maxLines);
    this.drawTextEx(wrappedText, x, y, width);
  };
  //?NEW
  return Window_Message.prototype.pWordWrap = function(text, maxWidth, maxLines) {
    var i, j, k, l, line, lines, newLines, ref, ref1, result, spaceLeft, spaceWidth, wordWidth, wordWidthWithSpace, words;
    lines = text.split('\n');
    maxWidth = maxWidth;
    spaceWidth = this.contents.measureTextWidth(' ');
    result = '';
    newLines = 1;
    for (i = k = 0, ref = lines.length; (0 <= ref ? k < ref : k > ref); i = 0 <= ref ? ++k : --k) {
      spaceLeft = maxWidth;
      line = lines[i];
      words = line.split(' ');
      for (j = l = 0, ref1 = words.length; (0 <= ref1 ? l < ref1 : l > ref1); j = 0 <= ref1 ? ++l : --l) {
        wordWidth = this.contents.measureTextWidth(words[j]);
        wordWidthWithSpace = wordWidth + spaceWidth;
        if (j === 0 || wordWidthWithSpace > spaceLeft) {
          if (j > 0) {
            if (maxLines === newLines) {
              return result;
            }
            result += '\n';
            newLines++;
          }
          result += words[j];
          spaceLeft = maxWidth - wordWidth;
          if (j === 0 && line.match(/\\n\w*\s*<\s*\\n\[\w*\s*\]\s*>*/gi)) {
            spaceLeft += 200;
          }
        } else {
          spaceLeft -= wordWidthWithSpace;
          result += ' ' + words[j];
        }
      }
      if (i < lines.length - 1) {
        result += '\n';
      }
    }
    return result;
  };
});

// Generated by CoffeeScript 2.6.1
// * Последний файл (после всех классов)
// * Загружает библиотеки
var i, len, lib, ref, text;

if (KDCore._requireLoadLibrary === true) {
  ref = KDCore[KDCore._loader];
  for (i = 0, len = ref.length; i < len; i++) {
    lib = ref[i];
    lib();
  }
  KDCore[KDCore._loader] = [];
  text = "%c  KDCore is loaded " + KDCore.Version;
  console.log(text, 'background: #222; color: #82b2ff');
}

// ==========================================================================
// ==========================================================================

//   END OF PLUGINS CORE LIBRARY
//   (Next code is this plugin code)

// ==========================================================================
// ==========================================================================

//Plugin KDCore automatic build by PKD PluginBuilder 1.9.2 01.02.2022


(function(){
    
    ANET.registerMVPluginCommands = function() {
        //@[ALIAS]
        var _Game_Interpreter_pluginCommand_ANET = Game_Interpreter.prototype.pluginCommand;
        Game_Interpreter.prototype.pluginCommand = function (command, args) {
            _Game_Interpreter_pluginCommand_ANET.call(this, command, args);
            if (command === 'SetSharedBattle') {
                try {
                    this.nSetSharedBattle(args[0]);
                } catch (e) {
                    console.warn(e);
                }
            }
        };
    };

})();

ANET.isPro = function() {
    return false;
};

var Notyf = function () {
    "use strict";
    var n, t, o = function () {
            return (o = Object.assign || function (t) {
                for (var i, e = 1, n = arguments.length; e < n; e++)
                    for (var o in i = arguments[e]) Object.prototype.hasOwnProperty.call(i, o) && (t[o] = i[o]);
                return t
            }).apply(this, arguments)
        },
        s = (i.prototype.on = function (t, i) {
            var e = this.listeners[t] || [];
            this.listeners[t] = e.concat([i])
        }, i.prototype.triggerEvent = function (t, i) {
            var e = this;
            (this.listeners[t] || []).forEach(function (t) {
                return t({
                    target: e,
                    event: i
                })
            })
        }, i);

    function i(t) {
        this.options = t, this.listeners = {}
    }(t = n = n || {})[t.Add = 0] = "Add", t[t.Remove = 1] = "Remove";
    var v, e, a = (r.prototype.push = function (t) {
        this.notifications.push(t), this.updateFn(t, n.Add, this.notifications)
    }, r.prototype.splice = function (t, i) {
        var e = this.notifications.splice(t, i)[0];
        return this.updateFn(e, n.Remove, this.notifications), e
    }, r.prototype.indexOf = function (t) {
        return this.notifications.indexOf(t)
    }, r.prototype.onUpdate = function (t) {
        this.updateFn = t
    }, r);

    function r() {
        this.notifications = []
    }(e = v = v || {}).Dismiss = "dismiss";
    var c = {
            types: [{
                type: "success",
                className: "notyf__toast--success",
                backgroundColor: "#3dc763",
                icon: {
                    className: "notyf__icon--success",
                    tagName: "i"
                }
            }, {
                type: "error",
                className: "notyf__toast--error",
                backgroundColor: "#ed3d3d",
                icon: {
                    className: "notyf__icon--error",
                    tagName: "i"
                }
            }],
            duration: 2e3,
            ripple: !0,
            position: {
                x: "right",
                y: "bottom"
            },
            dismissible: !(e.Click = "click")
        },
        p = (d.prototype.on = function (t, i) {
            var e;
            this.events = o(o({}, this.events), ((e = {})[t] = i, e))
        }, d.prototype.update = function (t, i) {
            i === n.Add ? this.addNotification(t) : i === n.Remove && this.removeNotification(t)
        }, d.prototype.removeNotification = function (t) {
            var i, e, n = this,
                o = this._popRenderedNotification(t);
            o && ((e = o.node).classList.add("notyf__toast--disappear"), e.addEventListener(this.animationEndEventName, i = function (t) {
                t.target === e && (e.removeEventListener(n.animationEndEventName, i), n.container.removeChild(e))
            }))
        }, d.prototype.addNotification = function (t) {
            var i = this._renderNotification(t);
            this.notifications.push({
                notification: t,
                node: i
            }), this._announce(t.options.message || "Notification")
        }, d.prototype._renderNotification = function (t) {
            var i, e = this._buildNotificationCard(t),
                n = t.options.className;
            return n && (i = e.classList).add.apply(i, n.split(" ")), this.container.appendChild(e), e
        }, d.prototype._popRenderedNotification = function (t) {
            for (var i = -1, e = 0; e < this.notifications.length && i < 0; e++) this.notifications[e].notification === t && (i = e);
            if (-1 !== i) return this.notifications.splice(i, 1)[0]
        }, d.prototype.getXPosition = function (t) {
            var i;
            return (null === (i = null == t ? void 0 : t.position) || void 0 === i ? void 0 : i.x) || "right"
        }, d.prototype.getYPosition = function (t) {
            var i;
            return (null === (i = null == t ? void 0 : t.position) || void 0 === i ? void 0 : i.y) || "bottom"
        }, d.prototype.adjustContainerAlignment = function (t) {
            var i = this.X_POSITION_FLEX_MAP[this.getXPosition(t)],
                e = this.Y_POSITION_FLEX_MAP[this.getYPosition(t)],
                n = this.container.style;
            n.setProperty("justify-content", e), n.setProperty("align-items", i)
        }, d.prototype._buildNotificationCard = function (n) {
            var t, o = this,
                i = n.options,
                e = i.icon;
            this.adjustContainerAlignment(i);
            var s = this._createHTLMElement({
                    tagName: "div",
                    className: "notyf__toast"
                }),
                a = this._createHTLMElement({
                    tagName: "div",
                    className: "notyf__ripple"
                }),
                r = this._createHTLMElement({
                    tagName: "div",
                    className: "notyf__wrapper"
                }),
                c = this._createHTLMElement({
                    tagName: "div",
                    className: "notyf__message"
                });
            c.innerHTML = i.message || "";
            var p, d, l, u, f, h = i.background || i.backgroundColor;
            e && "object" == typeof e && (p = this._createHTLMElement({
                tagName: "div",
                className: "notyf__icon"
            }), d = this._createHTLMElement({
                tagName: e.tagName || "i",
                className: e.className,
                text: e.text
            }), (l = null !== (t = e.color) && void 0 !== t ? t : h) && (d.style.color = l), p.appendChild(d), r.appendChild(p)), r.appendChild(c), s.appendChild(r), h && (i.ripple ? (a.style.background = h, s.appendChild(a)) : s.style.background = h), i.dismissible && (u = this._createHTLMElement({
                tagName: "div",
                className: "notyf__dismiss"
            }), f = this._createHTLMElement({
                tagName: "button",
                className: "notyf__dismiss-btn"
            }), u.appendChild(f), r.appendChild(u), s.classList.add("notyf__toast--dismissible"), f.addEventListener("click", function (t) {
                var i, e;
                null !== (e = (i = o.events)[v.Dismiss]) && void 0 !== e && e.call(i, {
                    target: n,
                    event: t
                }), t.stopPropagation()
            })), s.addEventListener("click", function (t) {
                var i, e;
                return null === (e = (i = o.events)[v.Click]) || void 0 === e ? void 0 : e.call(i, {
                    target: n,
                    event: t
                })
            });
            var m = "top" === this.getYPosition(i) ? "upper" : "lower";
            return s.classList.add("notyf__toast--" + m), s
        }, d.prototype._createHTLMElement = function (t) {
            var i = t.tagName,
                e = t.className,
                n = t.text,
                o = document.createElement(i);
            return e && (o.className = e), o.textContent = n || null, o
        }, d.prototype._createA11yContainer = function () {
            var t = this._createHTLMElement({
                tagName: "div",
                className: "notyf-announcer"
            });
            t.setAttribute("aria-atomic", "true"), t.setAttribute("aria-live", "polite"), t.style.border = "0", t.style.clip = "rect(0 0 0 0)", t.style.height = "1px", t.style.margin = "-1px", t.style.overflow = "hidden", t.style.padding = "0", t.style.position = "absolute", t.style.width = "1px", t.style.outline = "0", document.body.appendChild(t), this.a11yContainer = t
        }, d.prototype._announce = function (t) {
            var i = this;
            this.a11yContainer.textContent = "", setTimeout(function () {
                i.a11yContainer.textContent = t
            }, 100)
        }, d.prototype._getAnimationEndEventName = function () {
            var t, i = document.createElement("_fake"),
                e = {
                    MozTransition: "animationend",
                    OTransition: "oAnimationEnd",
                    WebkitTransition: "webkitAnimationEnd",
                    transition: "animationend"
                };
            for (t in e)
                if (void 0 !== i.style[t]) return e[t];
            return "animationend"
        }, d);

    function d() {
        this.notifications = [], this.events = {}, this.X_POSITION_FLEX_MAP = {
            left: "flex-start",
            center: "center",
            right: "flex-end"
        }, this.Y_POSITION_FLEX_MAP = {
            top: "flex-start",
            center: "center",
            bottom: "flex-end"
        };
        var t = document.createDocumentFragment(),
            i = this._createHTLMElement({
                tagName: "div",
                className: "notyf"
            });
        t.appendChild(i), document.body.appendChild(t), this.container = i, this.animationEndEventName = this._getAnimationEndEventName(), this._createA11yContainer()
    }

    function l(t) {
        var n = this;
        this.dismiss = this._removeNotification, this.notifications = new a, this.view = new p;
        var i = this.registerTypes(t);
        this.options = o(o({}, c), t), this.options.types = i, this.notifications.onUpdate(function (t, i) {
            return n.view.update(t, i)
        }), this.view.on(v.Dismiss, function (t) {
            var i = t.target,
                e = t.event;
            n._removeNotification(i), i.triggerEvent(v.Dismiss, e)
        }), this.view.on(v.Click, function (t) {
            var i = t.target,
                e = t.event;
            return i.triggerEvent(v.Click, e)
        })
    }
    return l.prototype.error = function (t) {
        var i = this.normalizeOptions("error", t);
        return this.open(i)
    }, l.prototype.success = function (t) {
        var i = this.normalizeOptions("success", t);
        return this.open(i)
    }, l.prototype.open = function (i) {
        var t = this.options.types.find(function (t) {
                return t.type === i.type
            }) || {},
            e = o(o({}, t), i);
        this.assignProps(["ripple", "position", "dismissible"], e);
        var n = new s(e);
        return this._pushNotification(n), n
    }, l.prototype.dismissAll = function () {
        for (; this.notifications.splice(0, 1););
    }, l.prototype.assignProps = function (t, i) {
        var e = this;
        t.forEach(function (t) {
            i[t] = null == i[t] ? e.options[t] : i[t]
        })
    }, l.prototype._pushNotification = function (t) {
        var i = this;
        this.notifications.push(t);
        var e = void 0 !== t.options.duration ? t.options.duration : this.options.duration;
        e && setTimeout(function () {
            return i._removeNotification(t)
        }, e)
    }, l.prototype._removeNotification = function (t) {
        var i = this.notifications.indexOf(t); - 1 !== i && this.notifications.splice(i, 1)
    }, l.prototype.normalizeOptions = function (t, i) {
        var e = {
            type: t
        };
        return "string" == typeof i ? e.message = i : "object" == typeof i && (e = o(o({}, e), i)), e
    }, l.prototype.registerTypes = function (t) {
        var i = (t && t.types || []).slice();
        return c.types.map(function (e) {
            var n = -1;
            i.forEach(function (t, i) {
                t.type === e.type && (n = i)
            });
            var t = -1 !== n ? i.splice(n, 1)[0] : {};
            return o(o({}, e), t)
        }).concat(i)
    }, l
}();







// ============================================================================
/*!
 * Socket.IO v2.3.0
 * (c) 2014-2019 Guillermo Rauch
 * Released under the MIT License.
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.io=e():t.io=e()}(this,function(){return function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return t[n].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var r={};return e.m=t,e.c=r,e.p="",e(0)}([function(t,e,r){"use strict";function n(t,e){"object"===("undefined"==typeof t?"undefined":o(t))&&(e=t,t=void 0),e=e||{};var r,n=i(t),s=n.source,p=n.id,h=n.path,u=c[p]&&h in c[p].nsps,f=e.forceNew||e["force new connection"]||!1===e.multiplex||u;return f?r=a(s,e):(c[p]||(c[p]=a(s,e)),r=c[p]),n.query&&!e.query&&(e.query=n.query),r.socket(n.path,e)}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=r(1),s=r(4),a=r(9);r(3)("socket.io-client");t.exports=e=n;var c=e.managers={};e.protocol=s.protocol,e.connect=n,e.Manager=r(9),e.Socket=r(33)},function(t,e,r){"use strict";function n(t,e){var r=t;e=e||"undefined"!=typeof location&&location,null==t&&(t=e.protocol+"//"+e.host),"string"==typeof t&&("/"===t.charAt(0)&&(t="/"===t.charAt(1)?e.protocol+t:e.host+t),/^(https?|wss?):\/\//.test(t)||(t="undefined"!=typeof e?e.protocol+"//"+t:"https://"+t),r=o(t)),r.port||(/^(http|ws)$/.test(r.protocol)?r.port="80":/^(http|ws)s$/.test(r.protocol)&&(r.port="443")),r.path=r.path||"/";var n=r.host.indexOf(":")!==-1,i=n?"["+r.host+"]":r.host;return r.id=r.protocol+"://"+i+":"+r.port,r.href=r.protocol+"://"+i+(e&&e.port===r.port?"":":"+r.port),r}var o=r(2);r(3)("socket.io-client:url");t.exports=n},function(t,e){var r=/^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,n=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];t.exports=function(t){var e=t,o=t.indexOf("["),i=t.indexOf("]");o!=-1&&i!=-1&&(t=t.substring(0,o)+t.substring(o,i).replace(/:/g,";")+t.substring(i,t.length));for(var s=r.exec(t||""),a={},c=14;c--;)a[n[c]]=s[c]||"";return o!=-1&&i!=-1&&(a.source=e,a.host=a.host.substring(1,a.host.length-1).replace(/;/g,":"),a.authority=a.authority.replace("[","").replace("]","").replace(/;/g,":"),a.ipv6uri=!0),a}},function(t,e){"use strict";t.exports=function(){return function(){}}},function(t,e,r){function n(){}function o(t){var r=""+t.type;if(e.BINARY_EVENT!==t.type&&e.BINARY_ACK!==t.type||(r+=t.attachments+"-"),t.nsp&&"/"!==t.nsp&&(r+=t.nsp+","),null!=t.id&&(r+=t.id),null!=t.data){var n=i(t.data);if(n===!1)return m;r+=n}return r}function i(t){try{return JSON.stringify(t)}catch(t){return!1}}function s(t,e){function r(t){var r=l.deconstructPacket(t),n=o(r.packet),i=r.buffers;i.unshift(n),e(i)}l.removeBlobs(t,r)}function a(){this.reconstructor=null}function c(t){var r=0,n={type:Number(t.charAt(0))};if(null==e.types[n.type])return u("unknown packet type "+n.type);if(e.BINARY_EVENT===n.type||e.BINARY_ACK===n.type){for(var o="";"-"!==t.charAt(++r)&&(o+=t.charAt(r),r!=t.length););if(o!=Number(o)||"-"!==t.charAt(r))throw new Error("Illegal attachments");n.attachments=Number(o)}if("/"===t.charAt(r+1))for(n.nsp="";++r;){var i=t.charAt(r);if(","===i)break;if(n.nsp+=i,r===t.length)break}else n.nsp="/";var s=t.charAt(r+1);if(""!==s&&Number(s)==s){for(n.id="";++r;){var i=t.charAt(r);if(null==i||Number(i)!=i){--r;break}if(n.id+=t.charAt(r),r===t.length)break}n.id=Number(n.id)}if(t.charAt(++r)){var a=p(t.substr(r)),c=a!==!1&&(n.type===e.ERROR||d(a));if(!c)return u("invalid payload");n.data=a}return n}function p(t){try{return JSON.parse(t)}catch(t){return!1}}function h(t){this.reconPack=t,this.buffers=[]}function u(t){return{type:e.ERROR,data:"parser error: "+t}}var f=(r(3)("socket.io-parser"),r(5)),l=r(6),d=r(7),y=r(8);e.protocol=4,e.types=["CONNECT","DISCONNECT","EVENT","ACK","ERROR","BINARY_EVENT","BINARY_ACK"],e.CONNECT=0,e.DISCONNECT=1,e.EVENT=2,e.ACK=3,e.ERROR=4,e.BINARY_EVENT=5,e.BINARY_ACK=6,e.Encoder=n,e.Decoder=a;var m=e.ERROR+'"encode error"';n.prototype.encode=function(t,r){if(e.BINARY_EVENT===t.type||e.BINARY_ACK===t.type)s(t,r);else{var n=o(t);r([n])}},f(a.prototype),a.prototype.add=function(t){var r;if("string"==typeof t)r=c(t),e.BINARY_EVENT===r.type||e.BINARY_ACK===r.type?(this.reconstructor=new h(r),0===this.reconstructor.reconPack.attachments&&this.emit("decoded",r)):this.emit("decoded",r);else{if(!y(t)&&!t.base64)throw new Error("Unknown type: "+t);if(!this.reconstructor)throw new Error("got binary data when not reconstructing a packet");r=this.reconstructor.takeBinaryData(t),r&&(this.reconstructor=null,this.emit("decoded",r))}},a.prototype.destroy=function(){this.reconstructor&&this.reconstructor.finishedReconstruction()},h.prototype.takeBinaryData=function(t){if(this.buffers.push(t),this.buffers.length===this.reconPack.attachments){var e=l.reconstructPacket(this.reconPack,this.buffers);return this.finishedReconstruction(),e}return null},h.prototype.finishedReconstruction=function(){this.reconPack=null,this.buffers=[]}},function(t,e,r){function n(t){if(t)return o(t)}function o(t){for(var e in n.prototype)t[e]=n.prototype[e];return t}t.exports=n,n.prototype.on=n.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this},n.prototype.once=function(t,e){function r(){this.off(t,r),e.apply(this,arguments)}return r.fn=e,this.on(t,r),this},n.prototype.off=n.prototype.removeListener=n.prototype.removeAllListeners=n.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var r=this._callbacks["$"+t];if(!r)return this;if(1==arguments.length)return delete this._callbacks["$"+t],this;for(var n,o=0;o<r.length;o++)if(n=r[o],n===e||n.fn===e){r.splice(o,1);break}return this},n.prototype.emit=function(t){this._callbacks=this._callbacks||{};var e=[].slice.call(arguments,1),r=this._callbacks["$"+t];if(r){r=r.slice(0);for(var n=0,o=r.length;n<o;++n)r[n].apply(this,e)}return this},n.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]},n.prototype.hasListeners=function(t){return!!this.listeners(t).length}},function(t,e,r){function n(t,e){if(!t)return t;if(s(t)){var r={_placeholder:!0,num:e.length};return e.push(t),r}if(i(t)){for(var o=new Array(t.length),a=0;a<t.length;a++)o[a]=n(t[a],e);return o}if("object"==typeof t&&!(t instanceof Date)){var o={};for(var c in t)o[c]=n(t[c],e);return o}return t}function o(t,e){if(!t)return t;if(t&&t._placeholder)return e[t.num];if(i(t))for(var r=0;r<t.length;r++)t[r]=o(t[r],e);else if("object"==typeof t)for(var n in t)t[n]=o(t[n],e);return t}var i=r(7),s=r(8),a=Object.prototype.toString,c="function"==typeof Blob||"undefined"!=typeof Blob&&"[object BlobConstructor]"===a.call(Blob),p="function"==typeof File||"undefined"!=typeof File&&"[object FileConstructor]"===a.call(File);e.deconstructPacket=function(t){var e=[],r=t.data,o=t;return o.data=n(r,e),o.attachments=e.length,{packet:o,buffers:e}},e.reconstructPacket=function(t,e){return t.data=o(t.data,e),t.attachments=void 0,t},e.removeBlobs=function(t,e){function r(t,a,h){if(!t)return t;if(c&&t instanceof Blob||p&&t instanceof File){n++;var u=new FileReader;u.onload=function(){h?h[a]=this.result:o=this.result,--n||e(o)},u.readAsArrayBuffer(t)}else if(i(t))for(var f=0;f<t.length;f++)r(t[f],f,t);else if("object"==typeof t&&!s(t))for(var l in t)r(t[l],l,t)}var n=0,o=t;r(o),n||e(o)}},function(t,e){var r={}.toString;t.exports=Array.isArray||function(t){return"[object Array]"==r.call(t)}},function(t,e){function r(t){return n&&Buffer.isBuffer(t)||o&&(t instanceof ArrayBuffer||i(t))}t.exports=r;var n="function"==typeof Buffer&&"function"==typeof Buffer.isBuffer,o="function"==typeof ArrayBuffer,i=function(t){return"function"==typeof ArrayBuffer.isView?ArrayBuffer.isView(t):t.buffer instanceof ArrayBuffer}},function(t,e,r){"use strict";function n(t,e){if(!(this instanceof n))return new n(t,e);t&&"object"===("undefined"==typeof t?"undefined":o(t))&&(e=t,t=void 0),e=e||{},e.path=e.path||"/socket.io",this.nsps={},this.subs=[],this.opts=e,this.reconnection(e.reconnection!==!1),this.reconnectionAttempts(e.reconnectionAttempts||1/0),this.reconnectionDelay(e.reconnectionDelay||1e3),this.reconnectionDelayMax(e.reconnectionDelayMax||5e3),this.randomizationFactor(e.randomizationFactor||.5),this.backoff=new f({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(null==e.timeout?2e4:e.timeout),this.readyState="closed",this.uri=t,this.connecting=[],this.lastPing=null,this.encoding=!1,this.packetBuffer=[];var r=e.parser||c;this.encoder=new r.Encoder,this.decoder=new r.Decoder,this.autoConnect=e.autoConnect!==!1,this.autoConnect&&this.open()}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=r(10),s=r(33),a=r(5),c=r(4),p=r(35),h=r(36),u=(r(3)("socket.io-client:manager"),r(32)),f=r(37),l=Object.prototype.hasOwnProperty;t.exports=n,n.prototype.emitAll=function(){this.emit.apply(this,arguments);for(var t in this.nsps)l.call(this.nsps,t)&&this.nsps[t].emit.apply(this.nsps[t],arguments)},n.prototype.updateSocketIds=function(){for(var t in this.nsps)l.call(this.nsps,t)&&(this.nsps[t].id=this.generateId(t))},n.prototype.generateId=function(t){return("/"===t?"":t+"#")+this.engine.id},a(n.prototype),n.prototype.reconnection=function(t){return arguments.length?(this._reconnection=!!t,this):this._reconnection},n.prototype.reconnectionAttempts=function(t){return arguments.length?(this._reconnectionAttempts=t,this):this._reconnectionAttempts},n.prototype.reconnectionDelay=function(t){return arguments.length?(this._reconnectionDelay=t,this.backoff&&this.backoff.setMin(t),this):this._reconnectionDelay},n.prototype.randomizationFactor=function(t){return arguments.length?(this._randomizationFactor=t,this.backoff&&this.backoff.setJitter(t),this):this._randomizationFactor},n.prototype.reconnectionDelayMax=function(t){return arguments.length?(this._reconnectionDelayMax=t,this.backoff&&this.backoff.setMax(t),this):this._reconnectionDelayMax},n.prototype.timeout=function(t){return arguments.length?(this._timeout=t,this):this._timeout},n.prototype.maybeReconnectOnOpen=function(){!this.reconnecting&&this._reconnection&&0===this.backoff.attempts&&this.reconnect()},n.prototype.open=n.prototype.connect=function(t,e){if(~this.readyState.indexOf("open"))return this;this.engine=i(this.uri,this.opts);var r=this.engine,n=this;this.readyState="opening",this.skipReconnect=!1;var o=p(r,"open",function(){n.onopen(),t&&t()}),s=p(r,"error",function(e){if(n.cleanup(),n.readyState="closed",n.emitAll("connect_error",e),t){var r=new Error("Connection error");r.data=e,t(r)}else n.maybeReconnectOnOpen()});if(!1!==this._timeout){var a=this._timeout,c=setTimeout(function(){o.destroy(),r.close(),r.emit("error","timeout"),n.emitAll("connect_timeout",a)},a);this.subs.push({destroy:function(){clearTimeout(c)}})}return this.subs.push(o),this.subs.push(s),this},n.prototype.onopen=function(){this.cleanup(),this.readyState="open",this.emit("open");var t=this.engine;this.subs.push(p(t,"data",h(this,"ondata"))),this.subs.push(p(t,"ping",h(this,"onping"))),this.subs.push(p(t,"pong",h(this,"onpong"))),this.subs.push(p(t,"error",h(this,"onerror"))),this.subs.push(p(t,"close",h(this,"onclose"))),this.subs.push(p(this.decoder,"decoded",h(this,"ondecoded")))},n.prototype.onping=function(){this.lastPing=new Date,this.emitAll("ping")},n.prototype.onpong=function(){this.emitAll("pong",new Date-this.lastPing)},n.prototype.ondata=function(t){this.decoder.add(t)},n.prototype.ondecoded=function(t){this.emit("packet",t)},n.prototype.onerror=function(t){this.emitAll("error",t)},n.prototype.socket=function(t,e){function r(){~u(o.connecting,n)||o.connecting.push(n)}var n=this.nsps[t];if(!n){n=new s(this,t,e),this.nsps[t]=n;var o=this;n.on("connecting",r),n.on("connect",function(){n.id=o.generateId(t)}),this.autoConnect&&r()}return n},n.prototype.destroy=function(t){var e=u(this.connecting,t);~e&&this.connecting.splice(e,1),this.connecting.length||this.close()},n.prototype.packet=function(t){var e=this;t.query&&0===t.type&&(t.nsp+="?"+t.query),e.encoding?e.packetBuffer.push(t):(e.encoding=!0,this.encoder.encode(t,function(r){for(var n=0;n<r.length;n++)e.engine.write(r[n],t.options);e.encoding=!1,e.processPacketQueue()}))},n.prototype.processPacketQueue=function(){if(this.packetBuffer.length>0&&!this.encoding){var t=this.packetBuffer.shift();this.packet(t)}},n.prototype.cleanup=function(){for(var t=this.subs.length,e=0;e<t;e++){var r=this.subs.shift();r.destroy()}this.packetBuffer=[],this.encoding=!1,this.lastPing=null,this.decoder.destroy()},n.prototype.close=n.prototype.disconnect=function(){this.skipReconnect=!0,this.reconnecting=!1,"opening"===this.readyState&&this.cleanup(),this.backoff.reset(),this.readyState="closed",this.engine&&this.engine.close()},n.prototype.onclose=function(t){this.cleanup(),this.backoff.reset(),this.readyState="closed",this.emit("close",t),this._reconnection&&!this.skipReconnect&&this.reconnect()},n.prototype.reconnect=function(){if(this.reconnecting||this.skipReconnect)return this;var t=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitAll("reconnect_failed"),this.reconnecting=!1;else{var e=this.backoff.duration();this.reconnecting=!0;var r=setTimeout(function(){t.skipReconnect||(t.emitAll("reconnect_attempt",t.backoff.attempts),t.emitAll("reconnecting",t.backoff.attempts),t.skipReconnect||t.open(function(e){e?(t.reconnecting=!1,t.reconnect(),t.emitAll("reconnect_error",e.data)):t.onreconnect()}))},e);this.subs.push({destroy:function(){clearTimeout(r)}})}},n.prototype.onreconnect=function(){var t=this.backoff.attempts;this.reconnecting=!1,this.backoff.reset(),this.updateSocketIds(),this.emitAll("reconnect",t)}},function(t,e,r){t.exports=r(11),t.exports.parser=r(18)},function(t,e,r){function n(t,e){return this instanceof n?(e=e||{},t&&"object"==typeof t&&(e=t,t=null),t?(t=p(t),e.hostname=t.host,e.secure="https"===t.protocol||"wss"===t.protocol,e.port=t.port,t.query&&(e.query=t.query)):e.host&&(e.hostname=p(e.host).host),this.secure=null!=e.secure?e.secure:"undefined"!=typeof location&&"https:"===location.protocol,e.hostname&&!e.port&&(e.port=this.secure?"443":"80"),this.agent=e.agent||!1,this.hostname=e.hostname||("undefined"!=typeof location?location.hostname:"localhost"),this.port=e.port||("undefined"!=typeof location&&location.port?location.port:this.secure?443:80),this.query=e.query||{},"string"==typeof this.query&&(this.query=h.decode(this.query)),this.upgrade=!1!==e.upgrade,this.path=(e.path||"/engine.io").replace(/\/$/,"")+"/",this.forceJSONP=!!e.forceJSONP,this.jsonp=!1!==e.jsonp,this.forceBase64=!!e.forceBase64,this.enablesXDR=!!e.enablesXDR,this.withCredentials=!1!==e.withCredentials,this.timestampParam=e.timestampParam||"t",this.timestampRequests=e.timestampRequests,this.transports=e.transports||["polling","websocket"],this.transportOptions=e.transportOptions||{},this.readyState="",this.writeBuffer=[],this.prevBufferLen=0,this.policyPort=e.policyPort||843,this.rememberUpgrade=e.rememberUpgrade||!1,this.binaryType=null,this.onlyBinaryUpgrades=e.onlyBinaryUpgrades,this.perMessageDeflate=!1!==e.perMessageDeflate&&(e.perMessageDeflate||{}),!0===this.perMessageDeflate&&(this.perMessageDeflate={}),this.perMessageDeflate&&null==this.perMessageDeflate.threshold&&(this.perMessageDeflate.threshold=1024),this.pfx=e.pfx||null,this.key=e.key||null,this.passphrase=e.passphrase||null,this.cert=e.cert||null,this.ca=e.ca||null,this.ciphers=e.ciphers||null,this.rejectUnauthorized=void 0===e.rejectUnauthorized||e.rejectUnauthorized,this.forceNode=!!e.forceNode,this.isReactNative="undefined"!=typeof navigator&&"string"==typeof navigator.product&&"reactnative"===navigator.product.toLowerCase(),("undefined"==typeof self||this.isReactNative)&&(e.extraHeaders&&Object.keys(e.extraHeaders).length>0&&(this.extraHeaders=e.extraHeaders),e.localAddress&&(this.localAddress=e.localAddress)),this.id=null,this.upgrades=null,this.pingInterval=null,this.pingTimeout=null,this.pingIntervalTimer=null,this.pingTimeoutTimer=null,void this.open()):new n(t,e)}function o(t){var e={};for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);return e}var i=r(12),s=r(5),a=(r(3)("engine.io-client:socket"),r(32)),c=r(18),p=r(2),h=r(26);t.exports=n,n.priorWebsocketSuccess=!1,s(n.prototype),n.protocol=c.protocol,n.Socket=n,n.Transport=r(17),n.transports=r(12),n.parser=r(18),n.prototype.createTransport=function(t){var e=o(this.query);e.EIO=c.protocol,e.transport=t;var r=this.transportOptions[t]||{};this.id&&(e.sid=this.id);var n=new i[t]({query:e,socket:this,agent:r.agent||this.agent,hostname:r.hostname||this.hostname,port:r.port||this.port,secure:r.secure||this.secure,path:r.path||this.path,forceJSONP:r.forceJSONP||this.forceJSONP,jsonp:r.jsonp||this.jsonp,forceBase64:r.forceBase64||this.forceBase64,enablesXDR:r.enablesXDR||this.enablesXDR,withCredentials:r.withCredentials||this.withCredentials,timestampRequests:r.timestampRequests||this.timestampRequests,timestampParam:r.timestampParam||this.timestampParam,policyPort:r.policyPort||this.policyPort,pfx:r.pfx||this.pfx,key:r.key||this.key,passphrase:r.passphrase||this.passphrase,cert:r.cert||this.cert,ca:r.ca||this.ca,ciphers:r.ciphers||this.ciphers,rejectUnauthorized:r.rejectUnauthorized||this.rejectUnauthorized,perMessageDeflate:r.perMessageDeflate||this.perMessageDeflate,extraHeaders:r.extraHeaders||this.extraHeaders,forceNode:r.forceNode||this.forceNode,localAddress:r.localAddress||this.localAddress,requestTimeout:r.requestTimeout||this.requestTimeout,protocols:r.protocols||void 0,isReactNative:this.isReactNative});return n},n.prototype.open=function(){var t;if(this.rememberUpgrade&&n.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1)t="websocket";else{if(0===this.transports.length){var e=this;return void setTimeout(function(){e.emit("error","No transports available")},0)}t=this.transports[0]}this.readyState="opening";try{t=this.createTransport(t)}catch(t){return this.transports.shift(),void this.open()}t.open(),this.setTransport(t)},n.prototype.setTransport=function(t){var e=this;this.transport&&this.transport.removeAllListeners(),this.transport=t,t.on("drain",function(){e.onDrain()}).on("packet",function(t){e.onPacket(t)}).on("error",function(t){e.onError(t)}).on("close",function(){e.onClose("transport close")})},n.prototype.probe=function(t){function e(){if(u.onlyBinaryUpgrades){var t=!this.supportsBinary&&u.transport.supportsBinary;h=h||t}h||(p.send([{type:"ping",data:"probe"}]),p.once("packet",function(t){if(!h)if("pong"===t.type&&"probe"===t.data){if(u.upgrading=!0,u.emit("upgrading",p),!p)return;n.priorWebsocketSuccess="websocket"===p.name,u.transport.pause(function(){h||"closed"!==u.readyState&&(c(),u.setTransport(p),p.send([{type:"upgrade"}]),u.emit("upgrade",p),p=null,u.upgrading=!1,u.flush())})}else{var e=new Error("probe error");e.transport=p.name,u.emit("upgradeError",e)}}))}function r(){h||(h=!0,c(),p.close(),p=null)}function o(t){var e=new Error("probe error: "+t);e.transport=p.name,r(),u.emit("upgradeError",e)}function i(){o("transport closed")}function s(){o("socket closed")}function a(t){p&&t.name!==p.name&&r()}function c(){p.removeListener("open",e),p.removeListener("error",o),p.removeListener("close",i),u.removeListener("close",s),u.removeListener("upgrading",a)}var p=this.createTransport(t,{probe:1}),h=!1,u=this;n.priorWebsocketSuccess=!1,p.once("open",e),p.once("error",o),p.once("close",i),this.once("close",s),this.once("upgrading",a),p.open()},n.prototype.onOpen=function(){if(this.readyState="open",n.priorWebsocketSuccess="websocket"===this.transport.name,this.emit("open"),this.flush(),"open"===this.readyState&&this.upgrade&&this.transport.pause)for(var t=0,e=this.upgrades.length;t<e;t++)this.probe(this.upgrades[t])},n.prototype.onPacket=function(t){if("opening"===this.readyState||"open"===this.readyState||"closing"===this.readyState)switch(this.emit("packet",t),this.emit("heartbeat"),t.type){case"open":this.onHandshake(JSON.parse(t.data));break;case"pong":this.setPing(),this.emit("pong");break;case"error":var e=new Error("server error");e.code=t.data,this.onError(e);break;case"message":this.emit("data",t.data),this.emit("message",t.data)}},n.prototype.onHandshake=function(t){this.emit("handshake",t),this.id=t.sid,this.transport.query.sid=t.sid,this.upgrades=this.filterUpgrades(t.upgrades),this.pingInterval=t.pingInterval,this.pingTimeout=t.pingTimeout,this.onOpen(),"closed"!==this.readyState&&(this.setPing(),this.removeListener("heartbeat",this.onHeartbeat),this.on("heartbeat",this.onHeartbeat))},n.prototype.onHeartbeat=function(t){clearTimeout(this.pingTimeoutTimer);var e=this;e.pingTimeoutTimer=setTimeout(function(){"closed"!==e.readyState&&e.onClose("ping timeout")},t||e.pingInterval+e.pingTimeout)},n.prototype.setPing=function(){var t=this;clearTimeout(t.pingIntervalTimer),t.pingIntervalTimer=setTimeout(function(){t.ping(),t.onHeartbeat(t.pingTimeout)},t.pingInterval)},n.prototype.ping=function(){var t=this;this.sendPacket("ping",function(){t.emit("ping")})},n.prototype.onDrain=function(){this.writeBuffer.splice(0,this.prevBufferLen),this.prevBufferLen=0,0===this.writeBuffer.length?this.emit("drain"):this.flush()},n.prototype.flush=function(){"closed"!==this.readyState&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length&&(this.transport.send(this.writeBuffer),this.prevBufferLen=this.writeBuffer.length,this.emit("flush"))},n.prototype.write=n.prototype.send=function(t,e,r){return this.sendPacket("message",t,e,r),this},n.prototype.sendPacket=function(t,e,r,n){if("function"==typeof e&&(n=e,e=void 0),"function"==typeof r&&(n=r,r=null),"closing"!==this.readyState&&"closed"!==this.readyState){r=r||{},r.compress=!1!==r.compress;var o={type:t,data:e,options:r};this.emit("packetCreate",o),this.writeBuffer.push(o),n&&this.once("flush",n),this.flush()}},n.prototype.close=function(){function t(){n.onClose("forced close"),n.transport.close()}function e(){n.removeListener("upgrade",e),n.removeListener("upgradeError",e),t()}function r(){n.once("upgrade",e),n.once("upgradeError",e)}if("opening"===this.readyState||"open"===this.readyState){this.readyState="closing";var n=this;this.writeBuffer.length?this.once("drain",function(){this.upgrading?r():t()}):this.upgrading?r():t()}return this},n.prototype.onError=function(t){n.priorWebsocketSuccess=!1,this.emit("error",t),this.onClose("transport error",t)},n.prototype.onClose=function(t,e){if("opening"===this.readyState||"open"===this.readyState||"closing"===this.readyState){var r=this;clearTimeout(this.pingIntervalTimer),clearTimeout(this.pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),this.readyState="closed",this.id=null,this.emit("close",t,e),r.writeBuffer=[],r.prevBufferLen=0}},n.prototype.filterUpgrades=function(t){for(var e=[],r=0,n=t.length;r<n;r++)~a(this.transports,t[r])&&e.push(t[r]);return e}},function(t,e,r){function n(t){var e,r=!1,n=!1,a=!1!==t.jsonp;if("undefined"!=typeof location){var c="https:"===location.protocol,p=location.port;p||(p=c?443:80),r=t.hostname!==location.hostname||p!==t.port,n=t.secure!==c}if(t.xdomain=r,t.xscheme=n,e=new o(t),"open"in e&&!t.forceJSONP)return new i(t);if(!a)throw new Error("JSONP disabled");return new s(t)}var o=r(13),i=r(15),s=r(29),a=r(30);e.polling=n,e.websocket=a},function(t,e,r){var n=r(14);t.exports=function(t){var e=t.xdomain,r=t.xscheme,o=t.enablesXDR;try{if("undefined"!=typeof XMLHttpRequest&&(!e||n))return new XMLHttpRequest}catch(t){}try{if("undefined"!=typeof XDomainRequest&&!r&&o)return new XDomainRequest}catch(t){}if(!e)try{return new(self[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")}catch(t){}}},function(t,e){try{t.exports="undefined"!=typeof XMLHttpRequest&&"withCredentials"in new XMLHttpRequest}catch(e){t.exports=!1}},function(t,e,r){function n(){}function o(t){if(c.call(this,t),this.requestTimeout=t.requestTimeout,this.extraHeaders=t.extraHeaders,"undefined"!=typeof location){var e="https:"===location.protocol,r=location.port;r||(r=e?443:80),this.xd="undefined"!=typeof location&&t.hostname!==location.hostname||r!==t.port,this.xs=t.secure!==e}}function i(t){this.method=t.method||"GET",this.uri=t.uri,this.xd=!!t.xd,this.xs=!!t.xs,this.async=!1!==t.async,this.data=void 0!==t.data?t.data:null,this.agent=t.agent,this.isBinary=t.isBinary,this.supportsBinary=t.supportsBinary,this.enablesXDR=t.enablesXDR,this.withCredentials=t.withCredentials,this.requestTimeout=t.requestTimeout,this.pfx=t.pfx,this.key=t.key,this.passphrase=t.passphrase,this.cert=t.cert,this.ca=t.ca,this.ciphers=t.ciphers,this.rejectUnauthorized=t.rejectUnauthorized,this.extraHeaders=t.extraHeaders,this.create()}function s(){for(var t in i.requests)i.requests.hasOwnProperty(t)&&i.requests[t].abort()}var a=r(13),c=r(16),p=r(5),h=r(27);r(3)("engine.io-client:polling-xhr");if(t.exports=o,t.exports.Request=i,h(o,c),o.prototype.supportsBinary=!0,o.prototype.request=function(t){return t=t||{},t.uri=this.uri(),t.xd=this.xd,t.xs=this.xs,t.agent=this.agent||!1,t.supportsBinary=this.supportsBinary,t.enablesXDR=this.enablesXDR,t.withCredentials=this.withCredentials,t.pfx=this.pfx,t.key=this.key,t.passphrase=this.passphrase,t.cert=this.cert,t.ca=this.ca,t.ciphers=this.ciphers,t.rejectUnauthorized=this.rejectUnauthorized,t.requestTimeout=this.requestTimeout,t.extraHeaders=this.extraHeaders,new i(t)},o.prototype.doWrite=function(t,e){var r="string"!=typeof t&&void 0!==t,n=this.request({method:"POST",data:t,isBinary:r}),o=this;n.on("success",e),n.on("error",function(t){o.onError("xhr post error",t)}),this.sendXhr=n},o.prototype.doPoll=function(){var t=this.request(),e=this;t.on("data",function(t){e.onData(t)}),t.on("error",function(t){e.onError("xhr poll error",t)}),this.pollXhr=t},p(i.prototype),i.prototype.create=function(){var t={agent:this.agent,xdomain:this.xd,xscheme:this.xs,enablesXDR:this.enablesXDR};t.pfx=this.pfx,t.key=this.key,t.passphrase=this.passphrase,t.cert=this.cert,t.ca=this.ca,t.ciphers=this.ciphers,t.rejectUnauthorized=this.rejectUnauthorized;var e=this.xhr=new a(t),r=this;try{e.open(this.method,this.uri,this.async);try{if(this.extraHeaders){e.setDisableHeaderCheck&&e.setDisableHeaderCheck(!0);for(var n in this.extraHeaders)this.extraHeaders.hasOwnProperty(n)&&e.setRequestHeader(n,this.extraHeaders[n])}}catch(t){}if("POST"===this.method)try{this.isBinary?e.setRequestHeader("Content-type","application/octet-stream"):e.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch(t){}try{e.setRequestHeader("Accept","*/*")}catch(t){}"withCredentials"in e&&(e.withCredentials=this.withCredentials),this.requestTimeout&&(e.timeout=this.requestTimeout),this.hasXDR()?(e.onload=function(){r.onLoad()},e.onerror=function(){r.onError(e.responseText)}):e.onreadystatechange=function(){if(2===e.readyState)try{var t=e.getResponseHeader("Content-Type");(r.supportsBinary&&"application/octet-stream"===t||"application/octet-stream; charset=UTF-8"===t)&&(e.responseType="arraybuffer")}catch(t){}4===e.readyState&&(200===e.status||1223===e.status?r.onLoad():setTimeout(function(){r.onError("number"==typeof e.status?e.status:0)},0))},e.send(this.data)}catch(t){return void setTimeout(function(){r.onError(t)},0)}"undefined"!=typeof document&&(this.index=i.requestsCount++,i.requests[this.index]=this)},i.prototype.onSuccess=function(){this.emit("success"),this.cleanup()},i.prototype.onData=function(t){this.emit("data",t),this.onSuccess()},i.prototype.onError=function(t){this.emit("error",t),this.cleanup(!0)},i.prototype.cleanup=function(t){if("undefined"!=typeof this.xhr&&null!==this.xhr){if(this.hasXDR()?this.xhr.onload=this.xhr.onerror=n:this.xhr.onreadystatechange=n,t)try{this.xhr.abort()}catch(t){}"undefined"!=typeof document&&delete i.requests[this.index],this.xhr=null}},i.prototype.onLoad=function(){var t;try{var e;try{e=this.xhr.getResponseHeader("Content-Type")}catch(t){}t="application/octet-stream"===e||"application/octet-stream; charset=UTF-8"===e?this.xhr.response||this.xhr.responseText:this.xhr.responseText}catch(t){this.onError(t)}null!=t&&this.onData(t)},i.prototype.hasXDR=function(){return"undefined"!=typeof XDomainRequest&&!this.xs&&this.enablesXDR},i.prototype.abort=function(){this.cleanup()},i.requestsCount=0,i.requests={},"undefined"!=typeof document)if("function"==typeof attachEvent)attachEvent("onunload",s);else if("function"==typeof addEventListener){var u="onpagehide"in self?"pagehide":"unload";addEventListener(u,s,!1)}},function(t,e,r){function n(t){var e=t&&t.forceBase64;p&&!e||(this.supportsBinary=!1),o.call(this,t)}var o=r(17),i=r(26),s=r(18),a=r(27),c=r(28);r(3)("engine.io-client:polling");t.exports=n;var p=function(){var t=r(13),e=new t({xdomain:!1});return null!=e.responseType}();a(n,o),n.prototype.name="polling",n.prototype.doOpen=function(){this.poll()},n.prototype.pause=function(t){function e(){r.readyState="paused",t()}var r=this;if(this.readyState="pausing",this.polling||!this.writable){var n=0;this.polling&&(n++,this.once("pollComplete",function(){--n||e()})),this.writable||(n++,this.once("drain",function(){--n||e()}))}else e()},n.prototype.poll=function(){this.polling=!0,this.doPoll(),this.emit("poll")},n.prototype.onData=function(t){var e=this,r=function(t,r,n){return"opening"===e.readyState&&e.onOpen(),"close"===t.type?(e.onClose(),!1):void e.onPacket(t)};s.decodePayload(t,this.socket.binaryType,r),"closed"!==this.readyState&&(this.polling=!1,this.emit("pollComplete"),"open"===this.readyState&&this.poll())},n.prototype.doClose=function(){function t(){e.write([{type:"close"}])}var e=this;"open"===this.readyState?t():this.once("open",t)},n.prototype.write=function(t){var e=this;this.writable=!1;var r=function(){e.writable=!0,e.emit("drain")};s.encodePayload(t,this.supportsBinary,function(t){e.doWrite(t,r)})},n.prototype.uri=function(){var t=this.query||{},e=this.secure?"https":"http",r="";!1!==this.timestampRequests&&(t[this.timestampParam]=c()),this.supportsBinary||t.sid||(t.b64=1),t=i.encode(t),this.port&&("https"===e&&443!==Number(this.port)||"http"===e&&80!==Number(this.port))&&(r=":"+this.port),t.length&&(t="?"+t);var n=this.hostname.indexOf(":")!==-1;return e+"://"+(n?"["+this.hostname+"]":this.hostname)+r+this.path+t}},function(t,e,r){function n(t){this.path=t.path,this.hostname=t.hostname,this.port=t.port,this.secure=t.secure,this.query=t.query,this.timestampParam=t.timestampParam,this.timestampRequests=t.timestampRequests,this.readyState="",this.agent=t.agent||!1,this.socket=t.socket,this.enablesXDR=t.enablesXDR,this.withCredentials=t.withCredentials,this.pfx=t.pfx,this.key=t.key,this.passphrase=t.passphrase,this.cert=t.cert,this.ca=t.ca,this.ciphers=t.ciphers,this.rejectUnauthorized=t.rejectUnauthorized,this.forceNode=t.forceNode,this.isReactNative=t.isReactNative,this.extraHeaders=t.extraHeaders,this.localAddress=t.localAddress}var o=r(18),i=r(5);t.exports=n,i(n.prototype),n.prototype.onError=function(t,e){var r=new Error(t);return r.type="TransportError",r.description=e,this.emit("error",r),this},n.prototype.open=function(){return"closed"!==this.readyState&&""!==this.readyState||(this.readyState="opening",this.doOpen()),this},n.prototype.close=function(){return"opening"!==this.readyState&&"open"!==this.readyState||(this.doClose(),this.onClose()),this},n.prototype.send=function(t){if("open"!==this.readyState)throw new Error("Transport not open");
this.write(t)},n.prototype.onOpen=function(){this.readyState="open",this.writable=!0,this.emit("open")},n.prototype.onData=function(t){var e=o.decodePacket(t,this.socket.binaryType);this.onPacket(e)},n.prototype.onPacket=function(t){this.emit("packet",t)},n.prototype.onClose=function(){this.readyState="closed",this.emit("close")}},function(t,e,r){function n(t,r){var n="b"+e.packets[t.type]+t.data.data;return r(n)}function o(t,r,n){if(!r)return e.encodeBase64Packet(t,n);var o=t.data,i=new Uint8Array(o),s=new Uint8Array(1+o.byteLength);s[0]=v[t.type];for(var a=0;a<i.length;a++)s[a+1]=i[a];return n(s.buffer)}function i(t,r,n){if(!r)return e.encodeBase64Packet(t,n);var o=new FileReader;return o.onload=function(){e.encodePacket({type:t.type,data:o.result},r,!0,n)},o.readAsArrayBuffer(t.data)}function s(t,r,n){if(!r)return e.encodeBase64Packet(t,n);if(g)return i(t,r,n);var o=new Uint8Array(1);o[0]=v[t.type];var s=new w([o.buffer,t.data]);return n(s)}function a(t){try{t=d.decode(t,{strict:!1})}catch(t){return!1}return t}function c(t,e,r){for(var n=new Array(t.length),o=l(t.length,r),i=function(t,r,o){e(r,function(e,r){n[t]=r,o(e,n)})},s=0;s<t.length;s++)i(s,t[s],o)}var p,h=r(19),u=r(20),f=r(21),l=r(22),d=r(23);"undefined"!=typeof ArrayBuffer&&(p=r(24));var y="undefined"!=typeof navigator&&/Android/i.test(navigator.userAgent),m="undefined"!=typeof navigator&&/PhantomJS/i.test(navigator.userAgent),g=y||m;e.protocol=3;var v=e.packets={open:0,close:1,ping:2,pong:3,message:4,upgrade:5,noop:6},b=h(v),k={type:"error",data:"parser error"},w=r(25);e.encodePacket=function(t,e,r,i){"function"==typeof e&&(i=e,e=!1),"function"==typeof r&&(i=r,r=null);var a=void 0===t.data?void 0:t.data.buffer||t.data;if("undefined"!=typeof ArrayBuffer&&a instanceof ArrayBuffer)return o(t,e,i);if("undefined"!=typeof w&&a instanceof w)return s(t,e,i);if(a&&a.base64)return n(t,i);var c=v[t.type];return void 0!==t.data&&(c+=r?d.encode(String(t.data),{strict:!1}):String(t.data)),i(""+c)},e.encodeBase64Packet=function(t,r){var n="b"+e.packets[t.type];if("undefined"!=typeof w&&t.data instanceof w){var o=new FileReader;return o.onload=function(){var t=o.result.split(",")[1];r(n+t)},o.readAsDataURL(t.data)}var i;try{i=String.fromCharCode.apply(null,new Uint8Array(t.data))}catch(e){for(var s=new Uint8Array(t.data),a=new Array(s.length),c=0;c<s.length;c++)a[c]=s[c];i=String.fromCharCode.apply(null,a)}return n+=btoa(i),r(n)},e.decodePacket=function(t,r,n){if(void 0===t)return k;if("string"==typeof t){if("b"===t.charAt(0))return e.decodeBase64Packet(t.substr(1),r);if(n&&(t=a(t),t===!1))return k;var o=t.charAt(0);return Number(o)==o&&b[o]?t.length>1?{type:b[o],data:t.substring(1)}:{type:b[o]}:k}var i=new Uint8Array(t),o=i[0],s=f(t,1);return w&&"blob"===r&&(s=new w([s])),{type:b[o],data:s}},e.decodeBase64Packet=function(t,e){var r=b[t.charAt(0)];if(!p)return{type:r,data:{base64:!0,data:t.substr(1)}};var n=p.decode(t.substr(1));return"blob"===e&&w&&(n=new w([n])),{type:r,data:n}},e.encodePayload=function(t,r,n){function o(t){return t.length+":"+t}function i(t,n){e.encodePacket(t,!!s&&r,!1,function(t){n(null,o(t))})}"function"==typeof r&&(n=r,r=null);var s=u(t);return r&&s?w&&!g?e.encodePayloadAsBlob(t,n):e.encodePayloadAsArrayBuffer(t,n):t.length?void c(t,i,function(t,e){return n(e.join(""))}):n("0:")},e.decodePayload=function(t,r,n){if("string"!=typeof t)return e.decodePayloadAsBinary(t,r,n);"function"==typeof r&&(n=r,r=null);var o;if(""===t)return n(k,0,1);for(var i,s,a="",c=0,p=t.length;c<p;c++){var h=t.charAt(c);if(":"===h){if(""===a||a!=(i=Number(a)))return n(k,0,1);if(s=t.substr(c+1,i),a!=s.length)return n(k,0,1);if(s.length){if(o=e.decodePacket(s,r,!1),k.type===o.type&&k.data===o.data)return n(k,0,1);var u=n(o,c+i,p);if(!1===u)return}c+=i,a=""}else a+=h}return""!==a?n(k,0,1):void 0},e.encodePayloadAsArrayBuffer=function(t,r){function n(t,r){e.encodePacket(t,!0,!0,function(t){return r(null,t)})}return t.length?void c(t,n,function(t,e){var n=e.reduce(function(t,e){var r;return r="string"==typeof e?e.length:e.byteLength,t+r.toString().length+r+2},0),o=new Uint8Array(n),i=0;return e.forEach(function(t){var e="string"==typeof t,r=t;if(e){for(var n=new Uint8Array(t.length),s=0;s<t.length;s++)n[s]=t.charCodeAt(s);r=n.buffer}e?o[i++]=0:o[i++]=1;for(var a=r.byteLength.toString(),s=0;s<a.length;s++)o[i++]=parseInt(a[s]);o[i++]=255;for(var n=new Uint8Array(r),s=0;s<n.length;s++)o[i++]=n[s]}),r(o.buffer)}):r(new ArrayBuffer(0))},e.encodePayloadAsBlob=function(t,r){function n(t,r){e.encodePacket(t,!0,!0,function(t){var e=new Uint8Array(1);if(e[0]=1,"string"==typeof t){for(var n=new Uint8Array(t.length),o=0;o<t.length;o++)n[o]=t.charCodeAt(o);t=n.buffer,e[0]=0}for(var i=t instanceof ArrayBuffer?t.byteLength:t.size,s=i.toString(),a=new Uint8Array(s.length+1),o=0;o<s.length;o++)a[o]=parseInt(s[o]);if(a[s.length]=255,w){var c=new w([e.buffer,a.buffer,t]);r(null,c)}})}c(t,n,function(t,e){return r(new w(e))})},e.decodePayloadAsBinary=function(t,r,n){"function"==typeof r&&(n=r,r=null);for(var o=t,i=[];o.byteLength>0;){for(var s=new Uint8Array(o),a=0===s[0],c="",p=1;255!==s[p];p++){if(c.length>310)return n(k,0,1);c+=s[p]}o=f(o,2+c.length),c=parseInt(c);var h=f(o,0,c);if(a)try{h=String.fromCharCode.apply(null,new Uint8Array(h))}catch(t){var u=new Uint8Array(h);h="";for(var p=0;p<u.length;p++)h+=String.fromCharCode(u[p])}i.push(h),o=f(o,c)}var l=i.length;i.forEach(function(t,o){n(e.decodePacket(t,r,!0),o,l)})}},function(t,e){t.exports=Object.keys||function(t){var e=[],r=Object.prototype.hasOwnProperty;for(var n in t)r.call(t,n)&&e.push(n);return e}},function(t,e,r){function n(t){if(!t||"object"!=typeof t)return!1;if(o(t)){for(var e=0,r=t.length;e<r;e++)if(n(t[e]))return!0;return!1}if("function"==typeof Buffer&&Buffer.isBuffer&&Buffer.isBuffer(t)||"function"==typeof ArrayBuffer&&t instanceof ArrayBuffer||s&&t instanceof Blob||a&&t instanceof File)return!0;if(t.toJSON&&"function"==typeof t.toJSON&&1===arguments.length)return n(t.toJSON(),!0);for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)&&n(t[i]))return!0;return!1}var o=r(7),i=Object.prototype.toString,s="function"==typeof Blob||"undefined"!=typeof Blob&&"[object BlobConstructor]"===i.call(Blob),a="function"==typeof File||"undefined"!=typeof File&&"[object FileConstructor]"===i.call(File);t.exports=n},function(t,e){t.exports=function(t,e,r){var n=t.byteLength;if(e=e||0,r=r||n,t.slice)return t.slice(e,r);if(e<0&&(e+=n),r<0&&(r+=n),r>n&&(r=n),e>=n||e>=r||0===n)return new ArrayBuffer(0);for(var o=new Uint8Array(t),i=new Uint8Array(r-e),s=e,a=0;s<r;s++,a++)i[a]=o[s];return i.buffer}},function(t,e){function r(t,e,r){function o(t,n){if(o.count<=0)throw new Error("after called too many times");--o.count,t?(i=!0,e(t),e=r):0!==o.count||i||e(null,n)}var i=!1;return r=r||n,o.count=t,0===t?e():o}function n(){}t.exports=r},function(t,e){function r(t){for(var e,r,n=[],o=0,i=t.length;o<i;)e=t.charCodeAt(o++),e>=55296&&e<=56319&&o<i?(r=t.charCodeAt(o++),56320==(64512&r)?n.push(((1023&e)<<10)+(1023&r)+65536):(n.push(e),o--)):n.push(e);return n}function n(t){for(var e,r=t.length,n=-1,o="";++n<r;)e=t[n],e>65535&&(e-=65536,o+=d(e>>>10&1023|55296),e=56320|1023&e),o+=d(e);return o}function o(t,e){if(t>=55296&&t<=57343){if(e)throw Error("Lone surrogate U+"+t.toString(16).toUpperCase()+" is not a scalar value");return!1}return!0}function i(t,e){return d(t>>e&63|128)}function s(t,e){if(0==(4294967168&t))return d(t);var r="";return 0==(4294965248&t)?r=d(t>>6&31|192):0==(4294901760&t)?(o(t,e)||(t=65533),r=d(t>>12&15|224),r+=i(t,6)):0==(4292870144&t)&&(r=d(t>>18&7|240),r+=i(t,12),r+=i(t,6)),r+=d(63&t|128)}function a(t,e){e=e||{};for(var n,o=!1!==e.strict,i=r(t),a=i.length,c=-1,p="";++c<a;)n=i[c],p+=s(n,o);return p}function c(){if(l>=f)throw Error("Invalid byte index");var t=255&u[l];if(l++,128==(192&t))return 63&t;throw Error("Invalid continuation byte")}function p(t){var e,r,n,i,s;if(l>f)throw Error("Invalid byte index");if(l==f)return!1;if(e=255&u[l],l++,0==(128&e))return e;if(192==(224&e)){if(r=c(),s=(31&e)<<6|r,s>=128)return s;throw Error("Invalid continuation byte")}if(224==(240&e)){if(r=c(),n=c(),s=(15&e)<<12|r<<6|n,s>=2048)return o(s,t)?s:65533;throw Error("Invalid continuation byte")}if(240==(248&e)&&(r=c(),n=c(),i=c(),s=(7&e)<<18|r<<12|n<<6|i,s>=65536&&s<=1114111))return s;throw Error("Invalid UTF-8 detected")}function h(t,e){e=e||{};var o=!1!==e.strict;u=r(t),f=u.length,l=0;for(var i,s=[];(i=p(o))!==!1;)s.push(i);return n(s)}/*! https://mths.be/utf8js v2.1.2 by @mathias */
var u,f,l,d=String.fromCharCode;t.exports={version:"2.1.2",encode:a,decode:h}},function(t,e){!function(){"use strict";for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",r=new Uint8Array(256),n=0;n<t.length;n++)r[t.charCodeAt(n)]=n;e.encode=function(e){var r,n=new Uint8Array(e),o=n.length,i="";for(r=0;r<o;r+=3)i+=t[n[r]>>2],i+=t[(3&n[r])<<4|n[r+1]>>4],i+=t[(15&n[r+1])<<2|n[r+2]>>6],i+=t[63&n[r+2]];return o%3===2?i=i.substring(0,i.length-1)+"=":o%3===1&&(i=i.substring(0,i.length-2)+"=="),i},e.decode=function(t){var e,n,o,i,s,a=.75*t.length,c=t.length,p=0;"="===t[t.length-1]&&(a--,"="===t[t.length-2]&&a--);var h=new ArrayBuffer(a),u=new Uint8Array(h);for(e=0;e<c;e+=4)n=r[t.charCodeAt(e)],o=r[t.charCodeAt(e+1)],i=r[t.charCodeAt(e+2)],s=r[t.charCodeAt(e+3)],u[p++]=n<<2|o>>4,u[p++]=(15&o)<<4|i>>2,u[p++]=(3&i)<<6|63&s;return h}}()},function(t,e){function r(t){return t.map(function(t){if(t.buffer instanceof ArrayBuffer){var e=t.buffer;if(t.byteLength!==e.byteLength){var r=new Uint8Array(t.byteLength);r.set(new Uint8Array(e,t.byteOffset,t.byteLength)),e=r.buffer}return e}return t})}function n(t,e){e=e||{};var n=new i;return r(t).forEach(function(t){n.append(t)}),e.type?n.getBlob(e.type):n.getBlob()}function o(t,e){return new Blob(r(t),e||{})}var i="undefined"!=typeof i?i:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:"undefined"!=typeof MSBlobBuilder?MSBlobBuilder:"undefined"!=typeof MozBlobBuilder&&MozBlobBuilder,s=function(){try{var t=new Blob(["hi"]);return 2===t.size}catch(t){return!1}}(),a=s&&function(){try{var t=new Blob([new Uint8Array([1,2])]);return 2===t.size}catch(t){return!1}}(),c=i&&i.prototype.append&&i.prototype.getBlob;"undefined"!=typeof Blob&&(n.prototype=Blob.prototype,o.prototype=Blob.prototype),t.exports=function(){return s?a?Blob:o:c?n:void 0}()},function(t,e){e.encode=function(t){var e="";for(var r in t)t.hasOwnProperty(r)&&(e.length&&(e+="&"),e+=encodeURIComponent(r)+"="+encodeURIComponent(t[r]));return e},e.decode=function(t){for(var e={},r=t.split("&"),n=0,o=r.length;n<o;n++){var i=r[n].split("=");e[decodeURIComponent(i[0])]=decodeURIComponent(i[1])}return e}},function(t,e){t.exports=function(t,e){var r=function(){};r.prototype=e.prototype,t.prototype=new r,t.prototype.constructor=t}},function(t,e){"use strict";function r(t){var e="";do e=s[t%a]+e,t=Math.floor(t/a);while(t>0);return e}function n(t){var e=0;for(h=0;h<t.length;h++)e=e*a+c[t.charAt(h)];return e}function o(){var t=r(+new Date);return t!==i?(p=0,i=t):t+"."+r(p++)}for(var i,s="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),a=64,c={},p=0,h=0;h<a;h++)c[s[h]]=h;o.encode=r,o.decode=n,t.exports=o},function(t,e,r){(function(e){function n(){}function o(){return"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof e?e:{}}function i(t){if(s.call(this,t),this.query=this.query||{},!c){var e=o();c=e.___eio=e.___eio||[]}this.index=c.length;var r=this;c.push(function(t){r.onData(t)}),this.query.j=this.index,"function"==typeof addEventListener&&addEventListener("beforeunload",function(){r.script&&(r.script.onerror=n)},!1)}var s=r(16),a=r(27);t.exports=i;var c,p=/\n/g,h=/\\n/g;a(i,s),i.prototype.supportsBinary=!1,i.prototype.doClose=function(){this.script&&(this.script.parentNode.removeChild(this.script),this.script=null),this.form&&(this.form.parentNode.removeChild(this.form),this.form=null,this.iframe=null),s.prototype.doClose.call(this)},i.prototype.doPoll=function(){var t=this,e=document.createElement("script");this.script&&(this.script.parentNode.removeChild(this.script),this.script=null),e.async=!0,e.src=this.uri(),e.onerror=function(e){t.onError("jsonp poll error",e)};var r=document.getElementsByTagName("script")[0];r?r.parentNode.insertBefore(e,r):(document.head||document.body).appendChild(e),this.script=e;var n="undefined"!=typeof navigator&&/gecko/i.test(navigator.userAgent);n&&setTimeout(function(){var t=document.createElement("iframe");document.body.appendChild(t),document.body.removeChild(t)},100)},i.prototype.doWrite=function(t,e){function r(){n(),e()}function n(){if(o.iframe)try{o.form.removeChild(o.iframe)}catch(t){o.onError("jsonp polling iframe removal error",t)}try{var t='<iframe src="javascript:0" name="'+o.iframeId+'">';i=document.createElement(t)}catch(t){i=document.createElement("iframe"),i.name=o.iframeId,i.src="javascript:0"}i.id=o.iframeId,o.form.appendChild(i),o.iframe=i}var o=this;if(!this.form){var i,s=document.createElement("form"),a=document.createElement("textarea"),c=this.iframeId="eio_iframe_"+this.index;s.className="socketio",s.style.position="absolute",s.style.top="-1000px",s.style.left="-1000px",s.target=c,s.method="POST",s.setAttribute("accept-charset","utf-8"),a.name="d",s.appendChild(a),document.body.appendChild(s),this.form=s,this.area=a}this.form.action=this.uri(),n(),t=t.replace(h,"\\\n"),this.area.value=t.replace(p,"\\n");try{this.form.submit()}catch(t){}this.iframe.attachEvent?this.iframe.onreadystatechange=function(){"complete"===o.iframe.readyState&&r()}:this.iframe.onload=r}}).call(e,function(){return this}())},function(t,e,r){function n(t){var e=t&&t.forceBase64;e&&(this.supportsBinary=!1),this.perMessageDeflate=t.perMessageDeflate,this.usingBrowserWebSocket=o&&!t.forceNode,this.protocols=t.protocols,this.usingBrowserWebSocket||(u=i),s.call(this,t)}var o,i,s=r(17),a=r(18),c=r(26),p=r(27),h=r(28);r(3)("engine.io-client:websocket");if("undefined"!=typeof WebSocket?o=WebSocket:"undefined"!=typeof self&&(o=self.WebSocket||self.MozWebSocket),"undefined"==typeof window)try{i=r(31)}catch(t){}var u=o||i;t.exports=n,p(n,s),n.prototype.name="websocket",n.prototype.supportsBinary=!0,n.prototype.doOpen=function(){if(this.check()){var t=this.uri(),e=this.protocols,r={agent:this.agent,perMessageDeflate:this.perMessageDeflate};r.pfx=this.pfx,r.key=this.key,r.passphrase=this.passphrase,r.cert=this.cert,r.ca=this.ca,r.ciphers=this.ciphers,r.rejectUnauthorized=this.rejectUnauthorized,this.extraHeaders&&(r.headers=this.extraHeaders),this.localAddress&&(r.localAddress=this.localAddress);try{this.ws=this.usingBrowserWebSocket&&!this.isReactNative?e?new u(t,e):new u(t):new u(t,e,r)}catch(t){return this.emit("error",t)}void 0===this.ws.binaryType&&(this.supportsBinary=!1),this.ws.supports&&this.ws.supports.binary?(this.supportsBinary=!0,this.ws.binaryType="nodebuffer"):this.ws.binaryType="arraybuffer",this.addEventListeners()}},n.prototype.addEventListeners=function(){var t=this;this.ws.onopen=function(){t.onOpen()},this.ws.onclose=function(){t.onClose()},this.ws.onmessage=function(e){t.onData(e.data)},this.ws.onerror=function(e){t.onError("websocket error",e)}},n.prototype.write=function(t){function e(){r.emit("flush"),setTimeout(function(){r.writable=!0,r.emit("drain")},0)}var r=this;this.writable=!1;for(var n=t.length,o=0,i=n;o<i;o++)!function(t){a.encodePacket(t,r.supportsBinary,function(o){if(!r.usingBrowserWebSocket){var i={};if(t.options&&(i.compress=t.options.compress),r.perMessageDeflate){var s="string"==typeof o?Buffer.byteLength(o):o.length;s<r.perMessageDeflate.threshold&&(i.compress=!1)}}try{r.usingBrowserWebSocket?r.ws.send(o):r.ws.send(o,i)}catch(t){}--n||e()})}(t[o])},n.prototype.onClose=function(){s.prototype.onClose.call(this)},n.prototype.doClose=function(){"undefined"!=typeof this.ws&&this.ws.close()},n.prototype.uri=function(){var t=this.query||{},e=this.secure?"wss":"ws",r="";this.port&&("wss"===e&&443!==Number(this.port)||"ws"===e&&80!==Number(this.port))&&(r=":"+this.port),this.timestampRequests&&(t[this.timestampParam]=h()),this.supportsBinary||(t.b64=1),t=c.encode(t),t.length&&(t="?"+t);var n=this.hostname.indexOf(":")!==-1;return e+"://"+(n?"["+this.hostname+"]":this.hostname)+r+this.path+t},n.prototype.check=function(){return!(!u||"__initialize"in u&&this.name===n.prototype.name)}},function(t,e){},function(t,e){var r=[].indexOf;t.exports=function(t,e){if(r)return t.indexOf(e);for(var n=0;n<t.length;++n)if(t[n]===e)return n;return-1}},function(t,e,r){"use strict";function n(t,e,r){this.io=t,this.nsp=e,this.json=this,this.ids=0,this.acks={},this.receiveBuffer=[],this.sendBuffer=[],this.connected=!1,this.disconnected=!0,this.flags={},r&&r.query&&(this.query=r.query),this.io.autoConnect&&this.open()}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=r(4),s=r(5),a=r(34),c=r(35),p=r(36),h=(r(3)("socket.io-client:socket"),r(26)),u=r(20);t.exports=e=n;var f={connect:1,connect_error:1,connect_timeout:1,connecting:1,disconnect:1,error:1,reconnect:1,reconnect_attempt:1,reconnect_failed:1,reconnect_error:1,reconnecting:1,ping:1,pong:1},l=s.prototype.emit;s(n.prototype),n.prototype.subEvents=function(){if(!this.subs){var t=this.io;this.subs=[c(t,"open",p(this,"onopen")),c(t,"packet",p(this,"onpacket")),c(t,"close",p(this,"onclose"))]}},n.prototype.open=n.prototype.connect=function(){return this.connected?this:(this.subEvents(),this.io.open(),"open"===this.io.readyState&&this.onopen(),this.emit("connecting"),this)},n.prototype.send=function(){var t=a(arguments);return t.unshift("message"),this.emit.apply(this,t),this},n.prototype.emit=function(t){if(f.hasOwnProperty(t))return l.apply(this,arguments),this;var e=a(arguments),r={type:(void 0!==this.flags.binary?this.flags.binary:u(e))?i.BINARY_EVENT:i.EVENT,data:e};return r.options={},r.options.compress=!this.flags||!1!==this.flags.compress,"function"==typeof e[e.length-1]&&(this.acks[this.ids]=e.pop(),r.id=this.ids++),this.connected?this.packet(r):this.sendBuffer.push(r),this.flags={},this},n.prototype.packet=function(t){t.nsp=this.nsp,this.io.packet(t)},n.prototype.onopen=function(){if("/"!==this.nsp)if(this.query){var t="object"===o(this.query)?h.encode(this.query):this.query;this.packet({type:i.CONNECT,query:t})}else this.packet({type:i.CONNECT})},n.prototype.onclose=function(t){this.connected=!1,this.disconnected=!0,delete this.id,this.emit("disconnect",t)},n.prototype.onpacket=function(t){var e=t.nsp===this.nsp,r=t.type===i.ERROR&&"/"===t.nsp;if(e||r)switch(t.type){case i.CONNECT:this.onconnect();break;case i.EVENT:this.onevent(t);break;case i.BINARY_EVENT:this.onevent(t);break;case i.ACK:this.onack(t);break;case i.BINARY_ACK:this.onack(t);break;case i.DISCONNECT:this.ondisconnect();break;case i.ERROR:this.emit("error",t.data)}},n.prototype.onevent=function(t){var e=t.data||[];null!=t.id&&e.push(this.ack(t.id)),this.connected?l.apply(this,e):this.receiveBuffer.push(e)},n.prototype.ack=function(t){var e=this,r=!1;return function(){if(!r){r=!0;var n=a(arguments);e.packet({type:u(n)?i.BINARY_ACK:i.ACK,id:t,data:n})}}},n.prototype.onack=function(t){var e=this.acks[t.id];"function"==typeof e&&(e.apply(this,t.data),delete this.acks[t.id])},n.prototype.onconnect=function(){this.connected=!0,this.disconnected=!1,this.emit("connect"),this.emitBuffered()},n.prototype.emitBuffered=function(){var t;for(t=0;t<this.receiveBuffer.length;t++)l.apply(this,this.receiveBuffer[t]);for(this.receiveBuffer=[],t=0;t<this.sendBuffer.length;t++)this.packet(this.sendBuffer[t]);this.sendBuffer=[]},n.prototype.ondisconnect=function(){this.destroy(),this.onclose("io server disconnect")},n.prototype.destroy=function(){if(this.subs){for(var t=0;t<this.subs.length;t++)this.subs[t].destroy();this.subs=null}this.io.destroy(this)},n.prototype.close=n.prototype.disconnect=function(){return this.connected&&this.packet({type:i.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this},n.prototype.compress=function(t){return this.flags.compress=t,this},n.prototype.binary=function(t){return this.flags.binary=t,this}},function(t,e){function r(t,e){var r=[];e=e||0;for(var n=e||0;n<t.length;n++)r[n-e]=t[n];return r}t.exports=r},function(t,e){"use strict";function r(t,e,r){return t.on(e,r),{destroy:function(){t.removeListener(e,r)}}}t.exports=r},function(t,e){var r=[].slice;t.exports=function(t,e){if("string"==typeof e&&(e=t[e]),"function"!=typeof e)throw new Error("bind() requires a function");var n=r.call(arguments,2);return function(){return e.apply(t,n.concat(r.call(arguments)))}}},function(t,e){function r(t){t=t||{},this.ms=t.min||100,this.max=t.max||1e4,this.factor=t.factor||2,this.jitter=t.jitter>0&&t.jitter<=1?t.jitter:0,this.attempts=0}t.exports=r,r.prototype.duration=function(){var t=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),r=Math.floor(e*this.jitter*t);t=0==(1&Math.floor(10*e))?t-r:t+r}return 0|Math.min(t,this.max)},r.prototype.reset=function(){this.attempts=0},r.prototype.setMin=function(t){this.ms=t},r.prototype.setMax=function(t){this.max=t},r.prototype.setJitter=function(t){this.jitter=t}}])});
//# sourceMappingURL=socket.io.slim.js.map

text = "%c  Socket.io is loaded 2.3.0";
console.log(text, 'background: #3b3b3b; color: #22ab3b');

// Generated by CoffeeScript 2.6.1
// * Глабольный менеджер расширений (кода совместимости)

//?Данный класс заимствован из AABSZ (ревизия 26.02.2022)

//╒═════════════════════════════════════════════════════════════════════════╛
// ■ IMPLEMENTATION.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = ANET;
  // * Добавить метод расширения
  _.extend = function(method) {
    if (ANET.__extenders == null) {
      ANET.__extenders = [];
    }
    ANET.__extenders.push(method);
  };
  // * Загрузить (выполнить) все методы расширения
  _.loadExtensions = function() {
    var i, len, method, ref;
    if (ANET.__extenders == null) {
      return;
    }
    ref = ANET.__extenders;
    for (i = 0, len = ref.length; i < len; i++) {
      method = ref[i];
      method();
    }
    // * Освобождение памяти
    ANET.__extenders = null;
  };
})();

// ■ END IMPLEMENTATION.coffee
//---------------------------------------------------------------------------


function _0x5950(_0x5765bf, _0xd2e2e7) {
    var _0x55352e = _0x5535();
    return _0x5950 = function (_0x595002, _0x7a4280) {
        _0x595002 = _0x595002 - 0x1aa;
        var _0x27dc74 = _0x55352e[_0x595002];
        return _0x27dc74;
    }, _0x5950(_0x5765bf, _0xd2e2e7);
}
function _0x5535() {
    var _0x5c601e = [
        '\x5f\x69\x73\x48\x6f\x73\x74',
        '\x39\x37\x32\x34\x30\x34\x70\x67\x66\x4b\x56\x78',
        '\x35\x33\x32\x39\x32\x30\x79\x44\x59\x78\x46\x6f',
        '\x73\x65\x74\x52\x6f\x6f\x6d\x4d\x61\x73\x74\x65\x72',
        '\x54\x72\x61\x63\x65',
        '\x33\x34\x36\x32\x47\x70\x6c\x59\x6c\x74',
        '\x63\x6c\x69\x65\x6e\x74',
        '\x72\x6f\x6f\x6d',
        '\x67\x61\x6d\x65\x54\x69\x74\x6c\x65',
        '\x63\x6c\x6f\x73\x65\x52\x6f\x6f\x6d',
        '\x44\x62\x79\x45\x75',
        '\x73\x65\x74\x43\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e',
        '\x4a\x49\x42\x70\x51',
        '\x51\x6e\x4a\x73\x58',
        '\x57\x6d\x5a\x75\x6d',
        '\x73\x74\x6f\x70',
        '\x73\x65\x74\x46\x72\x6f\x6d',
        '\x52\x65\x73\x70\x6f\x6e\x73\x65\x20\x28\x67\x65\x74\x29\x20\x66\x6f\x72\x3a\x20',
        '\x6d\x79\x49\x64',
        '\x73\x68\x6f\x77\x4c\x6f\x61\x64\x65\x72',
        '\x7a\x77\x49\x6b\x4b',
        '\x6c\x6f\x67',
        '\x54\x63\x59\x43\x77',
        '\x43\x6f\x6c\x6f\x72',
        '\x69\x73\x43\x6f\x6e\x6e\x65\x63\x74\x65\x64',
        '\x69\x73\x53\x61\x6d\x65\x4d\x61\x70\x4d\x6f\x64\x65',
        '\x53\x65\x6e\x64\x3a\x20',
        '\x69\x73\x4d\x61\x73\x74\x65\x72\x43\x6c\x69\x65\x6e\x74',
        '\x6f\x6e\x52\x6f\x6f\x6d\x44\x61\x74\x61\x46\x72\x6f\x6d\x53\x65\x72\x76\x65\x72',
        '\x67\x65\x74\x52\x6f\x6f\x6d\x44\x61\x74\x61',
        '\x6f\x6e\x4c\x65\x61\x76\x65\x52\x6f\x6f\x6d',
        '\x73\x65\x72\x76\x65\x72\x50\x6f\x72\x74',
        '\x6e\x61\x6d\x65',
        '\x67\x65\x74\x4c\x69\x67\x68\x74\x65\x73\x74\x43\x6f\x6c\x6f\x72',
        '\x47\x52\x45\x45\x4e',
        '\x55\x73\x69\x6e\x67\x20\x48\x54\x54\x50\x53\x20\x73\x65\x63\x75\x72\x65\x20\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e',
        '\x68\x74\x74\x70\x73\x3a\x2f\x2f',
        '\x6c\x65\x61\x76\x65\x52\x6f\x6f\x6d',
        '\x73\x65\x74\x43\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x54\x6f\x4d\x61\x73\x74\x65\x72\x43\x61\x6c\x6c\x62\x61\x63\x6b',
        '\x65\x61\x59\x42\x58',
        '\x59\x6f\x75\x20\x61\x72\x65\x20\x4d\x61\x73\x74\x65\x72\x20\x28\x68\x6f\x73\x74\x29\x20\x6f\x66\x20\x72\x6f\x6f\x6d\x3a\x20',
        '\x54\x69\x6d\x65\x6f\x75\x74\x20\x66\x6f\x72\x3a\x20',
        '\x72\x65\x71\x75\x65\x73\x74\x52\x6f\x6f\x6d\x52\x65\x66\x72\x65\x73\x68',
        '\x59\x6f\x75\x20\x61\x72\x65\x20\x6a\x6f\x69\x6e\x65\x64\x20\x74\x6f\x20\x72\x6f\x6f\x6d\x3a\x20',
        '\x32\x34\x39\x30\x34\x32\x30\x79\x56\x6a\x6f\x4a\x79',
        '\x72\x65\x73\x65\x74\x57\x61\x69\x74',
        '\x4f\x46\x4b\x67\x6c',
        '\x68\x69\x64\x65\x4c\x6f\x61\x64\x65\x72',
        '\x73\x65\x72\x76\x65\x72\x49\x70',
        '\x6d\x61\x78\x50\x6c\x61\x79\x65\x72\x73\x49\x6e\x52\x6f\x6f\x6d',
        '\x5f\x69\x73\x57\x61\x69\x74\x53\x65\x72\x76\x65\x72',
        '\x59\x6f\x75\x20\x74\x72\x79\x20\x67\x65\x74\x20\x64\x61\x74\x61\x20\x66\x72\x6f\x6d\x20\x53\x65\x72\x76\x65\x72\x2c\x20\x62\x75\x74\x20\x4e\x4f\x54\x20\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x21',
        '\x69\x73\x4d\x5a',
        '\x41\x7a\x6d\x53\x6c',
        '\x77\x61\x72\x6e',
        '\x76\x65\x52\x41\x6a',
        '\x63\x61\x6c\x6c\x62\x61\x63\x6b',
        '\x32\x32\x30\x33\x38\x31\x35\x71\x59\x42\x66\x59\x47',
        '\x68\x5a\x66\x63\x67',
        '\x73\x65\x74\x57\x61\x69\x74',
        '\x69\x73\x53\x68\x6f\x75\x6c\x64\x57\x61\x69\x74\x53\x65\x72\x76\x65\x72',
        '\x41\x4e\x4e\x65\x74\x77\x6f\x72\x6b',
        '\x6e\x66\x79\x56\x45',
        '\x70\x72\x58\x4d\x4b',
        '\x61\x70\x70\x6c\x79',
        '\x69\x6e\x69\x74\x53\x79\x73\x74\x65\x6d',
        '\x42\x75\x69\x4c\x45',
        '\x4e\x65\x74\x77\x6f\x72\x6b\x20\x69\x6e\x69\x74\x65\x64',
        '\x69\x73\x57\x61\x69\x74\x53\x65\x72\x76\x65\x72',
        '\x6f\x6e\x52\x6f\x6f\x6d\x43\x6c\x6f\x73\x65\x64',
        '\x47\x65\x6a\x70\x54',
        '\x73\x65\x6e\x64',
        '\x4f\x78\x64\x47\x48',
        '\x67\x65\x74',
        '\x59\x6f\x75\x20\x74\x72\x79\x20\x73\x65\x6e\x64\x20\x63\x61\x6c\x6c\x62\x61\x63\x6b\x20\x6d\x65\x73\x73\x61\x67\x65\x2c\x20\x62\x75\x74\x20\x4e\x4f\x54\x20\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x21',
        '\x53\x65\x6e\x64\x2c\x20\x67\x65\x74\x21\x3a\x20',
        '\x69\x73\x4f\x6e\x6c\x79\x53\x61\x6d\x65\x4d\x61\x70\x4d\x6f\x64\x65',
        '\x66\x75\x6c\x6c\x4e\x61\x6d\x65',
        '\x73\x65\x74\x52\x6f\x6f\x6d\x4a\x6f\x69\x6e',
        '\x44\x65\x76\x4c\x6f\x67',
        '\x35\x30\x32\x64\x56\x73\x52\x68\x64',
        '\x59\x6f\x75\x20\x74\x72\x79\x20\x73\x65\x6e\x64\x20\x6d\x65\x73\x73\x61\x67\x65\x2c\x20\x62\x75\x74\x20\x4e\x4f\x54\x20\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x21',
        '\x67\x65\x74\x47\x61\x6d\x65\x56\x65\x72\x73\x69\x6f\x6e',
        '\x59\x6f\x75\x20\x74\x72\x79\x20\x63\x6f\x6e\x6e\x65\x63\x74\x20\x76\x69\x61\x20\x48\x54\x54\x50\x53\x20\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x20\x77\x69\x74\x68\x20\x70\x6f\x72\x74\x20\x33\x30\x33\x34\x20\x28\x68\x74\x74\x70\x29',
        '\x31\x33\x30\x36\x35\x34\x30\x30\x4e\x73\x4e\x4f\x52\x4c',
        '\x61\x56\x45\x69\x4b',
        '\x50\x6f\x72\x74\x20\x63\x68\x61\x6e\x67\x65\x64\x20\x74\x6f\x20\x33\x30\x33\x35\x2e\x20\x43\x68\x65\x63\x6b\x20\x43\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x20\x70\x6c\x75\x67\x69\x6e\x20\x70\x61\x72\x61\x6d\x65\x74\x65\x72',
        '\x70\x55\x47\x58\x4b',
        '\x43\x6f\x6e\x6e\x65\x63\x74\x20\x74\x6f\x20',
        '\x58\x42\x78\x77\x68',
        '\x39\x38\x31\x36\x38\x30\x4c\x4b\x68\x51\x51\x63',
        '\x73\x6f\x63\x6b\x65\x74',
        '\x73\x65\x74\x43\x6f\x6c\x6f\x72\x73',
        '\x73\x4a\x49\x70\x50',
        '\x53\x65\x6e\x64\x2c\x20\x63\x61\x6c\x6c\x62\x61\x63\x6b\x3a\x20',
        '\x73\x74\x61\x72\x74\x43\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e',
        '\x4e\x45\x54',
        '\x45\x4c\x49\x43\x62',
        '\x41\x71\x74\x66\x6b',
        '\x4c\x6f\x62\x62\x79',
        '\x69\x73\x42\x75\x73\x79'
    ];
    _0x5535 = function () {
        return _0x5c601e;
    };
    return _0x5535();
}
var _0x357e53 = _0x5950;
(function (_0x4c036b, _0x2c1417) {
    var _0x1b70b5 = _0x5950, _0x1b971a = _0x4c036b();
    while (!![]) {
        try {
            var _0x2bf00c = -parseInt(_0x1b70b5(0x1b6)) / 0x1 + parseInt(_0x1b70b5(0x204)) / 0x2 * (-parseInt(_0x1b70b5(0x1b9)) / 0x3) + parseInt(_0x1b70b5(0x1b5)) / 0x4 + -parseInt(_0x1b70b5(0x1ed)) / 0x5 + -parseInt(_0x1b70b5(0x1e0)) / 0x6 + parseInt(_0x1b70b5(0x20e)) / 0x7 + parseInt(_0x1b70b5(0x208)) / 0x8;
            if (_0x2bf00c === _0x2c1417)
                break;
            else
                _0x1b971a['push'](_0x1b971a['shift']());
        } catch (_0x571fc8) {
            _0x1b971a['push'](_0x1b971a['shift']());
        }
    }
}(_0x5535, 0x528bd), window[_0x357e53(0x1f1)] = function () {
}, window[_0x357e53(0x1af)] = window[_0x357e53(0x1f1)], (function () {
    var _0x5e9caa = _0x357e53, _0x370e3b, _0x3a93dc;
    _0x370e3b = new KDCore[(_0x5e9caa(0x203))]('\x4e\x65\x74\x77\x6f\x72\x6b'), _0x370e3b[_0x5e9caa(0x1ab)](KDCore['\x43\x6f\x6c\x6f\x72'][_0x5e9caa(0x1d6)], KDCore[_0x5e9caa(0x1cb)]['\x42\x4c\x41\x43\x4b'][_0x5e9caa(0x1d5)](0x23)), _0x370e3b['\x6f\x6e'](), _0x3a93dc = window[_0x5e9caa(0x1f1)], _0x3a93dc['\x69\x73\x43\x6f\x6e\x6e\x65\x63\x74\x65\x64'] = function () {
        var _0xf8f1bd = _0x5e9caa;
        return _0xf8f1bd(0x1ee) !== _0xf8f1bd(0x1c2) ? this[_0xf8f1bd(0x1aa)] != null : this[_0xf8f1bd(0x1cc)]() && this['\x5f\x69\x73\x57\x61\x69\x74\x53\x65\x72\x76\x65\x72'] === !![];
    }, _0x3a93dc[_0x5e9caa(0x1c6)] = function () {
        var _0x48e9fb = _0x5e9caa, _0x290931;
        return (_0x290931 = this[_0x48e9fb(0x1aa)]) != null ? _0x290931['\x69\x64'] : void 0x0;
    }, _0x3a93dc['\x69\x73\x4d\x61\x73\x74\x65\x72\x43\x6c\x69\x65\x6e\x74'] = function () {
        var _0x285b61 = _0x5e9caa;
        return this[_0x285b61(0x1b4)] === !![];
    }, _0x3a93dc[_0x5e9caa(0x1cd)] = function () {
        return ANET['\x50\x50']['\x69\x73\x4f\x6e\x6c\x79\x53\x61\x6d\x65\x4d\x61\x70\x4d\x6f\x64\x65']();
    }, _0x3a93dc[_0x5e9caa(0x1b3)] = function () {
        var _0x43c630 = _0x5e9caa;
        return this['\x69\x73\x43\x6f\x6e\x6e\x65\x63\x74\x65\x64']() && (this[_0x43c630(0x1f8)]() || ANGameManager[_0x43c630(0x1f0)]());
    }, _0x3a93dc[_0x5e9caa(0x1f8)] = function () {
        var _0x37b881 = _0x5e9caa;
        if (_0x37b881(0x20b) === '\x67\x6d\x48\x53\x59') {
            if (!this[_0x37b881(0x1cc)]())
                return;
            this[_0x37b881(0x1fb)](_0x2b182a[_0x37b881(0x1b2)](_0x37b881(0x1d1)));
        } else
            return this[_0x37b881(0x1cc)]() && this[_0x37b881(0x1e6)] === !![];
    }, _0x3a93dc[_0x5e9caa(0x1ef)] = function () {
        var _0x2197da = _0x5e9caa;
        return this[_0x2197da(0x1e6)] = !![];
    }, _0x3a93dc[_0x5e9caa(0x1e1)] = function () {
        var _0x158331 = _0x5e9caa;
        if (_0x158331(0x20d) !== '\x4d\x6c\x72\x63\x75')
            return this[_0x158331(0x1e6)] = ![];
        else
            !this[_0x158331(0x1cc)]() ? _0x402fb5['\x70'](_0x158331(0x205)) : (!_0x30aa79 && _0x631efa['\x70'](_0x158331(0x1ce) + _0x385eb0[_0x158331(0x201)]()), _0x387ce8[_0x158331(0x1c4)](this[_0x158331(0x1aa)]['\x69\x64'])[_0x158331(0x1fb)]());
    }, (function () {
        var _0x229c72 = _0x5e9caa;
        return _0x229c72(0x1c0) === _0x229c72(0x1c0) ? (_0x3a93dc[_0x229c72(0x1f5)] = function () {
            var _0x7a2c41 = _0x229c72;
            this[_0x7a2c41(0x1aa)] = null, this[_0x7a2c41(0x1ba)] = null, this['\x72\x65\x73\x65\x74\x57\x61\x69\x74'](), this[_0x7a2c41(0x1b4)] = ![], _0x7a2c41(0x1f7)['\x70']();
        }, _0x3a93dc[_0x229c72(0x1c3)] = function () {
            var _0x261da2 = _0x229c72, _0xdf5f09;
            NetClientMethodsManager[_0x261da2(0x1da)](null), (_0xdf5f09 = this['\x63\x6c\x69\x65\x6e\x74']) != null && _0xdf5f09['\x64\x69\x73\x63\x6f\x6e\x6e\x65\x63\x74'](), this[_0x261da2(0x1e1)](), this[_0x261da2(0x1aa)] = null, ANGameManager['\x72\x65\x73\x65\x74']();
        }, _0x3a93dc[_0x229c72(0x1ae)] = function () {
            var _0x293b8c = _0x229c72;
            if ('\x66\x54\x67\x48\x43' === _0x293b8c(0x1fa))
                !_0x4b8120 && _0x368875['\x70'](_0x293b8c(0x1ce) + _0x27a9fd['\x66\x75\x6c\x6c\x4e\x61\x6d\x65']()), _0x5d35a9['\x73\x65\x74\x46\x72\x6f\x6d'](this['\x73\x6f\x63\x6b\x65\x74']['\x69\x64'])[_0x293b8c(0x1fb)]();
            else {
                var _0x1bde46, _0x25b1ac, _0x3d88a3, _0x366537, _0x1b4c23;
                _0x25b1ac = ANET['\x50\x50'][_0x293b8c(0x1e4)](), _0x366537 = ANET['\x50\x50'][_0x293b8c(0x1d3)](), ANET['\x50\x50']['\x69\x73\x48\x54\x54\x50\x53\x43\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e']() === !![] ? (console[_0x293b8c(0x1c9)](_0x293b8c(0x1d7)), _0x1b4c23 = _0x293b8c(0x1d8), _0x3d88a3 = {
                    '\x73\x65\x63\x75\x72\x65': !![],
                    '\x72\x65\x63\x6f\x6e\x6e\x65\x63\x74': !![],
                    '\x72\x65\x6a\x65\x63\x74\x55\x6e\x61\x75\x74\x68\x6f\x72\x69\x7a\x65\x64': ![]
                }, _0x366537 === '\x33\x30\x33\x34' && (_0x25b1ac === '\x61\x6e\x65\x74\x7a\x67\x6c\x6f\x62\x61\x6c\x2e\x72\x75' || '\x31\x39\x35\x2e\x31\x36\x31\x2e\x34\x31\x2e\x32\x30') && (_0x293b8c(0x1ac) !== _0x293b8c(0x1e2) ? (console[_0x293b8c(0x1ea)](_0x293b8c(0x207)), console[_0x293b8c(0x1ea)](_0x293b8c(0x20a)), _0x366537 = 0xbdb) : _0x1230d3['\x70'](_0x293b8c(0x1fe)))) : (_0x1b4c23 = '\x68\x74\x74\x70\x3a\x2f\x2f', _0x3d88a3 = {}), _0x1bde46 = _0x1b4c23 + _0x25b1ac + '\x3a' + _0x366537, console[_0x293b8c(0x1c9)](_0x293b8c(0x20c) + _0x1bde46), this['\x73\x6f\x63\x6b\x65\x74'] = io(_0x1bde46, _0x3d88a3), this[_0x293b8c(0x1ba)] = new NetworkClientHandler(this[_0x293b8c(0x1aa)]);
            }
        }, _0x3a93dc[_0x229c72(0x1bf)] = function (_0xfe7fda) {
            var _0x5b9738 = _0x229c72;
            _0x5b9738(0x1eb) === _0x5b9738(0x1eb) ? (NetClientMethodsManager[_0x5b9738(0x1da)](_0xfe7fda), this[_0x5b9738(0x1ae)]()) : this[_0x5b9738(0x1bb)] = _0x83a018;
        }, _0x3a93dc[_0x229c72(0x1fb)] = function (_0x1efbae, _0x2607da = ![]) {
            var _0xaabc0e = _0x229c72;
            !this[_0xaabc0e(0x1cc)]() ? _0x370e3b['\x70']('\x59\x6f\x75\x20\x74\x72\x79\x20\x73\x65\x6e\x64\x20\x6d\x65\x73\x73\x61\x67\x65\x2c\x20\x62\x75\x74\x20\x4e\x4f\x54\x20\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x21') : (!_0x2607da && _0x370e3b['\x70'](_0xaabc0e(0x1ce) + _0x1efbae[_0xaabc0e(0x201)]()), _0x1efbae[_0xaabc0e(0x1c4)](this[_0xaabc0e(0x1aa)]['\x69\x64'])['\x73\x65\x6e\x64']());
        }, _0x3a93dc[_0x229c72(0x1fd)] = function (_0x47dc6d, _0x349a63, _0x12cbb7, _0x1d5af6 = 0x7d0) {
            var _0x57f4f9 = _0x229c72;
            if (_0x57f4f9(0x1db) === _0x57f4f9(0x1db)) {
                var _0x3326b4, _0x3fd13b, _0x39b7f5;
                if (!this[_0x57f4f9(0x1cc)]())
                    _0x370e3b['\x70'](_0x57f4f9(0x1e7));
                else {
                    if (_0x57f4f9(0x1be) !== _0x57f4f9(0x1be))
                        return;
                    else
                        _0x39b7f5 = _0x47dc6d[_0x57f4f9(0x201)](), this[_0x57f4f9(0x1ef)](), HUIManager[_0x57f4f9(0x1c7)](), _0x3fd13b = function (..._0x3cb4cb) {
                            var _0x118300 = _0x57f4f9;
                            return _0x370e3b['\x70'](_0x118300(0x1dd) + _0x39b7f5), _0x12cbb7 != null && (_0x118300(0x1e9) === _0x118300(0x209) ? (_0x3b12c1 = _0x12c471[_0x118300(0x201)](), _0x36beb7 = function (..._0x40f07b) {
                                return _0x2597f5['\x70']('\x43\x61\x6c\x6c\x62\x61\x63\x6b\x20\x66\x6f\x72\x3a\x20' + _0x1b60df), _0x1508e2['\x61\x70\x70\x6c\x79'](this, _0x40f07b);
                            }, _0x21f86a['\x70']('\x53\x65\x6e\x64\x2c\x20\x63\x61\x6c\x6c\x62\x61\x63\x6b\x3a\x20' + _0x4bbb4b), _0x20f697[_0x118300(0x1c4)](this[_0x118300(0x1aa)]['\x69\x64'])[_0x118300(0x1ec)](_0x389a33)) : _0x12cbb7[_0x118300(0x1f4)](this, _0x3cb4cb)), ANNetwork[_0x118300(0x1e1)](), HUIManager[_0x118300(0x1e3)]();
                        }, _0x3326b4 = function (..._0x47b72b) {
                            var _0x465349 = _0x57f4f9;
                            return _0x370e3b['\x70'](_0x465349(0x1c5) + _0x39b7f5), _0x349a63 != null && _0x349a63[_0x465349(0x1f4)](this, _0x47b72b), ANNetwork[_0x465349(0x1e1)](), HUIManager['\x68\x69\x64\x65\x4c\x6f\x61\x64\x65\x72']();
                        }, _0x370e3b['\x70'](_0x57f4f9(0x1ff) + _0x39b7f5), _0x47dc6d[_0x57f4f9(0x1c4)](this[_0x57f4f9(0x1aa)]['\x69\x64'])[_0x57f4f9(0x1fd)](_0x3326b4, _0x3fd13b, _0x1d5af6);
                }
            } else
                return {
                    '\x69\x64': _0xd2b743['\x56\x44'][_0x57f4f9(0x206)](),
                    '\x74\x69\x74\x6c\x65': _0x94331d[_0x57f4f9(0x1bc)],
                    '\x76\x65\x72\x73\x69\x6f\x6e': _0x32ce58[_0x57f4f9(0x1e8)]() ? 0x0 : 0x1,
                    '\x6d\x61\x78\x50\x6c\x61\x79\x65\x72\x73': _0x22240a['\x50\x50'][_0x57f4f9(0x1e5)](),
                    '\x6d\x6f\x64\x65': 0x0
                };
        }, _0x3a93dc[_0x229c72(0x1ec)] = function (_0x24b740, _0x316285) {
            var _0x3b589b = _0x229c72;
            if (_0x3b589b(0x1b0) !== _0x3b589b(0x1ca)) {
                var _0x16edfb, _0x9481c;
                !this[_0x3b589b(0x1cc)]() ? _0x370e3b['\x70'](_0x3b589b(0x1fe)) : _0x3b589b(0x1b1) === _0x3b589b(0x1b1) ? (_0x9481c = _0x24b740[_0x3b589b(0x201)](), _0x16edfb = function (..._0x1762e9) {
                    var _0x4a95f7 = _0x3b589b;
                    return _0x370e3b['\x70']('\x43\x61\x6c\x6c\x62\x61\x63\x6b\x20\x66\x6f\x72\x3a\x20' + _0x9481c), _0x316285[_0x4a95f7(0x1f4)](this, _0x1762e9);
                }, _0x370e3b['\x70'](_0x3b589b(0x1ad) + _0x9481c), _0x24b740['\x73\x65\x74\x46\x72\x6f\x6d'](this[_0x3b589b(0x1aa)]['\x69\x64'])[_0x3b589b(0x1ec)](_0x16edfb)) : _0x4d1c24[_0x3b589b(0x1f4)](this, _0x465b90);
            } else
                return;
        }, _0x3a93dc['\x74\x72\x61\x63\x65'] = function (_0x430038) {
            var _0x3a7e4c = _0x229c72;
            if (_0x3a7e4c(0x1c8) !== '\x64\x70\x62\x74\x47')
                return this[_0x3a7e4c(0x1fb)](NMS[_0x3a7e4c(0x1b8)](_0x430038));
            else {
                if (this[_0x3a7e4c(0x1bb)] == null)
                    return;
                _0x212c75[_0x3a7e4c(0x1d2)](), this[_0x3a7e4c(0x1fb)](_0x2473df[_0x3a7e4c(0x1b2)](_0x3a7e4c(0x1d9), this['\x72\x6f\x6f\x6d'][_0x3a7e4c(0x1d4)]));
            }
        }) : _0x115aa0['\x50\x50'][_0x229c72(0x200)]();
    }()), (function () {
        var _0x3a809f = _0x5e9caa;
        return _0x3a93dc[_0x3a809f(0x1b7)] = function (_0x433939) {
            var _0x4fc3ff = _0x3a809f;
            return this[_0x4fc3ff(0x1bb)] = _0x433939, this[_0x4fc3ff(0x1b4)] = !![], _0x370e3b['\x70'](_0x4fc3ff(0x1dc) + this[_0x4fc3ff(0x1bb)][_0x4fc3ff(0x1d4)]);
        }, _0x3a93dc[_0x3a809f(0x202)] = function (_0xa0b619) {
            var _0x145d16 = _0x3a809f;
            return this[_0x145d16(0x1bb)] = _0xa0b619, this['\x5f\x69\x73\x48\x6f\x73\x74'] = ![], _0x370e3b['\x70'](_0x145d16(0x1df) + this[_0x145d16(0x1bb)][_0x145d16(0x1d4)]);
        }, _0x3a93dc[_0x3a809f(0x1d0)] = function (_0x80e835) {
            var _0x3d94a0 = _0x3a809f;
            this[_0x3d94a0(0x1bb)] = _0x80e835;
        }, _0x3a93dc[_0x3a809f(0x1f9)] = function () {
            var _0x9155db = _0x3a809f;
            if (_0x9155db(0x1f2) === _0x9155db(0x1f2)) {
                if (!this[_0x9155db(0x1cc)]()) {
                    if (_0x9155db(0x1c1) !== '\x51\x6e\x4a\x73\x58')
                        return _0x2cca5a['\x70'](_0x9155db(0x1c5) + _0x4b91de), _0x3c227b != null && _0x30272b[_0x9155db(0x1f4)](this, _0x407ebb), _0x381ee6[_0x9155db(0x1e1)](), _0x4abb32['\x68\x69\x64\x65\x4c\x6f\x61\x64\x65\x72']();
                    else
                        return;
                }
                if (this[_0x9155db(0x1bb)] == null)
                    return;
                this['\x6c\x65\x61\x76\x65\x52\x6f\x6f\x6d'](), this[_0x9155db(0x1b4)] = ![], this['\x72\x6f\x6f\x6d'] = null;
            } else
                return this[_0x9155db(0x1bb)] = _0x3335a5, this[_0x9155db(0x1b4)] = !![], _0x2a7ee4['\x70'](_0x9155db(0x1dc) + this[_0x9155db(0x1bb)]['\x6e\x61\x6d\x65']);
        }, _0x3a93dc['\x63\x6c\x6f\x73\x65\x52\x6f\x6f\x6d'] = function () {
            var _0x130b3c = _0x3a809f;
            if ('\x4f\x78\x64\x47\x48' === _0x130b3c(0x1fc)) {
                if (!this[_0x130b3c(0x1cf)]())
                    return;
                if (this['\x72\x6f\x6f\x6d'] == null)
                    return;
                this['\x73\x65\x6e\x64'](NMS[_0x130b3c(0x1b2)](_0x130b3c(0x1bd)));
            } else
                _0x1a5751['\x70'](_0x130b3c(0x1e7));
        }, _0x3a93dc[_0x3a809f(0x1d9)] = function () {
            var _0x394f51 = _0x3a809f;
            if (this['\x72\x6f\x6f\x6d'] == null)
                return;
            ANGameManager[_0x394f51(0x1d2)](), this[_0x394f51(0x1fb)](NMS[_0x394f51(0x1b2)](_0x394f51(0x1d9), this[_0x394f51(0x1bb)][_0x394f51(0x1d4)]));
        }, _0x3a93dc[_0x3a809f(0x1de)] = function () {
            var _0x5b5f65 = _0x3a809f;
            if (_0x5b5f65(0x1f6) === '\x42\x75\x69\x4c\x45') {
                if (!this[_0x5b5f65(0x1cc)]())
                    return;
                this[_0x5b5f65(0x1fb)](NMS['\x4c\x6f\x62\x62\x79']('\x67\x65\x74\x52\x6f\x6f\x6d\x44\x61\x74\x61'));
            } else
                return this[_0x5b5f65(0x1cc)]() && (this[_0x5b5f65(0x1f8)]() || _0x707fac[_0x5b5f65(0x1f0)]());
        };
    }()), _0x3a93dc['\x67\x65\x74\x4e\x65\x74\x77\x6f\x72\x6b\x47\x61\x6d\x65\x49\x6e\x66\x6f\x44\x61\x74\x61'] = function () {
        var _0x4b70ed = _0x5e9caa;
        if ('\x52\x71\x52\x58\x65' === _0x4b70ed(0x1f3)) {
            var _0x58e917;
            return (_0x58e917 = this[_0x4b70ed(0x1aa)]) != null ? _0x58e917['\x69\x64'] : void 0x0;
        } else
            return {
                '\x69\x64': ANET['\x56\x44'][_0x4b70ed(0x206)](),
                '\x74\x69\x74\x6c\x65': $dataSystem[_0x4b70ed(0x1bc)],
                '\x76\x65\x72\x73\x69\x6f\x6e': KDCore['\x69\x73\x4d\x5a']() ? 0x0 : 0x1,
                '\x6d\x61\x78\x50\x6c\x61\x79\x65\x72\x73': ANET['\x50\x50'][_0x4b70ed(0x1e5)](),
                '\x6d\x6f\x64\x65': 0x0
            };
    };
}()));

// Generated by CoffeeScript 2.6.1
// * Глабольный менеджер с основными методами системы
ANET.System = function() {};

(function() {  //╒═════════════════════════════════════════════════════════════════════════╛
  // ■ IMPLEMENTATION.coffee
  //╒═════════════════════════════════════════════════════════════════════════╛
  //---------------------------------------------------------------------------
  var _;
  //@[DEFINES]
  _ = ANET.System;
  (function() {    // * Начальная загрузка компонентов
    // -----------------------------------------------------------------------
    //TODO: * Лог свой для сообщений версий
    _.initSystem = function() {
      "INIT ANET SYSTEM".p();
      this.loadParameters();
      this.applyParameters();
      ANET.loadPluginCommands();
      ANET.loadExtensions(); // 1_ANExtensions.coffee
      HUIManager.init();
    };
    _.loadParameters = function() {
      return ANET.PP = new ANET.ParamsManager();
    };
    _.applyParameters = function() {};
  })();
  // -----------------------------------------------------------------------

  // * Все эти команды нельзя запускать через опции (виртуально), но
  // * их теоретически можно вызывать через общее событие у другого игрока
  //TODO: Например конфигурация классов (dinamyc методов)
  _.ForbiddenVirtualCommandsList = [
    // * Message
    101,
    102,
    103,
    104,
    105,
    // * Flow Control
    111,
    112,
    113,
    115,
    118,
    119,
    108,
    // * Party
    129,
    // * Movement
    201,
    202,
    204,
    206,
    // * Character
    216,
    217,
    // * Timing
    230,
    // * Scene Control
    302,
    303,
    351,
    352,
    // * System Settings
    137,
    // * Meta
    0,
    401,
    402,
    403,
    411,
    413,
    657
  ];
  // * Список комманд которые запускаются через общее событие, а не виртуально
  _.NonVirtualCommandsList = [
    // * Flow Control
    117,
    // * Scene Control
    301
  ];
  // * Дополнительные полня для синхронизации в битве
  _.BattlerObserverFields = [
    "_tpbChargeTime",
    //"_tpbCastTime"
    //"_tpbIdleTime"
    //"_tpbTurnCount"
    //"_tpbTurnEnd"
    //"_speed"
    //"_actionState"
    //"_damagePopup"
    //"_effectType"
    //"_motionType"
    //"_weaponImageId"
    //"_motionRefresh"
    //"_selected"
    "_tpbState"
  ];
  _.ActorObserverFields = ["_name", "_nickname", "_classId", "_level", "_characterName", "_characterIndex", "_faceName", "_faceIndex", "_battlerName", "_exp", "_equips"];
  return _.EnemyObserverFields = [
    "_enemyId",
    //"_letter"
    //"_plural"
    "_screenX",
    "_screenY"
  ];
})();

// ■ END IMPLEMENTATION.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
// * Данный менедреж отвечает за различие в версиях плагина для MZ и MV
ANET.VD = function() {};

(function() {  //╒═════════════════════════════════════════════════════════════════════════╛
  // ■ IMPLEMENTATION.coffee
  //╒═════════════════════════════════════════════════════════════════════════╛
  //---------------------------------------------------------------------------
  var _;
  //@[DEFINES]
  _ = ANET.VD;
  _.getGameVersion = function() {
    if (KDCore.isMZ()) {
      return $dataSystem.advanced.gameId;
    } else {
      return $dataSystem.versionId;
    }
  };
  return _.getWindowBackgroundType = function() {
    if (KDCore.isMZ()) {
      return 2;
    } else {
      return 0;
    }
  };
})();

// ■ END IMPLEMENTATION.coffee
//---------------------------------------------------------------------------


function _0x4424(_0x24a0ec, _0x4966d6) {
    var _0x335b7c = _0x335b();
    return _0x4424 = function (_0x44245e, _0x280765) {
        _0x44245e = _0x44245e - 0xf3;
        var _0x159d6b = _0x335b7c[_0x44245e];
        return _0x159d6b;
    }, _0x4424(_0x24a0ec, _0x4966d6);
}
function _0x335b() {
    var _0x2e325e = [
        '\x70\x4d\x53\x64\x4f',
        '\x4f\x76\x55\x73\x59',
        '\x5f\x63\x72\x65\x61\x74\x65\x49\x6e\x70\x75\x74\x46\x69\x65\x6c\x64',
        '\x5f\x63\x72\x65\x61\x74\x65\x4c\x6f\x61\x64\x53\x70\x69\x6e\x6e\x65\x72',
        '\x73\x68\x6f\x77\x57\x61\x69\x74\x69\x6e\x67\x49\x6e\x66\x6f',
        '\x37\x39\x35\x38\x34\x44\x59\x55\x67\x65\x4b',
        '\x5f\x6c\x6f\x61\x64\x43\x53\x53',
        '\x61\x6e\x65\x74\x43\x61\x6e\x76\x61\x73\x45\x6c\x65\x6d\x65\x6e\x74\x73',
        '\x69\x6e\x69\x74',
        '\x69\x6e\x73\x65\x72\x74\x41\x64\x6a\x61\x63\x65\x6e\x74\x48\x54\x4d\x4c',
        '\x77\x61\x72\x6e',
        '\x73\x70\x65\x65\x63\x68\x2d\x62\x75\x62\x62\x6c\x65',
        '\x5f\x69\x6e\x70\x75\x74',
        '\x69\x73\x4c\x6f\x61\x64\x65\x72\x41\x63\x74\x69\x76\x65',
        '\x33\x34\x35\x4e\x6d\x62\x7a\x61\x79',
        '\x67\x65\x74\x45\x6c\x65\x6d\x65\x6e\x74\x42\x79\x49\x64',
        '\x69\x73\x55\x6e\x64\x65\x72\x4d\x6f\x75\x73\x65',
        '\x63\x65\x6e\x74\x65\x72',
        '\x61\x70\x70\x65\x6e\x64\x43\x68\x69\x6c\x64',
        '\x73\x75\x63\x63\x65\x73\x73',
        '\x68\x69\x64\x65\x4c\x6f\x61\x64\x65\x72',
        '\x49\x4e\x79\x45\x65',
        '\x54\x43\x51\x6f\x6e',
        '\x5f\x6c\x6f\x61\x64\x65\x72\x54\x68\x72\x65\x61\x64',
        '\x6e\x6f\x74\x69\x66\x79\x45\x72\x72\x6f\x72',
        '\x31\x35\x35\x30\x38\x38\x53\x62\x56\x73\x49\x68',
        '\x3c\x2f\x63\x69\x74\x65\x3e',
        '\x62\x78\x64\x66\x64',
        '\x63\x6c\x65\x61\x72',
        '\x5f\x63\x72\x65\x61\x74\x65\x4e\x6f\x74\x69\x66\x79',
        '\x5a\x72\x66\x52\x43',
        '\x31\x30\x31\x36\x32\x32\x30\x6f\x4a\x45\x58\x52\x68',
        '\x5f\x77\x61\x69\x74\x69\x6e\x67\x49\x6e\x66\x6f\x54\x68\x72\x65\x61\x64',
        '\x66\x6f\x63\x75\x73\x49\x6e\x70\x75\x74',
        '\x58\x55\x6e\x66\x6b',
        '\x6b\x65\x79\x43\x6f\x64\x65',
        '\x3c\x69\x6e\x70\x75\x74\x20\x74\x79\x70\x65\x3d\x22\x69\x6e\x70\x75\x74\x22\x20\x63\x6c\x61\x73\x73\x3d\x22\x66\x6f\x72\x6d\x5f\x5f\x66\x69\x65\x6c\x64\x22\x20\x70\x6c\x61\x63\x65\x68\x6f\x6c\x64\x65\x72\x3d\x22',
        '\x5f\x75\x70\x64\x61\x74\x65\x43\x61\x6e\x76\x61\x73',
        '\x69\x73\x57\x61\x69\x74\x69\x6e\x67\x49\x6e\x66\x6f\x41\x63\x74\x69\x76\x65',
        '\x4f\x76\x68\x7a\x52',
        '\x35\x34\x4c\x55\x42\x6d\x66\x46',
        '\x61\x64\x64\x45\x76\x65\x6e\x74\x4c\x69\x73\x74\x65\x6e\x65\x72',
        '\x5a\x77\x4b\x44\x45',
        '\x5f\x6e\x6f\x74\x69\x66\x79',
        '\x70\x72\x6f\x74\x6f\x74\x79\x70\x65',
        '\x5f\x64\x69\x73\x61\x62\x6c\x65\x43\x6f\x6e\x74\x65\x78\x74\x4d\x65\x6e\x75',
        '\x32\x34\x38\x41\x4b\x73\x52\x57\x4b',
        '\x5f\x73\x68\x6f\x75\x6c\x64\x50\x72\x65\x76\x65\x6e\x74\x44\x65\x66\x61\x75\x6c\x74',
        '\x5f\x6c\x6f\x61\x64\x65\x72',
        '\x72\x65\x6d\x6f\x76\x65\x49\x6e\x70\x75\x74',
        '\x6e\x6f\x74\x69\x66\x79\x53\x75\x63\x65\x73\x73',
        '\x61\x6e\x65\x74\x49\x6e\x70\x75\x74',
        '\x68\x65\x61\x64',
        '\x59\x67\x63\x66\x47',
        '\x68\x65\x69\x67\x68\x74',
        '\x3c\x63\x69\x74\x65\x3e',
        '\x57\x58\x54\x5a\x6f',
        '\x6c\x6f\x67',
        '\x42\x4a\x56\x63\x4a',
        '\x49\x44\x48\x66\x59',
        '\x6b\x72\x62\x46\x77',
        '\x3c\x2f\x70\x3e',
        '\x67\x65\x74\x49\x6e\x70\x75\x74\x56\x61\x6c\x75\x65',
        '\x4c\x6a\x6e\x79\x46',
        '\x5f\x69\x73\x4d\x6f\x75\x73\x65\x48\x6f\x76\x65\x72\x48\x74\x6d\x6c\x45\x6c\x65\x6d\x65\x6e\x74',
        '\x65\x72\x72\x6f\x72',
        '\x62\x78\x4f\x70\x42',
        '\x61\x6e\x65\x74\x49\x6e\x70\x75\x74\x4e\x61\x6d\x65',
        '\x4a\x6c\x7a\x6b\x54',
        '\x62\x6f\x64\x79',
        '\x3c\x2f\x6c\x61\x62\x65\x6c\x3e',
        '\x61\x64\x64',
        '\x31\x31\x6a\x58\x79\x5a\x5a\x46',
        '\x6d\x6f\x75\x73\x65\x65\x6e\x74\x65\x72',
        '\x5f\x63\x72\x65\x61\x74\x65\x57\x61\x69\x74\x50\x6c\x61\x79\x65\x72\x73\x41\x6c\x65\x72\x74',
        '\x5f\x63\x65\x6e\x74\x65\x72\x45\x6c\x65\x6d\x65\x6e\x74',
        '\x64\x69\x76',
        '\x77\x59\x68\x73\x4a',
        '\x31\x30\x35\x62\x79\x77\x49\x6a\x4b',
        '\x48\x55\x49\x4d\x61\x6e\x61\x67\x65\x72',
        '\x36\x36\x33\x32\x42\x6c\x68\x55\x4c\x51',
        '\x76\x61\x6c\x75\x65',
        '\x77\x69\x64\x74\x68',
        '\x6e\x50\x50\x53\x68',
        '\x63\x6c\x61\x73\x73\x4c\x69\x73\x74',
        '\x61\x6e\x65\x74\x57\x61\x69\x74\x50\x6c\x61\x79\x65\x72\x73\x41\x6c\x65\x72\x74',
        '\x66\x6f\x63\x75\x73',
        '\x5f\x6f\x6e\x4b\x65\x79\x44\x6f\x77\x6e',
        '\x3c\x6c\x69\x6e\x6b\x20\x72\x65\x6c\x3d\x22\x73\x74\x79\x6c\x65\x73\x68\x65\x65\x74\x22\x20\x68\x72\x65\x66\x3d\x22\x63\x73\x73\x2f\x61\x6e\x65\x74\x2e\x63\x73\x73\x22\x20\x2f\x3e',
        '\x6f\x6e\x47\x61\x6d\x65\x53\x63\x65\x6e\x65\x43\x68\x61\x6e\x67\x65\x64',
        '\x42\x48\x66\x68\x4b',
        '\x63\x72\x65\x61\x74\x65\x45\x6c\x65\x6d\x65\x6e\x74',
        '\x7a\x49\x6e\x64\x65\x78',
        '\x72\x65\x6d\x6f\x76\x65\x43\x68\x69\x6c\x64',
        '\x69\x73\x49\x6e\x70\x75\x74\x41\x63\x74\x69\x76\x65',
        '\x31\x38\x32\x39\x30\x65\x73\x58\x7a\x54\x44',
        '\x22\x20\x6e\x61\x6d\x65\x3d\x22\x61\x6e\x65\x74\x49\x6e\x70\x75\x74\x4e\x61\x6d\x65\x22\x20\x69\x64\x3d\x27\x61\x6e\x65\x74\x49\x6e\x70\x75\x74\x4e\x61\x6d\x65\x27\x20\x72\x65\x71\x75\x69\x72\x65\x64\x20\x2f\x3e\x20\x3c\x6c\x61\x62\x65\x6c\x20\x66\x6f\x72\x3d\x22\x61\x6e\x65\x74\x49\x6e\x70\x75\x74\x4e\x61\x6d\x65\x22\x20\x63\x6c\x61\x73\x73\x3d\x22\x66\x6f\x72\x6d\x5f\x5f\x6c\x61\x62\x65\x6c\x22\x3e',
        '\x5f\x77\x61\x69\x74\x50\x6c\x61\x79\x65\x72\x73',
        '\x73\x74\x79\x6c\x65',
        '\x68\x69\x64\x65\x57\x61\x69\x74\x69\x6e\x67\x49\x6e\x66\x6f',
        '\x5f\x63\x72\x65\x61\x74\x65\x52\x65\x6c\x61\x74\x69\x76\x65\x50\x61\x72\x65\x6e\x74',
        '\x73\x68\x6f\x77\x49\x6e\x70\x75\x74',
        '\x34\x30\x31\x39\x35\x32\x4f\x4b\x6f\x67\x71\x55',
        '\x63\x61\x6c\x6c',
        '\x62\x62\x6f\x4e\x43',
        '\x61\x6e\x65\x74\x4c\x6f\x61\x64\x65\x72',
        '\x75\x70\x64\x61\x74\x65\x43\x61\x6e\x76\x61\x73\x48\x74\x6d\x6c\x45\x6c\x65\x6d\x65\x6e\x74\x73',
        '\x6d\x6f\x75\x73\x65\x6c\x65\x61\x76\x65',
        '\x33\x32\x39\x32\x38\x39\x36\x50\x4d\x42\x69\x69\x44',
        '\x62\x65\x66\x6f\x72\x65\x65\x6e\x64',
        '\x5f\x63\x61\x6e\x76\x61\x73\x52\x65\x6c\x61\x74\x69\x76\x65\x45\x6c\x65\x6d\x65\x6e\x74\x73',
        '\x3c\x70\x3e'
    ];
    _0x335b = function () {
        return _0x2e325e;
    };
    return _0x335b();
}
(function (_0x3c935c, _0x288609) {
    var _0x24aa28 = _0x4424, _0x30e858 = _0x3c935c();
    while (!![]) {
        try {
            var _0xef4ef2 = parseInt(_0x24aa28(0x135)) / 0x1 + parseInt(_0x24aa28(0x110)) / 0x2 * (-parseInt(_0x24aa28(0x13e)) / 0x3) + -parseInt(_0x24aa28(0x15e)) / 0x4 * (parseInt(_0x24aa28(0x11f)) / 0x5) + parseInt(_0x24aa28(0x12c)) / 0x6 + -parseInt(_0x24aa28(0x10e)) / 0x7 * (parseInt(_0x24aa28(0x149)) / 0x8) + parseInt(_0x24aa28(0x158)) / 0x9 * (parseInt(_0x24aa28(0x14f)) / 0xa) + -parseInt(_0x24aa28(0x108)) / 0xb * (parseInt(_0x24aa28(0x126)) / 0xc);
            if (_0xef4ef2 === _0x288609)
                break;
            else
                _0x30e858['push'](_0x30e858['shift']());
        } catch (_0x491754) {
            _0x30e858['push'](_0x30e858['shift']());
        }
    }
}(_0x335b, 0x4aa2e), window['\x48\x55\x49\x4d\x61\x6e\x61\x67\x65\x72'] = function () {
}, (function () {
    var _0x3182a7 = _0x4424, _0x5c09ab;
    _0x5c09ab = window[_0x3182a7(0x10f)], _0x5c09ab[_0x3182a7(0x138)] = function () {
        var _0x3daf8a = _0x3182a7;
        this[_0x3daf8a(0x100)] = ![], this['\x5f\x6c\x6f\x61\x64\x43\x53\x53'](), this['\x5f\x63\x72\x65\x61\x74\x65\x52\x65\x6c\x61\x74\x69\x76\x65\x50\x61\x72\x65\x6e\x74'](), this[_0x3daf8a(0x133)](), this[_0x3daf8a(0x14d)](), Graphics['\x5f\x64\x69\x73\x61\x62\x6c\x65\x43\x6f\x6e\x74\x65\x78\x74\x4d\x65\x6e\x75']();
    }, _0x5c09ab[_0x3182a7(0x140)] = function () {
        var _0x24d0d2 = _0x3182a7;
        return this[_0x24d0d2(0x100)] === !![];
    }, _0x5c09ab[_0x3182a7(0x119)] = function () {
        var _0x1562c0 = _0x3182a7;
        return this[_0x1562c0(0x123)]();
    }, _0x5c09ab['\x73\x68\x6f\x77\x4c\x6f\x61\x64\x65\x72'] = function (_0x3fdd57 = 0xc8) {
        var _0x3e2065 = _0x3182a7, _0x23fb90;
        try {
            if (this['\x69\x73\x4c\x6f\x61\x64\x65\x72\x41\x63\x74\x69\x76\x65']())
                return;
            this[_0x3e2065(0x147)] = setTimeout(function () {
                var _0x405caf = _0x3e2065;
                if (!document[_0x405caf(0x13f)](_0x405caf(0x129)))
                    return document[_0x405caf(0x105)][_0x405caf(0x142)](HUIManager['\x5f\x6c\x6f\x61\x64\x65\x72']);
            }, _0x3fdd57);
        } catch (_0x3a4d67) {
            _0x23fb90 = _0x3a4d67, console[_0x3e2065(0x13a)](_0x23fb90);
        }
    }, _0x5c09ab[_0x3182a7(0x144)] = function () {
        var _0x9c0cb1 = _0x3182a7, _0x375467;
        try {
            if (_0x9c0cb1(0x131) === _0x9c0cb1(0x131)) {
                if (!this[_0x9c0cb1(0x13d)]())
                    return;
                clearTimeout(this[_0x9c0cb1(0x147)]), this['\x5f\x6c\x6f\x61\x64\x65\x72\x54\x68\x72\x65\x61\x64'] = null, document[_0x9c0cb1(0x13f)](_0x9c0cb1(0x129)) && document[_0x9c0cb1(0x105)][_0x9c0cb1(0x11d)](this[_0x9c0cb1(0x160)]);
            } else
                return this['\x68\x69\x64\x65\x57\x61\x69\x74\x69\x6e\x67\x49\x6e\x66\x6f']();
        } catch (_0x22ba2d) {
            _0x375467 = _0x22ba2d, console[_0x9c0cb1(0xf9)](_0x375467);
        }
    }, _0x5c09ab[_0x3182a7(0x13d)] = function () {
        var _0x23bcb9 = _0x3182a7;
        if (_0x23bcb9(0x102) !== _0x23bcb9(0x15a))
            return this['\x5f\x6c\x6f\x61\x64\x65\x72\x54\x68\x72\x65\x61\x64'] != null;
        else
            return;
    }, _0x5c09ab[_0x3182a7(0x134)] = function (_0x4126f0, _0x14f341, _0x562bff = 0xc8) {
        var _0x591e6b = _0x3182a7, _0x30341b;
        try {
            if (_0x591e6b(0x145) === _0x591e6b(0x11a))
                _0x5984f3[_0x591e6b(0x111)] = _0x5cbe74;
            else {
                if (this[_0x591e6b(0x156)]())
                    return;
                this[_0x591e6b(0x150)] = setTimeout(function () {
                    var _0x438262 = _0x591e6b;
                    return HUIManager[_0x438262(0x10a)](_0x4126f0, _0x14f341);
                }, _0x562bff);
            }
        } catch (_0x4b8dcf) {
            _0x30341b = _0x4b8dcf, console[_0x591e6b(0x13a)](_0x30341b);
        }
    }, _0x5c09ab[_0x3182a7(0x123)] = function () {
        var _0x241f28 = _0x3182a7, _0x16d8fe;
        try {
            if (!this[_0x241f28(0x156)]()) {
                if (_0x241f28(0x128) !== _0x241f28(0x128)) {
                    if (this['\x5f\x63\x61\x6e\x76\x61\x73\x52\x65\x6c\x61\x74\x69\x76\x65\x45\x6c\x65\x6d\x65\x6e\x74\x73'] == null)
                        return;
                    this['\x5f\x63\x61\x6e\x76\x61\x73\x52\x65\x6c\x61\x74\x69\x76\x65\x45\x6c\x65\x6d\x65\x6e\x74\x73'][_0x241f28(0x122)][_0x241f28(0x11c)] = 0x2, this['\x5f\x63\x61\x6e\x76\x61\x73\x52\x65\x6c\x61\x74\x69\x76\x65\x45\x6c\x65\x6d\x65\x6e\x74\x73'][_0x241f28(0x112)] = _0x26db24['\x77\x69\x64\x74\x68'], this[_0x241f28(0x12e)][_0x241f28(0xf6)] = _0x47747c[_0x241f28(0xf6)], _0xf00e31[_0x241f28(0x10b)](this[_0x241f28(0x12e)]);
                } else
                    return;
            }
            clearTimeout(this['\x5f\x77\x61\x69\x74\x69\x6e\x67\x49\x6e\x66\x6f\x54\x68\x72\x65\x61\x64']), this[_0x241f28(0x150)] = null, this['\x5f\x77\x61\x69\x74\x50\x6c\x61\x79\x65\x72\x73'] != null && (document[_0x241f28(0x13f)](_0x241f28(0x137))[_0x241f28(0x11d)](this['\x5f\x77\x61\x69\x74\x50\x6c\x61\x79\x65\x72\x73']), this[_0x241f28(0x121)] = null);
        } catch (_0x40002d) {
            '\x78\x46\x63\x61\x6f' === _0x241f28(0x14e) ? _0x1cd54b['\x62\x6f\x64\x79']['\x72\x65\x6d\x6f\x76\x65\x43\x68\x69\x6c\x64'](this['\x5f\x6c\x6f\x61\x64\x65\x72']) : (_0x16d8fe = _0x40002d, console[_0x241f28(0x13a)](_0x16d8fe));
        }
    }, _0x5c09ab[_0x3182a7(0x156)] = function () {
        var _0x1f313f = _0x3182a7;
        return this[_0x1f313f(0x150)] != null;
    }, _0x5c09ab[_0x3182a7(0x148)] = function (_0x2637e3) {
        var _0x33b3fc = _0x3182a7, _0x4f0ce4;
        try {
            return this[_0x33b3fc(0x15b)][_0x33b3fc(0x101)](_0x2637e3);
        } catch (_0x477f6d) {
            return _0x4f0ce4 = _0x477f6d, console['\x77\x61\x72\x6e'](_0x4f0ce4);
        }
    }, _0x5c09ab[_0x3182a7(0x162)] = function (_0x1e15b4) {
        var _0x32a220 = _0x3182a7, _0x5bc737;
        try {
            return _0x32a220(0xfb) !== _0x32a220(0x113) ? this['\x5f\x6e\x6f\x74\x69\x66\x79'][_0x32a220(0x143)](_0x1e15b4) : this['\x5f\x6c\x6f\x61\x64\x65\x72\x54\x68\x72\x65\x61\x64'] != null;
        } catch (_0x50c52a) {
            return _0x5bc737 = _0x50c52a, console[_0x32a220(0x13a)](_0x5bc737);
        }
    }, _0x5c09ab['\x69\x73\x49\x6e\x70\x75\x74\x41\x63\x74\x69\x76\x65'] = function () {
        var _0x39adf7 = _0x3182a7;
        if (_0x39adf7(0x152) !== _0x39adf7(0x152)) {
            var _0x3188a1;
            if (this['\x5f\x69\x6e\x70\x75\x74'] == null)
                return;
            (_0x3188a1 = _0x369303['\x67\x65\x74\x45\x6c\x65\x6d\x65\x6e\x74\x42\x79\x49\x64'](_0x39adf7(0x103))) != null && (_0x3188a1[_0x39adf7(0x111)] = _0xd01396);
        } else
            return this[_0x39adf7(0x13c)] != null;
    }, _0x5c09ab[_0x3182a7(0x125)] = function (_0x56fb1a) {
        var _0x484a98 = _0x3182a7;
        if (this['\x5f\x69\x6e\x70\x75\x74'] != null) {
            if (_0x484a98(0x130) !== _0x484a98(0x130)) {
                var _0x2d16f3;
                try {
                    return this[_0x484a98(0x15b)][_0x484a98(0x101)](_0x237d4f);
                } catch (_0x41e1be) {
                    return _0x2d16f3 = _0x41e1be, _0x237a81[_0x484a98(0x13a)](_0x2d16f3);
                }
            } else
                this[_0x484a98(0x161)]();
        }
        this[_0x484a98(0x132)](_0x56fb1a);
    }, _0x5c09ab[_0x3182a7(0x161)] = function () {
        var _0x3febeb = _0x3182a7;
        if (this[_0x3febeb(0x13c)] == null) {
            if (_0x3febeb(0x157) !== _0x3febeb(0x157))
                this[_0x3febeb(0x100)] = ![], this[_0x3febeb(0x136)](), this[_0x3febeb(0x124)](), this[_0x3febeb(0x133)](), this[_0x3febeb(0x14d)](), _0x19ef48[_0x3febeb(0x15d)]();
            else
                return;
        }
        HUIManager[_0x3febeb(0x100)] = ![], document[_0x3febeb(0x13f)](_0x3febeb(0x137))[_0x3febeb(0x11d)](this[_0x3febeb(0x13c)]), this[_0x3febeb(0x13c)] = null;
    }, _0x5c09ab[_0x3182a7(0x151)] = function () {
        var _0x50084a = _0x3182a7, _0x3da27f;
        if (this[_0x50084a(0x13c)] == null)
            return;
        (_0x3da27f = document[_0x50084a(0x13f)](_0x50084a(0x103))) != null && _0x3da27f[_0x50084a(0x116)]();
    }, _0x5c09ab[_0x3182a7(0xfe)] = function () {
        var _0x249575 = _0x3182a7;
        if ('\x4a\x6c\x7a\x6b\x54' !== _0x249575(0x104))
            return this[_0x249575(0x150)] != null;
        else {
            var _0x106d02;
            if (this[_0x249575(0x13c)] == null)
                return '';
            return (_0x106d02 = document[_0x249575(0x13f)](_0x249575(0x103))) != null ? _0x106d02['\x76\x61\x6c\x75\x65'] : void 0x0;
        }
    }, _0x5c09ab['\x73\x65\x74\x49\x6e\x70\x75\x74\x56\x61\x6c\x75\x65'] = function (_0x541981) {
        var _0x4bde89 = _0x3182a7, _0x22bb27;
        if (this[_0x4bde89(0x13c)] == null) {
            if (_0x4bde89(0x14b) === '\x62\x78\x64\x66\x64')
                return;
            else {
                var _0x264c28;
                try {
                    return this[_0x4bde89(0x15b)][_0x4bde89(0x143)](_0x449a97);
                } catch (_0x4cfff0) {
                    return _0x264c28 = _0x4cfff0, _0x345087[_0x4bde89(0x13a)](_0x264c28);
                }
            }
        }
        if ((_0x22bb27 = document[_0x4bde89(0x13f)]('\x61\x6e\x65\x74\x49\x6e\x70\x75\x74\x4e\x61\x6d\x65')) != null) {
            if ('\x6c\x46\x79\x72\x43' !== '\x6c\x46\x79\x72\x43')
                return this[_0x4bde89(0x13c)] != null;
            else
                _0x22bb27[_0x4bde89(0x111)] = _0x541981;
        }
    }, _0x5c09ab[_0x3182a7(0x12a)] = function () {
        var _0x3ee5cb = _0x3182a7;
        if (this[_0x3ee5cb(0x12e)] == null) {
            if (_0x3ee5cb(0x146) === _0x3ee5cb(0xfa)) {
                var _0x57999b, _0x253758;
                _0x253758 = _0x2fc0dd, _0x57999b = _0x253758[_0x3ee5cb(0x155)], _0x253758[_0x3ee5cb(0x155)] = function () {
                    var _0x3fd70c = _0x3ee5cb;
                    return _0x57999b[_0x3fd70c(0x127)](this), _0x3a5ea1[_0x3fd70c(0x12a)]();
                };
            } else
                return;
        }
        this[_0x3ee5cb(0x12e)][_0x3ee5cb(0x122)][_0x3ee5cb(0x11c)] = 0x2, this[_0x3ee5cb(0x12e)][_0x3ee5cb(0x112)] = Graphics[_0x3ee5cb(0x112)], this['\x5f\x63\x61\x6e\x76\x61\x73\x52\x65\x6c\x61\x74\x69\x76\x65\x45\x6c\x65\x6d\x65\x6e\x74\x73'][_0x3ee5cb(0xf6)] = Graphics[_0x3ee5cb(0xf6)], Graphics[_0x3ee5cb(0x10b)](this['\x5f\x63\x61\x6e\x76\x61\x73\x52\x65\x6c\x61\x74\x69\x76\x65\x45\x6c\x65\x6d\x65\x6e\x74\x73']);
    }, _0x5c09ab[_0x3182a7(0x136)] = function () {
        var _0x799107 = _0x3182a7;
        document['\x67\x65\x74\x45\x6c\x65\x6d\x65\x6e\x74\x73\x42\x79\x54\x61\x67\x4e\x61\x6d\x65'](_0x799107(0xf4))[0x0][_0x799107(0x139)](_0x799107(0x12d), _0x799107(0x118));
    }, _0x5c09ab[_0x3182a7(0x133)] = function () {
        var _0x48e68e = _0x3182a7;
        if (_0x48e68e(0xfc) === _0x48e68e(0xfc))
            this[_0x48e68e(0x160)] = document[_0x48e68e(0x11b)]('\x64\x69\x76'), this['\x5f\x6c\x6f\x61\x64\x65\x72']['\x69\x64'] = '\x61\x6e\x65\x74\x4c\x6f\x61\x64\x65\x72', this[_0x48e68e(0x147)] = null;
        else
            return _0xc364a5[_0x48e68e(0x127)](this);
    }, _0x5c09ab[_0x3182a7(0x14d)] = function () {
        var _0x251d83 = _0x3182a7;
        this[_0x251d83(0x15b)] = new Notyf({
            '\x64\x75\x72\x61\x74\x69\x6f\x6e': 0x578,
            '\x70\x6f\x73\x69\x74\x69\x6f\x6e': {
                '\x78': _0x251d83(0x141),
                '\x79': '\x62\x6f\x74\x74\x6f\x6d'
            },
            '\x72\x69\x70\x70\x6c\x65': ![]
        });
    }, _0x5c09ab[_0x3182a7(0x10a)] = function (_0x46ae7c, _0x1aafa6) {
        var _0x1d2f23 = _0x3182a7, _0x42c10d;
        this['\x5f\x77\x61\x69\x74\x50\x6c\x61\x79\x65\x72\x73'] = document[_0x1d2f23(0x11b)]('\x62\x6c\x6f\x63\x6b\x71\x75\x6f\x74\x65'), this['\x5f\x77\x61\x69\x74\x50\x6c\x61\x79\x65\x72\x73']['\x69\x64'] = _0x1d2f23(0x115), this['\x5f\x77\x61\x69\x74\x50\x6c\x61\x79\x65\x72\x73'][_0x1d2f23(0x114)][_0x1d2f23(0x107)](_0x1d2f23(0x13b)), _0x42c10d = _0x1d2f23(0x12f) + _0x46ae7c + _0x1d2f23(0xfd) + _0x1d2f23(0xf7) + _0x1aafa6 + _0x1d2f23(0x14a), this[_0x1d2f23(0x121)][_0x1d2f23(0x139)]('\x62\x65\x66\x6f\x72\x65\x65\x6e\x64', _0x42c10d), this[_0x1d2f23(0x12e)][_0x1d2f23(0x142)](this['\x5f\x77\x61\x69\x74\x50\x6c\x61\x79\x65\x72\x73']);
    }, _0x5c09ab[_0x3182a7(0x124)] = function () {
        var _0x5b7ea1 = _0x3182a7;
        if ('\x75\x73\x68\x70\x6e' === '\x67\x66\x59\x77\x4d')
            return;
        else
            this[_0x5b7ea1(0x12e)] = document[_0x5b7ea1(0x11b)](_0x5b7ea1(0x10c)), this[_0x5b7ea1(0x12e)]['\x69\x64'] = _0x5b7ea1(0x137), this[_0x5b7ea1(0x12a)](), document['\x62\x6f\x64\x79'][_0x5b7ea1(0x142)](this[_0x5b7ea1(0x12e)]);
    }, _0x5c09ab[_0x3182a7(0x132)] = function (_0x18ff87) {
        var _0x54ce0d = _0x3182a7, _0x269c08, _0x363dca;
        this['\x5f\x69\x6e\x70\x75\x74'] = document[_0x54ce0d(0x11b)](_0x54ce0d(0x10c)), this[_0x54ce0d(0x13c)]['\x69\x64'] = _0x54ce0d(0xf3), this[_0x54ce0d(0x13c)][_0x54ce0d(0x159)](_0x54ce0d(0x109), function () {
            var _0x1a14ba = _0x54ce0d;
            return _0x1a14ba(0xf8) === _0x1a14ba(0xff) ? this['\x5f\x6e\x6f\x74\x69\x66\x79'][_0x1a14ba(0x143)](_0x1a8bcf) : HUIManager[_0x1a14ba(0x100)] = !![];
        }), this[_0x54ce0d(0x13c)][_0x54ce0d(0x159)](_0x54ce0d(0x12b), function () {
            var _0x491839 = _0x54ce0d;
            if (_0x491839(0xf5) === _0x491839(0x10d))
                _0x487dd1 = _0x2c3a6e, _0x4d2eb7[_0x491839(0xf9)](_0x24c65a);
            else
                return HUIManager[_0x491839(0x100)] = ![];
        }), this['\x5f\x69\x6e\x70\x75\x74']['\x63\x6c\x61\x73\x73\x4c\x69\x73\x74'][_0x54ce0d(0x107)]('\x66\x6f\x72\x6d\x5f\x5f\x67\x72\x6f\x75\x70'), this[_0x54ce0d(0x13c)][_0x54ce0d(0x114)][_0x54ce0d(0x107)]('\x66\x69\x65\x6c\x64'), _0x363dca = ANET['\x50\x50']['\x67\x65\x74\x54\x65\x78\x74\x49\x6e\x70\x75\x74\x4d\x61\x78\x4c\x65\x6e\x67\x74\x68'](), _0x269c08 = _0x54ce0d(0x154) + _0x18ff87 + '\x22\x20\x61\x75\x74\x6f\x63\x6f\x6d\x70\x6c\x65\x74\x65\x3d\x22\x6f\x66\x66\x22\x20\x6d\x61\x78\x6c\x65\x6e\x67\x74\x68\x3d\x22' + _0x363dca + _0x54ce0d(0x120) + _0x18ff87 + _0x54ce0d(0x106), this[_0x54ce0d(0x13c)][_0x54ce0d(0x139)](_0x54ce0d(0x12d), _0x269c08), this['\x5f\x63\x61\x6e\x76\x61\x73\x52\x65\x6c\x61\x74\x69\x76\x65\x45\x6c\x65\x6d\x65\x6e\x74\x73']['\x61\x70\x70\x65\x6e\x64\x43\x68\x69\x6c\x64'](this['\x5f\x69\x6e\x70\x75\x74']);
    };
}()), (function () {
    var _0x694b3b = _0x4424, _0x2f899f;
    _0x2f899f = Scene_Map[_0x694b3b(0x15c)];
}()), (function () {
    var _0x120994 = _0x4424, _0x41ca18, _0x3110f3, _0x4b0027;
    _0x4b0027 = Input, _0x3110f3 = _0x4b0027['\x5f\x73\x68\x6f\x75\x6c\x64\x50\x72\x65\x76\x65\x6e\x74\x44\x65\x66\x61\x75\x6c\x74'], _0x4b0027[_0x120994(0x15f)] = function () {
        var _0x46b634 = _0x120994;
        return HUIManager[_0x46b634(0x11e)]() ? ![] : _0x3110f3[_0x46b634(0x127)](this);
    }, _0x41ca18 = _0x4b0027[_0x120994(0x117)], _0x4b0027['\x5f\x6f\x6e\x4b\x65\x79\x44\x6f\x77\x6e'] = function (_0x293e57) {
        var _0x17d29a = _0x120994;
        if ('\x68\x6a\x66\x43\x4a' === '\x6a\x62\x71\x52\x69') {
            if (this[_0x17d29a(0x13d)]())
                return;
            this[_0x17d29a(0x147)] = _0x467069(function () {
                var _0x30e3c0 = _0x17d29a;
                if (!_0xba7ec[_0x30e3c0(0x13f)](_0x30e3c0(0x129)))
                    return _0x3d9732[_0x30e3c0(0x105)][_0x30e3c0(0x142)](_0x29c7c4[_0x30e3c0(0x160)]);
            }, _0xda80fa);
        } else {
            if (HUIManager[_0x17d29a(0x11e)]()) {
                if (_0x293e57[_0x17d29a(0x153)] === 0x5a || _0x293e57[_0x17d29a(0x153)] === 0x58 || _0x293e57[_0x17d29a(0x153)] === 0x20) {
                    this[_0x17d29a(0x14c)]();
                    return;
                }
            }
            return _0x41ca18[_0x17d29a(0x127)](this, _0x293e57);
        }
    };
}()), (function () {
    var _0xf8c6b0 = _0x4424, _0x14fab9, _0x13a41f;
    _0x13a41f = Graphics, _0x14fab9 = _0x13a41f[_0xf8c6b0(0x155)], _0x13a41f[_0xf8c6b0(0x155)] = function () {
        var _0x498349 = _0xf8c6b0;
        return _0x14fab9['\x63\x61\x6c\x6c'](this), HUIManager[_0x498349(0x12a)]();
    };
}()));

// Generated by CoffeeScript 2.6.1
// * Дополнительные расширения для KDCore

// * Расширение, чтобы без XDev работал плагин
(function() {
  var __STR_P;
  __STR_P = String.prototype.p;
  String.prototype.p = function(anotherText) {
    if (ANET.isDEV()) {
      __STR_P.call(this, anotherText);
    } else {

    }
  };
})();

// * NOTHING


var _0x557c51 = _0x5313;
(function (_0x3a8710, _0xb2d72) {
    var _0x35e03e = _0x5313, _0x29df74 = _0x3a8710();
    while (!![]) {
        try {
            var _0x5557af = parseInt(_0x35e03e(0xcd)) / 0x1 * (-parseInt(_0x35e03e(0xcc)) / 0x2) + parseInt(_0x35e03e(0xee)) / 0x3 + -parseInt(_0x35e03e(0xe2)) / 0x4 + parseInt(_0x35e03e(0xe8)) / 0x5 + -parseInt(_0x35e03e(0xe7)) / 0x6 + -parseInt(_0x35e03e(0xf3)) / 0x7 + parseInt(_0x35e03e(0xd3)) / 0x8 * (parseInt(_0x35e03e(0xf2)) / 0x9);
            if (_0x5557af === _0xb2d72)
                break;
            else
                _0x29df74['push'](_0x29df74['shift']());
        } catch (_0x4de04b) {
            _0x29df74['push'](_0x29df74['shift']());
        }
    }
}(_0x119e, 0x61a9b));
function _0x5313(_0xcefd1f, _0x219e2b) {
    var _0x119e6f = _0x119e();
    return _0x5313 = function (_0x531388, _0x1881f0) {
        _0x531388 = _0x531388 - 0xcc;
        var _0x19f7f6 = _0x119e6f[_0x531388];
        return _0x19f7f6;
    }, _0x5313(_0xcefd1f, _0x219e2b);
}
var NetMessage;
function _0x119e() {
    var _0x37ad58 = [
        '\x31\x35\x32\x32\x38\x33\x39\x41\x66\x6d\x4c\x71\x50',
        '\x45\x6d\x70\x74\x79\x4d\x65\x73\x73\x61\x67\x65',
        '\x64\x61\x74\x61',
        '\x69\x6e\x70\x53\x53',
        '\x39\x34\x35\x39\x30\x6b\x6c\x45\x65\x4c\x4f',
        '\x32\x34\x35\x34\x31\x33\x4b\x75\x69\x71\x4b\x6c',
        '\x53\x50\x68\x53\x5a',
        '\x36\x4f\x74\x47\x61\x69\x71',
        '\x31\x37\x35\x32\x38\x37\x75\x74\x6e\x49\x62\x6d',
        '\x66\x75\x6c\x6c\x4e\x61\x6d\x65',
        '\x53\x65\x74\x4f\x77\x6e\x53\x6f\x63\x6b\x65\x74',
        '\x4e\x4d\x53',
        '\x57\x69\x74\x68\x54\x69\x6d\x65\x6f\x75\x74',
        '\x4e\x55\x78\x4e\x70',
        '\x36\x38\x38\x44\x69\x63\x58\x56\x67',
        '\x54\x72\x61\x63\x65',
        '\x66\x72\x6f\x6d',
        '\x75\x74\x6e\x72\x52',
        '\x73\x6d\x7a\x4d\x56',
        '\x74\x72\x61\x63\x65',
        '\x4b\x4f\x51\x69\x57',
        '\x73\x65\x74\x44\x61\x74\x61',
        '\x73\x65\x74\x46\x72\x6f\x6d',
        '\x61\x70\x70\x6c\x79',
        '\x66\x68\x41\x68\x7a',
        '\x77\x61\x69\x74\x65\x64',
        '\x41\x76\x52\x69\x75',
        '\x56\x70\x64\x4f\x79',
        '\x53\x6f\x63\x6b\x65\x74',
        '\x32\x30\x33\x35\x31\x34\x30\x61\x7a\x68\x62\x72\x4b',
        '\x73\x65\x74\x4e\x61\x6d\x65',
        '\x63\x61\x6c\x6c\x62\x61\x63\x6b',
        '\x65\x6d\x69\x74',
        '\x68\x74\x68\x57\x49',
        '\x34\x30\x35\x36\x37\x36\x38\x48\x42\x65\x77\x59\x63',
        '\x33\x36\x37\x31\x39\x33\x35\x6f\x5a\x58\x6b\x58\x51',
        '\x6e\x61\x6d\x65',
        '\x73\x6f\x63\x6b\x65\x74',
        '\x73\x65\x6e\x64',
        '\x5f\x6d\x61\x6b\x65\x44\x61\x74\x61',
        '\x62\x72\x6f\x61\x64\x63\x61\x73\x74'
    ];
    _0x119e = function () {
        return _0x37ad58;
    };
    return _0x119e();
}
NetMessage = function () {
    var _0x500fdf = _0x5313;
    class _0x16a3f8 {
        constructor(_0x3b9229) {
            var _0x138867 = _0x5313;
            if ('\x52\x76\x48\x70\x70' !== _0x138867(0xd9))
                this[_0x138867(0xea)] = _0x3b9229, this['\x6e\x61\x6d\x65'] = '\x74\x72\x61\x63\x65', this[_0x138867(0xd5)] = '', this['\x74\x6f'] = '', this['\x64\x61\x74\x61'] = '', this[_0x138867(0xde)] = ![];
            else
                return;
        }
        [_0x500fdf(0xe3)](_0x2ca07a) {
            var _0x237f97 = _0x500fdf;
            return this[_0x237f97(0xe9)] = _0x2ca07a, this;
        }
        ['\x73\x65\x74\x54\x6f'](_0x1fe2e7) {
            var _0x4e2f3c = _0x500fdf;
            return '\x68\x74\x68\x57\x49' === _0x4e2f3c(0xe6) ? (this['\x74\x6f'] = _0x1fe2e7, this) : (this[_0x4e2f3c(0xf0)] = _0x4ccf3d, this);
        }
        [_0x500fdf(0xdb)](_0x2fad8b) {
            var _0x39884c = _0x500fdf;
            return this[_0x39884c(0xd5)] = _0x2fad8b, this;
        }
        [_0x500fdf(0xda)](_0xdcc3ef) {
            var _0x2c1d93 = _0x500fdf;
            if (_0x2c1d93(0xd2) !== '\x5a\x7a\x6f\x57\x6f')
                return this['\x64\x61\x74\x61'] = _0xdcc3ef, this;
            else {
                var _0x57316f;
                return _0x57316f = _0x1e9100[_0x2c1d93(0xd1)], this[_0x2c1d93(0xea)][_0x2c1d93(0xe5)](this[_0x2c1d93(0xe9)], this[_0x2c1d93(0xec)](_0x1a8576), _0x57316f(_0x31bfa0, _0x79479b, _0x3ea0c5)), this;
            }
        }
        [_0x500fdf(0xce)]() {
            var _0x376f20 = _0x500fdf;
            return this[_0x376f20(0xf0)] != null && this[_0x376f20(0xf0)]['\x69\x64'] ? this[_0x376f20(0xe9)] + '\x5f' + this[_0x376f20(0xf0)]['\x69\x64'] : this['\x6e\x61\x6d\x65'];
        }
        [_0x500fdf(0xeb)](_0x4a48ef) {
            var _0x3c9859 = _0x500fdf;
            return this[_0x3c9859(0xea)][_0x3c9859(0xe5)](this[_0x3c9859(0xe9)], this[_0x3c9859(0xec)](_0x4a48ef)), this;
        }
        [_0x500fdf(0xe4)](_0x359325, _0x54bda0) {
            var _0x19bce0 = _0x500fdf;
            return this[_0x19bce0(0xea)][_0x19bce0(0xe5)](this[_0x19bce0(0xe9)], this[_0x19bce0(0xec)](_0x54bda0), _0x359325), this;
        }
        ['\x67\x65\x74'](_0x281fe2, _0x251325, _0x2c5486, _0x11ac47) {
            var _0x40438f = _0x500fdf, _0x43395b;
            return _0x43395b = _0x16a3f8[_0x40438f(0xd1)], this[_0x40438f(0xea)]['\x65\x6d\x69\x74'](this['\x6e\x61\x6d\x65'], this[_0x40438f(0xec)](_0x11ac47), _0x43395b(_0x281fe2, _0x251325, _0x2c5486)), this;
        }
        [_0x500fdf(0xed)](_0x4bcee8) {
            var _0x569a82 = _0x500fdf;
            return this['\x73\x6f\x63\x6b\x65\x74'][_0x569a82(0xed)][_0x569a82(0xe5)](this['\x6e\x61\x6d\x65'], this[_0x569a82(0xec)](_0x4bcee8));
        }
        ['\x5f\x6d\x61\x6b\x65\x44\x61\x74\x61'](_0x40b1d9 = null) {
            var _0x1878e6 = _0x500fdf;
            if (_0x1878e6(0xd6) !== _0x1878e6(0xdf)) {
                var _0x9f7d99;
                _0x9f7d99 = {};
                if (_0x40b1d9 == null)
                    _0x40b1d9 = this[_0x1878e6(0xf0)];
                else {
                    if (_0x1878e6(0xf4) !== _0x1878e6(0xdd))
                        this['\x64\x61\x74\x61'] = _0x40b1d9;
                    else {
                        if (_0x3ba188)
                            return;
                        return _0x457c39 = !![], _0x4ff504(_0x247aeb), _0x135ead[_0x1878e6(0xdc)](this, _0x1e10dd);
                    }
                }
                return _0x9f7d99[_0x1878e6(0xf0)] = _0x40b1d9, _0x9f7d99['\x66\x72\x6f\x6d'] = this[_0x1878e6(0xd5)], _0x9f7d99['\x74\x6f'] = this['\x74\x6f'], _0x9f7d99['\x77\x61\x69\x74\x65\x64'] = this[_0x1878e6(0xde)], _0x9f7d99;
            } else
                return this['\x74\x6f'] = _0x1b595a, this;
        }
        static [_0x500fdf(0xcf)](_0x3f410e) {
            return _0x16a3f8['\x53\x6f\x63\x6b\x65\x74'] = _0x3f410e;
        }
        static [_0x500fdf(0xd4)](_0x1f79fc, _0x43af53) {
            var _0x31f7fd = _0x500fdf;
            return this[_0x31f7fd(0xef)](_0x43af53)[_0x31f7fd(0xe3)](_0x31f7fd(0xd8))[_0x31f7fd(0xda)](_0x1f79fc);
        }
        static [_0x500fdf(0xef)](_0x2feabb = null) {
            var _0x4fc892 = _0x500fdf, _0xa1a014, _0x53e40f;
            return _0x53e40f = _0x2feabb, _0x2feabb == null && (_0x53e40f = this[_0x4fc892(0xe1)]), _0xa1a014 = new _0x16a3f8(_0x53e40f), _0x53e40f != null && _0xa1a014[_0x4fc892(0xdb)](_0x53e40f['\x69\x64']), _0xa1a014;
        }
        static ['\x45\x6d\x70\x74\x79\x4d\x65\x73\x73\x61\x67\x65\x57\x69\x74\x68\x46\x6c\x61\x67'](_0x472ef8, _0x206fcf, _0x3a9680 = null) {
            var _0x11fdd2 = _0x500fdf, _0x192003;
            return _0x192003 = this[_0x11fdd2(0xef)](_0x3a9680), _0x192003['\x73\x65\x74\x44\x61\x74\x61']({
                '\x69\x64': _0x472ef8,
                '\x63\x6f\x6e\x74\x65\x6e\x74': _0x206fcf
            }), _0x192003;
        }
        static [_0x500fdf(0xd1)](_0x166868, _0x1d6ef4, _0x39993c) {
            var _0x27f6da, _0x33788d;
            return _0x27f6da = ![], _0x33788d = setTimeout(function () {
                var _0x287f6a = _0x5313;
                if (_0x287f6a(0xd7) !== _0x287f6a(0xe0)) {
                    if (_0x27f6da) {
                        if ('\x69\x6e\x70\x53\x53' !== _0x287f6a(0xf1))
                            this[_0x287f6a(0xf0)] = _0x586672;
                        else
                            return;
                    }
                    return _0x27f6da = !![], _0x1d6ef4();
                } else
                    return this[_0x287f6a(0xd5)] = _0x407c8d, this;
            }, _0x39993c), function (..._0x3a16ee) {
                var _0xf7a4d3 = _0x5313;
                if (_0x27f6da)
                    return;
                return _0x27f6da = !![], clearTimeout(_0x33788d), _0x166868[_0xf7a4d3(0xdc)](this, _0x3a16ee);
            };
        }
    }
    ;
    return _0x16a3f8[_0x500fdf(0xe1)] = null, _0x16a3f8;
}['\x63\x61\x6c\x6c'](this), window[_0x557c51(0xd0)] = NetMessage, window['\x4e\x65\x74\x4d\x65\x73\x73\x61\x67\x65'] = NetMessage;

// Generated by CoffeeScript 2.6.1
//@[GLOBAL]

// * Статический класс для работы со структурой сетевых данных игрока
var NetPlayerDataWrapper;

NetPlayerDataWrapper = function() {};

(function() {  //╒═════════════════════════════════════════════════════════════════════════╛
  // ■ NetPlayerDataWrapper.coffee
  //╒═════════════════════════════════════════════════════════════════════════╛
  //---------------------------------------------------------------------------
  var _;
  //@[DEFINES]
  _ = NetPlayerDataWrapper;
  // * Все поля структуры
  _.createLocal = function() {
    var plName;
    // * Загружаем с настроек, если нету, то случайное
    if (String.any(ConfigManager.netPlayerName)) {
      plName = ConfigManager.netPlayerName;
    } else {
      if ($gameTemp._tempPlayerNetworkName == null) {
        $gameTemp._tempPlayerNetworkName = "Player " + Math.randomInt(1000);
      }
      plName = $gameTemp._tempPlayerNetworkName;
    }
    return {
      id: ANNetwork.myId(),
      name: plName,
      mapId: 0,
      actorId: 0,
      index: 0,
      scene: "",
      characterReady: false,
      isMapMaster: false,
      onEvent: 0,
      onCommonEvent: 0
    };
  };
  _.isHaveCharacterInGame = function(p) {
    return p.characterReady === true && p.actorId > 0;
  };
  _.isOnMapScene = function(p) {
    return this.isCharOnMap(p) && p.scene === "map";
  };
  _.isOnBattleScene = function(p) {
    return this.getRequestedNetworkState(p) === 5;
  };
  _.isFreeOnMap = function(p) {
    return !this.isOnAnyEvent(p) && this.isOnMapScene(p);
  };
  _.isCharOnMap = function(p) {
    return (p != null) && p.mapId === $gameMap.mapId() && p.characterReady === true;
  };
  _.isCurrentPlayerActor = function(actor, p) {
    return (p != null) && actor.actorId() === p.actorId;
  };
  _.isOnEvent = function(p, eventId) {
    return (p != null) && p.onEvent === eventId;
  };
  _.getRequestedNetworkState = function(p) {
    if (p.scene === "menu") {
      return 2;
    }
    if (p.scene === "trade") {
      return 3;
    }
    if (p.scene === "battle") {
      return 5;
    }
    if (p.scene === "chat") {
      return 6;
    }
    if (_.isOnAnyEvent(p)) {
      return 1;
    }
    return -1;
  };
  _.getNetCharacterForPlayer = function(p) {
    if (p == null) {
      return null;
    }
    return $gameMap.networkCharacterById(p.id);
  };
  _.getActorForPlayer = function(p) {
    if (p == null) {
      return null;
    }
    return $gameActors.actor(p.actorId);
  };
  _.isOnAnyEvent = function(p) {
    if (p == null) {
      return false;
    }
    return (p.onEvent > 0 || p.onCommonEvent > 0) && _.isCharOnMap(p);
  };
})();

// ■ END NetPlayerDataWrapper.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//@[GLOBAL]

// * Статический класс для работы со структурой сетевых данных комнаты
var NetRoomDataWrapper;

NetRoomDataWrapper = function() {};

(function() {  //╒═════════════════════════════════════════════════════════════════════════╛
  // ■ NetRoomDataWrapper.coffee
  //╒═════════════════════════════════════════════════════════════════════════╛
  //---------------------------------------------------------------------------
  var _;
  //@[DEFINES]
  _ = NetRoomDataWrapper;
  // * Все поля структуры
  _.createLocal = function() {
    return {
      name: "Room " + Math.randomInt(100),
      masterId: "",
      masterName: "",
      inGame: false,
      playersIds: [],
      readyPlayersIds: [],
      gameId: 0,
      gameTitle: "",
      rpgVersion: 0,
      maxPlayers: 0,
      gameMode: 0,
      canConnect: true,
      uniqueSaveID: null
    };
  };
  _.isRoomFull = function(r) {
    if (r == null) {
      return true;
    }
    return r.playersIds.length >= r.maxPlayers;
  };
  _.isRoomProperToJoin = function(r) {
    var e;
    if (r == null) {
      return false;
    }
    try {
      if (r.gameId !== ANET.VD.getGameVersion()) {
        // --- Общие проверки ---

        // * Нельзя подключиться если разные игры
        return false;
      }
      if (_.isRoomFull(r)) {
        // * Нельзя подключаться, если комната полная
        return false;
      }
      if (!_.isMyRPGVersion(r)) {
        // * Если разные движки
        return false;
      }
      // --- Проверки режима ---

      // * Если ЗАПРЕЩЕНО подключаться к запущенной игре
      if (ANET.PP.isJoinStartedRoomAllowed() === false) {
        if (_.isStartedGameRoom(r)) {
          // * Нельзя подключаться к уже запущенной игре
          return false;
        }
        // * Если комната загрузки сетевого сохранения
        if (_.isLoadGameRoom(r)) {
          if (!DataManager.nIsHaveNetworkSaveWithId(r.uniqueSaveID)) {
            // * То клиент должен иметь файл данного сохранения
            return false;
          }
        }
      } else {
        // * Если комната загрузки сетевого сохранения
        if (_.isLoadGameRoom(r)) {
          if (!ANET.PP.isJoinStartedAndLoadedRoom()) {
            // * Нельзя подключиться к загруженной игре (уже запущенной) если ОТКЛЮЧЁН соответсвующий параметр
            return false;
          }
        }
      }
    } catch (error) {
      
      // * Если специальный флаг
      //TODO: Пока не обрабатывается
      //if r.canConnect is false
      //    return false
      e = error;
      ANET.w(e);
    }
    return true;
  };
  _.isMyRPGVersion = function(r) {
    if (r == null) {
      return false;
    }
    if (r.rpgVersion === 0) {
      return KDCore.isMZ();
    } else {
      return KDCore.isMV();
    }
  };
  _.isLoadGameRoom = function(r) {
    return r.uniqueSaveID != null;
  };
  _.isStartedGameRoom = function(r) {
    return r.inGame === true;
  };
})();

// ■ END NetRoomDataWrapper.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
var NetworkClientHandler;

NetworkClientHandler = class NetworkClientHandler {
  constructor(socket) {
    this.socket = socket;
    this._init();
  }

  disconnect() {
    var ref;
    return (ref = this.socket) != null ? ref.disconnect() : void 0;
  }

};

(function() {  //╒═════════════════════════════════════════════════════════════════════════╛
  // ■ NetworkClientHandler.coffee
  //╒═════════════════════════════════════════════════════════════════════════╛
  //---------------------------------------------------------------------------
  var _, _C;
  //@[DEFINES]
  _C = null; //? ClientManager
  _ = NetworkClientHandler.prototype;
  _._init = function() {
    _C = NetClientMethodsManager;
    // * Задаём ссылку на собственный сокет в класс сообщений
    // Чтобы можно было отправлять сообщения каждый раз не передавая сокет
    NetMessage.SetOwnSocket(this.socket);
    return this._handleCommands();
  };
  _._handleCommands = function() {
    this._handleBaseSocketEvents();
    this._handleDebugEvents();
    return this._handleANETServerEvents();
  };
  _._handleBaseSocketEvents = function() {
    this.socket.on('disconnect', function() {
      return _C.onDisconnect();
    });
    this.socket.on('connect', function() {
      return _C.onConnect();
    });
    return this.socket.on('connect_error', function() {
      return _C.onConnectionError();
    });
  };
  _._handleDebugEvents = function() {
    return this.socket.on('trace', function(n) {
      return console.log("Trace: " + n);
    });
  };
  _._handleANETServerEvents = function() {
    return this.socket.on('serverPrc', (n) => {
      return this._handleServerPrcEvent(n);
    });
  };
  _._handleServerPrcEvent = function(n) {
    var content, eventHandlerMethodName, flag, id;
    ({id, flag, content} = n);
    eventHandlerMethodName = id + "_" + flag;
    if (_C.isExistPrcEvent(eventHandlerMethodName)) {
      return _C.handlePrcEvent(eventHandlerMethodName, content);
    } else {
      return console.log("Unknown Event from server " + eventHandlerMethodName);
    }
  };
})();

// ■ END NetworkClientHandler.coffee
//---------------------------------------------------------------------------


function _0x7356(_0x57bafb, _0x3446d8) {
    var _0x2c8ee8 = _0x2c8e();
    return _0x7356 = function (_0x735665, _0x4b477c) {
        _0x735665 = _0x735665 - 0x1b1;
        var _0x67ff84 = _0x2c8ee8[_0x735665];
        return _0x67ff84;
    }, _0x7356(_0x57bafb, _0x3446d8);
}
function _0x2c8e() {
    var _0x3096d1 = [
        '\x31\x32\x39\x31\x35\x32\x35\x51\x48\x59\x64\x63\x76',
        '\x42\x4c\x41\x43\x4b',
        '\x63\x75\x72\x72\x65\x6e\x74\x52\x65\x73\x70\x6f\x6e\x63\x65',
        '\x5f\x63\x6f\x6e\x74\x69\x6e\x75\x65\x47\x61\x6d\x65\x50\x72\x6f\x63\x65\x73\x73',
        '\x43\x6c\x69\x65\x6e\x74\x52\x65\x73\x70',
        '\x36\x31\x37\x37\x35\x39\x6a\x44\x57\x52\x6e\x55',
        '\x4a\x67\x4b\x5a\x6b',
        '\x72\x65\x73\x65\x74\x57\x61\x69\x74',
        '\x6c\x6f\x67',
        '\x45\x66\x56\x62\x73',
        '\x44\x65\x76\x4c\x6f\x67',
        '\x4e\x4d\x63\x44\x69',
        '\x68\x69\x64\x65\x49\x6e\x66\x6f\x4d\x65\x73\x73\x61\x67\x65',
        '\x43\x6f\x6c\x6f\x72',
        '\x33\x35\x32\x32\x39\x62\x68\x5a\x69\x57\x4f',
        '\x73\x65\x74\x57\x61\x69\x74',
        '\x73\x65\x6e\x64',
        '\x31\x38\x37\x34\x34\x32\x34\x56\x70\x47\x52\x66\x72',
        '\x37\x36\x58\x78\x6d\x61\x6c\x4a',
        '\x74\x4d\x77\x58\x4b',
        '\x7a\x63\x7a\x71\x4a',
        '\x31\x32\x31\x34\x35\x30\x49\x55\x4e\x6a\x58\x44',
        '\x61\x6e\x79',
        '\x74\x69\x6d\x65\x6f\x75\x74',
        '\x48\x6b\x6d\x76\x67',
        '\x34\x35\x6a\x4e\x57\x66\x46\x6d',
        '\x53\x47\x58\x48\x79',
        '\x41\x4e\x43\x6c\x69\x65\x6e\x74\x52\x65\x73\x70\x6f\x6e\x63\x65\x4d\x61\x6e\x61\x67\x65\x72',
        '\x67\x65\x74\x4c\x69\x67\x68\x74\x65\x73\x74\x43\x6f\x6c\x6f\x72',
        '\x73\x68\x6f\x77\x49\x6e\x66\x6f\x4d\x65\x73\x73\x61\x67\x65',
        '\x32\x37\x31\x34\x33\x35\x32\x52\x53\x50\x65\x79\x75',
        '\x6f\x6e\x52\x65\x73\x70\x6f\x6e\x63\x65\x52\x65\x63\x65\x69\x76\x65\x64',
        '\x43\x58\x61\x66\x69',
        '\x34\x30\x32\x37\x38\x39\x30\x6f\x56\x6b\x6c\x61\x79',
        '\x36\x34\x46\x62\x69\x74\x6d\x4f',
        '\x73\x65\x74\x43\x6f\x6c\x6f\x72\x73',
        '\x42\x76\x64\x46\x6e'
    ];
    _0x2c8e = function () {
        return _0x3096d1;
    };
    return _0x2c8e();
}
var _0x33902c = _0x7356;
(function (_0x406a26, _0x360556) {
    var _0x2948f3 = _0x7356, _0x4e33db = _0x406a26();
    while (!![]) {
        try {
            var _0x48a7e7 = -parseInt(_0x2948f3(0x1c8)) / 0x1 + parseInt(_0x2948f3(0x1d5)) / 0x2 * (-parseInt(_0x2948f3(0x1d1)) / 0x3) + -parseInt(_0x2948f3(0x1bc)) / 0x4 + parseInt(_0x2948f3(0x1c3)) / 0x5 + -parseInt(_0x2948f3(0x1d4)) / 0x6 + parseInt(_0x2948f3(0x1b3)) / 0x7 * (parseInt(_0x2948f3(0x1c0)) / 0x8) + -parseInt(_0x2948f3(0x1b7)) / 0x9 * (-parseInt(_0x2948f3(0x1bf)) / 0xa);
            if (_0x48a7e7 === _0x360556)
                break;
            else
                _0x4e33db['push'](_0x4e33db['shift']());
        } catch (_0x47a7f3) {
            _0x4e33db['push'](_0x4e33db['shift']());
        }
    }
}(_0x2c8e, 0x56ee1), window[_0x33902c(0x1b9)] = function () {
}, (function () {
    var _0x4af782 = _0x33902c, _0x4a6c17, _0x391133;
    _0x4a6c17 = new KDCore[(_0x4af782(0x1cd))](_0x4af782(0x1c7)), _0x4a6c17[_0x4af782(0x1c1)](KDCore['\x43\x6f\x6c\x6f\x72']['\x42\x4c\x55\x45']['\x67\x65\x74\x4c\x69\x67\x68\x74\x65\x73\x74\x43\x6f\x6c\x6f\x72'](0x41), KDCore[_0x4af782(0x1d0)][_0x4af782(0x1c4)][_0x4af782(0x1ba)](0x41)), _0x4a6c17['\x6f\x6e'](), _0x391133 = window[_0x4af782(0x1b9)], _0x391133['\x73\x65\x6e\x64\x52\x65\x73\x70\x6f\x6e\x63\x65'] = function (_0x5aab0f, _0x52a628, _0x5b4bb0, _0xec801a, _0x34c466) {
        var _0x56a276 = _0x4af782;
        if (_0x56a276(0x1b6) === _0x56a276(0x1ce))
            _0x3add53(function () {
                var _0x22b360 = _0x56a276;
                if (_0x2bfc50[_0x22b360(0x1c5)] != null)
                    return _0xcd1e4a[_0x22b360(0x1bb)](_0x17e80f);
            }, 0x190);
        else {
            var _0x1540ae;
            try {
                if (!ANNetwork['\x69\x73\x43\x6f\x6e\x6e\x65\x63\x74\x65\x64']())
                    return;
                ANNetwork[_0x56a276(0x1d2)]();
                if (String[_0x56a276(0x1b4)](_0x34c466)) {
                    if (_0x56a276(0x1b8) === '\x67\x4d\x49\x4b\x4b') {
                        if (_0x5d7b3d[_0x56a276(0x1c5)] != null)
                            return _0x322c91['\x73\x68\x6f\x77\x49\x6e\x66\x6f\x4d\x65\x73\x73\x61\x67\x65'](_0x554e77);
                    } else
                        setTimeout(function () {
                            var _0x3f4bf = _0x56a276;
                            if (ANClientResponceManager[_0x3f4bf(0x1c5)] != null) {
                                if (_0x3f4bf(0x1c9) === '\x50\x51\x6b\x61\x67')
                                    return;
                                else
                                    return nAPI[_0x3f4bf(0x1bb)](_0x34c466);
                            }
                        }, 0x190);
                }
                return ANClientResponceManager[_0x56a276(0x1c5)] = {
                    '\x69\x64': _0x5aab0f['\x66\x75\x6c\x6c\x4e\x61\x6d\x65'](),
                    '\x74\x69\x6d\x65\x6f\x75\x74': setTimeout(function () {
                        var _0xc8e5d7 = _0x56a276;
                        return ANClientResponceManager[_0xc8e5d7(0x1c6)](), _0x5b4bb0();
                    }, _0xec801a),
                    '\x63\x61\x6c\x6c\x62\x61\x63\x6b': _0x52a628
                }, console[_0x56a276(0x1cb)](ANClientResponceManager['\x63\x75\x72\x72\x65\x6e\x74\x52\x65\x73\x70\x6f\x6e\x63\x65']['\x69\x64']), ANNetwork[_0x56a276(0x1d3)](_0x5aab0f);
            } catch (_0x1ec704) {
                return _0x1540ae = _0x1ec704, ANET['\x77'](_0x1540ae);
            }
        }
    }, _0x391133[_0x4af782(0x1bd)] = function (_0x3e7f74, _0x437837) {
        var _0xbe17b7 = _0x4af782, _0x79a401;
        if (ANClientResponceManager[_0xbe17b7(0x1c5)] == null) {
            if ('\x42\x76\x64\x46\x6e' !== _0xbe17b7(0x1c2))
                return;
            else
                return;
        }
        _0x79a401 = ANClientResponceManager[_0xbe17b7(0x1c5)];
        if (_0x79a401['\x69\x64'] === _0x3e7f74) {
            if (_0xbe17b7(0x1b1) !== _0xbe17b7(0x1cc))
                this[_0xbe17b7(0x1c6)](), _0x79a401['\x63\x61\x6c\x6c\x62\x61\x63\x6b'](_0x437837);
            else
                return;
        }
    }, _0x391133[_0x4af782(0x1c6)] = function () {
        var _0x1a3f89 = _0x4af782;
        if (ANClientResponceManager[_0x1a3f89(0x1c5)] == null) {
            if (_0x1a3f89(0x1be) !== _0x1a3f89(0x1b2))
                return;
            else
                return _0x3e1437 = _0x258c4e, _0xb2cbaf['\x77'](_0x161d35);
        }
        ANNetwork[_0x1a3f89(0x1ca)](), nAPI[_0x1a3f89(0x1cf)](), clearTimeout(ANClientResponceManager['\x63\x75\x72\x72\x65\x6e\x74\x52\x65\x73\x70\x6f\x6e\x63\x65'][_0x1a3f89(0x1b5)]), ANClientResponceManager[_0x1a3f89(0x1c5)] = null;
    };
}()));

var _0x1cf265 = _0x1ed8;
function _0x1ed8(_0x4707ba, _0x3c247e) {
    var _0x11ec30 = _0x11ec();
    return _0x1ed8 = function (_0x1ed828, _0x23efce) {
        _0x1ed828 = _0x1ed828 - 0xf5;
        var _0x375cfd = _0x11ec30[_0x1ed828];
        return _0x375cfd;
    }, _0x1ed8(_0x4707ba, _0x3c247e);
}
function _0x11ec() {
    var _0x165958 = [
        '\x33\x35\x53\x75\x4b\x57\x51\x6a',
        '\x73\x65\x6e\x64\x52\x65\x73\x70\x6f\x6e\x63\x65',
        '\x41\x51\x55\x41',
        '\x5a\x48\x69\x69\x6b',
        '\x44\x65\x76\x4c\x6f\x67',
        '\x61\x64\x64\x4d\x65\x73\x73\x61\x67\x65\x54\x6f\x43\x68\x61\x74',
        '\x6a\x54\x64\x4a\x51',
        '\x6b\x62\x4d\x70\x4e',
        '\x7a\x6f\x77\x52\x76',
        '\x63\x72\x65\x61\x74\x65\x4d\x79\x50\x6c\x61\x79\x65\x72\x44\x61\x74\x61',
        '\x62\x75\x69\x6c\x64\x43\x68\x61\x74\x4d\x65\x73\x73\x61\x67\x65',
        '\x32\x35\x36\x36\x34\x34\x30\x4d\x55\x43\x43\x69\x65',
        '\x62\x48\x4d\x75\x42',
        '\x73\x74\x61\x72\x74\x47\x61\x6d\x65',
        '\x76\x78\x79\x6c\x74',
        '\x72\x65\x73\x65\x74',
        '\x69\x6e\x69\x74',
        '\x42\x4c\x41\x43\x4b',
        '\x72\x65\x73\x65\x74\x57\x61\x69\x74',
        '\x67\x65\x74\x4a\x6f\x69\x6e\x65\x64\x52\x6f\x6f\x6d\x43\x6f\x6d\x6d\x6f\x6e\x45\x76\x65\x6e\x74',
        '\x46\x52\x42\x41\x75',
        '\x69\x69\x79\x49\x52',
        '\x73\x74\x61\x72\x74\x65\x64\x52\x6f\x6f\x6d\x47\x61\x6d\x65\x44\x61\x74\x61\x52\x65\x71\x75\x65\x73\x74',
        '\x65\x4d\x69\x62\x6f',
        '\x70\x4a\x70\x6d\x71',
        '\x6a\x61\x53\x68\x64',
        '\x69\x73\x4d\x61\x70\x4d\x61\x73\x74\x65\x72',
        '\x70\x73\x6b\x4f\x6c',
        '\x61\x6e\x6f\x74\x68\x65\x72\x50\x6c\x61\x79\x65\x72\x73',
        '\x6f\x6e\x4c\x65\x61\x76\x65\x52\x6f\x6f\x6d',
        '\x50\x6c\x61\x79\x65\x72\x20\x6c\x65\x61\x76\x65\x20\x67\x61\x6d\x65',
        '\x5f\x77\x65\x61\x70\x6f\x6e\x73',
        '\x4f\x57\x65\x4f\x64',
        '\x6d\x79\x49\x64',
        '\x73\x65\x6e\x64',
        '\x73\x74\x61\x74\x69\x63\x41\x63\x74\x6f\x72\x42\x69\x6e\x67\x69\x6e\x67',
        '\x6f\x6e\x52\x65\x66\x72\x65\x73\x68\x47\x61\x6d\x65\x50\x61\x72\x74\x79',
        '\x6e\x65\x74\x77\x6f\x72\x6b\x47\x61\x6d\x65\x53\x74\x61\x72\x74\x65\x64',
        '\x67\x65\x74\x43\x68\x61\x74\x53\x74\x61\x72\x74\x4d\x65\x73\x73\x61\x67\x65',
        '\x63\x68\x61\x74\x4d\x65\x73\x73\x61\x67\x65',
        '\x63\x68\x61\x72\x61\x63\x74\x65\x72\x52\x65\x61\x64\x79',
        '\x49\x4c\x45\x62\x54',
        '\x73\x65\x6e\x64\x49\x6e\x69\x74\x69\x61\x6c\x4d\x61\x70\x44\x61\x74\x61',
        '\x61\x6e\x79',
        '\x62\x61\x74\x74\x6c\x65',
        '\x5f\x73\x74\x61\x72\x74\x65\x64\x52\x6f\x6f\x6d\x47\x61\x6d\x65\x44\x61\x74\x61\x52\x65\x73\x70\x6f\x6e\x73\x65',
        '\x67\x65\x74\x52\x65\x71\x75\x65\x73\x74\x65\x64\x4e\x65\x74\x77\x6f\x72\x6b\x53\x74\x61\x74\x65',
        '\x66\x69\x6c\x74\x65\x72',
        '\x4f\x44\x42\x7a\x41',
        '\x41\x4e\x47\x61\x6d\x65\x4d\x61\x6e\x61\x67\x65\x72',
        '\x67\x4f\x63\x59\x58',
        '\x4f\x56\x44\x54\x69',
        '\x67\x65\x74\x50\x6c\x61\x79\x65\x72\x44\x61\x74\x61\x42\x79\x49\x64',
        '\x70\x6c\x61\x79\x65\x72\x73\x41\x63\x74\x6f\x72\x73',
        '\x55\x75\x41\x66\x6b',
        '\x50\x42\x4d\x72\x68',
        '\x73\x61\x76\x65\x44\x61\x74\x61\x43\x6f\x6d\x70\x6c\x65\x74\x65',
        '\x31\x57\x66\x6d\x4c\x6b\x41',
        '\x58\x70\x59\x74\x63',
        '\x69\x73\x53\x61\x6d\x65\x4d\x61\x70\x4d\x6f\x64\x65',
        '\x5f\x77\x61\x69\x74\x4d\x6f\x64\x65',
        '\x73\x68\x6f\x77\x53\x74\x61\x72\x74\x47\x61\x6d\x65\x43\x68\x61\x74\x4d\x65\x73\x73\x61\x67\x65',
        '\x69\x73\x41\x6c\x6c\x50\x6c\x61\x79\x65\x72\x4f\x6e\x53\x61\x6d\x65\x4d\x61\x70',
        '\x4a\x4d\x54\x4a\x45',
        '\x68\x69\x64\x65\x4c\x6f\x61\x64\x65\x72',
        '\x79\x4b\x56\x50\x62',
        '\x73\x65\x6e\x64\x53\x61\x76\x65\x44\x61\x74\x61\x43\x6f\x6d\x70\x6c\x65\x74\x65\x46\x6c\x61\x67',
        '\x2c\x20\x69\x6e\x66\x6f\x20\x6e\x6f\x74\x20\x66\x69\x6e\x64\x65\x64',
        '\x69\x6e\x64\x65\x78',
        '\x69\x6e\x66\x6f',
        '\x58\x73\x76\x61\x52',
        '\x68\x79\x54\x50\x57',
        '\x73\x68\x6f\x77\x4c\x6f\x61\x64\x65\x72',
        '\x7a\x52\x42\x49\x4f',
        '\x6e\x55\x6e\x69\x71\x75\x65\x53\x61\x76\x65\x49\x44',
        '\x5f\x69\x6e\x42\x61\x74\x74\x6c\x65',
        '\x6d\x65\x6e\x75',
        '\x73\x43\x6e\x78\x64',
        '\x45\x45\x54\x46\x74',
        '\x72\x65\x73\x65\x72\x76\x65\x43\x6f\x6d\x6d\x6f\x6e\x45\x76\x65\x6e\x74',
        '\x43\x69\x57\x5a\x50',
        '\x69\x73\x42\x61\x74\x74\x6c\x65\x4d\x61\x73\x74\x65\x72',
        '\x31\x36\x30\x38\x33\x37\x34\x4d\x43\x4a\x69\x42\x5a',
        '\x72\x65\x71\x75\x65\x73\x74\x4e\x65\x74\x77\x6f\x72\x6b\x53\x74\x61\x74\x65\x49\x63\x6f\x6e',
        '\x73\x65\x74\x75\x70\x4e\x65\x77\x4e\x65\x74\x77\x6f\x72\x6b\x47\x61\x6d\x65',
        '\x59\x52\x48\x62\x63',
        '\x67\x65\x74\x50\x6c\x61\x79\x65\x72\x44\x61\x74\x61\x42\x79\x41\x63\x74\x6f\x72\x49\x64',
        '\x70\x6c\x61\x79\x65\x72\x49\x6e\x64\x65\x78',
        '\x61\x6e\x6f\x74\x68\x65\x72\x50\x6c\x61\x79\x65\x72\x73\x4f\x6e\x4d\x61\x70',
        '\x67\x65\x74\x50\x6c\x61\x79\x65\x72\x4c\x65\x61\x76\x65\x47\x61\x6d\x65\x43\x6f\x6d\x6d\x6f\x6e\x45\x76\x65\x6e\x74\x49\x64',
        '\x4e\x47\x56\x4c\x68',
        '\x70\x6c\x61\x79\x65\x72\x73\x4f\x6e\x4d\x61\x70',
        '\x50\x6c\x61\x79\x65\x72\x20\x64\x61\x74\x61\x20\x66\x6f\x72\x20\x41\x63\x74\x6f\x72\x20\x77\x69\x74\x68\x20\x49\x44\x20',
        '\x73\x65\x6e\x64\x53\x63\x65\x6e\x65\x43\x68\x61\x6e\x67\x69\x6e\x67',
        '\x5f\x61\x63\x74\x6f\x72\x73',
        '\x75\x46\x64\x71\x58',
        '\x5f\x73\x68\x6f\x75\x6c\x64\x57\x61\x69\x74\x50\x6c\x61\x79\x65\x72\x4f\x6e\x53\x61\x6d\x65\x4d\x61\x70',
        '\x72\x65\x66\x72\x65\x73\x68\x4e\x65\x74\x77\x6f\x72\x6b\x53\x74\x61\x74\x65\x73',
        '\x63\x72\x65\x61\x74\x65\x4c\x6f\x63\x61\x6c',
        '\x69\x73\x47\x61\x6d\x65\x43\x68\x61\x74\x41\x6c\x6c\x6f\x77\x65\x64',
        '\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64\x21',
        '\x69\x73\x49\x6e\x69\x74\x65\x64',
        '\x69\x73\x53\x68\x6f\x75\x6c\x64\x57\x61\x69\x74\x53\x65\x72\x76\x65\x72',
        '\x73\x65\x6e\x64\x50\x6c\x61\x79\x65\x72\x4e\x61\x6d\x65',
        '\x61\x70\x70\x6c\x79\x4a\x6f\x69\x6e\x65\x64\x44\x61\x74\x61\x43\x6f\x72\x72\x65\x63\x74\x73',
        '\x6e\x53\x61\x66\x65\x52\x65\x66\x72\x65\x73\x68',
        '\x73\x63\x65\x6e\x65\x43\x68\x61\x6e\x67\x65',
        '\x67\x65\x74\x4c\x69\x67\x68\x74\x65\x73\x74\x43\x6f\x6c\x6f\x72',
        '\x75\x70\x64\x61\x74\x65\x57\x61\x69\x74\x69\x6e\x67',
        '\x6d\x61\x70\x49\x64',
        '\x50\x6c\x61\x79\x65\x72\x20\x64\x61\x74\x61\x20\x66\x6f\x72\x20',
        '\x66\x69\x6e\x64',
        '\x4a\x4f\x49\x4e\x45\x44\x20\x54\x4f\x20\x47\x41\x4d\x45',
        '\x74\x72\x61\x64\x65',
        '\x6c\x65\x6e\x67\x74\x68',
        '\x70\x75\x73\x68',
        '\x45\x45\x52\x6e\x4c',
        '\x70\x6c\x61\x79\x65\x72\x4e\x61\x6d\x65',
        '\x33\x31\x35\x37\x30\x33\x30\x72\x69\x58\x46\x43\x7a',
        '\x69\x73\x4e\x65\x78\x74\x53\x63\x65\x6e\x65',
        '\x6d\x79\x41\x63\x74\x6f\x72\x49\x64',
        '\x73\x65\x74\x75\x70\x4e\x65\x74\x77\x6f\x72\x6b\x47\x61\x6d\x65',
        '\x73\x65\x6e\x64\x4d\x61\x70\x4c\x6f\x61\x64\x65\x64',
        '\x67\x65\x74\x4e\x65\x74\x43\x68\x61\x72\x61\x63\x74\x65\x72\x46\x6f\x72\x50\x6c\x61\x79\x65\x72',
        '\x6d\x61\x70',
        '\x73\x65\x6e\x64\x53\x74\x61\x72\x74\x65\x64\x52\x6f\x6f\x6d\x47\x61\x6d\x65\x44\x61\x74\x61\x52\x65\x71\x75\x65\x73\x74',
        '\x74\x68\x65\x6e',
        '\x72\x65\x66\x72\x65\x73\x68',
        '\x70\x6c\x61\x79\x65\x72\x73\x44\x61\x74\x61',
        '\x31\x36\x38\x30\x33\x33\x61\x75\x71\x6e\x42\x48',
        '\x76\x79\x58\x68\x6c',
        '\x69\x73\x4c\x6f\x61\x64\x47\x61\x6d\x65\x52\x6f\x6f\x6d',
        '\x5f\x67\x6f\x6c\x64',
        '\x6e\x79\x66\x6e\x57',
        '\x67\x65\x74\x42\x79\x46\x69\x65\x6c\x64',
        '\x7a\x43\x69\x50\x5a',
        '\x73\x65\x6e\x64\x53\x74\x61\x72\x74\x65\x64\x52\x6f\x6f\x6d\x44\x61\x74\x61\x52\x65\x73\x70\x6f\x6e\x65',
        '\x61\x79\x79\x6f\x51',
        '\x4c\x68\x56\x62\x54',
        '\x73\x65\x6e\x64\x52\x61\x77\x43\x68\x61\x74\x4d\x65\x73\x73\x61\x67\x65',
        '\x6d\x61\x6b\x65\x53\x61\x76\x65\x43\x6f\x6e\x74\x65\x6e\x74\x73',
        '\x65\x76\x65\x72\x79',
        '\x36\x39\x39\x38\x32\x58\x6e\x52\x72\x42\x49',
        '\x6f\x6e\x50\x6c\x61\x79\x65\x72\x4e\x61\x6d\x65',
        '\x62\x69\x6e\x64\x69\x6e\x67\x41\x63\x74\x6f\x72\x73',
        '\x5a\x7a\x79\x67\x67',
        '\x6f\x6e\x50\x6c\x61\x79\x65\x72\x4a\x6f\x69\x6e\x65\x64\x54\x68\x69\x73\x47\x61\x6d\x65',
        '\x32\x34\x33\x30\x32\x37\x39\x48\x4e\x58\x6b\x4d\x77',
        '\x55\x6e\x6b\x6e\x6f\x77\x6e\x20\x66\x69\x65\x6c\x64\x3a\x20',
        '\x73\x6f\x6d\x65\x6f\x6e\x65\x4a\x6f\x69\x6e\x65\x64\x54\x6f\x53\x74\x61\x72\x74\x65\x64\x47\x61\x6d\x65',
        '\x73\x61\x76\x65\x44\x61\x74\x61\x52\x65\x71\x75\x65\x73\x74',
        '\x78\x45\x63\x56\x69',
        '\x61\x63\x74\x6f\x72',
        '\x6d\x79\x50\x6c\x61\x79\x65\x72\x44\x61\x74\x61',
        '\x43\x6f\x6c\x6f\x72',
        '\x73\x65\x6e\x64\x41\x63\x74\x6f\x72\x52\x65\x61\x64\x79',
        '\x70\x65\x65\x7a\x49',
        '\x73\x65\x6e\x64\x42\x69\x6e\x64\x41\x63\x74\x6f\x72\x46\x72\x6f\x6d\x47\x61\x6d\x65',
        '\x52\x45\x41\x44\x59\x20\x54\x4f\x20\x53\x54\x41\x52\x54\x20\x47\x41\x4d\x45',
        '\x36\x32\x31\x36\x34\x30\x56\x73\x48\x56\x55\x55',
        '\x73\x74\x61\x72\x74\x65\x64\x52\x6f\x6f\x6d\x47\x61\x6d\x65\x44\x61\x74\x61',
        '\x69\x73\x41\x63\x74\x6f\x72\x53\x65\x6c\x65\x63\x74\x69\x6f\x6e\x41\x6c\x6c\x6f\x77\x65\x64',
        '\x5f\x69\x6e\x74\x65\x72\x70\x72\x65\x74\x65\x72',
        '\x47\x61\x6d\x65',
        '\x32\x32\x38\x30\x73\x55\x69\x72\x4e\x56',
        '\x53\x63\x6e\x65\x41',
        '\x71\x6b\x77\x69\x61',
        '\x69\x73\x48\x61\x76\x65\x43\x68\x61\x72\x61\x63\x74\x65\x72\x49\x6e\x47\x61\x6d\x65',
        '\x61\x63\x74\x6f\x72\x49\x64',
        '\x5f\x69\x74\x65\x6d\x73',
        '\x48\x4c\x71\x43\x49',
        '\x57\x70\x79\x66\x45',
        '\x69\x73\x43\x68\x61\x72\x4f\x6e\x4d\x61\x70',
        '\x4a\x6a\x45\x61\x54',
        '\x6d\x79\x49\x6e\x64\x65\x78',
        '\x79\x4e\x6c\x69\x69',
        '\x4e\x47\x41\x4d\x45',
        '\x73\x65\x6e\x64\x53\x61\x76\x65\x44\x61\x74\x61\x52\x65\x71\x75\x65\x73\x74',
        '\x61\x6e\x6f\x74\x68\x65\x72\x50\x6c\x61\x79\x65\x72\x4c\x65\x61\x76\x65\x47\x61\x6d\x65',
        '\x48\x58\x57\x76\x61',
        '\x55\x74\x69\x6c\x73',
        '\x50\x46\x61\x6e\x43',
        '\x73\x65\x74\x57\x61\x69\x74',
        '\x69\x73\x50\x6c\x61\x79\x65\x72\x44\x61\x74\x61\x45\x78\x69\x73\x74\x73',
        '\x61\x63\x74\x6f\x72\x42\x69\x6e\x67\x69\x6e\x67\x46\x72\x6f\x6d\x53\x65\x6c\x65\x63\x74\x69\x6f\x6e',
        '\x6e\x61\x6d\x65',
        '\x63\x61\x6c\x6c\x62\x61\x63\x6b',
        '\x77\x61\x72\x6e\x69\x6e\x67',
        '\x36\x30\x77\x6c\x6c\x75\x45\x6c',
        '\x5f\x6e\x4c\x6f\x63\x61\x6c\x41\x63\x74\x6f\x72\x4d\x6f\x64\x65',
        '\x6f\x6e\x52\x6f\x6f\x6d\x50\x6c\x61\x79\x65\x72\x73',
        '\x61\x63\x74\x6f\x72\x4e\x61\x6d\x65',
        '\x42\x48\x50\x4c\x53',
        '\x4a\x6f\x69\x6e\x69\x6e\x67\x20\x74\x6f\x20\x74\x68\x65\x20\x67\x61\x6d\x65\x2e\x2e\x2e',
        '\x6e\x65\x74\x49\x64',
        '\x73\x61\x76\x65\x4f\x62\x6a\x65\x63\x74\x46\x6f\x72\x4e\x65\x74',
        '\x5f\x65\x76\x65\x6e\x74\x73'
    ];
    _0x11ec = function () {
        return _0x165958;
    };
    return _0x11ec();
}
(function (_0x214f60, _0x7f3d43) {
    var _0x2a9b1d = _0x1ed8, _0x37b2d3 = _0x214f60();
    while (!![]) {
        try {
            var _0x8d0ab1 = -parseInt(_0x2a9b1d(0x171)) / 0x1 * (-parseInt(_0x2a9b1d(0x18a)) / 0x2) + -parseInt(_0x2a9b1d(0x1b9)) / 0x3 * (-parseInt(_0x2a9b1d(0x12f)) / 0x4) + parseInt(_0x2a9b1d(0x1ae)) / 0x5 + parseInt(_0x2a9b1d(0x143)) / 0x6 + parseInt(_0x2a9b1d(0x138)) / 0x7 * (-parseInt(_0x2a9b1d(0x112)) / 0x8) + -parseInt(_0x2a9b1d(0x106)) / 0x9 + -parseInt(_0x2a9b1d(0x117)) / 0xa * (parseInt(_0x2a9b1d(0x101)) / 0xb);
            if (_0x8d0ab1 === _0x7f3d43)
                break;
            else
                _0x37b2d3['push'](_0x37b2d3['shift']());
        } catch (_0x5b991b) {
            _0x37b2d3['push'](_0x37b2d3['shift']());
        }
    }
}(_0x11ec, 0x911e6), window[_0x1cf265(0x169)] = function () {
}, (function () {
    var _0xfc753 = _0x1cf265, _0x3753bd, _0x5d765f;
    _0x3753bd = new KDCore[(_0xfc753(0x13c))]('\x4e\x65\x74\x47\x61\x6d\x65'), _0x3753bd['\x73\x65\x74\x43\x6f\x6c\x6f\x72\x73'](KDCore[_0xfc753(0x10d)][_0xfc753(0x13a)], KDCore[_0xfc753(0x10d)][_0xfc753(0x149)][_0xfc753(0x1a3)](0x23)), _0x3753bd['\x6f\x6e'](), _0x5d765f = window[_0xfc753(0x169)], _0x5d765f['\x69\x73\x53\x68\x6f\x75\x6c\x64\x57\x61\x69\x74\x53\x65\x72\x76\x65\x72'] = function () {
        var _0x4c9a34 = _0xfc753;
        return this[_0x4c9a34(0x174)] != null;
    }, _0x5d765f[_0xfc753(0x148)] = function () {
        var _0x51fed0 = _0xfc753;
        return this[_0x51fed0(0x147)](), this['\x63\x72\x65\x61\x74\x65\x4d\x79\x50\x6c\x61\x79\x65\x72\x44\x61\x74\x61'](), ANPlayersManager[_0x51fed0(0x19f)]();
    }, _0x5d765f['\x72\x65\x73\x65\x74'] = function () {
        var _0xb1ac19 = _0xfc753;
        this[_0xb1ac19(0x15d)] = ![], this[_0xb1ac19(0x174)] = null, this[_0xb1ac19(0x1b8)] = null, ANBattleManager['\x62\x61\x74\x74\x6c\x65\x44\x61\x74\x61'] = null;
    }, _0x5d765f[_0xfc753(0x141)] = function () {
        var _0x246e58 = _0xfc753;
        _0x246e58(0x17e) !== '\x50\x66\x6b\x45\x4d' ? (this[_0x246e58(0x1b8)] = [], this[_0x246e58(0x1b8)]['\x70\x75\x73\x68'](NetPlayerDataWrapper[_0x246e58(0x19a)]())) : this[_0x246e58(0x15b)]();
    }, _0x5d765f[_0xfc753(0x19d)] = function () {
        var _0x1969cc = _0xfc753;
        return this[_0x1969cc(0x1b8)] != null;
    }, _0x5d765f[_0xfc753(0x10c)] = function () {
        var _0x5dffc1 = _0xfc753;
        return this[_0x5dffc1(0x16c)](ANNetwork['\x6d\x79\x49\x64']());
    }, _0x5d765f[_0xfc753(0x1b0)] = function () {
        var _0x53c525 = _0xfc753;
        return this[_0x53c525(0x10c)]()['\x61\x63\x74\x6f\x72\x49\x64'];
    }, _0x5d765f[_0xfc753(0x121)] = function () {
        var _0x3f007d = _0xfc753;
        return this[_0x3f007d(0x10c)]()[_0x3f007d(0x17c)];
    }, _0x5d765f[_0xfc753(0x152)] = function () {
        var _0x46c276 = _0xfc753;
        return this['\x6d\x79\x50\x6c\x61\x79\x65\x72\x44\x61\x74\x61']()[_0x46c276(0x152)] === !![];
    }, _0x5d765f['\x69\x73\x42\x61\x74\x74\x6c\x65\x4d\x61\x73\x74\x65\x72'] = function () {
        var _0x3d8685 = _0xfc753;
        return ANBattleManager[_0x3d8685(0x189)]();
    }, _0x5d765f[_0xfc753(0x12a)] = function (_0x230301) {
        var _0x2a88b4 = _0xfc753;
        if (_0x2a88b4(0x197) !== _0x2a88b4(0x13f)) {
            var _0x431ce4;
            return _0x431ce4 = this[_0x2a88b4(0x1b8)]['\x66\x69\x6e\x64'](function (_0x3dfe20) {
                return _0x3dfe20['\x69\x64'] === _0x230301;
            }), _0x431ce4 != null;
        } else
            return this['\x5f\x77\x61\x69\x74\x4d\x6f\x64\x65'] != null;
    }, _0x5d765f[_0xfc753(0x16c)] = function (_0x38338f) {
        var _0x56da45 = _0xfc753, _0x56be51;
        _0x56be51 = this[_0x56da45(0x1b8)]['\x66\x69\x6e\x64'](function (_0x3f04f1) {
            return _0x3f04f1['\x69\x64'] === _0x38338f;
        });
        if (_0x56be51 != null)
            return _0x56da45(0xfd) !== _0x56da45(0x128) ? _0x56be51 : _0x329e68[_0x56da45(0x11b)] === _0x364ce8;
        else
            ANET['\x77']('\x50\x6c\x61\x79\x65\x72\x20\x64\x61\x74\x61\x20\x66\x6f\x72\x20' + _0x38338f + '\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64\x21');
        return null;
    }, _0x5d765f[_0xfc753(0x18e)] = function (_0xbf3c4c) {
        var _0x548494 = _0xfc753, _0x34b25d;
        _0x34b25d = this[_0x548494(0x1b8)][_0x548494(0x1a7)](function (_0x2af583) {
            var _0x356a8d = _0x548494;
            return _0x2af583[_0x356a8d(0x11b)] === _0xbf3c4c;
        });
        if (_0x34b25d != null) {
            if (_0x548494(0x179) !== _0x548494(0x11e))
                return _0x34b25d;
            else
                this['\x62\x69\x6e\x64\x69\x6e\x67\x41\x63\x74\x6f\x72\x73']();
        } else
            _0x548494(0x16e) !== _0x548494(0x188) ? ANET['\x77'](_0x548494(0x194) + _0xbf3c4c + _0x548494(0x19c)) : this[_0x548494(0x129)](_0x548494(0x193));
        return null;
    }, _0x5d765f['\x67\x65\x74\x50\x6c\x61\x79\x65\x72\x49\x6e\x66\x6f'] = function (_0xa923fc, _0x18c5e9, _0x40ac3e) {
        var _0x3ff49a = _0xfc753;
        if (_0x3ff49a(0xf8) === _0x3ff49a(0xf8)) {
            var _0x3b5a72, _0x39d02b, _0x4a53af, _0xc102cf;
            if (_0xa923fc === _0x18c5e9)
                return '\x69\x77\x68\x6c\x55' !== '\x69\x77\x68\x6c\x55' ? (_0x39e219[_0x3ff49a(0x15a)](_0x2e1a53['\x47\x61\x6d\x65'](_0x3ff49a(0x113), {
                    '\x77\x68\x6f\x52\x65\x71\x75\x65\x73\x74\x49\x64': _0xeab91c,
                    '\x67\x61\x6d\x65\x44\x61\x74\x61': _0x39f1c4[_0x3ff49a(0x165)]
                })), _0x1b371f[_0x3ff49a(0x165)] = null) : _0x40ac3e;
            if (_0x40ac3e == null) {
                if (_0x3ff49a(0xf5) === '\x76\x79\x58\x68\x6c')
                    return null;
                else {
                    var _0x252952, _0x1ea5f4;
                    try {
                        return _0x1ea5f4 = _0x4fb8c5[_0x3ff49a(0xff)](), _0x29a2f7[_0x3ff49a(0x136)](_0x1ea5f4)[_0x3ff49a(0x1b6)](function () {
                            var _0x4e2dff = _0x3ff49a;
                            return _0x10895b[_0x4e2dff(0x15a)](_0x2ba55d[_0x4e2dff(0x116)](_0x4e2dff(0x113), {
                                '\x77\x68\x6f\x52\x65\x71\x75\x65\x73\x74\x49\x64': _0x105727,
                                '\x67\x61\x6d\x65\x44\x61\x74\x61': _0x235909[_0x4e2dff(0x165)]
                            })), _0x2f0278[_0x4e2dff(0x165)] = null;
                        });
                    } catch (_0x5e39c2) {
                        return _0x252952 = _0x5e39c2, _0x2552f9[_0x3ff49a(0x12e)](_0x252952);
                    }
                }
            }
            _0xc102cf = null;
            try {
                switch (_0x18c5e9) {
                case _0x3ff49a(0x11b):
                    _0xc102cf = this[_0x3ff49a(0x18e)](_0x40ac3e);
                    break;
                case _0x3ff49a(0x135):
                    _0xc102cf = this[_0x3ff49a(0x16c)](_0x40ac3e);
                    break;
                case '\x61\x63\x74\x6f\x72':
                    _0xc102cf = this['\x67\x65\x74\x50\x6c\x61\x79\x65\x72\x44\x61\x74\x61\x42\x79\x41\x63\x74\x6f\x72\x49\x64'](_0x40ac3e['\x61\x63\x74\x6f\x72\x49\x64']());
                    break;
                case _0x3ff49a(0x132):
                    _0x39d02b = this[_0x3ff49a(0x1b8)][_0x3ff49a(0x1b4)](function (_0x548e50) {
                        var _0x39c44b = _0x3ff49a;
                        return $gameActors[_0x39c44b(0x10b)](_0x548e50[_0x39c44b(0x11b)]);
                    }), _0x3b5a72 = _0x39d02b[_0x3ff49a(0x1a7)](function (_0x4aa7d0) {
                        var _0x1fb9d3 = _0x3ff49a;
                        return _0x4aa7d0[_0x1fb9d3(0x12c)]() === _0x40ac3e;
                    });
                    if (_0x3b5a72 != null) {
                        if (_0x3ff49a(0x1ac) === _0x3ff49a(0x126)) {
                            var _0x3d3caf;
                            _0x3d3caf = this[_0x3ff49a(0x10c)](), this[_0x3ff49a(0x1b8)] = _0x2bdac3, !this['\x67\x65\x74\x50\x6c\x61\x79\x65\x72\x44\x61\x74\x61\x42\x79\x49\x64'](_0x3eb648[_0x3ff49a(0x159)]()) && this[_0x3ff49a(0x1b8)][_0x3ff49a(0x1ab)](_0x3d3caf);
                        } else
                            _0xc102cf = this['\x67\x65\x74\x50\x6c\x61\x79\x65\x72\x44\x61\x74\x61\x42\x79\x41\x63\x74\x6f\x72\x49\x64'](_0x3b5a72['\x61\x63\x74\x6f\x72\x49\x64']());
                    }
                    break;
                case _0x3ff49a(0x1ad):
                    _0xc102cf = this[_0x3ff49a(0x1b8)][_0x3ff49a(0xf9)](_0x3ff49a(0x12c), _0x40ac3e);
                    break;
                case _0x3ff49a(0x18f):
                    _0xc102cf = this[_0x3ff49a(0x1b8)]['\x67\x65\x74\x42\x79\x46\x69\x65\x6c\x64'](_0x3ff49a(0x17c), _0x40ac3e);
                    break;
                case _0x3ff49a(0x17d):
                    _0xc102cf = _0x40ac3e;
                    break;
                default:
                    ANET['\x77'](_0x3ff49a(0x107) + _0x18c5e9 + _0x3ff49a(0x17b));
                }
                if (_0xc102cf == null)
                    return '\x59\x53\x50\x6b\x59' !== _0x3ff49a(0x144) ? null : _0x45a531;
                switch (_0xa923fc) {
                case _0x3ff49a(0x11b):
                    return _0xc102cf['\x61\x63\x74\x6f\x72\x49\x64'];
                case _0x3ff49a(0x135):
                    return _0xc102cf['\x69\x64'];
                case _0x3ff49a(0x132):
                    _0x3b5a72 = $gameActors[_0x3ff49a(0x10b)](_0xc102cf[_0x3ff49a(0x11b)]);
                    return _0x3b5a72 != null ? _0x3b5a72[_0x3ff49a(0x12c)]() : _0x3ff49a(0x122) !== _0x3ff49a(0x10a) ? '' : _0x30f918;
                    break;
                case '\x70\x6c\x61\x79\x65\x72\x4e\x61\x6d\x65':
                    return _0xc102cf[_0x3ff49a(0x12c)];
                case _0x3ff49a(0x18f):
                    return _0xc102cf[_0x3ff49a(0x17c)];
                case '\x61\x63\x74\x6f\x72':
                    return $gameActors[_0x3ff49a(0x10b)](_0xc102cf[_0x3ff49a(0x11b)]);
                default:
                    return _0xc102cf;
                }
                return null;
            } catch (_0x1fc514) {
                return _0x4a53af = _0x1fc514, ANET['\x77'](_0x4a53af), null;
            }
        } else
            return this[_0x3ff49a(0x1b8)][_0x3ff49a(0x100)](function (_0x680d5c) {
                var _0x2f5cb7 = _0x3ff49a;
                return _0x680d5c['\x6d\x61\x70\x49\x64'] === _0x1b2299[_0x2f5cb7(0x1a5)]();
            });
    }, _0x5d765f[_0xfc753(0x18c)] = function () {
        var _0x22f6e6 = _0xfc753;
        return this[_0x22f6e6(0x15d)] = !![], $gameParty[_0x22f6e6(0x1b1)]();
    }, _0x5d765f['\x6f\x6e\x4e\x65\x77\x47\x61\x6d\x65\x4d\x61\x70\x53\x65\x74\x75\x70'] = function () {
        var _0x44fd4c = _0xfc753;
        _0x44fd4c(0x104) === '\x78\x50\x67\x6f\x41' ? this[_0x44fd4c(0x12b)]() : ($gameTemp['\x5f\x6e\x4c\x6f\x63\x61\x6c\x41\x63\x74\x6f\x72\x4d\x6f\x64\x65'] = ![], this[_0x44fd4c(0x198)] = ANNetwork[_0x44fd4c(0x173)]());
    }, _0x5d765f['\x6f\x6e\x4d\x61\x70\x4c\x6f\x61\x64\x65\x64'] = function () {
        var _0x4b3910 = _0xfc753;
        if (_0x4b3910(0x18d) === '\x4a\x71\x6b\x46\x74') {
            var _0x168764, _0x4948ad, _0xf6f92d, _0x2c973d;
            _0x1c83df['\x5f\x61\x63\x74\x6f\x72\x73'] = [], _0x2c973d = this[_0x4b3910(0x1b8)];
            for (_0x168764 = 0x0, _0x4948ad = _0x2c973d['\x6c\x65\x6e\x67\x74\x68']; _0x168764 < _0x4948ad; _0x168764++) {
                _0xf6f92d = _0x2c973d[_0x168764], _0x3036b7[_0x4b3910(0x11a)](_0xf6f92d) && _0x3f70c9[_0x4b3910(0x196)]['\x70\x75\x73\x68'](_0xf6f92d['\x61\x63\x74\x6f\x72\x49\x64']);
            }
            _0x17410f[_0x4b3910(0x1b7)](), _0x2fa051[_0x4b3910(0x1a1)]();
        } else {
            ANMapManager[_0x4b3910(0x1b2)](), ANMapManager['\x73\x65\x6e\x64\x49\x6e\x69\x74\x69\x61\x6c\x4d\x61\x70\x44\x61\x74\x61'](), ANTradeManager['\x6f\x6e\x54\x72\x61\x64\x65\x53\x63\x65\x6e\x65\x45\x6e\x64']();
            if (ANET[_0x4b3910(0x127)][_0x4b3910(0xf6)]()) {
                if (this[_0x4b3910(0x198)] === !![])
                    this[_0x4b3910(0x129)](_0x4b3910(0x193));
                else {
                    if (_0x4b3910(0x153) === _0x4b3910(0x153))
                        this[_0x4b3910(0x103)]();
                    else
                        return _0x517fad[_0x4b3910(0x12c)]() === _0x50497f;
                }
            } else {
                if (this[_0x4b3910(0x198)] === !![] || this[_0x4b3910(0x15d)] === !![]) {
                    if ('\x69\x69\x79\x49\x52' === _0x4b3910(0x14d))
                        this[_0x4b3910(0x129)]('\x70\x6c\x61\x79\x65\x72\x73\x4f\x6e\x4d\x61\x70');
                    else
                        return _0x366469 = _0x22358f['\x6d\x61\x6b\x65\x53\x61\x76\x65\x43\x6f\x6e\x74\x65\x6e\x74\x73'](), _0x1e264c[_0x4b3910(0x136)](_0x309b18)[_0x4b3910(0x1b6)](function () {
                            var _0x43c737 = _0x4b3910;
                            return _0xee2b33[_0x43c737(0x15a)](_0xad4c26[_0x43c737(0x116)](_0x43c737(0x113), {
                                '\x77\x68\x6f\x52\x65\x71\x75\x65\x73\x74\x49\x64': _0xaa395a,
                                '\x67\x61\x6d\x65\x44\x61\x74\x61': _0x34bbdc[_0x43c737(0x165)]
                            })), _0x215bbe[_0x43c737(0x165)] = null;
                        });
                } else
                    this['\x6f\x6e\x52\x65\x66\x72\x65\x73\x68\x47\x61\x6d\x65\x50\x61\x72\x74\x79']();
            }
        }
    }, _0x5d765f[_0xfc753(0x129)] = function (_0x3620b4) {
        var _0x1c33ee = _0xfc753;
        return this[_0x1c33ee(0x174)] = _0x3620b4, HUIManager[_0x1c33ee(0x180)](0x1f4);
    }, _0x5d765f[_0xfc753(0x14a)] = function () {
        var _0x57d4b = _0xfc753;
        return this[_0x57d4b(0x129)](null), HUIManager[_0x57d4b(0x178)]();
    }, _0x5d765f[_0xfc753(0x176)] = function () {
        var _0x5f6ce9 = _0xfc753;
        if (_0x5f6ce9(0x151) === '\x4a\x59\x62\x4d\x6a')
            _0x4e9af7[_0x5f6ce9(0x130)] = ![], this[_0x5f6ce9(0x198)] = _0x4b00b1['\x69\x73\x53\x61\x6d\x65\x4d\x61\x70\x4d\x6f\x64\x65']();
        else
            return this[_0x5f6ce9(0x1b8)][_0x5f6ce9(0x100)](function (_0x101f47) {
                var _0x52ed0f = _0x5f6ce9;
                return _0x101f47[_0x52ed0f(0x1a5)] === $gameMap[_0x52ed0f(0x1a5)]();
            });
    }, _0x5d765f[_0xfc753(0x154)] = function () {
        var _0x274a74 = _0xfc753, _0x3c2786;
        return _0x3c2786 = this['\x6d\x79\x49\x6e\x64\x65\x78'](), this['\x70\x6c\x61\x79\x65\x72\x73\x44\x61\x74\x61'][_0x274a74(0x167)](function (_0xd93633) {
            var _0x51108b = _0x274a74;
            return _0x51108b(0x158) === _0x51108b(0x158) ? _0xd93633['\x69\x6e\x64\x65\x78'] !== _0x3c2786 : _0x1ba6af[_0x51108b(0x12c)]();
        });
    }, _0x5d765f[_0xfc753(0x190)] = function () {
        var _0x42f4c9 = _0xfc753;
        return this[_0x42f4c9(0x154)]()[_0x42f4c9(0x167)](function (_0x1a4e7e) {
            var _0x5f4af2 = _0x42f4c9;
            return NetPlayerDataWrapper[_0x5f4af2(0x11f)](_0x1a4e7e);
        });
    }, _0x5d765f['\x69\x73\x41\x6c\x6c\x50\x6c\x61\x79\x65\x72\x73\x41\x63\x74\x6f\x72\x73\x52\x65\x61\x64\x79'] = function () {
        var _0x4d11b9 = _0xfc753;
        return this['\x70\x6c\x61\x79\x65\x72\x73\x44\x61\x74\x61'][_0x4d11b9(0x100)](function (_0x4a7845) {
            var _0x1c7441 = _0x4d11b9;
            return _0x4a7845[_0x1c7441(0x160)] === !![];
        });
    }, _0x5d765f[_0xfc753(0x199)] = function () {
        var _0xeb1809 = _0xfc753;
        if ('\x58\x62\x4c\x55\x4e' !== '\x7a\x4d\x52\x73\x43') {
            var _0x44f73e, _0xdfe0e5, _0x58ea5f, _0x58a070, _0x54bb23, _0x8da1e1;
            if (!ANET['\x50\x50']['\x69\x73\x53\x68\x6f\x77\x4e\x65\x74\x77\x6f\x72\x6b\x49\x63\x6f\x6e\x73']())
                return;
            _0x54bb23 = this[_0xeb1809(0x190)]();
            for (_0xdfe0e5 = 0x0, _0x58ea5f = _0x54bb23['\x6c\x65\x6e\x67\x74\x68']; _0xdfe0e5 < _0x58ea5f; _0xdfe0e5++) {
                if ('\x57\x69\x72\x55\x4f' !== _0xeb1809(0x185))
                    _0x58a070 = _0x54bb23[_0xdfe0e5], _0x8da1e1 = NetPlayerDataWrapper[_0xeb1809(0x166)](_0x58a070), _0x44f73e = NetPlayerDataWrapper[_0xeb1809(0x1b3)](_0x58a070), _0x44f73e != null && _0x44f73e[_0xeb1809(0x18b)](_0x8da1e1);
                else {
                    var _0x531798;
                    _0xf05412['\x70'](_0xeb1809(0x156)), _0x531798 = _0x477cb3['\x50\x50'][_0xeb1809(0x191)](), _0x531798 > 0x0 && _0x44d2b6[_0xeb1809(0x187)](_0x531798);
                }
            }
        } else
            return this[_0xeb1809(0x147)](), this['\x63\x72\x65\x61\x74\x65\x4d\x79\x50\x6c\x61\x79\x65\x72\x44\x61\x74\x61'](), _0x2c1632[_0xeb1809(0x19f)]();
    }, _0x5d765f[_0xfc753(0x103)] = function () {
        var _0x3c6897 = _0xfc753;
        '\x53\x54\x41\x52\x54\x20\x42\x49\x4e\x44\x49\x4e\x47\x20\x41\x43\x54\x4f\x52\x53'['\x70'](), this[_0x3c6897(0x15d)] = ![], ANET['\x50\x50'][_0x3c6897(0x114)]() || ANET[_0x3c6897(0x127)][_0x3c6897(0xf6)]() ? this[_0x3c6897(0x12b)]() : this[_0x3c6897(0x15b)]();
    }, _0x5d765f[_0xfc753(0x12b)] = function () {
        var _0x57517d = _0xfc753;
        ANPlayersManager[_0x57517d(0x10e)]();
    }, _0x5d765f[_0xfc753(0x15b)] = function () {
        var _0x4391f0 = _0xfc753;
        if (_0x4391f0(0x120) !== _0x4391f0(0x172)) {
            var _0x160e86;
            _0x160e86 = ANET['\x50\x50']['\x61\x63\x74\x6f\x72\x73\x46\x6f\x72\x4e\x65\x74\x77\x6f\x72\x6b']()[this[_0x4391f0(0x121)]() - 0x1], ANPlayersManager[_0x4391f0(0x110)](_0x160e86);
        } else
            return this[_0x4391f0(0x141)]();
    }, _0x5d765f[_0xfc753(0x1a4)] = function () {
        var _0x33f502 = _0xfc753;
        if (_0x33f502(0x119) !== _0x33f502(0x119))
            _0x3771be[_0x33f502(0x139)](_0x5d8e53[_0x33f502(0x116)](_0x33f502(0x14e)), _0xd65dc2, _0x112f0a, 0x1388, _0x33f502(0x134));
        else {
            if (!this[_0x33f502(0x19e)]())
                return;
            switch (this['\x5f\x77\x61\x69\x74\x4d\x6f\x64\x65']) {
            case _0x33f502(0x193):
                this[_0x33f502(0x176)]() && ('\x4a\x4d\x54\x4a\x45' === _0x33f502(0x177) ? (this['\x72\x65\x73\x65\x74\x57\x61\x69\x74'](), this[_0x33f502(0x198)] = ![], this[_0x33f502(0x15d)] === !![] && ('\x50\x42\x4d\x72\x68' !== _0x33f502(0x16f) ? (_0x32719c = _0x1dbf63[_0x38ad51], _0x3239ca[_0x33f502(0x11a)](_0x254842) && _0x4af550[_0x33f502(0x196)]['\x70\x75\x73\x68'](_0x1b4011[_0x33f502(0x11b)])) : this['\x62\x69\x6e\x64\x69\x6e\x67\x41\x63\x74\x6f\x72\x73']())) : (_0x2b4594 = _0x517da3[_0x20c0eb], _0x170f47 = _0x1f1294[_0x33f502(0x166)](_0x4f3fe5), _0x1dec1c = _0x4995c3[_0x33f502(0x1b3)](_0xf06c5d), _0x5e9aa9 != null && _0x31b9c3[_0x33f502(0x18b)](_0x495adb)));
                break;
            case _0x33f502(0x16d):
                this['\x69\x73\x41\x6c\x6c\x50\x6c\x61\x79\x65\x72\x73\x41\x63\x74\x6f\x72\x73\x52\x65\x61\x64\x79']() && (this['\x72\x65\x73\x65\x74\x57\x61\x69\x74'](), this[_0x33f502(0x145)]());
                break;
            }
        }
    }, _0x5d765f['\x73\x74\x61\x72\x74\x47\x61\x6d\x65'] = function () {
        var _0x1df6de = _0xfc753;
        if (_0x1df6de(0x181) === '\x7a\x42\x72\x67\x4a')
            return _0x45d800['\x63\x68\x61\x72\x61\x63\x74\x65\x72\x52\x65\x61\x64\x79'] === !![];
        else
            _0x1df6de(0x111)['\x70'](), ANMapManager[_0x1df6de(0x162)](), !ANET['\x55\x74\x69\x6c\x73'][_0x1df6de(0xf6)]() && this[_0x1df6de(0x175)]();
    }, _0x5d765f['\x73\x68\x6f\x77\x53\x74\x61\x72\x74\x47\x61\x6d\x65\x43\x68\x61\x74\x4d\x65\x73\x73\x61\x67\x65'] = function () {
        var _0x11fe16 = _0xfc753;
        if (_0x11fe16(0x17f) !== _0x11fe16(0x118)) {
            var _0x140786;
            if (!ANET['\x50\x50'][_0x11fe16(0x19b)]()) {
                if (_0x11fe16(0x161) !== _0x11fe16(0x161))
                    return this[_0x11fe16(0x1b8)] != null;
                else
                    return;
            }
            _0x140786 = ANET['\x50\x50'][_0x11fe16(0x15e)]();
            if (!String[_0x11fe16(0x163)](_0x140786)) {
                if (_0x11fe16(0x16a) !== _0x11fe16(0xfa))
                    return;
                else
                    this[_0x11fe16(0x175)]();
            }
            ANET['\x55\x49'][_0x11fe16(0x13d)](ANET[_0x11fe16(0x127)][_0x11fe16(0x142)](0x0, 0x0, _0x140786));
        } else
            return this[_0x11fe16(0x129)](null), _0x199193['\x68\x69\x64\x65\x4c\x6f\x61\x64\x65\x72']();
    }, _0x5d765f[_0xfc753(0x125)] = function (_0x1f7080) {
        var _0x49b972 = _0xfc753, _0x510163;
        _0x3753bd['\x70'](_0x49b972(0x156)), _0x510163 = ANET['\x50\x50']['\x67\x65\x74\x50\x6c\x61\x79\x65\x72\x4c\x65\x61\x76\x65\x47\x61\x6d\x65\x43\x6f\x6d\x6d\x6f\x6e\x45\x76\x65\x6e\x74\x49\x64'](), _0x510163 > 0x0 && $gameTemp[_0x49b972(0x187)](_0x510163);
    }, _0x5d765f[_0xfc753(0x1a0)] = function () {
        var _0x4efd75 = _0xfc753;
        if (_0x4efd75(0x14f) === _0x4efd75(0x14f)) {
            var _0x34c4e3, _0x2387fd, _0x5e5d37, _0x49cf08, _0x577842, _0x24293e;
            try {
                $gameMap[_0x4efd75(0x115)] = new Game_Interpreter(), $gameParty[_0x4efd75(0xf7)] = 0x0, $gameParty[_0x4efd75(0x157)] = {}, $gameParty['\x5f\x61\x72\x6d\x6f\x72\x73'] = {}, $gameParty[_0x4efd75(0x11c)] = {}, $gameParty[_0x4efd75(0x183)] = ![], _0x577842 = $gameMap[_0x4efd75(0x137)], _0x24293e = [];
                for (_0x5e5d37 = 0x0, _0x49cf08 = _0x577842[_0x4efd75(0x1aa)]; _0x5e5d37 < _0x49cf08; _0x5e5d37++) {
                    _0x2387fd = _0x577842[_0x5e5d37];
                    if (_0x2387fd == null)
                        continue;
                    _0x24293e[_0x4efd75(0x1ab)](_0x2387fd['\x5f\x73\x74\x61\x72\x74\x69\x6e\x67'] = ![]);
                }
                return _0x24293e;
            } catch (_0x5e007f) {
                return _0x4efd75(0x146) === _0x4efd75(0x146) ? (_0x34c4e3 = _0x5e007f, ANET['\x77'](_0x34c4e3)) : _0x529e4a[_0x4efd75(0x17c)] !== _0x52df2a;
            }
        } else
            _0x1da434 = this['\x67\x65\x74\x50\x6c\x61\x79\x65\x72\x44\x61\x74\x61\x42\x79\x49\x64'](_0x19ee4a), _0x42603d != null && (_0x1bf89b[_0x4efd75(0x12c)] = _0x24fb8f);
    }, _0x5d765f[_0xfc753(0x195)] = function () {
        var _0x289ef2 = _0xfc753, _0x496b94;
        _0x496b94 = '\x75\x6e\x6b\x6e\x6f\x77\x6e', !SceneManager[_0x289ef2(0x1af)](Scene_Map) && (_0x496b94 = _0x289ef2(0x184)), SceneManager[_0x289ef2(0x1af)](Scene_Battle) && (_0x496b94 = _0x289ef2(0x164)), SceneManager[_0x289ef2(0x1af)](Scene_NetChatInput) && ('\x56\x63\x6e\x6c\x74' === _0x289ef2(0x168) ? _0x221679 = '\x74\x72\x61\x64\x65' : _0x496b94 = '\x63\x68\x61\x74'), SceneManager['\x69\x73\x4e\x65\x78\x74\x53\x63\x65\x6e\x65'](Scene_NetworkInGameTrade) && (_0x496b94 = _0x289ef2(0x1a9)), ANNetwork[_0x289ef2(0x15a)](NMS['\x47\x61\x6d\x65'](_0x289ef2(0x1a2), _0x496b94));
    }, _0x5d765f[_0xfc753(0x124)] = function (_0x1c134b) {
        var _0x320cb2 = _0xfc753, _0x17b6a3;
        _0x17b6a3 = {
            '\x75\x6e\x69\x71\x75\x65\x53\x61\x76\x65\x49\x44': $gameTemp[_0x320cb2(0x182)],
            '\x73\x61\x76\x65\x66\x69\x6c\x65\x49\x64': _0x1c134b
        }, ANNetwork[_0x320cb2(0x15a)](NMS[_0x320cb2(0x116)](_0x320cb2(0x109), _0x17b6a3));
    }, _0x5d765f[_0xfc753(0x17a)] = function () {
        var _0x31f785 = _0xfc753;
        if (_0x31f785(0x186) !== _0x31f785(0x186))
            return null;
        else
            ANNetwork[_0x31f785(0x15a)](NMS[_0x31f785(0x116)](_0x31f785(0x170), this[_0x31f785(0x1b0)]()));
    }, _0x5d765f['\x73\x65\x6e\x64\x4d\x79\x43\x68\x61\x74\x4d\x65\x73\x73\x61\x67\x65'] = function (_0x539c5e, _0x7ed658) {
        var _0x1a89e2 = _0xfc753;
        this[_0x1a89e2(0xfe)](_0x539c5e, this[_0x1a89e2(0x1b0)](), _0x7ed658);
    }, _0x5d765f[_0xfc753(0xfe)] = function (_0x34d60c, _0x64d120, _0x46a414) {
        var _0x5977e8 = _0xfc753;
        if (_0x5977e8(0xfc) === _0x5977e8(0xfc)) {
            var _0x1f97bd;
            _0x1f97bd = ANET['\x55\x74\x69\x6c\x73'][_0x5977e8(0x142)](_0x34d60c, _0x64d120, _0x46a414), ANNetwork[_0x5977e8(0x12d)](NMS[_0x5977e8(0x116)](_0x5977e8(0x15f), _0x1f97bd), function () {
                var _0x1597d8 = _0x5977e8;
                return _0x1597d8(0x133) !== _0x1597d8(0x133) ? _0x5afafc['\x61\x63\x74\x6f\x72'](_0xc0905f[_0x1597d8(0x11b)]) : ANET['\x55\x49']['\x61\x64\x64\x4d\x65\x73\x73\x61\x67\x65\x54\x6f\x43\x68\x61\x74'](_0x1f97bd);
            });
        } else {
            var _0x5d2c8a;
            _0x5d2c8a = this['\x70\x6c\x61\x79\x65\x72\x73\x44\x61\x74\x61']['\x66\x69\x6e\x64'](function (_0x26cf1f) {
                return _0x26cf1f['\x69\x64'] === _0x1bf919;
            });
            if (_0x5d2c8a != null)
                return _0x5d2c8a;
            else
                _0x7e4641['\x77'](_0x5977e8(0x1a6) + _0x1408c5 + '\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64\x21');
            return null;
        }
    }, _0x5d765f[_0xfc753(0x1b5)] = function (_0x3d4f0a, _0x1cf5e1) {
        var _0x46b613 = _0xfc753;
        ANClientResponceManager[_0x46b613(0x139)](NMS[_0x46b613(0x116)]('\x73\x74\x61\x72\x74\x65\x64\x52\x6f\x6f\x6d\x47\x61\x6d\x65\x44\x61\x74\x61\x52\x65\x71\x75\x65\x73\x74'), _0x3d4f0a, _0x1cf5e1, 0x1388, '\x4a\x6f\x69\x6e\x69\x6e\x67\x20\x74\x6f\x20\x74\x68\x65\x20\x67\x61\x6d\x65\x2e\x2e\x2e');
    }, _0x5d765f[_0xfc753(0xfb)] = function (_0x4a3dbd) {
        var _0x432dde = _0xfc753;
        if (_0x432dde(0x10f) === _0x432dde(0x13e))
            this[_0x432dde(0x103)]();
        else {
            var _0x486056, _0x540019;
            try {
                return _0x540019 = DataManager[_0x432dde(0xff)](), StorageManager[_0x432dde(0x136)](_0x540019)[_0x432dde(0x1b6)](function () {
                    var _0x5a51b3 = _0x432dde;
                    if ('\x4e\x47\x56\x4c\x68' === _0x5a51b3(0x192))
                        return ANNetwork[_0x5a51b3(0x15a)](NMS[_0x5a51b3(0x116)](_0x5a51b3(0x113), {
                            '\x77\x68\x6f\x52\x65\x71\x75\x65\x73\x74\x49\x64': _0x4a3dbd,
                            '\x67\x61\x6d\x65\x44\x61\x74\x61': $gameTemp[_0x5a51b3(0x165)]
                        })), $gameTemp[_0x5a51b3(0x165)] = null;
                    else
                        this[_0x5a51b3(0x14a)](), this['\x5f\x73\x68\x6f\x75\x6c\x64\x57\x61\x69\x74\x50\x6c\x61\x79\x65\x72\x4f\x6e\x53\x61\x6d\x65\x4d\x61\x70'] = ![], this[_0x5a51b3(0x15d)] === !![] && this[_0x5a51b3(0x103)]();
                });
            } catch (_0x3dba6a) {
                return _0x486056 = _0x3dba6a, KDCore[_0x432dde(0x12e)](_0x486056);
            }
        }
    }, _0x5d765f['\x73\x65\x6e\x64\x4a\x6f\x69\x6e\x65\x64\x54\x6f\x53\x74\x61\x72\x74\x65\x64\x47\x61\x6d\x65'] = function () {
        var _0x41af97 = _0xfc753, _0x4c974c;
        try {
            return ANNetwork[_0x41af97(0x15a)](NMS[_0x41af97(0x116)](_0x41af97(0x108)));
        } catch (_0xea4141) {
            return _0x4c974c = _0xea4141, KDCore[_0x41af97(0x12e)](_0x4c974c);
        }
    }, _0x5d765f[_0xfc753(0x102)] = function (_0x4adfcd, _0x5a8426) {
        var _0x75f0d3 = _0xfc753, _0x62ac4c;
        if (this[_0x75f0d3(0x12a)]())
            _0x75f0d3(0x16b) !== _0x75f0d3(0x11d) ? (_0x62ac4c = this['\x67\x65\x74\x50\x6c\x61\x79\x65\x72\x44\x61\x74\x61\x42\x79\x49\x64'](_0x4adfcd), _0x62ac4c != null && (_0x75f0d3(0x13b) === _0x75f0d3(0x13b) ? _0x62ac4c[_0x75f0d3(0x12c)] = _0x5a8426 : _0x40356a[_0x75f0d3(0x196)][_0x75f0d3(0x1ab)](_0x3a2bef['\x61\x63\x74\x6f\x72\x49\x64']))) : (this[_0x75f0d3(0x1b8)] = [], this[_0x75f0d3(0x1b8)][_0x75f0d3(0x1ab)](_0x2b2e20[_0x75f0d3(0x19a)]()));
        else {
        }
    }, _0x5d765f[_0xfc753(0x131)] = function (_0x20c261) {
        var _0x52f84e = _0xfc753, _0x4c264d;
        _0x4c264d = this[_0x52f84e(0x10c)](), this[_0x52f84e(0x1b8)] = _0x20c261, !this['\x67\x65\x74\x50\x6c\x61\x79\x65\x72\x44\x61\x74\x61\x42\x79\x49\x64'](ANNetwork['\x6d\x79\x49\x64']()) && this['\x70\x6c\x61\x79\x65\x72\x73\x44\x61\x74\x61'][_0x52f84e(0x1ab)](_0x4c264d);
    }, _0x5d765f['\x6f\x6e\x47\x61\x6d\x65\x50\x6c\x61\x79\x65\x72\x73'] = function (_0x16b548) {
        var _0x11e550 = _0xfc753;
        this[_0x11e550(0x131)](_0x16b548), this[_0x11e550(0x199)](), $gameMap[_0x11e550(0x1a1)]();
    }, _0x5d765f[_0xfc753(0x15c)] = function () {
        var _0x3eeb3f = _0xfc753;
        if (_0x3eeb3f(0x14c) !== _0x3eeb3f(0x14c))
            return null;
        else {
            var _0x5a07ce, _0x29d001, _0x442c56, _0x4e4ad0;
            $gameParty[_0x3eeb3f(0x196)] = [], _0x4e4ad0 = this['\x70\x6c\x61\x79\x65\x72\x73\x44\x61\x74\x61'];
            for (_0x5a07ce = 0x0, _0x29d001 = _0x4e4ad0[_0x3eeb3f(0x1aa)]; _0x5a07ce < _0x29d001; _0x5a07ce++) {
                _0x442c56 = _0x4e4ad0[_0x5a07ce], NetPlayerDataWrapper[_0x3eeb3f(0x11a)](_0x442c56) && $gameParty[_0x3eeb3f(0x196)][_0x3eeb3f(0x1ab)](_0x442c56[_0x3eeb3f(0x11b)]);
            }
            $gamePlayer[_0x3eeb3f(0x1b7)](), $gameMap[_0x3eeb3f(0x1a1)]();
        }
    }, _0x5d765f[_0xfc753(0x155)] = function () {
        var _0x52e616 = _0xfc753;
        if ('\x55\x44\x64\x6b\x77' === _0x52e616(0x150))
            return;
        else
            return this[_0x52e616(0x141)]();
    }, _0x5d765f[_0xfc753(0x105)] = function (_0x2d5be4) {
        var _0x4532cd = _0xfc753;
        if (_0x4532cd(0x140) === _0x4532cd(0x140)) {
            var _0x572c74;
            _0x4532cd(0x1a8)['\x70'](_0x2d5be4);
            if (_0x2d5be4 !== ANNetwork[_0x4532cd(0x159)]())
                return;
            ANET['\x50\x50'][_0x4532cd(0x114)]() ? this[_0x4532cd(0x12b)]() : this[_0x4532cd(0x15b)](), _0x572c74 = ANET['\x50\x50'][_0x4532cd(0x14b)](), _0x572c74 > 0x0 && $gameTemp[_0x4532cd(0x187)](_0x572c74);
        } else
            return _0x324ce3['\x6d\x61\x70\x49\x64'] === _0x36aa8e['\x6d\x61\x70\x49\x64']();
    };
}()), window[_0x1cf265(0x123)] = ANGameManager);

// Generated by CoffeeScript 2.6.1
// * Специальные методы передачи данных для патчей совместимости
ANET.CFIX = function() {};

(function() {
  var _;
  //@[DEFINES]
  _ = ANET.CFIX;
  _.onCustomCommand = function(name, data) {
    var e;
    try {
      if (!name.contains("CFIX")) {
        return;
      }
      return this.processCustomCommand(name, data);
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  };
  _.send = function(name, data) {
    var e;
    if (!ANNetwork.isConnected()) {
      return;
    }
    // * Внешняя команда была, т.е. не отправляем снова, чтобы не было stackOverflow
    if ($gameTemp._netzCfixLocalOnly === true) {
      $gameTemp._netzCfixLocalOnly = false;
      return;
    }
    try {
      console.log("NETZ CFIX: SEND CUSTOM COMMAND: " + name);
      name = "CFIX_" + name;
      data.myId = ANNetwork.myId();
      nAPI.sendCustomCommand(name, data);
    } catch (error) {
      e = error;
      KDCore.warning(e);
    }
  };
  _.isCommandFromThisClient = function(data) {
    if (data == null) {
      // * true в случае ошибок, чтобы не выполнять комманду
      return true;
    }
    if (data.myId == null) {
      return true;
    }
    return data.myId === ANNetwork.myId();
  };
  _.processCustomCommand = function(name, data) {
    var cmd, e;
    try {
      // * Только другие участники получают команду
      if (this.isCommandFromThisClient(data)) {
        return;
      }
      name = name.replace("CFIX_", "");
      console.log("NETZ CFIX: ON CUSTOM COMMAND: " + name);
      cmd = "on_" + name;
      if (ANET.CFIX[cmd] != null) {
        console.log("...execute...");
        ANET.CFIX[cmd](data);
      }
    } catch (error) {
      e = error;
      KDCore.warning(e);
    }
  };
  _.callLocalOnly = function(method) {
    var e;
    try {
      $gameTemp._netzCfixLocalOnly = true;
      if (method == null) {
        return;
      }
      method();
    } catch (error) {
      e = error;
      KDCore.warning(e);
    }
  };
})();


// Generated by CoffeeScript 2.6.1
//@[GLOBAL]
//?[STORABLE]
var DataObserver;

DataObserver = class DataObserver {
  constructor(_checkTime = 0, _instante = false) {
    this._checkTime = _checkTime;
    this._instante = _instante;
    this._fields = {};
    this._isDataChanged = false;
    this._isShouldSkipCheck = false;
    this._timer = 0;
    return;
  }

  // * отправка без проверки изменений (по таймеру, если задан)
  setInstanteMode() {
    return this._instante = true;
  }

  // * проверка изменений (по таймеру, если задан)
  setCheckMode() {
    return this._instante = false;
  }

  // * не проверять изменения, устанавливать флаг _isDataChanged сразу (по истечению таймера)
  setCheckInterval(_checkTime) {
    this._checkTime = _checkTime;
  }

  // * Пропустить проверку данных, например когда данные пришли от сервера
  skip() {
    return this._isShouldSkipCheck = true;
  }

  addFields(obj, fieldsList) {
    var f, i, len;
    for (i = 0, len = fieldsList.length; i < len; i++) {
      f = fieldsList[i];
      this.readField(obj, f);
    }
  }

  removeFields(fieldsList) {
    var f, i, len, results;
    results = [];
    for (i = 0, len = fieldsList.length; i < len; i++) {
      f = fieldsList[i];
      results.push(delete this._fields[f]);
    }
    return results;
  }

  // * Прочитать все значения с объекта
  refreshAll(obj) {
    var f;
    for (f in this._fields) {
      this.readField(obj, f);
    }
    return this._isDataChanged = false;
  }

  readField(obj, field) {
    return this._fields[field] = obj[field];
  }

  check(obj) {
    var f;
    // * Если данные изменены, но зачем снова проверять?
    // * Всё равно не отслеживается какое именно поле было изменнено
    if (this.isDataChanged()) {
      return;
    }
    this._timer--;
    // * Если таймер, то ждём, не проверяем
    if (this._timer > 0) {
      return;
    }
    this._timer = this._checkTime;
    // * Если надо пропустить проверку, то пропускаем
    if (this._isShouldSkipCheck === true) {
      this._isShouldSkipCheck = false;
      return;
    }
    // * Если постоянное обновление, то сразу флаг и пропускаем проверку
    if (this._instante === true) {
      this._isDataChanged = true;
      return;
    }
    for (f in this._fields) {
      if (obj[f] !== this._fields[f]) {
        this._isDataChanged = true;
        break;
      }
    }
  }

  isDataChanged() {
    return this._isDataChanged === true;
  }

  // * Получить данные всех полей для отправки на сервер
  getDataForNetwork(obj) {
    this.refreshAll(obj);
    return this._fields;
  }

  // * Установить данные всех полей, когда пришли с сервера
  setDataFromNetwork(obj, observerData) {
    var f;
    for (f in this._fields) {
      obj[f] = observerData[f];
    }
    this.refreshAll(obj);
  }

};


function _0x4e45(_0xfef28, _0x2be5d6) {
    var _0x429395 = _0x4293();
    return _0x4e45 = function (_0x4e4531, _0x23f366) {
        _0x4e4531 = _0x4e4531 - 0x1a9;
        var _0x2a2286 = _0x429395[_0x4e4531];
        return _0x2a2286;
    }, _0x4e45(_0xfef28, _0x2be5d6);
}
var _0x4e14f7 = _0x4e45;
(function (_0x27115b, _0x5d30a6) {
    var _0x2eecf5 = _0x4e45, _0x23943c = _0x27115b();
    while (!![]) {
        try {
            var _0x528a6e = -parseInt(_0x2eecf5(0x214)) / 0x1 + parseInt(_0x2eecf5(0x223)) / 0x2 + parseInt(_0x2eecf5(0x1c6)) / 0x3 * (parseInt(_0x2eecf5(0x237)) / 0x4) + parseInt(_0x2eecf5(0x1cf)) / 0x5 * (parseInt(_0x2eecf5(0x20e)) / 0x6) + parseInt(_0x2eecf5(0x1b4)) / 0x7 * (-parseInt(_0x2eecf5(0x1de)) / 0x8) + parseInt(_0x2eecf5(0x20f)) / 0x9 * (parseInt(_0x2eecf5(0x1fa)) / 0xa) + -parseInt(_0x2eecf5(0x1ce)) / 0xb;
            if (_0x528a6e === _0x5d30a6)
                break;
            else
                _0x23943c['push'](_0x23943c['shift']());
        } catch (_0x4e5b64) {
            _0x23943c['push'](_0x23943c['shift']());
        }
    }
}(_0x4293, 0xad672), window[_0x4e14f7(0x1c7)] = function () {
}, (function () {
    var _0x2078fe = _0x4e14f7, _0x166cdc, _0xbc7c4b;
    _0x166cdc = new KDCore[(_0x2078fe(0x202))](_0x2078fe(0x21c)), _0x166cdc[_0x2078fe(0x1dc)](KDCore[_0x2078fe(0x227)][_0x2078fe(0x211)]['\x72\x65\x41\x6c\x70\x68\x61'](0xc8), KDCore[_0x2078fe(0x227)][_0x2078fe(0x1b0)]['\x67\x65\x74\x4c\x69\x67\x68\x74\x65\x73\x74\x43\x6f\x6c\x6f\x72'](0xc8)), _0x166cdc['\x6f\x6e'](), _0xbc7c4b = window[_0x2078fe(0x1c7)], _0xbc7c4b[_0x2078fe(0x1d4)] = function (_0x1977de) {
        var _0x3f5c3a = _0x2078fe;
        this[_0x3f5c3a(0x1ab)] = _0x1977de;
    }, _0xbc7c4b[_0x2078fe(0x217)] = function () {
        var _0x4309c5 = _0x2078fe;
        _0x166cdc['\x70'](_0x4309c5(0x25b)), ANNetwork[_0x4309c5(0x204)](NMS[_0x4309c5(0x1d6)](_0x4309c5(0x1d7), ANET[_0x4309c5(0x1e1)]), function (_0x12526a) {
            var _0x5a8c19 = _0x4309c5;
            if (_0x5a8c19(0x1f0) !== '\x70\x4a\x69\x68\x6a') {
                if (!_0x12526a)
                    return _0x166cdc['\x70'](_0x5a8c19(0x1cd) + ANET[_0x5a8c19(0x1e1)] + _0x5a8c19(0x1e4)), window[_0x5a8c19(0x1e9)]('\x53\x65\x72\x76\x65\x72\x20\x76\x65\x72\x73\x69\x6f\x6e\x20\x69\x73\x20\x6f\x75\x74\x64\x61\x74\x65\x64\x20\x66\x6f\x72\x20\x74\x68\x69\x73\x20\x41\x6c\x70\x68\x61\x20\x4e\x45\x54\x20\x5a\x20\x76\x65\x72\x73\x69\x6f\x6e\x20' + ANET['\x56\x65\x72\x73\x69\x6f\x6e'] / 0x64), ANNetwork[_0x5a8c19(0x1be)]();
            } else {
                var _0x291a55;
                try {
                    return '\x53\x48\x41\x52\x45\x44\x20\x45\x56\x45\x4e\x54\x20\x49\x4e'['\x70'](), _0x48ffb9[_0x5a8c19(0x254)](_0x3392fb);
                } catch (_0x50ceae) {
                    return _0x291a55 = _0x50ceae, _0x4e792d[_0x5a8c19(0x233)](_0x5a8c19(0x1f5), _0x291a55);
                }
            }
        });
        if (this['\x6f\x6e\x43\x6f\x6e\x6e\x65\x63\x74\x43\x61\x6c\x6c\x62\x61\x63\x6b'] != null)
            return this[_0x4309c5(0x1ab)](0x1);
    }, _0xbc7c4b['\x6f\x6e\x44\x69\x73\x63\x6f\x6e\x6e\x65\x63\x74'] = function () {
        var _0x5591da = _0x2078fe, _0x3b5fe9;
        return _0x166cdc['\x70'](_0x5591da(0x215)), (_0x3b5fe9 = SceneManager[_0x5591da(0x25f)]) != null && _0x3b5fe9['\x6f\x6e\x4c\x6f\x73\x74\x43\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e'](), HUIManager[_0x5591da(0x1c2)]('\x44\x69\x73\x63\x6f\x6e\x6e\x65\x63\x74\x65\x64\x20\x66\x72\x6f\x6d\x20\x73\x65\x72\x76\x65\x72'), ANNetwork[_0x5591da(0x1be)]();
    }, _0xbc7c4b[_0x2078fe(0x1f2)] = function () {
        var _0x36de00 = _0x2078fe;
        return _0x36de00(0x1cb) === _0x36de00(0x243) ? (_0x40519e = _0x42c874, _0x3573dd['\x77\x61\x72\x6e']('\x65\x76\x65\x6e\x74\x5f\x6d\x61\x70\x5f\x70\x6c\x61\x79\x65\x72\x4d\x6f\x76\x65', _0x387a83)) : (_0x166cdc['\x70'](_0x36de00(0x1aa)), this['\x6f\x6e\x43\x6f\x6e\x6e\x65\x63\x74\x43\x61\x6c\x6c\x62\x61\x63\x6b'] != null && this[_0x36de00(0x1ab)](0x0), ANNetwork[_0x36de00(0x1be)]());
    }, _0xbc7c4b[_0x2078fe(0x1c5)] = function (_0x358279) {
        return NetClientMethodsManager['\x65\x76\x65\x6e\x74\x5f' + _0x358279] != null;
    }, _0xbc7c4b[_0x2078fe(0x216)] = function (_0x263eff, _0x301eae) {
        var _0x5e790f = _0x2078fe;
        if (_0x5e790f(0x1fd) !== _0x5e790f(0x1fd))
            return _0x46b4f8[_0x5e790f(0x1ad)](_0xa8487b, _0xa3e965);
        else {
            var _0x1a64fc;
            _0x1a64fc = [
                '\x67\x61\x6d\x65\x5f\x6f\x62\x73\x65\x72\x76\x65\x72\x44\x61\x74\x61',
                _0x5e790f(0x1eb),
                _0x5e790f(0x255),
                _0x5e790f(0x1f1),
                _0x5e790f(0x22a)
            ][_0x5e790f(0x24e)](_0x263eff);
            if (!_0x1a64fc) {
                if (_0x5e790f(0x1b1) === _0x5e790f(0x1b1))
                    _0x166cdc['\x70'](_0x5e790f(0x206) + _0x263eff);
                else
                    return _0x3ea8f0[_0x5e790f(0x1ae)](_0x4ef4b1['\x69\x64'], _0x55f7e5[_0x5e790f(0x20b)]);
            }
            NetClientMethodsManager['\x65\x76\x65\x6e\x74\x5f' + _0x263eff](_0x301eae);
            if (_0x263eff === '\x63\x6f\x6d\x6d\x6f\x6e\x5f\x66\x6f\x72\x43\x6c\x69\x65\x6e\x74\x73' && _0x301eae != null && String[_0x5e790f(0x20d)](_0x301eae[_0x5e790f(0x1ca)]))
                this[_0x5e790f(0x24a)](_0x263eff + '\x5f' + _0x301eae[_0x5e790f(0x1ca)]);
            else {
                if (_0x5e790f(0x24d) === _0x5e790f(0x25a)) {
                    var _0x22a830;
                    try {
                        return _0x5e790f(0x245)['\x70'](), _0x2890cc['\x6f\x6e\x52\x65\x67\x69\x73\x74\x65\x72\x4f\x6e\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74\x52\x65\x73\x70\x6f\x6e\x73\x65'](_0x5c4e8b);
                    } catch (_0x5be316) {
                        return _0x22a830 = _0x5be316, _0x3e8ea8['\x77\x61\x72\x6e'](_0x5e790f(0x22b), _0x22a830);
                    }
                } else
                    this[_0x5e790f(0x24a)](_0x263eff);
            }
            !_0x1a64fc && _0x166cdc['\x70'](_0x5e790f(0x205) + _0x263eff);
        }
    }, _0xbc7c4b['\x63\x61\x6c\x6c\x53\x63\x65\x6e\x65\x43\x61\x6c\x6c\x62\x61\x63\x6b'] = function (_0x4fb027) {
        var _0x2ba24b = _0x2078fe, _0x32eb2b;
        return (_0x32eb2b = SceneManager[_0x2ba24b(0x25f)]) != null ? _0x32eb2b[_0x2ba24b(0x1c4)](_0x4fb027) : void 0x0;
    }, _0xbc7c4b['\x65\x76\x65\x6e\x74\x5f\x6c\x6f\x62\x62\x79\x5f\x63\x68\x61\x6e\x67\x65\x50\x6c\x61\x79\x65\x72\x4e\x61\x6d\x65'] = function (_0x42fd90) {
        var _0x2ef349 = _0x2078fe;
        return ANGameManager[_0x2ef349(0x241)](_0x42fd90[_0x2ef349(0x1b3)], _0x42fd90[_0x2ef349(0x1c0)]);
    }, _0xbc7c4b[_0x2078fe(0x1d8)] = function (_0x454237) {
        var _0x43bfab = _0x2078fe;
        if (SceneManager[_0x43bfab(0x1ee)]())
            return;
        return ANGameManager[_0x43bfab(0x234)](_0x454237['\x70\x6c\x61\x79\x65\x72\x73\x44\x61\x74\x61']), ANNetwork[_0x43bfab(0x1e5)](_0x454237[_0x43bfab(0x212)]);
    }, _0xbc7c4b[_0x2078fe(0x213)] = function (_0x57a3a9) {
        var _0x4855c3 = _0x2078fe;
        return ANNetwork[_0x4855c3(0x1e7)]();
    }, _0xbc7c4b[_0x2078fe(0x207)] = function () {
        var _0x5f7caa = _0x2078fe;
        return ANGameManager['\x73\x65\x74\x75\x70\x4e\x65\x77\x4e\x65\x74\x77\x6f\x72\x6b\x47\x61\x6d\x65'](), _0x5f7caa(0x235)['\x70']();
    }, _0xbc7c4b['\x65\x76\x65\x6e\x74\x5f\x67\x61\x6d\x65\x5f\x70\x6c\x61\x79\x65\x72\x73\x44\x61\x74\x61'] = function (_0x26fc6c) {
        var _0x3bd39 = _0x2078fe;
        return ANGameManager[_0x3bd39(0x1f4)](_0x26fc6c), '\x47\x41\x4d\x45\x20\x50\x4c\x41\x59\x45\x52\x53\x20\x44\x41\x54\x41\x20\x52\x45\x46\x52\x45\x53\x48\x45\x44'['\x70']();
    }, _0xbc7c4b[_0x2078fe(0x1bc)] = function () {
        var _0x385308 = _0x2078fe;
        if (_0x385308(0x230) === _0x385308(0x230))
            return ANGameManager[_0x385308(0x262)](), _0x385308(0x228)['\x70']();
        else {
            var _0x9b9614;
            try {
                return _0x4348b3[_0x385308(0x1ae)](_0x1eac24['\x69\x64'], _0x26757c[_0x385308(0x20b)]);
            } catch (_0xcc8d77) {
                return _0x9b9614 = _0xcc8d77, _0x1eeab0['\x77\x61\x72\x6e'](_0x385308(0x1bf), _0x9b9614);
            }
        }
    }, _0xbc7c4b[_0x2078fe(0x23f)] = function (_0x4d7ff5) {
        var _0x953b28 = _0x2078fe;
        if (_0x953b28(0x20a) !== _0x953b28(0x24c)) {
            var _0x5c125a;
            try {
                return _0x953b28(0x1b9) !== '\x6f\x63\x76\x52\x6b' ? ANSyncDataManager[_0x953b28(0x200)](_0x4d7ff5['\x69\x64'], _0x4d7ff5[_0x953b28(0x238)], _0x4d7ff5[_0x953b28(0x20b)]) : (_0x97455d = _0x3f8eb7, _0x1f3e8e[_0x953b28(0x233)](_0x953b28(0x23f), _0x5db31f));
            } catch (_0x9f0faa) {
                if (_0x953b28(0x22c) === '\x58\x4f\x43\x4d\x56')
                    this['\x6f\x6e\x43\x6f\x6e\x6e\x65\x63\x74\x43\x61\x6c\x6c\x62\x61\x63\x6b'](0x0);
                else
                    return _0x5c125a = _0x9f0faa, console['\x77\x61\x72\x6e'](_0x953b28(0x23f), _0x5c125a);
            }
        } else
            return _0x710ef[_0x953b28(0x1c8)](_0x4d22c4['\x69\x6e\x70\x75\x74\x41\x63\x74\x6f\x72\x49\x64'], _0x399687[_0x953b28(0x244)]);
    }, _0xbc7c4b[_0x2078fe(0x1bb)] = function (_0x1d4d8c) {
        var _0x21646e = _0x2078fe, _0x5b372d;
        try {
            return ANSyncDataManager['\x6f\x6e\x56\x61\x72\x69\x61\x62\x6c\x65\x56\x61\x6c\x75\x65'](_0x1d4d8c['\x69\x64'], _0x1d4d8c[_0x21646e(0x20b)]);
        } catch (_0x42ca34) {
            return _0x5b372d = _0x42ca34, console[_0x21646e(0x233)](_0x21646e(0x1bb), _0x5b372d);
        }
    }, _0xbc7c4b[_0x2078fe(0x1bf)] = function (_0x166aae) {
        var _0x1d2280 = _0x2078fe;
        if (_0x1d2280(0x1b2) !== '\x58\x78\x68\x6a\x52') {
            var _0x43c640;
            try {
                return _0x1d2280(0x251) !== '\x71\x6f\x46\x69\x6b' ? this['\x6f\x6e\x43\x6f\x6e\x6e\x65\x63\x74\x43\x61\x6c\x6c\x62\x61\x63\x6b'](0x1) : ANSyncDataManager['\x6f\x6e\x53\x77\x69\x74\x63\x68\x56\x61\x6c\x75\x65'](_0x166aae['\x69\x64'], _0x166aae[_0x1d2280(0x20b)]);
            } catch (_0x450b3d) {
                return _0x1d2280(0x1d0) === _0x1d2280(0x24f) ? ('\x53\x48\x41\x52\x45\x44\x20\x45\x56\x45\x4e\x54\x20\x43\x41\x4e\x20\x43\x4f\x4e\x54\x49\x4e\x55\x45'['\x70'](), _0x1c20a9[_0x1d2280(0x1f6)](_0x5f1410)) : (_0x43c640 = _0x450b3d, console[_0x1d2280(0x233)](_0x1d2280(0x1bf), _0x43c640));
            }
        } else
            return _0x1d2280(0x240)['\x70'](), {
                name: _0x2b5219,
                commonEventId: _0x16a0cf
            } = _0x167e03, typeof _0x4aed13 !== _0x1d2280(0x1c1) && _0x139135 !== null ? _0x469d6c[_0x1d2280(0x1f3)](_0x75e95b, _0x187646) : void 0x0;
    }, _0xbc7c4b[_0x2078fe(0x263)] = function (_0x47ab42) {
        var _0x36e5bb = _0x2078fe;
        if ('\x52\x45\x68\x46\x78' === '\x52\x45\x68\x46\x78') {
            var _0x51164a;
            try {
                return '\x45\x6f\x6d\x54\x65' !== _0x36e5bb(0x1fb) ? ($gameTemp[_0x36e5bb(0x25e)] = _0x47ab42[_0x36e5bb(0x260)], $gameSystem[_0x36e5bb(0x261)](), DataManager[_0x36e5bb(0x1f8)](_0x47ab42['\x73\x61\x76\x65\x66\x69\x6c\x65\x49\x64']), ANGameManager[_0x36e5bb(0x1b5)]()) : _0x2ba9f0[_0x36e5bb(0x222)]();
            } catch (_0x151f4b) {
                return '\x74\x49\x62\x70\x52' !== _0x36e5bb(0x257) ? (_0x51164a = _0x151f4b, console['\x77\x61\x72\x6e'](_0x36e5bb(0x263), _0x51164a)) : (_0x36e5bb(0x258)['\x70'](), _0x143794[_0x36e5bb(0x242)](_0x557ea9));
            }
        } else
            return _0x1a08bb = _0x329ea9, _0x299e49[_0x36e5bb(0x233)](_0x36e5bb(0x263), _0x315441);
    }, _0xbc7c4b['\x65\x76\x65\x6e\x74\x5f\x67\x61\x6d\x65\x5f\x73\x61\x76\x65\x44\x61\x74\x61\x43\x6f\x6d\x70\x6c\x65\x74\x65'] = function (_0x273cd2) {
        var _0x27c88f = _0x2078fe, _0x3f8399, _0x8ed2fb;
        try {
            if ($gameTemp[_0x27c88f(0x22d)] == null)
                return;
            return _0x8ed2fb = _0x273cd2, $gameTemp[_0x27c88f(0x22d)][_0x27c88f(0x1b7)](_0x8ed2fb, !![]);
        } catch (_0x5ed7ea) {
            return _0x3f8399 = _0x5ed7ea, console[_0x27c88f(0x233)]('\x65\x76\x65\x6e\x74\x5f\x67\x61\x6d\x65\x5f\x73\x61\x76\x65\x44\x61\x74\x61\x43\x6f\x6d\x70\x6c\x65\x74\x65', _0x3f8399);
        }
    }, _0xbc7c4b[_0x2078fe(0x1ba)] = function (_0x21d566) {
        var _0xf318dc = _0x2078fe, _0x975ae5, _0x57bbb7, _0x21f936;
        try {
            if ('\x6e\x64\x59\x4f\x6d' !== '\x67\x46\x6a\x56\x4a') {
                _0x21f936 = _0x21d566[_0xf318dc(0x21d)], _0x975ae5 = _0x21d566[_0xf318dc(0x1d1)];
                if (_0x975ae5 > 0x0) {
                    if (_0x21f936 != null && _0x21f936 === $gameMap['\x6d\x61\x70\x49\x64']())
                        return ANET['\x55\x49'][_0xf318dc(0x253)](_0x21d566);
                } else
                    return ANET['\x55\x49']['\x61\x64\x64\x4d\x65\x73\x73\x61\x67\x65\x54\x6f\x43\x68\x61\x74'](_0x21d566);
            } else {
                var _0x3455c8;
                try {
                    return _0x1d23d9[_0xf318dc(0x1d2)](_0x4e4dc3);
                } catch (_0x4dc7cb) {
                    return _0x3455c8 = _0x4dc7cb, _0xba7313[_0xf318dc(0x233)](_0xf318dc(0x22e), _0x3455c8);
                }
            }
        } catch (_0x6aa9aa) {
            return _0x57bbb7 = _0x6aa9aa, console['\x77\x61\x72\x6e'](_0xf318dc(0x1ba), _0x57bbb7);
        }
    }, _0xbc7c4b[_0x2078fe(0x20c)] = function (_0x45ed2d) {
        var _0x5aa2b7 = _0x2078fe, _0x36ff65;
        try {
            if (!ANNetwork[_0x5aa2b7(0x1fe)]())
                return;
            return ANGameManager['\x73\x65\x6e\x64\x53\x74\x61\x72\x74\x65\x64\x52\x6f\x6f\x6d\x44\x61\x74\x61\x52\x65\x73\x70\x6f\x6e\x65'](_0x45ed2d);
        } catch (_0x5e58df) {
            return _0x36ff65 = _0x5e58df, console['\x77\x61\x72\x6e']('\x65\x76\x65\x6e\x74\x5f\x67\x61\x6d\x65\x5f\x73\x74\x61\x72\x74\x65\x64\x52\x6f\x6f\x6d\x47\x61\x6d\x65\x44\x61\x74\x61\x52\x65\x71\x75\x65\x73\x74', _0x36ff65);
        }
    }, _0xbc7c4b['\x65\x76\x65\x6e\x74\x5f\x67\x61\x6d\x65\x5f\x73\x74\x61\x72\x74\x65\x64\x52\x6f\x6f\x6d\x47\x61\x6d\x65\x44\x61\x74\x61'] = function (_0x34c167) {
        var _0x1f0d4b = _0x2078fe, _0x350e06, _0x1cb3bb;
        try {
            return _0x1cb3bb = _0x1f0d4b(0x1e6), ANClientResponceManager[_0x1f0d4b(0x1ec)](_0x1cb3bb, _0x34c167);
        } catch (_0x1591af) {
            return _0x350e06 = _0x1591af, console[_0x1f0d4b(0x233)](_0x1f0d4b(0x20c), _0x350e06);
        }
    }, _0xbc7c4b[_0x2078fe(0x22e)] = function (_0x13069d) {
        var _0x58982f = _0x2078fe, _0x25939c;
        try {
            return _0x58982f(0x23c) === '\x51\x47\x52\x63\x72' ? _0x1ad4e0[_0x58982f(0x1c3)](_0x2dfdb3) : ANGameManager[_0x58982f(0x1d2)](_0x13069d);
        } catch (_0x3c48a8) {
            return _0x58982f(0x247) !== '\x68\x4a\x42\x46\x6c' ? (_0x5e0a4e = _0x4bc973, _0x5b4531[_0x58982f(0x233)](_0x58982f(0x1e8), _0x1bc402)) : (_0x25939c = _0x3c48a8, console[_0x58982f(0x233)]('\x65\x76\x65\x6e\x74\x5f\x67\x61\x6d\x65\x5f\x73\x6f\x6d\x65\x6f\x6e\x65\x4a\x6f\x69\x6e\x65\x64\x54\x6f\x53\x74\x61\x72\x74\x65\x64\x47\x61\x6d\x65', _0x25939c));
        }
    }, _0xbc7c4b[_0x2078fe(0x23a)] = function (_0x4cd1c0) {
        var _0xe18712 = _0x2078fe;
        if (_0xe18712(0x209) !== _0xe18712(0x224)) {
            var _0x498a55;
            try {
                return _0xe18712(0x1e2) !== '\x68\x70\x64\x6b\x46' ? ANPlayersManager[_0xe18712(0x25c)](_0x4cd1c0['\x69\x64'], _0x4cd1c0[_0xe18712(0x20b)]) : (_0x2716b0 = _0x4342f2, _0x1a6f98[_0xe18712(0x233)](_0xe18712(0x20c), _0x14c34f));
            } catch (_0x48003e) {
                return _0x498a55 = _0x48003e, console['\x77\x61\x72\x6e'](_0xe18712(0x23a), _0x498a55);
            }
        } else {
            var _0x268717;
            try {
                return _0x23c279[_0xe18712(0x21b)](_0x8b5446['\x69\x64'], _0x49c7c1[_0xe18712(0x21a)], _0x2bff3e[_0xe18712(0x20b)]);
            } catch (_0x2cb0c4) {
                return _0x268717 = _0x2cb0c4, _0x77eef0[_0xe18712(0x233)](_0xe18712(0x1ff), _0x268717);
            }
        }
    }, _0xbc7c4b['\x65\x76\x65\x6e\x74\x5f\x6d\x61\x70\x5f\x70\x6c\x61\x79\x65\x72\x4c\x6f\x63\x61\x74\x69\x6f\x6e'] = function (_0x21c407) {
        var _0x47ccda = _0x2078fe, _0xfda5b9;
        try {
            return ANPlayersManager[_0x47ccda(0x1bd)](_0x21c407['\x69\x64'], _0x21c407[_0x47ccda(0x20b)]);
        } catch (_0x58e661) {
            return _0xfda5b9 = _0x58e661, console[_0x47ccda(0x233)](_0x47ccda(0x231), _0xfda5b9);
        }
    }, _0xbc7c4b[_0x2078fe(0x218)] = function (_0x5d11d2) {
        var _0x45d84f = _0x2078fe, _0x478864;
        try {
            return ANMapManager['\x6f\x6e\x45\x76\x65\x6e\x74\x4d\x6f\x76\x65'](_0x5d11d2[_0x45d84f(0x21d)], _0x5d11d2['\x69\x64'], _0x5d11d2[_0x45d84f(0x20b)]);
        } catch (_0x30c510) {
            return _0x478864 = _0x30c510, console['\x77\x61\x72\x6e']('\x65\x76\x65\x6e\x74\x5f\x6d\x61\x70\x5f\x65\x76\x65\x6e\x74\x4d\x6f\x76\x65', _0x478864);
        }
    }, _0xbc7c4b[_0x2078fe(0x225)] = function (_0x62cb11) {
        var _0x5470c3 = _0x2078fe, _0x2178e0;
        try {
            if (_0x5470c3(0x1c9) !== _0x5470c3(0x1c9))
                return _0x3bf51a[_0x5470c3(0x259)](_0x458ba4[_0x5470c3(0x25d)], _0xb07c9e[_0x5470c3(0x249)]);
            else {
                if ($gameMap[_0x5470c3(0x21d)]() === _0x62cb11)
                    return _0x5470c3(0x220) !== _0x5470c3(0x1ed) ? ANMapManager['\x6f\x6e\x49\x6e\x69\x74\x69\x61\x6c\x4d\x61\x70\x53\x79\x6e\x63']() : _0x5dd72b[_0x5470c3(0x250)](_0x31f62f['\x69\x64'], _0x2b0a23['\x64\x61\x74\x61']);
            }
        } catch (_0x5e0464) {
            return _0x2178e0 = _0x5e0464, console[_0x5470c3(0x233)](_0x5470c3(0x218), _0x2178e0);
        }
    }, _0xbc7c4b['\x65\x76\x65\x6e\x74\x5f\x65\x76\x65\x6e\x74\x5f\x76\x69\x72\x74\x75\x61\x6c\x45\x76\x65\x6e\x74\x43\x6f\x6d\x6d\x61\x6e\x64'] = function (_0xd79a5d) {
        var _0x17e967 = _0x2078fe, _0x552d08;
        try {
            return ANInterpreterManager[_0x17e967(0x1c3)](_0xd79a5d);
        } catch (_0x3a5742) {
            return _0x552d08 = _0x3a5742, console[_0x17e967(0x233)](_0x17e967(0x1f9), _0x552d08);
        }
    }, _0xbc7c4b[_0x2078fe(0x1ff)] = function (_0x8e1e6a) {
        var _0x51f14a = _0x2078fe, _0x477f75;
        try {
            return ANBattleManager['\x6f\x6e\x42\x61\x74\x74\x6c\x65\x4d\x65\x74\x68\x6f\x64'](_0x8e1e6a['\x69\x64'], _0x8e1e6a[_0x51f14a(0x21a)], _0x8e1e6a[_0x51f14a(0x20b)]);
        } catch (_0x4adba4) {
            return _0x477f75 = _0x4adba4, console[_0x51f14a(0x233)](_0x51f14a(0x1ff), _0x477f75);
        }
    }, _0xbc7c4b[_0x2078fe(0x252)] = function (_0x1578d2) {
        var _0x3fe33c = _0x2078fe, _0x580da8;
        try {
            return ANBattleManager['\x6f\x6e\x42\x61\x74\x74\x6c\x65\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e'](_0x1578d2);
        } catch (_0x160be5) {
            if (_0x3fe33c(0x1da) !== '\x41\x4c\x49\x45\x55')
                return _0x580da8 = _0x160be5, console[_0x3fe33c(0x233)](_0x3fe33c(0x252), _0x580da8);
            else {
                var _0x1ce10d;
                try {
                    return _0x4178bc['\x6f\x6e\x4f\x62\x73\x65\x72\x76\x65\x72\x44\x61\x74\x61'](_0x341cb4['\x69\x64'], _0x3dafce[_0x3fe33c(0x238)], _0x1f6e9e[_0x3fe33c(0x20b)]);
                } catch (_0xebbe68) {
                    return _0x1ce10d = _0xebbe68, _0x53c717[_0x3fe33c(0x233)](_0x3fe33c(0x23f), _0x1ce10d);
                }
            }
        }
    }, _0xbc7c4b[_0x2078fe(0x210)] = function (_0x27f903) {
        var _0x365506 = _0x2078fe, _0x3db92f;
        try {
            return ANBattleManager[_0x365506(0x203)]();
        } catch (_0x5e2098) {
            return '\x62\x75\x71\x6e\x77' === _0x365506(0x1ef) ? _0x58cd7c[_0x365506(0x1db)](_0x15e2fe[_0x365506(0x21d)], _0x3a0efa['\x69\x64'], _0xc16642[_0x365506(0x20b)]) : (_0x3db92f = _0x5e2098, console[_0x365506(0x233)](_0x365506(0x246), _0x3db92f));
        }
    }, _0xbc7c4b['\x65\x76\x65\x6e\x74\x5f\x62\x61\x74\x74\x6c\x65\x5f\x6c\x6f\x67\x4d\x65\x73\x73\x61\x67\x65'] = function (_0x3a24c2) {
        var _0x156570 = _0x2078fe;
        if (_0x156570(0x239) !== '\x66\x49\x6d\x73\x75') {
            var _0x4bc31c;
            try {
                return ANBattleManager[_0x156570(0x23d)](_0x3a24c2[_0x156570(0x1ca)], _0x3a24c2[_0x156570(0x229)]);
            } catch (_0x465e5f) {
                return _0x4bc31c = _0x465e5f, console[_0x156570(0x233)]('\x65\x76\x65\x6e\x74\x5f\x62\x61\x74\x74\x6c\x65\x5f\x6c\x6f\x67\x4d\x65\x73\x73\x61\x67\x65', _0x4bc31c);
            }
        } else {
            if (!_0x3e2ff2[_0x156570(0x1fe)]())
                return;
            return _0x2674f8[_0x156570(0x256)](_0x2fb28b);
        }
    }, _0xbc7c4b['\x65\x76\x65\x6e\x74\x5f\x62\x61\x74\x74\x6c\x65\x5f\x69\x6e\x70\x75\x74'] = function (_0x37f1e3) {
        var _0x41d841 = _0x2078fe, _0x540016;
        try {
            return ANBattleManager[_0x41d841(0x259)](_0x37f1e3[_0x41d841(0x25d)], _0x37f1e3[_0x41d841(0x249)]);
        } catch (_0x420a1f) {
            return _0x540016 = _0x420a1f, console[_0x41d841(0x233)](_0x41d841(0x1dd), _0x540016);
        }
    }, _0xbc7c4b['\x65\x76\x65\x6e\x74\x5f\x62\x61\x74\x74\x6c\x65\x5f\x69\x6e\x70\x75\x74\x41\x63\x74\x69\x6f\x6e'] = function (_0x572f13) {
        var _0x33717a = _0x2078fe;
        if ('\x72\x54\x4a\x70\x4f' === _0x33717a(0x21e))
            return _0x356bc1['\x55\x49'][_0x33717a(0x253)](_0x15f64a);
        else {
            var _0xa7c047;
            try {
                return ANBattleManager['\x6f\x6e\x42\x61\x74\x74\x6c\x65\x49\x6e\x70\x75\x74\x41\x63\x74\x69\x6f\x6e'](_0x572f13[_0x33717a(0x249)], _0x572f13[_0x33717a(0x244)]);
            } catch (_0x995814) {
                return _0x33717a(0x1ea) === '\x64\x75\x71\x50\x75' ? (_0x3a2c1d = _0x5bd396, _0x361d66[_0x33717a(0x233)]('\x65\x76\x65\x6e\x74\x5f\x6d\x61\x70\x5f\x70\x6c\x61\x79\x65\x72\x4c\x6f\x63\x61\x74\x69\x6f\x6e', _0x4d3f98)) : (_0xa7c047 = _0x995814, console[_0x33717a(0x233)](_0x33717a(0x1b6), _0xa7c047));
            }
        }
    }, _0xbc7c4b['\x65\x76\x65\x6e\x74\x5f\x62\x61\x74\x74\x6c\x65\x5f\x73\x65\x72\x76\x65\x72\x42\x61\x74\x74\x6c\x65\x44\x61\x74\x61'] = function (_0x12e7b7) {
        var _0x416106 = _0x2078fe;
        if (_0x416106(0x24b) === '\x73\x69\x50\x6f\x44') {
            var _0x413ea8;
            try {
                return ANBattleManager[_0x416106(0x236)](_0x12e7b7);
            } catch (_0x4d3c76) {
                return _0x413ea8 = _0x4d3c76, console[_0x416106(0x233)](_0x416106(0x1df), _0x413ea8);
            }
        } else
            this[_0x416106(0x24a)](_0x410c1d + '\x5f' + _0x3349e6[_0x416106(0x1ca)]);
    }, _0xbc7c4b[_0x2078fe(0x1f5)] = function (_0x160f3e) {
        var _0x22018d = _0x2078fe, _0x5564fe;
        try {
            return '\x53\x48\x41\x52\x45\x44\x20\x45\x56\x45\x4e\x54\x20\x49\x4e'['\x70'](), ANInterpreterManager['\x6f\x6e\x52\x65\x67\x69\x73\x74\x65\x72\x4f\x6e\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74\x52\x65\x71\x75\x65\x73\x74'](_0x160f3e);
        } catch (_0x205b33) {
            return _0x5564fe = _0x205b33, console[_0x22018d(0x233)](_0x22018d(0x1f5), _0x5564fe);
        }
    }, _0xbc7c4b[_0x2078fe(0x22b)] = function (_0x359341) {
        var _0x154403 = _0x2078fe, _0x1f0a30;
        try {
            if ('\x45\x65\x44\x4d\x4b' !== _0x154403(0x1d3))
                return _0x154403(0x245)['\x70'](), ANInterpreterManager[_0x154403(0x1d5)](_0x359341);
            else {
                if (_0x182a6a['\x6e\x53\x61\x76\x65\x44\x61\x74\x61'] == null)
                    return;
                return _0x2ae113 = _0x16fd7c, _0x267f85[_0x154403(0x22d)][_0x154403(0x1b7)](_0x11966b, !![]);
            }
        } catch (_0x45400f) {
            return _0x1f0a30 = _0x45400f, console[_0x154403(0x233)](_0x154403(0x22b), _0x1f0a30);
        }
    }, _0xbc7c4b['\x65\x76\x65\x6e\x74\x5f\x65\x76\x65\x6e\x74\x5f\x73\x68\x61\x72\x65\x64\x43\x61\x6e\x43\x6f\x6e\x74\x69\x6e\x75\x65'] = function (_0x517448) {
        var _0x1544ec = _0x2078fe, _0x17f9d9;
        try {
            return _0x1544ec(0x23b)['\x70'](), ANInterpreterManager[_0x1544ec(0x1f6)](_0x517448);
        } catch (_0x173a46) {
            if (_0x1544ec(0x1e0) !== '\x67\x56\x44\x6f\x58') {
                var _0x3ac549, _0x5243c8;
                try {
                    return _0x5243c8 = '\x67\x61\x6d\x65\x5f\x73\x74\x61\x72\x74\x65\x64\x52\x6f\x6f\x6d\x47\x61\x6d\x65\x44\x61\x74\x61\x52\x65\x71\x75\x65\x73\x74', _0x46bcc2['\x6f\x6e\x52\x65\x73\x70\x6f\x6e\x63\x65\x52\x65\x63\x65\x69\x76\x65\x64'](_0x5243c8, _0x37f257);
                } catch (_0x2e9a2a) {
                    return _0x3ac549 = _0x2e9a2a, _0x2fc668['\x77\x61\x72\x6e'](_0x1544ec(0x20c), _0x3ac549);
                }
            } else
                return _0x17f9d9 = _0x173a46, console[_0x1544ec(0x233)]('\x65\x76\x65\x6e\x74\x5f\x65\x76\x65\x6e\x74\x5f\x73\x68\x61\x72\x65\x64\x43\x61\x6e\x43\x6f\x6e\x74\x69\x6e\x75\x65', _0x17f9d9);
        }
    }, _0xbc7c4b['\x65\x76\x65\x6e\x74\x5f\x65\x76\x65\x6e\x74\x5f\x73\x68\x61\x72\x65\x64\x46\x6f\x72\x63\x65\x43\x61\x6e\x63\x65\x6c'] = function (_0x2b271e) {
        var _0x1a1417 = _0x2078fe;
        if ('\x57\x47\x4b\x71\x74' !== _0x1a1417(0x201))
            return _0x25c337['\x70'](_0x1a1417(0x1aa)), this[_0x1a1417(0x1ab)] != null && this[_0x1a1417(0x1ab)](0x0), _0x510ac2['\x73\x74\x6f\x70']();
        else {
            var _0x1dfbf1;
            try {
                if (_0x1a1417(0x1ac) === _0x1a1417(0x1ac))
                    return _0x1a1417(0x258)['\x70'](), ANInterpreterManager[_0x1a1417(0x242)](_0x2b271e);
                else {
                    var _0x476695;
                    try {
                        return _0x4b5863[_0x1a1417(0x203)]();
                    } catch (_0xe4bf5) {
                        return _0x476695 = _0xe4bf5, _0x23d0ed['\x77\x61\x72\x6e']('\x65\x76\x65\x6e\x74\x5f\x62\x61\x74\x74\x6c\x65\x4d\x65\x74\x68\x6f\x64\x52\x65\x63\x65\x69\x76\x65\x64', _0x476695);
                    }
                }
            } catch (_0x27c8ea) {
                return _0x1dfbf1 = _0x27c8ea, console[_0x1a1417(0x233)](_0x1a1417(0x1a9), _0x1dfbf1);
            }
        }
    }, _0xbc7c4b['\x65\x76\x65\x6e\x74\x5f\x65\x76\x65\x6e\x74\x5f\x73\x68\x61\x72\x65\x64\x43\x68\x6f\x69\x63\x65'] = function (_0x3f62e9) {
        var _0xe8e772 = _0x2078fe;
        if (_0xe8e772(0x1af) === _0xe8e772(0x1d9)) {
            var _0x3a639a;
            return _0x46d544['\x70'](_0xe8e772(0x215)), (_0x3a639a = _0x446665[_0xe8e772(0x25f)]) != null && _0x3a639a['\x6f\x6e\x4c\x6f\x73\x74\x43\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e'](), _0x4d892d[_0xe8e772(0x1c2)](_0xe8e772(0x1fc)), _0x5477fe[_0xe8e772(0x1be)]();
        } else {
            var _0x36a0c3;
            try {
                if (_0xe8e772(0x21f) === _0xe8e772(0x226)) {
                    var _0x397323;
                    try {
                        return _0x3c3c42[_0xe8e772(0x236)](_0x348104);
                    } catch (_0x3bfc62) {
                        return _0x397323 = _0x3bfc62, _0x520227[_0xe8e772(0x233)](_0xe8e772(0x1df), _0x397323);
                    }
                } else
                    return _0xe8e772(0x22f)['\x70'](), ANInterpreterManager['\x6f\x6e\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74\x43\x68\x6f\x69\x63\x65\x41\x63\x74\x69\x6f\x6e\x46\x72\x6f\x6d\x53\x65\x72\x76\x65\x72'](_0x3f62e9);
            } catch (_0xd0f112) {
                return _0x36a0c3 = _0xd0f112, console['\x77\x61\x72\x6e'](_0xe8e772(0x1a9), _0x36a0c3);
            }
        }
    }, _0xbc7c4b[_0x2078fe(0x1e8)] = function (_0x22c523) {
        var _0x325e10 = _0x2078fe, _0x34249f, _0x3a9a2b, _0x806f01;
        try {
            return _0x325e10(0x208)['\x70'](), {
                name: _0x806f01,
                data: _0x34249f
            } = _0x22c523, nAPI['\x6f\x6e\x43\x75\x73\x74\x6f\x6d\x43\x6f\x6d\x6d\x61\x6e\x64'](_0x806f01, _0x34249f);
        } catch (_0x37fbb7) {
            if (_0x325e10(0x1cc) === '\x45\x6d\x6a\x71\x49')
                return _0x3a9a2b = _0x37fbb7, console[_0x325e10(0x233)](_0x325e10(0x1e8), _0x3a9a2b);
            else
                _0x55f758['\x70']('\x48\x61\x6e\x64\x6c\x65\x20\x45\x76\x65\x6e\x74\x3a\x20' + _0x1f3c2b);
        }
    }, _0xbc7c4b[_0x2078fe(0x248)] = function (_0xf43bf3) {
        var _0x531958 = _0x2078fe, _0x15f877, _0x234aaa, _0x1e032a;
        try {
            return _0x531958(0x240)['\x70'](), {
                name: _0x1e032a,
                commonEventId: _0x15f877
            } = _0xf43bf3, typeof $gameSystem !== _0x531958(0x1c1) && $gameSystem !== null ? $gameSystem[_0x531958(0x1f3)](_0x1e032a, _0x15f877) : void 0x0;
        } catch (_0xc9b2be) {
            if (_0x531958(0x1e3) === _0x531958(0x1e3))
                return _0x234aaa = _0xc9b2be, console[_0x531958(0x233)](_0x531958(0x1e8), _0x234aaa);
            else
                _0xf3a1d5['\x70']('\x45\x76\x65\x6e\x74\x20\x45\x6e\x64\x3a\x20' + _0x28fef4);
        }
    }, _0xbc7c4b[_0x2078fe(0x232)] = function (_0x4dc7b5) {
        var _0x5caa1e = _0x2078fe, _0x222db8, _0x3d6b09, _0x5ba9f2;
        try {
            return {
                cmd: _0x222db8,
                data: _0x3d6b09
            } = _0x4dc7b5, _0x222db8[_0x5caa1e(0x24e)]('\x74\x72\x61\x64\x65') ? _0x5caa1e(0x1f7) === _0x5caa1e(0x1f7) ? ANTradeManager[_0x5caa1e(0x1ad)](_0x222db8, _0x3d6b09) : _0x537e4d['\x55\x49'][_0x5caa1e(0x253)](_0x9ab8be) : '\x77\x65\x47\x57\x68' !== '\x73\x4b\x50\x4c\x7a' ? console[_0x5caa1e(0x233)](_0x5caa1e(0x221) + _0x222db8) : _0x43df95[_0x5caa1e(0x200)](_0x1c64cd['\x69\x64'], _0x53ab48[_0x5caa1e(0x238)], _0x3e527e['\x64\x61\x74\x61']);
        } catch (_0x5450d7) {
            return _0x5ba9f2 = _0x5450d7, console[_0x5caa1e(0x233)](_0x5caa1e(0x232), _0x5ba9f2);
        }
    }, _0xbc7c4b[_0x2078fe(0x23e)] = function (_0x13f786) {
        var _0x50ab3a = _0x2078fe;
        if ('\x6a\x66\x75\x71\x6b' !== '\x58\x4a\x5a\x4d\x67') {
            var _0x32d07c, _0x3ebed4, _0x51f2a5;
            try {
                return {
                    cmd: _0x32d07c,
                    data: _0x3ebed4
                } = _0x13f786, NetClientMethodsManager[_0x50ab3a(0x1b8)](_0x32d07c, _0x3ebed4);
            } catch (_0xcb09bf) {
                return _0x51f2a5 = _0xcb09bf, console[_0x50ab3a(0x233)](_0x50ab3a(0x23e), _0x51f2a5);
            }
        } else
            return _0x4c45c9[_0x50ab3a(0x21b)](_0x48ae00['\x69\x64'], _0x3c5b3e[_0x50ab3a(0x21a)], _0x2fd76a[_0x50ab3a(0x20b)]);
    }, _0xbc7c4b[_0x2078fe(0x1b8)] = function (_0x4f7aec, _0x228121) {
        var _0xef0d68 = _0x2078fe;
        if (_0xef0d68(0x219) !== _0xef0d68(0x219)) {
            if (_0x422e1c[_0xef0d68(0x21d)]() === _0x53ab8d)
                return _0x28fed3[_0xef0d68(0x222)]();
        } else
            return '\x45\x56\x45\x4e\x54\x5f\x41\x41\x42\x53\x5a'['\x70'](_0x4f7aec);
    };
}()));
function _0x4293() {
    var _0x3e80ba = [
        '\x65\x76\x65\x6e\x74\x5f\x67\x61\x6d\x65\x5f\x72\x65\x66\x72\x65\x73\x68\x50\x61\x72\x74\x79',
        '\x6f\x6e\x50\x6c\x61\x79\x65\x72\x4c\x6f\x63\x61\x74\x69\x6f\x6e',
        '\x73\x74\x6f\x70',
        '\x65\x76\x65\x6e\x74\x5f\x67\x61\x6d\x65\x5f\x73\x77\x69\x74\x63\x68',
        '\x6e\x61\x6d\x65',
        '\x75\x6e\x64\x65\x66\x69\x6e\x65\x64',
        '\x6e\x6f\x74\x69\x66\x79\x45\x72\x72\x6f\x72',
        '\x6f\x6e\x56\x69\x72\x74\x75\x61\x6c\x43\x6f\x6d\x6d\x61\x6e\x64',
        '\x6f\x6e\x53\x65\x72\x76\x65\x72\x45\x76\x65\x6e\x74',
        '\x69\x73\x45\x78\x69\x73\x74\x50\x72\x63\x45\x76\x65\x6e\x74',
        '\x34\x39\x33\x35\x48\x49\x7a\x51\x7a\x69',
        '\x4e\x65\x74\x43\x6c\x69\x65\x6e\x74\x4d\x65\x74\x68\x6f\x64\x73\x4d\x61\x6e\x61\x67\x65\x72',
        '\x6f\x6e\x42\x61\x74\x74\x6c\x65\x49\x6e\x70\x75\x74\x41\x63\x74\x69\x6f\x6e',
        '\x78\x5a\x73\x41\x47',
        '\x63\x6d\x64',
        '\x57\x50\x66\x41\x69',
        '\x45\x6d\x6a\x71\x49',
        '\x53\x65\x72\x76\x65\x72\x20\x69\x73\x20\x6f\x75\x74\x64\x61\x74\x65\x64\x2c\x20\x72\x65\x71\x75\x69\x72\x65\x20\x72\x65\x76\x2e\x20',
        '\x31\x38\x38\x35\x32\x39\x30\x53\x79\x56\x73\x6e\x55',
        '\x32\x32\x33\x31\x31\x33\x35\x54\x59\x6b\x6c\x68\x4c',
        '\x55\x53\x54\x6c\x68',
        '\x63\x68\x61\x6e\x6e\x65\x6c\x49\x64',
        '\x6f\x6e\x50\x6c\x61\x79\x65\x72\x4a\x6f\x69\x6e\x65\x64\x54\x68\x69\x73\x47\x61\x6d\x65',
        '\x57\x64\x49\x5a\x75',
        '\x73\x65\x74\x43\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x54\x6f\x4d\x61\x73\x74\x65\x72\x43\x61\x6c\x6c\x62\x61\x63\x6b',
        '\x6f\x6e\x52\x65\x67\x69\x73\x74\x65\x72\x4f\x6e\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74\x52\x65\x73\x70\x6f\x6e\x73\x65',
        '\x4c\x6f\x62\x62\x79',
        '\x73\x65\x72\x76\x65\x72\x56\x65\x72\x43\x68\x65\x63\x6b',
        '\x65\x76\x65\x6e\x74\x5f\x6c\x6f\x62\x62\x79\x5f\x72\x65\x66\x72\x65\x73\x68\x52\x6f\x6f\x6d\x44\x61\x74\x61',
        '\x63\x46\x6b\x6b\x4c',
        '\x49\x5a\x68\x70\x52',
        '\x6f\x6e\x45\x76\x65\x6e\x74\x4d\x6f\x76\x65',
        '\x73\x65\x74\x43\x6f\x6c\x6f\x72\x73',
        '\x65\x76\x65\x6e\x74\x5f\x62\x61\x74\x74\x6c\x65\x5f\x69\x6e\x70\x75\x74',
        '\x38\x37\x36\x31\x30\x34\x38\x6f\x54\x61\x65\x73\x41',
        '\x65\x76\x65\x6e\x74\x5f\x62\x61\x74\x74\x6c\x65\x5f\x73\x65\x72\x76\x65\x72\x42\x61\x74\x74\x6c\x65\x44\x61\x74\x61',
        '\x67\x56\x44\x6f\x58',
        '\x4d\x69\x6e\x53\x65\x72\x76\x65\x72\x52\x65\x76',
        '\x6f\x4e\x66\x43\x4d',
        '\x58\x65\x73\x55\x56',
        '\x20\x6f\x72\x20\x68\x69\x67\x68\x65\x72',
        '\x6f\x6e\x52\x6f\x6f\x6d\x44\x61\x74\x61\x46\x72\x6f\x6d\x53\x65\x72\x76\x65\x72',
        '\x67\x61\x6d\x65\x5f\x73\x74\x61\x72\x74\x65\x64\x52\x6f\x6f\x6d\x47\x61\x6d\x65\x44\x61\x74\x61\x52\x65\x71\x75\x65\x73\x74',
        '\x6f\x6e\x52\x6f\x6f\x6d\x43\x6c\x6f\x73\x65\x64',
        '\x65\x76\x65\x6e\x74\x5f\x67\x61\x6d\x65\x5f\x75\x73\x65\x72\x43\x6f\x6d\x6d\x61\x6e\x64',
        '\x61\x6c\x65\x72\x74',
        '\x50\x71\x49\x70\x66',
        '\x6d\x61\x70\x5f\x65\x76\x65\x6e\x74\x4d\x6f\x76\x65',
        '\x6f\x6e\x52\x65\x73\x70\x6f\x6e\x63\x65\x52\x65\x63\x65\x69\x76\x65\x64',
        '\x53\x52\x4e\x74\x79',
        '\x69\x73\x42\x75\x73\x79\x46\x6f\x72\x4e\x65\x74\x77\x6f\x72\x6b\x44\x61\x74\x61',
        '\x57\x7a\x44\x51\x79',
        '\x59\x6d\x41\x4f\x6c',
        '\x62\x61\x74\x74\x6c\x65\x5f\x62\x61\x74\x74\x6c\x65\x4d\x65\x74\x68\x6f\x64',
        '\x6f\x6e\x43\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x45\x72\x72\x6f\x72',
        '\x6e\x52\x65\x67\x69\x73\x74\x65\x72\x43\x75\x73\x74\x6f\x6d\x43\x6f\x6d\x6d\x61\x6e\x64\x43\x45',
        '\x6f\x6e\x47\x61\x6d\x65\x50\x6c\x61\x79\x65\x72\x73',
        '\x65\x76\x65\x6e\x74\x5f\x65\x76\x65\x6e\x74\x5f\x72\x65\x67\x69\x73\x74\x65\x72\x4f\x6e\x53\x68\x61\x72\x65\x64',
        '\x6f\x6e\x43\x6f\x6e\x74\x69\x6e\x75\x65\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74',
        '\x4e\x69\x4b\x66\x74',
        '\x73\x61\x76\x65\x47\x61\x6d\x65',
        '\x65\x76\x65\x6e\x74\x5f\x65\x76\x65\x6e\x74\x5f\x76\x69\x72\x74\x75\x61\x6c\x45\x76\x65\x6e\x74\x43\x6f\x6d\x6d\x61\x6e\x64',
        '\x31\x32\x32\x31\x35\x33\x33\x30\x45\x68\x4f\x6c\x63\x72',
        '\x7a\x77\x48\x4a\x52',
        '\x44\x69\x73\x63\x6f\x6e\x6e\x65\x63\x74\x65\x64\x20\x66\x72\x6f\x6d\x20\x73\x65\x72\x76\x65\x72',
        '\x71\x6e\x44\x5a\x72',
        '\x69\x73\x4d\x61\x73\x74\x65\x72\x43\x6c\x69\x65\x6e\x74',
        '\x65\x76\x65\x6e\x74\x5f\x62\x61\x74\x74\x6c\x65\x5f\x62\x61\x74\x74\x6c\x65\x4d\x65\x74\x68\x6f\x64',
        '\x6f\x6e\x4f\x62\x73\x65\x72\x76\x65\x72\x44\x61\x74\x61',
        '\x57\x47\x4b\x71\x74',
        '\x44\x65\x76\x4c\x6f\x67',
        '\x6f\x6e\x42\x61\x74\x74\x6c\x65\x4d\x65\x74\x68\x6f\x64\x52\x65\x63\x65\x69\x76\x65\x64',
        '\x63\x61\x6c\x6c\x62\x61\x63\x6b',
        '\x45\x76\x65\x6e\x74\x20\x45\x6e\x64\x3a\x20',
        '\x48\x61\x6e\x64\x6c\x65\x20\x45\x76\x65\x6e\x74\x3a\x20',
        '\x65\x76\x65\x6e\x74\x5f\x6c\x6f\x62\x62\x79\x5f\x73\x74\x61\x72\x74\x47\x61\x6d\x65',
        '\x43\x55\x53\x54\x4f\x4d\x20\x43\x4f\x4d\x4d\x41\x4e\x44\x20\x49\x4e',
        '\x49\x6f\x62\x6b\x56',
        '\x48\x77\x5a\x49\x69',
        '\x64\x61\x74\x61',
        '\x65\x76\x65\x6e\x74\x5f\x67\x61\x6d\x65\x5f\x73\x74\x61\x72\x74\x65\x64\x52\x6f\x6f\x6d\x47\x61\x6d\x65\x44\x61\x74\x61\x52\x65\x71\x75\x65\x73\x74',
        '\x61\x6e\x79',
        '\x36\x54\x78\x53\x4a\x50\x6c',
        '\x39\x69\x63\x63\x49\x48\x6e',
        '\x65\x76\x65\x6e\x74\x5f\x62\x61\x74\x74\x6c\x65\x5f\x62\x61\x74\x74\x6c\x65\x4d\x65\x74\x68\x6f\x64\x52\x65\x63\x65\x69\x76\x65\x64',
        '\x4d\x41\x47\x45\x4e\x54\x41',
        '\x72\x6f\x6f\x6d',
        '\x65\x76\x65\x6e\x74\x5f\x6c\x6f\x62\x62\x79\x5f\x72\x6f\x6f\x6d\x43\x6c\x6f\x73\x65\x64',
        '\x39\x38\x36\x33\x31\x34\x4c\x79\x4c\x59\x53\x61',
        '\x44\x69\x73\x63\x6f\x6e\x6e\x65\x63\x74\x65\x64',
        '\x68\x61\x6e\x64\x6c\x65\x50\x72\x63\x45\x76\x65\x6e\x74',
        '\x6f\x6e\x43\x6f\x6e\x6e\x65\x63\x74',
        '\x65\x76\x65\x6e\x74\x5f\x6d\x61\x70\x5f\x65\x76\x65\x6e\x74\x4d\x6f\x76\x65',
        '\x6c\x55\x42\x76\x49',
        '\x6d\x65\x74\x68\x6f\x64',
        '\x6f\x6e\x42\x61\x74\x74\x6c\x65\x4d\x65\x74\x68\x6f\x64',
        '\x4e\x45\x54\x20\x43\x6c\x69\x65\x6e\x74',
        '\x6d\x61\x70\x49\x64',
        '\x4f\x6c\x6f\x64\x54',
        '\x65\x44\x67\x6c\x64',
        '\x55\x67\x6a\x54\x41',
        '\x55\x6e\x6b\x6e\x6f\x77\x6e\x20\x63\x6f\x6d\x6d\x6f\x6e\x20\x73\x75\x62\x43\x6f\x6d\x6d\x61\x6e\x64\x20',
        '\x6f\x6e\x49\x6e\x69\x74\x69\x61\x6c\x4d\x61\x70\x53\x79\x6e\x63',
        '\x33\x31\x37\x32\x37\x36\x46\x4d\x67\x74\x77\x63',
        '\x6a\x44\x73\x43\x4a',
        '\x65\x76\x65\x6e\x74\x5f\x6d\x61\x70\x5f\x69\x6e\x69\x74\x69\x61\x6c\x4d\x61\x70\x53\x79\x6e\x63\x68\x72\x6f\x6e\x69\x7a\x61\x74\x69\x6f\x6e',
        '\x46\x66\x41\x65\x6c',
        '\x43\x6f\x6c\x6f\x72',
        '\x52\x45\x46\x52\x45\x53\x48\x20\x50\x41\x52\x54\x59',
        '\x74\x65\x78\x74',
        '\x62\x61\x74\x74\x6c\x65\x5f\x62\x61\x74\x74\x6c\x65\x4d\x65\x74\x68\x6f\x64\x52\x65\x63\x65\x69\x76\x65\x64',
        '\x65\x76\x65\x6e\x74\x5f\x65\x76\x65\x6e\x74\x5f\x72\x65\x67\x69\x73\x74\x65\x72\x44\x6f\x6e\x65',
        '\x45\x6a\x47\x63\x61',
        '\x6e\x53\x61\x76\x65\x44\x61\x74\x61',
        '\x65\x76\x65\x6e\x74\x5f\x67\x61\x6d\x65\x5f\x73\x6f\x6d\x65\x6f\x6e\x65\x4a\x6f\x69\x6e\x65\x64\x54\x6f\x53\x74\x61\x72\x74\x65\x64\x47\x61\x6d\x65',
        '\x53\x48\x41\x52\x45\x44\x20\x45\x56\x45\x4e\x54\x20\x43\x48\x4f\x49\x43\x45\x20\x41\x43\x54\x49\x4f\x4e',
        '\x57\x65\x49\x54\x7a',
        '\x65\x76\x65\x6e\x74\x5f\x6d\x61\x70\x5f\x70\x6c\x61\x79\x65\x72\x4c\x6f\x63\x61\x74\x69\x6f\x6e',
        '\x65\x76\x65\x6e\x74\x5f\x63\x6f\x6d\x6d\x6f\x6e\x5f\x66\x6f\x72\x43\x6c\x69\x65\x6e\x74\x73',
        '\x77\x61\x72\x6e',
        '\x6f\x6e\x52\x6f\x6f\x6d\x50\x6c\x61\x79\x65\x72\x73',
        '\x53\x54\x41\x52\x54\x49\x4e\x47\x20\x47\x41\x4d\x45',
        '\x6f\x6e\x42\x61\x74\x74\x6c\x65\x44\x61\x74\x61\x46\x72\x6f\x6d\x53\x65\x72\x76\x65\x72',
        '\x32\x37\x36\x34\x53\x76\x6b\x79\x65\x58',
        '\x74\x79\x70\x65',
        '\x6c\x4d\x72\x64\x48',
        '\x65\x76\x65\x6e\x74\x5f\x6d\x61\x70\x5f\x70\x6c\x61\x79\x65\x72\x4d\x6f\x76\x65',
        '\x53\x48\x41\x52\x45\x44\x20\x45\x56\x45\x4e\x54\x20\x43\x41\x4e\x20\x43\x4f\x4e\x54\x49\x4e\x55\x45',
        '\x53\x6d\x58\x42\x61',
        '\x6f\x6e\x4c\x6f\x67\x57\x69\x6e\x64\x6f\x77\x4d\x65\x73\x73\x61\x67\x65',
        '\x65\x76\x65\x6e\x74\x5f\x63\x6f\x6d\x6d\x6f\x6e\x5f\x61\x62\x73\x7a',
        '\x65\x76\x65\x6e\x74\x5f\x67\x61\x6d\x65\x5f\x6f\x62\x73\x65\x72\x76\x65\x72\x44\x61\x74\x61',
        '\x43\x55\x53\x54\x4f\x4d\x20\x4c\x49\x4e\x4b\x20\x49\x4e',
        '\x6f\x6e\x50\x6c\x61\x79\x65\x72\x4e\x61\x6d\x65',
        '\x6f\x6e\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74\x46\x6f\x72\x63\x65\x43\x61\x6e\x63\x65\x6c\x46\x72\x6f\x6d\x53\x65\x72\x76\x65\x72',
        '\x6b\x47\x53\x66\x4b',
        '\x61\x63\x74\x69\x6f\x6e',
        '\x53\x48\x41\x52\x45\x44\x20\x45\x56\x45\x4e\x54\x20\x41\x4e\x53\x57\x45\x52',
        '\x65\x76\x65\x6e\x74\x5f\x62\x61\x74\x74\x6c\x65\x4d\x65\x74\x68\x6f\x64\x52\x65\x63\x65\x69\x76\x65\x64',
        '\x68\x4a\x42\x46\x6c',
        '\x65\x76\x65\x6e\x74\x5f\x67\x61\x6d\x65\x5f\x63\x75\x73\x74\x6f\x6d\x43\x6f\x6d\x6d\x61\x6e\x64\x4c\x69\x6e\x6b',
        '\x69\x6e\x70\x75\x74\x41\x63\x74\x6f\x72\x49\x64',
        '\x63\x61\x6c\x6c\x53\x63\x65\x6e\x65\x43\x61\x6c\x6c\x62\x61\x63\x6b',
        '\x73\x69\x50\x6f\x44',
        '\x69\x55\x64\x41\x4a',
        '\x6d\x50\x59\x4e\x6d',
        '\x63\x6f\x6e\x74\x61\x69\x6e\x73',
        '\x52\x70\x76\x46\x69',
        '\x6f\x6e\x56\x61\x72\x69\x61\x62\x6c\x65\x56\x61\x6c\x75\x65',
        '\x71\x6f\x46\x69\x6b',
        '\x65\x76\x65\x6e\x74\x5f\x62\x61\x74\x74\x6c\x65\x5f\x61\x6e\x69\x6d\x61\x74\x69\x6f\x6e',
        '\x61\x64\x64\x4d\x65\x73\x73\x61\x67\x65\x54\x6f\x43\x68\x61\x74',
        '\x6f\x6e\x52\x65\x67\x69\x73\x74\x65\x72\x4f\x6e\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74\x52\x65\x71\x75\x65\x73\x74',
        '\x6d\x61\x70\x5f\x70\x6c\x61\x79\x65\x72\x4d\x6f\x76\x65',
        '\x73\x65\x6e\x64\x53\x74\x61\x72\x74\x65\x64\x52\x6f\x6f\x6d\x44\x61\x74\x61\x52\x65\x73\x70\x6f\x6e\x65',
        '\x4c\x62\x41\x6b\x6e',
        '\x53\x48\x41\x52\x45\x44\x20\x45\x56\x45\x4e\x54\x20\x46\x4f\x52\x43\x45\x20\x43\x41\x4e\x43\x45\x4c\x4c\x45\x44',
        '\x6f\x6e\x42\x61\x74\x74\x6c\x65\x49\x6e\x70\x75\x74\x53\x74\x61\x74\x65',
        '\x6d\x56\x69\x57\x77',
        '\x43\x6f\x6e\x6e\x65\x63\x74\x65\x64',
        '\x6f\x6e\x50\x6c\x61\x79\x65\x72\x4d\x6f\x76\x65',
        '\x69\x6e\x70\x75\x74\x53\x74\x61\x74\x65',
        '\x6e\x55\x6e\x69\x71\x75\x65\x53\x61\x76\x65\x49\x44',
        '\x5f\x73\x63\x65\x6e\x65',
        '\x75\x6e\x69\x71\x75\x65\x53\x61\x76\x65\x49\x44',
        '\x6f\x6e\x42\x65\x66\x6f\x72\x65\x53\x61\x76\x65',
        '\x6f\x6e\x52\x65\x66\x72\x65\x73\x68\x47\x61\x6d\x65\x50\x61\x72\x74\x79',
        '\x65\x76\x65\x6e\x74\x5f\x67\x61\x6d\x65\x5f\x73\x61\x76\x65\x44\x61\x74\x61\x52\x65\x71\x75\x65\x73\x74',
        '\x65\x76\x65\x6e\x74\x5f\x65\x76\x65\x6e\x74\x5f\x73\x68\x61\x72\x65\x64\x46\x6f\x72\x63\x65\x43\x61\x6e\x63\x65\x6c',
        '\x43\x61\x6e\x27\x74\x20\x63\x6f\x6e\x6e\x65\x63\x74\x20\x74\x6f\x20\x73\x65\x72\x76\x65\x72\x21',
        '\x6f\x6e\x43\x6f\x6e\x6e\x65\x63\x74\x43\x61\x6c\x6c\x62\x61\x63\x6b',
        '\x57\x4c\x4c\x50\x48',
        '\x6f\x6e\x43\x6f\x6d\x6d\x6f\x6e\x43\x6f\x6d\x6d\x61\x6e\x64\x46\x72\x6f\x6d\x53\x65\x72\x76\x65\x72',
        '\x6f\x6e\x53\x77\x69\x74\x63\x68\x56\x61\x6c\x75\x65',
        '\x7a\x78\x77\x58\x57',
        '\x42\x4c\x41\x43\x4b',
        '\x46\x62\x5a\x63\x6e',
        '\x74\x62\x6b\x64\x4a',
        '\x77\x68\x6f',
        '\x37\x6b\x54\x41\x6b\x73\x44',
        '\x73\x65\x6e\x64\x53\x61\x76\x65\x44\x61\x74\x61\x43\x6f\x6d\x70\x6c\x65\x74\x65\x46\x6c\x61\x67',
        '\x65\x76\x65\x6e\x74\x5f\x62\x61\x74\x74\x6c\x65\x5f\x69\x6e\x70\x75\x74\x41\x63\x74\x69\x6f\x6e',
        '\x6f\x6e\x41\x6e\x73\x77\x65\x72',
        '\x65\x76\x65\x6e\x74\x5f\x61\x61\x62\x7a',
        '\x4f\x4d\x6b\x49\x77',
        '\x65\x76\x65\x6e\x74\x5f\x67\x61\x6d\x65\x5f\x63\x68\x61\x74\x4d\x65\x73\x73\x61\x67\x65',
        '\x65\x76\x65\x6e\x74\x5f\x67\x61\x6d\x65\x5f\x76\x61\x72\x69\x61\x62\x6c\x65'
    ];
    _0x4293 = function () {
        return _0x3e80ba;
    };
    return _0x4293();
}

var _0xd76e95 = _0x33fd;
function _0x33fd(_0x1f30f3, _0x4cec36) {
    var _0x5d156b = _0x5d15();
    return _0x33fd = function (_0x33fd40, _0x2d0b30) {
        _0x33fd40 = _0x33fd40 - 0xab;
        var _0x2c1578 = _0x5d156b[_0x33fd40];
        return _0x2c1578;
    }, _0x33fd(_0x1f30f3, _0x4cec36);
}
function _0x5d15() {
    var _0x364f70 = [
        '\x73\x65\x6e\x64\x42\x61\x74\x74\x6c\x65\x72\x4f\x62\x73\x65\x72\x76\x65\x72',
        '\x69\x6e\x70\x75\x74',
        '\x61\x64\x64',
        '\x5f\x77\x61\x69\x74\x4d\x6f\x64\x65',
        '\x43\x6f\x6c\x6f\x72',
        '\x56\x68\x6e\x4d\x52',
        '\x72\x65\x67\x69\x73\x74\x65\x72\x4f\x6e\x4c\x6f\x63\x61\x6c\x42\x61\x74\x74\x6c\x65',
        '\x61\x43\x42\x55\x77',
        '\x42\x4c\x41\x43\x4b',
        '\x36\x31\x37\x36\x37\x6b\x77\x59\x64\x75\x67',
        '\x73\x65\x6e\x64\x57\x69\x6e\x64\x6f\x77\x4c\x6f\x67\x4d\x65\x73\x73\x61\x67\x65',
        '\x69\x6e\x70\x75\x74\x74\x69\x6e\x67\x41\x63\x74\x69\x6f\x6e',
        '\x57\x49\x63\x42\x4e',
        '\x72\x65\x67\x69\x73\x74\x65\x72\x4f\x6e\x42\x61\x74\x74\x6c\x65',
        '\x75\x64\x59\x51\x49',
        '\x54\x49\x4d\x45\x20\x4f\x55\x54',
        '\x72\x65\x73\x65\x74\x57\x61\x69\x74',
        '\x63\x73\x53\x45\x61',
        '\x69\x73\x4c\x6f\x63\x61\x6c',
        '\x36\x30\x38\x34\x35\x58\x6d\x4a\x58\x52\x71',
        '\x4c\x61\x74\x71\x7a',
        '\x39\x37\x32\x34\x34\x30\x70\x6e\x78\x56\x49\x62',
        '\x31\x33\x31\x31\x38\x38\x38\x4a\x74\x6a\x66\x6e\x54',
        '\x6f\x6e\x42\x61\x74\x74\x6c\x65\x4d\x65\x74\x68\x6f\x64\x52\x65\x63\x65\x69\x76\x65\x64',
        '\x69\x6e\x42\x61\x74\x74\x6c\x65',
        '\x73\x65\x6e\x64\x42\x61\x74\x74\x6c\x65\x53\x74\x61\x72\x74\x65\x64',
        '\x7a\x50\x45\x54\x4f',
        '\x6c\x65\x6e\x67\x74\x68',
        '\x5f\x69\x73\x44\x61\x74\x61\x43\x68\x61\x6e\x67\x65\x64',
        '\x70\x75\x73\x68',
        '\x6f\x6e\x42\x61\x74\x74\x6c\x65\x45\x6e\x64',
        '\x61\x63\x74\x6f\x72\x73',
        '\x63\x74\x53\x77\x59',
        '\x62\x61\x74\x74\x6c\x65\x49\x64',
        '\x5f\x6c\x61\x73\x74\x42\x61\x74\x74\x6c\x65\x4d\x61\x6e\x61\x67\x65\x72\x49\x6e\x70\x75\x74\x41\x63\x74\x6f\x72',
        '\x4e\x6b\x65\x6c\x4b',
        '\x6d\x61\x70',
        '\x73\x65\x6e\x64\x49\x6e\x70\x75\x74\x53\x74\x61\x74\x65',
        '\x61\x64\x64\x54\x65\x78\x74',
        '\x5f\x77\x61\x69\x74\x50\x6f\x6f\x6c',
        '\x67\x72\x56\x67\x4a',
        '\x70\x61\x63\x6b\x46\x6f\x72\x4e\x65\x74\x77\x6f\x72\x6b',
        '\x6f\x6e\x42\x61\x74\x74\x6c\x65\x44\x61\x74\x61\x46\x72\x6f\x6d\x53\x65\x72\x76\x65\x72',
        '\x73\x65\x6e\x64\x42\x61\x74\x74\x6c\x65\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e',
        '\x5f\x70\x72\x65\x76\x69\x6f\x75\x73\x4e\x65\x74\x42\x61\x74\x74\x6c\x65\x41\x63\x74\x6f\x72\x73',
        '\x32\x38\x36\x35\x62\x77\x6d\x56\x55\x54',
        '\x63\x61\x6c\x6c\x42\x61\x74\x74\x6c\x65\x4d\x65\x74\x68\x6f\x64',
        '\x78\x55\x6d\x42\x69',
        '\x67\x4f\x45\x46\x72',
        '\x69\x73\x42\x61\x74\x74\x6c\x65\x4d\x61\x73\x74\x65\x72',
        '\x5f\x63\x61\x6c\x6c\x42\x61\x74\x74\x6c\x65\x4d\x65\x74\x68\x6f\x64\x4f\x6e\x53\x65\x72\x76\x65\x72',
        '\x6e\x41\x4f\x4d\x7a',
        '\x5f\x72\x65\x67\x69\x73\x74\x65\x72\x54\x6f\x45\x78\x69\x73\x74\x73\x53\x68\x61\x72\x65\x64\x42\x61\x74\x74\x6c\x65',
        '\x69\x73\x4f\x6e\x65\x42\x61\x74\x74\x6c\x65\x72',
        '\x5f\x6c\x61\x73\x74\x42\x61\x74\x74\x6c\x65\x4d\x61\x6e\x61\x67\x65\x72\x49\x6e\x70\x75\x74\x56\x61\x6c\x75\x65',
        '\x52\x45\x47\x49\x53\x54\x45\x52\x20\x53\x55\x43\x43\x45\x53\x53',
        '\x55\x5a\x78\x7a\x4e',
        '\x63\x6c\x65\x61\x72',
        '\x69\x6e\x66\x6f',
        '\x6c\x65\x61\x64\x65\x72',
        '\x69\x73\x4d\x56',
        '\x6d\x79\x41\x63\x74\x6f\x72\x49\x64',
        '\x4c\x71\x64\x6c\x6f',
        '\x73\x67\x70\x66\x57',
        '\x72\x65\x67\x69\x73\x74\x65\x72',
        '\x69\x73\x46\x6f\x72\x63\x65\x42\x61\x74\x74\x6c\x65\x53\x79\x6e\x63\x4d\x6f\x64\x65',
        '\x69\x73\x53\x68\x6f\x75\x6c\x64\x57\x61\x69\x74\x53\x65\x72\x76\x65\x72',
        '\x65\x6e\x64\x65\x64',
        '\x61\x63\x74\x6f\x72',
        '\x6c\x6f\x67\x4d\x65\x73\x73\x61\x67\x65',
        '\x73\x65\x6e\x64\x42\x61\x74\x74\x6c\x65\x49\x6e\x70\x75\x74\x41\x63\x74\x69\x6f\x6e',
        '\x5f\x6c\x6f\x67\x57\x69\x6e\x64\x6f\x77',
        '\x6c\x6f\x63\x61\x6c',
        '\x61\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x49\x64',
        '\x6e\x53\x65\x74\x4e\x65\x74\x77\x6f\x72\x6b\x42\x61\x74\x74\x6c\x65',
        '\x76\x49\x77\x56\x4e',
        '\x5a\x49\x74\x65\x47',
        '\x6f\x70\x74\x69\x6f\x6e\x73',
        '\x65\x57\x72\x71\x77',
        '\x31\x30\x35\x32\x49\x55\x48\x48\x41\x48',
        '\x5f\x63\x75\x72\x72\x65\x6e\x74\x41\x63\x74\x6f\x72',
        '\x62\x61\x74\x74\x6c\x65\x4d\x65\x74\x68\x6f\x64\x52\x65\x63\x65\x69\x76\x65\x64',
        '\x32\x45\x58\x43\x56\x4b\x76',
        '\x5f\x72\x65\x71\x75\x65\x73\x74\x49\x6e\x69\x74\x69\x61\x6c\x53\x68\x61\x72\x65\x64\x42\x61\x74\x74\x6c\x65\x52\x65\x66\x72\x65\x73\x68',
        '\x62\x66\x78\x6b\x55',
        '\x42\x61\x74\x74\x6c\x65',
        '\x61\x6e\x69\x6d\x61\x74\x69\x6f\x6e',
        '\x53\x54\x41\x52\x54\x45\x44\x20\x4c\x4f\x43\x41\x4c\x20\x42\x41\x54\x54\x4c\x45',
        '\x6f\x6e\x42\x61\x74\x74\x6c\x65\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e',
        '\x53\x45\x54\x55\x50',
        '\x73\x65\x6e\x64\x52\x65\x67\x69\x73\x74\x65\x72\x4f\x6e\x42\x61\x74\x74\x6c\x65',
        '\x47\x42\x77\x45\x47',
        '\x49\x70\x78\x69\x57',
        '\x6f\x6e\x42\x61\x74\x74\x6c\x65\x52\x65\x67\x69\x73\x74\x65\x72\x52\x65\x73\x75\x6c\x74',
        '\x62\x61\x74\x74\x6c\x65\x44\x61\x74\x61',
        '\x5f\x77\x61\x69\x74\x54\x69\x6d\x65\x6f\x75\x74',
        '\x62\x61\x74\x74\x6c\x65\x49\x6e\x70\x75\x74\x41\x63\x74\x69\x6f\x6e\x44\x6f\x6e\x65',
        '\x35\x46\x6d\x4d\x64\x48\x71',
        '\x52\x76\x67\x54\x74',
        '\x6f\x6e\x42\x61\x74\x74\x6c\x65\x49\x6e\x70\x75\x74\x41\x63\x74\x69\x6f\x6e',
        '\x73\x65\x6e\x64\x42\x61\x74\x74\x6c\x65\x4d\x65\x74\x68\x6f\x64',
        '\x73\x65\x74\x46\x72\x6f\x6d\x4e\x65\x74\x77\x6f\x72\x6b',
        '\x5f\x69\x6e\x70\x75\x74\x74\x69\x6e\x67',
        '\x79\x74\x41\x42\x6c',
        '\x75\x70\x64\x61\x74\x65',
        '\x75\x70\x64\x61\x74\x65\x57\x61\x69\x74\x69\x6e\x67',
        '\x73\x65\x6e\x64\x42\x61\x74\x74\x6c\x65\x45\x6e\x64\x65\x64',
        '\x39\x30\x6f\x62\x65\x6b\x54\x72',
        '\x62\x61\x74\x74\x6c\x65\x4d\x65\x6d\x62\x65\x72\x73',
        '\x61\x63\x74\x6f\x72\x49\x64',
        '\x4e\x65\x74\x42\x61\x74\x74\x6c\x65',
        '\x47\x68\x6c\x58\x59',
        '\x5f\x62\x61\x74\x74\x6c\x65\x4d\x65\x74\x68\x6f\x64\x73\x50\x6f\x6f\x6c',
        '\x73\x65\x6e\x64\x42\x61\x74\x74\x6c\x65\x4d\x65\x74\x68\x6f\x64\x52\x65\x63\x65\x69\x76\x65\x64',
        '\x57\x41\x49\x54',
        '\x64\x56\x61\x4a\x69',
        '\x6d\x69\x72\x72\x6f\x72',
        '\x73\x65\x74\x57\x61\x69\x74',
        '\x6e\x65\x74\x44\x61\x74\x61\x4f\x62\x73\x65\x72\x76\x65\x72',
        '\x52\x45\x44',
        '\x55\x74\x69\x6c\x73',
        '\x73\x65\x6c\x65\x63\x74\x4e\x65\x78\x74\x43\x6f\x6d\x6d\x61\x6e\x64',
        '\x73\x65\x74\x75\x70',
        '\x66\x44\x77\x79\x42',
        '\x48\x65\x42\x6b\x66',
        '\x65\x68\x4a\x71\x6a',
        '\x6a\x74\x7a\x58\x6a',
        '\x6f\x6e\x42\x61\x74\x74\x6c\x65\x49\x6e\x70\x75\x74\x53\x74\x61\x74\x65',
        '\x73\x65\x6e\x64',
        '\x44\x65\x76\x4c\x6f\x67',
        '\x63\x6e\x64\x61\x4a',
        '\x41\x4e\x42\x61\x74\x74\x6c\x65\x4d\x61\x6e\x61\x67\x65\x72',
        '\x6f\x4b\x6a\x54\x6d',
        '\x6f\x6e\x4c\x6f\x67\x57\x69\x6e\x64\x6f\x77\x4d\x65\x73\x73\x61\x67\x65',
        '\x72\x65\x71\x75\x65\x73\x74\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e',
        '\x32\x34\x35\x31\x35\x34\x4e\x49\x4b\x4f\x41\x74',
        '\x44\x77\x68\x57\x78',
        '\x34\x39\x39\x35\x32\x34\x33\x6d\x6f\x6f\x57\x66\x67',
        '\x62\x61\x74\x74\x6c\x65\x4d\x65\x74\x68\x6f\x64',
        '\x6d\x4d\x63\x44\x42',
        '\x54\x72\x79\x20\x72\x65\x67\x69\x73\x74\x65\x72\x20\x62\x61\x74\x74\x6c\x65\x3a\x20',
        '\x43\x41\x4c\x4c\x20\x42\x41\x54\x54\x4c\x45\x20\x4d\x45\x54\x48\x4f\x44',
        '\x69\x73\x42\x61\x74\x74\x6c\x65\x52\x65\x67\x69\x73\x74\x72\x65\x64',
        '\x68\x69\x64\x65\x4c\x6f\x61\x64\x65\x72',
        '\x52\x41\x54\x65\x4b',
        '\x75\x70\x64\x61\x74\x65\x49\x6e\x70\x75\x74\x43\x68\x61\x6e\x67\x65',
        '\x74\x61\x72\x67\x65\x74\x73',
        '\x6e\x53\x65\x74\x43\x75\x72\x72\x65\x6e\x74\x43\x6c\x69\x65\x6e\x74\x49\x6e\x70\x75\x74',
        '\x49\x65\x75\x51\x55',
        '\x49\x63\x45\x70\x49',
        '\x75\x6e\x70\x61\x63\x6b\x42\x61\x74\x74\x6c\x65\x72\x46\x72\x6f\x6d\x4e\x65\x74\x77\x6f\x72\x6b',
        '\x69\x73\x4c\x6f\x61\x64\x65\x72\x41\x63\x74\x69\x76\x65',
        '\x6e\x71\x75\x54\x55',
        '\x6f\x6e\x42\x61\x74\x74\x6c\x65\x4d\x65\x74\x68\x6f\x64',
        '\x73\x74\x61\x72\x74\x65\x64',
        '\x48\x79\x61\x6e\x48'
    ];
    _0x5d15 = function () {
        return _0x364f70;
    };
    return _0x5d15();
}
(function (_0x3f5d44, _0xf08c21) {
    var _0x4e8650 = _0x33fd, _0x528282 = _0x3f5d44();
    while (!![]) {
        try {
            var _0x201771 = parseInt(_0x4e8650(0xf9)) / 0x1 * (-parseInt(_0x4e8650(0x138)) / 0x2) + -parseInt(_0x4e8650(0x113)) / 0x3 * (parseInt(_0x4e8650(0x135)) / 0x4) + parseInt(_0x4e8650(0xab)) / 0x5 * (-parseInt(_0x4e8650(0xfc)) / 0x6) + parseInt(_0x4e8650(0xd1)) / 0x7 + parseInt(_0x4e8650(0xfb)) / 0x8 + -parseInt(_0x4e8650(0xef)) / 0x9 * (-parseInt(_0x4e8650(0xb5)) / 0xa) + parseInt(_0x4e8650(0xd3)) / 0xb;
            if (_0x201771 === _0xf08c21)
                break;
            else
                _0x528282['push'](_0x528282['shift']());
        } catch (_0x5dbe4e) {
            _0x528282['push'](_0x528282['shift']());
        }
    }
}(_0x5d15, 0x229e7), window[_0xd76e95(0xcd)] = function () {
}, (function () {
    var _0x4a114f = _0xd76e95, _0x4d4fb1, _0x2eccbd;
    _0x4d4fb1 = new KDCore[(_0x4a114f(0xcb))](_0x4a114f(0xb8)), _0x4d4fb1['\x73\x65\x74\x43\x6f\x6c\x6f\x72\x73'](KDCore[_0x4a114f(0xea)][_0x4a114f(0xc1)], KDCore[_0x4a114f(0xea)][_0x4a114f(0xee)]['\x67\x65\x74\x4c\x69\x67\x68\x74\x65\x73\x74\x43\x6f\x6c\x6f\x72'](0x87)), _0x4d4fb1['\x6f\x6e'](), _0x2eccbd = window['\x41\x4e\x42\x61\x74\x74\x6c\x65\x4d\x61\x6e\x61\x67\x65\x72'], _0x2eccbd['\x69\x73\x42\x61\x74\x74\x6c\x65\x4d\x61\x73\x74\x65\x72'] = function () {
        var _0x278283 = _0x4a114f;
        if (_0x278283(0xfa) === _0x278283(0x142))
            _0x18170a[_0x278283(0xca)](_0x15ec53[_0x278283(0x13b)]('\x62\x61\x74\x74\x6c\x65\x4d\x65\x74\x68\x6f\x64\x52\x65\x63\x65\x69\x76\x65\x64'));
        else {
            if (this[_0x278283(0x144)] != null) {
                if (_0x278283(0x100) !== _0x278283(0x100))
                    this[_0x278283(0xf6)]();
                else
                    return this[_0x278283(0x144)][_0x278283(0x105)][0x0] === ANGameManager['\x6d\x79\x41\x63\x74\x6f\x72\x49\x64']();
            } else
                return $gameParty['\x69\x6e\x42\x61\x74\x74\x6c\x65']();
        }
    }, _0x2eccbd['\x69\x73\x42\x61\x74\x74\x6c\x65\x52\x65\x67\x69\x73\x74\x72\x65\x64'] = function () {
        var _0x533861 = _0x4a114f;
        return this[_0x533861(0x144)] != null;
    }, _0x2eccbd['\x69\x73\x42\x61\x74\x74\x6c\x65\x4c\x6f\x63\x61\x6c'] = function () {
        var _0x3a6d71 = _0x4a114f;
        return this[_0x3a6d71(0x144)] != null ? _0x3a6d71(0x134) === _0x3a6d71(0x116) ? this[_0x3a6d71(0x144)]['\x69\x73\x4c\x6f\x63\x61\x6c'] : this[_0x3a6d71(0x144)][_0x3a6d71(0xf8)] : !![];
    }, _0x2eccbd[_0x4a114f(0x128)] = function () {
        var _0x48d9e8 = _0x4a114f;
        return '\x63\x73\x53\x45\x61' !== _0x48d9e8(0xf7) ? _0x4917df[_0x48d9e8(0xdd)]() : this[_0x48d9e8(0xe9)] != null;
    }, _0x2eccbd[_0x4a114f(0xb6)] = function () {
        var _0x1200dd = _0x4a114f;
        if (_0x1200dd(0x10e) === '\x66\x56\x61\x45\x76')
            return this['\x62\x61\x74\x74\x6c\x65\x44\x61\x74\x61'] != null ? this[_0x1200dd(0x144)][_0x1200dd(0xf8)] : !![];
        else {
            if (this[_0x1200dd(0xd8)]()) {
                if (_0x1200dd(0xdf) !== _0x1200dd(0xf2))
                    return this['\x62\x61\x74\x74\x6c\x65\x44\x61\x74\x61'][_0x1200dd(0x105)]['\x6d\x61\x70'](function (_0x330cf4) {
                        var _0x48eb21 = _0x1200dd;
                        return $gameActors[_0x48eb21(0x12a)](_0x330cf4);
                    });
                else {
                    if (!_0x4b4765[_0x1200dd(0x117)]())
                        return;
                    return _0x14bc51[_0x1200dd(0xf1)]()[_0x1200dd(0xaf)](_0x3fd864), _0x262f87[_0x1200dd(0xc3)]();
                }
            } else
                return [$gameParty[_0x1200dd(0x121)]()];
        }
    }, _0x2eccbd[_0x4a114f(0xbf)] = function (_0x3d2e4a) {
        var _0x28e4af = _0x4a114f;
        return this[_0x28e4af(0xe9)] = _0x3d2e4a, this['\x5f\x77\x61\x69\x74\x50\x6f\x6f\x6c'] = 0x0, this['\x5f\x77\x61\x69\x74\x54\x69\x6d\x65\x6f\x75\x74'] = 0x168, HUIManager['\x73\x68\x6f\x77\x4c\x6f\x61\x64\x65\x72'](0x3e8);
    }, _0x2eccbd[_0x4a114f(0xf6)] = function () {
        var _0x34f244 = _0x4a114f;
        return this[_0x34f244(0xbf)](null), HUIManager[_0x34f244(0xd9)]();
    }, _0x2eccbd[_0x4a114f(0xb2)] = function () {
        var _0x620f08 = _0x4a114f;
        this['\x69\x73\x53\x68\x6f\x75\x6c\x64\x57\x61\x69\x74\x53\x65\x72\x76\x65\x72']() ? this[_0x620f08(0x145)] <= 0x0 ? (_0x4d4fb1['\x70'](_0x620f08(0xf5)), this['\x72\x65\x73\x65\x74\x57\x61\x69\x74']()) : (this[_0x620f08(0x145)]--, this['\x75\x70\x64\x61\x74\x65\x57\x61\x69\x74\x69\x6e\x67']()) : _0x620f08(0xbd) !== _0x620f08(0xe5) ? (this['\x5f\x62\x61\x74\x74\x6c\x65\x4d\x65\x74\x68\x6f\x64\x73\x50\x6f\x6f\x6c'][_0x620f08(0x101)] > 0x0 && this[_0x620f08(0x118)](...this[_0x620f08(0xba)]['\x73\x68\x69\x66\x74']()), HUIManager[_0x620f08(0xe1)]() && HUIManager[_0x620f08(0xd9)]()) : _0x202279 = null;
    }, _0x2eccbd[_0x4a114f(0xb3)] = function () {
        var _0x5eab08 = _0x4a114f;
        if (_0x5eab08(0xc7) === _0x5eab08(0xc7)) {
            if (!this['\x69\x73\x53\x68\x6f\x75\x6c\x64\x57\x61\x69\x74\x53\x65\x72\x76\x65\x72']())
                return;
            _0x5eab08(0xbc)['\x70'](this[_0x5eab08(0x10d)]);
            switch (this['\x5f\x77\x61\x69\x74\x4d\x6f\x64\x65']) {
            case '\x62\x61\x74\x74\x6c\x65\x4d\x65\x74\x68\x6f\x64':
                this[_0x5eab08(0x10d)] === $gameParty['\x62\x61\x74\x74\x6c\x65\x4d\x65\x6d\x62\x65\x72\x73']()[_0x5eab08(0x101)] && this[_0x5eab08(0xf6)]();
            }
        } else
            return _0x45e28a[_0x5eab08(0xfe)]();
    }, _0x2eccbd[_0x4a114f(0xdb)] = function () {
        var _0x2245e9 = _0x4a114f;
        if ($gameParty[_0x2245e9(0x11b)]())
            return;
        if (this[_0x2245e9(0x108)] !== BattleManager[_0x2245e9(0x136)])
            this['\x5f\x6c\x61\x73\x74\x42\x61\x74\x74\x6c\x65\x4d\x61\x6e\x61\x67\x65\x72\x49\x6e\x70\x75\x74\x41\x63\x74\x6f\x72'] = BattleManager[_0x2245e9(0x136)], this[_0x2245e9(0x10b)]();
        else
            this['\x5f\x6c\x61\x73\x74\x42\x61\x74\x74\x6c\x65\x4d\x61\x6e\x61\x67\x65\x72\x49\x6e\x70\x75\x74\x56\x61\x6c\x75\x65'] !== BattleManager[_0x2245e9(0xb0)] && ('\x59\x43\x61\x61\x6c' !== '\x48\x4f\x6f\x6f\x6b' ? (this[_0x2245e9(0x11c)] = BattleManager[_0x2245e9(0xb0)], this[_0x2245e9(0x10b)]()) : this[_0x2245e9(0x10d)] += 0x1);
    }, _0x2eccbd[_0x4a114f(0xec)] = function () {
        var _0x2995d1 = _0x4a114f;
        this['\x62\x61\x74\x74\x6c\x65\x44\x61\x74\x61'] = {
            '\x69\x73\x4c\x6f\x63\x61\x6c': !![],
            '\x62\x61\x74\x74\x6c\x65\x49\x64': _0x2995d1(0x12e),
            '\x61\x63\x74\x6f\x72\x73': [ANGameManager['\x6d\x79\x41\x63\x74\x6f\x72\x49\x64']()]
        }, _0x4d4fb1['\x70'](_0x2995d1(0x13d));
    }, _0x2eccbd['\x6f\x6e\x42\x61\x74\x74\x6c\x65\x53\x74\x61\x72\x74\x65\x64'] = function () {
        var _0x4c243c = _0x4a114f;
        this[_0x4c243c(0xba)] = [], this[_0x4c243c(0x11c)] = ![], this['\x5f\x6c\x61\x73\x74\x42\x61\x74\x74\x6c\x65\x4d\x61\x6e\x61\x67\x65\x72\x49\x6e\x70\x75\x74\x41\x63\x74\x6f\x72'] = null, this[_0x4c243c(0xff)]();
    }, _0x2eccbd[_0x4a114f(0x104)] = function () {
        var _0x5acf70 = _0x4a114f;
        _0x5acf70(0x119) === _0x5acf70(0x119) ? (!this['\x69\x73\x42\x61\x74\x74\x6c\x65\x4c\x6f\x63\x61\x6c']() && this[_0x5acf70(0xb4)](), this['\x62\x61\x74\x74\x6c\x65\x44\x61\x74\x61'] = null) : (_0x5a4346 = _0x7ccf26, _0x363296['\x77'](_0x31b575));
    }, _0x2eccbd[_0x4a114f(0x114)] = function (_0x4ae78b, _0x2a482a, _0x53b5bc) {
        var _0x34ef4 = _0x4a114f;
        if ($gameParty[_0x34ef4(0x11b)]())
            return;
        ANET['\x50\x50'][_0x34ef4(0x127)]() ? (this[_0x34ef4(0xba)] == null && (this[_0x34ef4(0xba)] = []), this[_0x34ef4(0xba)][_0x34ef4(0x103)]([
            _0x4ae78b,
            _0x2a482a,
            _0x53b5bc
        ])) : this[_0x34ef4(0x118)](_0x4ae78b, _0x2a482a, _0x53b5bc);
    }, _0x2eccbd['\x5f\x63\x61\x6c\x6c\x42\x61\x74\x74\x6c\x65\x4d\x65\x74\x68\x6f\x64\x4f\x6e\x53\x65\x72\x76\x65\x72'] = function (_0x3ed583, _0x3f5802, _0x36c12f) {
        var _0x36f442 = _0x4a114f;
        if (_0x36f442(0xd5) === '\x6c\x4f\x52\x56\x68')
            return _0x10039a['\x55\x74\x69\x6c\x73'][_0x36f442(0xe0)](_0x5f4be7);
        else
            _0x36f442(0xd7)['\x70'](), ANSyncDataManager[_0x36f442(0xe6)](_0x3ed583), _0x3ed583[_0x36f442(0xc0)][_0x36f442(0x102)] = !![], this[_0x36f442(0xae)](_0x3f5802, _0x3ed583[_0x36f442(0x10f)](), _0x36c12f), ANET['\x50\x50']['\x69\x73\x46\x6f\x72\x63\x65\x42\x61\x74\x74\x6c\x65\x53\x79\x6e\x63\x4d\x6f\x64\x65']() && (_0x36f442(0xc8) === _0x36f442(0xc8) ? (this[_0x36f442(0xbf)](_0x36f442(0xd4)), this[_0x36f442(0x10d)] += 0x1) : this[_0x36f442(0x11a)]());
    }, _0x2eccbd[_0x4a114f(0xd0)] = function (_0x2eb87e, _0x80e7c4, _0x1c7efa = ![]) {
        var _0x22ce5c = _0x4a114f, _0x52c59b, _0x45900f;
        if ($gameParty[_0x22ce5c(0x11b)]())
            return;
        _0x52c59b = _0x2eb87e[_0x22ce5c(0x10a)](function (_0x15a044) {
            var _0x40e29b = _0x22ce5c;
            return _0x15a044[_0x40e29b(0x10f)]();
        }), _0x45900f = {
            '\x61\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x49\x64': _0x80e7c4,
            '\x6d\x69\x72\x72\x6f\x72': _0x1c7efa,
            '\x74\x61\x72\x67\x65\x74\x73': _0x52c59b
        }, this[_0x22ce5c(0x111)](_0x45900f);
    }, _0x2eccbd[_0x4a114f(0x146)] = function () {
        var _0x26ef70 = _0x4a114f;
        if ('\x65\x51\x6b\x6a\x66' !== '\x65\x51\x6b\x6a\x66') {
            if (!this['\x69\x73\x53\x68\x6f\x75\x6c\x64\x57\x61\x69\x74\x53\x65\x72\x76\x65\x72']())
                return;
            '\x57\x41\x49\x54'['\x70'](this[_0x26ef70(0x10d)]);
            switch (this['\x5f\x77\x61\x69\x74\x4d\x6f\x64\x65']) {
            case _0x26ef70(0xd4):
                this[_0x26ef70(0x10d)] === _0x2a97e0['\x62\x61\x74\x74\x6c\x65\x4d\x65\x6d\x62\x65\x72\x73']()[_0x26ef70(0x101)] && this[_0x26ef70(0xf6)]();
            }
        } else {
            var _0x1feffb;
            _0x1feffb = BattleManager[_0x26ef70(0xf1)]();
            if (KDCore[_0x26ef70(0x122)]()) {
                if (_0x1feffb == null) {
                    if (_0x26ef70(0xd2) !== _0x26ef70(0x141))
                        return;
                    else
                        return _0x1d312c['\x70'](_0x26ef70(0xd6) + _0x1e29f3[_0x26ef70(0x107)]), this[_0x26ef70(0x140)](_0x528177);
                }
            }
            this[_0x26ef70(0x12c)](ANGameManager[_0x26ef70(0x123)](), _0x1feffb);
        }
    }, _0x2eccbd[_0x4a114f(0xf3)] = function (_0x4a6a1b) {
        var _0x171ef9 = _0x4a114f;
        if (_0x171ef9(0xcc) !== _0x171ef9(0x131))
            return _0x4d4fb1['\x70']('\x54\x72\x79\x20\x72\x65\x67\x69\x73\x74\x65\x72\x20\x62\x61\x74\x74\x6c\x65\x3a\x20' + _0x4a6a1b['\x62\x61\x74\x74\x6c\x65\x49\x64']), this[_0x171ef9(0x140)](_0x4a6a1b);
        else
            this[_0x171ef9(0x118)](_0x1fc5f2, _0xe60fee, _0x266d2b);
    }, _0x2eccbd['\x5f\x72\x65\x67\x69\x73\x74\x65\x72\x54\x6f\x45\x78\x69\x73\x74\x73\x53\x68\x61\x72\x65\x64\x42\x61\x74\x74\x6c\x65'] = function () {
        var _0x4ea81c = _0x4a114f;
        _0x4d4fb1['\x70']('\x4a\x6f\x69\x6e\x20\x53\x68\x61\x72\x65\x64\x20\x62\x61\x74\x74\x6c\x65'), $gameTemp[_0x4ea81c(0x139)] = !![];
    }, _0x2eccbd[_0x4a114f(0x12c)] = function (_0x310703, _0x5e7fb1) {
        var _0x3a2bd6 = _0x4a114f;
        if ('\x54\x48\x44\x76\x74' !== '\x54\x48\x44\x76\x74') {
            var _0x5bc2d3;
            _0x5bc2d3 = _0x414014[_0x3a2bd6(0xf1)]();
            if (_0x4ed52a['\x69\x73\x4d\x56']()) {
                if (_0x5bc2d3 == null)
                    return;
            }
            this[_0x3a2bd6(0x12c)](_0x2a9202[_0x3a2bd6(0x123)](), _0x5bc2d3);
        } else
            ANNetwork[_0x3a2bd6(0xca)](NMS[_0x3a2bd6(0x13b)]('\x69\x6e\x70\x75\x74\x41\x63\x74\x69\x6f\x6e', {
                '\x61\x63\x74\x69\x6f\x6e': _0x5e7fb1,
                '\x69\x6e\x70\x75\x74\x41\x63\x74\x6f\x72\x49\x64': _0x310703
            }));
    }, _0x2eccbd[_0x4a114f(0x10b)] = function () {
        var _0x47eb08 = _0x4a114f, _0x196b88, _0xbf63ed;
        _0xbf63ed = BattleManager[_0x47eb08(0xb0)], BattleManager['\x5f\x63\x75\x72\x72\x65\x6e\x74\x41\x63\x74\x6f\x72'] != null ? _0x196b88 = BattleManager[_0x47eb08(0x136)][_0x47eb08(0xb7)]() : '\x55\x5a\x78\x7a\x4e' !== _0x47eb08(0x11e) ? _0x1bb7c[_0x47eb08(0xca)](_0x46ea7e['\x42\x61\x74\x74\x6c\x65']('\x69\x6e\x70\x75\x74\x41\x63\x74\x69\x6f\x6e', {
            '\x61\x63\x74\x69\x6f\x6e': _0x5e0183,
            '\x69\x6e\x70\x75\x74\x41\x63\x74\x6f\x72\x49\x64': _0x31c2d8
        })) : _0x196b88 = null, ANNetwork[_0x47eb08(0xca)](NMS['\x42\x61\x74\x74\x6c\x65'](_0x47eb08(0xe7), {
            '\x69\x6e\x70\x75\x74\x53\x74\x61\x74\x65': _0xbf63ed,
            '\x69\x6e\x70\x75\x74\x41\x63\x74\x6f\x72\x49\x64': _0x196b88
        }));
    }, _0x2eccbd[_0x4a114f(0xf0)] = function (_0x821bd3, _0x68233) {
        var _0x505f20 = _0x4a114f;
        _0x505f20(0xed) !== '\x61\x43\x42\x55\x77' ? this[_0x505f20(0x145)] <= 0x0 ? (_0x49913f['\x70']('\x54\x49\x4d\x45\x20\x4f\x55\x54'), this['\x72\x65\x73\x65\x74\x57\x61\x69\x74']()) : (this['\x5f\x77\x61\x69\x74\x54\x69\x6d\x65\x6f\x75\x74']--, this[_0x505f20(0xb3)]()) : ANNetwork['\x73\x65\x6e\x64'](NMS['\x42\x61\x74\x74\x6c\x65'](_0x505f20(0x12b), {
            '\x63\x6d\x64': _0x821bd3,
            '\x74\x65\x78\x74': _0x68233
        }));
    }, _0x2eccbd[_0x4a114f(0xff)] = function () {
        var _0x59c18c = _0x4a114f;
        if (_0x59c18c(0x125) !== _0x59c18c(0x125)) {
            var _0x5bf225, _0x1df9ff;
            if (_0x4fa857[_0x59c18c(0x11b)]())
                return;
            _0x5bf225 = _0x2b377f['\x6d\x61\x70'](function (_0x4b2714) {
                var _0x22c001 = _0x59c18c;
                return _0x4b2714[_0x22c001(0x10f)]();
            }), _0x1df9ff = {
                '\x61\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x49\x64': _0x1297e1,
                '\x6d\x69\x72\x72\x6f\x72': _0x2adb2e,
                '\x74\x61\x72\x67\x65\x74\x73': _0x5bf225
            }, this[_0x59c18c(0x111)](_0x1df9ff);
        } else
            return ANNetwork[_0x59c18c(0xca)](NMS[_0x59c18c(0x13b)](_0x59c18c(0xe4)));
    }, _0x2eccbd['\x73\x65\x6e\x64\x42\x61\x74\x74\x6c\x65\x45\x6e\x64\x65\x64'] = function () {
        var _0x5f5341 = _0x4a114f;
        if (_0x5f5341(0x115) !== _0x5f5341(0x115))
            _0x52aaa0 = _0x3e918e[_0x5f5341(0x136)][_0x5f5341(0xb7)]();
        else
            return ANNetwork['\x73\x65\x6e\x64'](NMS[_0x5f5341(0x13b)]('\x65\x6e\x64\x65\x64'));
    }, _0x2eccbd['\x73\x65\x6e\x64\x42\x61\x74\x74\x6c\x65\x4d\x65\x74\x68\x6f\x64'] = function (_0x4f1bb7, _0x490dcd, _0x3f1126) {
        var _0x2e3474 = _0x4a114f, _0x3f67e2;
        _0x3f67e2 = {
            '\x6d\x65\x74\x68\x6f\x64': _0x4f1bb7,
            '\x69\x64': _0x490dcd,
            '\x64\x61\x74\x61': _0x3f1126
        }, ANNetwork['\x73\x65\x6e\x64'](NMS['\x42\x61\x74\x74\x6c\x65'](_0x2e3474(0xd4), _0x3f67e2), !![]);
    }, _0x2eccbd['\x73\x65\x6e\x64\x42\x61\x74\x74\x6c\x65\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e'] = function (_0x133828) {
        var _0x410c69 = _0x4a114f;
        ANNetwork[_0x410c69(0xca)](NMS[_0x410c69(0x13b)](_0x410c69(0x13c), _0x133828));
    }, _0x2eccbd[_0x4a114f(0xbb)] = function () {
        var _0x335a13 = _0x4a114f;
        if (_0x335a13(0x109) === '\x61\x48\x52\x69\x4b') {
            if (_0x3e99c8[_0x335a13(0x11b)]())
                return;
            if (this[_0x335a13(0x108)] !== _0x949764[_0x335a13(0x136)])
                this['\x5f\x6c\x61\x73\x74\x42\x61\x74\x74\x6c\x65\x4d\x61\x6e\x61\x67\x65\x72\x49\x6e\x70\x75\x74\x41\x63\x74\x6f\x72'] = _0x5ea482[_0x335a13(0x136)], this[_0x335a13(0x10b)]();
            else
                this['\x5f\x6c\x61\x73\x74\x42\x61\x74\x74\x6c\x65\x4d\x61\x6e\x61\x67\x65\x72\x49\x6e\x70\x75\x74\x56\x61\x6c\x75\x65'] !== _0xf67420[_0x335a13(0xb0)] && (this[_0x335a13(0x11c)] = _0x3a1758[_0x335a13(0xb0)], this[_0x335a13(0x10b)]());
        } else
            ANNetwork[_0x335a13(0xca)](NMS[_0x335a13(0x13b)](_0x335a13(0x137)));
    }, _0x2eccbd['\x73\x65\x6e\x64\x52\x65\x67\x69\x73\x74\x65\x72\x4f\x6e\x42\x61\x74\x74\x6c\x65'] = function (_0x45a682) {
        var _0x2c1082 = _0x4a114f;
        ANNetwork['\x67\x65\x74'](NMS['\x42\x61\x74\x74\x6c\x65'](_0x2c1082(0x126), _0x45a682), function (_0x28b929) {
            var _0x543e31 = _0x2c1082;
            if (_0x543e31(0xe2) === _0x543e31(0xeb))
                this[_0x543e31(0x144)] = {
                    '\x69\x73\x4c\x6f\x63\x61\x6c': !![],
                    '\x62\x61\x74\x74\x6c\x65\x49\x64': _0x543e31(0x12e),
                    '\x61\x63\x74\x6f\x72\x73': [_0x231aa2['\x6d\x79\x41\x63\x74\x6f\x72\x49\x64']()]
                }, _0x5b825a['\x70'](_0x543e31(0x13d));
            else
                return ANBattleManager[_0x543e31(0x143)](_0x28b929);
        }, function () {
            var _0x1ed5fd = _0x2c1082;
            return BattleManager[_0x1ed5fd(0x130)](null), ANBattleManager['\x72\x65\x67\x69\x73\x74\x65\x72\x4f\x6e\x4c\x6f\x63\x61\x6c\x42\x61\x74\x74\x6c\x65']();
        });
    }, _0x2eccbd[_0x4a114f(0x110)] = function (_0x4130d1) {
        var _0x1490b3 = _0x4a114f;
        if (!this[_0x1490b3(0xd8)]())
            return;
        if (this['\x69\x73\x42\x61\x74\x74\x6c\x65\x4c\x6f\x63\x61\x6c']())
            return;
        this['\x62\x61\x74\x74\x6c\x65\x44\x61\x74\x61'][_0x1490b3(0x107)] === _0x4130d1[_0x1490b3(0x107)] && ($gameTemp[_0x1490b3(0x112)] = [...this[_0x1490b3(0x144)][_0x1490b3(0x105)]], this[_0x1490b3(0x144)] = _0x4130d1);
    }, _0x2eccbd[_0x4a114f(0x143)] = function (_0x5b5bfc) {
        var _0x1c8ba6 = _0x4a114f, _0x5f2ab4;
        _0x1c8ba6(0x11d)['\x70'](), this['\x62\x61\x74\x74\x6c\x65\x44\x61\x74\x61'] = _0x5b5bfc, _0x5f2ab4 = BattleManager['\x5f\x65\x76\x65\x6e\x74\x43\x61\x6c\x6c\x62\x61\x63\x6b'], BattleManager[_0x1c8ba6(0xc4)](..._0x5b5bfc[_0x1c8ba6(0x133)]), _0x5f2ab4 != null && BattleManager['\x73\x65\x74\x45\x76\x65\x6e\x74\x43\x61\x6c\x6c\x62\x61\x63\x6b'](_0x5f2ab4), _0x1c8ba6(0x13f)['\x70'](_0x5b5bfc[_0x1c8ba6(0x133)]), console[_0x1c8ba6(0x120)](_0x5b5bfc), !this[_0x1c8ba6(0x117)]() && this[_0x1c8ba6(0x11a)]();
    }, _0x2eccbd[_0x4a114f(0x13e)] = function (_0x3f0817) {
        var _0x5e0005 = _0x4a114f;
        if (_0x5e0005(0xc5) === _0x5e0005(0xac))
            return;
        else {
            var _0x1c41af, _0x256b67;
            try {
                _0x256b67 = _0x3f0817[_0x5e0005(0xdc)][_0x5e0005(0x10a)](function (_0x5f01c6) {
                    var _0x352f7f = _0x5e0005;
                    if (_0x352f7f(0xce) === _0x352f7f(0xce))
                        return ANET[_0x352f7f(0xc2)]['\x75\x6e\x70\x61\x63\x6b\x42\x61\x74\x74\x6c\x65\x72\x46\x72\x6f\x6d\x4e\x65\x74\x77\x6f\x72\x6b'](_0x5f01c6);
                    else
                        _0x20b28e['\x67\x65\x74'](_0x15e706[_0x352f7f(0x13b)](_0x352f7f(0x126), _0x3b6581), function (_0x48659d) {
                            var _0x286b14 = _0x352f7f;
                            return _0x3119e4[_0x286b14(0x143)](_0x48659d);
                        }, function () {
                            var _0x17c331 = _0x352f7f;
                            return _0x44ad5b['\x6e\x53\x65\x74\x4e\x65\x74\x77\x6f\x72\x6b\x42\x61\x74\x74\x6c\x65'](null), _0x55e7b2[_0x17c331(0xec)]();
                        });
                }), $gameTemp[_0x5e0005(0xd0)](_0x256b67, _0x3f0817[_0x5e0005(0x12f)], _0x3f0817[_0x5e0005(0xbe)]);
            } catch (_0x2e33e0) {
                if (_0x5e0005(0x106) !== '\x67\x41\x49\x43\x6c')
                    _0x1c41af = _0x2e33e0, ANET['\x77'](_0x1c41af);
                else
                    return this[_0x5e0005(0xe9)] != null;
            }
        }
    }, _0x2eccbd[_0x4a114f(0xe3)] = function (_0x4c843d, _0x361e37, _0x277974) {
        var _0x202d38 = _0x4a114f;
        if ('\x71\x65\x6b\x59\x59' === '\x71\x65\x6b\x59\x59') {
            var _0x1f8f3b, _0x38e4ed;
            try {
                if (ANET['\x50\x50'][_0x202d38(0x127)]()) {
                    if (_0x202d38(0x13a) === '\x62\x66\x78\x6b\x55')
                        this['\x73\x65\x6e\x64\x42\x61\x74\x74\x6c\x65\x4d\x65\x74\x68\x6f\x64\x52\x65\x63\x65\x69\x76\x65\x64']();
                    else {
                        var _0x1ad7b7;
                        try {
                            this[_0x202d38(0x10d)] += 0x1;
                        } catch (_0x54ca46) {
                            _0x1ad7b7 = _0x54ca46, _0x485489['\x77'](_0x1ad7b7);
                        }
                    }
                }
                _0x1f8f3b = ANET['\x55\x74\x69\x6c\x73'][_0x202d38(0xe0)](_0x4c843d), _0x1f8f3b[_0x361e37] != null && _0x1f8f3b[_0x361e37](_0x277974);
            } catch (_0x329c6a) {
                if (_0x202d38(0x132) !== _0x202d38(0x132))
                    return;
                else
                    _0x38e4ed = _0x329c6a, ANET['\x77'](_0x38e4ed);
            }
        } else
            _0x30b765[_0x202d38(0xd9)]();
    }, _0x2eccbd[_0x4a114f(0xfd)] = function () {
        var _0x49bf80 = _0x4a114f, _0xc51225;
        try {
            if (_0x49bf80(0xda) === _0x49bf80(0xb1))
                return;
            else
                this['\x5f\x77\x61\x69\x74\x50\x6f\x6f\x6c'] += 0x1;
        } catch (_0x3a17b5) {
            _0xc51225 = _0x3a17b5, ANET['\x77'](_0xc51225);
        }
    }, _0x2eccbd[_0x4a114f(0xc9)] = function (_0x3bebb5, _0x217768) {
        var _0x3c669c = _0x4a114f, _0x3f1c16;
        try {
            if (!$gameParty['\x69\x6e\x42\x61\x74\x74\x6c\x65']())
                return;
            return BattleManager[_0x3c669c(0xb0)] = _0x3bebb5, _0x217768 === ANGameManager[_0x3c669c(0x123)]() ? BattleManager[_0x3c669c(0xdd)]() : BattleManager['\x6e\x43\x6c\x65\x61\x72\x43\x6c\x69\x65\x6e\x74\x49\x6e\x70\x75\x74']();
        } catch (_0x46a186) {
            _0x3f1c16 = _0x46a186, ANET['\x77'](_0x3f1c16);
        }
    }, _0x2eccbd[_0x4a114f(0xad)] = function (_0x384b52, _0x532515) {
        var _0x4dced2 = _0x4a114f;
        if (_0x4dced2(0x124) === '\x4c\x71\x64\x6c\x6f') {
            var _0x48c100;
            try {
                if (!ANGameManager[_0x4dced2(0x117)]())
                    return;
                return BattleManager[_0x4dced2(0xf1)]()[_0x4dced2(0xaf)](_0x532515), BattleManager[_0x4dced2(0xc3)]();
            } catch (_0x46aefe) {
                if (_0x4dced2(0xb9) !== _0x4dced2(0xb9))
                    return _0x656ced[_0x4dced2(0xca)](_0x4a8cfe[_0x4dced2(0x13b)](_0x4dced2(0x129)));
                else
                    _0x48c100 = _0x46aefe, ANET['\x77'](_0x48c100);
            }
        } else
            return;
    }, _0x2eccbd[_0x4a114f(0xcf)] = function (_0xb8d12d, _0xd11da4) {
        var _0x2b80de = _0x4a114f;
        if (_0x2b80de(0xde) === '\x49\x65\x75\x51\x55') {
            var _0x4a625b, _0x12a7e6, _0x3a35ea;
            try {
                if (!$gameParty[_0x2b80de(0xfe)]())
                    return;
                switch (_0xb8d12d) {
                case _0x2b80de(0xe8):
                    (_0x12a7e6 = BattleManager[_0x2b80de(0x12d)]) != null && (_0x2b80de(0xf4) !== _0x2b80de(0xf4) ? (_0x167c41[_0x2b80de(0x112)] = [...this[_0x2b80de(0x144)][_0x2b80de(0x105)]], this['\x62\x61\x74\x74\x6c\x65\x44\x61\x74\x61'] = _0x510fc1) : _0x12a7e6[_0x2b80de(0x10c)](_0xd11da4));
                    break;
                default:
                    (_0x3a35ea = BattleManager[_0x2b80de(0x12d)]) != null && _0x3a35ea[_0x2b80de(0x11f)]();
                }
            } catch (_0x38c474) {
                '\x42\x54\x42\x75\x55' !== _0x2b80de(0xc6) ? (_0x4a625b = _0x38c474, ANET['\x77'](_0x4a625b)) : this['\x73\x65\x6e\x64\x42\x61\x74\x74\x6c\x65\x45\x6e\x64\x65\x64']();
            }
        } else
            return;
    };
}()));

var _0x280b26 = _0x2cec;
(function (_0x1e4f2f, _0x3b664b) {
    var _0x30e695 = _0x2cec, _0x300085 = _0x1e4f2f();
    while (!![]) {
        try {
            var _0x1ce20f = parseInt(_0x30e695(0x107)) / 0x1 * (parseInt(_0x30e695(0x106)) / 0x2) + -parseInt(_0x30e695(0xc8)) / 0x3 * (parseInt(_0x30e695(0xd3)) / 0x4) + -parseInt(_0x30e695(0xac)) / 0x5 * (parseInt(_0x30e695(0xef)) / 0x6) + parseInt(_0x30e695(0x8c)) / 0x7 * (-parseInt(_0x30e695(0xff)) / 0x8) + -parseInt(_0x30e695(0x9e)) / 0x9 + parseInt(_0x30e695(0xbc)) / 0xa * (parseInt(_0x30e695(0xa3)) / 0xb) + -parseInt(_0x30e695(0xfd)) / 0xc * (-parseInt(_0x30e695(0xb0)) / 0xd);
            if (_0x1ce20f === _0x3b664b)
                break;
            else
                _0x300085['push'](_0x300085['shift']());
        } catch (_0x45e8de) {
            _0x300085['push'](_0x300085['shift']());
        }
    }
}(_0x42aa, 0x190e7), window[_0x280b26(0x9b)] = function () {
}, (function () {
    var _0x47aa48 = _0x280b26, _0x38b3f2, _0x37a27e;
    _0x38b3f2 = new KDCore[(_0x47aa48(0xbf))](_0x47aa48(0x89)), _0x38b3f2['\x73\x65\x74\x43\x6f\x6c\x6f\x72\x73'](KDCore[_0x47aa48(0xd6)][_0x47aa48(0xc2)], KDCore[_0x47aa48(0xd6)][_0x47aa48(0xfb)][_0x47aa48(0x8b)](0xf)), _0x38b3f2['\x6f\x6e'](), _0x37a27e = window[_0x47aa48(0x9b)], _0x37a27e[_0x47aa48(0xa7)] = function () {
        var _0x1488ce = _0x47aa48;
        if (_0x1488ce(0xf3) !== _0x1488ce(0xd5)) {
            if ($gameMessage[_0x1488ce(0x9c)]())
                $gameMessage[_0x1488ce(0xcc)](_0x37a27e[_0x1488ce(0xa7)]);
            else {
                if (_0x1488ce(0xd7) !== _0x1488ce(0xd7))
                    return;
                else
                    !$gameMap[_0x1488ce(0xf1)]() && (_0x37a27e['\x73\x65\x6e\x64\x45\x76\x65\x6e\x74\x45\x6e\x64\x65\x64'](), _0x37a27e['\x72\x65\x73\x65\x74\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74']());
            }
        } else
            _0x294275[0x0][_0x1488ce(0x100)] === 0x7b && _0x2e9788 > 0x0 ? (_0x22d389 = [
                _0x38d1c0,
                _0x2029b1,
                _0x316b9f[0x0][_0x1488ce(0x9d)][0x0]
            ], _0x1b527b['\x73\x65\x74\x56\x61\x6c\x75\x65'](_0x1f69b1, _0x5b4298[0x0][_0x1488ce(0x9d)][0x1] === 0x0)) : (_0x28cd72 = new _0x1132e8(), _0x5df62e[_0x1488ce(0xce)](_0x1ec710, _0x35aafb), _0x1fe7ba['\x65\x78\x65\x63\x75\x74\x65\x43\x6f\x6d\x6d\x61\x6e\x64']());
    }, _0x37a27e[_0x47aa48(0x98)] = function () {
        var _0x23f8ab = _0x47aa48, _0x38d6e8;
        NetPlayerDataWrapper[_0x23f8ab(0xab)](ANGameManager[_0x23f8ab(0xc9)]()) ? !$gameMap[_0x23f8ab(0xf1)]() && (!$gameMessage['\x69\x73\x42\x75\x73\x79']() && this[_0x23f8ab(0xb3)]()) : $gameMap[_0x23f8ab(0xf1)]() && (_0x38d6e8 = $gameMap[_0x23f8ab(0xcf)][_0x23f8ab(0xf5)](), this[_0x23f8ab(0xb4)](_0x38d6e8));
    }, _0x37a27e['\x73\x74\x61\x72\x74\x56\x69\x72\x74\x75\x61\x6c\x43\x6f\x6d\x6d\x61\x6e\x64'] = function (_0x50236e, _0x5aac2f, _0x25a413) {
        var _0x35190d = _0x47aa48;
        if (_0x35190d(0xdd) === _0x35190d(0xca)) {
            var _0x189a73, _0x3ef4e2, _0x4672ea;
            _0x3ef4e2 = {
                '\x63\x6f\x64\x65': 0x0,
                '\x69\x6e\x64\x65\x6e\x74': 0x0,
                '\x70\x61\x72\x61\x6d\x65\x74\x65\x72\x73': []
            }, _0x4672ea = {
                '\x6c\x69\x73\x74': [
                    _0x19b6d9,
                    _0x3ef4e2
                ]
            }, _0x189a73 = {
                '\x6d\x61\x70\x49\x64': _0x5a57b4[_0x35190d(0xf4)](),
                '\x65\x76\x65\x6e\x74\x49\x64': _0x77a742,
                '\x65\x76\x65\x6e\x74': _0x4672ea,
                '\x6f\x70\x74\x69\x6f\x6e\x73': _0xf8bf3e
            }, _0x37709f[_0x35190d(0xcd)](_0x4ef1d6['\x45\x76\x65\x6e\x74']('\x76\x69\x72\x74\x75\x61\x6c\x45\x76\x65\x6e\x74\x43\x6f\x6d\x6d\x61\x6e\x64', _0x189a73));
        } else {
            var _0x27a66b, _0x9a4218, _0x5c87a2;
            try {
                _0x50236e[0x0][_0x35190d(0x100)] === 0x7b && _0x5aac2f > 0x0 ? (_0x9a4218 = [
                    _0x25a413,
                    _0x5aac2f,
                    _0x50236e[0x0]['\x70\x61\x72\x61\x6d\x65\x74\x65\x72\x73'][0x0]
                ], $gameSelfSwitches[_0x35190d(0xe9)](_0x9a4218, _0x50236e[0x0]['\x70\x61\x72\x61\x6d\x65\x74\x65\x72\x73'][0x1] === 0x0)) : _0x35190d(0xe3) !== '\x70\x7a\x44\x78\x4d' ? _0x25f743 === _0x13bcc5[_0x35190d(0xd9)] && _0x5d3396[_0x35190d(0x94)]() : (_0x5c87a2 = new Game_Interpreter(), _0x5c87a2['\x73\x65\x74\x75\x70'](_0x50236e, _0x5aac2f), _0x5c87a2[_0x35190d(0xc5)]());
            } catch (_0x52ef69) {
                if ('\x65\x4d\x69\x4a\x6d' === _0x35190d(0x101)) {
                    ({
                        mapId: _0x565727,
                        eventId: _0x381dd9,
                        action: _0x3c94fa,
                        index: _0x1285da
                    } = _0x150060);
                    if (_0x2ef807[_0x35190d(0xf4)]() !== _0x1f66f1)
                        return;
                    if (!_0x427ad9[_0x35190d(0x10d)]())
                        return;
                    if (_0x161603[_0x35190d(0x10c)]['\x65\x76\x65\x6e\x74\x49\x64']() !== _0x2840ac)
                        return;
                    return _0x522b88[_0x35190d(0xf7)] = {
                        '\x61\x63\x74\x69\x6f\x6e': _0x727a81,
                        '\x69\x6e\x64\x65\x78': _0xe73c9
                    }, _0x1fc68f['\x70'](_0x35190d(0xad));
                } else
                    _0x27a66b = _0x52ef69, ANET['\x77'](_0x27a66b);
            }
        }
    }, _0x37a27e['\x69\x73\x56\x69\x72\x74\x75\x61\x6c\x43\x6f\x6d\x6d\x61\x6e\x64'] = function (_0x44f722) {
        var _0x4916f5 = _0x47aa48;
        return !ANET[_0x4916f5(0xf0)]['\x4e\x6f\x6e\x56\x69\x72\x74\x75\x61\x6c\x43\x6f\x6d\x6d\x61\x6e\x64\x73\x4c\x69\x73\x74'][_0x4916f5(0xdf)](_0x44f722);
    }, _0x37a27e[_0x47aa48(0xb9)] = function () {
        var _0x378241 = _0x47aa48;
        '\x4e\x52\x46\x62\x52' !== _0x378241(0x110) ? (this['\x5f\x73\x68\x61\x72\x65\x64\x49\x6e\x74\x65\x72\x70\x72\x65\x74\x65\x72'] = null, this['\x5f\x73\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74\x4d\x61\x73\x74\x65\x72'] = ![], this['\x68\x69\x64\x65\x57\x61\x69\x74\x50\x6c\x61\x79\x65\x72\x73\x4f\x6e\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74']()) : (_0x2e7fe6[_0x378241(0xb3)](), _0x298e25[_0x378241(0xb9)]());
    }, _0x37a27e[_0x47aa48(0x97)] = function (_0x104c91, _0x3011ae) {
        var _0x262232 = _0x47aa48;
        this[_0x262232(0x10c)] = _0x104c91, this[_0x262232(0xf2)] = _0x3011ae, $gameTemp['\x5f\x73\x68\x6f\x75\x6c\x64\x46\x6f\x72\x63\x65\x45\x78\x69\x74\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74'] = ![];
        if ($gameTemp[_0x262232(0xa2)]())
            return;
        if (this[_0x262232(0x10c)] == null) {
            if (_0x262232(0x90) !== _0x262232(0xdb))
                return;
            else
                return;
        }
        _0x38b3f2['\x70'](_0x262232(0xa0) + this[_0x262232(0x10c)][_0x262232(0xf5)]());
    }, _0x37a27e[_0x47aa48(0xd4)] = function () {
        var _0x364713 = _0x47aa48;
        if ('\x74\x4e\x75\x5a\x64' === _0x364713(0x8a))
            return;
        else
            return this[_0x364713(0x10d)]() && this[_0x364713(0xf2)] === !![];
    }, _0x37a27e[_0x47aa48(0x10d)] = function () {
        var _0x403704 = _0x47aa48;
        if ('\x72\x42\x51\x63\x51' !== '\x72\x42\x51\x63\x51')
            _0x109807[_0x403704(0xa2)]() && (_0x1ec71d === _0x4e1785[_0x403704(0xd9)] && _0x4a952f['\x72\x65\x74\x72\x69\x65\x76\x65\x4e\x65\x74\x77\x6f\x72\x6b\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74']());
        else
            return this[_0x403704(0x10c)] != null && $gameMap['\x69\x73\x45\x76\x65\x6e\x74\x52\x75\x6e\x6e\x69\x6e\x67']();
    }, _0x37a27e[_0x47aa48(0xe5)] = function () {
        var _0x4f5cf0 = _0x47aa48;
        if (_0x4f5cf0(0xb2) !== _0x4f5cf0(0xb2))
            _0x4c7664 = new _0x45d02d(), _0x5c0557[_0x4f5cf0(0xce)](_0x2bb5a8, _0x3fbd0e), _0x1cd7c8[_0x4f5cf0(0xc5)]();
        else {
            if (!this['\x69\x73\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74\x4d\x61\x73\x74\x65\x72']()) {
                if (_0x4f5cf0(0x9a) === _0x4f5cf0(0x9a))
                    return;
                else
                    !_0x1ae379[_0x4f5cf0(0xf1)]() && (_0x45ee95['\x73\x65\x6e\x64\x45\x76\x65\x6e\x74\x45\x6e\x64\x65\x64'](), _0x5404c0['\x72\x65\x73\x65\x74\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74']());
            }
            _0x38b3f2['\x70'](_0x4f5cf0(0xfc)), _0x4f5cf0(0xbd)['\x70'](), this[_0x4f5cf0(0x10e)](), this[_0x4f5cf0(0xb1)]();
        }
    }, _0x37a27e[_0x47aa48(0xee)] = function () {
        var _0x339679 = _0x47aa48;
        if ('\x6b\x4c\x49\x4c\x53' !== _0x339679(0xbe)) {
            var _0x3ac882, _0x3524c0;
            this['\x68\x69\x64\x65\x57\x61\x69\x74\x50\x6c\x61\x79\x65\x72\x73\x4f\x6e\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74'](), _0x3ac882 = _0x339679(0xb7), _0x3524c0 = '', this[_0x339679(0xd4)]() && this[_0x339679(0x10c)][_0x339679(0xcb)]() && (_0x3524c0 = _0x339679(0xc1)), typeof HUIManager !== '\x75\x6e\x64\x65\x66\x69\x6e\x65\x64' && HUIManager !== null && (_0x339679(0x105) === _0x339679(0xeb) ? _0x99c27b = _0x339679(0xc1) : HUIManager[_0x339679(0x104)](_0x3ac882, _0x3524c0, 0x3e8));
        } else {
            var _0xade88b;
            if (!this[_0x339679(0xd4)]())
                return;
            _0xade88b = {
                '\x6d\x61\x70\x49\x64': _0xa307b3[_0x339679(0xf4)](),
                '\x65\x76\x65\x6e\x74\x49\x64': this[_0x339679(0x10c)]['\x65\x76\x65\x6e\x74\x49\x64']()
            }, _0x1d63e7[_0x339679(0xcd)](_0x3c5452[_0x339679(0x10a)](_0x339679(0xa4), _0xade88b));
        }
    }, _0x37a27e[_0x47aa48(0xb1)] = function () {
        var _0x2b29a6 = _0x47aa48;
        return typeof HUIManager !== _0x2b29a6(0xc7) && HUIManager !== null ? HUIManager[_0x2b29a6(0x8f)]() : void 0x0;
    }, _0x37a27e[_0x47aa48(0xb4)] = function (_0x1ed485) {
        var _0x126786 = _0x47aa48;
        return ANNetwork[_0x126786(0xcd)](NMS[_0x126786(0x10a)]('\x65\x76\x65\x6e\x74\x53\x74\x61\x72\x74\x65\x64', _0x1ed485));
    }, _0x37a27e[_0x47aa48(0xb3)] = function () {
        var _0x58163d = _0x47aa48;
        return ANNetwork[_0x58163d(0xcd)](NMS[_0x58163d(0x10a)](_0x58163d(0xf6)));
    }, _0x37a27e[_0x47aa48(0xd0)] = function (_0x41294b, _0x1a639c, _0x58cd52) {
        var _0x551ef1 = _0x47aa48;
        if ('\x58\x66\x51\x6d\x48' === _0x551ef1(0xc6)) {
            var _0x5383b4, _0x522042, _0x6d9050;
            _0x522042 = {
                '\x63\x6f\x64\x65': 0x0,
                '\x69\x6e\x64\x65\x6e\x74': 0x0,
                '\x70\x61\x72\x61\x6d\x65\x74\x65\x72\x73': []
            }, _0x6d9050 = {
                '\x6c\x69\x73\x74': [
                    _0x41294b,
                    _0x522042
                ]
            }, _0x5383b4 = {
                '\x6d\x61\x70\x49\x64': $gameMap['\x6d\x61\x70\x49\x64'](),
                '\x65\x76\x65\x6e\x74\x49\x64': _0x58cd52,
                '\x65\x76\x65\x6e\x74': _0x6d9050,
                '\x6f\x70\x74\x69\x6f\x6e\x73': _0x1a639c
            }, ANNetwork[_0x551ef1(0xcd)](NMS[_0x551ef1(0x10a)](_0x551ef1(0xda), _0x5383b4));
        } else
            return;
    }, _0x37a27e[_0x47aa48(0x9f)] = function () {
        var _0x5c4714 = _0x47aa48;
        if (_0x5c4714(0xf9) !== '\x66\x54\x6c\x6e\x6e')
            return;
        else {
            var _0x5b6d3c;
            if (!this[_0x5c4714(0xd4)]()) {
                if ('\x61\x56\x65\x41\x75' !== _0x5c4714(0x112))
                    return;
                else
                    return;
            }
            _0x5b6d3c = {
                '\x6d\x61\x70\x49\x64': $gameMap[_0x5c4714(0xf4)](),
                '\x65\x76\x65\x6e\x74\x49\x64': this['\x5f\x73\x68\x61\x72\x65\x64\x49\x6e\x74\x65\x72\x70\x72\x65\x74\x65\x72'][_0x5c4714(0xf5)](),
                '\x69\x6e\x64\x65\x78': this['\x5f\x73\x68\x61\x72\x65\x64\x49\x6e\x74\x65\x72\x70\x72\x65\x74\x65\x72']['\x6e\x53\x79\x6e\x63\x57\x61\x69\x74\x43\x6f\x6d\x6d\x61\x6e\x64\x44\x61\x74\x61'][_0x5c4714(0xa5)],
                '\x69\x6e\x64\x65\x6e\x74': this['\x5f\x73\x68\x61\x72\x65\x64\x49\x6e\x74\x65\x72\x70\x72\x65\x74\x65\x72']['\x6e\x53\x79\x6e\x63\x57\x61\x69\x74\x43\x6f\x6d\x6d\x61\x6e\x64\x44\x61\x74\x61'][_0x5c4714(0xbb)]
            }, ANNetwork[_0x5c4714(0xcd)](NMS['\x45\x76\x65\x6e\x74'](_0x5c4714(0xd2), _0x5b6d3c));
        }
    }, _0x37a27e[_0x47aa48(0xed)] = function () {
        var _0x679bba = _0x47aa48, _0x2f8b57;
        if (this[_0x679bba(0xd4)]())
            return;
        _0x2f8b57 = {
            '\x6d\x61\x70\x49\x64': $gameMap[_0x679bba(0xf4)](),
            '\x65\x76\x65\x6e\x74\x49\x64': this[_0x679bba(0x10c)]['\x65\x76\x65\x6e\x74\x49\x64'](),
            '\x61\x63\x74\x6f\x72\x49\x64': ANGameManager[_0x679bba(0x111)](),
            '\x69\x6e\x64\x65\x78': this['\x5f\x73\x68\x61\x72\x65\x64\x49\x6e\x74\x65\x72\x70\x72\x65\x74\x65\x72'][_0x679bba(0xa1)][_0x679bba(0xa5)],
            '\x69\x6e\x64\x65\x6e\x74': this[_0x679bba(0x10c)][_0x679bba(0xa1)][_0x679bba(0xbb)]
        }, ANNetwork[_0x679bba(0xcd)](NMS[_0x679bba(0x10a)](_0x679bba(0xec), _0x2f8b57));
    }, _0x37a27e[_0x47aa48(0x109)] = function () {
        var _0x446cb3 = _0x47aa48, _0x59d86c;
        if (!this[_0x446cb3(0xd4)]()) {
            if (_0x446cb3(0x8d) === _0x446cb3(0x8d))
                return;
            else
                !_0x3b154d[_0x446cb3(0x9c)]() && this[_0x446cb3(0xb3)]();
        }
        _0x59d86c = {
            '\x6d\x61\x70\x49\x64': $gameMap[_0x446cb3(0xf4)](),
            '\x65\x76\x65\x6e\x74\x49\x64': this[_0x446cb3(0x10c)]['\x65\x76\x65\x6e\x74\x49\x64']()
        }, ANNetwork[_0x446cb3(0xcd)](NMS[_0x446cb3(0x10a)]('\x73\x68\x61\x72\x65\x64\x43\x61\x6e\x43\x6f\x6e\x74\x69\x6e\x75\x65', _0x59d86c));
    }, _0x37a27e[_0x47aa48(0x10e)] = function () {
        var _0x467e2d = _0x47aa48, _0xaee5b3;
        if (!this[_0x467e2d(0xd4)]()) {
            if (_0x467e2d(0xe6) !== _0x467e2d(0xfe))
                return;
            else
                _0xbd4c24 = _0x5df02a, _0x57f29['\x77'](_0x271068);
        }
        _0xaee5b3 = {
            '\x6d\x61\x70\x49\x64': $gameMap[_0x467e2d(0xf4)](),
            '\x65\x76\x65\x6e\x74\x49\x64': this[_0x467e2d(0x10c)][_0x467e2d(0xf5)]()
        }, ANNetwork[_0x467e2d(0xcd)](NMS['\x45\x76\x65\x6e\x74'](_0x467e2d(0xa4), _0xaee5b3));
    }, _0x37a27e['\x73\x65\x6e\x64\x43\x68\x6f\x69\x63\x65\x53\x65\x6c\x65\x63\x74\x69\x6f\x6e'] = function (_0x2065ff, _0x276dc0) {
        var _0x358781 = _0x47aa48;
        if ('\x47\x56\x7a\x66\x7a' === _0x358781(0xb6))
            _0x1c7dee = _0x5ccf70, _0x151daf['\x77'](_0x15e906);
        else {
            var _0x4a1cd3;
            if (!this[_0x358781(0xd4)]())
                return;
            _0x4a1cd3 = {
                '\x6d\x61\x70\x49\x64': $gameMap[_0x358781(0xf4)](),
                '\x65\x76\x65\x6e\x74\x49\x64': this[_0x358781(0x10c)]['\x65\x76\x65\x6e\x74\x49\x64'](),
                '\x69\x6e\x64\x65\x78': _0x2065ff,
                '\x61\x63\x74\x69\x6f\x6e': _0x276dc0
            }, ANNetwork['\x73\x65\x6e\x64'](NMS[_0x358781(0x10a)](_0x358781(0xe7), _0x4a1cd3));
        }
    }, _0x37a27e[_0x47aa48(0x10b)] = function (_0x4c33ab) {
        var _0x3f0523 = _0x47aa48, _0x2b3121, _0x2afdd0, _0x54664e;
        try {
            if (_0x4c33ab[_0x3f0523(0xa6)][_0x3f0523(0x10f)] === _0x3f0523(0xe4)) {
                if ($gameMap[_0x3f0523(0xf4)]() !== _0x4c33ab[_0x3f0523(0xf4)])
                    return;
            }
            if (!ANET[_0x3f0523(0xc0)]['\x69\x73\x50\x61\x73\x73\x45\x76\x65\x6e\x74\x46\x69\x6c\x74\x65\x72\x4f\x70\x74\x69\x6f\x6e\x73'](_0x4c33ab[_0x3f0523(0xa6)]))
                return;
            _0x2afdd0 = _0x4c33ab[_0x3f0523(0xba)], _0x54664e = _0x2afdd0[_0x3f0523(0xb8)];
            switch (_0x4c33ab[_0x3f0523(0xa6)][_0x3f0523(0x103)]) {
            case _0x3f0523(0xb5):
                _0x37a27e[_0x3f0523(0x8e)](_0x54664e, _0x4c33ab[_0x3f0523(0xf5)], _0x4c33ab[_0x3f0523(0xf4)]);
                break;
            case _0x3f0523(0xaf):
                $gameTemp[_0x3f0523(0xe8)](_0x2afdd0);
                break;
            default:
                _0x37a27e['\x69\x73\x56\x69\x72\x74\x75\x61\x6c\x43\x6f\x6d\x6d\x61\x6e\x64'](_0x54664e[0x0]['\x63\x6f\x64\x65']) ? _0x37a27e['\x73\x74\x61\x72\x74\x56\x69\x72\x74\x75\x61\x6c\x43\x6f\x6d\x6d\x61\x6e\x64'](_0x54664e, _0x4c33ab['\x65\x76\x65\x6e\x74\x49\x64'], _0x4c33ab['\x6d\x61\x70\x49\x64']) : $gameTemp[_0x3f0523(0xe8)](_0x2afdd0);
            }
        } catch (_0x983fbc) {
            if (_0x3f0523(0x93) !== _0x3f0523(0x93))
                return;
            else
                _0x2b3121 = _0x983fbc, ANET['\x77'](_0x2b3121);
        }
    }, _0x37a27e[_0x47aa48(0x102)] = function (_0x2d34de) {
        var _0x22f1ee = _0x47aa48;
        if ('\x75\x4a\x58\x46\x72' === _0x22f1ee(0xfa)) {
            var _0x8cd7b8, _0x5df4d2, _0x320155, _0x1807ca, _0x592e08;
            try {
                if ('\x74\x47\x52\x49\x57' === _0x22f1ee(0x96)) {
                    ({
                        mapId: _0x592e08,
                        eventId: _0x5df4d2,
                        index: _0x1807ca,
                        indent: _0x320155
                    } = _0x2d34de);
                    if ($gameMap['\x6d\x61\x70\x49\x64']() !== _0x592e08)
                        return;
                    if (_0x37a27e[_0x22f1ee(0x10d)]())
                        return;
                    if (_0x1807ca !== 0x0)
                        return;
                    $gameTemp[_0x22f1ee(0xea)](_0x5df4d2);
                    return;
                } else
                    _0x492915 = _0x30aebc[_0x22f1ee(0xcf)][_0x22f1ee(0xf5)](), this[_0x22f1ee(0xb4)](_0x14b065);
            } catch (_0x3ae50d) {
                _0x8cd7b8 = _0x3ae50d, ANET['\x77'](_0x8cd7b8);
            }
        } else
            return;
    }, _0x37a27e[_0x47aa48(0xc3)] = function (_0x2d3991) {
        var _0x16ad8d = _0x47aa48;
        if ('\x4c\x53\x56\x74\x79' === '\x62\x58\x54\x54\x78')
            this[_0x16ad8d(0x10c)] = null, this['\x5f\x73\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74\x4d\x61\x73\x74\x65\x72'] = ![], this['\x68\x69\x64\x65\x57\x61\x69\x74\x50\x6c\x61\x79\x65\x72\x73\x4f\x6e\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74']();
        else {
            var _0x2e5f32, _0x4ae85d, _0x196598, _0x33c9bb, _0x3953cf, _0x4df9d4;
            try {
                if ('\x55\x68\x43\x66\x5a' === _0x16ad8d(0x95))
                    return;
                else {
                    ({
                        mapId: _0x4df9d4,
                        eventId: _0x196598,
                        actorId: _0x2e5f32,
                        index: _0x3953cf,
                        indent: _0x33c9bb
                    } = _0x2d3991);
                    if ($gameMap[_0x16ad8d(0xf4)]() !== _0x4df9d4) {
                        if (_0x16ad8d(0x92) === _0x16ad8d(0x92))
                            return;
                        else {
                            if (!this['\x69\x73\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74\x4d\x61\x73\x74\x65\x72']())
                                return;
                            _0x118b7b['\x70']('\x53\x68\x61\x72\x65\x64\x20\x65\x76\x65\x6e\x74\x20\x66\x6f\x72\x63\x65\x20\x63\x61\x6e\x63\x65\x6c\x6c\x65\x64'), '\x53\x45\x4e\x44\x20\x41\x4c\x4c\x20\x43\x41\x4e\x43\x45\x4c\x20\x45\x56\x45\x4e\x54'['\x70'](), this[_0x16ad8d(0x10e)](), this[_0x16ad8d(0xb1)]();
                        }
                    }
                    if (!_0x37a27e[_0x16ad8d(0xd4)]()) {
                        if (_0x16ad8d(0xd8) === _0x16ad8d(0xd8))
                            return;
                        else
                            _0x23f546['\x6e\x53\x65\x74\x45\x6e\x64\x43\x61\x6c\x6c\x62\x61\x63\x6b'](_0x41f3da['\x65\x76\x65\x6e\x74\x50\x72\x6f\x63\x65\x73\x73\x45\x78\x69\x74']);
                    }
                    if (_0x37a27e['\x5f\x73\x68\x61\x72\x65\x64\x49\x6e\x74\x65\x72\x70\x72\x65\x74\x65\x72']['\x65\x76\x65\x6e\x74\x49\x64']() !== _0x196598) {
                        if (_0x16ad8d(0xe0) === '\x48\x41\x50\x43\x46')
                            return;
                        else
                            return this['\x69\x73\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74\x49\x73\x52\x75\x6e\x6e\x69\x6e\x67']() && this[_0x16ad8d(0xf2)] === !![];
                    }
                    _0x37a27e[_0x16ad8d(0x10c)][_0x16ad8d(0xc4)](_0x3953cf, _0x33c9bb, _0x2e5f32);
                }
            } catch (_0x3f3291) {
                _0x4ae85d = _0x3f3291, ANET['\x77'](_0x4ae85d);
            }
        }
    }, _0x37a27e[_0x47aa48(0xe2)] = function (_0x3b70ef) {
        var _0x2cfaae = _0x47aa48;
        if (_0x2cfaae(0xa9) === _0x2cfaae(0xa9)) {
            var _0x28d1e7, _0x18f4c5, _0x1adbab;
            try {
                ({
                    mapId: _0x1adbab,
                    eventId: _0x18f4c5
                } = _0x3b70ef);
                if ($gameMap[_0x2cfaae(0xf4)]() !== _0x1adbab)
                    return;
                if (!_0x37a27e[_0x2cfaae(0x10d)]())
                    return;
                if (_0x37a27e[_0x2cfaae(0xd4)]())
                    return;
                if (_0x37a27e[_0x2cfaae(0x10c)][_0x2cfaae(0xf5)]() !== _0x18f4c5)
                    return;
                return _0x37a27e[_0x2cfaae(0x10c)][_0x2cfaae(0x108)]();
            } catch (_0x322189) {
                return _0x28d1e7 = _0x322189, ANET['\x77'](_0x28d1e7);
            }
        } else
            return _0x569773 = _0xa730a, _0x40d98b['\x77'](_0x2f8571);
    }, _0x37a27e[_0x47aa48(0x99)] = function (_0xee06d2) {
        var _0x54b486 = _0x47aa48, _0x3c7bd6, _0x38684d, _0x1bcba3;
        try {
            ({
                mapId: _0x1bcba3,
                eventId: _0x38684d
            } = _0xee06d2);
            if ($gameMap[_0x54b486(0xf4)]() !== _0x1bcba3) {
                if (_0x54b486(0xa8) === '\x43\x51\x43\x59\x4f')
                    return;
                else
                    _0x2c3001[_0x54b486(0x104)](_0x4a87da, _0x3459ef, 0x3e8);
            }
            if (_0x37a27e[_0x54b486(0xd4)]()) {
                if (_0x54b486(0xd1) !== '\x68\x50\x58\x45\x4e')
                    return;
                else
                    return;
            }
            if (_0x37a27e[_0x54b486(0x10d)]()) {
                if (_0x37a27e[_0x54b486(0x10c)][_0x54b486(0xf5)]() !== _0x38684d)
                    return;
                return $gameTemp['\x5f\x73\x68\x6f\x75\x6c\x64\x46\x6f\x72\x63\x65\x45\x78\x69\x74\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74'] = !![];
            } else
                $gameTemp[_0x54b486(0xa2)]() && (_0x54b486(0xaa) !== _0x54b486(0xdc) ? _0x38684d === $gameTemp[_0x54b486(0xd9)] && $gameTemp[_0x54b486(0x94)]() : _0x134ec3[_0x54b486(0x9c)]() ? _0x23d757[_0x54b486(0xcc)](_0x545ed3[_0x54b486(0xa7)]) : !_0x2d2323['\x69\x73\x45\x76\x65\x6e\x74\x52\x75\x6e\x6e\x69\x6e\x67']() && (_0x2bc9c2[_0x54b486(0xb3)](), _0x389b6[_0x54b486(0xb9)]()));
        } catch (_0x53d753) {
            if ('\x4d\x70\x4c\x76\x71' !== '\x46\x58\x59\x41\x51')
                return _0x3c7bd6 = _0x53d753, ANET['\x77'](_0x3c7bd6);
            else {
                this[_0x54b486(0x10c)] = _0x448df0, this[_0x54b486(0xf2)] = _0x2f494f, _0x47159f[_0x54b486(0xe1)] = ![];
                if (_0xd17250[_0x54b486(0xa2)]())
                    return;
                if (this[_0x54b486(0x10c)] == null)
                    return;
                _0x5e843d['\x70']('\x53\x68\x61\x72\x65\x64\x20\x65\x76\x65\x6e\x74\x20\x72\x65\x67\x69\x73\x74\x72\x65\x64\x20' + this['\x5f\x73\x68\x61\x72\x65\x64\x49\x6e\x74\x65\x72\x70\x72\x65\x74\x65\x72'][_0x54b486(0xf5)]());
            }
        }
    }, _0x37a27e[_0x47aa48(0xf8)] = function (_0x5cf29e) {
        var _0x23c022 = _0x47aa48, _0x2b6f63, _0x4e53fb, _0x39c2c6, _0xccc5a, _0x1f6731;
        try {
            ({
                mapId: _0x1f6731,
                eventId: _0x39c2c6,
                action: _0x2b6f63,
                index: _0xccc5a
            } = _0x5cf29e);
            if ($gameMap[_0x23c022(0xf4)]() !== _0x1f6731)
                return;
            if (!_0x37a27e[_0x23c022(0x10d)]()) {
                if (_0x23c022(0xde) === _0x23c022(0xde))
                    return;
                else
                    !_0x229b74['\x69\x73\x45\x76\x65\x6e\x74\x52\x75\x6e\x6e\x69\x6e\x67']() && (!_0x5a8f5a['\x69\x73\x42\x75\x73\x79']() && this[_0x23c022(0xb3)]());
            }
            if (_0x37a27e[_0x23c022(0x10c)][_0x23c022(0xf5)]() !== _0x39c2c6) {
                if (_0x23c022(0x91) !== _0x23c022(0xae))
                    return;
                else
                    _0x447890 = _0x263e94, _0x2f1ff0['\x77'](_0x5a1d09);
            }
            return $gameTemp[_0x23c022(0xf7)] = {
                '\x61\x63\x74\x69\x6f\x6e': _0x2b6f63,
                '\x69\x6e\x64\x65\x78': _0xccc5a
            }, _0x38b3f2['\x70'](_0x23c022(0xad));
        } catch (_0x252a1e) {
            return _0x4e53fb = _0x252a1e, ANET['\x77'](_0x4e53fb);
        }
    };
}()));
function _0x2cec(_0x81cf26, _0x2ec193) {
    var _0x42aae0 = _0x42aa();
    return _0x2cec = function (_0x2cec35, _0x55b939) {
        _0x2cec35 = _0x2cec35 - 0x89;
        var _0x33ef5b = _0x42aae0[_0x2cec35];
        return _0x33ef5b;
    }, _0x2cec(_0x81cf26, _0x2ec193);
}
function _0x42aa() {
    var _0x52eca0 = [
        '\x78\x48\x76\x67\x77',
        '\x63\x6f\x6e\x74\x61\x69\x6e\x73',
        '\x48\x41\x50\x43\x46',
        '\x5f\x73\x68\x6f\x75\x6c\x64\x46\x6f\x72\x63\x65\x45\x78\x69\x74\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74',
        '\x6f\x6e\x43\x6f\x6e\x74\x69\x6e\x75\x65\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74',
        '\x70\x7a\x44\x78\x4d',
        '\x53\x61\x6d\x65\x20\x6d\x61\x70',
        '\x66\x6f\x72\x63\x65\x43\x61\x6e\x63\x65\x6c\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74',
        '\x78\x75\x52\x6c\x6c',
        '\x73\x68\x61\x72\x65\x64\x43\x68\x6f\x69\x63\x65',
        '\x72\x65\x73\x65\x72\x76\x65\x56\x69\x72\x74\x75\x61\x6c\x43\x6f\x6d\x6d\x6f\x6e\x45\x76\x65\x6e\x74',
        '\x73\x65\x74\x56\x61\x6c\x75\x65',
        '\x72\x65\x73\x65\x72\x76\x65\x4e\x65\x74\x77\x6f\x72\x6b\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74',
        '\x42\x66\x67\x63\x42',
        '\x72\x65\x67\x69\x73\x74\x65\x72\x44\x6f\x6e\x65',
        '\x73\x65\x6e\x64\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74\x52\x65\x67\x69\x73\x74\x65\x72\x65\x64\x44\x6f\x6e\x65',
        '\x73\x68\x6f\x77\x57\x61\x69\x74\x50\x6c\x61\x79\x65\x72\x73\x4f\x6e\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74',
        '\x31\x38\x31\x39\x32\x66\x56\x73\x62\x6f\x66',
        '\x53\x79\x73\x74\x65\x6d',
        '\x69\x73\x45\x76\x65\x6e\x74\x52\x75\x6e\x6e\x69\x6e\x67',
        '\x5f\x73\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74\x4d\x61\x73\x74\x65\x72',
        '\x4b\x72\x79\x6e\x6f',
        '\x6d\x61\x70\x49\x64',
        '\x65\x76\x65\x6e\x74\x49\x64',
        '\x65\x76\x65\x6e\x74\x45\x6e\x64\x65\x64',
        '\x6e\x53\x65\x6c\x65\x63\x74\x69\x6f\x6e\x41\x63\x74\x69\x6f\x6e\x46\x72\x6f\x6d\x4e\x65\x74\x77\x6f\x72\x6b',
        '\x6f\x6e\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74\x43\x68\x6f\x69\x63\x65\x41\x63\x74\x69\x6f\x6e\x46\x72\x6f\x6d\x53\x65\x72\x76\x65\x72',
        '\x66\x54\x6c\x6e\x6e',
        '\x75\x4a\x58\x46\x72',
        '\x42\x4c\x41\x43\x4b',
        '\x53\x68\x61\x72\x65\x64\x20\x65\x76\x65\x6e\x74\x20\x66\x6f\x72\x63\x65\x20\x63\x61\x6e\x63\x65\x6c\x6c\x65\x64',
        '\x34\x38\x63\x4c\x70\x73\x59\x78',
        '\x55\x59\x58\x69\x47',
        '\x31\x32\x38\x38\x73\x4f\x6a\x73\x43\x4d',
        '\x63\x6f\x64\x65',
        '\x50\x65\x7a\x69\x6e',
        '\x6f\x6e\x52\x65\x67\x69\x73\x74\x65\x72\x4f\x6e\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74\x52\x65\x71\x75\x65\x73\x74',
        '\x65\x78\x65\x63\x75\x74\x65\x4d\x6f\x64\x65',
        '\x73\x68\x6f\x77\x57\x61\x69\x74\x69\x6e\x67\x49\x6e\x66\x6f',
        '\x69\x64\x6c\x71\x56',
        '\x32\x76\x72\x74\x4e\x44\x4d',
        '\x31\x30\x35\x35\x39\x33\x5a\x71\x57\x4a\x53\x4f',
        '\x6e\x41\x6c\x6c\x6f\x77\x43\x6f\x6e\x74\x69\x6e\x75\x65\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74',
        '\x73\x65\x6e\x64\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74\x52\x65\x61\x64\x79\x54\x6f\x43\x6f\x6e\x74\x69\x6e\x75\x65',
        '\x45\x76\x65\x6e\x74',
        '\x6f\x6e\x56\x69\x72\x74\x75\x61\x6c\x43\x6f\x6d\x6d\x61\x6e\x64',
        '\x5f\x73\x68\x61\x72\x65\x64\x49\x6e\x74\x65\x72\x70\x72\x65\x74\x65\x72',
        '\x69\x73\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74\x49\x73\x52\x75\x6e\x6e\x69\x6e\x67',
        '\x73\x65\x6e\x64\x46\x6f\x72\x63\x65\x43\x61\x6e\x63\x65\x6c\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74',
        '\x73\x63\x6f\x70\x65',
        '\x42\x58\x6a\x49\x5a',
        '\x6d\x79\x41\x63\x74\x6f\x72\x49\x64',
        '\x75\x6f\x43\x68\x76',
        '\x4e\x65\x74\x49\x6e\x74\x72',
        '\x46\x6e\x70\x61\x45',
        '\x67\x65\x74\x4c\x69\x67\x68\x74\x65\x73\x74\x43\x6f\x6c\x6f\x72',
        '\x34\x37\x39\x35\x56\x73\x69\x44\x76\x6a',
        '\x76\x73\x47\x49\x53',
        '\x73\x74\x61\x72\x74\x56\x69\x72\x74\x75\x61\x6c\x43\x6f\x6d\x6d\x61\x6e\x64',
        '\x68\x69\x64\x65\x57\x61\x69\x74\x69\x6e\x67\x49\x6e\x66\x6f',
        '\x65\x42\x74\x6f\x77',
        '\x73\x42\x59\x4c\x4a',
        '\x72\x66\x6c\x72\x47',
        '\x63\x62\x67\x41\x45',
        '\x72\x65\x74\x72\x69\x65\x76\x65\x4e\x65\x74\x77\x6f\x72\x6b\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74',
        '\x6c\x67\x65\x6e\x6d',
        '\x74\x47\x52\x49\x57',
        '\x73\x65\x74\x75\x70\x53\x68\x61\x72\x65\x64\x49\x6e\x74\x65\x72\x70\x72\x65\x74\x65\x72',
        '\x63\x68\x65\x63\x6b\x45\x76\x65\x6e\x74\x52\x75\x6e\x6e\x69\x6e\x67',
        '\x6f\x6e\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74\x46\x6f\x72\x63\x65\x43\x61\x6e\x63\x65\x6c\x46\x72\x6f\x6d\x53\x65\x72\x76\x65\x72',
        '\x45\x47\x74\x78\x49',
        '\x41\x4e\x49\x6e\x74\x65\x72\x70\x72\x65\x74\x65\x72\x4d\x61\x6e\x61\x67\x65\x72',
        '\x69\x73\x42\x75\x73\x79',
        '\x70\x61\x72\x61\x6d\x65\x74\x65\x72\x73',
        '\x36\x39\x38\x38\x33\x32\x4f\x6f\x65\x6d\x61\x48',
        '\x73\x65\x6e\x64\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74\x52\x65\x71\x75\x69\x72\x65\x52\x65\x67\x69\x73\x74\x65\x72',
        '\x53\x68\x61\x72\x65\x64\x20\x65\x76\x65\x6e\x74\x20\x72\x65\x67\x69\x73\x74\x72\x65\x64\x20',
        '\x6e\x53\x79\x6e\x63\x57\x61\x69\x74\x43\x6f\x6d\x6d\x61\x6e\x64\x44\x61\x74\x61',
        '\x69\x73\x4e\x65\x74\x77\x6f\x72\x6b\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74\x52\x65\x73\x65\x72\x76\x65\x64',
        '\x36\x39\x33\x73\x46\x69\x4a\x4d\x52',
        '\x73\x68\x61\x72\x65\x64\x46\x6f\x72\x63\x65\x43\x61\x6e\x63\x65\x6c',
        '\x69\x6e\x64\x65\x78',
        '\x6f\x70\x74\x69\x6f\x6e\x73',
        '\x65\x76\x65\x6e\x74\x50\x72\x6f\x63\x65\x73\x73\x45\x78\x69\x74',
        '\x43\x51\x43\x59\x4f',
        '\x50\x49\x62\x51\x68',
        '\x42\x50\x61\x68\x70',
        '\x69\x73\x4f\x6e\x41\x6e\x79\x45\x76\x65\x6e\x74',
        '\x32\x36\x35\x70\x43\x5a\x43\x6e\x76',
        '\x53\x68\x61\x72\x65\x64\x20\x43\x68\x6f\x69\x63\x65\x20\x61\x63\x63\x65\x70\x74\x65\x64\x20\x66\x72\x6f\x6d\x20\x73\x65\x72\x76\x65\x72',
        '\x46\x7a\x4d\x68\x47',
        '\x43\x6f\x6d\x6d\x6f\x6e\x20\x45\x76\x65\x6e\x74',
        '\x31\x31\x34\x39\x31\x38\x37\x61\x75\x4e\x64\x43\x5a',
        '\x68\x69\x64\x65\x57\x61\x69\x74\x50\x6c\x61\x79\x65\x72\x73\x4f\x6e\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74',
        '\x43\x53\x62\x63\x78',
        '\x73\x65\x6e\x64\x45\x76\x65\x6e\x74\x45\x6e\x64\x65\x64',
        '\x73\x65\x6e\x64\x45\x76\x65\x6e\x74\x53\x74\x61\x72\x74\x65\x64',
        '\x56\x69\x72\x74\x75\x61\x6c',
        '\x6a\x64\x75\x69\x64',
        '\x57\x61\x69\x74\x69\x6e\x67\x20\x70\x6c\x61\x79\x65\x72\x73',
        '\x6c\x69\x73\x74',
        '\x72\x65\x73\x65\x74\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74',
        '\x65\x76\x65\x6e\x74',
        '\x69\x6e\x64\x65\x6e\x74',
        '\x32\x37\x31\x33\x30\x42\x44\x67\x58\x76\x69',
        '\x53\x45\x4e\x44\x20\x41\x4c\x4c\x20\x43\x41\x4e\x43\x45\x4c\x20\x45\x56\x45\x4e\x54',
        '\x43\x67\x61\x74\x53',
        '\x44\x65\x76\x4c\x6f\x67',
        '\x55\x74\x69\x6c\x73',
        '\x50\x72\x65\x73\x73\x20\x45\x53\x43\x20\x74\x6f\x20\x63\x61\x6e\x63\x65\x6c',
        '\x59\x45\x4c\x4c\x4f\x57',
        '\x6f\x6e\x52\x65\x67\x69\x73\x74\x65\x72\x4f\x6e\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74\x52\x65\x73\x70\x6f\x6e\x73\x65',
        '\x6e\x4f\x6e\x53\x79\x6e\x63\x65\x64\x45\x76\x65\x6e\x74\x43\x6f\x6d\x6d\x61\x6e\x64\x52\x65\x73\x70\x6f\x6e\x73\x65',
        '\x65\x78\x65\x63\x75\x74\x65\x43\x6f\x6d\x6d\x61\x6e\x64',
        '\x58\x66\x51\x6d\x48',
        '\x75\x6e\x64\x65\x66\x69\x6e\x65\x64',
        '\x32\x33\x33\x32\x38\x43\x47\x6c\x6a\x53\x4c',
        '\x6d\x79\x50\x6c\x61\x79\x65\x72\x44\x61\x74\x61',
        '\x72\x73\x4f\x73\x4f',
        '\x6e\x49\x73\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74\x43\x61\x6e\x42\x65\x46\x6f\x72\x63\x65\x43\x61\x6e\x63\x65\x6c\x6c\x65\x64',
        '\x6e\x53\x65\x74\x45\x6e\x64\x43\x61\x6c\x6c\x62\x61\x63\x6b',
        '\x73\x65\x6e\x64',
        '\x73\x65\x74\x75\x70',
        '\x5f\x69\x6e\x74\x65\x72\x70\x72\x65\x74\x65\x72',
        '\x73\x65\x6e\x64\x45\x76\x65\x6e\x74\x56\x69\x72\x74\x75\x61\x6c\x43\x6f\x6d\x6d\x61\x6e\x64',
        '\x58\x66\x57\x71\x79',
        '\x72\x65\x67\x69\x73\x74\x65\x72\x4f\x6e\x53\x68\x61\x72\x65\x64',
        '\x39\x32\x78\x6d\x55\x6d\x59\x55',
        '\x69\x73\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74\x4d\x61\x73\x74\x65\x72',
        '\x6c\x72\x68\x7a\x5a',
        '\x43\x6f\x6c\x6f\x72',
        '\x66\x4c\x75\x4d\x50',
        '\x6a\x64\x4e\x73\x6d',
        '\x5f\x72\x65\x73\x65\x72\x76\x65\x64\x4e\x65\x74\x77\x6f\x72\x6b\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74',
        '\x76\x69\x72\x74\x75\x61\x6c\x45\x76\x65\x6e\x74\x43\x6f\x6d\x6d\x61\x6e\x64',
        '\x71\x43\x52\x70\x70',
        '\x63\x6a\x42\x79\x4c',
        '\x62\x69\x66\x4d\x50'
    ];
    _0x42aa = function () {
        return _0x52eca0;
    };
    return _0x42aa();
}

// Generated by CoffeeScript 2.6.1
// * Данный класс отвечает за синхронизацию и обработку игровых карт

//@[GLOBAL]
window.ANMapManager = function() {};

(function() {
  var LOG, _;
  //@[LOG]
  LOG = new KDCore.DevLog("NetMap");
  LOG.setColors(KDCore.Color.AQUA, KDCore.Color.BLACK.getLightestColor(35));
  LOG.on();
  //@[DEFINES]
  _ = window.ANMapManager;
  //? КОМАНДЫ ЗАПРОСЫ (посылаются на сервер)
  // * ===============================================================
  _.sendMapLoaded = function() {
    return ANNetwork.send(NMS.Map("loaded", $gameMap.mapId()));
  };
  _.sendInitialMapData = function() {
    // * Отправляем принудительно свои данные всем игрокам на карте
    ANSyncDataManager.sendPlayerObserver();
    ANPlayersManager.sendPlayerLocation();
    if (ANGameManager.isMapMaster()) {
      this.sendMapEventsInitialPositions();
    }
  };
  _.sendEventMove = function(eventId) {
    var data, e, event;
    try {
      event = $gameMap.event(eventId);
      if (event == null) {
        return;
      }
      data = {
        id: eventId,
        mapId: $gameMap.mapId(),
        data: event.getMoveDataForNetwork()
      };
      ANNetwork.send(NMS.Map("eventMove", data), true);
    } catch (error) {
      e = error;
      KDCore.warning(e);
    }
  };
  // * Данную команду выполняет только мастер карты, когда кто-то подключается к карте
  _.sendMapEventsInitialPositions = function() {
    var ev, eventId, i, len, ref;
    ref = $gameMap.events();
    for (i = 0, len = ref.length; i < len; i++) {
      ev = ref[i];
      if (ev == null) {
        continue;
      }
      eventId = ev.eventId();
      setTimeout((function() {
        return ANMapManager.sendEventMove(eventId);
      }), 50); //TODO: Надо ли эту задержку?
    }
  };
  //? CALLBACKS ОТ ЗАПРОСОВ НА СЕРВЕР
  // * ===============================================================
  _.onEventMove = function(mapId, eventId, moveData) {
    var e, event;
    try {
      if ($gameMap.mapId() !== mapId) {
        return;
      }
      if (SceneManager.isBusyForNetworkData()) {
        return;
      }
      event = $gameMap.event(eventId);
      if (event != null) {
        event.moveStraightFromServer(moveData);
      }
    } catch (error) {
      e = error;
      ANET.w(e);
    }
  };
  _.onInitialMapSync = function() {
    var e;
    try {
      this.sendInitialMapData();
    } catch (error) {
      e = error;
      ANET.w(e);
    }
  };
})();


// Generated by CoffeeScript 2.6.1
// * Данный класс отвечает за синхронизацию и обработку данных игроков и их персонажей

//@[GLOBAL]
var ANPlayersManager;

ANPlayersManager = function() {};

(function() {
  var LOG, _;
  //@[LOG]
  LOG = new KDCore.DevLog("NetPlayer");
  LOG.setColors(KDCore.Color.AQUA, KDCore.Color.BLACK.getLightestColor(35));
  LOG.on();
  //@[DEFINES]
  _ = ANPlayersManager;
  //? КОМАНДЫ ЗАПРОСЫ (посылаются на сервер)
  // * ===============================================================
  _.sendBindActorFromGame = function(actorId) {
    return ANNetwork.callback(NMS.Game("bindActor", actorId), this.bindActorResult.bind(this));
  };
  _.sendBindActorFromLobby = function(actorId, callback) {
    return ANNetwork.callback(NMS.Game("bindActor", actorId), callback);
  };
  _.sendPlayerName = function() {
    return ANNetwork.send(NMS.Lobby("setPlayerName", ANGameManager.myPlayerData().name));
  };
  _.sendActorReady = function() {
    var actorData;
    actorData = $gameActors.actor(ANGameManager.myPlayerData().actorId);
    ANNetwork.send(NMS.Game("actorReady", actorData));
    return ANGameManager.setWait('playersActors');
  };
  _.sendPlayerMove = function() {
    var data;
    data = {
      id: ANNetwork.myId(),
      data: $gamePlayer.getMoveDataForNetwork()
    };
    return ANNetwork.send(NMS.Map("playerMove", data), true);
  };
  _.sendPlayerLocation = function() {
    var data;
    data = {
      id: ANNetwork.myId(),
      data: [$gamePlayer.x, $gamePlayer.y]
    };
    return ANNetwork.send(NMS.Map("playerLocation", data));
  };
  //? CALLBACKS ОТ ЗАПРОСОВ НА СЕРВЕР
  // * ===============================================================
  _.bindActorResult = function(result) {
    //TODO: Если true - зарезервировали,  дальше либо кастомизация, либо отправка
    // клиент готов начинать игру (и ожидание игроков включается)
    // false - значит данный персонаж занят, надо обрабатыватЬ!
    if (result === true) {
      "BINDING GOOD, send ActorReady".p();
      //TODO: Сейчас без кастомизации
      this.sendActorReady();
    }
  };
  _.onPlayerMove = function(id, moveData) {
    var char, e;
    try {
      if (SceneManager.isBusyForNetworkData()) {
        return;
      }
      char = $gameMap.networkCharacterById(id);
      if (char != null) {
        char.moveStraightFromServer(moveData);
      }
    } catch (error) {
      e = error;
      ANET.w(e);
    }
  };
  _.onPlayerLocation = function(id, positionData) {
    var char, e;
    try {
      char = $gameMap.networkCharacterById(id);
      if (char != null) {
        char.setPosition(positionData[0], positionData[1]);
      }
    } catch (error) {
      e = error;
      ANET.w(e);
    }
  };
})();


(function (_0xb716f9, _0x27ac66) {
    var _0x872d18 = _0x2646, _0x3a4a3c = _0xb716f9();
    while (!![]) {
        try {
            var _0x2bc2ac = parseInt(_0x872d18(0x21f)) / 0x1 + parseInt(_0x872d18(0x20d)) / 0x2 * (-parseInt(_0x872d18(0x1de)) / 0x3) + -parseInt(_0x872d18(0x202)) / 0x4 + parseInt(_0x872d18(0x1d2)) / 0x5 * (parseInt(_0x872d18(0x1ff)) / 0x6) + -parseInt(_0x872d18(0x204)) / 0x7 + -parseInt(_0x872d18(0x215)) / 0x8 + -parseInt(_0x872d18(0x1d6)) / 0x9;
            if (_0x2bc2ac === _0x27ac66)
                break;
            else
                _0x3a4a3c['push'](_0x3a4a3c['shift']());
        } catch (_0xf72b0c) {
            _0x3a4a3c['push'](_0x3a4a3c['shift']());
        }
    }
}(_0x25d6, 0x22581), window['\x41\x4e\x53\x79\x6e\x63\x44\x61\x74\x61\x4d\x61\x6e\x61\x67\x65\x72'] = function () {
}, (function () {
    var _0x3d9ba4 = _0x2646, _0x5c4246, _0x4fee53;
    _0x5c4246 = new KDCore[(_0x3d9ba4(0x1e1))](_0x3d9ba4(0x21c)), _0x5c4246[_0x3d9ba4(0x1f1)](KDCore[_0x3d9ba4(0x1fb)]['\x41\x51\x55\x41'], KDCore[_0x3d9ba4(0x1fb)][_0x3d9ba4(0x21d)][_0x3d9ba4(0x1e5)](0x23)), _0x5c4246['\x6f\x6e'](), _0x4fee53 = window['\x41\x4e\x53\x79\x6e\x63\x44\x61\x74\x61\x4d\x61\x6e\x61\x67\x65\x72'], _0x4fee53[_0x3d9ba4(0x1ce)] = function () {
        var _0x3543e3 = _0x3d9ba4;
        return this[_0x3543e3(0x211)](_0x3543e3(0x1d9), ANNetwork['\x6d\x79\x49\x64'](), $gamePlayer[_0x3543e3(0x20a)]());
    }, _0x4fee53[_0x3d9ba4(0x201)] = function (_0x6a2d13) {
        var _0x2426db = _0x3d9ba4;
        this[_0x2426db(0x211)]('\x65\x76\x65\x6e\x74\x43\x68\x61\x72', {
            '\x6d\x61\x70\x49\x64': $gameMap[_0x2426db(0x1f0)](),
            '\x65\x76\x65\x6e\x74\x49\x64': _0x6a2d13
        }, $gameMap[_0x2426db(0x216)](_0x6a2d13)[_0x2426db(0x20a)]());
    }, _0x4fee53['\x73\x65\x6e\x64\x41\x63\x74\x6f\x72\x4f\x62\x73\x65\x72\x76\x65\x72'] = function () {
        var _0x5f5996 = _0x3d9ba4;
        return this[_0x5f5996(0x211)](_0x5f5996(0x1d1), ANNetwork['\x6d\x79\x49\x64'](), $gameParty[_0x5f5996(0x218)]()[_0x5f5996(0x20a)]());
    }, _0x4fee53[_0x3d9ba4(0x20f)] = function (_0x1528b1) {
        var _0x9c2c15 = _0x3d9ba4;
        if (_0x9c2c15(0x1e9) === _0x9c2c15(0x210))
            this[_0x9c2c15(0x211)](_0x9c2c15(0x220), {
                '\x6d\x61\x70\x49\x64': _0x554380[_0x9c2c15(0x1f0)](),
                '\x65\x76\x65\x6e\x74\x49\x64': _0x37304e
            }, _0x5927e5['\x65\x76\x65\x6e\x74'](_0x222bd6)['\x67\x65\x74\x4f\x62\x73\x65\x72\x76\x65\x72\x44\x61\x74\x61\x46\x6f\x72\x4e\x65\x74\x77\x6f\x72\x6b']());
        else {
            var _0x704a9f;
            if ($gameParty[_0x9c2c15(0x1d4)]()) {
                if (_0x9c2c15(0x1f9) === '\x49\x6e\x61\x58\x7a')
                    return;
                else
                    return;
            }
            _0x704a9f = _0x1528b1['\x6d\x61\x70'](function (_0x99b0b7) {
                var _0xdfe946 = _0x9c2c15;
                return [
                    _0x99b0b7[_0xdfe946(0x21a)](),
                    _0x99b0b7[_0xdfe946(0x20a)]()
                ];
            }), this[_0x9c2c15(0x211)](_0x9c2c15(0x1f4), null, _0x704a9f);
        }
    }, _0x4fee53['\x73\x65\x6e\x64\x42\x61\x74\x74\x6c\x65\x72\x4f\x62\x73\x65\x72\x76\x65\x72'] = function (_0x38cfc2) {
        var _0x3107cb = _0x3d9ba4;
        if (_0x3107cb(0x212) === _0x3107cb(0x219)) {
            var _0xad4bb;
            _0xad4bb = {
                '\x69\x64': _0x5d8dab,
                '\x64\x61\x74\x61': _0x54514b
            }, _0x46624d[_0x3107cb(0x1cc)](_0x26a01c[_0x3107cb(0x1e8)]('\x73\x77\x69\x74\x63\x68', _0xad4bb));
        } else
            return _0x3107cb(0x213)['\x70'](), this[_0x3107cb(0x211)](_0x3107cb(0x1e2), _0x38cfc2[_0x3107cb(0x21a)](), _0x38cfc2[_0x3107cb(0x20a)]());
    }, _0x4fee53['\x73\x65\x6e\x64\x42\x61\x74\x74\x6c\x65\x72\x52\x65\x73\x75\x6c\x74\x4f\x62\x73\x65\x72\x76\x65\x72'] = function (_0xb4d39b) {
        var _0x133fc4 = _0x3d9ba4;
        _0x133fc4(0x1f5)['\x70']();
        if ($gameParty[_0x133fc4(0x1d4)]())
            return;
        return this[_0x133fc4(0x211)]('\x62\x61\x74\x74\x6c\x65\x72\x52\x65\x73\x75\x6c\x74', _0xb4d39b[_0x133fc4(0x21a)](), _0xb4d39b[_0x133fc4(0x1dd)]()[_0x133fc4(0x20a)]());
    }, _0x4fee53[_0x3d9ba4(0x211)] = function (_0x2800ba, _0x2ba884, _0x46a064) {
        var _0x1ef61d = _0x3d9ba4, _0x203034;
        _0x203034 = {
            '\x74\x79\x70\x65': _0x2800ba,
            '\x69\x64': _0x2ba884,
            '\x64\x61\x74\x61': _0x46a064
        }, ANNetwork[_0x1ef61d(0x1cc)](NMS['\x47\x61\x6d\x65']('\x6f\x62\x73\x65\x72\x76\x65\x72', _0x203034), !![]);
    }, _0x4fee53['\x73\x65\x6e\x64\x47\x6c\x6f\x62\x61\x6c\x56\x61\x72\x69\x61\x62\x6c\x65\x43\x68\x61\x6e\x67\x65'] = function (_0xfe49d9, _0x4d161d) {
        var _0x195cd2 = _0x3d9ba4, _0x209ba7;
        _0x209ba7 = {
            '\x69\x64': _0xfe49d9,
            '\x64\x61\x74\x61': _0x4d161d
        }, ANNetwork[_0x195cd2(0x1cc)](NMS[_0x195cd2(0x1e8)]('\x76\x61\x72\x69\x61\x62\x6c\x65', _0x209ba7));
    }, _0x4fee53[_0x3d9ba4(0x205)] = function (_0x129a7e, _0x3f0826) {
        var _0x34dc55 = _0x3d9ba4;
        if (_0x34dc55(0x1fc) === _0x34dc55(0x1fc)) {
            var _0x308c11;
            _0x308c11 = {
                '\x69\x64': _0x129a7e,
                '\x64\x61\x74\x61': _0x3f0826
            }, ANNetwork[_0x34dc55(0x1cc)](NMS[_0x34dc55(0x1e8)](_0x34dc55(0x1e7), _0x308c11));
        } else {
            if (!_0x4a3ddc[_0x34dc55(0x1fa)]())
                return;
            _0x28bed7 = _0x206670[_0x34dc55(0x20c)][_0x34dc55(0x203)](_0x4dd160);
            if (_0x1e7728 == null)
                return;
            this[_0x34dc55(0x208)](_0x8d8944), _0x50a48a['\x61\x70\x70\x6c\x79\x4f\x62\x73\x65\x72\x76\x65\x72\x44\x61\x74\x61'](_0xeea387);
        }
    }, _0x4fee53['\x73\x65\x6e\x64\x53\x79\x6e\x63\x47\x6c\x6f\x62\x61\x6c\x56\x61\x72\x69\x61\x62\x6c\x65\x73'] = function () {
    }, _0x4fee53[_0x3d9ba4(0x1ec)] = function (_0x414a20, _0x47544f, _0x558fb4) {
        var _0x18848a = _0x3d9ba4;
        switch (_0x47544f) {
        case '\x70\x6c\x61\x79\x65\x72\x43\x68\x61\x72':
            return this[_0x18848a(0x217)](_0x414a20, _0x558fb4);
        case _0x18848a(0x220):
            return this[_0x18848a(0x1cd)](_0x414a20, _0x558fb4);
        case _0x18848a(0x1d1):
            return this[_0x18848a(0x1d7)](_0x414a20, _0x558fb4);
        case _0x18848a(0x1e2):
            return this[_0x18848a(0x1f3)](_0x414a20, _0x558fb4);
        case _0x18848a(0x1d8):
            return this[_0x18848a(0x214)](_0x414a20, _0x558fb4);
        case _0x18848a(0x1f4):
            return this[_0x18848a(0x1ea)](_0x558fb4);
        default:
            _0x5c4246['\x70'](_0x18848a(0x1e3) + _0x47544f);
        }
    }, _0x4fee53[_0x3d9ba4(0x217)] = function (_0x4e1e14, _0x1cbfcd) {
        var _0x201866 = _0x3d9ba4;
        if (_0x201866(0x1ee) !== _0x201866(0x1ee)) {
            var _0x11bf98, _0xc53dd9;
            try {
                _0x11bf98 = _0x4a2cc3['\x6e\x65\x74\x77\x6f\x72\x6b\x43\x68\x61\x72\x61\x63\x74\x65\x72\x42\x79\x49\x64'](_0x554238), _0x11bf98 != null && _0x11bf98[_0x201866(0x207)](_0x43b234);
            } catch (_0x2fd6ac) {
                _0xc53dd9 = _0x2fd6ac, _0x2ab067['\x77'](_0xc53dd9);
            }
        } else {
            var _0x170c82, _0x2efd50;
            try {
                _0x170c82 = $gameMap['\x6e\x65\x74\x77\x6f\x72\x6b\x43\x68\x61\x72\x61\x63\x74\x65\x72\x42\x79\x49\x64'](_0x4e1e14), _0x170c82 != null && _0x170c82[_0x201866(0x207)](_0x1cbfcd);
            } catch (_0x8bbae8) {
                _0x201866(0x21b) === _0x201866(0x21b) ? (_0x2efd50 = _0x8bbae8, ANET['\x77'](_0x2efd50)) : (_0x43769e = _0x1343ad[_0x201866(0x1fd)](_0x1e6abd), _0x57738e != null && _0x1c565f[_0x201866(0x207)](_0x29c1fc));
            }
        }
    }, _0x4fee53[_0x3d9ba4(0x1cd)] = function (_0x978207, _0x314016) {
        var _0x2c325c = _0x3d9ba4, _0x4db6a1, _0x173e96, _0x39be3c, _0x3110c5;
        try {
            ({
                mapId: _0x3110c5,
                eventId: _0x39be3c
            } = _0x978207);
            if ($gameMap['\x6d\x61\x70\x49\x64']() !== _0x3110c5)
                return;
            _0x173e96 = $gameMap[_0x2c325c(0x216)](_0x39be3c), _0x173e96 != null && _0x173e96[_0x2c325c(0x207)](_0x314016);
        } catch (_0x27dce9) {
            '\x6c\x50\x61\x7a\x4b' === '\x45\x75\x73\x42\x73' ? (_0x399702 = _0x270f16, _0x1bc854['\x77'](_0x17da5f)) : (_0x4db6a1 = _0x27dce9, ANET['\x77'](_0x4db6a1));
        }
    }, _0x4fee53[_0x3d9ba4(0x1d7)] = function (_0x11868f, _0x7b77f7) {
        var _0x5acfa6 = _0x3d9ba4;
        if (_0x5acfa6(0x206) !== '\x65\x68\x72\x74\x71')
            _0x50950a['\x61\x70\x70\x6c\x79\x4f\x62\x73\x65\x72\x76\x65\x72\x44\x61\x74\x61'](_0x1e84d2);
        else {
            var _0x2b4665, _0x244046, _0x215418;
            try {
                if (_0x5acfa6(0x21e) !== _0x5acfa6(0x1ef)) {
                    $gameTemp['\x5f\x6e\x4c\x6f\x63\x61\x6c\x41\x63\x74\x6f\x72\x4d\x6f\x64\x65'] === !![] && ($gameTemp[_0x5acfa6(0x1f2)] = !![]);
                    _0x215418 = ANGameManager[_0x5acfa6(0x209)](_0x11868f), _0x2b4665 = NetPlayerDataWrapper['\x67\x65\x74\x41\x63\x74\x6f\x72\x46\x6f\x72\x50\x6c\x61\x79\x65\x72'](_0x215418), $gameTemp[_0x5acfa6(0x1f2)] = ![];
                    if (_0x2b4665 == null)
                        return;
                    this[_0x5acfa6(0x208)](_0x7b77f7), _0x2b4665[_0x5acfa6(0x207)](_0x7b77f7);
                } else
                    _0x8654c3 = _0x1adaa2, _0x64abab['\x77'](_0x2f43b7);
            } catch (_0x5028bf) {
                _0x244046 = _0x5028bf, ANET['\x77'](_0x244046);
            }
        }
    }, _0x4fee53[_0x3d9ba4(0x1f3)] = function (_0x42b816, _0x2b1232) {
        var _0x3c4468 = _0x3d9ba4;
        if (_0x3c4468(0x1eb) !== '\x59\x6e\x4c\x6b\x4c')
            return;
        else {
            var _0x3c02b4, _0x1ff547;
            try {
                if (!$gameParty[_0x3c4468(0x1fa)]())
                    return;
                _0x3c02b4 = ANET[_0x3c4468(0x20c)][_0x3c4468(0x203)](_0x42b816);
                if (_0x3c02b4 == null) {
                    if ('\x76\x72\x41\x4f\x71' !== _0x3c4468(0x1df))
                        return;
                    else
                        return;
                }
                this[_0x3c4468(0x208)](_0x2b1232), _0x3c02b4['\x61\x70\x70\x6c\x79\x4f\x62\x73\x65\x72\x76\x65\x72\x44\x61\x74\x61'](_0x2b1232);
            } catch (_0x2fef10) {
                if (_0x3c4468(0x1da) === _0x3c4468(0x1da))
                    _0x1ff547 = _0x2fef10, ANET['\x77'](_0x1ff547);
                else
                    return [
                        _0x48b1b8[_0x3c4468(0x21a)](),
                        _0x30f815[_0x3c4468(0x20a)]()
                    ];
            }
        }
    }, _0x4fee53['\x5f\x63\x6f\x6e\x76\x65\x72\x74\x41\x63\x74\x6f\x72\x45\x71\x75\x69\x70\x6d\x65\x6e\x73'] = function (_0x115d34) {
        var _0x18ecc5 = _0x3d9ba4, _0x3daca9, _0x1bdf4d, _0x3da075, _0x3b1c6a;
        if (_0x115d34[_0x18ecc5(0x1fe)] == null) {
            if (_0x18ecc5(0x1f6) !== '\x6a\x75\x45\x47\x72')
                _0x2b4649 = _0x18c2cb[_0x18ecc5(0x1fe)][_0x445998], _0x381812[_0x18ecc5(0x1fe)][_0x5524bc] = new _0x3c39de(), _0x494c51['\x5f\x65\x71\x75\x69\x70\x73'][_0x24657d][_0x18ecc5(0x1f8)] = _0x255214[_0x18ecc5(0x1f8)], _0xc15078[_0x18ecc5(0x1fe)][_0x4fbff0]['\x5f\x69\x74\x65\x6d\x49\x64'] = _0x4d22be['\x5f\x69\x74\x65\x6d\x49\x64'];
            else
                return;
        }
        for (_0x3daca9 = _0x3da075 = 0x0, _0x3b1c6a = _0x115d34[_0x18ecc5(0x1fe)][_0x18ecc5(0x1cf)]; 0x0 <= _0x3b1c6a ? _0x3da075 < _0x3b1c6a : _0x3da075 > _0x3b1c6a; _0x3daca9 = 0x0 <= _0x3b1c6a ? ++_0x3da075 : --_0x3da075) {
            _0x18ecc5(0x1e0) !== '\x64\x67\x7a\x6e\x76' ? _0x5bc592['\x5f\x6e\x4e\x65\x74\x77\x6f\x72\x6b\x41\x63\x74\x6f\x72\x50\x69\x63\x6b\x52\x65\x71\x75\x65\x73\x74'] = !![] : (_0x1bdf4d = _0x115d34[_0x18ecc5(0x1fe)][_0x3daca9], _0x115d34[_0x18ecc5(0x1fe)][_0x3daca9] = new Game_Item(), _0x115d34[_0x18ecc5(0x1fe)][_0x3daca9][_0x18ecc5(0x1f8)] = _0x1bdf4d['\x5f\x64\x61\x74\x61\x43\x6c\x61\x73\x73'], _0x115d34['\x5f\x65\x71\x75\x69\x70\x73'][_0x3daca9]['\x5f\x69\x74\x65\x6d\x49\x64'] = _0x1bdf4d[_0x18ecc5(0x200)]);
        }
    }, _0x4fee53['\x5f\x6f\x6e\x42\x61\x74\x74\x6c\x65\x72\x52\x65\x73\x75\x6c\x74\x4f\x62\x73\x65\x72\x76\x65\x72\x44\x61\x74\x61'] = function (_0x2ef4b9, _0x30f919) {
        var _0x414f37 = _0x3d9ba4, _0x24790b, _0x466b30, _0x14ef30;
        try {
            if (!$gameParty[_0x414f37(0x1fa)]())
                return;
            _0x24790b = ANET['\x55\x74\x69\x6c\x73'][_0x414f37(0x203)](_0x2ef4b9);
            if (_0x24790b == null)
                return;
            (_0x14ef30 = _0x24790b['\x72\x65\x73\x75\x6c\x74']()) != null && _0x14ef30[_0x414f37(0x207)](_0x30f919);
        } catch (_0x509636) {
            if ('\x74\x6a\x6f\x76\x67' === '\x74\x6a\x6f\x76\x67')
                _0x466b30 = _0x509636, ANET['\x77'](_0x466b30);
            else
                return;
        }
    }, _0x4fee53[_0x3d9ba4(0x1ea)] = function (_0x23c8dc) {
        var _0x174f3f = _0x3d9ba4, _0x566597, _0x4e096d, _0x236099, _0x30d6df, _0x43a7fd;
        try {
            if (_0x174f3f(0x1dc) !== _0x174f3f(0x20e)) {
                if (!$gameParty[_0x174f3f(0x1fa)]())
                    return;
                for (_0x236099 = 0x0, _0x30d6df = _0x23c8dc['\x6c\x65\x6e\x67\x74\x68']; _0x236099 < _0x30d6df; _0x236099++) {
                    if (_0x174f3f(0x20b) === '\x61\x6e\x51\x6c\x4e')
                        _0x43a7fd = _0x23c8dc[_0x236099], _0x566597 = ANET[_0x174f3f(0x20c)]['\x75\x6e\x70\x61\x63\x6b\x42\x61\x74\x74\x6c\x65\x72\x46\x72\x6f\x6d\x4e\x65\x74\x77\x6f\x72\x6b'](_0x43a7fd[0x0]), _0x566597 != null && (this[_0x174f3f(0x208)](_0x43a7fd[0x1]), _0x566597[_0x174f3f(0x207)](_0x43a7fd[0x1]));
                    else {
                        ({
                            mapId: _0x536fbe,
                            eventId: _0x45945a
                        } = _0x4cb25f);
                        if (_0x4a93be[_0x174f3f(0x1f0)]() !== _0x5acd4d)
                            return;
                        _0x55b6af = _0x37a3bd['\x65\x76\x65\x6e\x74'](_0x1c7734), _0x28e870 != null && _0x5dca10[_0x174f3f(0x207)](_0x4c20e4);
                    }
                }
                $gameTemp[_0x174f3f(0x1d3)] === !![] && (BattleManager[_0x174f3f(0x1d0)](), $gameTemp[_0x174f3f(0x1d3)] = ![]);
            } else {
                '\x53\x45\x4e\x44\x20\x42\x41\x54\x54\x4c\x45\x52\x20\x52\x45\x53\x55\x4c\x54'['\x70']();
                if (_0xb20be4[_0x174f3f(0x1d4)]())
                    return;
                return this['\x5f\x73\x65\x6e\x64\x4f\x62\x73\x65\x72\x76\x65\x72\x44\x61\x74\x61'](_0x174f3f(0x1d8), _0x5a7310[_0x174f3f(0x21a)](), _0x626da4['\x72\x65\x73\x75\x6c\x74']()[_0x174f3f(0x20a)]());
            }
        } catch (_0x2e8790) {
            if ('\x4d\x65\x72\x67\x52' === _0x174f3f(0x1e6))
                _0x4e096d = _0x2e8790, ANET['\x77'](_0x4e096d);
            else {
                var _0x57a87b;
                try {
                    _0x1c7894[_0x174f3f(0x1db)](_0x45f858, _0x4e9f91);
                } catch (_0x388099) {
                    _0x57a87b = _0x388099, _0x2b5800['\x77'](_0x57a87b);
                }
            }
        }
    }, _0x4fee53[_0x3d9ba4(0x1d5)] = function (_0x43d4f6, _0x52d656) {
        var _0x3fa13d = _0x3d9ba4, _0x4b8c86;
        try {
            '\x4e\x68\x73\x78\x51' !== _0x3fa13d(0x1ed) ? $gameVariables[_0x3fa13d(0x1db)](_0x43d4f6, _0x52d656) : (_0x35722b['\x6e\x52\x65\x66\x72\x65\x73\x68\x53\x68\x61\x72\x65\x64\x42\x61\x74\x74\x6c\x65\x53\x74\x61\x74\x65'](), _0x512bcf['\x5f\x72\x65\x71\x75\x65\x73\x74\x49\x6e\x69\x74\x69\x61\x6c\x53\x68\x61\x72\x65\x64\x42\x61\x74\x74\x6c\x65\x52\x65\x66\x72\x65\x73\x68'] = ![]);
        } catch (_0x443fa2) {
            _0x4b8c86 = _0x443fa2, ANET['\x77'](_0x4b8c86);
        }
    }, _0x4fee53['\x6f\x6e\x53\x77\x69\x74\x63\x68\x56\x61\x6c\x75\x65'] = function (_0xc96a8f, _0x2b8c8b) {
        var _0x416cb4 = _0x3d9ba4, _0x3a848d;
        try {
            if ('\x7a\x6e\x59\x73\x4d' === _0x416cb4(0x1f7))
                $gameSwitches[_0x416cb4(0x1e4)](_0xc96a8f, _0x2b8c8b);
            else {
                var _0x403a8f, _0x414b25, _0x3a56df, _0x19f90d;
                if (_0x130bca[_0x416cb4(0x1fe)] == null)
                    return;
                for (_0x403a8f = _0x3a56df = 0x0, _0x19f90d = _0x6cb7e3[_0x416cb4(0x1fe)][_0x416cb4(0x1cf)]; 0x0 <= _0x19f90d ? _0x3a56df < _0x19f90d : _0x3a56df > _0x19f90d; _0x403a8f = 0x0 <= _0x19f90d ? ++_0x3a56df : --_0x3a56df) {
                    _0x414b25 = _0x2cc91c[_0x416cb4(0x1fe)][_0x403a8f], _0x431156[_0x416cb4(0x1fe)][_0x403a8f] = new _0xb2a9c4(), _0x47c822[_0x416cb4(0x1fe)][_0x403a8f][_0x416cb4(0x1f8)] = _0x414b25['\x5f\x64\x61\x74\x61\x43\x6c\x61\x73\x73'], _0x345426[_0x416cb4(0x1fe)][_0x403a8f][_0x416cb4(0x200)] = _0x414b25[_0x416cb4(0x200)];
                }
            }
        } catch (_0x45a11c) {
            _0x3a848d = _0x45a11c, ANET['\x77'](_0x3a848d);
        }
    };
}()));
function _0x2646(_0x417ad2, _0x28e191) {
    var _0x25d652 = _0x25d6();
    return _0x2646 = function (_0x264631, _0x119ada) {
        _0x264631 = _0x264631 - 0x1cc;
        var _0x5e6afb = _0x25d652[_0x264631];
        return _0x5e6afb;
    }, _0x2646(_0x417ad2, _0x28e191);
}
function _0x25d6() {
    var _0x33c7df = [
        '\x67\x65\x74\x4f\x62\x73\x65\x72\x76\x65\x72\x44\x61\x74\x61\x46\x6f\x72\x4e\x65\x74\x77\x6f\x72\x6b',
        '\x61\x6e\x51\x6c\x4e',
        '\x55\x74\x69\x6c\x73',
        '\x36\x78\x70\x50\x73\x44\x6c',
        '\x68\x74\x6f\x6d\x61',
        '\x73\x65\x6e\x64\x42\x61\x74\x74\x6c\x65\x55\x6e\x69\x74\x73\x4f\x62\x73\x65\x72\x76\x65\x72',
        '\x46\x4a\x6d\x50\x78',
        '\x5f\x73\x65\x6e\x64\x4f\x62\x73\x65\x72\x76\x65\x72\x44\x61\x74\x61',
        '\x62\x46\x52\x62\x77',
        '\x53\x45\x4e\x44\x20\x42\x41\x54\x54\x4c\x45\x52\x20\x4f\x42\x53\x45\x52\x56\x45\x52',
        '\x5f\x6f\x6e\x42\x61\x74\x74\x6c\x65\x72\x52\x65\x73\x75\x6c\x74\x4f\x62\x73\x65\x72\x76\x65\x72\x44\x61\x74\x61',
        '\x34\x35\x35\x33\x36\x53\x78\x49\x45\x41\x42',
        '\x65\x76\x65\x6e\x74',
        '\x5f\x6f\x6e\x50\x6c\x61\x79\x65\x72\x43\x68\x61\x72\x4f\x62\x73\x65\x72\x76\x65\x72\x44\x61\x74\x61',
        '\x6c\x65\x61\x64\x65\x72',
        '\x45\x4e\x77\x75\x64',
        '\x70\x61\x63\x6b\x46\x6f\x72\x4e\x65\x74\x77\x6f\x72\x6b',
        '\x68\x4a\x44\x59\x78',
        '\x44\x61\x74\x61\x53\x79\x6e\x63',
        '\x42\x4c\x41\x43\x4b',
        '\x50\x7a\x59\x70\x50',
        '\x31\x33\x32\x32\x32\x31\x43\x57\x79\x61\x6b\x58',
        '\x65\x76\x65\x6e\x74\x43\x68\x61\x72',
        '\x73\x65\x6e\x64',
        '\x5f\x6f\x6e\x45\x76\x65\x6e\x74\x43\x68\x61\x72\x4f\x62\x73\x65\x72\x76\x65\x72\x44\x61\x74\x61',
        '\x73\x65\x6e\x64\x50\x6c\x61\x79\x65\x72\x4f\x62\x73\x65\x72\x76\x65\x72',
        '\x6c\x65\x6e\x67\x74\x68',
        '\x6e\x52\x65\x66\x72\x65\x73\x68\x53\x68\x61\x72\x65\x64\x42\x61\x74\x74\x6c\x65\x53\x74\x61\x74\x65',
        '\x70\x6c\x61\x79\x65\x72\x41\x63\x74\x6f\x72',
        '\x35\x30\x37\x38\x30\x71\x71\x41\x65\x74\x69',
        '\x5f\x72\x65\x71\x75\x65\x73\x74\x49\x6e\x69\x74\x69\x61\x6c\x53\x68\x61\x72\x65\x64\x42\x61\x74\x74\x6c\x65\x52\x65\x66\x72\x65\x73\x68',
        '\x69\x73\x4f\x6e\x65\x42\x61\x74\x74\x6c\x65\x72',
        '\x6f\x6e\x56\x61\x72\x69\x61\x62\x6c\x65\x56\x61\x6c\x75\x65',
        '\x38\x31\x39\x39\x30\x30\x5a\x64\x50\x6b\x67\x70',
        '\x5f\x6f\x6e\x50\x6c\x61\x79\x65\x72\x41\x63\x74\x6f\x72\x4f\x62\x73\x65\x72\x76\x65\x72\x44\x61\x74\x61',
        '\x62\x61\x74\x74\x6c\x65\x72\x52\x65\x73\x75\x6c\x74',
        '\x70\x6c\x61\x79\x65\x72\x43\x68\x61\x72',
        '\x76\x65\x47\x79\x78',
        '\x6f\x6e\x56\x61\x72\x69\x61\x62\x6c\x65\x46\x72\x6f\x6d\x53\x65\x72\x76\x65\x72',
        '\x54\x56\x72\x57\x74',
        '\x72\x65\x73\x75\x6c\x74',
        '\x31\x36\x39\x38\x33\x66\x54\x75\x65\x68\x53',
        '\x76\x72\x41\x4f\x71',
        '\x64\x67\x7a\x6e\x76',
        '\x44\x65\x76\x4c\x6f\x67',
        '\x62\x61\x74\x74\x6c\x65\x72',
        '\x46\x72\x6f\x6d\x20\x73\x65\x72\x76\x65\x72\x3a\x20\x75\x6e\x6b\x6e\x6f\x77\x6e\x20\x6f\x62\x73\x65\x72\x76\x65\x72\x20\x64\x61\x74\x61\x20\x74\x79\x70\x65\x3a\x20',
        '\x6f\x6e\x53\x77\x69\x74\x63\x68\x46\x72\x6f\x6d\x53\x65\x72\x76\x65\x72',
        '\x67\x65\x74\x4c\x69\x67\x68\x74\x65\x73\x74\x43\x6f\x6c\x6f\x72',
        '\x4d\x65\x72\x67\x52',
        '\x73\x77\x69\x74\x63\x68',
        '\x47\x61\x6d\x65',
        '\x74\x47\x4d\x4f\x4f',
        '\x5f\x6f\x6e\x42\x61\x74\x74\x6c\x65\x55\x6e\x69\x74\x73\x4f\x62\x73\x65\x72\x76\x65\x72\x44\x61\x74\x61',
        '\x59\x6e\x4c\x6b\x4c',
        '\x6f\x6e\x4f\x62\x73\x65\x72\x76\x65\x72\x44\x61\x74\x61',
        '\x57\x76\x41\x6e\x75',
        '\x56\x55\x64\x6d\x4e',
        '\x41\x6b\x5a\x4c\x44',
        '\x6d\x61\x70\x49\x64',
        '\x73\x65\x74\x43\x6f\x6c\x6f\x72\x73',
        '\x5f\x6e\x4e\x65\x74\x77\x6f\x72\x6b\x41\x63\x74\x6f\x72\x50\x69\x63\x6b\x52\x65\x71\x75\x65\x73\x74',
        '\x5f\x6f\x6e\x42\x61\x74\x74\x6c\x65\x72\x4f\x62\x73\x65\x72\x76\x65\x72\x44\x61\x74\x61',
        '\x62\x61\x74\x74\x6c\x65\x55\x6e\x69\x74\x73',
        '\x53\x45\x4e\x44\x20\x42\x41\x54\x54\x4c\x45\x52\x20\x52\x45\x53\x55\x4c\x54',
        '\x6a\x75\x45\x47\x72',
        '\x7a\x6e\x59\x73\x4d',
        '\x5f\x64\x61\x74\x61\x43\x6c\x61\x73\x73',
        '\x49\x6e\x61\x58\x7a',
        '\x69\x6e\x42\x61\x74\x74\x6c\x65',
        '\x43\x6f\x6c\x6f\x72',
        '\x4e\x63\x6f\x4d\x50',
        '\x6e\x65\x74\x77\x6f\x72\x6b\x43\x68\x61\x72\x61\x63\x74\x65\x72\x42\x79\x49\x64',
        '\x5f\x65\x71\x75\x69\x70\x73',
        '\x31\x35\x30\x57\x79\x55\x58\x75\x55',
        '\x5f\x69\x74\x65\x6d\x49\x64',
        '\x73\x65\x6e\x64\x45\x76\x65\x6e\x74\x4f\x62\x73\x65\x72\x76\x65\x72',
        '\x32\x30\x36\x30\x34\x34\x48\x41\x43\x68\x77\x56',
        '\x75\x6e\x70\x61\x63\x6b\x42\x61\x74\x74\x6c\x65\x72\x46\x72\x6f\x6d\x4e\x65\x74\x77\x6f\x72\x6b',
        '\x35\x36\x31\x31\x33\x34\x6c\x62\x6b\x4a\x79\x73',
        '\x73\x65\x6e\x64\x47\x6c\x6f\x62\x61\x6c\x53\x77\x69\x74\x63\x68\x43\x68\x61\x6e\x67\x65',
        '\x65\x68\x72\x74\x71',
        '\x61\x70\x70\x6c\x79\x4f\x62\x73\x65\x72\x76\x65\x72\x44\x61\x74\x61',
        '\x5f\x63\x6f\x6e\x76\x65\x72\x74\x41\x63\x74\x6f\x72\x45\x71\x75\x69\x70\x6d\x65\x6e\x73',
        '\x67\x65\x74\x50\x6c\x61\x79\x65\x72\x44\x61\x74\x61\x42\x79\x49\x64'
    ];
    _0x25d6 = function () {
        return _0x33c7df;
    };
    return _0x25d6();
}

// Generated by CoffeeScript 2.6.1
//? Методы для улучшения совместимости с плагинами Yanfly и VisuMZ

//@[EXTENSION]
ANET.extend(function() {
  if (Imported.YEP_BattleEngineCore === true || Imported.VisuMZ_1_BattleCore === true) {
    // * Force передача Sprite_Battler:startMove
    console.log("Load extension: YEP_BattleEngineCore | VisuMZ_1_BattleCore");
    ANET.CFIX.on_startMove = function(data) {
      var battler, duration, e, sprite, x, y;
      try {
        if (!$gameParty.inBattle()) {
          return;
        }
        if (!KDCore.Utils.isSceneBattle()) {
          return;
        }
        battler = ANET.Utils.unpackBattlerFromNetwork(data.packed);
        sprite = ANET.Utils.getBattlerSprite(battler);
        if (sprite == null) {
          return;
        }
        ({x, y, duration} = data);
        return ANET.CFIX.callLocalOnly(function() {
          return sprite.startMove(x, y, duration);
        });
      } catch (error) {
        e = error;
        return KDCore.warning(e);
      }
    };
    ANET.CFIX.on_startJump = function(data) {
      var a, b, battler, e, sprite;
      try {
        if (!$gameParty.inBattle()) {
          return;
        }
        if (!KDCore.Utils.isSceneBattle()) {
          return;
        }
        battler = ANET.Utils.unpackBattlerFromNetwork(data.packed);
        sprite = ANET.Utils.getBattlerSprite(battler);
        if (sprite == null) {
          return;
        }
        ({a, b} = data);
        return ANET.CFIX.callLocalOnly(function() {
          return sprite.startJump(a, b);
        });
      } catch (error) {
        e = error;
        return KDCore.warning(e);
      }
    };
    return (function() {      //╒═════════════════════════════════════════════════════════════════════════╛
      // ■ Sprite_Battler.coffee
      //╒═════════════════════════════════════════════════════════════════════════╛
      //---------------------------------------------------------------------------
      var ALIAS__startJump, ALIAS__startMove, _;
      //@[DEFINES]
      _ = Sprite_Battler.prototype;
      //@[ALIAS]
      ALIAS__startMove = _.startMove;
      _.startMove = function(x, y, duration) {
        var e, packed;
        ALIAS__startMove.call(this, x, y, duration);
        try {
          if (this._battler == null) {
            return;
          }
          if (!ANGameManager.isBattleMaster()) {
            return;
          }
          packed = ANET.Utils.packBattlerForNetwork(this._battler);
          return ANET.CFIX.send("startMove", {packed, x, y, duration});
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      };
      if (_.startJump != null) {
        ALIAS__startJump = _.startJump;
        _.startJump = function(a, b) {
          var e, packed;
          ALIAS__startJump.call(this, a, b);
          try {
            if (this._battler == null) {
              return;
            }
            if (!ANGameManager.isBattleMaster()) {
              return;
            }
            packed = ANET.Utils.packBattlerForNetwork(this._battler);
            return ANET.CFIX.send("startJump", {packed, a, b});
          } catch (error) {
            e = error;
            return KDCore.warning(e);
          }
        }; // * Если определён метод startJump
      }
    })();
  }
});

// ■ END Sprite_Battler.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ ANBattleManager.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__onLogWindowMessage, _;
  
  // * Эти методы (переопределения) только для RPG Maker MV
  if (KDCore.isMZ()) {
    return;
  }
  //@[DEFINES]
  _ = ANBattleManager;
  // * В MV нету _currentActor и _inputting
  //$[OVER]
  _.updateInputChange = function() {
    if ($gameParty.isOneBattler()) {
      return;
    }
    if (this._lastBattleManagerInputActor !== BattleManager._actorIndex) {
      this._lastBattleManagerInputActor = BattleManager._actorIndex;
      this.sendInputState();
    } else if (this._lastBattleManagerInputValue !== BattleManager.isInputting()) {
      this._lastBattleManagerInputValue = BattleManager.isInputting();
      this.sendInputState();
    }
  };
  
  //$[OVER]
  // * Отправить изменение состояния ввода
  _.sendInputState = function() {
    var actor, inputActorId, inputState;
    inputState = BattleManager.isInputting();
    actor = BattleManager.actor();
    if (actor != null) {
      inputActorId = actor.actorId();
    } else {
      inputActorId = null;
    }
    ANNetwork.send(NMS.Battle("input", {inputState, inputActorId}));
  };
  //$[OVER]
  // * Пришло изменение состояние ввода
  _.onBattleInputState = function(inputState, inputActorId) {
    var e;
    try {
      if (!$gameParty.inBattle()) {
        return;
      }
      if (inputState === true) {
        BattleManager._phase = 'input';
      } else {
        // * Чтобы скрыть выбор действий
        BattleManager.startTurn();
      }
      if (inputActorId === ANGameManager.myActorId()) {
        BattleManager.nSetCurrentClientInput();
      } else {
        // * Если не мой персонаж, то никакого ввода
        BattleManager.nClearClientInput();
      }
      return $gameTemp._isBattleSceneShouldBeRefreshed = true;
    } catch (error) {
      e = error;
      ANET.w(e);
    }
  };
  // * В MV анимация отдельно реализована
  // * Отправить боевую анимацию (из WindowLog) на сервер
  _.sendWindowLogAnimation = function(targets, animationId, mirror) {
    var converted, data;
    converted = targets.map(function(t) {
      return t.packForNetwork();
    });
    data = {
      animationId: animationId,
      mirror: mirror,
      targets: converted
    };
    // * Используем метод из MZ версии
    this.sendBattleAnimation(data);
  };
  //@[ALIAS]
  ALIAS__onLogWindowMessage = _.onLogWindowMessage;
  _.onLogWindowMessage = function() {
    ALIAS__onLogWindowMessage.call(this, ...arguments);
    $gameTemp.requestBattleRefresh();
  };
  // * С сервера пришла команда проиграть анимацию (замена метода из MZ)
  //$[OVER]
  _.onBattleAnimation = function(data) {
    var e, ref, targets;
    try {
      targets = data.targets.map(function(t) {
        return ANET.Utils.unpackBattlerFromNetwork(t);
      });
      if ((ref = BattleManager._logWindow) != null) {
        ref.showNormalAnimation(targets, data.animationId, data.mirror);
      }
    } catch (error) {
      e = error;
      ANET.w(e);
    }
  };
})();

// ■ END ANBattleManager.coffee
//---------------------------------------------------------------------------


function _0x3161() {
    var _0x395e6e = [
        '\x67\x65\x74\x50\x6c\x61\x79\x65\x72\x44\x61\x74\x61\x42\x79\x49\x64',
        '\x55\x6a\x51\x72\x6b',
        '\x78\x58\x45\x52\x6e',
        '\x67\x65\x74\x50\x6c\x61\x79\x65\x72\x49\x6e\x66\x6f',
        '\x31\x31\x39\x39\x33\x37\x30\x4e\x77\x78\x62\x76\x66',
        '\x70\x6c\x61\x79\x53\x45',
        '\x78\x61\x75\x52\x65',
        '\x5f\x6f\x6e\x5f\x74\x72\x61\x64\x65\x5f\x72\x65\x66\x75\x73\x65',
        '\x5f\x68\x69\x73\x49\x64',
        '\x31\x33\x37\x34\x35\x35\x36\x52\x53\x52\x6e\x64\x56',
        '\x6b\x6f\x56\x4f\x5a',
        '\x63\x53\x63\x4b\x63',
        '\x6f\x6e\x54\x72\x61\x64\x65\x43\x68\x61\x6e\x67\x65',
        '\x41\x6c\x76\x69\x6e',
        '\x69\x73\x50\x6c\x61\x79\x65\x72\x41\x76\x61\x69\x6c\x61\x62\x6c\x65\x46\x6f\x72\x54\x72\x61\x64\x65',
        '\x69\x73\x4f\x6e\x4d\x61\x70\x53\x63\x65\x6e\x65',
        '\x31\x36\x57\x4d\x50\x6e\x73\x41',
        '\x74\x70\x6a\x72\x4b',
        '\x6c\x6f\x73\x65\x47\x6f\x6c\x64',
        '\x67\x61\x69\x6e\x47\x6f\x6c\x64',
        '\x34\x32\x35\x73\x51\x4f\x4c\x69\x69',
        '\x5f\x6f\x6e\x5f\x74\x72\x61\x64\x65\x5f\x72\x65\x71\x75\x65\x73\x74',
        '\x7a\x6c\x53\x5a\x72',
        '\x69\x73\x50\x72\x6f',
        '\x68\x69\x64\x65\x49\x6e\x66\x6f\x4d\x65\x73\x73\x61\x67\x65',
        '\x5f\x6e\x65\x74\x4d\x79\x54\x72\x61\x64\x65\x49\x74\x65\x6d\x73',
        '\x6f\x6e\x41\x6e\x6f\x74\x68\x65\x72\x50\x6c\x61\x79\x65\x72\x4e\x6f\x74\x41\x63\x63\x65\x70\x74\x54\x72\x61\x64\x65\x4f\x72\x54\x69\x6d\x65\x6f\x75\x74',
        '\x54\x72\x61\x64\x65\x52\x65\x71\x75\x65\x73\x74\x54\x69\x6d\x65',
        '\x6b\x67\x6e\x6b\x67',
        '\x54\x47\x62\x53\x4b',
        '\x70\x50\x66\x6d\x65',
        '\x54\x52\x41\x44\x45\x20\x52\x45\x51\x55\x45\x53\x54\x20\x49\x4e',
        '\x73\x65\x6e\x64\x52\x65\x66\x75\x73\x65\x54\x72\x61\x64\x65\x52\x65\x71\x75\x65\x73\x74',
        '\x67\x65\x74\x54\x72\x61\x64\x65\x50\x61\x72\x74\x69\x63\x69\x70\x61\x6e\x74\x44\x61\x74\x61',
        '\x64\x78\x4b\x68\x6d',
        '\x35\x34\x36\x34\x30\x36\x30\x54\x66\x41\x52\x41\x7a',
        '\x6f\x6e\x54\x72\x61\x64\x65\x52\x65\x61\x64\x79',
        '\x63\x61\x6c\x6c\x62\x61\x63\x6b',
        '\x69\x73\x53\x63\x65\x6e\x65\x4d\x61\x70',
        '\x6d\x61\x70',
        '\x50\x6c\x61\x79\x65\x72\x20\x6e\x6f\x74\x20\x61\x76\x61\x69\x6c\x61\x62\x6c\x65\x21',
        '\x57\x61\x69\x74\x69\x6e\x67\x20',
        '\x67\x61\x69\x6e\x49\x74\x65\x6d',
        '\x73\x65\x6e\x64\x43\x6f\x6d\x70\x6c\x65\x74\x65\x54\x72\x61\x64\x65',
        '\x49\x5a\x77\x68\x77',
        '\x73\x68\x69\x66\x74',
        '\x4f\x70\x49\x72\x43',
        '\x73\x68\x6f\x77\x4d\x6f\x64\x61\x6c\x57\x69\x6e\x64\x6f\x77\x46\x6f\x72\x54\x72\x61\x64\x65',
        '\x72\x72\x6f\x4c\x52',
        '\x59\x45\x4c\x4c\x4f\x57',
        '\x51\x55\x41\x44\x66',
        '\x75\x6e\x70\x61\x63\x6b\x49\x74\x65\x6d\x46\x72\x6f\x6d\x4e\x65\x74\x77\x6f\x72\x6b',
        '\x39\x31\x30\x30\x33\x35\x49\x45\x57\x42\x4b\x65',
        '\x73\x6a\x4f\x54\x55',
        '\x42\x70\x58\x6c\x50',
        '\x6e\x61\x6d\x65',
        '\x59\x46\x73\x6b\x43',
        '\x6b\x43\x75\x52\x4a',
        '\x54\x52\x41\x44\x45\x20\x49\x54\x45\x4d\x53\x20\x49\x4e',
        '\x31\x32\x49\x74\x56\x45\x53\x4f',
        '\x43\x6f\x6c\x6f\x72',
        '\x5f\x6f\x6e\x52\x65\x71\x75\x65\x73\x74\x41\x6e\x73\x77\x65\x72',
        '\x20\x72\x65\x66\x75\x73\x65\x64',
        '\x61\x6e\x79',
        '\x69\x73\x43\x6f\x6e\x6e\x65\x63\x74\x65\x64',
        '\x72\x5a\x56\x49\x57',
        '\x6d\x79\x49\x64',
        '\x49\x72\x4b\x70\x66',
        '\x61\x6b\x65\x79\x55',
        '\x73\x65\x6e\x64\x4d\x79\x54\x72\x61\x64\x65\x49\x74\x65\x6d\x73',
        '\x73\x65\x6e\x64\x4d\x79\x54\x72\x61\x64\x65\x52\x65\x61\x64\x79\x53\x74\x61\x74\x75\x73',
        '\x44\x71\x51\x45\x75',
        '\x6f\x6e\x54\x72\x61\x64\x65\x43\x6f\x6d\x70\x6c\x65\x74\x65\x64',
        '\x48\x72\x56\x64\x4b',
        '\x5f\x73\x74\x61\x72\x74\x54\x72\x61\x64\x65\x53\x65\x73\x73\x69\x6f\x6e',
        '\x54\x72\x61\x64\x65\x20\x69\x74\x65\x6d\x73\x20\x5b\x6d\x79\x5d\x20\x63\x68\x61\x6e\x67\x65\x64',
        '\x6f\x6e\x41\x6e\x6f\x74\x68\x65\x72\x50\x6c\x61\x79\x65\x72\x41\x63\x63\x65\x70\x74\x54\x72\x61\x64\x65',
        '\x62\x7a\x51\x45\x76',
        '\x55\x6e\x6b\x6e\x6f\x77\x6e\x20\x63\x6f\x6d\x6d\x6f\x6e\x20\x73\x75\x62\x43\x6f\x6d\x6d\x61\x6e\x64\x20',
        '\x70\x61\x63\x6b\x49\x74\x65\x6d\x46\x6f\x72\x4e\x65\x74\x77\x6f\x72\x6b',
        '\x54\x52\x41\x44\x45\x20\x53\x48\x4f\x55\x4c\x44\x20\x42\x45\x20\x43\x4f\x4d\x50\x4c\x45\x54\x45\x44',
        '\x74\x72\x61\x64\x65\x5f\x72\x65\x71\x75\x65\x73\x74',
        '\x5f\x74\x72\x61\x64\x65\x52\x65\x71\x75\x65\x73\x74\x54\x69\x6d\x65\x6f\x75\x74',
        '\x54\x52\x41\x44\x45\x20\x57\x49\x54\x48\x20',
        '\x42\x4c\x41\x43\x4b',
        '\x31\x30\x37\x33\x31\x30\x6b\x6a\x76\x5a\x58\x47',
        '\x44\x6e\x53\x4f\x4a',
        '\x6f\x6e\x54\x72\x61\x64\x65\x53\x63\x65\x6e\x65\x45\x6e\x64',
        '\x43\x6f\x6d\x6d\x6f\x6e',
        '\x73\x65\x6e\x64\x41\x63\x63\x65\x70\x74\x54\x72\x61\x64\x65\x52\x65\x71\x75\x65\x73\x74',
        '\x73\x68\x6f\x77\x54\x72\x61\x64\x65\x49\x6e\x44\x69\x61\x6c\x6f\x67',
        '\x45\x65\x4a\x49\x75',
        '\x73\x68\x6f\x77\x52\x65\x64\x41\x6c\x65\x72\x74',
        '\x74\x72\x61\x64\x65\x5f\x63\x6f\x6d\x70\x6c\x65\x74\x65',
        '\x6c\x65\x6e\x67\x74\x68',
        '\x54\x72\x61\x64\x65',
        '\x62\x43\x41\x77\x66',
        '\x54\x72\x61\x64\x65\x47\x6f\x6c\x64\x49\x74\x65\x6d\x49\x64',
        '\x5f\x6f\x6e\x5f',
        '\x74\x72\x61\x64\x65\x5f\x61\x63\x63\x65\x70\x74',
        '\x41\x4e\x54\x72\x61\x64\x65\x4d\x61\x6e\x61\x67\x65\x72',
        '\x72\x65\x66\x75\x73\x65\x54\x72\x61\x64\x65\x52\x65\x71\x75\x65\x73\x74',
        '\x7a\x4e\x62\x64\x4a',
        '\x41\x72\x4b\x76\x67',
        '\x70\x75\x73\x68',
        '\x6b\x7a\x4a\x42\x61',
        '\x37\x38\x37\x34\x38\x32\x6a\x48\x65\x45\x78\x5a',
        '\x61\x63\x63\x65\x70\x74\x54\x72\x61\x64\x65\x49\x6e\x52\x65\x71\x75\x65\x73\x74',
        '\x69\x73\x49\x6e\x54\x72\x61\x64\x65',
        '\x73\x65\x74\x43\x6f\x6c\x6f\x72\x73',
        '\x69\x73\x43\x6c\x69\x65\x6e\x74\x41\x76\x61\x69\x6c\x61\x62\x6c\x65\x46\x6f\x72\x54\x72\x61\x64\x65',
        '\x68\x4b\x70\x6b\x41',
        '\x55\x74\x69\x6c\x73',
        '\x4f\x69\x6d\x55\x70',
        '\x54\x52\x41\x44\x45\x20\x43\x4f\x4d\x50\x4c\x45\x54\x45\x20\x49\x4e',
        '\x5f\x6f\x6e\x5f\x74\x72\x61\x64\x65\x5f\x63\x6f\x6d\x70\x6c\x65\x74\x65',
        '\x54\x52\x41\x44\x45\x20\x43\x4f\x4d\x50\x4c\x45\x54\x45\x44',
        '\x32\x37\x34\x38\x38\x31\x37\x30\x54\x57\x52\x47\x4b\x70',
        '\x5f\x6e\x65\x74\x48\x69\x73\x54\x72\x61\x64\x65\x52\x65\x61\x64\x79\x53\x74\x61\x74\x75\x73',
        '\x73\x68\x6f\x77\x49\x6e\x66\x6f\x4d\x65\x73\x73\x61\x67\x65',
        '\x5f\x73\x74\x61\x72\x74\x52\x65\x71\x75\x65\x73\x74\x54\x69\x6d\x65\x6f\x75\x74',
        '\x70\x6a\x41\x5a\x6b',
        '\x69\x73\x54\x72\x61\x64\x65\x50\x61\x72\x74\x69\x63\x69\x70\x61\x6e\x74\x49\x73\x56\x61\x6c\x69\x64',
        '\x73\x65\x6e\x64\x53\x74\x61\x72\x74\x54\x72\x61\x64\x65\x52\x65\x71\x75\x65\x73\x74',
        '\x73\x65\x74\x57\x61\x69\x74',
        '\x5f\x6e\x65\x74\x48\x69\x73\x4e\x65\x74\x54\x72\x61\x64\x65\x49\x74\x65\x6d\x73',
        '\x69\x73\x53\x68\x6f\x77\x4d\x6f\x64\x61\x6c\x46\x6f\x72\x54\x72\x61\x64\x65\x52\x65\x71\x75\x65\x73\x74',
        '\x61\x67\x66\x66\x41',
        '\x72\x65\x73\x65\x74\x57\x61\x69\x74',
        '\x4c\x76\x62\x59\x6d',
        '\x73\x65\x6e\x64',
        '\x6a\x61\x73\x65\x75',
        '\x74\x72\x61\x64\x65\x53\x63\x65\x6e\x65\x43\x6f\x6d\x70\x6c\x65\x74\x65\x53\x45',
        '\x46\x56\x41\x6c\x4d',
        '\x73\x63\x65\x6e\x65',
        '\x45\x61\x64\x74\x70',
        '\x5f\x69\x73\x49\x6e\x54\x72\x61\x64\x65',
        '\x5f\x6f\x6e\x5f\x74\x72\x61\x64\x65\x5f\x73\x74\x61\x74\x75\x73',
        '\x6e\x65\x74\x49\x64',
        '\x54\x52\x41\x44\x45\x20\x53\x54\x41\x54\x55\x53\x20\x49\x4e',
        '\x65\x68\x4c\x76\x79',
        '\x69\x73\x48\x61\x76\x65\x54\x72\x61\x64\x65\x50\x61\x72\x74\x69\x63\x69\x70\x61\x6e\x74'
    ];
    _0x3161 = function () {
        return _0x395e6e;
    };
    return _0x3161();
}
var _0x533ef7 = _0x354f;
function _0x354f(_0x3fb3be, _0x9656eb) {
    var _0x316185 = _0x3161();
    return _0x354f = function (_0x354f77, _0x10f7b7) {
        _0x354f77 = _0x354f77 - 0x8a;
        var _0x58f2ae = _0x316185[_0x354f77];
        return _0x58f2ae;
    }, _0x354f(_0x3fb3be, _0x9656eb);
}
(function (_0x3f53bf, _0x1acd07) {
    var _0x475413 = _0x354f, _0x2d55d2 = _0x3f53bf();
    while (!![]) {
        try {
            var _0x248e68 = parseInt(_0x475413(0xdf)) / 0x1 + parseInt(_0x475413(0xb7)) / 0x2 + -parseInt(_0x475413(0x116)) / 0x3 * (parseInt(_0x475413(0xe4)) / 0x4) + -parseInt(_0x475413(0xef)) / 0x5 * (parseInt(_0x475413(0xa2)) / 0x6) + -parseInt(_0x475413(0xfe)) / 0x7 + parseInt(_0x475413(0xeb)) / 0x8 * (parseInt(_0x475413(0x10f)) / 0x9) + parseInt(_0x475413(0xc2)) / 0xa;
            if (_0x248e68 === _0x1acd07)
                break;
            else
                _0x2d55d2['push'](_0x2d55d2['shift']());
        } catch (_0x3e398f) {
            _0x2d55d2['push'](_0x2d55d2['shift']());
        }
    }
}(_0x3161, 0xd41bd), window[_0x533ef7(0xb1)] = function () {
}, (function () {
    var _0x1dcfc6 = _0x533ef7, _0x18204e, _0x358349;
    _0x18204e = new KDCore['\x44\x65\x76\x4c\x6f\x67'](_0x1dcfc6(0xac)), _0x18204e[_0x1dcfc6(0xba)](KDCore['\x43\x6f\x6c\x6f\x72'][_0x1dcfc6(0x10c)], KDCore[_0x1dcfc6(0x117)][_0x1dcfc6(0xa1)]['\x67\x65\x74\x4c\x69\x67\x68\x74\x65\x73\x74\x43\x6f\x6c\x6f\x72'](0x23)), _0x18204e['\x6f\x6e'](), _0x358349 = window[_0x1dcfc6(0xb1)], _0x358349[_0x1dcfc6(0xf6)] = 0x1770, _0x358349[_0x1dcfc6(0xae)] = -0x64, _0x358349[_0x1dcfc6(0xb9)] = function () {
        var _0x404b8c = _0x1dcfc6;
        return ANNetwork['\x69\x73\x43\x6f\x6e\x6e\x65\x63\x74\x65\x64']() && this[_0x404b8c(0xd5)] === !![];
    }, _0x358349[_0x1dcfc6(0xda)] = function () {
        var _0x493345 = _0x1dcfc6;
        return _0x493345(0x91) === _0x493345(0xb4) ? [
            _0x5e019b[_0x493345(0xbd)][_0x493345(0x9c)](_0x2aaace[0x0]),
            _0x58fe38[0x1]
        ] : String[_0x493345(0x8c)](this[_0x493345(0xe3)]);
    }, _0x358349[_0x1dcfc6(0xfc)] = function () {
        var _0x2120a2 = _0x1dcfc6;
        return nAPI[_0x2120a2(0xde)]('\x69\x6e\x66\x6f', _0x2120a2(0xd7), this['\x5f\x68\x69\x73\x49\x64']);
    }, _0x358349['\x72\x65\x71\x75\x65\x73\x74\x54\x72\x61\x64\x65\x57\x69\x74\x68'] = function (_0x1be745) {
        var _0x505824 = _0x1dcfc6;
        if (_0x505824(0x114) !== _0x505824(0x114))
            return _0x1a07e1 = _0x1b76ee, _0x2a4eb8['\x77'](_0x127608);
        else {
            if (this[_0x505824(0xb9)]())
                return;
            if (this[_0x505824(0xe9)](_0x1be745)) {
                if (_0x505824(0xec) === _0x505824(0xec))
                    this[_0x505824(0xc8)](_0x1be745);
                else {
                    var _0x858dcc;
                    this[_0x505824(0xe3)] = _0x2f9e15['\x69\x64'], _0x858dcc = {
                        '\x69\x6e\x69\x74\x69\x61\x74\x6f\x72': _0x1744c6[_0x505824(0x8f)](),
                        '\x70\x61\x72\x63\x69\x70\x69\x61\x6e\x74': _0x4485b5['\x69\x64']
                    }, _0x5bca83[_0x505824(0xcf)](_0x22a397[_0x505824(0xa5)](_0x505824(0x9e), _0x858dcc)), _0x344567[_0x505824(0xc9)](), _0x1f5069[_0x505824(0xc4)](_0x505824(0x104) + _0x35b37a[_0x505824(0x112)]), this[_0x505824(0xc5)]();
                }
            } else
                nAPI['\x73\x68\x6f\x77\x52\x65\x64\x41\x6c\x65\x72\x74'](_0x505824(0x103));
        }
    }, _0x358349[_0x1dcfc6(0xe9)] = function (_0x2a5d7a) {
        var _0x1c72c4 = _0x1dcfc6;
        if (_0x1c72c4(0xd9) !== _0x1c72c4(0xce))
            return _0x2a5d7a != null && NetPlayerDataWrapper[_0x1c72c4(0xea)](_0x2a5d7a);
        else {
            var _0x579d0b;
            if (!this['\x69\x73\x49\x6e\x54\x72\x61\x64\x65']())
                return ![];
            if (!this[_0x1c72c4(0xda)]())
                return ![];
            _0x579d0b = this[_0x1c72c4(0xfc)]();
            if (_0x579d0b != null)
                return _0x579d0b[_0x1c72c4(0xd3)] !== _0x1c72c4(0x102);
            return ![];
        }
    }, _0x358349[_0x1dcfc6(0xc7)] = function () {
        var _0x595787 = _0x1dcfc6, _0x3ab396;
        if (!this[_0x595787(0xb9)]())
            return ![];
        if (!this[_0x595787(0xda)]())
            return ![];
        _0x3ab396 = this[_0x595787(0xfc)]();
        if (_0x3ab396 != null) {
            if ('\x6b\x67\x6e\x6b\x67' === _0x595787(0xf7))
                return _0x3ab396[_0x595787(0xd3)] !== _0x595787(0x102);
            else
                _0x16cd5f[_0x595787(0xb8)]();
        }
        return ![];
    }, _0x358349[_0x1dcfc6(0xbb)] = function () {
        var _0x3734d7 = _0x1dcfc6;
        return ANET[_0x3734d7(0xf2)]() && !this[_0x3734d7(0xb9)]() && KDCore[_0x3734d7(0xbd)][_0x3734d7(0x101)]();
    }, _0x358349[_0x1dcfc6(0x97)] = function () {
        var _0x29a763 = _0x1dcfc6;
        if (!this[_0x29a763(0xda)]()) {
            if (_0x29a763(0xdc) !== '\x55\x6a\x51\x72\x6b')
                return _0x49e0a5 = _0x562b1e[_0x29a763(0xaf) + _0x300f4e], _0x48192a != null ? _0x20df75(_0x2b9932) : _0x11f8f9['\x70']('\x55\x6e\x6b\x6e\x6f\x77\x6e\x20\x63\x6f\x6d\x6d\x6f\x6e\x20\x73\x75\x62\x43\x6f\x6d\x6d\x61\x6e\x64\x20' + _0x595e30);
            else
                return;
        }
        _0x18204e['\x70'](_0x29a763(0xa0) + this['\x5f\x68\x69\x73\x49\x64']), this[_0x29a763(0xd5)] = !![], $gameTemp['\x5f\x6e\x65\x74\x4d\x79\x54\x72\x61\x64\x65\x49\x74\x65\x6d\x73'] = [], $gameTemp['\x5f\x6e\x65\x74\x48\x69\x73\x4e\x65\x74\x54\x72\x61\x64\x65\x49\x74\x65\x6d\x73'] = [], $gameTemp[_0x29a763(0xc3)] = ![], SceneManager['\x70\x75\x73\x68'](Scene_NetworkInGameTrade);
    }, _0x358349['\x73\x68\x6f\x77\x54\x72\x61\x64\x65\x49\x6e\x44\x69\x61\x6c\x6f\x67'] = function () {
        var _0x4e48da = _0x1dcfc6;
        if (!this[_0x4e48da(0xda)]())
            return;
        if (ANET['\x50\x50'][_0x4e48da(0xcb)]()) {
            if ('\x6b\x7a\x4a\x42\x61' === _0x4e48da(0xb6))
                ANET['\x55\x49'][_0x4e48da(0x10a)](this['\x5f\x68\x69\x73\x49\x64']);
            else
                return _0x3c89bd = _0xd130d6, _0x400fde['\x77'](_0x463bb3);
        } else
            ANTradeManager[_0x4e48da(0xb8)]();
    }, _0x358349['\x72\x65\x66\x75\x73\x65\x54\x72\x61\x64\x65\x52\x65\x71\x75\x65\x73\x74'] = function () {
        var _0x490e70 = _0x1dcfc6;
        if (this[_0x490e70(0xda)]())
            return this[_0x490e70(0xfb)](this[_0x490e70(0xe3)]);
    }, _0x358349['\x61\x63\x63\x65\x70\x74\x54\x72\x61\x64\x65\x49\x6e\x52\x65\x71\x75\x65\x73\x74'] = function () {
        var _0x3e695d = _0x1dcfc6;
        if (!this[_0x3e695d(0xda)]()) {
            if (_0x3e695d(0x90) === '\x49\x72\x4b\x70\x66')
                return;
            else
                return;
        }
        this[_0x3e695d(0xa6)](this['\x5f\x68\x69\x73\x49\x64']), this[_0x3e695d(0x97)]();
    }, _0x358349[_0x1dcfc6(0xff)] = function (_0x2b8c63) {
        var _0x18351b = _0x1dcfc6;
        return this[_0x18351b(0x93)](_0x2b8c63);
    }, _0x358349[_0x1dcfc6(0xe7)] = function (_0x2320ae, _0x10e3f7) {
        var _0x19e544 = _0x1dcfc6, _0x3266e1;
        _0x3266e1 = $gameTemp['\x5f\x5f\x6e\x65\x74\x54\x72\x61\x64\x65\x49\x74\x65\x6d\x49\x6e\x64\x65\x78'];
        if (_0x3266e1 == null)
            return;
        if (_0x3266e1 < 0x0) {
            if (_0x19e544(0xf1) !== _0x19e544(0xf1))
                _0x5c863e[_0x19e544(0xee)](_0x53db05[0x1]);
            else
                return;
        }
        _0x2320ae != null && _0x10e3f7 >= 0x1 ? '\x50\x54\x70\x75\x48' !== _0x19e544(0x107) ? $gameTemp['\x5f\x6e\x65\x74\x4d\x79\x54\x72\x61\x64\x65\x49\x74\x65\x6d\x73'][_0x3266e1] = [
            _0x2320ae,
            _0x10e3f7
        ] : _0xb24731[_0x19e544(0xcf)](_0x2de787['\x43\x6f\x6d\x6d\x6f\x6e'](_0x19e544(0xb0), _0x536415)) : _0x19e544(0x110) !== _0x19e544(0xcc) ? $gameTemp[_0x19e544(0xf4)][_0x3266e1] = null : _0x386056[_0x19e544(0xa9)](_0x19e544(0x103)), _0x18204e['\x70'](_0x19e544(0x98)), console['\x69\x6e\x66\x6f']($gameTemp[_0x19e544(0xf4)]), this[_0x19e544(0x92)]();
    }, _0x358349['\x6f\x6e\x54\x72\x61\x64\x65\x53\x68\x6f\x75\x6c\x64\x43\x6f\x6d\x70\x6c\x65\x74\x65'] = function () {
        var _0xf52293 = _0x1dcfc6;
        return _0x18204e['\x70'](_0xf52293(0x9d)), this[_0xf52293(0x106)]();
    }, _0x358349[_0x1dcfc6(0xa4)] = function () {
        var _0x477bff = _0x1dcfc6;
        this[_0x477bff(0xe3)] = null, this['\x5f\x69\x73\x49\x6e\x54\x72\x61\x64\x65'] = ![], this['\x5f\x6e\x65\x74\x48\x69\x73\x54\x72\x61\x64\x65\x52\x65\x61\x64\x79\x53\x74\x61\x74\x75\x73'] = ![];
    }, _0x358349[_0x1dcfc6(0xc8)] = function (_0x4fe660) {
        var _0x21b041 = _0x1dcfc6, _0x5b6a84;
        this[_0x21b041(0xe3)] = _0x4fe660['\x69\x64'], _0x5b6a84 = {
            '\x69\x6e\x69\x74\x69\x61\x74\x6f\x72': ANNetwork[_0x21b041(0x8f)](),
            '\x70\x61\x72\x63\x69\x70\x69\x61\x6e\x74': _0x4fe660['\x69\x64']
        }, ANNetwork[_0x21b041(0xcf)](NMS[_0x21b041(0xa5)](_0x21b041(0x9e), _0x5b6a84)), ANNetwork['\x73\x65\x74\x57\x61\x69\x74'](), nAPI[_0x21b041(0xc4)]('\x57\x61\x69\x74\x69\x6e\x67\x20' + _0x4fe660[_0x21b041(0x112)]), this[_0x21b041(0xc5)]();
    }, _0x358349[_0x1dcfc6(0xc5)] = function () {
        var _0x2726b9 = _0x1dcfc6;
        ANTradeManager[_0x2726b9(0x9f)] = setTimeout(function () {
            var _0x30e9b4 = _0x2726b9;
            if (_0x30e9b4(0xbe) === _0x30e9b4(0x111))
                _0x3b8d39[0x1] != null && _0x936a6[0x1] > 0x0 && _0x394577[_0x30e9b4(0xee)](_0x7455bf[0x1]);
            else
                return ANTradeManager[_0x30e9b4(0xf5)]();
        }, ANTradeManager[_0x2726b9(0xf6)]);
    }, _0x358349[_0x1dcfc6(0xfb)] = function (_0x3f92d7) {
        var _0x263599 = _0x1dcfc6;
        ANNetwork[_0x263599(0xcf)](NMS[_0x263599(0xa5)]('\x74\x72\x61\x64\x65\x5f\x72\x65\x66\x75\x73\x65', _0x3f92d7));
    }, _0x358349['\x73\x65\x6e\x64\x41\x63\x63\x65\x70\x74\x54\x72\x61\x64\x65\x52\x65\x71\x75\x65\x73\x74'] = function (_0x4947f0) {
        var _0x243b34 = _0x1dcfc6;
        ANNetwork[_0x243b34(0xcf)](NMS[_0x243b34(0xa5)](_0x243b34(0xb0), _0x4947f0));
    }, _0x358349['\x73\x65\x6e\x64\x4d\x79\x54\x72\x61\x64\x65\x49\x74\x65\x6d\x73'] = function () {
        var _0x281e4d = _0x1dcfc6, _0x300eb7, _0x187897;
        _0x187897 = $gameTemp[_0x281e4d(0xf4)][_0x281e4d(0x102)](function (_0x3517c0) {
            var _0xa90c5e = _0x281e4d;
            return _0x3517c0 != null ? [
                ANET[_0xa90c5e(0xbd)]['\x70\x61\x63\x6b\x49\x74\x65\x6d\x46\x6f\x72\x4e\x65\x74\x77\x6f\x72\x6b'](_0x3517c0[0x0]),
                _0x3517c0[0x1]
            ] : null;
        }), _0x300eb7 = {
            '\x66\x72\x6f\x6d\x57\x68\x6f': ANNetwork[_0x281e4d(0x8f)](),
            '\x69\x74\x65\x6d\x73': _0x187897
        }, ANNetwork[_0x281e4d(0xcf)](NMS[_0x281e4d(0xa5)]('\x74\x72\x61\x64\x65\x5f\x69\x74\x65\x6d\x73', _0x300eb7));
    }, _0x358349[_0x1dcfc6(0x93)] = function (_0x3d57e8) {
        var _0x25c1de = _0x1dcfc6, _0x109635;
        _0x109635 = {
            '\x66\x72\x6f\x6d\x57\x68\x6f': ANNetwork[_0x25c1de(0x8f)](),
            '\x73\x74\x61\x74\x75\x73': _0x3d57e8
        }, ANNetwork[_0x25c1de(0xcf)](NMS[_0x25c1de(0xa5)]('\x74\x72\x61\x64\x65\x5f\x73\x74\x61\x74\x75\x73', _0x109635));
    }, _0x358349['\x73\x65\x6e\x64\x43\x6f\x6d\x70\x6c\x65\x74\x65\x54\x72\x61\x64\x65'] = function () {
        var _0x1dc4c0 = _0x1dcfc6;
        ANNetwork[_0x1dc4c0(0x100)](NMS['\x43\x6f\x6d\x6d\x6f\x6e'](_0x1dc4c0(0xaa), ANNetwork[_0x1dc4c0(0x8f)]()), function () {
            var _0x55f3a3 = _0x1dc4c0;
            if (_0x55f3a3(0xe1) !== '\x78\x61\x75\x52\x65')
                return;
            else
                return ANTradeManager[_0x55f3a3(0x95)]();
        });
    }, _0x358349['\x6f\x6e\x41\x6e\x6f\x74\x68\x65\x72\x50\x6c\x61\x79\x65\x72\x41\x63\x63\x65\x70\x74\x54\x72\x61\x64\x65'] = function () {
        var _0x35743b = _0x1dcfc6;
        this[_0x35743b(0x8a)](), this[_0x35743b(0x97)]();
    }, _0x358349[_0x1dcfc6(0x8a)] = function () {
        var _0x3cf1b8 = _0x1dcfc6;
        ANNetwork[_0x3cf1b8(0xcd)](), nAPI[_0x3cf1b8(0xf3)](), clearTimeout(ANTradeManager[_0x3cf1b8(0x9f)]);
    }, _0x358349['\x6f\x6e\x41\x6e\x6f\x74\x68\x65\x72\x50\x6c\x61\x79\x65\x72\x4e\x6f\x74\x41\x63\x63\x65\x70\x74\x54\x72\x61\x64\x65\x4f\x72\x54\x69\x6d\x65\x6f\x75\x74'] = function () {
        var _0x3a764c = _0x1dcfc6, _0x4ed821, _0x1ba714, _0x218f8f;
        this[_0x3a764c(0x8a)]();
        try {
            if ('\x41\x4f\x4d\x66\x63' !== _0x3a764c(0xe5))
                _0x4ed821 = ANGameManager[_0x3a764c(0xdb)](this[_0x3a764c(0xe3)]), _0x4ed821 != null ? (_0x218f8f = _0x4ed821[_0x3a764c(0x112)], nAPI[_0x3a764c(0xa9)](_0x218f8f + _0x3a764c(0x8b))) : nAPI[_0x3a764c(0xa9)]('\x54\x72\x61\x64\x65\x20\x72\x65\x66\x75\x73\x65\x64');
            else
                return;
        } catch (_0x6bdef1) {
            _0x1ba714 = _0x6bdef1, ANET['\x77'](_0x1ba714);
        }
        this[_0x3a764c(0xe3)] = null;
    }, _0x358349['\x6f\x6e\x54\x72\x61\x64\x65\x43\x6f\x6d\x70\x6c\x65\x74\x65\x64'] = function () {
        var _0x3fffc1 = _0x1dcfc6, _0x1b0cc4, _0x579cda, _0x270d07, _0x2b0bc0, _0x3a3215, _0x4f0f40, _0x332ba2, _0x1dee7b, _0x4b5bec;
        _0x18204e['\x70'](_0x3fffc1(0xc1));
        try {
            KDCore[_0x3fffc1(0xbd)][_0x3fffc1(0xe0)](ANET['\x50\x50'][_0x3fffc1(0xd1)]()), _0x579cda = $gameTemp[_0x3fffc1(0xf4)][_0x3fffc1(0x108)]();
            _0x579cda != null && (_0x579cda[0x1] != null && _0x579cda[0x1] > 0x0 && $gameParty[_0x3fffc1(0xed)](_0x579cda[0x1]));
            _0x1dee7b = $gameTemp['\x5f\x6e\x65\x74\x4d\x79\x54\x72\x61\x64\x65\x49\x74\x65\x6d\x73'];
            for (_0x270d07 = 0x0, _0x4f0f40 = _0x1dee7b[_0x3fffc1(0xab)]; _0x270d07 < _0x4f0f40; _0x270d07++) {
                _0x2b0bc0 = _0x1dee7b[_0x270d07];
                if (_0x2b0bc0 == null) {
                    if ('\x4b\x46\x46\x57\x5a' !== '\x4b\x46\x46\x57\x5a')
                        return _0x4ca1e1[_0x3fffc1(0x8d)]() && this[_0x3fffc1(0xd5)] === !![];
                    else
                        continue;
                }
                if (_0x2b0bc0[0x0] == null) {
                    if (_0x3fffc1(0xb3) === _0x3fffc1(0xb3))
                        continue;
                    else
                        return;
                }
                if (_0x2b0bc0[0x1] <= 0x0) {
                    if ('\x45\x65\x4a\x49\x75' === _0x3fffc1(0xa8))
                        continue;
                    else
                        return _0x5c3677 = _0x2f6d90, _0x4d7cde['\x77'](_0x5505a0);
                }
                $gameParty[_0x3fffc1(0x105)](_0x2b0bc0[0x0], _0x2b0bc0[0x1] * -0x1);
            }
            _0x579cda = $gameTemp[_0x3fffc1(0xca)][_0x3fffc1(0x108)]();
            if (_0x579cda != null) {
                if (_0x3fffc1(0x113) === _0x3fffc1(0x113))
                    _0x579cda[0x1] != null && _0x579cda[0x1] > 0x0 && $gameParty['\x67\x61\x69\x6e\x47\x6f\x6c\x64'](_0x579cda[0x1]);
                else
                    return;
            }
            _0x4b5bec = $gameTemp[_0x3fffc1(0xca)];
            for (_0x3a3215 = 0x0, _0x332ba2 = _0x4b5bec[_0x3fffc1(0xab)]; _0x3a3215 < _0x332ba2; _0x3a3215++) {
                _0x2b0bc0 = _0x4b5bec[_0x3a3215];
                if (_0x2b0bc0 == null)
                    continue;
                if (_0x2b0bc0[0x0] == null) {
                    if (_0x3fffc1(0x10b) !== _0x3fffc1(0x10b)) {
                        if (!this[_0x3fffc1(0xda)]())
                            return;
                        _0x45a703['\x70']('\x54\x52\x41\x44\x45\x20\x57\x49\x54\x48\x20' + this[_0x3fffc1(0xe3)]), this[_0x3fffc1(0xd5)] = !![], _0x19dbeb[_0x3fffc1(0xf4)] = [], _0x3262e5['\x5f\x6e\x65\x74\x48\x69\x73\x4e\x65\x74\x54\x72\x61\x64\x65\x49\x74\x65\x6d\x73'] = [], _0x15191[_0x3fffc1(0xc3)] = ![], _0x570f76[_0x3fffc1(0xb5)](_0x5729eb);
                    } else
                        continue;
                }
                if (_0x2b0bc0[0x1] <= 0x0)
                    continue;
                $gameParty[_0x3fffc1(0x105)](_0x2b0bc0[0x0], _0x2b0bc0[0x1]);
            }
        } catch (_0x2f712) {
            _0x1b0cc4 = _0x2f712, ANET['\x77'](_0x1b0cc4);
        }
    }, _0x358349['\x6f\x6e\x43\x6f\x6d\x6d\x6f\x6e\x43\x6f\x6d\x6d\x61\x6e\x64\x46\x72\x6f\x6d\x53\x65\x72\x76\x65\x72'] = function (_0x4652f6, _0x5aa81a) {
        var _0xc4899d = _0x1dcfc6, _0x4cf930, _0x14cb04;
        try {
            _0x14cb04 = ANTradeManager[_0xc4899d(0xaf) + _0x4652f6];
            if (_0x14cb04 != null)
                return _0x14cb04(_0x5aa81a);
            else {
                if ('\x49\x50\x41\x64\x72' !== _0xc4899d(0x8e))
                    return _0x18204e['\x70'](_0xc4899d(0x9b) + _0x4652f6);
                else
                    _0x56c2d1 = _0x22b72e, _0x3699c3['\x77'](_0x55b270);
            }
        } catch (_0x217384) {
            return _0x4cf930 = _0x217384, ANET['\x77'](_0x4cf930);
        }
    }, _0x358349[_0x1dcfc6(0xf0)] = function (_0x236fef) {
        var _0x262d54 = _0x1dcfc6, _0x1a528a, _0xb2425a, _0x31faa6, _0x38fa91;
        try {
            if ('\x45\x61\x64\x74\x70' !== _0x262d54(0xd4))
                return;
            else {
                _0x262d54(0xfa)['\x70'](), {
                    initiator: _0xb2425a,
                    parcipiant: _0x31faa6
                } = _0x236fef;
                if (_0x31faa6 !== ANNetwork[_0x262d54(0x8f)]())
                    return;
                ANTradeManager[_0x262d54(0xe3)] = _0xb2425a, _0x38fa91 = ANTradeManager[_0x262d54(0xbb)]();
                if (_0x38fa91 === !![])
                    return ANTradeManager[_0x262d54(0xa7)]();
                else {
                    if (_0x262d54(0xf9) === _0x262d54(0xfd))
                        return;
                    else
                        return ANTradeManager[_0x262d54(0xb2)]();
                }
            }
        } catch (_0x5c8fed) {
            return _0x1a528a = _0x5c8fed, ANET['\x77'](_0x1a528a);
        }
    }, _0x358349[_0x1dcfc6(0xe2)] = function (_0x4b4bf1) {
        var _0x5f1140 = _0x1dcfc6, _0x47644d;
        try {
            '\x54\x52\x41\x44\x45\x20\x52\x45\x46\x55\x53\x45\x20\x49\x4e'['\x70']();
            if (_0x4b4bf1 !== ANNetwork[_0x5f1140(0x8f)]())
                return;
            return ANTradeManager[_0x5f1140(0xf5)]();
        } catch (_0x3dc0d5) {
            return _0x47644d = _0x3dc0d5, ANET['\x77'](_0x47644d);
        }
    }, _0x358349['\x5f\x6f\x6e\x5f\x74\x72\x61\x64\x65\x5f\x61\x63\x63\x65\x70\x74'] = function (_0xe6c438) {
        var _0x500ad3 = _0x1dcfc6, _0x1f4a4e;
        try {
            if (_0x500ad3(0xd2) !== _0x500ad3(0xe8)) {
                '\x54\x52\x41\x44\x45\x20\x41\x43\x43\x45\x50\x54\x20\x49\x4e'['\x70']();
                if (_0xe6c438 !== ANNetwork[_0x500ad3(0x8f)]())
                    return;
                return ANTradeManager[_0x500ad3(0x99)]();
            } else
                return;
        } catch (_0xcaf9a7) {
            if ('\x58\x41\x53\x57\x46' === '\x69\x59\x65\x79\x72')
                return;
            else
                return _0x1f4a4e = _0xcaf9a7, ANET['\x77'](_0x1f4a4e);
        }
    }, _0x358349['\x5f\x6f\x6e\x5f\x74\x72\x61\x64\x65\x5f\x69\x74\x65\x6d\x73'] = function (_0x91e51b) {
        var _0x34f81c = _0x1dcfc6, _0x53169e, _0x276ec9, _0x53b415;
        try {
            _0x34f81c(0x115)['\x70']();
            if (!ANTradeManager[_0x34f81c(0xb9)]()) {
                if (_0x34f81c(0x96) !== _0x34f81c(0xc6))
                    return;
                else
                    return ![];
            }
            ({
                fromWho: _0x276ec9,
                items: _0x53b415
            } = _0x91e51b);
            if (_0x276ec9 !== ANTradeManager[_0x34f81c(0xe3)]) {
                if (_0x34f81c(0xd0) === '\x6a\x61\x73\x65\x75')
                    return;
                else {
                    if (!this[_0x34f81c(0xda)]())
                        return;
                    _0x263b39['\x50\x50'][_0x34f81c(0xcb)]() ? _0xda28d6['\x55\x49'][_0x34f81c(0x10a)](this['\x5f\x68\x69\x73\x49\x64']) : _0x119a84[_0x34f81c(0xb8)]();
                }
            }
            return $gameTemp['\x5f\x6e\x65\x74\x48\x69\x73\x4e\x65\x74\x54\x72\x61\x64\x65\x49\x74\x65\x6d\x73'] = _0x53b415[_0x34f81c(0x102)](function (_0x29a38e) {
                var _0x191f33 = _0x34f81c;
                if (_0x191f33(0x9a) === '\x61\x4a\x6b\x75\x48')
                    return this['\x73\x65\x6e\x64\x52\x65\x66\x75\x73\x65\x54\x72\x61\x64\x65\x52\x65\x71\x75\x65\x73\x74'](this[_0x191f33(0xe3)]);
                else {
                    if (_0x29a38e != null) {
                        if ('\x4c\x54\x46\x7a\x4b' !== _0x191f33(0xe6))
                            return [
                                ANET['\x55\x74\x69\x6c\x73'][_0x191f33(0x10e)](_0x29a38e[0x0]),
                                _0x29a38e[0x1]
                            ];
                        else
                            _0x22ccd4[0x1] != null && _0x562aaf[0x1] > 0x0 && _0x52ca05[_0x191f33(0xed)](_0x58e804[0x1]);
                    } else
                        return _0x191f33(0xdd) !== _0x191f33(0x109) ? null : _0x51795e[_0x191f33(0xa7)]();
                }
            });
        } catch (_0x40f7d9) {
            return '\x44\x71\x51\x45\x75' !== _0x34f81c(0x94) ? _0x305873 != null ? [
                _0x5d49d2[_0x34f81c(0xbd)]['\x75\x6e\x70\x61\x63\x6b\x49\x74\x65\x6d\x46\x72\x6f\x6d\x4e\x65\x74\x77\x6f\x72\x6b'](_0x50a07a[0x0]),
                _0x11e74d[0x1]
            ] : null : (_0x53169e = _0x40f7d9, ANET['\x77'](_0x53169e));
        }
    }, _0x358349[_0x1dcfc6(0xd6)] = function (_0x2b63b2) {
        var _0x332368 = _0x1dcfc6, _0x357b05, _0x591008, _0x2d7c44;
        try {
            if (_0x332368(0xbc) !== _0x332368(0xf8)) {
                _0x332368(0xd8)['\x70']();
                if (!ANTradeManager['\x69\x73\x49\x6e\x54\x72\x61\x64\x65']())
                    return;
                ({
                    fromWho: _0x591008,
                    status: _0x2d7c44
                } = _0x2b63b2);
                if (_0x591008 !== ANTradeManager[_0x332368(0xe3)])
                    return;
                return $gameTemp[_0x332368(0xc3)] = _0x2d7c44;
            } else
                return;
        } catch (_0x5f2c50) {
            return _0x357b05 = _0x5f2c50, ANET['\x77'](_0x357b05);
        }
    }, _0x358349[_0x1dcfc6(0xc0)] = function (_0x652c26) {
        var _0x8226e6 = _0x1dcfc6;
        if (_0x8226e6(0xa3) === '\x67\x43\x4c\x65\x6d')
            return _0x24d79b = _0x4e9407, _0x34a8f6['\x77'](_0x3c5707);
        else {
            var _0x522a7c;
            try {
                _0x8226e6(0xbf)['\x70']();
                if (!ANTradeManager[_0x8226e6(0xb9)]())
                    return;
                if (_0x652c26 !== ANTradeManager[_0x8226e6(0xe3)])
                    return;
                if ($gameTemp['\x5f\x6e\x65\x74\x48\x69\x73\x54\x72\x61\x64\x65\x52\x65\x61\x64\x79\x53\x74\x61\x74\x75\x73'] !== !![]) {
                    if (_0x8226e6(0xad) !== '\x68\x55\x66\x6f\x6a')
                        return;
                    else {
                        if (this[_0x8226e6(0xda)]())
                            return this['\x73\x65\x6e\x64\x52\x65\x66\x75\x73\x65\x54\x72\x61\x64\x65\x52\x65\x71\x75\x65\x73\x74'](this[_0x8226e6(0xe3)]);
                    }
                }
                return ANTradeManager[_0x8226e6(0x95)]();
            } catch (_0x54f595) {
                if ('\x51\x55\x41\x44\x66' === _0x8226e6(0x10d))
                    return _0x522a7c = _0x54f595, ANET['\x77'](_0x522a7c);
                else
                    return;
            }
        }
    };
}()));

// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ ANET Common Utils Methods.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------

// * Набор вспомогательных функций для ANET
KDCore.Utils.ANET = {};

//?shortcut
ANET.Utils = KDCore.Utils.ANET;

(function() {
  var _;
  //@[DEFINES]
  _ = KDCore.Utils.ANET;
  // * Проверка, что комментарий является NET командой
  _.isNetCommentCommand = function(commentLine) {
    if (!String.any(commentLine)) {
      return false;
    }
    // * Все команды начинаются с буквы заглавной N, затем пробел и команда
    return /N\s.+/.exec(commentLine);
  };
  _.getNetCommentCommand = function(commentLine) {
    var command;
    if (!this.isNetCommentCommand(commentLine)) {
      return "";
    }
    // * Возвращает первое слово после N
    command = /N\s(!*\w+)/.exec(commentLine)[1];
    if (!String.any(command)) {
      return "";
    }
    return command;
  };
  //TODO: Можно все все данные для сети через метод аналогичный передавать для безопасности
  // * Сохраняет Battler в определённый формат для отправки по сети
  _.packBattlerForNetwork = function(battler) {
    if (battler instanceof Game_Actor) {
      return {
        type: "actor",
        id: battler.actorId()
      };
    } else {
      return {
        type: "enemy",
        id: battler.index()
      };
    }
  };
  // * Возвращяет конкретный Battler из данных сети
  _.unpackBattlerFromNetwork = function(data) {
    if (data.type === "actor") {
      return $gameActors.actor(data.id);
    } else {
      return $gameTroop.members()[data.id];
    }
  };
  // * Сохраняем предмет в определённый формат для оптавки по сети (используется в торговле)
  _.packItemForNetwork = function(item) {
    var e, id, typeId;
    try {
      if (item == null) {
        return null;
      }
      id = item.id;
      if (id === ANTradeManager.TradeGoldItemId) {
        typeId = 0;
      } else {
        typeId = KDCore.Utils.getItemTypeId(item);
      }
      return {id, typeId};
    } catch (error) {
      e = error;
      ANET.w(e);
      return null;
    }
  };
  // * Возвращяет конкретный Item из данных сети
  _.unpackItemFromNetwork = function(data) {
    var e, id, typeId;
    try {
      if (data == null) {
        return null;
      }
      ({id, typeId} = data);
      if (id === ANTradeManager.TradeGoldItemId) {
        return {id};
      } else {
        return KDCore.Utils.getItemByType(id, typeId);
      }
    } catch (error) {
      e = error;
      ANET.w(e);
      return null;
    }
  };
  _.getBattlerSprite = function(battler) {
    var container, e, sprite, sprites;
    if (!KDCore.Utils.isSceneBattle()) {
      return null;
    }
    try {
      container = SceneManager._scene._spriteset;
      sprites = container._enemySprites.concat(container._actorSprites);
      sprite = sprites.find(function(spr) {
        return (spr != null) && spr._battler === battler;
      });
      return sprite;
    } catch (error) {
      e = error;
      ANET.w(e);
    }
    return sprite;
  };
  _.isMyActorInValidListToStart = function(list, isInclude) {
    var e;
    try {
      list = JsonEx.parse(list).map(function(i) {
        return parseInt(i);
      });
      return list.contains(ANGameManager.myActorId()) === isInclude;
    } catch (error) {
      e = error;
      ANET.w(e);
      return false;
    }
  };
  _.isPassEventFilterOptions = function(options) {
    var e;
    try {
      switch (options.whoSelector) {
        case "All":
          return true;
        case "Master":
          return ANNetwork.isMasterClient();
        case "Master Except":
          return !ANNetwork.isMasterClient();
        case "Actor List":
          return ANET.Utils.isMyActorInValidListToStart(options.actorList, true);
        case "Actor List Except":
          return ANET.Utils.isMyActorInValidListToStart(options.actorList, false);
        case "Me Except":
          // * Если команда пришла с сервера, то явно эта проверка не касается этого клиента
          // * В опциях запуска события - не используется
          return true;
        default:
          return false;
      }
    } catch (error) {
      e = error;
      ANET.w(e);
      return false;
    }
  };
  // * Событие запущенно каким-либо игроком?
  _.isEventStartedByAny = function(eventId) {
    var e;
    try {
      return ANGameManager.anotherPlayersOnMap().some(function(p) {
        return NetPlayerDataWrapper.isOnEvent(p, eventId);
      });
    } catch (error) {
      e = error;
      ANET.w(e);
      // * В случае ошибки безопаснее вернуть true
      return true;
    }
  };
  // * Собрать опции для команды события по параметрам из комменатрия (аналог опций из команды плагина)
  // * Список должен быть строкой! [1, 2, 3]
  _.buildEventCommandOptions = function(selector, list, scope, mode) {
    return {
      "actorList": list,
      "executeMode": mode,
      "scope": scope,
      "whoSelector": selector
    };
  };
  // * Конвертировать из команды комменатрия в параметр команды плагина
  _.convertEventCommandScopeAndMode = function(commentLine) {
    var mode, scope;
    // * SCOPE
    if (commentLine.contains("world")) {
      scope = "All world";
    } else {
      scope = "Same map";
    }
    // * MODE
    if (commentLine.contains("virtual")) {
      mode = "Virtual";
    } else if (commentLine.contains("common")) {
      mode = "Common Event";
    } else {
      mode = "Auto";
    }
    return {scope, mode};
  };
  // * Изъять список персонажей из комментария
  // * Формат выходной [1, 2, 3....]
  _.extractActorsListFromComment = function(commentLine) {
    var list, regex, resultList;
    regex = /forActors\s+([\d,\s*]*)/gm;
    resultList = regex.exec(commentLine);
    if (resultList == null) {
      return "[]";
    }
    if (resultList[1] == null) {
      return "[]";
    }
    list = "[" + resultList[1] + "]";
    return list;
  };
  _.parseEventStartOptionsFromCommentLine = function(commentLine) {
    var e, nStartOptions;
    try {
      // * Стандартный набор
      nStartOptions = {
        lockMode: "false",
        sharedMode: "No",
        whoSelector: "All",
        actorList: "[]"
      };
      if (commentLine.contains("lock")) {
        nStartOptions.lockMode = "true";
      }
      if (commentLine.contains("shared")) {
        nStartOptions.sharedMode = "Strict";
        // * Только если есть флаг sharedMode
        if (commentLine.contains("optional")) {
          nStartOptions.sharedMode = "Optional";
        }
      }
      if (commentLine.contains("master")) {
        if (commentLine.contains("!")) {
          nStartOptions.whoSelector = "Master Except";
        } else {
          nStartOptions.whoSelector = "Master";
        }
      } else if (commentLine.contains("forActors")) {
        if (commentLine.contains("!")) {
          nStartOptions.whoSelector = "Actor List Except";
        } else {
          nStartOptions.whoSelector = "Actor List";
        }
        nStartOptions.actorList = ANET.Utils.extractActorsListFromComment(commentLine);
      }
      return nStartOptions;
    } catch (error) {
      e = error;
      ANET.w(e);
      return null;
    }
  };
  _.generateSaveUniqueId = function() {
    var savefileId, versionId;
    versionId = ANET.VD.getGameVersion();
    savefileId = versionId + "" + Math.randomInt(versionId);
    // * Вероятность крайне крайне мала, но нельзя чтобы были повторы
    if (DataManager.nIsHaveNetworkSaveWithId(savefileId)) {
      return this.generateSaveUniqueId();
    } else {
      return savefileId;
    }
  };
  // * Текущая комната - загрузка сохранённой игры?
  _.isLoadGameRoom = function() {
    if (!ANNetwork.isConnected()) {
      return false;
    }
    if (ANNetwork.room == null) {
      return false;
    }
    return NetRoomDataWrapper.isLoadGameRoom(ANNetwork.room);
  };
  // * Текущая комната - уже запущенная игра
  _.isStartedRoom = function() {
    if (!ANNetwork.isConnected()) {
      return false;
    }
    if (ANNetwork.room == null) {
      return false;
    }
    return NetRoomDataWrapper.isStartedGameRoom(ANNetwork.room);
  };
  // * Построить Chat Message
  _.buildChatMessage = function(channelId, actorId, message) {
    return {
      channelId: channelId,
      actorId: actorId,
      text: message,
      mapId: $gameMap.mapId()
    };
  };
})();

// ■ END ANET Common Utils Methods.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ BattleManager.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__displayStartMessages, ALIAS__endBattle, ALIAS__processEscape, ALIAS__selectNextActor, ALIAS__selectPreviousActor, ALIAS__setup, ALIAS__update, _;
  //@[DEFINES]
  _ = BattleManager;
  //@[ALIAS]
  ALIAS__setup = _.setup;
  _.setup = function() {
    ALIAS__setup.call(this, ...arguments);
    if (ANNetwork.isConnected()) {
      if (!ANBattleManager.isBattleRegistred()) {
        // * Только если данные боя не установлены, но проверка сетевой битвы
        this.nSetupNetworkBattle();
      }
    }
  };
  //@[ALIAS]
  ALIAS__endBattle = _.endBattle;
  _.endBattle = function(result) {
    ALIAS__endBattle.call(this, result);
    if (ANNetwork.isConnected()) {
      // * Убрать флаг сетевой битвы
      this.nSetNetworkBattle(null);
    }
  };
  //@[ALIAS]
  ALIAS__selectNextActor = _.selectNextActor;
  _.selectNextActor = function() {
    if (ANNetwork.isConnected() && !ANGameManager.isBattleMaster()) {
      this.nSelectNextActorOnClient();
    } else {
      ALIAS__selectNextActor.call(this);
    }
  };
  //@[ALIAS]
  ALIAS__selectPreviousActor = _.selectPreviousActor;
  _.selectPreviousActor = function() {
    if (ANNetwork.isConnected() && !ANGameManager.isBattleMaster()) {
      this.nSelectPreviousActorOnClient();
    } else {
      ALIAS__selectPreviousActor.call(this);
    }
  };
  //@[ALIAS]
  // * В сетевом режиме Update вызывается только на мастере боя!
  ALIAS__update = _.update;
  _.update = function(activeTime) {
    ALIAS__update.call(this, activeTime);
    if (!ANNetwork.isConnected()) {
      return;
    }
    this.nUpdateNetwork();
  };
  //TEMP
  //TODO: Временно отключено начальное сообщение в бою
  //@[ALIAS]
  ALIAS__displayStartMessages = _.displayStartMessages;
  _.displayStartMessages = function() {
    if (ANNetwork.isConnected()) {

    } else {
      // * EMPTY
      return ALIAS__displayStartMessages.call(this);
    }
  };
  
  //TEMP
  //TODO: Если шанс побега не сработал, будет баг
  // * Временно шанс побега 100%
  //@[ALIAS]
  ALIAS__processEscape = _.processEscape;
  _.processEscape = function() {
    if (ANNetwork.isConnected()) {
      this._escapeRatio = 101;
    }
    return ALIAS__processEscape.call(this);
  };
})();

// ■ END BattleManager.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ BattleManager.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__changeActor, ALIAS__update, _;
  //@[DEFINES]
  _ = BattleManager;
  if (KDCore.isMZ()) {
    return;
  }
  // * Заместо selectNextActor (нету в MV такой команды)
  //@[ALIAS]
  ALIAS__changeActor = _.changeActor;
  _.changeActor = function() {
    if (ANNetwork.isConnected() && !ANGameManager.isBattleMaster()) {
      this.nSelectNextActorOnClient();
      $gameTemp._isBattleSceneShouldBeRefreshed = true;
    } else {
      ALIAS__changeActor.call(this, ...arguments);
    }
  };
  _.myNetworkActorIndex = function() {
    return $gameParty.members().indexOf($gameParty.leader());
  };
  
  // * В MV логика боя отличается от MZ, не происходит многих автоматических обновлений
  //@[ALIAS]
  ALIAS__update = _.update;
  _.update = function() {
    if (this.__oldPhase !== this._phase) {
      this.__oldPhase = this._phase;
      $gameTemp._isBattleSceneShouldBeRefreshed = true;
      $gameTemp.requestBattleRefresh();
    }
    ALIAS__update.call(this);
  };
})();

// ■ END BattleManager.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ BattleManager.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = BattleManager;
  _.nSetNetworkBattle = function(netBattleId) {
    this.netBattleId = netBattleId;
  };
  _.nIsNetworkBattle = function() {
    return this.netBattleId != null;
  };
  _.nSetupNetworkBattle = function() {
    var battleData;
    if (this.nIsNetworkBattle()) {
      battleData = {
        battleId: this.netBattleId,
        options: [$gameTroop._troopId, this._canEscape, this._canLose]
      };
      ANBattleManager.registerOnBattle(battleData);
    } else {
      ANBattleManager.registerOnLocalBattle();
    }
  };
  _.nSelectNextActorOnClient = function() {
    // * Если данный флаг == true, то игрок переключает меню ввод с группы на персонажа своего
    // * (Это если нажать Escape и появилось Party Commands, а затем снова на Fight)
    if (this._isShouldWaitMyNetworkAction === true) {
      // * Выбираем только своего персонажа снова (а не первого)
      this._currentActor = $gameParty.leader();
      if (KDCore.isMV()) {
        this._actorIndex = this.myNetworkActorIndex();
        $gameTemp._isBattleSceneShouldBeRefreshed = true;
      }
      return this._isShouldWaitMyNetworkAction = false;
    } else {
      ANBattleManager.battleInputActionDone();
      return this._inputting = false;
    }
  };
  
  // * В стандартном тактическом режиме боя если нажать "отмена" (назад)
  // * То мы можем поменять выбор предыдущего персонажа, но в сети,
  // * мы не можем это сделать, поэтому просто "выходим" на меню группы
  _.nSelectPreviousActorOnClient = function() {
    return this._currentActor = null;
  };
  _.nUpdateNetwork = function() {
    ANBattleManager.updateInputChange();
    $gameTroop.nUpdateBattleDataSync();
    $gameParty.nUpdateBattleDataSync();
  };
  _.nClearClientInput = function() {
    this._inputting = false;
    this._currentActor = null;
    this._isShouldWaitMyNetworkAction = true;
    if (KDCore.isMV()) {
      this.startTurn();
    }
  };
  _.nSetCurrentClientInput = function() {
    $gameParty.makeActions(); // * Чтобы был inputting action
    this._currentActor = $gameParty.leader();
    if (KDCore.isMV()) {
      this._actorIndex = this.myNetworkActorIndex();
    }
    // * Готов к отправке действия сразу (по умолчанию)
    // * Команда 'Fight' делает false (см nSelectNextActorOnClient)
    return this._isShouldWaitMyNetworkAction = false;
  };
  _.nRefreshSharedBattleState = function() {
    var e;
    try {
      if (SceneManager._scene.nRefreshSharedBattle != null) {
        SceneManager._scene.nRefreshSharedBattle();
      }
    } catch (error) {
      e = error;
      ANET.w(e);
    }
  };
  // * Если во время боя был удалён (вышел) сетевой игрок
  // * Без этого метода, игра переключает (или зависат) ввод другого игрока (который вышел)
  _.nSafeRemoveActor = function() {
    var e;
    if (this._phase !== "input") {
      return;
    }
    try {
      if (this._currentActor !== $gameParty.leader()) {
        return this.selectNextActor();
      }
    } catch (error) {
      e = error;
      return ANET.w(e);
    }
  };
  // * Можно ли клиенту (не BattleMaster) самостоятельно обновлять BattleManager
  _.nIsLocalForceUpdatePhase = function() {
    return this.isAborting() || this.isBattleEnd();
  };
})();

// ■ END BattleManager.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ ConfigManager.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__applyData, ALIAS__makeData, _;
  //@[DEFINES]
  _ = ConfigManager;
  // * Сохранение и загрузка сетевого имени игрока

  //@[ALIAS]
  ALIAS__makeData = _.makeData;
  _.makeData = function() {
    var config;
    config = ALIAS__makeData.call(this);
    config.netPlayerName = this.netPlayerName;
    return config;
  };
  
  //@[ALIAS]
  ALIAS__applyData = _.applyData;
  _.applyData = function(config) {
    ALIAS__applyData.call(this, config);
    this.netPlayerName = config.netPlayerName;
  };
})();

// ■ END ConfigManager.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ DataManager.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__makeSavefileInfo, _;
  //@[DEFINES]
  _ = DataManager;
  //@[ALIAS]
  ALIAS__makeSavefileInfo = _.makeSavefileInfo;
  _.makeSavefileInfo = function() {
    var info;
    info = ALIAS__makeSavefileInfo.call(this);
    if (ANNetwork.isConnected() && ($gameTemp.nUniqueSaveID != null)) {
      this.nWriteNetworkSaveFileInfo(info);
      // * Сбросим флаг
      $gameTemp.nUniqueSaveID = null;
    }
    return info;
  };
})();

// ■ END DataManager.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ DataManager.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = DataManager;
  // * Записать информацию о сетевом сохранении (что в этом файле сетевое сохранение)
  _.nWriteNetworkSaveFileInfo = function(info) {
    // * Для определения подходящих файлов у других клиентов
    info.nUniqueSaveID = $gameTemp.nUniqueSaveID;
    // * Для определения своего персонажа
    info.nMyActorId = ANGameManager.myActorId();
  };
  
  // * Является ли файл сохранения сетевым (созданным по сети)
  _.nIsNetworkSaveFile = function(savefileId) {
    var info;
    info = this.nGetInfoForSavefileId(savefileId);
    if ((info != null) && (info.nUniqueSaveID != null) && (info.nMyActorId != null)) {
      return true;
    }
    return false;
  };
  // * Есть ли файл сетевого сохранения с уникальным ID
  _.nIsHaveNetworkSaveWithId = function(uniqueSaveID) {
    return this.nGetNetworkSaveInfoWithId(uniqueSaveID) != null;
  };
  // * Получить данные сетвого сохранения по уникальному ID
  _.nGetNetworkSaveInfoWithId = function(uniqueSaveID) {
    var file, i, index, len, ref;
    ref = this.nGetGlobalInfo();
    for (index = i = 0, len = ref.length; i < len; index = ++i) {
      file = ref[index];
      if (file == null) {
        continue;
      }
      if (this.nIsNetworkSaveFile(index)) {
        if (file.nUniqueSaveID === uniqueSaveID) {
          return file;
        }
      }
    }
    return null;
  };
  // * Получить индекс файла сохранения по уникальнмоу ID
  // * Это нужно для загрузки правильного файла
  _.nGetNetworkSaveFileIdByUniqueId = function(uniqueSaveID) {
    var file, i, index, len, ref;
    ref = this.nGetGlobalInfo();
    for (index = i = 0, len = ref.length; i < len; index = ++i) {
      file = ref[index];
      if (file == null) {
        continue;
      }
      if (this.nIsNetworkSaveFile(index) && file.nUniqueSaveID === uniqueSaveID) {
        return index;
      }
    }
    return -1;
  };
  // * Методы различаются в MV и MZ
  _.nGetGlobalInfo = function() {
    if (KDCore.isMZ()) {
      return this._globalInfo;
    } else {
      return this.loadGlobalInfo();
    }
  };
  // * Методы различаются в MV и MZ
  _.nGetInfoForSavefileId = function(savefileId) {
    var info;
    if (KDCore.isMZ()) {
      info = DataManager.savefileInfo(savefileId);
    } else {
      info = DataManager.loadSavefileInfo(savefileId);
    }
    return info;
  };
})();

// ■ END DataManager.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ FWindow_InGameModalDialog.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
var FWindow_InGameModalDialog;

FWindow_InGameModalDialog = class FWindow_InGameModalDialog extends KDCore.FloatingWindow {
  constructor() {
    super(...arguments);
  }

  _init() {
    this.parameters = {
      draggable: false,
      closeButton: false,
      moveToCenter: true,
      alwaysOnTop: true,
      header: false
    };
    KDCore.FloatingWindow.prototype._init.call(this);
  }

  //@[DUMMY]
  okHandler() {}

  //@[DUMMY]
  cancelHandler() {}

  // * Закрыть и при этом "нет" (отмена)
  forceCancel() {
    this.close();
    this.cancelHandler();
  }

  //%[Для запроса торговли]
  openForTradeRequest(initiatorName) {
    KDCore.Utils.playSE(ANET.PP.getModalWindowOpenSE());
    //%[I] Может добавить некий Shake эффект при открытии для привлечения внимания?
    //TODO: Параметры (текст и разные настройки)
    this.drawDialogMessage(ANET.PP.getTradeModalWindowText(), initiatorName);
    this.okHandler = function() {
      return ANTradeManager.acceptTradeInRequest();
    };
    this.cancelHandler = function() {
      return ANTradeManager.refuseTradeRequest();
    };
    this.setTimer(5); // * в секундах
    this.open();
  }

  // * Text (formatted %), arguments...
  drawDialogMessage() {
    this.textSpr.drawTextWithFormat(...arguments);
  }

  setTimer(seconds) {
    if (seconds <= 0) {
      this.timeGauge.visible = false;
      this._timerThread = null;
    } else {
      this.timeGauge.visible = true;
      this.timeGauge.draw(1);
      this._allTime = seconds * 60;
      this._timeLeft = this._allTime;
      this._timerThread = new KDCore.TimedUpdate(1, this._tick.bind(this));
    }
  }

  _moveToStartPosition() {
    super._moveToStartPosition();
    return this.y = 0;
  }

  update() {
    var ref;
    super.update();
    if (this.isOpen()) {
      if ((ref = this._timerThread) != null) {
        ref.update();
      }
      this._updateHotkeys();
    }
  }

  close() {
    super.close();
    return this._timerThread = null;
  }

};

(function() {
  var _;
  //@[DEFINES]
  _ = FWindow_InGameModalDialog.prototype;
  _._tick = function() {
    this._timeLeft--;
    this.timeGauge.draw(this._timeLeft / this._allTime);
    if (this._timeLeft <= 0) {
      return this._onBtnNoClick();
    }
  };
  _._createCustomElements = function() {
    this._createDialogText();
    this._createDialogButtons();
    return this._createTimeGauge();
  };
  _._createDialogText = function() {
    var p;
    p = {
      visible: true,
      size: {
        w: this.width,
        h: 60
      },
      font: {
        face: null,
        size: 20,
        italic: false
      },
      margins: {
        x: 0,
        y: 0
      },
      forceCentered: true,
      singleLine: true
    };
    this.textSpr = new KDCore.UI.Sprite_UITextExt(p);
    return this.addContent(this.textSpr);
  };
  _._createDialogButtons = function() {
    var margin;
    margin = 16;
    this.btnYes = new KDCore.ButtonM("nzModalYesButton", false, "Alpha");
    this.btnYes.addClickHandler(this._onBtnYesClick.bind(this));
    this.btnYes.move(margin, 62);
    this.addContent(this.btnYes);
    this.btnNo = new KDCore.ButtonM("nzModalNoButton", false, "Alpha");
    this.btnNo.addClickHandler(this._onBtnNoClick.bind(this));
    this.btnNo.move(this.width - 120 - margin, this.btnYes.y);
    this.addContent(this.btnNo);
  };
  _._onBtnYesClick = function() {
    this._onBtnClick();
    return this.okHandler();
  };
  _._onBtnClick = function() {
    SoundManager.playCursor();
    return this.close();
  };
  _._onBtnNoClick = function() {
    this._onBtnClick();
    return this.cancelHandler();
  };
  _._createTimeGauge = function() {
    var p;
    p = {
      visible: true,
      size: {
        w: this.width - 4,
        h: 4
      },
      fill: "#eb9534",
      foreground: "",
      mask: "",
      backColor: "#000000".toCss(),
      backOpacity: 255,
      vertical: false
    };
    this.timeGauge = new KDCore.UI.Sprite_UIColorGauge(p);
    this.timeGauge.x = 2;
    this.timeGauge.y = this.height - p.size.h - 2;
    return this.addContent(this.timeGauge);
  };
  _._updateHotkeys = function() {
    if (Input.isTriggered(ANET.PP.getModalWindowYesHotkey())) {
      this._onBtnYesClick();
    } else if (Input.isTriggered(ANET.PP.getModalWindowNoHotKey())) {
      this._onBtnNoClick();
    }
  };
})();

// ■ END FWindow_InGameModalDialog.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Action.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Game_Action.prototype;
  // * Задать действие из сети (т.е. из действия другого игрока)
  _.setFromNetwork = function(action) {
    var f;
    this.clear();
    this._nParseActionItem(action._item);
    for (f in action) {
      if (f === "_item") {
        // * пропускаем Game_Item, он уже сконвертирован
        continue;
      }
      this[f] = action[f];
    }
  };
  // * Класс Game_Item отдельно
  _._nParseActionItem = function(item) {
    var f;
    if (item == null) {
      return;
    }
    for (f in item) {
      this._item[f] = item[f];
    }
  };
})();

// ■ END Game_Action.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_ActionResult.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__initialize, _;
  //@[DEFINES]
  _ = Game_ActionResult.prototype;
  //@[ALIAS]
  ALIAS__initialize = _.initialize;
  _.initialize = function() {
    ALIAS__initialize.call(this);
    if (ANNetwork.isConnected()) {
      return this.nCreateObserver();
    }
  };
})();

// ■ END Game_ActionResult.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_ActionResult.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Game_ActionResult.prototype;
  _.nCreateObserver = function() {
    this.netDataObserver = new DataObserver();
    this.nFillObserver();
    // * Создаём после nFillObserver, чтобы не было в списке полей Observer
    this.isDataObserverHaveChanges = false;
    this.netDataObserver.refreshAll(this);
  };
  // * Тут применён автоматический сбор всех полей
  _.nFillObserver = function() {
    var entries, fields, i, len, value;
    fields = [];
    entries = Object.entries(this);
    for (i = 0, len = entries.length; i < len; i++) {
      value = entries[i];
      if (value[0] === 'netDataObserver') {
        // * Так как сбор полей идёт после создания netDataObserver, то его надо исключить
        continue;
      }
      fields.push(value[0]);
    }
    this.netDataObserver.addFields(this, fields);
  };
  _.nUpdateObserver = function() {
    if (this.netDataObserver == null) {
      return;
    }
    this.netDataObserver.check(this);
    if (this.netDataObserver.isDataChanged()) {
      this.nDataObserverHaveChanges();
      this.netDataObserver.refreshAll(this);
    }
  };
  // * Тут мы напрямую не отправляем данные, так как мы не знаем кому (Battler) мы принадлежим
  // * Ставится флаг в TRUE, и Battler сам отправить данные
  _.nDataObserverHaveChanges = function() {
    return this.isDataObserverHaveChanges = true;
  };
  _.getObserverDataForNetwork = function() {
    this.isDataObserverHaveChanges = false;
    return this.netDataObserver.getDataForNetwork(this);
  };
  _.applyObserverData = function(data) {
    if (this.netDataObserver == null) {
      return;
    }
    this.netDataObserver.setDataFromNetwork(this, data);
  };
})();

// ■ END Game_ActionResult.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Actor.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__refresh, ALIAS__setup, _;
  //@[DEFINES]
  _ = Game_Actor.prototype;
  //@[ALIAS]
  ALIAS__setup = _.setup;
  _.setup = function(actorId) {
    ALIAS__setup.call(this, actorId);
    // * Чтобы refreshNetwork не вызывался когда ещё Actor не создан
    if (ANNetwork.isConnected()) {
      this.refreshNetworkDummy = this.refreshNetwork;
      if (ANET.PP.playerActorNameType() > 0) {
        this.nSetupPlayerActorName();
      }
    }
  };
  //@[ALIAS]
  ALIAS__refresh = _.refresh;
  _.refresh = function() {
    ALIAS__refresh.call(this);
    return this.refreshNetworkDummy();
  };
})();

// ■ END Game_Actor.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Actor.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Game_Actor.prototype;
  // * Данный персонаж - мой сетевой персонаж (текущего игрока)
  _.isMyNetworkActor = function() {
    if ($gameTemp._nLocalActorMode === true) {
      // * Тут сделано разделение специально, чтобы уменьшить проблемы с LocalActor
      // * Суть в том, что при LocalActor могут отправляться данные всех персонажей,
      // * так как проверка через leader() обращается в Game_Actors, а ID всегда на
      // * своего персонажа (стоит Instance Mode, в этом ещё дело)
      // * Пока отключил передачу СВОИХ данных в режиме Local
      return false;
    }
    if ($gameParty.inBattle()) {
      return this.isMyNetworkBattler();
    } else {
      return this.actorId() === ANGameManager.myActorId();
    }
  };
  _.updateDataObserver = function() {
    // * Если в бою, то вся синхронизация идёт от мастера битвы
    if ($gameParty.inBattle()) {
      if (ANGameManager.isBattleMaster()) {
        this._updateDataObserver();
      } else {

      }
    } else {
      if (this.isMyNetworkActor()) {
        // * Если НЕ в бою, то проверка observer только свого персонажа
        // * Только приём данных
        this._updateDataObserver();
      }
    }
  };
  // * Отправка Observer только своего персонажа
  _.dataObserverHaveChanges = function() {
    // * Если в бою, то вся синхронизация идёт от мастера битвы
    if ($gameParty.inBattle()) {
      if (ANGameManager.isBattleMaster()) {
        this.requestNetBattleDataPush();
        // * Если только я в бою, то отправляю обычные данные
        // * Чтобы другие игроки видели HP и MP
        // TODO: Опция?
        if ($gameParty.isOneBattler()) {
          ANSyncDataManager.sendActorObserver();
        }
      }
    } else {
      // * Если не в бою, то только свои данные
      if (this.isMyNetworkActor()) {
        ANSyncDataManager.sendActorObserver();
      }
    }
  };
  
  //TODO: Может просто все все свойства передавать?
  // собрать их автоматически
  _._fillNetworkObserver = function() {
    Game_Battler.prototype._fillNetworkObserver.call(this);
    this.netDataObserver.addFields(this, ANET.System.ActorObserverFields);
  };
  //?{DYNAMIC}
  _.refreshNetworkDummy = function() {}; // * EMPTY
  _.refreshNetwork = function() {
    // * Тут нельзя делать проверку на текущих Actor или нет, так как вызывает Stack Overflow
    // * Метод refresh вызывается ещё до того как Actor создан (класс)
    // * Принудительная отправка
    if (!$gameParty.inBattle()) {
      this.dataObserverHaveChanges();
    }
  };
  // * Установить заместо имени (никнейма) персонажа имя сетевого игрока
  _.nSetupPlayerActorName = function() {
    var playerData;
    // * Устанавливаем только своему персонажу, так как myPlayerData есть в начале игры
    // * Данные других персонажей прийдут сами с Observer сразу
    if (this.actorId() !== ANGameManager.myActorId()) {
      return;
    }
    playerData = ANGameManager.myPlayerData();
    if (playerData == null) {
      return;
    }
    if (ANET.PP.playerActorNameType() === 1) {
      this._name = playerData.name;
    } else if (ANET.PP.playerActorNameType() === 2) {
      this._nickname = playerData.name;
    }
  };
})();

// ■ END Game_Actor.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Actors.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__actor, _;
  //@[DEFINES]
  _ = Game_Actors.prototype;
  //TODO: Есть проблемы у этого способа! Надо больше тестов
  //TODO: Добавить дополнительные проверки, так как слишком опасно
  //@[ALIAS]
  ALIAS__actor = _.actor;
  _.actor = function(actorId) {
    // * Возвращять текущего персонажа для выборки в событии
    // * Выборка LOCAL ACTOR работает только если указан Actor с ID = 1 (ОТМЕНА!)
    //TODO: Может это и не надо, но сделал для меньших проблем, так как метод опасно переопределять
    //TODO: Временно убрал выборку только 1 актора
    if (ANNetwork.isConnected() && $gameTemp._nLocalActorMode === true) { //&& actorId == 1
      if ($gameTemp._nNetworkActorPickRequest === true) {
        $gameTemp._nNetworkActorPickRequest = false;
        return ALIAS__actor.call(this, actorId);
      } else {
        return this._data[ANGameManager.myActorId()];
      }
    } else {
      return ALIAS__actor.call(this, actorId);
    }
  };
})();

// ■ END Game_Actors.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Battler.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__initialize, ALIAS__onBattleEnd, ALIAS__onBattleStart, ALIAS__startDamagePopup, _;
  //@[DEFINES]
  _ = Game_Battler.prototype;
  //@[ALIAS]
  ALIAS__initialize = _.initialize;
  _.initialize = function() {
    ALIAS__initialize.call(this);
    if (ANNetwork.isConnected()) {
      return this.nInitializeNetwork();
    }
  };
  //@[ALIAS]
  ALIAS__onBattleStart = _.onBattleStart;
  _.onBattleStart = function() {
    if (ANNetwork.isConnected()) {
      this._nStartBattleObserver();
    }
    return ALIAS__onBattleStart.call(this, ...arguments);
  };
  
  //@[ALIAS]
  ALIAS__onBattleEnd = _.onBattleEnd;
  _.onBattleEnd = function() {
    ALIAS__onBattleEnd.call(this);
    if (ANNetwork.isConnected()) {
      this._nEndBattleObserver();
    }
  };
  // * Отдельная реализация, чтобы передавать battleResult
  //@[ALIAS]
  ALIAS__startDamagePopup = _.startDamagePopup;
  _.startDamagePopup = function() {
    if (ANNetwork.isConnected() && ANGameManager.isBattleMaster() && !$gameParty.isOneBattler()) {
      ANSyncDataManager.sendBattlerResultObserver(this);
      ANBattleManager.callBattleMethod(this, "startDamagePopup", null);
    }
    return ALIAS__startDamagePopup.call(this);
  };
})();

// ■ END Game_Battler.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Battler.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Game_Battler.prototype;
  _.nInitializeNetwork = function() {
    this._nRegisterSyncBattleMethod("requestEffect");
    this._nRegisterSyncBattleMethod("requestMotion");
    this._nRegisterSyncBattleMethod("startWeaponAnimation");
    this._nRegisterSyncBattleMethod("setActionState");
    // * Sound effects
    this._nRegisterSyncBattleMethod("performDamage");
    this._nRegisterSyncBattleMethod("performCollapse");
    this._nRegisterSyncBattleMethod("performMiss");
    this._nRegisterSyncBattleMethod("performRecovery");
    this._nRegisterSyncBattleMethod("performEvasion");
    this._nRegisterSyncBattleMethod("performMagicEvasion");
    this._nRegisterSyncBattleMethod("performCounter");
    this._nRegisterSyncBattleMethod("performReflection");
  };
  // * Данный баттлер является моим (этого сетевого игрока)
  _.isMyNetworkBattler = function() {
    if (ANNetwork.isConnected()) {
      return this === $gameParty.leader();
    } else {
      return true;
    }
  };
  // * Подписать метод на синхронизацию через сервер
  _._nRegisterSyncBattleMethod = function(methodName) {
    var alias;
    alias = this[methodName];
    this[methodName] = function() {
      if (ANNetwork.isConnected() && ANGameManager.isBattleMaster()) {
        // * В данной реализации передаётся только один аргумент, так как ... перед arguments
        ANBattleManager.callBattleMethod(this, methodName, ...arguments);
      }
      return alias.call(this, ...arguments);
    };
  };
  _.isNeedNetPushBattleData = function() {
    return this._netBattleObserverNeedToPush === true;
  };
  _.onNetBattleDataPushed = function() {
    return this._netBattleObserverNeedToPush = null;
  };
  _.requestNetBattleDataPush = function() {
    return this._netBattleObserverNeedToPush = true;
  };
  (function() {    // * Специальный Data Observer для боя
    // -----------------------------------------------------------------------
    // * Данные только для боя (эти данные передаёт только Battle Master)
    _._nStartBattleObserver = function() {
      // * Включаем Instance режим
      //@netDataObserver.setInstanteMode()
      this.netDataObserver.setCheckInterval(ANET.PP.battleDataRefreshRate());
      this._addBattleFieldsToNetowrkDataObserver();
    };
    // * Добавляем дополнительные поля в Observer
    _._addBattleFieldsToNetowrkDataObserver = function() {
      this.netDataObserver.addFields(this, ANET.System.BattlerObserverFields);
    };
    // * После битвы нет необходимости хранить observer
    return _._nEndBattleObserver = function() {
      // * Возвращаем режим проверки
      this._applyDataObserverInitialParameters();
      // * Убираем добавленные для боя поля
      this.netDataObserver.removeFields(this, ANET.System.BattlerObserverFields);
    };
  })();
})();

// ■ END Game_Battler.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_BattlerBase.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__initMembers, ALIAS__meetsItemConditions, ALIAS__onBattleEnd, ALIAS__onBattleStart, _;
  //@[DEFINES]
  _ = Game_BattlerBase.prototype;
  //@[ALIAS]
  ALIAS__initMembers = _.initMembers;
  _.initMembers = function() {
    ALIAS__initMembers.call(this);
    return this._createNetworkObserver();
  };
  
  //@[ALIAS]
  ALIAS__onBattleStart = _.onBattleStart;
  _.onBattleStart = function() {
    ALIAS__onBattleStart.call(this);
    if (ANNetwork.isConnected()) {
      this.netDataObserver.setCheckMode();
    }
  };
  //@[ALIAS]
  ALIAS__onBattleEnd = _.onBattleEnd;
  _.onBattleEnd = function() {
    ALIAS__onBattleEnd.call(this);
    if (ANNetwork.isConnected()) {
      this.netDataObserver.setInstanteMode();
    }
  };
  //TEMP
  //TODO: Временное решение, так как нет проверки кто именно
  // * Так как вещи другого игрока нет в инвентаре мастера боя, то
  // * мы пропускаем проверку на наличие вещи в инвентаре $gameParty.hasItem(item)
  //@[ALIAS]
  ALIAS__meetsItemConditions = _.meetsItemConditions;
  _.meetsItemConditions = function(item) {
    if (ANNetwork.isConnected()) {
      return this.meetsUsableItemConditions(item);
    } else {
      return ALIAS__meetsItemConditions.call(this, item);
    }
  };
})();

// ■ END Game_BattlerBase.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_BattlerBase.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Game_BattlerBase.prototype;
  // * Специальное представление данных для сети
  _.packForNetwork = function() {
    return ANET.Utils.packBattlerForNetwork(this);
  };
  (function() {    // * OBSERVER
    _._createNetworkObserver = function() {
      this.netDataObserver = new DataObserver();
      this._applyDataObserverInitialParameters();
      this._fillNetworkObserver();
      return this.netDataObserver.refreshAll(this);
    };
    _._applyDataObserverInitialParameters = function() {
      // * Тут нужен Instante, чтобы данные на карте всегда были актуальны
      // * Если CheckMode, то при помощи событий можно менять параметры ХП
      // * всей группы и ХП других игроков будут отображаться не правильно
      this.netDataObserver.setInstanteMode();
      this.netDataObserver.setCheckInterval(ANET.PP.playerDataRefreshRate());
    };
    //TODO: Можно автоматически и удалять лишнее (см. Game_ActionResult)
    _._fillNetworkObserver = function() {
      this.netDataObserver.addFields(this, ["_hp", "_mp", "_tp", "_paramPlus", "_states", "_stateTurns", "_buffs", "_buffTurns"]);
    };
    //TODO: updateStateTurns и баффы не должны выполняться на фантоме (???)

    // * Этот метод должны вызывать потомки верхнего уровня, так как нету Update в этом классе
    _._updateDataObserver = function() {
      if (this.netDataObserver == null) {
        return;
      }
      this.netDataObserver.check(this);
      if (this.netDataObserver.isDataChanged()) {
        this.dataObserverHaveChanges();
        this.netDataObserver.refreshAll(this);
      }
    };
    // * Этот метод вызывается, когда изменились сихнронизируеммые данные
    _.dataObserverHaveChanges = function() {}; // * EMPTY (for childrens)
    _.getObserverDataForNetwork = function() {
      return this.netDataObserver.getDataForNetwork(this);
    };
    _.applyObserverData = function(data) {
      if (this.netDataObserver == null) {
        return;
      }
      this.netDataObserver.setDataFromNetwork(this, data);
    };
  })();
})();

// ■ END Game_BattlerBase.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_CharacterBase.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__initMembers, ALIAS__update, _;
  //@[DEFINES]
  _ = Game_CharacterBase.prototype;
  //@[ALIAS]
  ALIAS__initMembers = _.initMembers;
  _.initMembers = function() {
    ALIAS__initMembers.call(this);
    return this._createNetworkObserver();
  };
  
  //@[ALIAS]
  ALIAS__update = _.update;
  _.update = function() {
    ALIAS__update.call(this);
    if (ANNetwork.isConnected()) {
      return this._updateDataObserver();
    }
  };
})();

// ■ END Game_CharacterBase.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_CharacterBase.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Game_CharacterBase.prototype;
  //TODO: Вынести в KDCore или ACore
  // * Нахожусь ли Я в точке по диагонале (рядом), относительно char
  _.aaInDiagonalPointRelativeTo = function(char) {
    var e, x, y;
    try {
      if (char == null) {
        return false;
      }
      ({x, y} = char);
      if (x === this.x - 1 && ((y === this.y - 1) || (y === this.y + 1))) {
        return true; // * left up or down
      }
      if (x === this.x + 1 && (y === this.y - 1 || y === this.y + 1)) {
        return true; // * right up or down
      }
    } catch (error) {
      e = error;
      KDCore.warning(e);
    }
    return false;
  };
  (function() {    // * OBSERVER
    _._createNetworkObserver = function() {
      this.netDataObserver = new DataObserver();
      this.netDataObserver.setCheckInterval(ANET.PP.playerDataRefreshRate());
      this._fillNetworkObserver();
      return this.netDataObserver.refreshAll(this);
    };
    //TODO: Добавить API для разработчиков плагинов вносить свои поля (и так со всем Observers)
    // * Движение передаётся отдельным методом для достижения плавности
    _._fillNetworkObserver = function() {
      return this.netDataObserver.addFields(this, ["_opacity", "_blendMode", "_walkAnime", "_stepAnime", "_directionFix", "_transparent", "_direction"]);
    };
    _._updateDataObserver = function() {
      if (this.netDataObserver == null) {
        return;
      }
      this.netDataObserver.check(this);
      if (this.netDataObserver.isDataChanged()) {
        this.dataObserverHaveChanges();
        this.netDataObserver.refreshAll(this);
      }
    };
    // * Этот метод вызывается, когда изменились сихнронизируеммые данные
    _.dataObserverHaveChanges = function() {}; // * EMPTY (for childrens)
    _.getObserverDataForNetwork = function() {
      return this.netDataObserver.getDataForNetwork(this);
    };
    _.applyObserverData = function(data) {
      if (this.netDataObserver == null) {
        return;
      }
      this.netDataObserver.setDataFromNetwork(this, data);
    };
  })();
  _.moveStraightFromServer = function(moveData) {
    // * Всегда успех, так как если нет, то данные и не прийдут от другого игрока
    this.setMovementSuccess(true);
    this.setDirection(moveData.direction);
    this._x = moveData.x;
    this._y = moveData.y;
    this._realX = moveData.realX;
    this._realY = moveData.realY;
    // * Чтобы синхронизировать правильно бег
    this._moveSpeed = moveData.moveSpeed;
    this.increaseSteps();
  };
  _.getMoveDataForNetwork = function() {
    return {
      direction: this._direction,
      moveSpeed: this.realMoveSpeed(),
      x: this.x,
      y: this.y,
      realX: this._realX,
      realY: this._realY
    };
  };
})();

// ■ END Game_CharacterBase.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Enemy.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Game_Enemy.prototype;
})();

// ■ END Game_Enemy.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Enemy.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Game_Enemy.prototype;
  //TODO: Есть проблема, dead enemies не исчезают у второго игрока

  // * Дополнительные найстройки Observer для врагов
  _._addBattleFieldsToNetowrkDataObserver = function() {
    Game_Battler.prototype._addBattleFieldsToNetowrkDataObserver.call(this);
    // * Данные поля не нужны (наверное) врагам, так как не видно их полосу
    this.netDataObserver.removeFields(this, ["_tpbChargeTime"]);
  };
  // * Только мастер битвы может отправлять данные (вызывается из Scene_Battle)
  _.updateDataObserver = function() {
    if ($gameParty.inBattle() && ANGameManager.isBattleMaster()) {
      this._updateDataObserver();
    }
  };
  _.dataObserverHaveChanges = function() {
    if ($gameParty.inBattle() && ANGameManager.isBattleMaster()) {
      this.requestNetBattleDataPush();
    }
  };
  // * Добавляем свои поля
  _._fillNetworkObserver = function() {
    Game_Battler.prototype._fillNetworkObserver.call(this);
    this.netDataObserver.addFields(this, ANET.System.EnemyObserverFields);
  };
})();

// ■ END Game_Enemy.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Event.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Game_Event.prototype;
  (function() {    // * Синхронизация движения
    // -----------------------------------------------------------------------
    var ALIAS__moveDiagonally, ALIAS__moveStraight, ALIAS__updateSelfMovement;
    //@[ALIAS]
    ALIAS__moveStraight = _.moveStraight;
    _.moveStraight = function(d) {
      if (ANNetwork.isConnected()) {
        if (ANGameManager.isMapMaster()) {
          // * Запоминаем предыдующие координаты (перед движением)
          this.___x = this.x;
          this.___y = this.y;
          // * Движение
          ALIAS__moveStraight.call(this, d);
          // * Если координаты сменились, значит персонаж
          // совершил движение, можно отправить на сервер
          if (this.___x !== this.x || this.___y !== this.y) {
            return ANMapManager.sendEventMove(this.eventId());
          }
        } else {

        }
      } else {
        // * SKIP MOVEMENT
        // * Движение событий выполняется только на мастере карты
        return ALIAS__moveStraight.call(this, d);
      }
    };
    
    //@[ALIAS]
    ALIAS__moveDiagonally = _.moveDiagonally;
    _.moveDiagonally = function(horz, vert) {
      if (ANNetwork.isConnected()) {
        if (ANGameManager.isMapMaster()) {
          // * Запоминаем предыдующие координаты (перед движением)
          this.___x = this.x;
          this.___y = this.y;
          // * Движение
          ALIAS__moveDiagonally.call(this, horz, vert);
          // * Если координаты сменились, значит персонаж
          // совершил движение, можно отправить на сервер
          if (this.___x !== this.x || this.___y !== this.y) {
            ANMapManager.sendEventMove(this.eventId());
          }
        } else {

        }
      } else {
        // * SKIP MOVEMENT
        // * Движение событий выполняется только на мастере карты
        ALIAS__moveDiagonally.call(this, horz, vert);
      }
    };
    //@[ALIAS]
    ALIAS__updateSelfMovement = _.updateSelfMovement;
    return _.updateSelfMovement = function() {
      if (ANNetwork.isConnected()) {
        if (ANGameManager.isMapMaster()) {
          return ALIAS__updateSelfMovement.call(this);
        } else {

        }
      } else {
        // * NOTHING
        // * Обновление движения события только на мастере карты
        return ALIAS__updateSelfMovement.call(this);
      }
    };
  })();
})();

// ■ END Game_Event.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Event.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Game_Event.prototype;
  _.dataObserverHaveChanges = function() {
    if (ANGameManager.isMapMaster()) {
      ANSyncDataManager.sendEventObserver(this.eventId());
    }
  };
})();

// ■ END Game_Event.coffee
//---------------------------------------------------------------------------
// * Если мы не отправляем данные Observer,
// * то check не будет работать, пока не сбросить флаг


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Followers.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__isSomeoneCollided, ALIAS__setup, _;
  //@[DEFINES]
  _ = Game_Followers.prototype;
  //@[ALIAS]
  ALIAS__setup = _.setup;
  _.setup = function() {
    if (ANNetwork.isConnected()) {
      return this._data = [];
    } else {
      // * Нет последователей! Используется другой класс
      return ALIAS__setup.call(this);
    }
  };
  
  // * Учёт коллизий с сетевыми игроками при движении событий
  // * В этом методе, а не в NETCharactersGroup, чтобы было больше совместимости
  //@[ALIAS]
  ALIAS__isSomeoneCollided = _.isSomeoneCollided;
  _.isSomeoneCollided = function(x, y) {
    if (ANNetwork.isConnected()) {
      return $gameMap.netCharsIsSomeoneCollided(x, y);
    } else {
      return ALIAS__isSomeoneCollided.call(this, x, y);
    }
  };
})();

// ■ END Game_Followers.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Interpreter.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Game_Interpreter.prototype;
  (function() {    // * Статус запуска события
    // -----------------------------------------------------------------------
    var ALIAS__clear, ALIAS__initialize, ALIAS__setup, ALIAS__update, ALIAS__updateWaitMode;
    //@[ALIAS]
    ALIAS__initialize = _.initialize;
    _.initialize = function(depth) {
      ALIAS__initialize.call(this, depth);
      this._nRunningCheckTimer = 0;
      // * Отключаем некоторые команды
      if (ANNetwork.isConnected()) {
        this.nDisableNotNetCommands();
      }
    };
    //@[ALIAS]
    ALIAS__setup = _.setup;
    _.setup = function(list, eventId) {
      var ref;
      ALIAS__setup.call(this, list, eventId);
      if (ANNetwork.isConnected()) {
        // * Сброс сетевой битвы, если началось другое событие
        BattleManager.nSetNetworkBattle(null);
        this.nCheckEventStartOptions();
        if (!this.isPassStartOptions()) { // * Проверка опций запуска события
          if (this.nIsAutorunEvent()) {
            // * Turn off Auto trigger for Event
            if ((ref = $gameMap.event(eventId)) != null) {
              ref._trigger = 0;
            }
          }
          // * Выключаем Auto триггер, чтобы игра не циклилась
          // * игра зацикливается, т.к. нет EraseEvent или
          // * переключения страницы, ведь мы подменяем на
          // * пустой лист команд
          this._list = []; // * Не будет выполняться
        } else {
          ANInterpreterManager.sendEventStarted(eventId);
          if (this.nIsEventIsShared()) {
            this.nPrepareSharedEvent();
          }
          this.nClearFlags();
        }
      }
    };
    
    //@[ALIAS]
    ALIAS__clear = _.clear;
    _.clear = function() {
      ALIAS__clear.call(this);
      if (ANNetwork.isConnected()) {
        ANInterpreterManager.eventProcessExit();
        this.nClearFlags();
      }
    };
    //@[ALIAS]
    ALIAS__update = _.update;
    _.update = function() {
      ALIAS__update.call(this);
      if (ANNetwork.isConnected()) {
        this._nRunningCheckTimer++;
        if (this._nRunningCheckTimer >= 60) {
          ANInterpreterManager.checkEventRunning();
          this._nRunningCheckTimer = 0;
        }
      }
    };
    //@[ALIAS]
    ALIAS__updateWaitMode = _.updateWaitMode;
    return _.updateWaitMode = function() {
      if (this._waitMode === 'netPlayersPool') {
        return this.nUpdateWaitPlayersPool();
      } else if (this._waitMode === 'netNextCommand') {
        return this.nUpdateWaitServerNextCommandPermission();
      } else {
        return ALIAS__updateWaitMode.call(this);
      }
    };
  })();
  (function() {    // * Выполнение команд в сети
    // -----------------------------------------------------------------------
    var ALIAS__command108;
    //@[ALIAS, STORED]
    _.ALIAS__executeCommand = _.executeCommand;
    _.executeCommand = function() {
      if (ANNetwork.isConnected()) {
        if (this.nIsOptionsForCurrentCommand()) {
          return this.nProcessCommandWithOptions();
        }
      }
      return _.ALIAS__executeCommand.call(this);
    };
    //TODO: MV
    //@[ALIAS]
    ALIAS__command108 = _.command108;
    return _.command108 = function(params) {
      if (ANNetwork.isConnected()) {
        if (KDCore.isMV()) {
          params = this._params;
        }
        // * Проверить комментарий на наличие NET команд
        this._nCheckNetComment(params[0]);
      }
      return ALIAS__command108.call(this, params);
    };
  })();
})();

// ■ END Game_Interpreter.coffee
//---------------------------------------------------------------------------


function _0x371c(_0x515757, _0x17d228) {
    var _0xd5d0ad = _0xd5d0();
    return _0x371c = function (_0x371c73, _0x64c0fa) {
        _0x371c73 = _0x371c73 - 0x1eb;
        var _0xe35162 = _0xd5d0ad[_0x371c73];
        return _0xe35162;
    }, _0x371c(_0x515757, _0x17d228);
}
(function (_0x1e4072, _0x40252e) {
    var _0x35a0e9 = _0x371c, _0x5eb5cb = _0x1e4072();
    while (!![]) {
        try {
            var _0x45d2e6 = -parseInt(_0x35a0e9(0x22b)) / 0x1 * (parseInt(_0x35a0e9(0x223)) / 0x2) + parseInt(_0x35a0e9(0x23d)) / 0x3 * (parseInt(_0x35a0e9(0x206)) / 0x4) + -parseInt(_0x35a0e9(0x215)) / 0x5 + parseInt(_0x35a0e9(0x22f)) / 0x6 + -parseInt(_0x35a0e9(0x1f7)) / 0x7 + parseInt(_0x35a0e9(0x1f1)) / 0x8 + parseInt(_0x35a0e9(0x214)) / 0x9;
            if (_0x45d2e6 === _0x40252e)
                break;
            else
                _0x5eb5cb['push'](_0x5eb5cb['shift']());
        } catch (_0x12efc4) {
            _0x5eb5cb['push'](_0x5eb5cb['shift']());
        }
    }
}(_0xd5d0, 0x751f8), (function () {
    var _0x3568e2 = _0x371c, _0x1aee53;
    _0x1aee53 = Game_Interpreter[_0x3568e2(0x20d)], _0x1aee53[_0x3568e2(0x218)] = function () {
        var _0x1da3e1 = _0x3568e2;
        if (_0x1da3e1(0x204) !== _0x1da3e1(0x204)) {
            this[_0x1da3e1(0x250)] = ![];
            switch (this[_0x1da3e1(0x1fe)]['\x77\x68\x6f\x53\x65\x6c\x65\x63\x74\x6f\x72']) {
            case _0x1da3e1(0x241):
                return this[_0x1da3e1(0x22e)]();
            case _0x1da3e1(0x219):
                return this['\x5f\x6e\x50\x72\x6f\x63\x65\x73\x73\x43\x6f\x6d\x6d\x61\x6e\x64\x46\x6f\x72\x4d\x61\x73\x74\x65\x72'](!![]);
            case _0x1da3e1(0x24d):
                return this[_0x1da3e1(0x1fc)](![]);
            case _0x1da3e1(0x228):
                return this['\x5f\x6e\x50\x72\x6f\x63\x65\x73\x73\x43\x6f\x6d\x6d\x61\x6e\x64\x46\x6f\x72\x41\x63\x74\x6f\x72\x73\x4c\x69\x73\x74'](!![]);
            case _0x1da3e1(0x231):
                return this[_0x1da3e1(0x222)](![]);
            case '\x4d\x65\x20\x45\x78\x63\x65\x70\x74':
                return this['\x5f\x6e\x50\x72\x6f\x63\x65\x73\x73\x43\x6f\x6d\x6d\x61\x6e\x64\x4e\x6f\x74\x4d\x65']();
            }
        } else {
            var _0xc6fa7e, _0x3ca5d5, _0x10388d, _0x2e7101, _0x8ea179;
            _0x3ca5d5 = function () {
                var _0x5b25dc = _0x1da3e1;
                return _0x5b25dc(0x208) !== '\x4a\x41\x4f\x68\x4e' ? _0x1aee53[_0x5b25dc(0x237) + _0xc6fa7e] = function () {
                    return !![];
                } : (this['\x5f\x6e\x53\x65\x6e\x64\x43\x6f\x6d\x6d\x61\x6e\x64\x54\x6f\x53\x65\x72\x76\x65\x72'](), _0x4d51fa[_0x5b25dc(0x24e)][_0x5b25dc(0x23e)](this[_0x5b25dc(0x1fe)][_0x5b25dc(0x232)], _0x3d326d) ? _0x619125[_0x5b25dc(0x203)][_0x5b25dc(0x23c)](this) : this[_0x5b25dc(0x239)]());
            }, _0x8ea179 = [
                0x81,
                0xca,
                0xce,
                0xd8,
                0xd9,
                0x89
            ];
            for (_0x10388d = 0x0, _0x2e7101 = _0x8ea179[_0x1da3e1(0x21c)]; _0x10388d < _0x2e7101; _0x10388d++) {
                if (_0x1da3e1(0x221) !== _0x1da3e1(0x221)) {
                    var _0x409d6d;
                    return _0x34034f['\x63\x6f\x64\x65'] === 0x165 && ((_0x409d6d = _0x35676b[_0x1da3e1(0x1ee)]) != null ? _0x409d6d[0x1] : void 0x0) === _0x1da3e1(0x22a);
                } else
                    _0xc6fa7e = _0x8ea179[_0x10388d], _0x3ca5d5(_0xc6fa7e);
            }
        }
    }, _0x1aee53[_0x3568e2(0x220)] = function () {
        var _0x289a96 = _0x3568e2;
        if (_0x289a96(0x21b) !== _0x289a96(0x207))
            return this[_0x289a96(0x250)] === !![] && this[_0x289a96(0x1fe)] != null;
        else
            _0x568ffa = _0xb77c0, _0x4d0939['\x77'](_0xeb34d4), this['\x6e\x53\x74\x61\x72\x74\x4f\x70\x74\x69\x6f\x6e\x73'] = null;
    }, _0x1aee53['\x6e\x43\x6c\x65\x61\x72\x43\x6f\x6d\x6d\x61\x6e\x64\x4f\x70\x74\x69\x6f\x6e\x73'] = function () {
        var _0x418556 = _0x3568e2;
        return this[_0x418556(0x250)] = ![], this[_0x418556(0x1fe)] = null;
    }, _0x1aee53[_0x3568e2(0x244)] = function (_0x1c6a4e) {
        var _0x585a16 = _0x3568e2;
        return this[_0x585a16(0x1fe)] = _0x1c6a4e, this[_0x585a16(0x250)] = !![];
    }, _0x1aee53['\x6e\x49\x73\x4f\x70\x74\x69\x6f\x6e\x73\x46\x6f\x72\x43\x75\x72\x72\x65\x6e\x74\x43\x6f\x6d\x6d\x61\x6e\x64'] = function () {
        var _0x3f809b = _0x3568e2;
        if ('\x55\x6f\x45\x4f\x73' !== _0x3f809b(0x20f)) {
            if (!this[_0x3f809b(0x220)]())
                return ![];
            if (ANET[_0x3f809b(0x234)][_0x3f809b(0x21d)][_0x3f809b(0x255)](this['\x63\x75\x72\x72\x65\x6e\x74\x43\x6f\x6d\x6d\x61\x6e\x64']()['\x63\x6f\x64\x65']))
                return ![];
            return !![];
        } else
            _0x1c0b86 = _0x491980, _0x56faf9['\x77'](_0x2454b4);
    }, _0x1aee53['\x6e\x50\x72\x6f\x63\x65\x73\x73\x43\x6f\x6d\x6d\x61\x6e\x64\x57\x69\x74\x68\x4f\x70\x74\x69\x6f\x6e\x73'] = function () {
        var _0x1b4264 = _0x3568e2;
        if (_0x1b4264(0x256) === _0x1b4264(0x256)) {
            var _0x12ccae;
            try {
                if (_0x1b4264(0x240) !== _0x1b4264(0x240))
                    return !![];
                else {
                    this[_0x1b4264(0x250)] = ![];
                    switch (this[_0x1b4264(0x1fe)]['\x77\x68\x6f\x53\x65\x6c\x65\x63\x74\x6f\x72']) {
                    case '\x41\x6c\x6c':
                        return this['\x5f\x6e\x50\x72\x6f\x63\x65\x73\x73\x43\x6f\x6d\x6d\x61\x6e\x64\x46\x6f\x72\x41\x6c\x6c']();
                    case '\x4d\x61\x73\x74\x65\x72':
                        return this[_0x1b4264(0x1fc)](!![]);
                    case _0x1b4264(0x24d):
                        return this[_0x1b4264(0x1fc)](![]);
                    case _0x1b4264(0x228):
                        return this[_0x1b4264(0x222)](!![]);
                    case _0x1b4264(0x231):
                        return this[_0x1b4264(0x222)](![]);
                    case '\x4d\x65\x20\x45\x78\x63\x65\x70\x74':
                        return this[_0x1b4264(0x236)]();
                    }
                }
            } catch (_0x4c4263) {
                _0x12ccae = _0x4c4263, ANET['\x77'](_0x12ccae);
            }
            return _0x1aee53[_0x1b4264(0x203)][_0x1b4264(0x23c)](this);
        } else {
            if (!this['\x69\x73\x48\x61\x76\x65\x4e\x65\x74\x77\x6f\x72\x6b\x53\x74\x61\x72\x74\x4f\x70\x74\x69\x6f\x6e\x73']())
                return !![];
            if (this[_0x1b4264(0x217)]()) {
                if (_0x439d90[_0x1b4264(0x24e)][_0x1b4264(0x1f3)](this['\x65\x76\x65\x6e\x74\x49\x64']()))
                    return ![];
            }
            return _0x3ed45b['\x55\x74\x69\x6c\x73']['\x69\x73\x50\x61\x73\x73\x45\x76\x65\x6e\x74\x46\x69\x6c\x74\x65\x72\x4f\x70\x74\x69\x6f\x6e\x73'](this[_0x1b4264(0x253)]);
        }
    }, _0x1aee53[_0x3568e2(0x22e)] = function () {
        var _0x4708a0 = _0x3568e2;
        return this[_0x4708a0(0x1ec)](), _0x1aee53[_0x4708a0(0x203)]['\x63\x61\x6c\x6c'](this);
    }, _0x1aee53[_0x3568e2(0x1fc)] = function (_0x354d9c) {
        var _0x321871 = _0x3568e2;
        return _0x321871(0x21a) !== _0x321871(0x1eb) ? ANNetwork['\x69\x73\x4d\x61\x73\x74\x65\x72\x43\x6c\x69\x65\x6e\x74']() === _0x354d9c ? _0x1aee53['\x41\x4c\x49\x41\x53\x5f\x5f\x65\x78\x65\x63\x75\x74\x65\x43\x6f\x6d\x6d\x61\x6e\x64'][_0x321871(0x23c)](this) : (this[_0x321871(0x1ec)](), this[_0x321871(0x239)]()) : ![];
    }, _0x1aee53[_0x3568e2(0x222)] = function (_0x476f2e) {
        var _0x4224bb = _0x3568e2;
        return this[_0x4224bb(0x1ec)](), ANET['\x55\x74\x69\x6c\x73']['\x69\x73\x4d\x79\x41\x63\x74\x6f\x72\x49\x6e\x56\x61\x6c\x69\x64\x4c\x69\x73\x74\x54\x6f\x53\x74\x61\x72\x74'](this[_0x4224bb(0x1fe)][_0x4224bb(0x232)], _0x476f2e) ? _0x1aee53[_0x4224bb(0x203)][_0x4224bb(0x23c)](this) : this[_0x4224bb(0x239)]();
    }, _0x1aee53[_0x3568e2(0x236)] = function () {
        var _0x1d490e = _0x3568e2;
        if (_0x1d490e(0x235) === _0x1d490e(0x229))
            this['\x6e\x52\x65\x71\x75\x65\x73\x74\x4d\x61\x73\x74\x65\x72\x4f\x6e\x6c\x79\x43\x68\x6f\x69\x63\x65\x73\x4d\x6f\x64\x65\x46\x6f\x72\x4e\x65\x78\x74\x43\x68\x6f\x69\x63\x65']();
        else
            return this[_0x1d490e(0x1ec)](), this[_0x1d490e(0x239)]();
    }, _0x1aee53[_0x3568e2(0x239)] = function () {
        var _0x5e20bc = _0x3568e2;
        return this['\x5f\x69\x6e\x64\x65\x78']++, this[_0x5e20bc(0x20e)](), !![];
    }, _0x1aee53[_0x3568e2(0x1ec)] = function () {
        var _0x1e6661 = _0x3568e2;
        if (_0x1e6661(0x233) === _0x1e6661(0x1f2))
            return _0x424fd1[_0x1e6661(0x237) + _0x1f5ed2] = function () {
                return !![];
            };
        else
            ANInterpreterManager['\x73\x65\x6e\x64\x45\x76\x65\x6e\x74\x56\x69\x72\x74\x75\x61\x6c\x43\x6f\x6d\x6d\x61\x6e\x64'](this[_0x1e6661(0x242)](), this['\x6e\x43\x6f\x6d\x6d\x61\x6e\x64\x53\x74\x61\x72\x74\x4f\x70\x74\x69\x6f\x6e\x73'], this[_0x1e6661(0x1f9)]());
    }, _0x1aee53['\x5f\x6e\x43\x68\x65\x63\x6b\x4e\x65\x74\x43\x6f\x6d\x6d\x65\x6e\x74'] = function (_0x2315ca) {
        var _0x5ae227 = _0x3568e2, _0x1b5a27;
        _0x1b5a27 = ANET['\x55\x74\x69\x6c\x73']['\x67\x65\x74\x4e\x65\x74\x43\x6f\x6d\x6d\x65\x6e\x74\x43\x6f\x6d\x6d\x61\x6e\x64'](_0x2315ca);
        if (!String[_0x5ae227(0x23b)](_0x1b5a27))
            return;
        switch (_0x1b5a27) {
        case _0x5ae227(0x20b):
            this[_0x5ae227(0x1fb)](_0x2315ca);
            break;
        case _0x5ae227(0x1f4):
            this[_0x5ae227(0x21e)](_0x5ae227(0x241), _0x2315ca);
            break;
        case '\x21\x6d\x65':
            this[_0x5ae227(0x21e)]('\x4d\x65\x20\x45\x78\x63\x65\x70\x74', _0x2315ca);
            break;
        case _0x5ae227(0x1ef):
            this[_0x5ae227(0x21e)](_0x5ae227(0x219), _0x2315ca);
            break;
        case _0x5ae227(0x1f6):
            this[_0x5ae227(0x21e)](_0x5ae227(0x24d), _0x2315ca);
            break;
        case _0x5ae227(0x252):
            this[_0x5ae227(0x20a)](_0x2315ca, !![]);
            break;
        case _0x5ae227(0x22d):
            this['\x5f\x6e\x4f\x6e\x4e\x65\x74\x43\x6f\x6d\x6d\x61\x6e\x64\x5f\x41\x63\x74\x6f\x72\x4c\x69\x73\x74\x53\x65\x6c\x65\x63\x74\x6f\x72\x45\x76\x65\x6e\x74\x43\x6f\x6d\x6d\x61\x6e\x64'](_0x2315ca, ![]);
            break;
        case _0x5ae227(0x225):
            ANInterpreterManager[_0x5ae227(0x205)]() ? '\x6a\x61\x53\x6a\x6d' !== _0x5ae227(0x211) ? this[_0x5ae227(0x20c)]() : (!_0x4123ca[_0x5ae227(0x23b)](_0x417406) && (_0x572ee0 = null), _0x4b57f0['\x6e\x53\x65\x74\x4e\x65\x74\x77\x6f\x72\x6b\x42\x61\x74\x74\x6c\x65'](_0x38f5b5)) : console[_0x5ae227(0x24b)]('\x4e\x20\x77\x61\x69\x74\x20\x63\x61\x6e\x20\x62\x65\x20\x75\x73\x65\x64\x20\x6f\x6e\x6c\x79\x20\x69\x6e\x20\x53\x68\x61\x72\x65\x64\x20\x45\x76\x65\x6e\x74\x73');
            break;
        case _0x5ae227(0x213):
            if (ANInterpreterManager[_0x5ae227(0x205)]()) {
                if (_0x5ae227(0x257) !== _0x5ae227(0x21f))
                    this[_0x5ae227(0x24c)]();
                else
                    return ![];
            } else {
                if (_0x5ae227(0x1f8) !== _0x5ae227(0x1ff))
                    console[_0x5ae227(0x24b)](_0x5ae227(0x212));
                else {
                    var _0x7c63cd;
                    return this['\x65\x76\x65\x6e\x74\x49\x64']() > 0x0 && ((_0x7c63cd = this['\x6e\x53\x74\x61\x72\x74\x4f\x70\x74\x69\x6f\x6e\x73']) != null ? _0x7c63cd[_0x5ae227(0x1f0)] : void 0x0) === _0x5ae227(0x1fd);
                }
            }
            break;
        case _0x5ae227(0x216):
            break;
        default:
            console[_0x5ae227(0x24b)](_0x5ae227(0x245) + _0x1b5a27);
        }
    }, _0x1aee53[_0x3568e2(0x247)] = function (_0x59d472) {
        var _0x20b158 = _0x3568e2;
        !String[_0x20b158(0x23b)](_0x59d472) && (_0x59d472 = null), BattleManager[_0x20b158(0x1ed)](_0x59d472);
    }, _0x1aee53[_0x3568e2(0x226)] = function () {
        var _0x2904d6 = _0x3568e2;
        _0x2904d6(0x243) !== _0x2904d6(0x1f5) ? ($gameTemp[_0x2904d6(0x227)] = ![], this[_0x2904d6(0x22c)] = 0x0, this[_0x2904d6(0x20e)]()) : _0x2be72f = null;
    }, (function () {
        var _0x1a5329 = _0x3568e2;
        return _0x1aee53[_0x1a5329(0x238)] = function () {
            var _0x45127c = _0x1a5329;
            return this[_0x45127c(0x253)] != null;
        }, _0x1aee53[_0x1a5329(0x224)] = function () {
            var _0x4a4714 = _0x1a5329;
            if (this[_0x4a4714(0x210)]() && $gameTemp[_0x4a4714(0x230)] === !![])
                return '\x68\x44\x76\x50\x62' !== _0x4a4714(0x246) ? !![] : _0x1b0e31[_0x4a4714(0x203)][_0x4a4714(0x23c)](this);
            else {
                if (!this[_0x4a4714(0x238)]()) {
                    if (_0x4a4714(0x1fa) === '\x6f\x5a\x70\x73\x7a')
                        _0x82c165 = _0x34bd4b[_0x5cd4d7], _0x429081(_0x37df60);
                    else
                        return !![];
                }
                if (this[_0x4a4714(0x217)]()) {
                    if (_0x4a4714(0x23a) === _0x4a4714(0x23a)) {
                        if (ANET[_0x4a4714(0x24e)][_0x4a4714(0x1f3)](this[_0x4a4714(0x1f9)]())) {
                            if (_0x4a4714(0x24f) === '\x50\x79\x51\x79\x6f')
                                _0x212493 = _0x8d3034, _0x499735['\x77'](_0x41d3b1);
                            else
                                return ![];
                        }
                    } else
                        return !![];
                }
                return ANET['\x55\x74\x69\x6c\x73']['\x69\x73\x50\x61\x73\x73\x45\x76\x65\x6e\x74\x46\x69\x6c\x74\x65\x72\x4f\x70\x74\x69\x6f\x6e\x73'](this[_0x4a4714(0x253)]);
            }
        }, _0x1aee53[_0x1a5329(0x217)] = function () {
            var _0x13c591 = _0x1a5329, _0xdd0cb5;
            return this[_0x13c591(0x1f9)]() > 0x0 && ((_0xdd0cb5 = this['\x6e\x53\x74\x61\x72\x74\x4f\x70\x74\x69\x6f\x6e\x73']) != null ? _0xdd0cb5[_0x13c591(0x1f0)] : void 0x0) === _0x13c591(0x1fd);
        }, _0x1aee53[_0x1a5329(0x24a)] = function () {
            var _0x44b716 = _0x1a5329;
            if (_0x44b716(0x254) !== _0x44b716(0x254))
                return this[_0x44b716(0x1ec)](), this[_0x44b716(0x239)]();
            else {
                var _0x9c2ce, _0x467863, _0x45599c;
                this[_0x44b716(0x253)] = null;
                try {
                    _0x467863 = (_0x45599c = this['\x5f\x6c\x69\x73\x74']) != null ? _0x45599c[_0x44b716(0x209)](function (_0x40a17a) {
                        var _0x42809d = _0x44b716, _0x3ac2df;
                        return _0x40a17a['\x63\x6f\x64\x65'] === 0x165 && ((_0x3ac2df = _0x40a17a[_0x42809d(0x1ee)]) != null ? _0x3ac2df[0x1] : void 0x0) === _0x42809d(0x22a);
                    }) : void 0x0;
                    if (_0x467863 != null) {
                        if ('\x4b\x49\x71\x6a\x72' !== _0x44b716(0x202))
                            return _0x5b3e32['\x41\x4c\x49\x41\x53\x5f\x5f\x65\x78\x65\x63\x75\x74\x65\x43\x6f\x6d\x6d\x61\x6e\x64'][_0x44b716(0x23c)](this);
                        else
                            this['\x6e\x53\x74\x61\x72\x74\x4f\x70\x74\x69\x6f\x6e\x73'] = _0x467863[_0x44b716(0x1ee)][0x3];
                    } else
                        this[_0x44b716(0x248)]();
                } catch (_0x24160e) {
                    if (_0x44b716(0x200) !== _0x44b716(0x200))
                        return _0x55b2e6[_0x44b716(0x201)]() === _0x24dbd3 ? _0x45cab9[_0x44b716(0x203)]['\x63\x61\x6c\x6c'](this) : (this[_0x44b716(0x1ec)](), this['\x5f\x6e\x53\x6b\x69\x70\x43\x6f\x6d\x6d\x61\x6e\x64']());
                    else
                        _0x9c2ce = _0x24160e, ANET['\x77'](_0x9c2ce), this[_0x44b716(0x253)] = null;
                }
            }
        }, _0x1aee53['\x6e\x49\x73\x41\x75\x74\x6f\x72\x75\x6e\x45\x76\x65\x6e\x74'] = function () {
            var _0x3c2ab1 = _0x1a5329;
            if ('\x4c\x45\x56\x4e\x50' !== _0x3c2ab1(0x251))
                return this['\x5f\x6e\x43\x6f\x6d\x6d\x61\x6e\x64\x4f\x70\x74\x69\x6f\x6e\x73\x52\x65\x71\x75\x65\x73\x74\x65\x64'] === !![] && this[_0x3c2ab1(0x1fe)] != null;
            else {
                var _0x35d700, _0x213e56;
                try {
                    if ('\x6d\x61\x79\x68\x7a' === _0x3c2ab1(0x23f))
                        return _0x213e56 = $gameMap[_0x3c2ab1(0x249)](this[_0x3c2ab1(0x1f9)]()), (_0x213e56 != null ? _0x213e56['\x5f\x74\x72\x69\x67\x67\x65\x72'] : void 0x0) === 0x3;
                    else
                        _0x436b8e[_0x3c2ab1(0x24b)]('\x4e\x20\x63\x68\x6f\x69\x63\x65\x73\x46\x6f\x72\x4d\x61\x73\x74\x65\x72\x20\x63\x61\x6e\x20\x62\x65\x20\x75\x73\x65\x64\x20\x6f\x6e\x6c\x79\x20\x69\x6e\x20\x53\x68\x61\x72\x65\x64\x20\x45\x76\x65\x6e\x74\x73');
                } catch (_0x17fbbe) {
                    _0x35d700 = _0x17fbbe, ANET['\x77'](_0x35d700);
                }
                return !![];
            }
        };
    }());
}()));
function _0xd5d0() {
    var _0x2e63b6 = [
        '\x59\x6c\x4e\x67\x56',
        '\x6e\x53\x65\x74\x53\x68\x61\x72\x65\x64\x42\x61\x74\x74\x6c\x65',
        '\x6e\x43\x68\x65\x63\x6b\x45\x76\x65\x6e\x74\x53\x74\x61\x72\x74\x4f\x70\x74\x69\x6f\x6e\x73\x46\x72\x6f\x6d\x43\x6f\x6d\x6d\x65\x6e\x74\x43\x6f\x6d\x6d\x61\x6e\x64',
        '\x65\x76\x65\x6e\x74',
        '\x6e\x43\x68\x65\x63\x6b\x45\x76\x65\x6e\x74\x53\x74\x61\x72\x74\x4f\x70\x74\x69\x6f\x6e\x73',
        '\x77\x61\x72\x6e',
        '\x6e\x52\x65\x71\x75\x65\x73\x74\x4d\x61\x73\x74\x65\x72\x4f\x6e\x6c\x79\x43\x68\x6f\x69\x63\x65\x73\x4d\x6f\x64\x65\x46\x6f\x72\x4e\x65\x78\x74\x43\x68\x6f\x69\x63\x65',
        '\x4d\x61\x73\x74\x65\x72\x20\x45\x78\x63\x65\x70\x74',
        '\x55\x74\x69\x6c\x73',
        '\x72\x58\x4f\x6e\x75',
        '\x5f\x6e\x43\x6f\x6d\x6d\x61\x6e\x64\x4f\x70\x74\x69\x6f\x6e\x73\x52\x65\x71\x75\x65\x73\x74\x65\x64',
        '\x4c\x45\x56\x4e\x50',
        '\x66\x6f\x72\x41\x63\x74\x6f\x72\x73',
        '\x6e\x53\x74\x61\x72\x74\x4f\x70\x74\x69\x6f\x6e\x73',
        '\x69\x73\x4e\x56\x78',
        '\x63\x6f\x6e\x74\x61\x69\x6e\x73',
        '\x67\x78\x69\x71\x76',
        '\x55\x66\x72\x49\x4c',
        '\x45\x79\x4d\x4d\x54',
        '\x5f\x6e\x53\x65\x6e\x64\x43\x6f\x6d\x6d\x61\x6e\x64\x54\x6f\x53\x65\x72\x76\x65\x72',
        '\x6e\x53\x65\x74\x4e\x65\x74\x77\x6f\x72\x6b\x42\x61\x74\x74\x6c\x65',
        '\x70\x61\x72\x61\x6d\x65\x74\x65\x72\x73',
        '\x6d\x61\x73\x74\x65\x72',
        '\x6c\x6f\x63\x6b\x4d\x6f\x64\x65',
        '\x34\x31\x36\x30\x33\x31\x32\x52\x4a\x73\x63\x6e\x79',
        '\x72\x6f\x68\x53\x4f',
        '\x69\x73\x45\x76\x65\x6e\x74\x53\x74\x61\x72\x74\x65\x64\x42\x79\x41\x6e\x79',
        '\x61\x6c\x6c',
        '\x68\x74\x6f\x50\x68',
        '\x21\x6d\x61\x73\x74\x65\x72',
        '\x37\x35\x32\x30\x38\x37\x6b\x58\x6a\x6c\x79\x73',
        '\x4a\x46\x54\x6f\x46',
        '\x65\x76\x65\x6e\x74\x49\x64',
        '\x4a\x7a\x5a\x63\x52',
        '\x5f\x6e\x4f\x6e\x4e\x65\x74\x43\x6f\x6d\x6d\x61\x6e\x64\x5f\x4c\x6f\x63\x61\x6c\x41\x63\x74\x6f\x72',
        '\x5f\x6e\x50\x72\x6f\x63\x65\x73\x73\x43\x6f\x6d\x6d\x61\x6e\x64\x46\x6f\x72\x4d\x61\x73\x74\x65\x72',
        '\x74\x72\x75\x65',
        '\x6e\x43\x6f\x6d\x6d\x61\x6e\x64\x53\x74\x61\x72\x74\x4f\x70\x74\x69\x6f\x6e\x73',
        '\x41\x6d\x72\x79\x50',
        '\x4a\x4e\x47\x67\x6d',
        '\x69\x73\x4d\x61\x73\x74\x65\x72\x43\x6c\x69\x65\x6e\x74',
        '\x4b\x49\x71\x6a\x72',
        '\x41\x4c\x49\x41\x53\x5f\x5f\x65\x78\x65\x63\x75\x74\x65\x43\x6f\x6d\x6d\x61\x6e\x64',
        '\x70\x70\x6f\x56\x51',
        '\x69\x73\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74\x49\x73\x52\x75\x6e\x6e\x69\x6e\x67',
        '\x33\x35\x39\x35\x38\x30\x34\x65\x4d\x5a\x52\x42\x55',
        '\x6f\x6b\x53\x4c\x51',
        '\x70\x6c\x45\x44\x68',
        '\x66\x69\x6e\x64',
        '\x5f\x6e\x4f\x6e\x4e\x65\x74\x43\x6f\x6d\x6d\x61\x6e\x64\x5f\x41\x63\x74\x6f\x72\x4c\x69\x73\x74\x53\x65\x6c\x65\x63\x74\x6f\x72\x45\x76\x65\x6e\x74\x43\x6f\x6d\x6d\x61\x6e\x64',
        '\x6c\x6f\x63\x61\x6c\x41\x63\x74\x6f\x72',
        '\x6e\x52\x65\x71\x75\x65\x73\x74\x53\x79\x6e\x63\x65\x64\x4e\x65\x78\x74\x45\x76\x65\x6e\x74\x43\x6f\x6d\x6d\x61\x6e\x64',
        '\x70\x72\x6f\x74\x6f\x74\x79\x70\x65',
        '\x6e\x43\x6c\x65\x61\x72\x43\x6f\x6d\x6d\x61\x6e\x64\x4f\x70\x74\x69\x6f\x6e\x73',
        '\x78\x67\x51\x73\x6c',
        '\x6e\x49\x73\x45\x76\x65\x6e\x74\x49\x73\x53\x68\x61\x72\x65\x64',
        '\x6b\x6b\x56\x50\x6a',
        '\x4e\x20\x63\x68\x6f\x69\x63\x65\x73\x46\x6f\x72\x4d\x61\x73\x74\x65\x72\x20\x63\x61\x6e\x20\x62\x65\x20\x75\x73\x65\x64\x20\x6f\x6e\x6c\x79\x20\x69\x6e\x20\x53\x68\x61\x72\x65\x64\x20\x45\x76\x65\x6e\x74\x73',
        '\x63\x68\x6f\x69\x63\x65\x73\x46\x6f\x72\x4d\x61\x73\x74\x65\x72',
        '\x35\x39\x34\x30\x57\x6c\x43\x6b\x6b\x59',
        '\x31\x34\x36\x35\x35\x35\x30\x6e\x65\x79\x77\x6c\x62',
        '\x73\x74\x61\x72\x74',
        '\x6e\x49\x73\x4c\x6f\x63\x6b\x65\x64\x45\x76\x65\x6e\x74',
        '\x6e\x44\x69\x73\x61\x62\x6c\x65\x4e\x6f\x74\x4e\x65\x74\x43\x6f\x6d\x6d\x61\x6e\x64\x73',
        '\x4d\x61\x73\x74\x65\x72',
        '\x77\x75\x49\x74\x48',
        '\x79\x55\x5a\x61\x4e',
        '\x6c\x65\x6e\x67\x74\x68',
        '\x46\x6f\x72\x62\x69\x64\x64\x65\x6e\x56\x69\x72\x74\x75\x61\x6c\x43\x6f\x6d\x6d\x61\x6e\x64\x73\x4c\x69\x73\x74',
        '\x5f\x6e\x4f\x6e\x4e\x65\x74\x43\x6f\x6d\x6d\x61\x6e\x64\x5f\x53\x69\x6e\x67\x6c\x65\x53\x65\x6c\x65\x63\x74\x6f\x72\x45\x76\x65\x6e\x74\x43\x6f\x6d\x6d\x61\x6e\x64',
        '\x73\x73\x63\x58\x44',
        '\x6e\x49\x73\x48\x61\x76\x65\x43\x6f\x6d\x6d\x61\x6e\x64\x4f\x70\x74\x69\x6f\x6e\x73',
        '\x6a\x5a\x6f\x5a\x75',
        '\x5f\x6e\x50\x72\x6f\x63\x65\x73\x73\x43\x6f\x6d\x6d\x61\x6e\x64\x46\x6f\x72\x41\x63\x74\x6f\x72\x73\x4c\x69\x73\x74',
        '\x33\x30\x6c\x55\x6b\x68\x54\x4b',
        '\x69\x73\x50\x61\x73\x73\x53\x74\x61\x72\x74\x4f\x70\x74\x69\x6f\x6e\x73',
        '\x77\x61\x69\x74',
        '\x6e\x43\x6c\x65\x61\x72\x46\x6c\x61\x67\x73',
        '\x5f\x6e\x4c\x6f\x63\x61\x6c\x41\x63\x74\x6f\x72\x4d\x6f\x64\x65',
        '\x41\x63\x74\x6f\x72\x20\x4c\x69\x73\x74',
        '\x6d\x4b\x48\x75\x55',
        '\x45\x76\x65\x6e\x74\x53\x74\x61\x72\x74\x4f\x70\x74\x69\x6f\x6e\x73',
        '\x34\x37\x34\x36\x34\x68\x62\x6c\x5a\x50\x68',
        '\x5f\x6e\x52\x75\x6e\x6e\x69\x6e\x67\x43\x68\x65\x63\x6b\x54\x69\x6d\x65\x72',
        '\x21\x66\x6f\x72\x41\x63\x74\x6f\x72\x73',
        '\x5f\x6e\x50\x72\x6f\x63\x65\x73\x73\x43\x6f\x6d\x6d\x61\x6e\x64\x46\x6f\x72\x41\x6c\x6c',
        '\x31\x30\x33\x35\x35\x38\x32\x6e\x46\x6f\x5a\x79\x4a',
        '\x5f\x6e\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74\x4f\x75\x74\x65\x72\x53\x74\x61\x72\x74\x46\x6c\x61\x67',
        '\x41\x63\x74\x6f\x72\x20\x4c\x69\x73\x74\x20\x45\x78\x63\x65\x70\x74',
        '\x61\x63\x74\x6f\x72\x4c\x69\x73\x74',
        '\x49\x43\x56\x66\x76',
        '\x53\x79\x73\x74\x65\x6d',
        '\x68\x79\x4e\x6c\x45',
        '\x5f\x6e\x50\x72\x6f\x63\x65\x73\x73\x43\x6f\x6d\x6d\x61\x6e\x64\x4e\x6f\x74\x4d\x65',
        '\x63\x6f\x6d\x6d\x61\x6e\x64',
        '\x69\x73\x48\x61\x76\x65\x4e\x65\x74\x77\x6f\x72\x6b\x53\x74\x61\x72\x74\x4f\x70\x74\x69\x6f\x6e\x73',
        '\x5f\x6e\x53\x6b\x69\x70\x43\x6f\x6d\x6d\x61\x6e\x64',
        '\x52\x57\x56\x47\x6c',
        '\x61\x6e\x79',
        '\x63\x61\x6c\x6c',
        '\x33\x56\x4d\x55\x66\x69\x6b',
        '\x69\x73\x4d\x79\x41\x63\x74\x6f\x72\x49\x6e\x56\x61\x6c\x69\x64\x4c\x69\x73\x74\x54\x6f\x53\x74\x61\x72\x74',
        '\x6d\x61\x79\x68\x7a',
        '\x59\x54\x50\x49\x68',
        '\x41\x6c\x6c',
        '\x63\x75\x72\x72\x65\x6e\x74\x43\x6f\x6d\x6d\x61\x6e\x64',
        '\x73\x47\x41\x42\x51',
        '\x6e\x53\x65\x74\x43\x6f\x6d\x6d\x61\x6e\x64\x4f\x70\x74\x69\x6f\x6e\x73',
        '\x55\x6e\x6b\x6e\x6f\x77\x6e\x20\x4e\x45\x54\x20\x43\x6f\x6d\x6d\x65\x6e\x74\x20\x63\x6f\x6d\x6d\x61\x6e\x64\x20'
    ];
    _0xd5d0 = function () {
        return _0x2e63b6;
    };
    return _0xd5d0();
}

// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Interpreter.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  // * Обработка комманд из комментариев (алтернатива командам плагинов)

  //@[DEFINES]
  _ = Game_Interpreter.prototype;
  //input: "N localActor" | "N localActor end"
  _._nOnNetCommand_LocalActor = function(commentLine) {
    if (commentLine.contains("end")) {
      $gameTemp._nLocalActorMode = false;
    } else {
      $gameTemp._nLocalActorMode = true;
    }
  };
  
  //input: "N (selector)" | "N (selector) [scope]" | "N (selector) [scope] [mode]"
  //selcetor: all, !me, master, !master
  //scope: world, mode: virtual
  _._nOnNetCommand_SingleSelectorEventCommand = function(selector, commentLine) {
    var mode, scope;
    ({scope, mode} = ANET.Utils.convertEventCommandScopeAndMode(commentLine));
    this._nSetAnyEventCommandOptions(selector, "[]", scope, mode);
  };
  // * Установить опции команды события для следующей комманды
  _._nSetAnyEventCommandOptions = function(selector, list, scope, mode) {
    var options;
    if (!String.any(scope)) {
      // * Стандартные значения из команды плагина
      scope = "Same map";
    }
    if (!String.any(mode)) {
      mode = "Auto";
    }
    options = ANET.Utils.buildEventCommandOptions(selector, list, scope, mode);
    this.nSetCommandOptions(options);
  };
  _._nOnNetCommand_ActorListSelectorEventCommand = function(commentLine, isInclude) {
    var list, mode, scope, selector;
    ({scope, mode} = ANET.Utils.convertEventCommandScopeAndMode(commentLine));
    list = ANET.Utils.extractActorsListFromComment(commentLine);
    selector = "Actor List";
    if (!isInclude) {
      selector += " Except";
    }
    this._nSetAnyEventCommandOptions(selector, list, scope, mode);
  };
  // * Есть ли опции (условия) запуска события для сети (проверка команды - комментария)
  _.nCheckEventStartOptionsFromCommentCommand = function() {
    var commentLine;
    if (this._list == null) {
      return;
    }
    commentLine = KDCore.Utils.getEventCommentValue("N start", this._list);
    if (commentLine == null) {
      return;
    }
    this.nStartOptions = ANET.Utils.parseEventStartOptionsFromCommentLine(commentLine);
  };
})();

// ■ END Game_Interpreter.coffee
//---------------------------------------------------------------------------


function _0x5b87(_0x17a3ec, _0x33b083) {
    var _0x24365e = _0x2436();
    return _0x5b87 = function (_0x5b8701, _0xa42772) {
        _0x5b8701 = _0x5b8701 - 0xe3;
        var _0x5323b1 = _0x24365e[_0x5b8701];
        return _0x5323b1;
    }, _0x5b87(_0x17a3ec, _0x33b083);
}
(function (_0x51f820, _0x154922) {
    var _0xaf770f = _0x5b87, _0x65e253 = _0x51f820();
    while (!![]) {
        try {
            var _0xad66dd = -parseInt(_0xaf770f(0xea)) / 0x1 + -parseInt(_0xaf770f(0x10a)) / 0x2 + parseInt(_0xaf770f(0xfa)) / 0x3 * (parseInt(_0xaf770f(0x118)) / 0x4) + parseInt(_0xaf770f(0x102)) / 0x5 * (parseInt(_0xaf770f(0x109)) / 0x6) + parseInt(_0xaf770f(0xfd)) / 0x7 * (-parseInt(_0xaf770f(0xee)) / 0x8) + -parseInt(_0xaf770f(0xe7)) / 0x9 * (parseInt(_0xaf770f(0xed)) / 0xa) + parseInt(_0xaf770f(0x125)) / 0xb;
            if (_0xad66dd === _0x154922)
                break;
            else
                _0x65e253['push'](_0x65e253['shift']());
        } catch (_0xbcff5) {
            _0x65e253['push'](_0x65e253['shift']());
        }
    }
}(_0x2436, 0x47487), (function () {
    var _0xaa766e = _0x5b87, _0x264aa3;
    _0x264aa3 = Game_Interpreter[_0xaa766e(0x132)], _0x264aa3[_0xaa766e(0x13f)] = function () {
        var _0x4f8d41 = _0xaa766e;
        if ('\x71\x78\x55\x66\x55' === _0x4f8d41(0x12d)) {
            var _0x463137;
            try {
                if (_0x4f8d41(0x136) !== '\x73\x55\x74\x6c\x65')
                    return this[_0x4f8d41(0x108)]() && this[_0x4f8d41(0x124)]['\x73\x68\x61\x72\x65\x64\x4d\x6f\x64\x65'] !== '\x4e\x6f';
                else {
                    var _0x5496b6;
                    try {
                        return this[_0x4f8d41(0x108)]() && this[_0x4f8d41(0x124)][_0x4f8d41(0xf0)] !== '\x4e\x6f';
                    } catch (_0x145710) {
                        return _0x5496b6 = _0x145710, _0x35b706['\x77'](_0x5496b6), ![];
                    }
                }
            } catch (_0x477fb0) {
                return _0x463137 = _0x477fb0, ANET['\x77'](_0x463137), ![];
            }
        } else
            _0x5c3adb = _0xad6da9, _0x229ab7['\x77'](_0x113a0f);
    }, _0x264aa3[_0xaa766e(0x11b)] = function () {
        var _0xac2df4 = _0xaa766e;
        if (_0xac2df4(0x110) === _0xac2df4(0xe8))
            this['\x6e\x53\x65\x74\x57\x61\x69\x74\x53\x74\x61\x72\x74\x4e\x65\x78\x74\x43\x6f\x6d\x6d\x61\x6e\x64\x46\x72\x6f\x6d\x53\x65\x72\x76\x65\x72']();
        else {
            var _0x261910, _0x42c79e;
            try {
                if ('\x79\x41\x6f\x65\x66' !== _0xac2df4(0x101))
                    _0x2fa36e[_0xac2df4(0xe6)](), _0xac2df4(0x107)['\x70'](this[_0xac2df4(0x130)]), _0x480707[_0xac2df4(0xf4)] == null ? (this['\x6e\x50\x6c\x61\x79\x65\x72\x50\x6f\x6f\x6c'] = null, _0x36757a[_0xac2df4(0xe5)](this, !![]), this['\x6e\x52\x65\x71\x75\x65\x73\x74\x53\x79\x6e\x63\x65\x64\x4e\x65\x78\x74\x45\x76\x65\x6e\x74\x43\x6f\x6d\x6d\x61\x6e\x64']()) : (_0xac2df4(0x11e)['\x70'](), _0x14cd93[_0xac2df4(0xf4)] = null, _0x2e70ec[_0xac2df4(0xe5)](this, ![]), this[_0xac2df4(0xe9)]());
                else
                    return this['\x6e\x49\x73\x45\x76\x65\x6e\x74\x49\x73\x53\x68\x61\x72\x65\x64']() && ((_0x42c79e = this[_0xac2df4(0x124)][_0xac2df4(0xf0)]) != null ? _0x42c79e['\x63\x6f\x6e\x74\x61\x69\x6e\x73'](_0xac2df4(0x135)) : void 0x0);
            } catch (_0x1c852e) {
                if ('\x6d\x42\x71\x42\x44' !== _0xac2df4(0x129))
                    this[_0xac2df4(0x10c)]--, this[_0xac2df4(0x10c)] === 0x0 && this[_0xac2df4(0x13e)]();
                else
                    return _0x261910 = _0x1c852e, ANET['\x77'](_0x261910), ![];
            }
        }
    }, _0x264aa3[_0xaa766e(0xef)] = function () {
        var _0x580e97 = _0xaa766e;
        if (_0x580e97(0x113) !== _0x580e97(0x113)) {
            var _0x4a4ac0;
            this['\x6e\x50\x6c\x61\x79\x65\x72\x50\x6f\x6f\x6c'][_0x580e97(0x114)]();
            if (this[_0x580e97(0x12e)]())
                return _0x580e97(0x133)['\x70'](), !![];
            return _0x4a4ac0 = !this[_0x580e97(0x134)][_0x580e97(0x103)](), !_0x4a4ac0 && ('\x53\x54\x4f\x50\x20\x57\x41\x49\x54\x49\x4e\x47\x20\x50\x4c\x41\x59\x45\x52\x53\x20\x3a\x20\x49\x53\x20\x52\x45\x41\x44\x59'['\x70'](), _0x12d2e7['\x73\x65\x6e\x64\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74\x52\x65\x61\x64\x79\x54\x6f\x43\x6f\x6e\x74\x69\x6e\x75\x65'](), _0x26cca1[_0x580e97(0xf1)](), this[_0x580e97(0xf3)](), this[_0x580e97(0x11f)] = ''), _0x4a4ac0;
        } else
            return !this[_0x580e97(0x11b)]() && this[_0x580e97(0xf2)][_0x580e97(0x10e)] === 0x0;
    }, _0x264aa3[_0xaa766e(0x10b)] = function () {
        var _0x34ce6e = _0xaa766e;
        ANInterpreterManager[_0x34ce6e(0xe6)](), _0x34ce6e(0x107)['\x70'](this['\x5f\x65\x76\x65\x6e\x74\x49\x64']), $gameTemp[_0x34ce6e(0xf4)] == null ? (this[_0x34ce6e(0x134)] = null, ANInterpreterManager[_0x34ce6e(0xe5)](this, !![]), this[_0x34ce6e(0xe9)]()) : (_0x34ce6e(0x11e)['\x70'](), $gameTemp[_0x34ce6e(0xf4)] = null, ANInterpreterManager['\x73\x65\x74\x75\x70\x53\x68\x61\x72\x65\x64\x49\x6e\x74\x65\x72\x70\x72\x65\x74\x65\x72'](this, ![]), this[_0x34ce6e(0xe9)]());
    }, _0x264aa3['\x6e\x49\x73\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74\x57\x61\x69\x74\x50\x6f\x6f\x6c\x43\x61\x6e\x63\x65\x6c\x6c\x65\x64'] = function () {
        var _0x218020 = _0xaa766e;
        if ('\x4a\x4b\x51\x46\x62' === _0x218020(0x119)) {
            var _0x19149c;
            try {
                if (!this[_0x218020(0xef)]()) {
                    if ('\x65\x53\x6a\x53\x72' !== '\x65\x53\x6a\x53\x72')
                        return this[_0x218020(0x108)]() && this[_0x218020(0x124)][_0x218020(0xf0)] !== '\x4e\x6f';
                    else
                        return;
                }
                if (Input[_0x218020(0xfb)]())
                    return Input[_0x218020(0x126)](), ANInterpreterManager['\x66\x6f\x72\x63\x65\x43\x61\x6e\x63\x65\x6c\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74'](), this[_0x218020(0xe4)](), !![];
            } catch (_0x43da53) {
                if ('\x47\x6b\x41\x47\x48' !== '\x47\x6b\x41\x47\x48')
                    return;
                else
                    _0x19149c = _0x43da53, ANET['\x77'](_0x19149c);
            }
            return ![];
        } else
            return this[_0x218020(0x13f)]() && ((_0x791271 = this[_0x218020(0x124)]['\x73\x68\x61\x72\x65\x64\x4d\x6f\x64\x65']) != null ? _0x4df039[_0x218020(0x12a)](_0x218020(0x135)) : void 0x0);
    }, _0x264aa3[_0xaa766e(0xe9)] = function () {
        var _0x14c321 = _0xaa766e;
        if ('\x4e\x52\x50\x65\x51' !== _0x14c321(0x11d))
            return this[_0x14c321(0xe4)](), !![];
        else
            this[_0x14c321(0xf2)] = {
                '\x69\x6e\x64\x65\x78': this['\x5f\x69\x6e\x64\x65\x78'],
                '\x69\x6e\x64\x65\x6e\x74': this[_0x14c321(0x12f)]
            }, ANInterpreterManager[_0x14c321(0xf6)]() ? '\x42\x6c\x6b\x77\x4a' === _0x14c321(0x120) ? this['\x6e\x53\x79\x6e\x63\x57\x61\x69\x74\x43\x6f\x6d\x6d\x61\x6e\x64\x44\x61\x74\x61'] = null : this['\x6e\x53\x65\x74\x57\x61\x69\x74\x50\x6c\x61\x79\x65\x72\x50\x6f\x6f\x6c']() : '\x68\x5a\x67\x61\x64' === _0x14c321(0x10f) ? (_0x14c321(0xfe)['\x70'](), _0x2e5a33['\x73\x65\x6e\x64\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74\x52\x65\x61\x64\x79\x54\x6f\x43\x6f\x6e\x74\x69\x6e\x75\x65'](), _0x539a16[_0x14c321(0xf1)](), this[_0x14c321(0xf3)](), this['\x5f\x77\x61\x69\x74\x4d\x6f\x64\x65'] = '') : this[_0x14c321(0x13e)](), ANInterpreterManager['\x73\x68\x6f\x77\x57\x61\x69\x74\x50\x6c\x61\x79\x65\x72\x73\x4f\x6e\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74']();
    }, _0x264aa3[_0xaa766e(0x128)] = function (_0x35024b, _0xfbe1b7, _0x5cc738) {
        var _0x26c2dc = _0xaa766e, _0x91d7b5;
        try {
            if ('\x59\x4f\x56\x63\x61' !== _0x26c2dc(0x111))
                return;
            else {
                if (this[_0x26c2dc(0xf2)] == null) {
                    if (_0x26c2dc(0x104) === _0x26c2dc(0x104))
                        return;
                    else
                        return _0x26c2dc(0xff)['\x70'](_0x2d4439), this[_0x26c2dc(0x134)][_0x26c2dc(0xfc)](_0x334f95);
                }
                if (this[_0x26c2dc(0x134)] == null)
                    return;
                if (this['\x6e\x53\x79\x6e\x63\x57\x61\x69\x74\x43\x6f\x6d\x6d\x61\x6e\x64\x44\x61\x74\x61'][_0x26c2dc(0x10e)] === _0x35024b && this[_0x26c2dc(0xf2)][_0x26c2dc(0x117)] === _0xfbe1b7)
                    return '\x50\x4c\x41\x59\x45\x52\x20\x41\x4e\x53\x57\x45\x52\x20'['\x70'](_0x5cc738), this[_0x26c2dc(0x134)][_0x26c2dc(0xfc)](_0x5cc738);
            }
        } catch (_0x36f536) {
            _0x26c2dc(0x127) !== '\x47\x74\x78\x75\x41' ? (this['\x6e\x50\x6c\x61\x79\x65\x72\x50\x6f\x6f\x6c'] = null, _0x45bffb['\x73\x65\x74\x75\x70\x53\x68\x61\x72\x65\x64\x49\x6e\x74\x65\x72\x70\x72\x65\x74\x65\x72'](this, !![]), this[_0x26c2dc(0xe9)]()) : (_0x91d7b5 = _0x36f536, ANET['\x77'](_0x91d7b5));
        }
    }, _0x264aa3[_0xaa766e(0x123)] = function () {
        var _0x11e3ca = _0xaa766e;
        _0x11e3ca(0x105)['\x70'](), this[_0x11e3ca(0x134)] == null ? this[_0x11e3ca(0x134)] = new PlayersWaitPool() : _0x11e3ca(0x12c) === _0x11e3ca(0x12c) ? this[_0x11e3ca(0x134)][_0x11e3ca(0xf7)]() : this[_0x11e3ca(0x134)] = new _0x46e25e(), this[_0x11e3ca(0x134)][_0x11e3ca(0x13a)](), this['\x5f\x77\x61\x69\x74\x4d\x6f\x64\x65'] = _0x11e3ca(0x13c);
    }, _0x264aa3[_0xaa766e(0xf8)] = function () {
        var _0x179180 = _0xaa766e;
        if ('\x4c\x68\x78\x47\x73' !== _0x179180(0xe3))
            return _0x20ae6b = _0x234621, _0x5d5c68['\x77'](_0x2b1ecf), ![];
        else {
            var _0x1fd01b;
            this['\x6e\x50\x6c\x61\x79\x65\x72\x50\x6f\x6f\x6c'][_0x179180(0x114)]();
            if (this[_0x179180(0x12e)]())
                return _0x179180(0xf5) === '\x48\x4c\x6f\x4f\x6c' ? ('\x53\x54\x4f\x50\x20\x57\x41\x49\x54\x49\x4e\x47\x20\x50\x4c\x41\x59\x45\x52\x53\x20\x3a\x20\x49\x53\x20\x43\x41\x4e\x43\x45\x4c\x45\x44\x21'['\x70'](), !![]) : !this[_0x179180(0x11b)]() && this['\x6e\x53\x79\x6e\x63\x57\x61\x69\x74\x43\x6f\x6d\x6d\x61\x6e\x64\x44\x61\x74\x61'][_0x179180(0x10e)] === 0x0;
            return _0x1fd01b = !this[_0x179180(0x134)][_0x179180(0x103)](), !_0x1fd01b && (_0x179180(0x106) === _0x179180(0xeb) ? (_0x179180(0x105)['\x70'](), this['\x6e\x50\x6c\x61\x79\x65\x72\x50\x6f\x6f\x6c'] == null ? this[_0x179180(0x134)] = new _0x512caf() : this[_0x179180(0x134)][_0x179180(0xf7)](), this['\x6e\x50\x6c\x61\x79\x65\x72\x50\x6f\x6f\x6c']['\x72\x65\x67\x69\x73\x74\x65\x72'](), this[_0x179180(0x11f)] = _0x179180(0x13c)) : (_0x179180(0xfe)['\x70'](), ANInterpreterManager['\x73\x65\x6e\x64\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74\x52\x65\x61\x64\x79\x54\x6f\x43\x6f\x6e\x74\x69\x6e\x75\x65'](), ANInterpreterManager[_0x179180(0xf1)](), this['\x6e\x43\x6c\x65\x61\x72\x53\x68\x61\x72\x65\x64\x53\x79\x6e\x63\x45\x76\x65\x6e\x74\x43\x6f\x6d\x6d\x61\x6e\x64\x57\x61\x69\x74'](), this[_0x179180(0x11f)] = '')), _0x1fd01b;
        }
    }, _0x264aa3[_0xaa766e(0xf3)] = function () {
        var _0x23f215 = _0xaa766e;
        if (_0x23f215(0x13d) === '\x75\x69\x66\x52\x58')
            this[_0x23f215(0xf2)] = null;
        else
            return;
    }, _0x264aa3[_0xaa766e(0x13e)] = function () {
        var _0x38c3c3 = _0xaa766e;
        this[_0x38c3c3(0x139)] = ![], ANInterpreterManager[_0x38c3c3(0x116)](), '\x57\x41\x49\x54\x20\x53\x45\x52\x56\x45\x52\x20\x46\x4f\x52\x20\x4e\x45\x58\x54\x20\x43\x4f\x4d\x4d\x41\x4e\x44'['\x70'](), this[_0x38c3c3(0x10c)] = 0x3c, this['\x5f\x77\x61\x69\x74\x4d\x6f\x64\x65'] = _0x38c3c3(0x100);
    }, _0x264aa3[_0xaa766e(0x122)] = function () {
        var _0x2ee72a = _0xaa766e, _0x4b07dc;
        if ($gameTemp['\x5f\x73\x68\x6f\x75\x6c\x64\x46\x6f\x72\x63\x65\x45\x78\x69\x74\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74'] === !![]) {
            if ('\x46\x73\x41\x6b\x55' !== _0x2ee72a(0x121)) {
                if (this[_0x2ee72a(0xf2)] == null)
                    return;
                if (this[_0x2ee72a(0x134)] == null)
                    return;
                if (this['\x6e\x53\x79\x6e\x63\x57\x61\x69\x74\x43\x6f\x6d\x6d\x61\x6e\x64\x44\x61\x74\x61'][_0x2ee72a(0x10e)] === _0x1f18d0 && this[_0x2ee72a(0xf2)][_0x2ee72a(0x117)] === _0x2cb235)
                    return '\x50\x4c\x41\x59\x45\x52\x20\x41\x4e\x53\x57\x45\x52\x20'['\x70'](_0x59d590), this['\x6e\x50\x6c\x61\x79\x65\x72\x50\x6f\x6f\x6c'][_0x2ee72a(0xfc)](_0x14d5aa);
            } else
                return this['\x74\x65\x72\x6d\x69\x6e\x61\x74\x65'](), !![];
        }
        _0x4b07dc = !this[_0x2ee72a(0x139)];
        if (!_0x4b07dc)
            _0x2ee72a(0x112)['\x70'](), this[_0x2ee72a(0x11f)] = '';
        else {
            if (this['\x5f\x6e\x52\x65\x70\x65\x61\x74\x41\x6e\x73\x77\x65\x72\x54\x6f\x53\x65\x72\x76\x65\x72\x54\x69\x6d\x65\x72'] >= 0x0) {
                this['\x5f\x6e\x52\x65\x70\x65\x61\x74\x41\x6e\x73\x77\x65\x72\x54\x6f\x53\x65\x72\x76\x65\x72\x54\x69\x6d\x65\x72']--;
                if (this[_0x2ee72a(0x10c)] === 0x0) {
                    if (_0x2ee72a(0x11c) === '\x70\x63\x77\x49\x6f') {
                        var _0x334c86, _0x3b33a1;
                        try {
                            return this[_0x2ee72a(0x13f)]() && ((_0x3b33a1 = this[_0x2ee72a(0x124)][_0x2ee72a(0xf0)]) != null ? _0x3b33a1[_0x2ee72a(0x12a)](_0x2ee72a(0x135)) : void 0x0);
                        } catch (_0x415e91) {
                            return _0x334c86 = _0x415e91, _0x5a2a48['\x77'](_0x334c86), ![];
                        }
                    } else
                        this[_0x2ee72a(0x13e)]();
                }
            }
        }
        return !![];
    }, _0x264aa3[_0xaa766e(0x11a)] = function () {
        var _0x22b104 = _0xaa766e;
        if (this[_0x22b104(0x11f)] !== '\x6e\x65\x74\x4e\x65\x78\x74\x43\x6f\x6d\x6d\x61\x6e\x64') {
            if (_0x22b104(0x138) !== _0x22b104(0x137))
                return;
            else
                this['\x5f\x6e\x52\x65\x70\x65\x61\x74\x41\x6e\x73\x77\x65\x72\x54\x6f\x53\x65\x72\x76\x65\x72\x54\x69\x6d\x65\x72'] >= 0x0 && (this[_0x22b104(0x10c)]--, this[_0x22b104(0x10c)] === 0x0 && this[_0x22b104(0x13e)]());
        }
        this[_0x22b104(0x139)] = !![], this[_0x22b104(0x10c)] = -0x1, ANInterpreterManager[_0x22b104(0xf1)]();
    }, _0x264aa3[_0xaa766e(0x131)] = function () {
        var _0x29ea94 = _0xaa766e;
        if (_0x29ea94(0xf9) === _0x29ea94(0xec))
            this[_0x29ea94(0x139)] = ![], _0x4cc791[_0x29ea94(0x116)](), _0x29ea94(0x13b)['\x70'](), this[_0x29ea94(0x10c)] = 0x3c, this[_0x29ea94(0x11f)] = '\x6e\x65\x74\x4e\x65\x78\x74\x43\x6f\x6d\x6d\x61\x6e\x64';
        else {
            if (this[_0x29ea94(0x134)] != null && this['\x6e\x50\x6c\x61\x79\x65\x72\x50\x6f\x6f\x6c'][_0x29ea94(0x12b)]())
                return;
            _0x29ea94(0x10d)['\x70'](), $gameTemp[_0x29ea94(0x115)] = !![];
        }
    };
}()));
function _0x2436() {
    var _0x809e50 = [
        '\x38\x35\x34\x34\x46\x42\x54\x4d\x72\x45',
        '\x4a\x4b\x51\x46\x62',
        '\x6e\x41\x6c\x6c\x6f\x77\x43\x6f\x6e\x74\x69\x6e\x75\x65\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74',
        '\x6e\x49\x73\x45\x76\x65\x6e\x74\x49\x73\x53\x68\x61\x72\x65\x64\x41\x6e\x64\x53\x74\x72\x69\x63\x74',
        '\x6b\x46\x62\x59\x6a',
        '\x4e\x52\x50\x65\x51',
        '\x4f\x55\x55\x54\x45\x52\x20\x53\x54\x41\x52\x54',
        '\x5f\x77\x61\x69\x74\x4d\x6f\x64\x65',
        '\x57\x54\x77\x70\x73',
        '\x46\x73\x41\x6b\x55',
        '\x6e\x55\x70\x64\x61\x74\x65\x57\x61\x69\x74\x53\x65\x72\x76\x65\x72\x4e\x65\x78\x74\x43\x6f\x6d\x6d\x61\x6e\x64\x50\x65\x72\x6d\x69\x73\x73\x69\x6f\x6e',
        '\x6e\x53\x65\x74\x57\x61\x69\x74\x50\x6c\x61\x79\x65\x72\x50\x6f\x6f\x6c',
        '\x6e\x53\x74\x61\x72\x74\x4f\x70\x74\x69\x6f\x6e\x73',
        '\x31\x36\x34\x36\x30\x32\x32\x34\x49\x77\x61\x45\x71\x4b',
        '\x63\x6c\x65\x61\x72',
        '\x47\x74\x78\x75\x41',
        '\x6e\x4f\x6e\x53\x79\x6e\x63\x65\x64\x45\x76\x65\x6e\x74\x43\x6f\x6d\x6d\x61\x6e\x64\x52\x65\x73\x70\x6f\x6e\x73\x65',
        '\x6d\x42\x71\x42\x44',
        '\x63\x6f\x6e\x74\x61\x69\x6e\x73',
        '\x69\x73\x53\x69\x6e\x67\x6c\x65\x50\x6f\x6f\x6c',
        '\x43\x6f\x4f\x67\x6c',
        '\x71\x78\x55\x66\x55',
        '\x6e\x49\x73\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74\x57\x61\x69\x74\x50\x6f\x6f\x6c\x43\x61\x6e\x63\x65\x6c\x6c\x65\x64',
        '\x5f\x69\x6e\x64\x65\x6e\x74',
        '\x5f\x65\x76\x65\x6e\x74\x49\x64',
        '\x6e\x52\x65\x71\x75\x65\x73\x74\x4d\x61\x73\x74\x65\x72\x4f\x6e\x6c\x79\x43\x68\x6f\x69\x63\x65\x73\x4d\x6f\x64\x65\x46\x6f\x72\x4e\x65\x78\x74\x43\x68\x6f\x69\x63\x65',
        '\x70\x72\x6f\x74\x6f\x74\x79\x70\x65',
        '\x53\x54\x4f\x50\x20\x57\x41\x49\x54\x49\x4e\x47\x20\x50\x4c\x41\x59\x45\x52\x53\x20\x3a\x20\x49\x53\x20\x43\x41\x4e\x43\x45\x4c\x45\x44\x21',
        '\x6e\x50\x6c\x61\x79\x65\x72\x50\x6f\x6f\x6c',
        '\x53\x74\x72\x69\x63\x74',
        '\x58\x45\x52\x43\x51',
        '\x47\x53\x54\x71\x58',
        '\x71\x72\x57\x62\x4b',
        '\x5f\x63\x61\x6e\x43\x6f\x6e\x74\x69\x6e\x75\x65\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74',
        '\x72\x65\x67\x69\x73\x74\x65\x72',
        '\x57\x41\x49\x54\x20\x53\x45\x52\x56\x45\x52\x20\x46\x4f\x52\x20\x4e\x45\x58\x54\x20\x43\x4f\x4d\x4d\x41\x4e\x44',
        '\x6e\x65\x74\x50\x6c\x61\x79\x65\x72\x73\x50\x6f\x6f\x6c',
        '\x75\x69\x66\x52\x58',
        '\x6e\x53\x65\x74\x57\x61\x69\x74\x53\x74\x61\x72\x74\x4e\x65\x78\x74\x43\x6f\x6d\x6d\x61\x6e\x64\x46\x72\x6f\x6d\x53\x65\x72\x76\x65\x72',
        '\x6e\x49\x73\x45\x76\x65\x6e\x74\x49\x73\x53\x68\x61\x72\x65\x64',
        '\x4c\x68\x78\x47\x73',
        '\x74\x65\x72\x6d\x69\x6e\x61\x74\x65',
        '\x73\x65\x74\x75\x70\x53\x68\x61\x72\x65\x64\x49\x6e\x74\x65\x72\x70\x72\x65\x74\x65\x72',
        '\x72\x65\x73\x65\x74\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74',
        '\x34\x30\x34\x32\x35\x33\x39\x4b\x49\x73\x44\x4b\x4a',
        '\x66\x56\x51\x79\x76',
        '\x6e\x52\x65\x71\x75\x65\x73\x74\x53\x79\x6e\x63\x65\x64\x4e\x65\x78\x74\x45\x76\x65\x6e\x74\x43\x6f\x6d\x6d\x61\x6e\x64',
        '\x34\x30\x38\x38\x36\x34\x4a\x46\x59\x57\x61\x67',
        '\x48\x4a\x6e\x56\x4b',
        '\x61\x6b\x6f\x61\x51',
        '\x31\x30\x64\x50\x42\x4c\x6f\x47',
        '\x38\x76\x4d\x69\x63\x4b\x4a',
        '\x6e\x49\x73\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74\x43\x61\x6e\x42\x65\x46\x6f\x72\x63\x65\x43\x61\x6e\x63\x65\x6c\x6c\x65\x64',
        '\x73\x68\x61\x72\x65\x64\x4d\x6f\x64\x65',
        '\x68\x69\x64\x65\x57\x61\x69\x74\x50\x6c\x61\x79\x65\x72\x73\x4f\x6e\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74',
        '\x6e\x53\x79\x6e\x63\x57\x61\x69\x74\x43\x6f\x6d\x6d\x61\x6e\x64\x44\x61\x74\x61',
        '\x6e\x43\x6c\x65\x61\x72\x53\x68\x61\x72\x65\x64\x53\x79\x6e\x63\x45\x76\x65\x6e\x74\x43\x6f\x6d\x6d\x61\x6e\x64\x57\x61\x69\x74',
        '\x5f\x6e\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74\x4f\x75\x74\x65\x72\x53\x74\x61\x72\x74\x46\x6c\x61\x67',
        '\x48\x4c\x6f\x4f\x6c',
        '\x69\x73\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74\x4d\x61\x73\x74\x65\x72',
        '\x72\x65\x73\x65\x74',
        '\x6e\x55\x70\x64\x61\x74\x65\x57\x61\x69\x74\x50\x6c\x61\x79\x65\x72\x73\x50\x6f\x6f\x6c',
        '\x4b\x62\x6a\x68\x42',
        '\x33\x30\x30\x6a\x41\x74\x4a\x56\x41',
        '\x69\x73\x43\x61\x6e\x63\x65\x6c',
        '\x6f\x6e\x41\x6e\x73\x77\x65\x72',
        '\x32\x39\x35\x35\x34\x34\x39\x6a\x4f\x59\x57\x75\x53',
        '\x53\x54\x4f\x50\x20\x57\x41\x49\x54\x49\x4e\x47\x20\x50\x4c\x41\x59\x45\x52\x53\x20\x3a\x20\x49\x53\x20\x52\x45\x41\x44\x59',
        '\x50\x4c\x41\x59\x45\x52\x20\x41\x4e\x53\x57\x45\x52\x20',
        '\x6e\x65\x74\x4e\x65\x78\x74\x43\x6f\x6d\x6d\x61\x6e\x64',
        '\x79\x41\x6f\x65\x66',
        '\x31\x36\x35\x73\x6b\x42\x79\x67\x58',
        '\x69\x73\x52\x65\x61\x64\x79',
        '\x4c\x68\x4d\x4e\x42',
        '\x53\x54\x41\x52\x54\x20\x50\x4f\x4f\x4c',
        '\x71\x64\x4e\x6e\x62',
        '\x50\x52\x45\x50\x41\x52\x45\x20\x53\x48\x41\x52\x45\x44\x20\x4d\x4f\x44',
        '\x69\x73\x48\x61\x76\x65\x4e\x65\x74\x77\x6f\x72\x6b\x53\x74\x61\x72\x74\x4f\x70\x74\x69\x6f\x6e\x73',
        '\x32\x31\x31\x39\x38\x4f\x63\x54\x65\x45\x61',
        '\x35\x30\x38\x37\x31\x32\x56\x52\x68\x65\x6e\x5a',
        '\x6e\x50\x72\x65\x70\x61\x72\x65\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74',
        '\x5f\x6e\x52\x65\x70\x65\x61\x74\x41\x6e\x73\x77\x65\x72\x54\x6f\x53\x65\x72\x76\x65\x72\x54\x69\x6d\x65\x72',
        '\x53\x68\x61\x72\x65\x64\x20\x45\x76\x65\x6e\x74\x20\x43\x68\x6f\x69\x63\x65\x73\x20\x69\x6e\x20\x4d\x61\x73\x74\x65\x72\x20\x6f\x6e\x6c\x79\x20\x6d\x6f\x64\x65',
        '\x69\x6e\x64\x65\x78',
        '\x4e\x4e\x4d\x53\x61',
        '\x54\x68\x4e\x50\x64',
        '\x59\x4f\x56\x63\x61',
        '\x43\x41\x4e\x20\x50\x52\x4f\x43\x45\x53\x53\x20\x54\x4f\x20\x4e\x45\x58\x54\x20\x43\x4f\x4d\x4d\x41\x4e\x44',
        '\x6d\x46\x4f\x77\x41',
        '\x75\x70\x64\x61\x74\x65',
        '\x6e\x52\x65\x71\x75\x69\x72\x65\x43\x68\x6f\x69\x63\x65\x4f\x6e\x6c\x79\x46\x6f\x72\x4d\x61\x73\x74\x65\x72',
        '\x73\x65\x6e\x64\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74\x52\x65\x67\x69\x73\x74\x65\x72\x65\x64\x44\x6f\x6e\x65',
        '\x69\x6e\x64\x65\x6e\x74'
    ];
    _0x2436 = function () {
        return _0x809e50;
    };
    return _0x2436();
}

// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Map.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__initialize, ALIAS__refresh, ALIAS__setup, ALIAS__setupStartingEvent, ALIAS__update, _;
  //@[DEFINES]
  _ = Game_Map.prototype;
  //@[ALIAS]
  ALIAS__initialize = _.initialize;
  _.initialize = function() {
    ALIAS__initialize.call(this);
    this._networkCharacters = new NETCharactersGroup();
  };
  //@[ALIAS]
  ALIAS__setup = _.setup;
  _.setup = function(mapId) {
    ALIAS__setup.call(this, mapId);
    if (ANNetwork.isConnected()) {
      // * Клиент переходит на новую карту
      ANGameManager.onNewGameMapSetup();
      this.setupNetworkCharacters();
    }
  };
  //@[ALIAS]
  ALIAS__update = _.update;
  _.update = function(sceneActive) {
    ALIAS__update.call(this, sceneActive);
    if (ANNetwork.isConnected()) {
      return this.updateNetwork();
    }
  };
  
  //@[ALIAS]
  ALIAS__refresh = _.refresh;
  _.refresh = function() {
    ALIAS__refresh.call(this);
    if (ANNetwork.isConnected()) {
      return this.refreshNetworkCharacters();
    }
  };
  //@[ALIAS]
  ALIAS__setupStartingEvent = _.setupStartingEvent;
  _.setupStartingEvent = function() {
    if (ANNetwork.isConnected()) {
      if ($gameTemp.isNetworkSharedEventReserved()) {
        return this.nSetupNetworkSharedEvent();
      }
    }
    return ALIAS__setupStartingEvent.call(this);
  };
})();

// ■ END Game_Map.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Map.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Game_Map.prototype;
  // * Безопасное обновление карты, так как может вызываться когда пришли данные игроков (на любой сцене в любой момент)
  _.nSafeRefresh = function() {
    var e;
    try {
      if (SceneManager.isBusyForNetworkData()) {
        return;
      }
      if (!KDCore.Utils.isSceneMap()) {
        return;
      }
      if (typeof $dataMap === "undefined" || $dataMap === null) {
        return;
      }
      this.refresh();
    } catch (error) {
      e = error;
      ANET.w(e);
    }
  };
  _.netCharsIsSomeoneCollided = function(x, y) {
    return this._networkCharacters.isSomeoneCollided(x, y);
  };
  _.nGetNetCharXY = function(x, y) {
    if (this.netCharsIsSomeoneCollided(x, y)) {
      return this._networkCharacters.getInPos(x, y);
    } else {
      return null;
    }
  };
  _.netChars = function() {
    return this._networkCharacters.characters();
  };
  _.networkCharacterByActorId = function(actorId) {
    return this._networkCharacters.characterByActorId(actorId);
  };
  _.networkCharacterById = function(id) {
    return this._networkCharacters.characterById(id);
  };
  // * Инициализация персонажей отображаемых на карте
  _.setupNetworkCharacters = function() {
    return this._networkCharacters.setup();
  };
  _.updateNetwork = function() {
    return this._networkCharacters.update();
  };
  _.refreshNetworkCharacters = function() {
    return this._networkCharacters.refresh();
  };
  // * Запуск общего события (которое пришло от сервера)
  _.nSetupNetworkSharedEvent = function() {
    var e, event;
    try {
      event = this.event($gameTemp.retrieveNetworkSharedEvent());
      if (event == null) {
        return false;
      }
      $gameTemp._nSharedEventOuterStartFlag = true;
      event.start();
      return true;
    } catch (error) {
      e = error;
      ANET.w(e);
    }
    return false;
  };
})();

// ■ END Game_Map.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Message.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__clear, _;
  //@[DEFINES]
  _ = Game_Message.prototype;
  //@[ALIAS]
  ALIAS__clear = _.clear;
  _.clear = function() {
    ALIAS__clear.call(this);
    if (ANNetwork.isConnected()) {
      return this.nEndCallback();
    }
  };
})();

// ■ END Game_Message.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Message.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Game_Message.prototype;
  _.nSetEndCallback = function(_nEndCallbackMethod) {
    this._nEndCallbackMethod = _nEndCallbackMethod;
  };
  _.nEndCallback = function() {
    if (this._nEndCallbackMethod != null) {
      this._nEndCallbackMethod();
      this._nEndCallbackMethod = null;
    }
  };
})();

// ■ END Game_Message.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Party.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__battleMembers, ALIAS__charactersForSavefile, ALIAS__facesForSavefile, ALIAS__leader, ALIAS__partyAbility, ALIAS__setupStartingMembers, _;
  //@[DEFINES]
  _ = Game_Party.prototype;
  //@[ALIAS]
  ALIAS__battleMembers = _.battleMembers;
  _.battleMembers = function() {
    if (ANNetwork.isConnected()) {
      return ANBattleManager.battleMembers();
    } else {
      return ALIAS__battleMembers.call(this);
    }
  };
  
  //@[ALIAS]
  ALIAS__setupStartingMembers = _.setupStartingMembers;
  _.setupStartingMembers = function() {
    if (ANNetwork.isConnected()) {
      // * Нет начальной группы
      this._actors = [];
    } else {
      ALIAS__setupStartingMembers.call(this);
    }
  };
  
  //@[ALIAS]
  ALIAS__leader = _.leader;
  _.leader = function() {
    if (ANNetwork.isConnected()) {
      return this.networkLeader();
    } else {
      return ALIAS__leader.call(this);
    }
  };
  
  //@[ALIAS]
  ALIAS__charactersForSavefile = _.charactersForSavefile;
  _.charactersForSavefile = function() {
    if (ANNetwork.isConnected()) {
      return this.members().map(function(actor) {
        return [actor.characterName(), actor.characterIndex()];
      });
    } else {
      return ALIAS__charactersForSavefile.call(this);
    }
  };
  
  //@[ALIAS]
  ALIAS__facesForSavefile = _.facesForSavefile;
  _.facesForSavefile = function() {
    if (ANNetwork.isConnected()) {
      return this.members().map(function(actor) {
        return [actor.faceName(), actor.faceIndex()];
      });
    } else {
      return ALIAS__facesForSavefile.call(this);
    }
  };
  // * На всякий слуйчай добавил try \ catch, бывает выдаёт ошибку этот метод
  //@[ALIAS]
  ALIAS__partyAbility = _.partyAbility;
  _.partyAbility = function() {
    var e;
    if (ANNetwork.isConnected()) {
      try {
        return ALIAS__partyAbility.call(this, ...arguments);
      } catch (error) {
        e = error;
        KDCore.warning(e);
        return false;
      }
    } else {
      return ALIAS__partyAbility.call(this, ...arguments);
    }
  };
})();

// ■ END Game_Party.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Party.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Game_Party.prototype;
  _.setupNetworkGame = function() {};
  // * В бою участвует только один персонаж?
  _.isOneBattler = function() {
    return this.battleMembers().length <= 1;
  };
  //TODO: как задать после выбора персонажа, чтобы каждый раз не вычислять
  _.networkLeader = function() {
    var actorId;
    actorId = ANGameManager.myPlayerData().actorId;
    return $gameActors.actor(actorId);
  };
  //TODO: Есть метод onRefreshGameParty (в ANGameManager) -> путаница может быть
  // * Этот метод вызывается когда группа была изменена (кто-то отключился)
  _.nRefreshNetworkActors = function() {
    var actor, e, i, id, len, playerForActor, ref;
    try {
      ref = this.members();
      for (i = 0, len = ref.length; i < len; i++) {
        actor = ref[i];
        id = actor.actorId();
        // * Ищем игрока для каждого Actor
        playerForActor = ANGameManager.playersData.find(function(pl) {
          return pl.actorId === id;
        });
        // * Если нету больше игрока с таким Actor, удаляем из партии
        if (playerForActor == null) {
          this.removeActor(id);
          ANGameManager.anotherPlayerLeaveGame(id);
        }
      }
    } catch (error) {
      e = error;
      return ANET.w(e);
    }
  };
})();

// ■ END Game_Party.coffee
//---------------------------------------------------------------------------
//TODO: Возможно это и на сцену битвы надо? (или там по другому работает)


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Player.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__canMove, ALIAS__getInputDirection, ALIAS__moveDiagonally, ALIAS__moveStraight, ALIAS__update, _;
  //@[DEFINES]
  _ = Game_Player.prototype;
  //@[ALIAS]
  ALIAS__getInputDirection = _.getInputDirection;
  _.getInputDirection = function() {
    var dir;
    if (ANNetwork.isConnected() && $gameTemp._netAutoFollowActorId > 0) {
      dir = ALIAS__getInputDirection.call(this);
      if (dir !== 0) {
        $gameTemp._netAutoFollowActorId = null;
      }
      return dir;
    } else {
      return ALIAS__getInputDirection.call(this);
    }
  };
  
  //@[ALIAS]
  ALIAS__canMove = _.canMove;
  _.canMove = function() {
    if (ANNetwork.isConnected()) {
      if (ANNetwork.isBusy()) {
        // * Игрок не может ходить если игра ждёт ответ от сервера
        return false;
      }
      if (ANET.UI.isPlayerMenuIsOpen()) {
        // * Игрок не может ходить, когда открыто меню другого игрока
        return false;
      }
    }
    return ALIAS__canMove.call(this, ...arguments);
  };
  //@[ALIAS]
  ALIAS__moveStraight = _.moveStraight;
  _.moveStraight = function(d) {
    if (ANNetwork.isConnected()) {
      // * Запоминаем предыдующие координаты (перед движением)
      this.___x = this.x;
      this.___y = this.y;
      // * Движение
      ALIAS__moveStraight.call(this, d);
      // * Если координаты сменились, значит персонаж
      // совершил движение, можно отправить на сервер
      if (this.___x !== this.x || this.___y !== this.y) {
        return ANPlayersManager.sendPlayerMove();
      }
    } else {
      return ALIAS__moveStraight.call(this, d);
    }
  };
  
  //@[ALIAS]
  ALIAS__moveDiagonally = _.moveDiagonally;
  _.moveDiagonally = function(horz, vert) {
    if (ANNetwork.isConnected()) {
      // * Запоминаем предыдующие координаты (перед движением)
      this.___x = this.x;
      this.___y = this.y;
      // * Движение
      ALIAS__moveDiagonally.call(this, horz, vert);
      // * Если координаты сменились, значит персонаж
      // совершил движение, можно отправить на сервер
      if (this.___x !== this.x || this.___y !== this.y) {
        ANPlayersManager.sendPlayerMove();
      }
    } else {
      ALIAS__moveDiagonally.call(this, horz, vert);
    }
  };
  //@[ALIAS]
  ALIAS__update = _.update;
  _.update = function(sceneActive) {
    ALIAS__update.call(this, sceneActive);
    if (ANNetwork.isConnected()) {
      this.updateNetwork();
      if (sceneActive === true) {
        this.nUpdatePlayerInputForNetwork();
      }
    }
  };
})();

// ■ END Game_Player.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Player.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Game_Player.prototype;
  _.dataObserverHaveChanges = function() {
    return ANSyncDataManager.sendPlayerObserver();
  };
  _.updateNetwork = function() {
    var ref;
    if ($gameParty.isEmpty()) {
      return;
    }
    // * Проверяем и обновляем DataObserver своего персонажа
    // * Тут этот ? (првоерка Null) нужна!
    return (ref = $gameParty.leader()) != null ? ref.updateDataObserver() : void 0;
  };
  _.nUpdatePlayerInputForNetwork = function() {
    this.nUpdateAutoFollowMode();
    if (ANET.PP.isGameChatAllowed()) { //TODO: DYNAMIC?
      return this.nUpdateChatInput();
    }
  };
  
  //%[I] Показывать какую-то иконку над игроком (или целью) что в режиме преследования находится
  _.nUpdateAutoFollowMode = function() {
    var actorForFollow;
    if (!($gameTemp._netAutoFollowActorId > 0)) {
      return;
    }
    if (this.isMoving() || !this.canMove()) {
      return;
    }
    actorForFollow = $gameMap.networkCharacterByActorId($gameTemp._netAutoFollowActorId);
    if (actorForFollow != null) {
      //{ x, y } = actorForFollow
      // * Тут не используется метод $gameTemp.setDestination,
      // * так как он сбрасывает follow движение
      //$gameTemp._destinationX = x
      //$gameTemp._destinationY = y
      Game_Follower.prototype.chaseCharacter.call(this, actorForFollow);
    } else {
      $gameTemp._netAutoFollowActorId = null;
    }
  };
  _.nUpdateChatInput = function() {
    var openChatButton, sayInChatButton;
    //TODO: Можно оптимизировать, в initMembers
    openChatButton = ANET.PP.getChatOpenCloseKey();
    sayInChatButton = ANET.PP.getChatSayKey();
    if (Input.isTriggered(openChatButton)) {
      if (ANET.UI.isChatOpen()) {
        // * Если кнопка открыть чат и кнопка сказать в чат одинаковые
        if (openChatButton === sayInChatButton) {
          ANET.UI.showChatInputSafe(); // * то не закрываем, а сцена ввода текста
          Input.clear(); // * иначе закрываем
        } else {
          ANET.UI.closeChat();
        }
      } else {
        ANET.UI.showChat();
      }
    } else if (Input.isTriggered(sayInChatButton)) {
      if (ANET.UI.isChatOpen()) {
        ANET.UI.showChatInputSafe();
      }
    }
  };
})();

// ■ END Game_Player.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Switches.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__onChange, ALIAS__setValue, _;
  //@[DEFINES]
  _ = Game_Switches.prototype;
  //@[ALIAS]
  ALIAS__setValue = _.setValue;
  _.setValue = function(switchId, value) {
    if (ANNetwork.isConnected()) {
      // * Вызываем страндартный метод
      ALIAS__setValue.call(this, switchId, value);
      // * Если были изменения
      if (this.__variableChangedOk === true) {
        if (this.isGlobalSwitch(switchId)) {
          ANSyncDataManager.sendGlobalSwitchChange(switchId, this.value(switchId));
        }
      }
      this.__variableChangedOk = false;
    } else {
      ALIAS__setValue.call(this, switchId, value);
    }
  };
  
  //@[ALIAS]
  ALIAS__onChange = _.onChange;
  _.onChange = function() {
    ALIAS__onChange.call(this);
    if (ANNetwork.isConnected()) {
      this.__variableChangedOk = true;
    }
  };
})();

// ■ END Game_Switches.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Switches.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Game_Switches.prototype;
  _.isGlobalSwitch = function(switchId) {
    return ANET.PP.globalSwitchesIds().contains(switchId);
  };
  _.onSwitchFromServer = function(switchId, value) {
    this._data[switchId] = value;
    return this.onChange();
  };
})();

// ■ END Game_Switches.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_System.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Game_System.prototype;
  // * Инициализация набора общих событий для команд пользователя
  _.nInitCustomCommandsCE = function() {
    if (this.nCustomCommandsCE == null) {
      return this.nCustomCommandsCE = {};
    }
  };
  // * Проверка, есть ли для кастомной команды общее событие (и запуск если есть)
  _.nCheckCustomCommandForCEStart = function(name) {
    var ceId, e;
    try {
      this.nInitCustomCommandsCE();
      ceId = this.nCustomCommandsCE[name];
      if ((ceId != null) && ceId > 0) {
        $gameTemp.reserveCommonEvent(ceId);
      }
    } catch (error) {
      e = error;
      ANET.w(e);
    }
  };
  // * Зарегестрировать вызов общего события для кастомной команды
  _.nRegisterCustomCommandCE = function(name, ceId) {
    var e;
    try {
      this.nInitCustomCommandsCE();
      this.nCustomCommandsCE[name] = ceId;
    } catch (error) {
      e = error;
      ANET.w(e);
    }
  };
})();

// ■ END Game_System.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Temp.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__initialize, ALIAS__isCommonEventReserved, ALIAS__requestAnimation, ALIAS__retrieveCommonEvent, ALIAS__setDestination, _;
  //@[DEFINES]
  _ = Game_Temp.prototype;
  //@[ALIAS]
  ALIAS__setDestination = _.setDestination;
  _.setDestination = function() {
    ALIAS__setDestination.call(this, ...arguments);
    $gameTemp._netAutoFollowActorId = null;
  };
  //@[ALIAS]
  ALIAS__initialize = _.initialize;
  _.initialize = function() {
    ALIAS__initialize.call(this);
    // * Виртуальные общие события от сервера
    this._virtualEventQueue = [];
  };
  
  //@[ALIAS]
  ALIAS__isCommonEventReserved = _.isCommonEventReserved;
  _.isCommonEventReserved = function() {
    return this.isVirtualCommonEventReserved() || ALIAS__isCommonEventReserved.call(this);
  };
  
  // * Виртуальные события в приоритете
  //@[ALIAS]
  ALIAS__retrieveCommonEvent = _.retrieveCommonEvent;
  _.retrieveCommonEvent = function() {
    if (this.isVirtualCommonEventReserved()) {
      return this._virtualEventQueue.shift();
    } else {
      return ALIAS__retrieveCommonEvent.call(this);
    }
  };
  //@[ALIAS]
  ALIAS__requestAnimation = _.requestAnimation;
  _.requestAnimation = function() {
    if (ANNetwork.isConnected()) {
      // * В бою анимацию синхронизируется (только мастер)(отправляется другим игрокам)
      if ($gameParty.inBattle() && ANGameManager.isBattleMaster()) {
        ANBattleManager.requestAnimation(...arguments);
      }
    }
    return ALIAS__requestAnimation.call(this, ...arguments);
  };
})();

// ■ END Game_Temp.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Temp.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__reservedCommonEvent, _;
  //@[DEFINES]
  _ = Game_Temp.prototype;
  if (KDCore.isMZ()) {
    return;
  }
  // * В MV нету метода retrieveCommonEvent
  //@[ALIAS]
  ALIAS__reservedCommonEvent = _.reservedCommonEvent;
  _.reservedCommonEvent = function() {
    if (this.isVirtualCommonEventReserved()) {
      return this._virtualEventQueue.shift();
    } else {
      return ALIAS__reservedCommonEvent.call(this);
    }
  };
  // * В MV нету метода requestBattleRefresh
  _.requestBattleRefresh = function() {
    if ($gameParty.inBattle()) {
      return this._needsBattleRefresh = true;
    }
  };
  _.isBattleRefreshRequested = function() {
    return this._needsBattleRefresh === true;
  };
  _.clearBattleRefreshRequest = function() {
    return this._needsBattleRefresh = false;
  };
})();

// ■ END Game_Temp.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Temp.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Game_Temp.prototype;
  (function() {    // * Virtual Common Events
    // -----------------------------------------------------------------------
    _.reserveNetworkSharedEvent = function(_reservedNetworkSharedEvent) {
      this._reservedNetworkSharedEvent = _reservedNetworkSharedEvent;
    };
    _.isNetworkSharedEventReserved = function() {
      return this._reservedNetworkSharedEvent >= 1;
    };
    // * Забираем (и сразу очищаем)
    _.retrieveNetworkSharedEvent = function() {
      var eventId;
      eventId = this._reservedNetworkSharedEvent;
      this._reservedNetworkSharedEvent = 0;
      return eventId;
    };
    _.reserveVirtualCommonEvent = function(list) {
      return this._virtualEventQueue.push(list);
    };
    _.isVirtualCommonEventReserved = function() {
      return this._virtualEventQueue.length > 0;
    };
  })();
})();

// ■ END Game_Temp.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Troop.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Game_Troop.prototype;
})();

// ■ END Game_Troop.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Unit.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Game_Unit.prototype;
  _.nUpdateBattleDataSync = function() {
    var members;
    members = this.members();
    if (members.some(function(m) {
      return m.isNeedNetPushBattleData();
    })) {
      ANSyncDataManager.sendBattleUnitsObserver(members);
      members.forEach(function(m) {
        return m.onNetBattleDataPushed();
      });
    }
  };
})();

// ■ END Game_Unit.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Variables.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__onChange, ALIAS__setValue, _;
  //@[DEFINES]
  _ = Game_Variables.prototype;
  //@[ALIAS]
  ALIAS__setValue = _.setValue;
  _.setValue = function(variableId, value) {
    if (ANNetwork.isConnected()) {
      // * Вызываем страндартный метод
      ALIAS__setValue.call(this, variableId, value);
      // * Если были изменения
      if (this.__variableChangedOk === true) {
        if (this.isGlobalVariable(variableId)) {
          ANSyncDataManager.sendGlobalVariableChange(variableId, this.value(variableId));
        }
      }
      this.__variableChangedOk = false;
    } else {
      ALIAS__setValue.call(this, variableId, value);
    }
  };
  //@[ALIAS]
  ALIAS__onChange = _.onChange;
  _.onChange = function() {
    ALIAS__onChange.call(this);
    if (ANNetwork.isConnected()) {
      return this.__variableChangedOk = true;
    }
  };
})();

// ■ END Game_Variables.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Variables.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Game_Variables.prototype;
  _.isGlobalVariable = function(varId) {
    return ANET.PP.globalVariablesIds().contains(varId);
  };
  _.getAllGlobalVariablesData = function() {
    var i, j, variables;
    variables = [];
    for (i = j = 1; j <= 8; i = ++j) {
      variables.push([i, this.value[i]]);
    }
    return variables;
  };
  _.onVariableFromServer = function(varId, value) {
    this._data[varId] = value;
    return this.onChange();
  };
})();

// ■ END Game_Variables.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ ImageManager.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = ImageManager;
  _.loadAA = function(filename) {
    return this.loadBitmap('img/Alpha/', filename);
  };
})();

// ■ END ImageManager.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1



// Generated by CoffeeScript 2.6.1
// * Глабольный набор вспомогательных функций для пользователя
var nAPI;

nAPI = function() {};

(function() {  //╒═════════════════════════════════════════════════════════════════════════╛
  // ■ IMPLEMENTATION.coffee
  //╒═════════════════════════════════════════════════════════════════════════╛
  //---------------------------------------------------------------------------
  var _;
  //@[DEFINES]
  _ = nAPI;
  // * Для вызова сцены сетевой игры
  // * (только если в Scene_Title нет пункта или используется кастомная сцена)
  //$[Внимание: могут быть проблемы в вызове из сцены карты (одиночная игра) и выходе из сцены]
  _.startNetworkGameScene = function() {
    SceneManager.push(Scene_NetworkGameMenu);
  };
  (function() {    // * NETWORK STATE
    // -----------------------------------------------------------------------
    _.isNetworkGame = function() {
      var e;
      try {
        return ANNetwork.isConnected();
      } catch (error) {
        e = error;
        KDCore.warning(e);
      }
      return false;
    };
    _.myPlayerIndex = function() {
      var e;
      try {
        if (ANNetwork.isConnected()) {
          return ANGameManager.myIndex();
        } else {
          return 0;
        }
      } catch (error) {
        e = error;
        KDCore.warning(e);
      }
      return 0;
    };
    _.myActorId = function() {
      var e;
      try {
        if (ANNetwork.isConnected()) {
          return ANGameManager.myActorId();
        } else {
          return $gameParty.leader().actorId();
        }
      } catch (error) {
        e = error;
        KDCore.warning(e);
      }
      return 0;
    };
    _.playersCount = function() {
      var e;
      try {
        return ANGameManager.playersData.length;
      } catch (error) {
        e = error;
        KDCore.warning(e);
      }
      return 0;
    };
    _.isMasterClient = function() {
      var e;
      try {
        return _.isNetworkGame() && ANNetwork.isMasterClient();
      } catch (error) {
        e = error;
        KDCore.warning(e);
      }
      return false;
    };
    // * Возвращает набор данных исходя из what (см. ANGameManager.getPlayerInfo)
    _.getPlayerInfo = function(what, byWhat, value) {
      var e;
      try {
        return ANGameManager.getPlayerInfo(what, byWhat, value);
      } catch (error) {
        e = error;
        KDCore.warning(e);
        return null;
      }
    };
    // * Возвращает NETCharacter или Null
    return _.getPlayerCharacter = function(byWhat, value) {
      var e, playerData;
      try {
        if (!KDCore.Utils.isSceneMap()) {
          return null;
        }
        playerData = this.getPlayerInfo("info", byWhat, value);
        // * Персонаж должен быть на текущей карте + сцена карты должна быть текущая
        if ((playerData != null) && NetPlayerDataWrapper.isCharOnMap(playerData)) {
          return $gameMap.networkCharacterById(playerData.id);
        }
      } catch (error) {
        e = error;
        KDCore.warning(e);
      }
      return null;
    };
  })();
  (function() {    // -----------------------------------------------------------------------

    // * HUI
    // -----------------------------------------------------------------------
    _.showGreenAlert = function(text) {
      var e;
      try {
        return typeof HUIManager !== "undefined" && HUIManager !== null ? HUIManager.notifySucess(text) : void 0;
      } catch (error) {
        e = error;
        return KDCore.warning(e);
      }
    };
    _.showRedAlert = function(text) {
      var e;
      try {
        return typeof HUIManager !== "undefined" && HUIManager !== null ? HUIManager.notifyError(text) : void 0;
      } catch (error) {
        e = error;
        return KDCore.warning(e);
      }
    };
    _.showInfoMessage = function(text1, text2 = "") {
      var e;
      try {
        return typeof HUIManager !== "undefined" && HUIManager !== null ? HUIManager.showWaitingInfo(text1, text2, 1) : void 0;
      } catch (error) {
        e = error;
        return KDCore.warning(e);
      }
    };
    return _.hideInfoMessage = function() {
      var e;
      try {
        return typeof HUIManager !== "undefined" && HUIManager !== null ? HUIManager.hideWaitingInfo() : void 0;
      } catch (error) {
        e = error;
        return KDCore.warning(e);
      }
    };
  })();
  (function() {    // -----------------------------------------------------------------------

    // * USER SERVER COMMANDS
    // -----------------------------------------------------------------------
    //@[ALIAS SUPPORT]
    // * FOR ALIASING (for plugin developers and custom commands implementation)
    _.onCustomCommand = function(name, data) {
      var e;
      try {
        if (typeof $gameSystem !== "undefined" && $gameSystem !== null) {
          $gameSystem.nCheckCustomCommandForCEStart(name);
        }
        ANET.CFIX.onCustomCommand(name, data);
      } catch (error) {
        e = error;
        ANET.w(e);
      }
      console.log("Custom network command received: " + name);
    };
    // * USER CUSTOM CODE HERE
    _.sendCustomCommand = function(name, data) {
      var e;
      try {
        if (!_.isNetworkGame()) {
          return;
        }
        return ANNetwork.callback(NMS.Game("userCommand", {name, data}), function() {
          //TODO: Может не надо выполнять и на данном клиенте?
          // * Сразу выполняем и на данном клиенте
          // * Так как сервер эту команду выполнит в режиме ретрансляции
          return nAPI.onCustomCommand(name, data);
        });
      } catch (error) {
        e = error;
        return KDCore.warning(e);
      }
    };
    // * Подписать на определённую (кастомную) команду выполенине общего события
    return _.registerCommonEventForCommand = function(name, commonEventId) {
      var e;
      try {
        return ANNetwork.callback(NMS.Game("customCommandLink", {name, commonEventId}), function() {
          if (typeof $gameSystem !== "undefined" && $gameSystem !== null) {
            $gameSystem.nRegisterCustomCommandCE(name, commonEventId);
          }
          return console.log("Custom network command register to Common Event is done");
        });
      } catch (error) {
        e = error;
        return KDCore.warning(e);
      }
    };
  })();
  (function() {    // -----------------------------------------------------------------------

    // * CHAT
    // -----------------------------------------------------------------------
    _.writeInChat = function(message, isGlobal = false) {
      var e;
      try {
        if (isGlobal === true && ANNetwork.isConnected()) {
          ANGameManager.sendRawChatMessage(0, 0, message);
        } else {
          ANET.UI.addMessageToChat(ANET.Utils.buildChatMessage(0, 0, message));
        }
      } catch (error) {
        e = error;
        KDCore.warning(e);
      }
    };
    _.closeChatWindow = function() {
      var e;
      try {
        ANET.UI.closeChat();
      } catch (error) {
        e = error;
        KDCore.warning(e);
      }
    };
    _.openChatWindow = function() {
      var e;
      try {
        ANET.UI.showChat();
      } catch (error) {
        e = error;
        KDCore.warning(e);
      }
    };
    _.moveChatWindow = function(x = 0, y = 0) {
      var e;
      try {
        $gamePlayer._nLastChatWindowPosition = {
          x: x,
          y: y
        };
        if (this.isChatWindowOpened()) {
          ANET.UI.chat()._moveToStartPosition();
        }
      } catch (error) {
        e = error;
        KDCore.warning(e);
        $gamePlayer._nLastChatWindowPosition = {
          x: 0,
          y: 0
        };
      }
    };
    return _.isChatWindowOpened = function() {
      var e;
      try {
        return ANET.UI.isChatOpen();
      } catch (error) {
        e = error;
        KDCore.warning(e);
        return false;
      }
    };
  })();
  (function() {    // -----------------------------------------------------------------------

    // * PLAYER MENU
    // -----------------------------------------------------------------------
    return _.callPlayerMenuAction = function(actionName, relativeActorId) {
      var anotherPlayer, e;
      try {
        switch (actionName) {
          case "trade":
            anotherPlayer = $gameMap.networkCharacterByActorId(relativeActorId);
            if ((anotherPlayer != null) && ANTradeManager.isClientAvailableForTrade()) {
              return ANTradeManager.requestTradeWith(anotherPlayer.playerData());
            }
            break;
          case "status":
            // * Запрашиваем статус определённого персонажа
            $gameTemp._netRequestStatusForCertainActorId = relativeActorId;
            return SceneManager.push(Scene_Status);
          case "follow":
            // * Автоматически следуем за определённым игроком
            return $gameTemp._netAutoFollowActorId = relativeActorId;
          default:
            return ANET.w("Unknown Player Menu Action: " + actionName);
        }
      } catch (error) {
        e = error;
        KDCore.warning(e);
        return false;
      }
    };
  })();
})();

// ■ END IMPLEMENTATION.coffee
//---------------------------------------------------------------------------

// -----------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
// * Класс для персонажей на карте других игроков
var NETCharacter;

NETCharacter = class NETCharacter extends Game_Character {
  constructor(id) {
    super();
    this.id = id;
    //* Иконка сетевого состояния игрока (меню, карта, торговля, чат и т.д.)
    this.networkStateIcon = null;
    this.refresh();
  }

  // * Синхронизация движения
  playerData() {
    return ANGameManager.getPlayerDataById(this.id);
  }

  actor() {
    return $gameActors.actor(this.playerData().actorId);
  }

  actorId() {
    if (this.playerData() != null) {
      return this.playerData().actorId;
    } else {
      return 0;
    }
  }

  refresh() {
    var charIndex, charName;
    if (this.actor() == null) {
      return;
    }
    charName = this.actor().characterName();
    charIndex = this.actor().characterIndex();
    return this.setImage(charName, charIndex);
  }

  // * Сетевое состояние игрока
  // * =====================================================================
  requestNetworkStateIcon(networkStateIcon) {
    this.networkStateIcon = networkStateIcon;
  }

};

(function() {  
  // * =====================================================================

  //╒═════════════════════════════════════════════════════════════════════════╛
  // ■ NETCharacter.coffee
  //╒═════════════════════════════════════════════════════════════════════════╛
  //---------------------------------------------------------------------------
  var _;
  //@[DEFINES]
  _ = NETCharacter.prototype;
})();

// ■ END NETCharacter.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
// * Данный класс содержит NETCharacter всех игроков на карте (аналог Game_Followers)
//?[STORABLE]
//@[GLOBAL]
var NETCharactersGroup;

NETCharactersGroup = class NETCharactersGroup {
  constructor() {
    this._data = [];
  }

  setup() {
    "SETUP NETWORK CHARS".p();
    this._data = [];
    this._refreshCharacters();
  }

  // * Вызывается из Game_Map.refresh
  refresh() {
    var char, i, len, ref;
    this._refreshCharacters();
    ref = this._data;
    for (i = 0, len = ref.length; i < len; i++) {
      char = ref[i];
      char.refresh();
    }
  }

  characters() {
    return this._data;
  }

  characterById(id) {
    return this.characters().find(function(c) {
      return c.id === id;
    });
  }

  characterByActorId(actorId) {
    return this.characters().find(function(c) {
      return c.actorId() === actorId;
    });
  }

  update() {
    var c, i, len, ref, results;
    ref = this.characters();
    results = [];
    for (i = 0, len = ref.length; i < len; i++) {
      c = ref[i];
      results.push(c.update());
    }
    return results;
  }

  isSomeoneCollided(x, y) {
    return this.characters().some(function(c) {
      return c.pos(x, y);
    });
  }

  getInPos(x, y) {
    return this.characters().find(function(c) {
      return c.pos(x, y);
    });
  }

};

(function() {  //╒═════════════════════════════════════════════════════════════════════════╛
  // ■ NETCharactersGroup.coffee
  //╒═════════════════════════════════════════════════════════════════════════╛
  //---------------------------------------------------------------------------
  var _;
  //@[DEFINES]
  _ = NETCharactersGroup.prototype;
  
  // * Данный метод удаляет (отключённых) и создаёт (подклюённых) персонажей
  _._refreshCharacters = function() {
    this._removeNotExistsCharacters();
    this._addNewCharacters();
    this._refreshNetworkCharactersSprites();
  };
  // * Удаляем (отключился или ушёл на другую карту)
  _._removeNotExistsCharacters = function() {
    var char, i, len, ref, x;
    x = ANGameManager.anotherPlayersOnMap();
    ref = this.characters();
    for (i = 0, len = ref.length; i < len; i++) {
      char = ref[i];
      if (char == null) {
        continue;
      }
      if (!x.find(function(c) {
        return c.id === char.id;
      })) {
        this._data.delete(char);
      }
    }
  };
  // * Добавляем новых персонажей
  _._addNewCharacters = function() {
    var char, i, len, pl, x;
    // * anotherPlayersOnMap - значит на текущей карте и characterReady is true - Это важно
    x = ANGameManager.anotherPlayersOnMap();
    for (i = 0, len = x.length; i < len; i++) {
      pl = x[i];
      char = this.characterById(pl.id);
      if (char == null) {
        this._data.push(new NETCharacter(pl.id));
      }
    }
  };
  // * Пересоздать спрайты персонажей
  _._refreshNetworkCharactersSprites = function() {
    var ref;
    if (!KDCore.Utils.isSceneMap()) {
      return;
    }
    if ((ref = SceneManager._scene._spriteset) != null) {
      ref.refreshNetworkCharacters();
    }
  };
})();

// ■ END NETCharactersGroup.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ NetMessages.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _CM, _M;
  //@[DEFINES]
  _M = NetMessage;
  _CM = function(name, flag, data, socket) {
    return _M.EmptyMessageWithFlag(flag, data, socket).setName(name);
  };
  // * Обозначения
  // f - имя комманды (флага)
  // d - данные
  // s - сокет (либо ничего)

  //?LOBBY COMMANDS
  _M.Lobby = function(f, d, s) {
    return _CM('lobby', f, d, s);
  };
  //?MAP COMMANDS
  _M.Map = function(f, d, s) {
    return _CM('map', f, d, s);
  };
  //?GAME COMMANDS
  _M.Game = function(f, d, s) {
    return _CM('game', f, d, s);
  };
  //?INTERPRETER COMMANDS
  _M.Event = function(f, d, s) {
    return _CM('event', f, d, s);
  };
  //?BATTLE COMMANDS
  _M.Battle = function(f, d, s) {
    return _CM('battle', f, d, s);
  };
  //?OTHER COMMANDS
  _M.Other = function(f, d, s) {
    return _CM('other', f, d, s);
  };
  //?COMMON COMMANDS
  _M.Common = function(innerFlag, d, s) {
    return _M._commonCMD('forClients', innerFlag, d, s);
  };
  //? COMMON COMMAND DATA
  _M._commonCMD = function(cmdName, innerFlag, d, s) {
    var commonData;
    commonData = {
      cmd: innerFlag,
      data: d
    };
    return _CM('common', cmdName, commonData, s);
  };
  //?ABSZ COMMANDS
  // * Через broadcast, т.е. самому себе не прийдёт
  _M.ABSZ = function(innerFlag, d, s) {
    return _M._commonCMD('absz', innerFlag, d, s);
  };
})();

// ■ END NetMessages.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
// * Основной класс менеджер интерфейса (API)
// * Аналогичен классу AA.UI из ABSZ
ANET.UI = function() {};

(function() {  //╒═════════════════════════════════════════════════════════════════════════╛
  // ■ ANET.UI.coffee
  //╒═════════════════════════════════════════════════════════════════════════╛
  //---------------------------------------------------------------------------
  var _;
  //@[DEFINES]
  _ = ANET.UI;
  _.setUI = function(uiSet) {
    this.uiSet = uiSet;
  };
  _.isValid = function() {
    return (this.uiSet != null) && ANNetwork.isConnected();
  };
  // * Когда появляется окно с сообщением
  _.onGameMessageStart = function() {
    if (!this.isValid()) {
      return;
    }
    this.uiSet.onGameMessageStart();
    this.closePlayerMenu();
  };
  // * Когда заканчивается окно с сообщением
  _.onGameMessageEnd = function() {
    if (!this.isValid()) {
      return;
    }
    return this.uiSet.onGameMessageEnd();
  };
  // * Когда было нажатие мышки на какой-либо UI элемент
  _.isUITouched = function() {
    return false;
  };
  // * Вызывается когда сцена карты заканчивается
  _.terminate = function() {
    var ref;
    if ((ref = this.uiSet) != null) {
      ref.terminate();
    }
    this.terminateModalWindow();
  };
  (function() {    
    // * Основной интерфейс Spriteset_UI
    // -----------------------------------------------------------------------
    _.refresh = function() {
      var ref;
      return (ref = this.uiSet) != null ? ref.refresh() : void 0;
    };
    _.hide = function() {
      var ref;
      return (ref = this.uiSet) != null ? ref.hide() : void 0;
    };
    _.show = function() {
      var ref;
      return (ref = this.uiSet) != null ? ref.show() : void 0;
    };
    // * Если какой-либо UI элемент обрабатывает нажатие курсора, то true
    _.isAnyUIElementTouchProcess = function() {
      return false;
    };
    // * Эффект нажатия курсора
    return _.playClickEffect = function(noSound = false) {
      var effect, x, y;
      if (!this.isValid()) {
        return;
      }
      if (!noSound) {
        SoundManager.playCursor();
      }
      ({x, y} = TouchInput);
      effect = new ANET.Sprite_MapClickEffect(x, y);
      this.uiSet.addChild(effect);
    };
  })();
  (function() {    // -----------------------------------------------------------------------

    // * Меню игрока
    // -----------------------------------------------------------------------
    _.playerMenu = function() {
      return this.uiSet.playerMenuWindow;
    };
    // * Есть ли меню игрока (создан ли), так как опциональный и нету в Basic
    _.isPlayerMenuValid = function() {
      return this.isValid() && (this.playerMenu() != null);
    };
    _.isPlayerMenuIsOpen = function() {
      return this.isPlayerMenuValid() && this.playerMenu().isOpen();
    };
    // * netChar - класс NETCharacter
    _.openNetPlayerMenuFor = function(netChar) {
      if (!this.isPlayerMenuValid()) {
        return;
      }
      if (netChar == null) {
        this.closePlayerMenu();
      }
      this.playerMenu().openForCharacter(netChar);
    };
    return _.closePlayerMenu = function() {
      var ref;
      if ((ref = this.playerMenu()) != null) {
        ref.close();
      }
    };
  })();
  (function() {    // * Чат
    // -----------------------------------------------------------------------
    _.chat = function() {
      return this.uiSet.chatWindow;
    };
    // * Есть ли чат (создан ли), так как опциональный и нету в Basic
    _.isChatValid = function() {
      return this.isValid() && (this.chat() != null);
    };
    // * Открыто ли окно чата
    _.isChatOpen = function() {
      return this.isChatValid() && this.chat().isActive();
    };
    // * Показать сцену ввода сообщения в чат
    _.showChatInput = function() {
      if (!this.isValid()) {
        return;
      }
      SceneManager.push(Scene_NetChatInput);
    };
    // * Показать сцену ввода сообщения в чат (с учётом событий и сообщений)
    _.showChatInputSafe = function() {
      if (!this.isChatValid()) {
        return;
      }
      if (this.isCanChatInput()) {
        return this.showChatInput();
      }
    };
    _.showChat = function() {
      if (!this.isChatValid()) {
        return;
      }
      if (!this.isChatOpen()) {
        this.chat().open();
      }
    };
    _.closeChat = function() {
      if (!this.isChatValid()) {
        return;
      }
      if (this.isChatOpen()) {
        this.chat().close();
      }
    };
    
    // * Добавить сообщение в чат (можно вызывать на любой сцене)
    _.addMessageToChat = function(message) {
      //%[I] Опция открывать чат при новом сообщении, или значёк чата с индикатором сообщения в углу (нажимаемый - кнопка)
      if (!this.isChatValid()) {
        return;
      }
      if (message == null) {
        return;
      }
      // * Если на карте, то добавляем прямо в чат
      if (KDCore.Utils.isSceneMap()) {
        this.chat().addMessageToChat(message);
      } else {
        // * Иначе в историю
        $gameTemp._nChatHistory.push(message);
      }
    };
    // * Может ли игрок начать вводить текст в чат (другая сцена будет открыта)
    _.isCanChatInput = function() {
      return !($gameMessage.isBusy() || $gameMap.isEventRunning());
    };
    
    // * Открыть (или не надо) чат при переходе на сцену карты
    return _.openChatAfterMapLoaded = function() {
      if (!this.isChatValid()) {
        return;
      }
      if (!$gamePlayer._nChatIsClosed) {
        return this.showChat();
      }
    };
  })();
  (function() {    // -----------------------------------------------------------------------

    // * Модальное диалоговое окно
    // -----------------------------------------------------------------------
    _.modalWindow = function() {
      return this.uiSet.netModalDialog;
    };
    _.isModalWindowIsOpen = function() {
      var ref;
      return this.isValid() && ((ref = this.modalWindow()) != null ? ref.isOpen() : void 0);
    };
    // * Если сцена закрывается, а окно октрыто -> автоматический ответ "НЕТ"
    _.terminateModalWindow = function() {
      var e;
      try {
        if (this.isModalWindowIsOpen()) {
          this.modalWindow().forceCancel();
        }
      } catch (error) {
        e = error;
        ANET.w(e);
      }
    };
    // * Показать модальное окно для начала торговли, где initiator игрок который отправил нам запрос
    return _.showModalWindowForTrade = function(initiatorId) {
      var e, name;
      if (!this.isValid()) {
        return;
      }
      if (!String.any(initiatorId)) {
        return;
      }
      try {
        name = nAPI.getPlayerInfo("actorName", "netId", initiatorId);
        return this.modalWindow().openForTradeRequest(name);
      } catch (error) {
        e = error;
        return ANET.w(e);
      }
    };
  })();
})();

// ■ END ANET.UI.coffee
//---------------------------------------------------------------------------
// -----------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
// * Класс которые работает с параметрами и командами плагина
(function() {
  var ParamsManager;
  ParamsManager = (function() {
    class ParamsManager extends KDCore.ParamLoader {
      constructor() {
        super("ANETZ");
        this._prepareParameters();
      }

      
        //TODO: Остановился чтобы проверить подключение к загруженной игре join started room
      //TODO: Затем фикс проблемы с Autorun (на уровне проверки флага наверное, чтоыб даже не запускать)
      //TODO: Реализовать выбор персонажей при присоеднинеии к игре
      //TODO: Не работает Shared battle и Local All при присоединении к игре

        //? CONNECTION -----------------------------------------------------------
      // * Настройки соединения
      serverIp() {
        return this._ip;
      }

      serverPort() {
        return this._port;
      }

      isHTTPSConnection() {
        return this._isHttps === true;
      }

      //? MULTIPLAYER GROUP -----------------------------------------------------------

        //Join to Game Allowed?
      isJoinStartedRoomAllowed() {
        return this.getParam("joinStartedAllowed", false);
      }

      //Join to Loaded Game?
      isJoinStartedAndLoadedRoom() {
        return this.getParam("joinStartedAndLoadedAllowed", true);
      }

      //On Player Joined CE
      getJoinedRoomCommonEvent() {
        return this.getParam("onJoinCE", 0);
      }

      //Wait Map Transfer?
      isOnlySameMapMode() {
        return this.getParam("onlySameMap", true);
      }

      // New Game Allowed?
      // * Доступна ли обычная локальная Новая игра
      isSinglePlayerAllowed() {
        return this.getParam("singlePlayerAllowed", true);
      }

      //Rooms Filter?
      isRoomFilterON() {
        return ANET.isPro() && this.getParam("roomFilter", false);
      }

      //Save and Load Allowed?
      // * Сохранение и загрузка сетевой игры
      isSaveLoadAllowed() {
        return this.getParam("saveLoadGame", true);
      }

      // Is show network icons?
      // * Показывать иконки статуса игрока
      isShowNetworkIcons() {
        return this.getParam("networkStatusIcons", true);
      }

      // Join Random Room Option
      // * Показывать опцию (Подключиться к случайной комнате)
      isJoinRandomRoomAllowed() {
        return this.getParam("isJoinRandomOptionExists", true);
      }

      //In-Game Chat?
      isGameChatAllowed() {
        if (ANET.isPro()) {
          return this.getParam("inGameChat", false);
        } else {
          return false;
        }
      }

      //? CHAT SUBGROUP -----------------------------------------------------------
      //TODO: Параметр
      //TODO: param Open chat if closed and new message is arrived
      //TODO: format strings
      //TODO: visual settings

        //Start Message
      getChatStartMessage() {
        return this.getParam("chatStartMessage", "");
      }

      getChatOpenCloseKey() {
        return this.getParam("chatOpenCloseKey", "t");
      }

      getChatSayKey() {
        return this.getParam("chatSayKey", "t");
      }

      // Is click to Say?
      isSayIfClickOnChatWindow() {
        return this.getParam("clickOnChatToSay", true);
      }

      //? PLAYER MENU -----------------------------------------------------------

        //In-Game Player Menu?
      // * Меню игрока - включено? (вообще в игре)
      isInGamePlayerMenuAllowed() {
        if (ANET.isPro()) {
          return this.getParam("playerMenuSettingsGroup", true);
        } else {
          return false;
        }
      }

      // * Стандартные команды для меню игрока
      getPlayerMenuDefaultCommands() {
        return this._menuCommands;
      }

      //Custom Commands
      getPlayerMenuUserCommands() {
        return this.getParam("userIPLMenuCommands", []);
      }

      //Is need trade confirm window?
      // * Спрашивать игрока о начале торговли? (запрос торговли от другого)
      isShowModalForTradeRequest() {
        return this.getParam("isTradeModalWindowActive", true);
      }

      getTradeModalWindowText() {
        return this.getParam("tradeModalWindow_text", "Accept \\C[1]Trade\\C[0] from \\C[2]%1\\C[0]?");
      }

      getModalWindowOpenSE() {
        return this.getParam("tradeModalWindow_openSE", "Bell3");
      }

      getModalWindowYesHotkey() {
        return this.getParam("tradeModalWindow_hkYes", "y");
      }

      getModalWindowNoHotKey() {
        return this.getParam("tradeModalWindow_hkNo", "n");
      }

      //? PLAYER SETTINGS GROUP -----------------------------------------------------------

        // * Набор персонажей Actors для сетевой игры
      //Actors
      actorsForNetwork() {
        return this.getParam("actorsForNetwork", [1, 2, 3, 4]);
      }

      //?VERSION
      //Players per Room
      maxPlayersInRoom() {
        return this.getParam("maxPlayersInRoom", 4);
      }

      // * Можно ли выбирать персонажа себе
      //Actor selection?
      isActorSelectionAllowed() {
        return this.getParam("isActorSelectionAllowed", true);
      }

      // * Можно ли начать сетевую игру одному
      //One player start?
      isSingleActorNetworkGameAllowed() {
        return this.getParam("isSinglePlayerStartAllowed", true);
      }

      // * Отображение имени игрока заместо имени персонажа
      // * 0 - Не показывать, 1 - Name, 2 - Nickname
      //?DINAMIC
      //Player Name for Actor
      playerActorNameType() {
        return 0;
      }

      //On Player Disconnect CE
      getPlayerLeaveGameCommonEventId() {
        return this.getParam("playerLeaveGameCommonEvent", 0);
      }

      //? OTHER -----------------------------------------------------------
      globalVariablesIds() {
        return this._globalVars;
      }

      globalSwitchesIds() {
        return this._globalSwitches;
      }

      //Input Max Length
      getTextInputMaxLength() {
        return this.getParam("textInputMaxLength", 12);
      }

      //TODO: in H
      getLocaleValue(id, arg) {
        var value;
        value = this._localeDB[id] || id.toString();
        if ((arg != null) && String.any(arg.toString())) {
          value = value.replace("%1", arg);
        }
        return value;
      }

      //? NOT IN HEADER YET -------------------------------------

        // * Можно ли просматривать статус других игроков
      isOtherPlayersMenuStatusAllowed() {
        return true;
      }

      // * Видно ли других игроков в меню
      isOtherPlayersVisibleInMenu() {
        return true;
      }

      // * Ожидание получения действия от каждого игрока в битве
      isForceBattleSyncMode() {
        return true;
      }

      // * Время обновления данных игрока (на карте)
      playerDataRefreshRate() {
        return 60;
      }

      // * Время обновления данных в битве (влияет на производительность)
      battleDataRefreshRate() {
        return 60;
      }

      // * Настройки Trade сцены (визуальные)
      tradeSceneSettings() {} //TODO:

      
        //TODO: Параметр
      isSaveOnlyInMenu() {
        return false;
      }

      tradeSceneCompleteSE() {
        return "";
      }

    };

    // * Создаём Shortcut для этого методы
    ANET.LV = function() {
      return ANET.PP.getLocaleValue(...arguments);
    };

    return ParamsManager;

  }).call(this);
  ANET.link(ParamsManager);
})();

(function() {  //╒═════════════════════════════════════════════════════════════════════════╛
  // ■ PRIVATE.coffee
  //╒═════════════════════════════════════════════════════════════════════════╛
  //---------------------------------------------------------------------------
  var _;
  //@[DEFINES]
  _ = ANET.ParamsManager.prototype;
  _._prepareParameters = function() {
    this._prepareConnectionSettings();
    this._preparePlayerActorName();
    this._prepareGlobalData();
    this._prepareDefaultPlayerMenuCommands();
    this._prepareLocaleValues();
  };
  //?VERSION
  //! У базовой версии свой метод!
  _._prepareConnectionSettings = function() {
    var p;
    p = this.getParam("connection", {
      serverIp: "195.161.41.20",
      serverPort: "3034",
      isHttpsConnection: false
    });
    this._ip = p.serverIp;
    this._port = p.serverPort;
    this._isHttps = p.isHttpsConnection;
    // * Это тут по сути не нужно (так как у базовой версии свой метод)
    if (this.isHTTPSConnection() && !ANET.isPro()) {
      window.alert("Only Alpha NET Z [PRO] supports HTTPS connection!");
      this._isHttps = false;
    }
  };
  _._preparePlayerActorName = function() {
    var p;
    p = this.getParam("playerActorNameType", "");
    switch (p) {
      case "Instead Name":
        this.playerActorNameType = function() {
          return 1;
        };
        break;
      case "Instead Nickname":
        this.playerActorNameType = function() {
          return 2;
        };
        break;
    }
  };
  // * Ничего, так как 0 по умолчанию
  _._prepareGlobalData = function() {
    var p;
    p = this.getParam("globalData", {
      globalSwitchesIds: [],
      globalVariablesIds: []
    });
    this._globalVars = p.globalVariablesIds;
    this._globalSwitches = p.globalSwitchesIds;
  };
  _._prepareDefaultPlayerMenuCommands = function() {
    var cmd, commandNames, i, len, name;
    this._menuCommands = [];
    commandNames = ["trade", "status", "follow"];
    for (i = 0, len = commandNames.length; i < len; i++) {
      name = commandNames[i];
      cmd = this.getParam("PlayerMenuItem_" + name, null);
      if (cmd == null) {
        continue;
      }
      cmd.action = name; // * флаг
      if (cmd.visible === true) {
        this._menuCommands.push(cmd);
      }
    }
  };
  _._prepareLocaleValues = function() {
    var p;
    // * Чтобы не дублировать, тут используем {} пустой
    p = this.getParam("localeDB", {});
    // * Заполняем значение с учётом Default значений
    // * Так сделано, так как при добавлении новых, их может ещё не быть у пользователя
    this._localeDB = {
      network: p.network || "Network",
      createRoom: p.createRoom || "Create Room",
      joinRoom: p.joinRoom || "Join Room",
      joinRandomRoom: p.joinRandomRoom || "Join Random Room",
      settings: p.settings || "Settings",
      start: p.start || "Start",
      leave: p.leave || "Leave",
      joinGame: p.joinGame || "Join Game",
      ready: p.ready || "Ready",
      character: p.character || "Character",
      close: p.close || "Close",
      welcome: p.welcome || "Welcome, %1",
      playersCount: p.playersCount || "Players on server: %1"
    };
  };
})();

// ■ END PRIVATE.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.5.1
//@[GLOBAL]
//?[STORABLE]

// * Класс для пула ожидания флагов (или данных) от других игроков
var PlayersCheckPool;

PlayersCheckPool = class PlayersCheckPool {
  constructor(anotherPlayersGetter) {
    this.anotherPlayersGetter = anotherPlayersGetter;
    this.reset();
    return;
  }

  // * Главный метод -> отправка на сервер запроса
  requestToServer(requestMethod) {
    this.requestMethod = requestMethod;
    return this.requestMethod();
  }

  update() {
    if (this._repeatTimer >= 0) {
      this._repeatTimer--;
    } else {
      this.checkPool();
      if (!this.isReady()) {
        this.requestToServer(this.requestMethod);
        this.resetTimer();
      } else {
        if (this.callback != null) {
          this.callback();
        }
      }
    }
  }

  // * Проверка пула данных
  checkPool() {
    var anotherPlayersIds, i, id, len, poolSize;
    poolSize = 0;
    // * Подразумевается что в этом массиве только ID других игроков (кроме себя)
    anotherPlayersIds = this.anotherPlayersGetter().map(function(pl) {
      return pl.actorId;
    });
    for (i = 0, len = anotherPlayersIds.length; i < len; i++) {
      id = anotherPlayersIds[i];
      if (this.isDataExistsFor(id)) {
        poolSize += 1;
      }
    }
    if (poolSize === anotherPlayersIds.length) {
      // * Поэтому, когда пул полный, проверяем что данные от себя тоже есть
      this._isReady = this.isMyDataExists();
    } else {
      this._isReady = false;
    }
  }

  onReady(callback) {
    this.callback = callback;
  }

  isReady() {
    return this._isReady === true;
  }

  setMyData(data) {
    return this.onAnswer(ANGameManager.myActorId(), data);
  }

  isMyDataExists() {
    return this.isDataExistsFor(ANGameManager.myActorId());
  }

  isDataExistsFor(actorId) {
    return this._anotherPlayersData[actorId] != null;
  }

  // * Этот метод вызывается внешне, когда пришли данные от сервера
  onAnswer(actorId, data) {
    return this._anotherPlayersData[actorId] = data;
  }

  reset() {
    this.resetTimer();
    this._isReady = false;
    this._anotherPlayersData = {};
  }

  resetTimer() {
    return this._repeatTimer = 60;
  }

};


// Generated by CoffeeScript 2.6.1
//@[GLOBAL]
//?[STORABLE]

// * Класс для пула ожидания флагов (или данных) от других игроков
var PlayersDataPool;

PlayersDataPool = class PlayersDataPool {
  constructor(anotherPlayersGetter) {
    this.anotherPlayersGetter = anotherPlayersGetter;
    this.reset();
    return;
  }

  // * Режим ожидания не данных, а чтобы у всех был TRUE
  setFlagMode() {
    return this._isFlagMode = true;
  }

  // * Главный метод -> отправка на сервер запроса
  register(requestMethod) {
    this.requestMethod = requestMethod;
    return this.requestMethod();
  }

  update() {
    if (this.isReady()) { // * Чтобы цикла не было по вызову callback
      return;
    }
    this._timeout--;
    if (this._repeatTimer >= 0) {
      this._repeatTimer--;
    } else {
      this.checkPool();
      if (!this.isReady()) {
        this.resetTimer();
        if (this._timeout > 0) {
          this.register(this.requestMethod);
        } else {
          this._isTimedOut = true;
          if (this.failCallback != null) {
            this.failCallback();
          }
          // * Сброс (например если Timeout не предусмотрен, не задан метод failCallback)
          this.resetTimeout();
        }
      } else {
        if (this.callback != null) {
          this.callback();
        }
      }
    }
  }

  // * Проверка пула данных
  checkPool() {
    var anotherPlayersIds, i, id, len, poolSize;
    poolSize = 0;
    // * Подразумевается что в этом массиве только ID других игроков (кроме себя)
    anotherPlayersIds = this.anotherPlayersGetter().map(function(pl) {
      return pl.actorId;
    });
    for (i = 0, len = anotherPlayersIds.length; i < len; i++) {
      id = anotherPlayersIds[i];
      if (this.isDataExistsFor(id)) {
        poolSize += 1;
      }
    }
    if (poolSize === anotherPlayersIds.length) {
      // * Поэтому, когда пул полный, проверяем что данные от себя тоже есть
      this._isReady = this.isMyDataExists();
    } else {
      this._isReady = false;
    }
  }

  onReady(callback) {
    this.callback = callback;
  }

  onFail(failCallback) {
    this.failCallback = failCallback;
  }

  isReady() {
    return this._isReady === true;
  }

  isTimedOut() {
    return this._isTimedOut === true;
  }

  setMyData(data) {
    return this.onAnswer(ANGameManager.myActorId(), data);
  }

  isMyDataExists() {
    return this.isDataExistsFor(ANGameManager.myActorId());
  }

  isDataExistsFor(actorId) {
    return this.getDataFor(actorId) != null;
  }

  getDataFor(actorId) {
    return this._anotherPlayersData[actorId];
  }

  getData() {
    return this._anotherPlayersData;
  }

  // * Этот метод вызывается внешне, когда пришли данные от сервера
  onAnswer(actorId, data) {
    if (!this._isFlagMode) {
      this._anotherPlayersData[actorId] = data;
    } else {
      // * Если в режиме флагов, то только при TRUE присваиваем данные
      if (data === true) {
        this._anotherPlayersData[actorId] = data;
      } else {
        // * null, а не false, потому что проверка через ? идёт
        this._anotherPlayersData[actorId] = null;
        delete this._anotherPlayersData[actorId];
      }
    }
  }

  reset() {
    this.resetTimer();
    this.resetTimeout();
    this._isReady = false;
    this._isFlagMode = false;
    this._isTimedOut = false;
    this._anotherPlayersData = {};
  }

  resetTimer() {
    return this._repeatTimer = 60;
  }

  resetTimeout() {
    return this._timeout = 600;
  }

};


// Generated by CoffeeScript 2.6.1
//@[GLOBAL]
//?[STORABLE]

// * Класс для пула ожидания других игроков
var PlayersWaitPool;

PlayersWaitPool = class PlayersWaitPool {
  constructor() {
    // * Запоминается при создании, чтобы можно было сбросить
    // * Это нужно, чтобы если игрок новый переместился на карту, его
    // * не добавили в ожидание, если на этой карте уже запущено общее событие
    this._anotherPlayersIds = ANGameManager.anotherPlayersOnMap().map(function(pl) {
      return pl.actorId;
    });
    this.reset();
    return;
  }

  // * Зарегестрировать (отправить на сервер)
  register() {
    this.resetTimer();
    ANInterpreterManager.sendSharedEventRequireRegister();
  }

  // * Только один игрок (мастер события) запустил событие (один на карте или в игре)
  isSinglePool() {
    return this._anotherPlayersIds.length === 0;
  }

  // * Проверить, что игроки, которые в пуле, онлайн (не отключились)
  checkPool() {
    var i, id, len, player, playersOnMap, ref;
    playersOnMap = ANGameManager.anotherPlayersOnMap();
    ref = this._anotherPlayersIds;
    for (i = 0, len = ref.length; i < len; i++) {
      id = ref[i];
      // * Если игрока больше нет на карте, мы его удаляем из пула
      player = playersOnMap.find(function(pl) {
        return pl.actorId === id;
      });
      if (player == null) {
        this._anotherPlayersIds.delete(id);
        // * Игрок отключился, делаем ему true, чтобы можно было продолжить событие
        // * (в следующей команде он уже участвовать не будет, так как будет Reset)
        this._playersReady[id] = true;
      }
    }
  }

  // * Ответ от сервера
  onAnswer(actorId) {
    return this._playersReady[actorId] = true;
  }

  update() {
    if (this._repeatTimer >= 0) {
      this._repeatTimer--;
    } else {
      if (!this.isReady()) {
        this.checkPool();
        this.register();
      }
    }
  }

  isReady() {
    var pl, ref, value;
    ref = this._playersReady;
    for (pl in ref) {
      value = ref[pl];
      if (value === false) {
        // * Если хоть одно значение false, значит не готов
        return false;
      }
    }
    return true;
  }

  resetTimer() {
    return this._repeatTimer = 60;
  }

  // * Сбросить до нового ожидания
  reset() {
    var i, id, len, ref;
    // * Добавляем себя как готового всегда (тут не важент именно ID)
    // * В принципе можно и не добавлять, так как важнее другие игроки
    this._playersReady = {
      myActorId: true
    };
    ref = this._anotherPlayersIds;
    // * Добавляем всех игроков как изначально не готовых
    for (i = 0, len = ref.length; i < len; i++) {
      id = ref[i];
      this._playersReady[id] = false;
    }
    this.resetTimer();
  }

};


// Generated by CoffeeScript 2.6.1
// * Команды плагина
// * Нет класса или менеджера, так как только методы регистрации команд
(function() {
  var registerPluginCommandsMV, registerPluginCommandsMZ;
  // * Основной метод загрузки (регистрации команд плагина)
  ANET.loadPluginCommands = function() {
    if (KDCore.isMZ()) {
      registerPluginCommandsMZ('Alpha_NETZ');
      return registerPluginCommandsMZ('Alpha_NETZ_MZ');
    } else {
      return registerPluginCommandsMV();
    }
  };
  registerPluginCommandsMZ = function(pluginName) {
    PluginManager.registerCommand(pluginName, 'EventCommandSelector', function(args) {
      var e;
      try {
        return this.nSetCommandOptions(args);
      } catch (error) {
        e = error;
        return ANET.w(e);
      }
    });
    PluginManager.registerCommand(pluginName, 'SharedBattle', function(args) {
      var e;
      try {
        return this.nSetSharedBattle(args.battleId);
      } catch (error) {
        e = error;
        return ANET.w(e);
      }
    });
  };
  registerPluginCommandsMV = function() {
    var e;
    try {
      // * Этот метод только для MV существует
      return ANET.registerMVPluginCommands();
    } catch (error) {
      e = error;
      return ANET.w(e);
    }
  };
})();


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_Base.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__isActive, ALIAS__terminate, ALIAS__update, _;
  //@[DEFINES]
  _ = Scene_Base.prototype;
  //@[ALIAS]
  ALIAS__isActive = _.isActive;
  _.isActive = function() {
    if (ANNetwork.isBusy()) {
      return false;
    } else {
      return ALIAS__isActive.call(this);
    }
  };
  //@[ALIAS]
  ALIAS__update = _.update;
  _.update = function() {
    if (ANNetwork.isBusy()) {
      return ANGameManager.updateWaiting();
    } else {
      return ALIAS__update.call(this);
    }
  };
  
  //@[ALIAS]
  ALIAS__terminate = _.terminate;
  _.terminate = function() {
    // * Смена сцены
    if (ANNetwork.isConnected()) {
      ANGameManager.sendSceneChanging();
    }
    return ALIAS__terminate.call(this);
  };
})();

// ■ END Scene_Base.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_Base.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Scene_Base.prototype;
  //?EVENT
  // * Когда соединение прервано, вызывается это событие
  _.onLostConnection = function() {
    HUIManager.hideLoader();
    return SceneManager.goto(Scene_Title);
  };
  
  //?EVENT
  // * Когда закрывается комната, вызывается это событие
  _.netOn_lobby_roomClosed = function() {
    // * По умолчанию из любой сцены выходит в главное меню
    return SceneManager.goto(Scene_Title);
  };
  // * Когда пришло какое-либо сообщение от сервера
  //?EVENT
  _.onServerEvent = function(name) {
    var eventMethod;
    if (SceneManager.isBusyForNetworkData()) {
      return;
    }
    eventMethod = "netOn_" + name;
    if (this[eventMethod] != null) {
      console.log("Call scene callback for event " + name);
      this[eventMethod]();
    }
  };
})();

// ■ END Scene_Base.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_Battle.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__changeInputWindow, ALIAS__commandFight, ALIAS__shouldAutosave, ALIAS__stop, ALIAS__updateBattleProcess, ALIAS__updateBattleProcessMV, ALIAS__updateTpbAutoBattle, _;
  //@[DEFINES]
  _ = Scene_Battle.prototype;
  // * В сетевом режиме автосхранения отключены
  //@[ALIAS]
  ALIAS__shouldAutosave = _.shouldAutosave;
  _.shouldAutosave = function() {
    if (ANNetwork.isConnected()) {
      return false;
    } else {
      return ALIAS__shouldAutosave.call(this);
    }
  };
  //@[ALIAS, STORED]
  _.ALIAS__NET_start = _.start;
  _.start = function() {
    // * Если бой в сетевом режиме и ещё не зарегестрирован, то сцена боя не отрисовывается
    if (ANNetwork.isConnected() && BattleManager.nIsNetworkBattle() && !ANBattleManager.isBattleRegistred()) {
      return;
    }
    // * Метод Start вызывается автоматически у SceneManager, поэтому когда
    // * данные прийдут, сцена старт
    _.ALIAS__NET_start.call(this);
    if (ANNetwork.isConnected()) {
      this.nOnBattleStarted();
    }
  };
  //@[ALIAS]
  ALIAS__stop = _.stop;
  _.stop = function() {
    ALIAS__stop.call(this);
    if (ANNetwork.isConnected()) {
      this.nOnBattleEnd();
    }
  };
  //TODO: Есть проблема, ввод доступен, пока ждём сервер battleMethod
  //TODO: Может просто деактивировать все окна? Чтобы нельзя было выбирать действие

  // * Игрок не может видеть команды "ввода" персонажей других игроков
  //@[ALIAS]
  ALIAS__changeInputWindow = _.changeInputWindow;
  _.changeInputWindow = function() {
    ALIAS__changeInputWindow.call(this);
    if (ANNetwork.isConnected() && BattleManager.isInputting() && !$gameParty.isOneBattler()) {
      if (BattleManager.actor() != null) {
        if (BattleManager.actor() !== $gameParty.leader()) {
          this.endCommandSelection();
        }
      }
    }
  };
  
  //@[ALIAS]
  ALIAS__commandFight = _.commandFight;
  _.commandFight = function() {
    if (ANNetwork.isConnected()) {
      // * Игрок снова должен сделать выбор
      BattleManager._isShouldWaitMyNetworkAction = true;
    }
    ALIAS__commandFight.call(this);
  };
  // * Должен идти перед переопределением общим, поэтому в этом файле
  if (KDCore.isMV()) {
    //@[ALIAS]
    ALIAS__updateBattleProcessMV = _.updateBattleProcess;
    _.updateBattleProcess = function() {
      if (ANNetwork.isConnected()) {
        if (!this.isAnyInputWindowActive() || BattleManager.isAborting() || BattleManager.isBattleEnd()) {
          this.changeInputWindow();
        }
        return BattleManager.update(); // * Надо обновлять не зависимо от условия вверху
      } else {
        return ALIAS__updateBattleProcessMV.call(this);
      }
    };
  }
  //@[ALIAS]
  ALIAS__updateBattleProcess = _.updateBattleProcess;
  _.updateBattleProcess = function() {
    // * На данный момент, если игрок один в битве, то он ничего не отравляет на сервер
    if (ANNetwork.isConnected()) {
      if ($gameParty.isOneBattler()) {
        // * Только обновлять данные HP и MP другим игрокам
        $gameParty.leader().updateDataObserver();
      } else {
        // * Логика сетевого боя (общая для мастера и клиентов)
        this.nUpdateBattleProcess();
        if (ANGameManager.isBattleMaster()) {
          ANBattleManager.update();
          // * Если ждём сервер, то не обновляем BattleManager
          if (ANBattleManager.isShouldWaitServer()) {
            return;
          }
        } else {
          // * BattleManager update (ALIAS__updateBattleProcess) выполняет только мастер битвы
          if (!BattleManager.nIsLocalForceUpdatePhase()) {
            return;
          }
        }
      }
    }
    ALIAS__updateBattleProcess.call(this);
  };
  
  // * На всякий случай отключу автобитву
  //@[ALIAS]
  ALIAS__updateTpbAutoBattle = _.updateTpbAutoBattle;
  _.updateTpbAutoBattle = function() {
    if (ANNetwork.isConnected()) {

    } else {
      return ALIAS__updateTpbAutoBattle.call(this);
    }
  };
})();

// ■ END Scene_Battle.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_Battle.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Scene_Battle.prototype;
  // * Когда пришли данные о битве от сервера (регистрация, новый участник)
  // * Этот метод выполняется на клиентах, которые УЖЕ в битве (а не на тех, кто присоединился)
  _.netOn_battle_serverBattleData = function() {
    var battler, battlerId, i, j, len, len1, ref, ref1;
    ref = $gameParty.battleMembers();
    // * Для всех новых, надо выполнять некоторые методы
    for (i = 0, len = ref.length; i < len; i++) {
      battler = ref[i];
      if (!$gameTemp._previousNetBattleActors.contains(battler.actorId())) {
        battler.onBattleStart();
        battler.makeActions();
      }
    }
    ref1 = $gameTemp._previousNetBattleActors;
    // * Всех старых, надо удалить из битвы
    for (j = 0, len1 = ref1.length; j < len1; j++) {
      battlerId = ref1[j];
      if (!ANBattleManager.battleData.actors.contains(battlerId)) {
        $gameParty.removeActor(battlerId);
        BattleManager.nSafeRemoveActor();
      }
    }
    $gameTemp._previousNetBattleActors = [];
    $gamePlayer.refresh();
    $gameMap.requestRefresh();
    $gameTemp.requestBattleRefresh();
  };
  _.nOnBattleStarted = function() {
    // * Отправляем на сервер, что мы начали бой
    ANBattleManager.onBattleStarted();
  };
  _.nOnBattleEnd = function() {
    // * Отправляем на сервер, что мы покинули (закончили) бой
    ANBattleManager.onBattleEnd();
  };
  _.nUpdateBattleProcess = function() {
    var actor, enemy, i, j, len, len1, ref, ref1;
    // * За отправку данных отвечает только мастер боя
    if (ANGameManager.isBattleMaster()) {
      ref = $gameParty.battleMembers();
      for (i = 0, len = ref.length; i < len; i++) {
        actor = ref[i];
        actor.updateDataObserver();
      }
      ref1 = $gameTroop.members();
      for (j = 0, len1 = ref1.length; j < len1; j++) {
        enemy = ref1[j];
        enemy.updateDataObserver();
      }
    }
  };
  _.nRefreshSharedBattle = function() {
    // * Обновить спрайты врагов
    return this._spriteset.nRefreshNetBattle();
  };
})();

// ■ END Scene_Battle.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_Boot.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__initialize, _;
  //@[DEFINES]
  _ = Scene_Boot.prototype;
  // * Загружаем и инициализируем сетевой код
  //@[ALIAS]
  ALIAS__initialize = _.initialize;
  _.initialize = function() {
    ALIAS__initialize.call(this);
    ANET.System.initSystem();
  };
})();

// ■ END Scene_Boot.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_Equip.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__needsPageButtons, _;
  //@[DEFINES]
  _ = Scene_Equip.prototype;
  //@[ALIAS]
  ALIAS__needsPageButtons = _.needsPageButtons;
  _.needsPageButtons = function() {
    // * В сетевом режиме нельзя переключать персонажей
    if (ANNetwork.isConnected()) {
      return false;
    } else {
      return ALIAS__needsPageButtons.call(this);
    }
  };
})();

// ■ END Scene_Equip.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_Item.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Scene_Item.prototype;
})();

// ■ END Scene_Item.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_ItemBase.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__canUse, _;
  //@[DEFINES]
  _ = Scene_ItemBase.prototype;
  //@[ALIAS]
  ALIAS__canUse = _.canUse;
  _.canUse = function() {
    // * Пока нельзя применять навык на другого сетевого игрока
    // * т.к. Observer работает только от другого игрока (эффекта не будет)
    if (ANNetwork.isConnected()) {
      if (this.user() === $gameParty.networkLeader()) {
        return ALIAS__canUse.call(this);
      } else {
        return false;
      }
    } else {
      return ALIAS__canUse.call(this);
    }
  };
})();

// ■ END Scene_ItemBase.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_Load.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__initialize, ALIAS__onLoadFailure, ALIAS__terminate, _;
  //@[DEFINES]
  _ = Scene_Load.prototype;
  //@[ALIAS]
  ALIAS__initialize = _.initialize;
  _.initialize = function() {
    ALIAS__initialize.call(this);
    if (ANNetwork.isConnected() && $gameTemp._nRequestLoadNetworkGame === true) {
      if (KDCore.isMZ()) {
        this.nLoadNetworkGameFromSavefile(); // * В MV в одном потоке, не переключает сцену сразу после инициализации
      } else {
        setTimeout((() => {
          return this.nLoadNetworkGameFromSavefile();
        }), 1);
      }
    }
  };
  //@[ALIAS]
  ALIAS__onLoadFailure = _.onLoadFailure;
  _.onLoadFailure = function() {
    // * Своя обработка ошибки загрузки в сетевом режиме
    if (ANNetwork.isConnected() && $gameTemp._nRequestLoadNetworkGame === true) {
      this.nOnLoadFailure();
    } else {
      ALIAS__onLoadFailure.call(this);
    }
  };
  //@[ALIAS]
  ALIAS__terminate = _.terminate;
  _.terminate = function() {
    ALIAS__terminate.call(this);
    // * Сбросим флаг
    $gameTemp._nRequestLoadNetworkGame = false;
  };
})();

// ■ END Scene_Load.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_Load.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__onSavefileOk, _;
  //@[DEFINES]
  _ = Scene_Load.prototype;
  if (KDCore.isMZ()) {
    return;
  }
  // * В MV версии нету проверки на Enabled, так что доп. проверка
  //@[ALIAS]
  ALIAS__onSavefileOk = _.onSavefileOk;
  _.onSavefileOk = function() {
    // * Если сетевое сохранение, то НЕЛЬЗЯ загружать в обычной сцене загрузки
    if (DataManager.nIsNetworkSaveFile(this.savefileId())) {
      this.onLoadFailure();
    } else {
      ALIAS__onSavefileOk.call(this);
    }
  };
  
  // * В MV нету этого метода, добавим и будем использовать для загрузки сетевых сохранений
  //?[NEW]
  _.executeLoad = function(savefileId) {
    if (DataManager.loadGame(savefileId)) {
      this.onLoadSuccess();
    } else {
      this.onLoadFailure();
    }
  };
})();

// ■ END Scene_Load.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_Load.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Scene_Load.prototype;
  _.nLoadNetworkGameFromSavefile = function() {
    var savefileId;
    savefileId = DataManager.nGetNetworkSaveFileIdByUniqueId(ANNetwork.room.uniqueSaveID);
    if (savefileId < 0) {
      this.nOnLoadFailure();
    } else {
      this.executeLoad(savefileId);
    }
  };
  _.nOnLoadFailure = function() {
    HUIManager.notifyError("Can't load Save file!");
    // * Через timeout а то не успевает, если сразу ошибка
    setTimeout((function() {
      return SceneManager.goto(Scene_Title);
    }), 1);
  };
})();

// ■ END Scene_Load.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_Map.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__createSpriteset, ALIAS__onMapLoaded, ALIAS__onMapTouch, ALIAS__shouldAutosave, ALIAS__stop, ALIAS__updateCallMenu, _;
  //@[DEFINES]
  _ = Scene_Map.prototype;
  //@[ALIAS]
  ALIAS__onMapLoaded = _.onMapLoaded;
  _.onMapLoaded = function() {
    ALIAS__onMapLoaded.call(this);
    if (ANNetwork.isConnected()) {
      ANGameManager.onMapLoaded();
      $gameParty.nRefreshNetworkActors();
      // * Сбрасываем режим "следовать"
      $gameTemp._netAutoFollowActorId = null;
    }
    // * Открыть (или нет) чат
    ANET.UI.openChatAfterMapLoaded();
    // * На всякий случай (для чата и торговли)
    $gameTemp.kdButtonUnderMouse = null;
    $gameTemp.floatingWindowUnderMouse = null;
    setTimeout((function() {
      $gameTemp.kdButtonUnderMouse = null;
      return $gameTemp.floatingWindowUnderMouse = null;
    }), 10);
  };
  
  // * В сетевом режиме автосхранения отключены
  //@[ALIAS]
  ALIAS__shouldAutosave = _.shouldAutosave;
  _.shouldAutosave = function() {
    if (ANNetwork.isConnected()) {
      return false;
    } else {
      return ALIAS__shouldAutosave.call(this);
    }
  };
  //@[ALIAS]
  // * Создаём интерфейс
  ALIAS__createSpriteset = _.createSpriteset;
  _.createSpriteset = function() {
    ALIAS__createSpriteset.call(this);
    if (!ANNetwork.isConnected()) {
      return;
    }
    this._netUI = new ANET.Spriteset_UI();
    this.addChild(this._netUI);
    this.nCreateModalWindow();
  };
  // * Запрет движения при нажатии на UI элементы
  //@[ALIAS]
  ALIAS__onMapTouch = _.onMapTouch;
  _.onMapTouch = function() {
    if (ANNetwork.isConnected()) {
      if (ANET.UI.isUITouched()) {
        return;
      }
    }
    ALIAS__onMapTouch.call(this);
  };
  // * Закрываем интерфейс
  //@[ALIAS]
  ALIAS__stop = _.stop;
  _.stop = function() {
    ALIAS__stop.call(this);
    ANET.UI.terminate();
  };
  //@[ALIAS]
  ALIAS__updateCallMenu = _.updateCallMenu;
  _.updateCallMenu = function() {
    if (TouchInput.isCancelled() && ANNetwork.isConnected()) {
      // * Если действие ANET, то НЕ вызываем меню
      if (this.nOnMapCancelTouchComplete()) {
        return;
      }
    }
    return ALIAS__updateCallMenu.call(this);
  };
})();

// ■ END Scene_Map.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_Map.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Scene_Map.prototype;
  //?EVENT
  // * Когда игрок выходит или входит в комнату (покидает игру)
  _.netOn_lobby_refreshRoomData = function() {
    //TODO: Если игрок отключился, надо общее событие!
    $gameParty.nRefreshNetworkActors();
    $gameMap.refreshNetworkCharacters();
  };
  // * Модальное окно вопроса
  _.nCreateModalWindow = function() {
    //TODO: from parameters
    // * Добавляем на сцену карты (чтобы окно было всегда выше всех)
    this._netUI.netModalDialog = new FWindow_InGameModalDialog(this, 280, 120);
  };
  // * Проверка нажатия правой кнопки мыши
  // * Используется для выполнения своих действий (например открытия меню игрока)
  // * Сейчас этот метод отрабатывает только меню игрока
  // * Устанавливаем на Spriteset_UI, чтобы был доступ проще
  _.nOnMapCancelTouchComplete = function() {
    var e, netCharUnderCursor, x, y;
    if (!ANET.PP.isInGamePlayerMenuAllowed()) {
      return false;
    }
    try {
      if (ANET.UI.isPlayerMenuIsOpen()) {
        ANET.UI.closePlayerMenu();
        return true;
      } else {
        ({x, y} = TouchInput.toMapPoint());
        netCharUnderCursor = $gameMap.nGetNetCharXY(x, y);
        if (netCharUnderCursor == null) {
          return false;
        }
        ANET.UI.playClickEffect();
        ANET.UI.openNetPlayerMenuFor(netCharUnderCursor);
        return true; // * не открывать меню в этом случае
      }
    } catch (error) {
      e = error;
      ANET.w(e);
    }
    return false;
  };
})();

// ■ END Scene_Map.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_Menu.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Scene_Menu.prototype;
})();

// ■ END Scene_Menu.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_MenuBase.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Scene_MenuBase.prototype;
  //?EVENT
  // * Когда пришли какие-либо данные DataObserver
  _.netOn_game_observerData = function() {
    return this.refreshNetwork();
  };
  //?EVENT
  // * Когда игрок выходит или входит в комнату (покидает игру)
  _.netOn_lobby_refreshRoomData = function() {
    var e, ref;
    try {
      $gameParty.nRefreshNetworkActors();
      // * Если есть окно с персонажами, обновить его
      // * Можно было вынести в класс Scene_Menu, но не хочу плодить одинаковые методы
      // * Так как тут в Scene_MenuBase тоже нужен метод
      if ((ref = this._statusWindow) != null) {
        ref.refresh();
      }
    } catch (error) {
      //TODO: Сделать как и в ALphaNET общий Refresh всех окон сцены
      e = error;
      ANET.w(e);
    }
  };
  // * Обновить все окна при изменениях данных из сети
  _.refreshNetwork = function() {
    var child, e, i, len, ref;
    if (!ANNetwork.isConnected()) {
      return;
    }
    try {
      this.updateActor();
      if (this._windowLayer == null) {
        return;
      }
      ref = this._windowLayer.children;
      for (i = 0, len = ref.length; i < len; i++) {
        child = ref[i];
        if ((child != null) && (child.refresh != null)) {
          child.refresh();
        }
      }
      return;
    } catch (error) {
      e = error;
      ANET.w(e);
    }
  };
})();

// ■ END Scene_MenuBase.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
// * Сцена ввода сообщения для чата
var Scene_NetChatInput;

Scene_NetChatInput = class Scene_NetChatInput extends Scene_MenuBase {
  constructor() {
    super();
  }

  create() {
    super.create();
    if ($gameTemp._nChatLastChannelId == null) {
      $gameTemp._nChatLastChannelId = 0;
    }
    this._showNameInput();
    this._createGroupButtons();
    this._createOkButton();
    // * Делаем фокус ввода
    setTimeout((function() {
      return HUIManager.focusInput();
    }), 100);
  }

  stop() {
    $gameTemp._nChatLastChannelId = this.buttonsGroup.getSelectedIndex();
    this._hideNameInput();
    return super.stop();
  }

  update() {
    super.update();
    if (Input.isCancel()) {
      this.popScene();
    } else if (Input.isTriggered("ok")) {
      this.onOkClick();
    }
  }

  onOkClick() {
    var msg;
    //%[I] Добавить эмоции (как было в ### Alpha NET ###)
    msg = HUIManager.getInputValue();
    if (String.any(msg)) {
      //TODO: Добавить обрезку по максимальной длине сообщения!
      //%[I] Ограничение длины сообщения
      //TODO: Ограничеть escape символы (чтобы нельзя было переменные выводить)
      //TODO: Заменять \I на мой ICS с параметрами из настроек (размером только)
      this._sendMessageToServer(msg);
    }
    return this.popScene();
  }

};

(function() {  //╒═════════════════════════════════════════════════════════════════════════╛
  // ■ Scene_NetChatInput.coffee
  //╒═════════════════════════════════════════════════════════════════════════╛
  //---------------------------------------------------------------------------
  var _;
  //@[DEFINES]
  _ = Scene_NetChatInput.prototype;
  _._sendMessageToServer = function(msg) {
    var channelId, e;
    try {
      channelId = this.buttonsGroup.getSelectedIndex();
      console.log("Send message from chat: " + msg);
      if (ANNetwork.isConnected()) {
        ANGameManager.sendMyChatMessage(channelId, msg);
      }
    } catch (error) {
      e = error;
      ANET.w(e);
    }
  };
  _._showNameInput = function() {
    HUIManager.showInput("Enter your message...");
    HUIManager.setInputValue("");
  };
  _._hideNameInput = function() {
    return HUIManager.removeInput();
  };
  //TODO: Customizable
  _._createGroupButtons = function() {
    var y;
    this.buttonsGroup = new KDCore.Sprite_ButtonsGroup([
      {
        image: "nzButton_ChatGroup_All",
        position: [0,
      0]
      },
      {
        image: "nzButton_ChatGroup_Map",
        position: [100,
      0]
      }
    ], $gameTemp._nChatLastChannelId, null);
    if (KDCore.isMZ()) {
      y = this.buttonY();
    } else {
      y = 6;
    }
    this.buttonsGroup.move(4, y);
    this.addChild(this.buttonsGroup);
  };
  _._createOkButton = function() {
    if (KDCore.isMZ()) {
      this._okButton = new Sprite_Button("ok");
    } else {
      this._okButton = new KDCore.ButtonM("nzButton_ChatSendMV", false, "Alpha");
      this._okButton.addClickHandler(this.onOkClick.bind(this));
      this._okButton.anchor.x = 0.5;
    }
    this._okButton.x = Graphics.boxWidth / 2 - this._okButton.width / 2;
    this._okButton.y = Graphics.boxHeight / 2 - this._okButton.height / 2;
    this.addWindow(this._okButton);
  };
})();

// ■ END Scene_NetChatInput.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
// * Используется базовая сцена Scene_Item (выбора предмета)
var Scene_NetItemsForTrade;

Scene_NetItemsForTrade = class Scene_NetItemsForTrade extends Scene_Item {
  constructor() {
    super();
  }

  //$[OVER]
  onItemOk() {
    this._nItem = this.item();
    this._nCount = 1;
    if ($gameParty.numItems(this._nItem) > 1) {
      this.nShowNumberInputWindow();
    } else {
      this._onItemOkFinal();
    }
  }

  _onItemOkFinal() {
    // * Remove Item handling
    if (this._nItem.id === 0) {
      this._makeChangeInTradeItems(null, 0);
      this.popScene();
    } else if (this._nCount >= 1) {
      this._makeChangeInTradeItems(this._nItem, this._nCount);
      this.popScene();
    } else {
      this._itemWindow.activate();
    }
  }

  _makeChangeInTradeItems(item, count) {
    return ANTradeManager.onTradeChange(item, count);
  }

  
    //?[NEW]
  nShowNumberInputWindow() {
    this._nNumberInputWindow = new Window_NTradeItemNumberInput();
    this.addWindow(this._nNumberInputWindow);
    this._nNumberInputWindow.setItem(this._nItem);
    this._nNumberInputWindow.setOkHandler(() => {
      this._nCount = this._nNumberInputWindow._number;
      return this._onItemOkFinal();
    });
    this._nNumberInputWindow.start();
  }

};


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_NetworkGameMenu.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
var Scene_NetworkGameMenu;

Scene_NetworkGameMenu = class Scene_NetworkGameMenu extends Scene_MenuBase {
  constructor() {
    super();
    return;
  }

  create() {
    super.create();
    // * Например если вернулись "назад" на эту сцену, то не надо снова соединяться
    if (!ANNetwork.isConnected()) {
      this._initNetwork();
    } else {
      this._initSceneComponents();
      this.refreshWelcomeText();
    }
  }

  update() {
    var ref;
    super.update();
    this._updateBackButton();
    this._updateRandomJoin(); //2
    if ((ref = this._playerCountRefreshThread) != null) {
      ref.update();
    }
  }

  stop() {
    HUIManager.removeInput();
    HUIManager.hideLoader();
    return super.stop();
  }

  refreshWelcomeText() {
    var e, ref;
    try {
      return (ref = this._welcomeLine) != null ? ref.drawTextFull(ANET.LV("welcome", ANGameManager.myPlayerData().name)) : void 0;
    } catch (error) {
      e = error;
      return ANET.w(e);
    }
  }

  refreshPlayersCountText(count = 0) {
    var e;
    try {
      if (this._playerCountText == null) {
        return;
      }
      this._playerCountText.clear();
      return this._playerCountText.drawTextFull(ANET.LV("playersCount", count));
    } catch (error) {
      e = error;
      return ANET.w(e);
    }
  }

  //?EVENT
  netOn_lobby_changePlayerName() {
    var ref;
    this.refreshWelcomeText();
    if ((ref = this._playerCountRefreshThread) != null) {
      ref.call();
    }
  }

  //?EVENT
  // * Когда игрок выходит или входит в комнату
  // * Этот метод тут, чтобы перекрыть Scene_MenuBase реализацию
  // * Так как пока нет необходимости $gameParty менять
  netOn_lobby_refreshRoomData() {} // * NOTHING

};

(function() {
  var _;
  //@[DEFINES]
  _ = Scene_NetworkGameMenu.prototype;
  _._initNetwork = function() {
    HUIManager.showLoader();
    ANNetwork.initSystem();
    ANNetwork.setConnection(this._onConnectionStatus.bind(this));
  };
  //?EVENT
  // * 0 - error, 1 - connect
  _._onConnectionStatus = function(statusCode) {
    switch (statusCode) {
      case 0:
        this._onConnectionRefused();
        break;
      case 1:
        this._onConnectionGood();
    }
  };
  _._onConnectionRefused = function() {
    HUIManager.hideLoader();
    HUIManager.notifyError("Server not response in time");
    return this.popScene();
  };
  _._onConnectionGood = function() {
    //TODO: Server version check
    HUIManager.hideLoader();
    if (!ANGameManager.isInited()) {
      ANGameManager.init();
    }
    HUIManager.notifySucess("Connected to server");
    return this._initSceneComponents();
  };
  // * Отрисовка меню, если соединение  было установлено
  _._initSceneComponents = function() {
    this._createNetworkMenu(); //1
    this._createWelcomeText(); //1
    HUIManager.showInput("Room Name...");
    this._createServerPlayerCountText();
    this._createPlayerCountRefreshThread();
  };
  _._updateBackButton = function() {
    var ref;
    if (KDCore.isMV()) {
      return;
    }
    // * Тут может быть вылет, если нет проверки null (?)
    return (ref = this._cancelButton) != null ? ref.visible = !HUIManager.isLoaderActive() : void 0;
  };
})();

// ■ END Scene_NetworkGameMenu.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_NetworkGameMenu.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Scene_NetworkGameMenu.prototype;
  _._createWelcomeText = function() {
    //TODO: From UI Text Component with user settings
    this._welcomeLine = KDCore.Sprite.FromBitmap(400, 60);
    this._welcomeLine.bitmap.fontSize = 38;
    this._welcomeLine.x = Graphics.width / 2 - this._welcomeLine.bitmap.width / 2;
    this._welcomeLine.y = 80;
    return this.addChild(this._welcomeLine);
  };
  _._createNetworkMenu = function() {
    var rect, wh, ww, wx, wy;
    ww = 400;
    wh = this.calcWindowHeight(4, true);
    wx = (Graphics.boxWidth - ww) / 2;
    wy = (Graphics.boxHeight - wh) / 2;
    rect = new Rectangle(wx, wy, ww, wh);
    this._commandsWindow = new Window_NetworkGameMenu(rect);
    this._commandsWindow.setHandler('cancel', this.popScene.bind(this));
    this._commandsWindow.setHandler('createRoom', this.commandCreateRoomMenu.bind(this));
    this._commandsWindow.setHandler('joinRoom', this.commandJoinRoomMenu.bind(this));
    this._commandsWindow.setHandler('joinRandRoom', this.commandJoinRandRoomMenu.bind(this)); //2
    this._commandsWindow.setHandler('settings', this.commandSettings.bind(this));
    return this.addWindow(this._commandsWindow);
  };
  _._createServerPlayerCountText = function() {
    this._playerCountText = KDCore.Sprite.FromBitmap(280, 40);
    this._playerCountText.bitmap.fontSize = 18;
    this._playerCountText.x = Graphics.width / 2 - this._playerCountText.bitmap.width / 2;
    this._playerCountText.y = this._commandsWindow.y + this._commandsWindow.height + 20;
    return this.addChild(this._playerCountText);
  };
  _._createPlayerCountRefreshThread = function() {
    var refreshMethod;
    refreshMethod = function() {
      //return if SceneManager.isSceneChanging()
      return ANNetwork.callback(NMS.Lobby("playersCountOnServ"), (count) => {
        var e;
        try {
          if (SceneManager.isSceneChanging()) {
            return;
          }
          return this.refreshPlayersCountText(count);
        } catch (error) {
          e = error;
          return ANET.w(e);
        }
      });
    };
    this._playerCountRefreshThread = new KDCore.TimedUpdate(300, refreshMethod.bind(this));
    this._playerCountRefreshThread.call();
  };
  _.commandCreateRoomMenu = function() {
    // * Сохраняем название команты
    $gameTemp._nLastRoomName = HUIManager.getInputValue();
    $gameTemp._nIsForwardTransitionToRoomTypeMenu = true;
    SceneManager.push(Scene_NetworkRoomTypeSelect);
  };
  _.commandJoinRoomMenu = function() {
    return SceneManager.push(Scene_NetworkRoomsList);
  };
  _.commandSettings = function() {
    return SceneManager.push(Scene_NetworkSettings);
  };
})();

// ■ END Scene_NetworkGameMenu.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_NetworkGameMenu.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Scene_NetworkGameMenu.prototype;
  // * Методы обработки подключения к случайной комнате
  _.commandJoinRandRoomMenu = function() {
    this.roomsList = null; // * Обнуляем список комнат
    this.requestRoomsListFromServer();
    this._waitRoomsForRandomJoin = true;
  };
  _.requestRoomsListFromServer = function() {
    ANNetwork.get(NMS.Lobby("getRoomsList"), (result) => {
      return this.roomsList = result;
    }, () => {
      // * Timeout
      console.log("Server not returns rooms list in time");
      return this._onCantJointRandomRoom();
    });
  };
  _._onCantJointRandomRoom = function() {
    this._waitRoomsForRandomJoin = false;
    this._commandsWindow.activate();
    HUIManager.notifyError("No available open rooms to join");
  };
  // * Ждём список комнат и пытаемся подключиться к случайной
  _._updateRandomJoin = function() {
    var randomRoomName;
    if (!this._waitRoomsForRandomJoin) {
      return;
    }
    if (this.roomsList == null) {
      return;
    }
    this._waitRoomsForRandomJoin = false;
    this.applyFiltersToRoomList();
    if (this.roomsList.length === 0) {
      this._onCantJointRandomRoom();
    } else {
      randomRoomName = this.roomsList.sample().name;
      this.joinToRoomRequest(randomRoomName);
    }
  };
  _.applyFiltersToRoomList = function() {
    if (this.roomsList == null) {
      this.roomsList = [];
    }
    if (this.roomsList.length === 0) {
      return;
    }
    this.roomsList = this.roomsList.filter((r) => {
      return this.isProperRoomToJoin(r);
    });
  };
  _.isProperRoomToJoin = function(roomData) {
    return NetRoomDataWrapper.isRoomProperToJoin(roomData);
  };
  _.joinToRoomRequest = function(roomName) {
    ANNetwork.get(NMS.Lobby("joinToRoom", roomName), (result) => {
      return this._onJoinedToRoom(result);
    }, () => {
      console.log("Can't join to Room, server not response in time");
      return this._commandsWindow.activate();
    });
  };
  //?EVENT
  _._onJoinedToRoom = function(roomData) {
    if (roomData == null) {
      console.log("Can't join to Room, Room not exists anymore");
      this._commandsWindow.activate();
    } else {
      ANNetwork.setRoomJoin(roomData);
      SceneManager.push(Scene_NetworkRoom);
    }
  };
})();

// ■ END Scene_NetworkGameMenu.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_NetworkInGameTrade.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------

//%[I] Сейчас сцена торговли использует доп. сцену выбора предметов (стандартную)
// * Это не очень правильно, стоит сделать всё на одной сцене!
var Scene_NetworkInGameTrade;

Scene_NetworkInGameTrade = class Scene_NetworkInGameTrade extends Scene_MenuBase {
  constructor() {
    super();
  }

  //?EVENT
  netOn_game_playersData() {}

  //?EVENT COMMON
  // * Изменились данные другого игрока, возможно он вышел из сцены торговли
  // * либо disconnect
  // * Тут можно делать доп. проверку
  netOn_common_forClients_trade_items() {
    this.onAnotherPlayerChangeItems();
  }

  //?EVENT COMMON
  netOn_common_forClients_trade_status() {
    this.onAnotherPlayerChangeStatus();
  }

  //?EVENT COMMON
  netOn_common_trade_complete() {
    setTimeout((() => {
      return this.onTradeCancel();
    }), 10);
  }

  create() {
    super.create();
    this._inReadyState = false;
    this._preloadResources();
    this._createBackgroundParts();
    this._createActorInfoA();
    this._createActorInfoB();
    this._createTradeWindowA();
    this._createTradeWindowB();
    this._createForegroundParts();
    this.checkAnotherPlayerSceneStateThread = new KDCore.TimedUpdate(30, this._checkAnotherPlayerSceneStateTick.bind(this));
  }

  //TODO: parameters
  getSettings() {
    return {
      tradeWindowSize: {
        w: 240,
        h: 300
      }
    };
  }

  //%[I] Показывать текущее количество золота игрока, чтобы было удобней
  onTradeCancel() {
    "CANCEL".p();
    return this.popScene();
  }

  //@[OUTER] Вызывается когда приходят данные с сервера в ANTradeManager
  onAnotherPlayerChangeItems() {
    // * Если я уже был готов, то сброс и снова активация окна
    if (this._inReadyState === true) {
      this._resetTradeReadyStatus();
    }
    // * Обновить список торговли (предметов) другого игрока
    this.tradeWindowB.sub().refresh();
  }

  //@[OUTER] Вызывается когда другой игро меняет свой статус (готов или нет)
  onAnotherPlayerChangeStatus() {
    // * Если я уже был готов и статус положительный, то торговля удалась
    if (this._inReadyState === true) {
      if ($gameTemp._netHisTradeReadyStatus === true) {
        ANTradeManager.onTradeShouldComplete();
        // * Так как Common - это broadcast, то у себя сам вызываю метод завершения торговли
        this.netOn_common_trade_complete();
      } else {
        this._resetTradeReadyStatus();
      }
    }
    this.tradeWindowB.sub().refresh();
  }

  update() {
    var ref;
    super.update();
    return (ref = this.checkAnotherPlayerSceneStateThread) != null ? ref.update() : void 0;
  }

  //! Этот метод вызывается и когда появляется сцена выбора предмета!
  stop() {
    var ref, ref1;
    super.stop();
    // * Косяк KDCore
    $gameTemp.kdButtonUnderMouse = null;
    // * Это надо обязательно, чтобы не остался в Game_Temp
    if ((ref = this.tradeWindowA) != null) {
      ref.close();
    }
    if ((ref1 = this.tradeWindowB) != null) {
      ref1.close();
    }
    // * На всякий случай
    HUIManager.hideWaitingInfo();
  }

};

(function() {
  var _;
  //@[DEFINES]
  _ = Scene_NetworkInGameTrade.prototype;
  _._checkAnotherPlayerSceneStateTick = function() {
    var e;
    try {
      if (!ANTradeManager.isTradeParticipantIsValid()) {
        return this.onTradeCancel();
      }
    } catch (error) {
      e = error;
      return ANET.w(e);
    }
  };
  _._preloadResources = function() {
    //TODO: from parameters
    ImageManager.loadAA("nzTradeButton_00");
    ImageManager.loadAA("nzTradeButton_01");
    ImageManager.loadAA("nzTradeStatus_NotReady");
    ImageManager.loadAA("nzTradeStatus_Ready");
  };
  _._createBackgroundParts = function() {
    var i, item, len, parts;
    parts = [
      {
        image: "nzTradeWindowPortraitBack",
        position: {
          x: 216,
          y: 72
        }
      },
      {
        image: "nzTradeWindowPortraitBack",
        position: {
          x: 456,
          y: 72
        }
      }
    ];
    for (i = 0, len = parts.length; i < len; i++) {
      item = parts[i];
      this._createAndAddImage(item);
    }
  };
  // * {image, position {x, y}}
  _._createAndAddImage = function(item) {
    var img, x, y;
    img = new KDCore.UI.Sprite_UIImage({
      visible: true,
      image: item.image
    });
    x = eval(item.position.x);
    y = eval(item.position.y);
    img.x = x;
    img.y = y;
    this.addChild(img);
  };
  _._createActorInfoA = function() {
    var actor, actorAFace;
    actor = $gameParty.networkLeader();
    actorAFace = new KDCore.UI.Sprite_UIFace({
      visible: true,
      faceName: actor.faceName(),
      faceIndex: actor.faceIndex(),
      mirror: true,
      size: 130
    });
    actorAFace.move(220, 76);
    return this.addChild(actorAFace);
  };
  _._createActorInfoB = function() {
    var actor, actorBFace;
    actor = nAPI.getPlayerInfo("actor", "info", ANTradeManager.getTradeParticipantData());
    actorBFace = new KDCore.UI.Sprite_UIFace({
      visible: true,
      faceName: actor.faceName(),
      faceIndex: actor.faceIndex(),
      mirror: false,
      size: 130
    });
    actorBFace.move(462, 76);
    return this.addChild(actorBFace);
  };
  _._createTradeWindowA = function() {
    var size, tradeListWindow;
    size = new Rectangle(0, 0, 240, 300);
    tradeListWindow = new Window_NTradeItemsList(size, 0);
    tradeListWindow.setHandler('ok', this._onTradeWindowA_ok.bind(this));
    tradeListWindow.setHandler('cancel', this.onTradeCancel.bind(this));
    tradeListWindow.refresh();
    tradeListWindow.select(1); // * first slot for item
    tradeListWindow.activate();
    this.tradeWindowA = KDCore.FloatingWindow.StaticWindow(this, tradeListWindow);
    this.tradeWindowA.x = (Graphics.width / 2 - 240) - 30;
    this.tradeWindowA.y = (Graphics.height / 2) - 100;
    this.tradeWindowA.open();
  };
  //%[Обработка нажатия на пункт]
  _._onTradeWindowA_ok = function() {
    var index;
    index = this.tradeWindowA.sub().index();
    // * Запоминаем индекс выбранного пункта
    $gameTemp.__netTradeItemIndex = index;
    if (this.tradeWindowA.sub().isCurrentIndexTradeCommand()) {
      this._onTradeConfirmClick();
    } else if (this.tradeWindowA.sub().isCurrentIndexGoldCommand()) {
      this._nNumberInputWindow = new Window_NTradeItemNumberInput();
      this.addWindow(this._nNumberInputWindow);
      // * For Gold
      this._nNumberInputWindow.setItem({
        id: ANTradeManager.TradeGoldItemId
      });
      this._nNumberInputWindow.setOkHandler(() => {
        var count;
        count = this._nNumberInputWindow._number;
        return this._onGoldNumberChanged(count);
      });
      this.tradeWindowA.close();
      this.tradeWindowB.close();
      this._nNumberInputWindow.start();
    } else {
      SceneManager.push(Scene_NetItemsForTrade);
    }
  };
  _._onTradeConfirmClick = function() {
    var e, name;
    try {
      //%[I] Скрывать кнопку "Назад" при ожидании
      //%[I] Анимированный текст ... (три точки) в надписи ожидания
      name = ANTradeManager.getTradeParticipantData().name; // * get other trade parctipian name
      HUIManager.showWaitingInfo('Waiting ' + name, '');
      this._inReadyState = true;
      ANTradeManager.onTradeReady(true);
    } catch (error) {
      e = error;
      ANET.w(e);
      this.onTradeCancel();
    }
  };
  _._onGoldNumberChanged = function(count) {
    ANTradeManager.onTradeChange({
      id: ANTradeManager.TradeGoldItemId
    }, count);
    this.tradeWindowA.open();
    this.tradeWindowB.open();
    this.tradeWindowA.sub().refresh();
    this.tradeWindowA.sub().activate();
  };
  _._createTradeWindowB = function() {
    var size, tradeListWindow;
    size = new Rectangle(0, 0, 240, 300);
    tradeListWindow = new Window_NTradeItemsList(size, 1);
    tradeListWindow.refresh();
    this.tradeWindowB = KDCore.FloatingWindow.StaticWindow(this, tradeListWindow);
    this.tradeWindowB.x = (Graphics.width / 2) + 30;
    this.tradeWindowB.y = this.tradeWindowA.y;
    this.tradeWindowB.open();
  };
  _._createForegroundParts = function() {
    var i, item, len, parts;
    parts = [
      {
        image: "nzTradeHeader",
        position: {
          x: "Graphics.width / 2 - 334",
          y: -26
        }
      }
    ];
    for (i = 0, len = parts.length; i < len; i++) {
      item = parts[i];
      this._createAndAddImage(item);
    }
  };
  _._resetTradeReadyStatus = function() {
    this._inReadyState = false;
    HUIManager.hideWaitingInfo();
    this.tradeWindowA.sub().activate();
    return ANTradeManager.onTradeReady(false);
  };
})();

// ■ END Scene_NetworkInGameTrade.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
var Scene_NetworkRoom;

Scene_NetworkRoom = class Scene_NetworkRoom extends Scene_MenuBase {
  constructor() {
    super();
    this._startingGameTransition = false;
  }

  create() {
    super.create();
    this.room = ANNetwork.room;
    this.createRoomTitle();
    this.createCommands();
    this.createPlayersList();
    if (ANET.PP.isActorSelectionAllowed() && !this.isLoadGame()) {
      this.createActorSelectWindow();
    }
    if (this.isLoadGame()) {
      this.prepareSaveFile();
    }
    this.refreshRoom();
  }

  start() {
    super.start();
    ANNetwork.requestRoomRefresh();
    // * Так как есть искуственная задержка загрузки сцены на MV
    if (KDCore.isMV()) {
      setTimeout((function() {
        try {
          return ANNetwork.requestRoomRefresh();
        } catch (error) {

        }
      }), 300);
    }
  }

  isBottomHelpMode() {
    return false;
  }

  isLoadGame() {
    return ANET.Utils.isLoadGameRoom();
  }

  refreshRoom() {
    this.room = ANNetwork.room;
    this._refreshRoomTitle();
    this._refreshPlayerList();
    this._refreshActorsList();
    return this._windowCommands.refresh();
  }

  //?EVENT
  // * Когда игрок выходит или входит в комнату
  netOn_lobby_refreshRoomData() {
    // * Пришли данные о комнате (и игроках), надо обновить
    return this.refreshRoom();
  }

  //?EVENT
  // * Когда игрок выбирает персонажа
  netOn_game_playersData() {
    // * Пришли данные о комнате (и игроках), надо обновить
    return this.refreshRoom();
  }

  //?EVENT
  netOn_lobby_startGame() {
    this._startingGameTransition = true;
    if (this.isLoadGame()) {
      this.loadAndStartGame();
    } else {
      this.startNewGame();
    }
  }

  //?EVENT
  // * Когда закрывается комната, вызывается это событие
  netOn_lobby_roomClosed() {
    if (!this._shouldNotPopScene) {
      // * Из этой сцены мы возвращаемся в сетевое меню (если мы не мастер)
      // * Для мастера не надо, так как сцена и так закрывается сама и получается
      // * что возврат происходит на Scene_Title
      //TODO: Когда идёт запрос на подключение в запущенную игру надо его прервать!
      return this.popScene();
    }
  }

  update() {
    return super.update();
  }

  //TODO: Готов клиент или нет
  //if ANNetwork.isMasterClient() and Input.isTriggered('ok')
  //    ANNetwork.send(NMS.Lobby("startGame"))
  stop() {
    super.stop();
    // * Если TRUE - значит мы переходим на сцену с игрой и не надо закрывать коммнату
    if (this._startingGameTransition === true) {
      return;
    }
    if (ANNetwork.isMasterClient()) {
      this._shouldNotPopScene = true;
      return ANNetwork.closeRoom();
    } else {
      return ANNetwork.leaveRoom();
    }
  }

};

(function() {  //╒═════════════════════════════════════════════════════════════════════════╛
  // ■ Scene_NetworkRoom.coffee
  //╒═════════════════════════════════════════════════════════════════════════╛
  //---------------------------------------------------------------------------
  var _;
  //@[DEFINES]
  _ = Scene_NetworkRoom.prototype;
  _.startNewGame = function() {
    // * Сейчас нету _commandWindow, так что временно создадим его чтобы не было ошибки
    this._commandWindow = {
      close: function() {}
    };
    Scene_Title.prototype.commandNewGame.call(this);
  };
  _.loadAndStartGame = function() {
    // * Задаём флаг, что будем загружать сетевую игру
    $gameTemp._nRequestLoadNetworkGame = true;
    SceneManager.push(Scene_Load);
  };
  _.createRoomTitle = function() {
    this.createHelpWindow();
    return this._refreshRoomTitle();
  };
  _._refreshRoomTitle = function() {
    var ref, roomHostName;
    if (ANNetwork.isMasterClient()) {
      roomHostName = "\\C[1]" + ANGameManager.myPlayerData().name + " (you)";
    } else {
      if (this.room == null) {
        roomHostName = "Fetching...";
      } else {
        roomHostName = (ref = ANGameManager.getPlayerDataById(this.room.masterId)) != null ? ref.name : void 0;
      }
    }
    return this._helpWindow.setText("Room: %1, Host: %2".format(ANNetwork.room.name, roomHostName));
  };
  _._refreshPlayerList = function() {
    this._playersListWindow.refresh();
  };
  _.createCommands = function() {
    this._windowCommands = new Window_NetworkRoomCommands(new Rectangle(0, this._helpWindow.y + this._helpWindow.height, 600, 100));
    this._windowCommands.setHandler('cancel', this.popScene.bind(this));
    this._windowCommands.setHandler('leave', this.popScene.bind(this));
    this._windowCommands.setHandler('start', this._onStartRoomCommand.bind(this));
    this._windowCommands.setHandler('ready', this._onReadyInRoomCommand.bind(this));
    this._windowCommands.setHandler('character', this._onCharacterSelectCommand.bind(this));
    this._windowCommands.setHandler('joinInGame', this._onJoinAlreadyGameCommand.bind(this));
    this.addWindow(this._windowCommands);
    this._windowCommands.activate();
  };
  _._onStartRoomCommand = function() {
    if (this._isAllInRoomReady()) { // TODO: В Wrapper, так как окно тоже проверяет
      if (ANNetwork.isMasterClient()) {
        ANNetwork.send(NMS.Lobby("startGame"));
      }
    } else {
      this._windowCommands.activate();
    }
  };
  _._onReadyInRoomCommand = function() {};
  //TODO: Ничего пока нет
  _._onCharacterSelectCommand = function() {
    this._windowActorsList.show();
    this._windowActorsList.open();
    this._windowActorsList.activate();
    return this._playersListWindow.close();
  };
  //TODO: Флаги готовности, сбрасывать при нажатии Character
  // * См. readyPlayersIds у данных комнаты
  _._isAllInRoomReady = function() {
    return true;
  };
  _.createActorSelectWindow = function() {
    var wh, ww, wx, wy;
    ww = Graphics.width - 100;
    wh = Graphics.height - 260;
    wx = 50;
    wy = 240;
    this._windowActorsList = new Window_NetworkActorsList(new Rectangle(wx, wy, ww, wh));
    this._windowActorsList.setHandler('cancel', this._onActorSelectCancel.bind(this));
    this._windowActorsList.setHandler('ok', this._onActorSelectOk.bind(this));
    this._windowActorsList.hide();
    return this.addWindow(this._windowActorsList);
  };
  _._onActorSelectCancel = function() {
    return this._cancelActorSelection();
  };
  _._cancelActorSelection = function() {
    this._windowActorsList.close();
    this._windowCommands.activate();
    return this._playersListWindow.open();
  };
  _._onActorSelectOk = function() {
    var selectedActorId;
    selectedActorId = this._windowActorsList.selectedActorId();
    if (selectedActorId <= 0) {
      SoundManager.playBuzzer();
      this._windowActorsList.activate();
    } else {
      ANPlayersManager.sendBindActorFromLobby(selectedActorId, this._onBindActorResult.bind(this));
    }
  };
  _._onBindActorResult = function(resultFlag) {
    if (resultFlag === true) {
      this._cancelActorSelection();
    } else {
      SoundManager.playBuzzer();
      this._windowActorsList.activate();
    }
    this.refreshRoom();
  };
  _._refreshActorsList = function() {
    var ref;
    return (ref = this._windowActorsList) != null ? ref.refresh() : void 0;
  };
  _.createPlayersList = function() {
    var wh, ww, wx, wy;
    ww = Graphics.width - 100;
    wh = Graphics.height - 260;
    wx = 50;
    wy = 240;
    this._playersListWindow = new Window_NetworkRoomPlayersList(new Rectangle(wx, wy, ww, wh));
    this.addWindow(this._playersListWindow);
    this._refreshPlayerList();
  };
  _.prepareSaveFile = function() {
    var info;
    info = DataManager.nGetNetworkSaveInfoWithId(this.room.uniqueSaveID);
    if (info == null) {
      HUIManager.notifyError("Save file data not found!");
      console.warn("Save file with ID " + this.room.uniqueSaveID + " not found!");
      this.popScene.bind(this);
    } else {
      //TODO: На сервере нет проверки на занятость персонажа??? НЕТУ в 112
      ANPlayersManager.sendBindActorFromLobby(info.nMyActorId, this.onBindLoadedActorResult.bind(this));
    }
  };
  _.onBindLoadedActorResult = function(resultFlag) {
    if (resultFlag === false) {
      SoundManager.playBuzzer();
      HUIManager.notifyError("Can't load Actor data or Actor already used by another player");
      this.popScene.bind(this);
    } else {
      this.refreshRoom();
    }
  };
  _._onJoinAlreadyGameCommand = function() {
    console.log("Send request worldData");
    ANGameManager.sendStartedRoomGameDataRequest(this._onJoinedAlreadyStartedGameComplete.bind(this), () => {
      HUIManager.notifyError("Unable to join game");
      return this._windowCommands.activate();
    });
  };
  _._onJoinedAlreadyStartedGameComplete = function(data) {
    "!!! JOINED TO THE GAME !!!".p();
    StorageManager.loadObjectFormNet(data).then((content) => {
      console.info(content);
      this._startingGameTransition = true;
      // * Регистрируем себя в комнате (получаем Player Index)
      ANGameManager.sendJoinedToStartedGame();
      DataManager.createGameObjects();
      DataManager.extractSaveContents(content);
      DataManager.correctDataErrors();
      ANGameManager.applyJoinedDataCorrects();
      return SceneManager.goto(Scene_Map);
    }).catch(() => {
      HUIManager.notifyError("Unable to join game");
      return this._windowCommands.activate();
    });
  };
})();

// ■ END Scene_NetworkRoom.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
// * Сцена со списком комнат на сервере
var Scene_NetworkRoomsList;

Scene_NetworkRoomsList = class Scene_NetworkRoomsList extends Scene_MenuBase {
  constructor() {
    super();
  }

  create() {
    super.create();
    //TODO: Потом сделать чтобы сервер сам отправлял когда меняется список комнат
    // * Сейчас опасно, так как может быть уже 4 из 4, а информация не обновилась
    this._refreshRoomsListThread = new KDCore.TimedUpdate(60, this._requestRoomsListFromServer.bind(this));
    this._createRoomsList();
    this._requestRoomsListFromServer();
  }

  refreshRooms() {
    if (ANET.PP.isRoomFilterON()) {
      this.applyFilterToRooms();
    }
    return this._roomsListWindow.refreshRooms(this.roomsList);
  }

  //?VERSION
  applyFilterToRooms() {}

  update() {
    super.update();
    return this._refreshRoomsListThread.update();
  }

};

(function() {  //╒═════════════════════════════════════════════════════════════════════════╛
  // ■ PRIVATE.coffee
  //╒═════════════════════════════════════════════════════════════════════════╛
  //---------------------------------------------------------------------------
  var _;
  //@[DEFINES]
  _ = Scene_NetworkRoomsList.prototype;
  _._requestRoomsListFromServer = function() {
    // * В первый раз показываем Loader
    if (this.roomsList == null) {
      HUIManager.showLoader();
    }
    ANNetwork.callback(NMS.Lobby("getRoomsList"), (result) => {
      // * Если сцена была закрыта, а комнаты пришли
      if (!(SceneManager._scene instanceof Scene_NetworkRoomsList)) {
        return;
      }
      this.roomsList = result;
      if (this.roomsList == null) {
        return;
      }
      this.refreshRooms();
      return HUIManager.hideLoader();
    });
    this.refreshRooms();
  };
  _._createRoomsList = function() {
    var wh, ww, wx, wy;
    ww = Graphics.width - 100;
    wh = Graphics.height - 140;
    wx = 50;
    wy = 70;
    this._roomsListWindow = new Window_NetworkRoomsList(new Rectangle(wx, wy, ww, wh));
    this._roomsListWindow.setHandler('cancel', this.popScene.bind(this));
    this._roomsListWindow.setHandler('ok', this._onJoinRoomCommand.bind(this));
    this._roomsListWindow.activate();
    return this.addWindow(this._roomsListWindow);
  };
  _._onJoinRoomCommand = function() {
    var roomData;
    roomData = this._roomsListWindow.getSelectedRoom();
    if (NetRoomDataWrapper.isRoomProperToJoin(roomData)) {
      ANNetwork.get(NMS.Lobby("joinToRoom", roomData.name), (result) => {
        return this._onJoinedToRoom(result);
      }, () => {
        console.log("Can't join to Room, server not response in time");
        return this._roomsListWindow.activate();
      });
    } else {
      SoundManager.playBuzzer();
      this._roomsListWindow.activate();
    }
  };
  
  //?EVENT
  _._onJoinedToRoom = function(roomData) {
    if (roomData == null) {
      console.log("Can't join to Room, Room not exists anymore");
      this._roomsListWindow.activate();
    } else {
      ANNetwork.setRoomJoin(roomData);
      SceneManager.push(Scene_NetworkRoom);
    }
  };
})();

// ■ END PRIVATE.coffee
//---------------------------------------------------------------------------

//TODO: События на обработку: список комнат обновлися, успешное подключение, плохое подключение


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_NetworkRoomTypeSelect.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------

// * Сцена выбора "Новая игра" или "Загрузить" после выбора "Создать комнату"

//TODO: Если опция по возможности сохранения отключена, надо сразу перепрыгивать эту сцену
var Scene_NetworkRoomTypeSelect;

Scene_NetworkRoomTypeSelect = class Scene_NetworkRoomTypeSelect extends Scene_MenuBase {
  constructor() {
    super();
  }

  //TODO: Заголовок какой-нибудь ???
  create() {
    super.create();
    // * Если параметр выключен (сохранять и загружать нельзя), то пропуск данной сцены
    if (!ANET.PP.isSaveLoadAllowed()) {
      // * Если мы входим в сцену, то пропуск сразу в комнату
      if ($gameTemp._nIsForwardTransitionToRoomTypeMenu === true) {
        $gameTemp._nIsForwardTransitionToRoomTypeMenu = null;
        this.commandNewGame();
      } else {
        this.popScene(); // * Выход, не нужны компоненты сцены
      }
      return;
    }
    this._initSceneComponents();
  }

};

(function() {  // ■ END Scene_NetworkRoomTypeSelect.coffee
  //---------------------------------------------------------------------------
  var _;
  //@[DEFINES]
  _ = Scene_NetworkRoomTypeSelect.prototype;
  _._initSceneComponents = function() {
    this._createRoomTypeSelectMenu();
    return this._createGamesToLoadList();
  };
  _._createRoomTypeSelectMenu = function() {
    var rect, wh, ww, wx, wy;
    ww = 400;
    if (KDCore.isMV()) {
      wh = this.calcWindowHeight(2, true);
    } else {
      // * Хоть команды 2, используется 4, чтобы сразу под курсором была команда
      wh = this.calcWindowHeight(4, true);
    }
    wx = (Graphics.boxWidth - ww) / 2;
    wy = (Graphics.boxHeight - wh) / 2;
    rect = new Rectangle(wx, wy, ww, wh);
    this._commandsWindow = new Window_NetworkRoomTypeMenu(rect);
    this._commandsWindow.setHandler('cancel', this.popScene.bind(this));
    this._commandsWindow.setHandler('newGame', this.commandNewGame.bind(this));
    this._commandsWindow.setHandler('continue', this.commandContinue.bind(this));
    return this.addWindow(this._commandsWindow);
  };
  _.commandNewGame = function() {
    this._createNewRoom(null); // * новая игра
  };
  _.commandContinue = function() {
    this._commandsWindow.hide();
    this._listWindow.show();
    this._listWindow.activate();
  };
  _._createNewRoom = function(uniqueSaveId) {
    var newRoomData, roomName;
    // * Используем название команаты с предыдущей сцены
    roomName = $gameTemp._nLastRoomName;
    if (!String.any(roomName)) {
      roomName = "Room_" + Math.randomInt(1000);
    }
    $gameTemp._nLastRoomName = null; // * очищаем
    
    // * Собираем данные об новой комнате
    newRoomData = {
      name: roomName,
      gameInfo: ANNetwork.getNetworkGameInfoData(),
      uniqueSaveID: uniqueSaveId
    };
    // * Отправляем данные об текущей игре (клиенте)
    ANNetwork.get(NMS.Lobby("createRoom", newRoomData), (result) => {
      return this._onRoomCreated(result);
    }, () => {
      console.log("Can't create Room, server not response in time");
      return this._commandsWindow.activate();
    });
  };
  //?EVENT
  _._onRoomCreated = function(roomData) {
    if (roomData != null) {
      ANNetwork.setRoomMaster(roomData);
      SceneManager.push(Scene_NetworkRoom);
    } else {
      HUIManager.notifyError("Can't create room with name: " + this._lastRoomName);
      this._commandsWindow.activate();
    }
  };
  _._createGamesToLoadList = function() {
    var rect, wh, ww, wx, wy;
    ww = Graphics.boxWidth - 100;
    if (KDCore.isMZ()) {
      wh = this.mainAreaHeight();
    } else {
      wh = Graphics.height - 20;
    }
    wx = (Graphics.boxWidth - ww) / 2;
    wy = (Graphics.boxHeight - wh) / 2;
    rect = new Rectangle(wx, wy, ww, wh);
    this._listWindow = new Window_SavefileList(rect);
    this._listWindow.setHandler("ok", this.onLoadFileSelected.bind(this));
    this._listWindow.setHandler("cancel", this.onLoadFileSelectCancel.bind(this));
    this._listWindow.setMode("loadNet", false);
    if (KDCore.isMZ()) {
      this._listWindow.selectSavefile(0);
    } else {
      this._listWindow.select(0);
    }
    this._listWindow.refresh();
    this._listWindow.hide();
    this.addWindow(this._listWindow);
  };
  _.onLoadFileSelected = function() {
    var info, savefileId;
    if (KDCore.isMZ()) {
      savefileId = this._listWindow.savefileId();
    } else {
      savefileId = this._listWindow.index() + 1;
    }
    if (DataManager.nIsNetworkSaveFile(savefileId)) {
      info = DataManager.nGetInfoForSavefileId(savefileId);
      this._createNewRoom(info.nUniqueSaveID);
    } else {
      SoundManager.playBuzzer();
      this._listWindow.activate();
    }
  };
  _.onLoadFileSelectCancel = function() {
    this._listWindow.hide();
    this._commandsWindow.show();
    this._commandsWindow.activate();
  };
})();


// Generated by CoffeeScript 2.6.1
// * Сцена настроек для сетевой игры

//TODO: Пока что просто ввод имени игрока
var Scene_NetworkSettings;

Scene_NetworkSettings = class Scene_NetworkSettings extends Scene_MenuBase {
  constructor() {
    super();
  }

  create() {
    super.create();
    this._showNameInput();
    if (KDCore.isMV()) {
      // * Делаем фокус ввода
      setTimeout((function() {
        return HUIManager.focusInput();
      }), 100);
    }
  }

  stop() {
    this._savePlayerName();
    this._hideNameInput();
    return super.stop();
  }

  update() {
    super.update();
    if (Input.isCancel() || Input.isTriggered('ok')) {
      return this.popScene();
    }
  }

};

(function() {  //╒═════════════════════════════════════════════════════════════════════════╛
  // ■ Scene_NetworkSettings.coffee
  //╒═════════════════════════════════════════════════════════════════════════╛
  //---------------------------------------------------------------------------
  var _;
  //@[DEFINES]
  _ = Scene_NetworkSettings.prototype;
  _._showNameInput = function() {
    HUIManager.showInput("Enter your name for network...");
    HUIManager.setInputValue(ANGameManager.myPlayerData().name);
  };
  _._savePlayerName = function() {
    var newName;
    newName = HUIManager.getInputValue();
    if (String.any(newName)) {
      ANGameManager.myPlayerData().name = newName;
      // * Отправим на сервер
      ANPlayersManager.sendPlayerName();
      ConfigManager.netPlayerName = newName;
      ConfigManager.save();
    }
  };
  _._hideNameInput = function() {
    return HUIManager.removeInput();
  };
})();

// ■ END Scene_NetworkSettings.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_Save.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__onSavefileOk, ALIAS__stop, ALIAS__update, _;
  //@[DEFINES]
  _ = Scene_Save.prototype;
  // * В MV нету метода executeSave, создадим его для совместимости
  if (KDCore.isMV()) {
    //?[NEW, from MZ]
    _.executeSave = function(savefileId) {
      $gameSystem.onBeforeSave();
      if (DataManager.saveGame(savefileId)) {
        this.onSaveSuccess();
      } else {
        this.onSaveFailure();
      }
    };
    // * Переопределим стандартный метод (только в МВ)
    // * Теперь в сетевом режиме он будет использовать новый метод executeSave
    //@[ALIAS]
    ALIAS__onSavefileOk = _.onSavefileOk;
    _.onSavefileOk = function() {
      if (ANNetwork.isConnected()) {
        Scene_File.prototype.onSavefileOk.call(this);
        this.executeSave(this.savefileId());
      } else {
        ALIAS__onSavefileOk.call(this);
      }
    };
  }
  //@[ALIAS, STORED]
  _.nALIAS__executeSave_43243 = _.executeSave;
  _.executeSave = function(savefileId) {
    if (ANNetwork.isConnected()) {
      if (ANET.PP.isSaveOnlyInMenu()) {
        //TODO:
        //@nRequestClientsStatesForSave(savefileId)
        this.nExecuteNetworkSave(savefileId);
      } else {
        this.nExecuteNetworkSave(savefileId);
      }
    } else {
      _.nALIAS__executeSave_43243.call(this, savefileId);
    }
  };
  
  //@[ALIAS]
  ALIAS__update = _.update;
  _.update = function() {
    ALIAS__update.call(this);
    if (!ANNetwork.isConnected()) {
      return;
    }
    if (this.nSaveDataPool == null) {
      return;
    }
    this.nUpdateSavePool();
  };
  //@[ALIAS]
  ALIAS__stop = _.stop;
  _.stop = function() {
    ALIAS__stop.call(this);
    this.nClearTempSaveData();
  };
})();

// ■ END Scene_Save.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_Save.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Scene_Save.prototype;
  _.nUpdateSavePool = function() {
    var ref;
    return (ref = this.nSaveDataPool) != null ? ref.update() : void 0;
  };
  _.nCreateTempSaveData = function() {
    // * Делаем глобальную переменную чтобы DataManager мог перехватить данные
    $gameTemp.nSaveData = this.nSaveDataPool;
    // * Чтобы у всех был одинаковый, нужно при опредлении какой файл загружать
    $gameTemp.nUniqueSaveID = ANET.Utils.generateSaveUniqueId();
  };
  _.nClearTempSaveData = function() {
    $gameTemp.nSaveData = null;
    return $gameTemp.nUniqueSaveID = null;
  };
  // * Запросить проверку статуса других игроков
  // * чтобы они не были "заняты" (например битва или событие)
  // * сейчас используется проверка, что все должны быть в меню
  _.nRequestClientsStatesForSave = function(savefileId) {};
  //TODO: пропустим пока что

  // * Отправить всем команду что нужны данные для сохранения
  _.nExecuteNetworkSave = function(savefileId) {
    // * Создаём пул данных сохранений для каждого игрока
    this.nSaveDataPool = new PlayersDataPool(function() {
      return ANGameManager.anotherPlayers();
    });
    // * Задаём сразу свои данные
    this.nSaveDataPool.setMyData(DataManager.makeSaveContents());
    // * Задаём методы callbacks
    this.nSaveDataPool.onFail(() => {
      return this.nOnWaitSaveDataDone(-1); // * fail
    });
    this.nSaveDataPool.onReady(() => {
      return this.nOnWaitSaveDataDone(savefileId);
    });
    this.nCreateTempSaveData();
    // * Посылаем запрос на сервер ($gameTemp.nUniqueSaveID должен быть уже создан)
    this.nSaveDataPool.register(function() {
      return ANGameManager.sendSaveDataRequest(savefileId);
    });
    this.nOnWaitSaveDataStart();
  };
  _.nOnWaitSaveDataStart = function() {
    return HUIManager.showLoader(600);
  };
  _.nOnWaitSaveDataDone = function(savefileId) {
    HUIManager.hideLoader();
    "SAVE DATA RECEIVED".p(savefileId);
    if (savefileId >= 0) {
      // * Вызываем стандартный метод
      _.nALIAS__executeSave_43243.call(this, savefileId);
    } else {
      this.onSaveFailure();
    }
  };
})();

// ■ END Scene_Save.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_Skill.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__needsPageButtons, _;
  //@[DEFINES]
  _ = Scene_Skill.prototype;
  //@[ALIAS]
  ALIAS__needsPageButtons = _.needsPageButtons;
  _.needsPageButtons = function() {
    // * В сетевом режиме нельзя переключать персонажей
    if (ANNetwork.isConnected()) {
      return false;
    } else {
      return ALIAS__needsPageButtons.call(this);
    }
  };
})();

// ■ END Scene_Skill.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_Status.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__needsPageButtons, ALIAS__start, ALIAS__stop, _;
  //@[DEFINES]
  _ = Scene_Status.prototype;
  //@[ALIAS]
  ALIAS__needsPageButtons = _.needsPageButtons;
  _.needsPageButtons = function() {
    // * В сетевом режиме зависит от параметра
    if (ANNetwork.isConnected()) {
      // * Если в режиме просмотра статуса определённого игрока - нет
      if ($gameTemp._netRequestStatusForCertainActorId != null) {
        return false;
      } else {
        return ANET.PP.isOtherPlayersMenuStatusAllowed();
      }
    } else {
      return ALIAS__needsPageButtons.call(this);
    }
  };
  
  //@[ALIAS]
  ALIAS__start = _.start;
  _.start = function() {
    var actor;
    ALIAS__start.call(this);
    // * Показываем статус определённого игрока по сети (для Player Menu опции)
    if (ANNetwork.isConnected() && $gameTemp._netRequestStatusForCertainActorId > 0) {
      actor = $gameActors.actor($gameTemp._netRequestStatusForCertainActorId);
      if (actor != null) {
        this._actor = actor;
        this.refreshActor();
      }
    }
  };
  //@[ALIAS]
  ALIAS__stop = _.stop;
  _.stop = function() {
    ALIAS__stop.call(this);
    $gameTemp._netRequestStatusForCertainActorId = null;
  };
})();

// ■ END Scene_Status.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_Title.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__start, ALIAS__update, _;
  //@[DEFINES]
  _ = Scene_Title.prototype;
  //@[ALIAS]
  ALIAS__start = _.start;
  _.start = function() {
    ALIAS__start.call(this);
    if (ANNetwork.isConnected()) {
      ANNetwork.stop();
    }
    if (ANET.isDEV()) {
      "Precc C for fast connect".p();
    }
  };
  //@[ALIAS]
  //setTimeout (=>
  //        @nFastConnectToDevRoom()
  //    ), Math.random() * 1000
  ALIAS__update = _.update;
  _.update = function() {
    ALIAS__update.call(this);
    if (ANET.isDEV()) {
      //TODO: Добавить потом параметр плагина, чтобы люди могли тестить быстро
      return this.nUpdateDebugStart();
    }
  };
  (function() {    // * Добавляем команду сетевой игры в главное меню
    var ALIAS__calcWindowHeight, ALIAS__commandWindowRect, ALIAS__createCommandWindow;
    
    //@[ALIAS]
    ALIAS__createCommandWindow = _.createCommandWindow;
    _.createCommandWindow = function() {
      ALIAS__createCommandWindow.call(this);
      return this._commandWindow.setHandler("network", this.commandNetwork.bind(this));
    };
    //@[ALIAS]
    ALIAS__commandWindowRect = _.commandWindowRect;
    _.commandWindowRect = function() {
      // * little trick to not overwrite method
      this.___isOneMoreCommand = !Imported.VisuMZ_0_CoreEngine;
      return ALIAS__commandWindowRect.call(this);
    };
    //@[ALIAS]
    ALIAS__calcWindowHeight = _.calcWindowHeight;
    _.calcWindowHeight = function(numLines, selectable) {
      if (this.___isOneMoreCommand === true) {
        numLines += 1;
        if (!ANET.PP.isSinglePlayerAllowed()) {
          // * Если одиночная игра не доступна, то нет одной позиции в меню (Новая ира)
          numLines -= 1;
        }
      }
      return ALIAS__calcWindowHeight.call(this, numLines, selectable);
    };
  })();
})();

// ■ END Scene_Title.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_Title.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Scene_Title.prototype;
  (function() {    // DEV FAST GAME START
    // --------------------------------------------------------
    // * Метод только для отладки (быстрый старт на кнопку C)
    _.nUpdateDebugStart = function() {
      if (Input.isTriggered('c')) {
        this.nFastConnectToDevRoom();
      }
      if ($gameTemp._isDevNetGameWaitPlayers === true) {
        if (ANGameManager.playersData.length > 1) {
          return this.nFastGameStart();
        }
      }
    };
    //?EVENT
    _.netOn_lobby_startGame = function() {
      if ($gameTemp._isDevNetGameStart !== true) {
        return;
      }
      Scene_Title.prototype.commandNewGame.call(this);
    };
    _.nFastConnectToDevRoom = function() {
      if (ANET.PP.isActorSelectionAllowed()) {
        console.warn("Can't connect in Dev room in Actor Select mode");
        return;
      }
      ANNetwork.initSystem();
      return ANNetwork.setConnection(function(status) {
        if (status === 1) {
          HUIManager.notifySucess("Connected to server");
          ANGameManager.init();
          return ANNetwork.get(NMS.Lobby("createRoom", {
            name: "dev",
            gameInfo: ANNetwork.getNetworkGameInfoData()
          }), function(roomData) {
            if (roomData != null) {
              ANNetwork.setRoomMaster(roomData);
              return $gameTemp._isDevNetGameWaitPlayers = true;
            } else {
              return ANNetwork.get(NMS.Lobby("joinToRoom", "dev"), function(roomData) {
                $gameTemp._isDevNetGameStart = true;
                return ANNetwork.setRoomJoin(roomData);
              }, function() {
                return console.log("Can't join to Room, server not response in time");
              });
            }
          }, function() {
            return console.log("Can't create Room, server not response in time");
          });
        } else {
          return HUIManager.notifyError("Server not response in time");
        }
      });
    };
    _.nFastGameStart = function() {
      if (ANNetwork.isMasterClient()) {
        $gameTemp._isDevNetGameStart = true;
        return ANNetwork.send(NMS.Lobby("startGame"));
      }
    };
  })();
  //?EVENT
  // * Когда соединение прервано, вызывается это событие
  _.onLostConnection = function() {}; // * NOTHING
  _.commandNetwork = function() {
    this._commandWindow.close();
    return SceneManager.push(Scene_NetworkGameMenu);
  };
})();

// ■ END Scene_Title.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ SceneManager.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__changeScene, ALIAS__isGameActive, _;
  //@[DEFINES]
  _ = SceneManager;
  //? Всегда требует активного статуса чтобы всегда принимать данные от сервера
  //@[ALIAS]
  ALIAS__isGameActive = _.isGameActive;
  _.isGameActive = function() {
    if (ANNetwork.isConnected()) {
      return true;
    } else {
      return ALIAS__isGameActive.call(this);
    }
  };
  //@[ALIAS]
  ALIAS__changeScene = _.changeScene;
  _.changeScene = function() {
    if (ANNetwork.isConnected() && this.isSceneChanging()) {
      if (typeof HUIManager !== "undefined" && HUIManager !== null) {
        HUIManager.onGameSceneChanged();
      }
    }
    ALIAS__changeScene.call(this);
  };
})();

// ■ END SceneManager.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ SceneManager.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = SceneManager;
  //? ONLY FOR MV
  _.isSceneReadyForNetwork = function() {
    return true;
  };
  // * Сцена занята для событий из сети (scene events) (общий метод для MV и MZ)
  _.isBusyForNetworkData = function() {
    return SceneManager.isSceneChanging() || !SceneManager.isSceneReadyForNetwork();
  };
})();

// ■ END SceneManager.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
// * Элементы интерфейса ANET Z на карте

// * Интерфейс AABS на карте
(function() {
  var Spriteset_UI;
  Spriteset_UI = class Spriteset_UI extends Sprite {
    constructor() {
      super();
      this._init();
      return;
    }

    isActive() {
      return this.visible === true;
    }

    show() {
      return this.visible = true;
    }

    hide() {
      return this.visible = false;
    }

    terminate() {
      this.visible = false;
    }

    // * Обновить все контроллеры и элементы
    refresh() {}

    onGameMessageStart() {}

    onGameMessageEnd() {}

  };
  ANET.link(Spriteset_UI);
})();

(function() {  //╒═════════════════════════════════════════════════════════════════════════╛
  // ■ PRIVATE
  //╒═════════════════════════════════════════════════════════════════════════╛
  //---------------------------------------------------------------------------
  var _;
  //@[DEFINES]
  _ = ANET.Spriteset_UI.prototype;
  _._init = function() {
    // * Регестрирует себя в менеджере
    ANET.UI.setUI(this);
    // * Набор всех элементов
    this.elements = [];
    // * Набор всех контроллеров
    this.controllers = [];
    return this._create();
  };
  _._create = function() {
    this._createNormalUILayer();
    return this._createElements();
  };
  _._createNormalUILayer = function() {
    this.layer = new Sprite();
    return this.addChild(this.layer);
  };
  _._createElements = function() {
    if (ANET.PP.isInGamePlayerMenuAllowed()) {
      this._createInGamePlayerMenu();
    }
    if (ANET.PP.isGameChatAllowed()) {
      this._createInGameChat();
    }
  };
  // * Создаём меню игрока
  _._createInGamePlayerMenu = function() {
    var size;
    //TODO: from parameters
    size = new Rectangle(0, 0, 160, 160);
    this.playerMenuWindow = new FWindow_InGamePlayerMenu(this, size.width, size.height);
  };
  // * Создаём окно чата
  _._createInGameChat = function() {
    //TODO: from parameters
    this.chatWindow = new FWindow_InGameChat(this, 312, 192);
    this._addElementToUI(this.chatWindow);
  };
  // * Добавить элемент на обычный слой
  _._addElementToUI = function(sprite) {
    return this.layer.addChild(sprite);
  };
})();

// ■ END PRIVATE
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Sprite_Actor.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__retreat, _;
  //@[DEFINES]
  _ = Sprite_Actor.prototype;
  //TEMP
  //TODO: Временное врешение, работает только на мастере
  //@[ALIAS]
  ALIAS__retreat = _.retreat;
  _.retreat = function() {
    if (ANNetwork.isConnected()) {
      if ($gameParty.leader() === this._battler) {
        return this.startMove(300, 0, 30);
      } else {

      }
    } else {
      // * Другой персонаж не убегает
      return ALIAS__retreat.call(this);
    }
  };
})();

// ■ END Sprite_Actor.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Sprite_Character.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__setCharacter, ALIAS__updateOther, _;
  //@[DEFINES]
  _ = Sprite_Character.prototype;
  //@[ALIAS]
  ALIAS__updateOther = _.updateOther;
  _.updateOther = function() {
    ALIAS__updateOther.call(this);
    return this._updateNetworkCharacter();
  };
  
  //@[ALIAS]
  ALIAS__setCharacter = _.setCharacter;
  _.setCharacter = function(character) {
    ALIAS__setCharacter.call(this, character);
    this._isNetworkCharacter = ANNetwork.isConnected() && character instanceof NETCharacter;
    // * Смена методов
    if (this._isNetworkCharacter === true) {
      this._updateNetworkCharacter = this._updateNetworkCharacterMain;
    }
  };
})();

// ■ END Sprite_Character.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Sprite_Character.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Sprite_Character.prototype;
  //?DYNAMIC
  _._updateNetworkCharacter = function() {}; // * DUMMY
  _._updateNetworkCharacterMain = function() {
    return this._updateNetworkStateIcon();
  };
  _._updateNetworkStateIcon = function() {
    if (this.netStateIcon == null) {
      this._createNetworkStateIcon();
    } else {
      this.netStateIcon.x = this.x;
      this.netStateIcon.y = this.y - this.height;
    }
  };
  _._createNetworkStateIcon = function() {
    var e, ref;
    this.netStateIcon = new ANET.Sprite_PlayerNetworkStatus(this);
    this.netStateIcon.setupNETCharacter(this._character);
    try {
      // * Не лучший способ
      if ((ref = SceneManager._scene._spriteset) != null) {
        ref.addNetworkStatusIconForCharacter(this.netStateIcon);
      }
    } catch (error) {
      e = error;
      ANET.w(e);
    }
  };
})();

// ■ END Sprite_Character.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Sprite_Gauge.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__smoothness, _;
  if (KDCore.isMV()) {
    return;
  }
  //@[DEFINES]
  _ = Sprite_Gauge.prototype;
  //@[ALIAS]
  ALIAS__smoothness = _.smoothness;
  _.smoothness = function() {
    // * Делаем более плавное заполнение для сетевой битвы, чтобы не было видно "рывков"
    // * Рывки есть так как с сервера данные обновляются примерно раз в секунду в бою
    if (ANNetwork.isConnected()) {
      if (this._statusType === "time" && $gameParty.inBattle()) {
        return 60;
      }
    }
    return ALIAS__smoothness.call(this);
  };
})();

// ■ END Sprite_Gauge.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Sprite_MapClickEffect.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------

// * Эффект нажатия мышкой (на карте)
(function() {
  var Sprite_MapClickEffect;
  Sprite_MapClickEffect = class Sprite_MapClickEffect extends KDCore.Sprite {
    constructor(x, y) {
      super();
      this.bitmap = ImageManager.loadAA("nzClickEffect");
      this.anchor.set(0.5);
      this._create();
      this.move(x, y);
      return;
    }

    //TODO: From parameters
    getSettings() {
      return {
        initialSize: 0.08,
        endSize: 0.4,
        sizeChangeStep: 0.03,
        frameDelay: 1
      };
    }

    update() {
      var ref, ref1;
      super.update();
      if ((ref = this._changer) != null) {
        ref.update();
      }
      if ((ref1 = this._changer2) != null) {
        ref1.update();
      }
      this._refreshScale();
    }

    // * destroy
    onAnimationEnd() {
      var ref;
      this.visible = false;
      this._changer = null;
      this._changer2 = null;
      if ((ref = this.parent) != null) {
        ref.removeChild(this);
      }
    }

  };
  ANET.link(Sprite_MapClickEffect);
})();

(function() {
  var _;
  
  //@[DEFINES]
  _ = ANET.Sprite_MapClickEffect.prototype;
  _._create = function() {
    var p;
    p = this.getSettings();
    this._tScale = p.initialSize;
    this._refreshScale();
    this._changer = new KDCore.Changer(this);
    this._changer.change('_tScale').from(p.initialSize).to(p.endSize).step(p.sizeChangeStep).speed(p.frameDelay).start();
    this._changer2 = new KDCore.Changer(this);
    this._changer2.change('opacity').from(255).to(0).step(22).speed(1).delay(1).start().done(this.onAnimationEnd.bind(this));
  };
  _._refreshScale = function() {
    this.scale.x = this._tScale;
    this.scale.y = this.scale.x;
  };
})();

// ■ END Sprite_MapClickEffect.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
// * Сообщение в чате
(function() {
  var Sprite_NetChatTextLine;
  Sprite_NetChatTextLine = class Sprite_NetChatTextLine extends KDCore.Sprite {
    constructor() {
      super();
      this.params = this.getSettings();
      this._needAnimation = false;
      this._create();
      return;
    }

    //TODO: From plugin parameters!!!
    getSettings() {
      return this.defaultSettings();
    }

    defaultSettings() {
      return {
        size: {
          w: 306,
          h: 18
        },
        backgroundA: {
          color: "#59a3d9".toCss(),
          opacity: 40
        },
        backgroundB: {
          color: "#59a3d9".toCss(),
          opacity: 70
        },
        textLine: {
          visible: true,
          size: {
            w: 520,
            h: 20
          },
          font: {
            face: null,
            size: 14,
            italic: false
          },
          margins: {
            x: 4,
            y: -3
          }
        },
        // 1 - Channel
        // 2 - Actor Name
        // 4 - Player Name
        // 3 - Message
        textFormat: "\\}\\}\\C[3][%1] \\{\\{\\C[2]%2 \\C[0]%3",
        textFormatForPlayer: "\\}\\}\\C[3][%1]\\C[1][ME]\\{\\{ \\C[0]%3",
        textFormatForSystem: "\\}\\}\\C[3][%1]\\{\\{ \\C[6]%3",
        animationSpeedInPx: 18
      };
    }

    // * Применить стиль задника А (по умолчанию)
    applyBackgroundStyleA() {
      return this._applyBackgroundStyle(this.params.backgroundA);
    }

    // * Применить стиль задника Б (чтобы легче было видно, каждый чётный)
    applyBackgroundStyleB() {
      return this._applyBackgroundStyle(this.params.backgroundB);
    }

    // * Написать сообщение
    drawChatMessage(channelId, actorId, text) {
      var actorName, channelIdText, playerName, textFormat;
      if (this._textSpr == null) {
        return;
      }
      if (this.isMyActorMessage(actorId)) {
        textFormat = this.params.textFormatForPlayer;
      } else {
        if (actorId <= 0) {
          textFormat = this.params.textFormatForSystem;
        } else {
          textFormat = this.params.textFormat;
        }
      }
      channelIdText = this._convertChannelIdToText(channelId); //1
      actorName = this._getActorName(actorId); //2
      playerName = this._getPlayerName(actorId); //4
      this._textSpr.drawTextWithFormat(textFormat, channelIdText, actorName, text, playerName);
    }

    // * Сообщение от меня (текущего клиента), имеет отдельный формат
    isMyActorMessage(actorId) {
      if (ANNetwork.isConnected()) {
        return ANGameManager.myActorId() === actorId;
      } else {
        return false;
      }
    }

    // * Сдвинуть эту строчку выше
    moveUp() {
      this.y -= this.params.size.h;
    }

    // * Анимированное появление сообщения (справа "едет")
    animate() {
      this._textSpr.x = -this.params.textLine.size.w;
      this._needAnimation = true;
    }

    update() {
      super.update();
      this._updateAnimation();
    }

  };
  ANET.link(Sprite_NetChatTextLine);
})();

(function() {  //╒═════════════════════════════════════════════════════════════════════════╛
  // ■ PRIVATE
  //╒═════════════════════════════════════════════════════════════════════════╛
  //---------------------------------------------------------------------------
  var _;
  //@[DEFINES]
  _ = ANET.Sprite_NetChatTextLine.prototype;
  _._applyBackgroundStyle = function(params) {
    if (this._background == null) {
      return;
    }
    this._background.fillAll(params.color);
    this._background.opacity = params.opacity;
  };
  _._create = function() {
    this._createBackground();
    this._createTextLine();
  };
  _._createBackground = function() {
    this._background = KDCore.Sprite.FromBitmap(this.params.size.w, this.params.size.h);
    this.applyBackgroundStyleA();
    return this.add(this._background);
  };
  _._createTextLine = function() {
    this._textSpr = new KDCore.UI.Sprite_UITextExt(this.params.textLine);
    return this.add(this._textSpr);
  };
  _._updateAnimation = function() {
    if (this._needAnimation === false) {
      return;
    }
    if (this.params.animationSpeedInPx === 0) {
      this._textSpr.x = 0; // * Сразу, без анимации
    } else {
      this._textSpr.x += this.params.animationSpeedInPx;
    }
    if (this._textSpr.x > 0) { // * Граница
      this._textSpr.x = 0;
    }
    this._needAnimation = this._textSpr.x !== 0;
  };
  _._convertChannelIdToText = function(channelId) {
    if (channelId <= 0) {
      return "ALL";
    }
    return "MAP";
  };
  _._getActorName = function(actorId) {
    var ref;
    if (actorId <= 0) {
      return "";
    }
    return (ref = $dataActors[actorId]) != null ? ref.name : void 0;
  };
  _._getPlayerName = function(actorId) {
    var ref;
    if (actorId <= 0) {
      return "";
    }
    if (ANNetwork.isConnected()) {
      return (ref = ANGameManager.getPlayerDataByActorId(actorId)) != null ? ref.name : void 0;
    } else {
      return this._getActorName(actorId);
    }
  };
})();

// ■ END PRIVATE
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Sprite_PlayerNetworkStatus.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var Sprite_PlayerNetworkStatus;
  Sprite_PlayerNetworkStatus = class Sprite_PlayerNetworkStatus extends Sprite_Balloon {
    constructor() {
      super();
      this.visible = false;
      return;
    }

    setupNETCharacter(_character) {
      this._character = _character;
      return this._checkStateThread = new KDCore.TimedUpdate(10, this._updateStateCheck.bind(this));
    }

    loadBitmap() {
      this.bitmap = ImageManager.loadAA("PlayerStateIcons");
      return this.setFrame(0, 0, 0, 0);
    }

    setup(iconId) {
      if (iconId == null) {
        if (this.visible === true) {
          this.reset();
        }
      } else {
        if (this._balloonId === iconId) {
          return;
        }
        this._balloonId = iconId;
        this.visible = true;
        this.restart();
      }
    }

    restart() {
      return this._duration = 5 * this.speed() + this.waitTime();
    }

    reset() {
      this._duration = 0;
      this._balloonId = -1;
      return this.visible = false;
    }

    // * Не используется, так как прикрепляется к персонажу
    updatePosition() {} // * EMPTY

    update() {
      super.update();
      this._checkStateThread.update();
      // * Начинается снова
      if (this._balloonId >= 0 && this._duration <= 0) {
        this._firstStep = true;
        return this.restart();
      }
    }

    frameIndex() {
      var frameIndex, index;
      index = (this._duration - this.waitTime()) / this.speed();
      frameIndex = 4 - Math.max(Math.floor(index), 0);
      if (this._firstStep == null) {
        return frameIndex;
      } else {
        if (frameIndex === 0) {
          return 1;
        } else {
          return frameIndex;
        }
      }
    }

    // * PRIVATE =====================================================
    _updateStateCheck() {
      if (this._character == null) {
        return;
      }
      this.setup(this._character.networkStateIcon);
    }

  };
  ANET.link(Sprite_PlayerNetworkStatus);
})();

// ■ END Sprite_PlayerNetworkStatus.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Spriteset_Battle.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Spriteset_Battle.prototype;
  // * Началась битва
  // * Проверим и спрячем "dead" врагов (если мы присоединились)
  _.nRefreshNetBattle = function() {
    var e, i, len, ref, ref1, s;
    try {
      // * Если мы мастер, то не надо, значит мы НЕ присоединились
      if (ANBattleManager.isBattleMaster()) {
        return;
      }
      ref = this._enemySprites;
      for (i = 0, len = ref.length; i < len; i++) {
        s = ref[i];
        if (s == null) {
          continue;
        }
        if (!((ref1 = s._enemy) != null ? ref1.isAlive() : void 0)) {
          s.hide();
        }
      }
    } catch (error) {
      e = error;
      ANET.w(e);
    }
  };
})();

// ■ END Spriteset_Battle.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Spriteset_Map.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__createCharacters, _;
  //@[DEFINES]
  _ = Spriteset_Map.prototype;
  //@[ALIAS]
  ALIAS__createCharacters = _.createCharacters;
  _.createCharacters = function() {
    ALIAS__createCharacters.call(this);
    if (ANNetwork.isConnected()) {
      this._createNetworkCharacters();
      this._createNetworkCharactersInfo();
    }
  };
})();

// ■ END Spriteset_Map.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Spriteset_Map.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Spriteset_Map.prototype;
  _._createNetworkCharacters = function() {
    // * Отдельный массив для удобства
    this._networkCharacterSprites = [];
    this.refreshNetworkCharacters();
  };
  _.refreshNetworkCharacters = function() {
    var char, i, j, len, len1, ref, ref1, spr;
    ref = this._networkCharacterSprites;
    for (i = 0, len = ref.length; i < len; i++) {
      char = ref[i];
      this._removeNetCharInfo(char);
      this._characterSprites.delete(char);
      this._tilemap.removeChild(char);
    }
    this._networkCharacterSprites = [];
    ref1 = $gameMap.netChars();
    for (j = 0, len1 = ref1.length; j < len1; j++) {
      char = ref1[j];
      spr = new Sprite_Character(char);
      this._characterSprites.push(spr);
      this._networkCharacterSprites.push(spr);
      this._tilemap.addChild(spr);
    }
  };
  
  // * Специальный слой для иконок статусов и имён сетевых персонажей
  _._createNetworkCharactersInfo = function() {
    this._networkCharactersInfoSprites = [];
    this._networkCharactersInfoLayer = new Sprite();
    this._networkCharactersInfoLayer.z = 9;
    this._tilemap.addChild(this._networkCharactersInfoLayer);
  };
  // * Добавить иконку статуса для персонажа
  _.addNetworkStatusIconForCharacter = function(iconSpr) {
    this._destroyNetStatusIconDuplicate(iconSpr);
    this._networkCharactersInfoSprites.push(iconSpr);
    this._networkCharactersInfoLayer.addChild(iconSpr);
  };
  
  // * Надо найти и удалить, если икона уже существует для персонажа
  // * при refreshNetworkCharacters, их иконки не удаляются с ними
  // * так как находятся на другом слое
  _._destroyNetStatusIconDuplicate = function(iconSpr) {
    var i, len, ref, spr;
    if (iconSpr == null) {
      return;
    }
    ref = this._networkCharactersInfoSprites;
    //TODO: Возможно после создания таблиц имён надо разлелить метод
    // так как сейчас удаляется любой спрайт из массива с соответсвием персонажа
    for (i = 0, len = ref.length; i < len; i++) {
      spr = ref[i];
      if (spr == null) {
        continue;
      }
      if (spr._character === iconSpr._character) {
        this._networkCharactersInfoLayer.removeChild(spr);
        this._networkCharactersInfoSprites.delete(spr);
      }
    }
  };
  // * Удаляет все связанные с персонажем спрайты информации (статус, имя)
  _._removeNetCharInfo = function(char) {
    if (char == null) {
      return;
    }
    return this._destroyNetStatusIconDuplicate(char.netStateIcon);
  };
})();

// ■ END Spriteset_Map.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ StorageManager.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = StorageManager;
  _.saveObjectForNet = function(object) {
    return this.objectToJson(object).then((json) => {
      return this.jsonToZip(json);
    }).then(function(zip) {
      return $gameTemp._startedRoomGameDataResponse = zip;
    });
  };
  _.loadObjectFormNet = function(object) {
    return this.zipToJson(object).then((json) => {
      return this.jsonToObject(json);
    });
  };
})();

// ■ END StorageManager.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Window_BattleLog.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__addText, ALIAS__clear, _;
  //@[DEFINES]
  _ = Window_BattleLog.prototype;
  //@[ALIAS]
  ALIAS__clear = _.clear;
  _.clear = function() {
    ALIAS__clear.call(this);
    if (this.isNeedSendLogToServer()) {
      return ANBattleManager.sendWindowLogMessage("clear", null);
    }
  };
  //@[ALIAS]
  ALIAS__addText = _.addText;
  _.addText = function(text) {
    ALIAS__addText.call(this, text);
    if (this.isNeedSendLogToServer()) {
      ANBattleManager.sendWindowLogMessage("add", text);
    }
  };
})();

// ■ END Window_BattleLog.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Window_BattleLog.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__showNormalAnimation, _;
  //@[DEFINES]
  _ = Window_BattleLog.prototype;
  if (KDCore.isMZ()) {
    return;
  }
  //@[ALIAS]
  ALIAS__showNormalAnimation = _.showNormalAnimation;
  _.showNormalAnimation = function(targets, animationId, mirror) {
    ALIAS__showNormalAnimation.call(this, targets, animationId, mirror);
    if (this.isNeedSendLogToServer() && KDCore.isMV()) {
      ANBattleManager.sendWindowLogAnimation(targets, animationId, mirror);
    }
  };
})();

// ■ END Window_BattleLog.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Window_BattleLog.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Window_BattleLog.prototype;
  _.isNeedSendLogToServer = function() {
    return ANNetwork.isConnected() && ANGameManager.isBattleMaster() && !$gameParty.isOneBattler();
  };
})();

// ■ END Window_BattleLog.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Window_BattleStatus.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__update, _;
  //@[DEFINES]
  _ = Window_BattleStatus.prototype;
  if (KDCore.isMZ()) {
    return;
  }
  //@[ALIAS]
  ALIAS__update = _.update;
  _.update = function() {
    ALIAS__update.call(this);
    if ($gameTemp.isBattleRefreshRequested()) {
      this.refresh();
      $gameTemp.clearBattleRefreshRequest();
    }
  };
})();

// ■ END Window_BattleStatus.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Window_ChoiceList.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__initialize, ALIAS__isCancelEnabled, ALIAS__isCursorMovable, ALIAS__isOkEnabled, ALIAS__processCancel, ALIAS__processOk, ALIAS__select, ALIAS__start, ALIAS__update, _;
  //TODO: ПРОВЕРИТЬ НА MV

  //@[DEFINES]
  _ = Window_ChoiceList.prototype;
  //@[ALIAS]
  ALIAS__isCursorMovable = _.isCursorMovable;
  _.isCursorMovable = function() {
    if (this.nIsNetworkSelection()) {
      return ANInterpreterManager.isSharedEventMaster();
    } else {
      return ALIAS__isCursorMovable.call(this);
    }
  };
  //@[ALIAS]
  ALIAS__isOkEnabled = _.isOkEnabled;
  _.isOkEnabled = function() {
    if (this.nIsNetworkSelection() && !ANInterpreterManager.isSharedEventMaster()) {
      return false;
    }
    return ALIAS__isOkEnabled.call(this);
  };
  //@[ALIAS]
  ALIAS__isCancelEnabled = _.isCancelEnabled;
  _.isCancelEnabled = function() {
    if (this.nIsNetworkSelection() && !ANInterpreterManager.isSharedEventMaster()) {
      return false;
    }
    return ALIAS__isCancelEnabled.call(this);
  };
  //@[ALIAS]
  ALIAS__update = _.update;
  _.update = function() {
    ALIAS__update.call(this);
    if (this.nIsNetworkSelection()) {
      this.nUpdateNetworkSelection();
    }
  };
  // * Можно это тоже, но не обязательно, и так выбор не может сделать второй игрок
  //@[ALIAS]
  //ALIAS__processHandling = _.processHandling
  //_.processHandling = ->
  //    return if @nIsNetworkSelection() && !ANInterpreterManager.isSharedEventMaster()
  //    return ALIAS__processHandling.call(@)

  //@[ALIAS]
  //ALIAS__processTouch = _.processTouch
  //_.processTouch = ->
  //    return if @nIsNetworkSelection() && !ANInterpreterManager.isSharedEventMaster()
  //    return ALIAS__processTouch.call(@)

  //@[ALIAS]
  ALIAS__select = _.select;
  _.select = function(index) {
    if (this.nIsNetworkSelection()) {
      // * Если мастер, то выбор проходит и отправляем всем выбор
      if (ANInterpreterManager.isSharedEventMaster()) {
        ALIAS__select.call(this, index);
        return this.nSendNetworkSelection(index);
      } else {
        // * Если не мастер, но выбор пришёл с сервера (т.е. есть флаг), то ставим выбор
        if (this.nIsSelectFromNetworkMaster === true) {
          this.nIsSelectFromNetworkMaster = false;
          return ALIAS__select.call(this, index);
        } else {

        }
      }
    } else {
      // * NOTHING
      // * Клиент сам не может менять выбор
      return ALIAS__select.call(this, index);
    }
  };
  
  //@[ALIAS]
  ALIAS__initialize = _.initialize;
  _.initialize = function() {
    ALIAS__initialize.call(this, ...arguments);
    if (ANNetwork.isConnected()) {
      this.nSetNetworkSelectMode(false);
    }
  };
  //@[ALIAS]
  ALIAS__start = _.start;
  _.start = function() {
    if (ANNetwork.isConnected()) {
      this.nPrepareNetworkSelection();
    }
    ALIAS__start.call(this);
  };
  
  //@[ALIAS]
  ALIAS__processOk = _.processOk;
  _.processOk = function() {
    ALIAS__processOk.call(this);
    if (this.nIsNetworkSelection() && this.isCurrentItemEnabled()) {
      this.nSendNetworkSelectionAciton('ok');
    }
  };
  //@[ALIAS]
  ALIAS__processCancel = _.processCancel;
  _.processCancel = function() {
    ALIAS__processCancel.call(this);
    if (this.nIsNetworkSelection() && this.isCurrentItemEnabled()) {
      this.nSendNetworkSelectionAciton('cancel');
    }
  };
})();

// ■ END Window_ChoiceList.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Window_ChoiceList.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Window_ChoiceList.prototype;
  (function() {    // * Выбор (только одного игрока) в общем событии
    // -----------------------------------------------------------------------
    // * Подготовка окна к выбору по сети
    _.nPrepareNetworkSelection = function() {
      // * Обнуляем действие из сети
      $gameTemp.nSelectionActionFromNetwork = null;
      this.nSetNetworkSelectMode($gameTemp.nRequireChoiceOnlyForMaster);
      // * Сбрасываем флаг (чтобы не повторился на следующем выборе)
      $gameTemp.nRequireChoiceOnlyForMaster = false;
      // * При открытии окна, первый выбор Default всегда проходит (не запрещён) на клиенте
      // * Поэтому ставим разрешающий флаг (якобы от сервера первый выбор)
      this.nIsSelectFromNetworkMaster = true;
      // * Очищаем последний отправленный индекс
      this.__nLastSentIndex = null;
    };
    _.nSetNetworkSelectMode = function(_networkSelectMode) {
      this._networkSelectMode = _networkSelectMode;
    };
    _.nIsNetworkSelection = function() {
      return this._networkSelectMode === true && ANNetwork.isConnected();
    };
    // * Отправить на сервер индекс выбора
    _.nSendNetworkSelection = function(index) {
      // * Чтобы не спамить
      if (this.__nLastSentIndex === index) {
        return;
      }
      this.__nLastSentIndex = index;
      ANInterpreterManager.sendChoiceSelection(index, null);
    };
    // * Отправить на сервер действие (ОК, отмена)
    _.nSendNetworkSelectionAciton = function(action) {
      ANInterpreterManager.sendChoiceSelection(this.index(), action);
    };
    // * Ожидание действие от сервера (не мастер)
    return _.nUpdateNetworkSelection = function() {
      var action, index;
      if ($gameTemp.nSelectionActionFromNetwork == null) {
        return;
      }
      if (ANInterpreterManager.isSharedEventMaster()) {
        return;
      }
      ({action, index} = $gameTemp.nSelectionActionFromNetwork);
      this.nIsSelectFromNetworkMaster = true;
      if (index != null) {
        // * Всегда ставим выбор аналогичный масетеру (пришёл от сервера который), затем уже действия
        this.select(index);
      }
      switch (action) {
        case 'ok':
          this.processOk();
          break;
        case 'cancel':
          this.processCancel(); // select
          break;
      }
      // * Ничего, выбор всегда идёт
      // * Флаг обработан, очищаем
      $gameTemp.nSelectionActionFromNetwork = null;
    };
  })();
})();

// ■ END Window_ChoiceList.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Window_ItemList.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__drawItem, ALIAS__isEnabled, ALIAS__makeItemList, _;
  //@[DEFINES]
  _ = Window_ItemList.prototype;
  //@[ALIAS]
  ALIAS__isEnabled = _.isEnabled;
  _.isEnabled = function() {
    if (ANTradeManager.isInTrade()) {
      return true; // * В режиме NetTrade можно продавать все вещи
    } else {
      return ALIAS__isEnabled.call(this, ...arguments);
    }
  };
  
  //@[ALIAS]
  ALIAS__makeItemList = _.makeItemList;
  _.makeItemList = function() {
    ALIAS__makeItemList.call(this);
    if (ANTradeManager.isInTrade()) {
      this.nMakeItemListForTrading();
    }
  };
  //@[ALIAS]
  ALIAS__drawItem = _.drawItem;
  _.drawItem = function(index) {
    if (ANTradeManager.isInTrade() && index === 0) {
      this.nDrawEmptyTradeItem(index);
      return;
    }
    return ALIAS__drawItem.call(this, index);
  };
})();

// ■ END Window_ItemList.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Window_ItemList.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Window_ItemList.prototype;
  // * Фильтруем список предметов для торговли
  // * 1. Добавляем "пустой" предмет (чтобы убрать позицию)
  // * 2. Удаляем из списка уже выбранные ранее предметы
  _.nMakeItemListForTrading = function() {
    var i, item, len, ref;
    //%[I] Добавлять кнопку Remove только если в слоте что-то есть
    // смотри $gameTemp.__netTradeItemIndex
    this._data.unshift(this.nEmptyTradeItem());
    ref = $gameTemp._netMyTradeItems;
    for (i = 0, len = ref.length; i < len; i++) {
      item = ref[i];
      if (item == null) {
        continue;
      }
      if (this._data.contains(item[0])) {
        this._data.delete(item[0]);
      }
    }
  };
  _.nEmptyTradeItem = function() {
    return {
      id: 0,
      description: "\\Chex[#f5c842]Remove Item from current Trade slot"
    };
  };
  _.nDrawEmptyTradeItem = function(index) {
    var e, item, rect;
    try {
      item = this.itemAt(index);
      if (item == null) {
        return;
      }
      rect = this.itemLineRect(index);
      this.changeTextColor("#f5c842");
      this.drawText("[Remove]", rect.x, rect.y, rect.width, 'center');
      //@drawItemName(item, rect.x, rect.y, rect.width)
      return this.resetTextColor();
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  };
})();

// ■ END Window_ItemList.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Window_MenuCommand.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__isFormationEnabled, ALIAS__isSaveEnabled, _;
  //@[DEFINES]
  _ = Window_MenuCommand.prototype;
  // * Команда Formation запрещена в сетевой игре всегда
  //@[ALIAS]
  ALIAS__isFormationEnabled = _.isFormationEnabled;
  _.isFormationEnabled = function() {
    if (ANNetwork.isConnected()) {
      return false;
    } else {
      return ALIAS__isFormationEnabled.call(this, ...arguments);
    }
  };
  
  //@[ALIAS]
  ALIAS__isSaveEnabled = _.isSaveEnabled;
  _.isSaveEnabled = function() {
    if (ANNetwork.isConnected()) {
      // * Если параметр включён
      return ANET.PP.isSaveLoadAllowed();
    } else {
      return ALIAS__isSaveEnabled.call(this, ...arguments);
    }
  };
})();

// ■ END Window_MenuCommand.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Window_MenuStatus.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__initialize, ALIAS__isCurrentItemEnabled, _;
  //@[DEFINES]
  _ = Window_MenuStatus.prototype;
  //@[ALIAS]
  ALIAS__initialize = _.initialize;
  _.initialize = function(rect) {
    ALIAS__initialize.call(this, rect);
    if (ANNetwork.isConnected()) {
      if (ANET.PP.isOtherPlayersVisibleInMenu() === false) {
        this.setOnlyMyPlayerInMenuMode();
      }
    }
  };
  //@[ALIAS]
  ALIAS__isCurrentItemEnabled = _.isCurrentItemEnabled;
  _.isCurrentItemEnabled = function() {
    if (ANNetwork.isConnected()) {
      return this.isCurrentItemEnabledInNetworkGame();
    } else {
      return ALIAS__isCurrentItemEnabled.call(this, ...arguments);
    }
  };
})();

// ■ END Window_MenuStatus.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Window_MenuStatus.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Window_MenuStatus.prototype;
  (function() {    // * Команды Skill, Statis, Equip
    // -----------------------------------------------------------------------
    _.isCurrentItemEnabledInNetworkGame = function() {
      if (this.isSymbolOnlyForMyNetActor()) {
        return this.isCurrentActorIsMyNetActor();
      } else {
        return true;
      }
    };
    // * Набор команд, которые доступны только для текущего игрока (персонажа)
    _.isSymbolOnlyForMyNetActor = function() {
      var e, isOnlyForMyActor, symbol;
      try {
        // * Плохой вариант получения команды, но работает
        symbol = SceneManager._scene._commandWindow.currentSymbol();
        // * Навыки и экипировка - только для моего персонажа
        isOnlyForMyActor = symbol === 'skill' || symbol === 'equip';
        if (ANET.PP.isOtherPlayersMenuStatusAllowed() === false) {
          isOnlyForMyActor = isOnlyForMyActor || (symbol === 'status');
        }
        return isOnlyForMyActor;
      } catch (error) {
        e = error;
        AA.w(e);
        return false;
      }
    };
    
    // * Выбранный (Index) персонаж принадлежит мне? (мой персонаж)
    return _.isCurrentActorIsMyNetActor = function() {
      var actor, e;
      try {
        actor = $gameParty.members()[this.index()];
        return actor.isMyNetworkActor();
      } catch (error) {
        e = error;
        AA.w(e);
        return false;
      }
    };
  })();
  (function() {    // * Cписок игроков
    // -----------------------------------------------------------------------
    
    // * Будет видно только моего персонажа
    return _.setOnlyMyPlayerInMenuMode = function() {
      this.maxItems = function() {
        return 1;
      };
      this.actor = function(index) {
        return $gameParty.leader();
      };
      return this.selectLast = function() {
        return this.smoothSelect(0);
      };
    };
  })();
})();

// ■ END Window_MenuStatus.coffee
//---------------------------------------------------------------------------

// -----------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Window_Message.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__startMessage, ALIAS__terminateMessage, _;
  //@[DEFINES]
  _ = Window_Message.prototype;
  //@[ALIAS]
  ALIAS__startMessage = _.startMessage;
  _.startMessage = function() {
    ALIAS__startMessage.call(this);
    return ANET.UI.onGameMessageStart();
  };
  
  //TODO: Тут мерцание происходит. Как быть? Timeout?
  //@[ALIAS]
  ALIAS__terminateMessage = _.terminateMessage;
  _.terminateMessage = function() {
    ALIAS__terminateMessage.call(this);
    return ANET.UI.onGameMessageEnd();
  };
})();

// ■ END Window_Message.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
var Window_NetworkActorsList;

Window_NetworkActorsList = class Window_NetworkActorsList extends Window_Selectable {
  constructor(rect) {
    super(rect);
    this.setBackgroundType(ANET.VD.getWindowBackgroundType());
    this.select(0);
  }

  maxItems() {
    return this.actorsForNetwork().length;
  }

  maxCols() {
    return 2;
  }

  actorsForNetwork() {
    return ANET.PP.actorsForNetwork();
  }

  isCurrentItemEnabled() {
    var e;
    try {
      return this.isEnable(this.index());
    } catch (error) {
      e = error;
      ANET.w(e);
      return false;
    }
  }

  selectedActorId() {
    if (!this.isCurrentItemEnabled()) {
      return 0;
    }
    return this.getActorData(this.index()).id;
  }

  isEnable(index) {
    var actorId;
    actorId = this.getActorData(index).id;
    return !ANGameManager.playersData.some(function(pl) {
      return pl.actorId === actorId;
    });
  }

  drawItem(index) {
    var actorData, faceBitmap, rect;
    actorData = this.getActorData(index);
    if (actorData == null) {
      return;
    }
    rect = this.itemRect(index);
    faceBitmap = ImageManager.loadFace(actorData.faceName);
    faceBitmap.addLoadListener(() => {
      return this._drawActor(rect, actorData, index);
    });
  }

  itemHeight() {
    return 110;
  }

  getActorData(index) {
    return $dataActors[this.actorsForNetwork()[index]];
  }

};

(function() {  //╒═════════════════════════════════════════════════════════════════════════╛
  // ■ Window_NetworkActorsList.coffee
  //╒═════════════════════════════════════════════════════════════════════════╛
  //---------------------------------------------------------------------------
  var _;
  //@[DEFINES]
  _ = Window_NetworkActorsList.prototype;
  _._drawActor = function(rect, a, index) {
    this.changePaintOpacity(this.isEnable(index));
    this._drawActorInfo(rect, a);
    this._drawActorClass(rect, a);
    if (!this.isEnable(index)) {
      this._drawNetworkStatus(rect);
    }
    this.changePaintOpacity(1);
  };
  _._drawActorInfo = function(rect, a) {
    this.drawFaceWithCustomSize(a.faceName, a.faceIndex, rect.x + 4, rect.y + 2, this.itemHeight() - 8);
    return this.drawText(a.name, rect.x + 120, rect.y + 4, 168);
  };
  _._drawActorClass = function(rect, a) {
    var aClass, className, e;
    try {
      aClass = $dataClasses[a.classId];
      if (aClass != null) {
        className = aClass.name;
      } else {
        className = "";
      }
      if (KDCore.isMV()) {
        this.changeTextColor(this.crisisColor());
      } else {
        this.changeTextColor(ColorManager.crisisColor());
      }
      this.contents.fontSize -= 8;
      this.drawText(className, rect.x + 132, rect.y + 44, 168);
      this.contents.fontSize += 8;
      this.resetTextColor();
    } catch (error) {
      e = error;
      AA.warning(e);
    }
  };
  _._drawNetworkStatus = function(rect) {
    if (KDCore.isMV()) {
      this.changeTextColor(this.deathColor());
    } else {
      this.changeTextColor(ColorManager.deathColor());
    }
    this.contents.fontSize -= 8;
    this.drawText('Picked', rect.x + 270, rect.y + 4);
    this.contents.fontSize += 8;
    this.resetTextColor();
  };
})();

// ■ END Window_NetworkActorsList.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Window_NetworkGameMenu.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
var Window_NetworkGameMenu;

Window_NetworkGameMenu = class Window_NetworkGameMenu extends Window_Command {
  constructor(rect) {
    super(rect);
    this.setBackgroundType(ANET.VD.getWindowBackgroundType());
  }

  makeCommandList() {
    this.addCommand(ANET.LV("createRoom"), "createRoom");
    this.addCommand(ANET.LV("joinRoom"), "joinRoom");
    if (ANET.PP.isJoinRandomRoomAllowed()) {
      this.addCommand(ANET.LV("joinRandomRoom"), "joinRandRoom");
    }
    this.addCommand(ANET.LV("Settings"), "settings");
  }

};

(function() {
  var _;
  //@[DEFINES]
  _ = Window_NetworkGameMenu.prototype;
})();

// ■ END Window_NetworkGameMenu.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
var Window_NetworkRoomCommands;

Window_NetworkRoomCommands = class Window_NetworkRoomCommands extends Window_HorzCommand {
  constructor(rect) {
    super(rect);
    this.setBackgroundType(ANET.VD.getWindowBackgroundType());
  }

  maxCols() {
    return 3;
  }

  isLoadGame() {
    return ANET.Utils.isLoadGameRoom();
  }

  isStartedRoom() {
    return ANET.Utils.isStartedRoom();
  }

  isCanSelectActors() {
    return ANET.PP.isActorSelectionAllowed() && !this.isLoadGame();
  }

  makeCommandList() {
    var leaveCommandName;
    if (ANNetwork.isMasterClient()) {
      this.addCommand(ANET.LV("start"), 'start', this._isStartEnabled()); //TODO: Третий аргумент : enabled
    } else {
      // * Если комната в режиме "В игре"
      //TODO: Надо проверять все ли готовы, только тогда кнопка активна
      //TODO: Ещё можно проверять больше 1 игрока или нет
      if (this.isStartedRoom()) {
        this.addCommand(ANET.LV("joinGame"), 'joinInGame', this._isJoinInAlreadyGameEnabled());
      } else {
        this.addCommand(ANET.LV("ready"), 'ready', false);
      }
    }
    //TODO: Пока отключим, нет функционала
    if (this.isCanSelectActors()) {
      this.addCommand(ANET.LV("character"), 'character', this._isCharSelectEnabled());
    }
    leaveCommandName = ANNetwork.isMasterClient() ? ANET.LV("close") : ANET.LV("leave");
    this.addCommand(leaveCommandName, 'leave');
  }

};

(function() {  
  //╒═════════════════════════════════════════════════════════════════════════╛
  // ■ Window_NetworkRoomCommands.coffee
  //╒═════════════════════════════════════════════════════════════════════════╛
  //---------------------------------------------------------------------------
  var _;
  //@[DEFINES]
  _ = Window_NetworkRoomCommands.prototype;
  _._myActorId = function() {
    return ANGameManager.myPlayerData().actorId;
  };
  _._isAllPlayersSelectActors = function() {
    return ANGameManager.playersData.every(function(pl) {
      return pl.actorId !== 0;
    });
  };
  _._isStartEnabled = function() {
    if (!ANET.PP.isSingleActorNetworkGameAllowed()) {
      if (ANGameManager.playersData.length === 1) {
        return false;
      }
    }
    // * Надо выбрать персонажа, потом можно начинать игру
    if (this.isCanSelectActors() || this.isLoadGame()) {
      //TODO: Разрешить загружаться меньшему количеству игроков??? Опция или НЕТ?
      // * Сейчас может загрузить игру два игрока, если играло 3 или более например
      return this._isAllPlayersSelectActors();
    } else {
      return true;
    }
  };
  _._isCharSelectEnabled = function() {
    return this._myActorId() <= 0;
  };
  _._isJoinInAlreadyGameEnabled = function() {
    if (!ANET.PP.isJoinStartedRoomAllowed()) {
      return false;
    }
    //TODO: character selection check
    return true;
  };
})();

// ■ END Window_NetworkRoomCommands.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
// * Список игроков в комнате
//TODO: Пока нельзя выделять игрока и что-то с ним делать
//TODO: Возможно добавить возможность кикнуть игрока
var Window_NetworkRoomPlayersList;

Window_NetworkRoomPlayersList = class Window_NetworkRoomPlayersList extends Window_Selectable {
  constructor(rect) {
    super(rect);
  }

  //@setBackgroundType ANET.VD.getWindowBackgroundType()
  maxItems() {
    return ANGameManager.playersData.length;
  }

  drawItem(index) {
    var playerData, rect;
    playerData = this.playerData(index);
    if (playerData == null) {
      return;
    }
    rect = this.itemLineRect(index);
    this.changePaintOpacity(this.isEnabled(index));
    this._drawPlayerInfo(rect, playerData);
    this.changePaintOpacity(1);
  }

  isEnabled(index) {
    return true;
  }

  isLoadGame() {
    return ANET.Utils.isLoadGameRoom();
  }

  isStartedRoom() {
    return ANET.Utils.isStartedRoom();
  }

  playerData(index) {
    return ANGameManager.playersData[index];
  }

};

(function() {  //╒═════════════════════════════════════════════════════════════════════════╛
  // ■ Window_NetworkRoomPlayersList.coffee
  //╒═════════════════════════════════════════════════════════════════════════╛
  //---------------------------------------------------------------------------
  var _;
  //@[DEFINES]
  _ = Window_NetworkRoomPlayersList.prototype;
  _._drawPlayerInfo = function(rect, playerData) {
    var text;
    text = playerData.name;
    if (playerData.id === ANNetwork.room.masterId) {
      text = "\\C[1]" + text;
    } else if (playerData.id === ANNetwork.myId()) {
      text = "\\C[3]" + text;
    }
    if (ANET.PP.isActorSelectionAllowed() || this.isLoadGame()) {
      text += this._getActorName(playerData);
    }
    if (this.isStartedRoom() && NetPlayerDataWrapper.isHaveCharacterInGame(playerData)) {
      text += " \\C[4]\\}[In Game]";
    }
    this.drawTextEx(text, rect.x, rect.y, rect.width, 'left');
  };
  _._getActorName = function(playerData) {
    var actorName;
    actorName = "...";
    if (playerData.actorId > 0) {
      actorName = $dataActors[playerData.actorId].name;
    }
    return "\\C[0] [%1]".format(actorName);
  };
})();

// ■ END Window_NetworkRoomPlayersList.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//TODO: Отключить комнаты других игр (параметр или от сервера зависит)
var Window_NetworkRoomsList;

Window_NetworkRoomsList = class Window_NetworkRoomsList extends Window_Selectable {
  constructor(rect) {
    super(rect);
    this.setBackgroundType(ANET.VD.getWindowBackgroundType());
    this._createNoRoomsMessage();
    this.refreshRooms([]);
    return;
  }

  maxItems() {
    if (this.isHaveAnyRoom()) {
      return this.roomsList.length;
    } else {
      return 0;
    }
  }

  drawItem(index) {
    var rect, roomData;
    roomData = this.roomData(index);
    if (roomData == null) {
      return;
    }
    rect = this.itemLineRect(index);
    this.changePaintOpacity(this.isEnabled(index));
    this._drawRoomInfo(rect, roomData);
    this.changePaintOpacity(1);
  }

  isEnabled(index) {
    return NetRoomDataWrapper.isRoomProperToJoin(this.roomData(index));
  }

  isCurrentRoomEnabled() {
    return this.isEnabled(this.index());
  }

  getSelectedRoom() {
    return this.roomData(this.index());
  }

  refreshRooms(roomsList) {
    this.roomsList = roomsList;
    //TODO: @_noRoomsTextSpr мелькает
    this._noRoomsTextSpr.visible = !this.isHaveAnyRoom();
    if (this._noRoomsTextSpr.visible === true) {
      this.select(-1);
    }
    this.refresh();
  }

  isHaveAnyRoom() {
    if (this.roomsList != null) {
      return this.roomsList.length > 0;
    } else {
      return false;
    }
  }

  roomData(index) {
    return this.roomsList[index];
  }

};

(function() {  //╒═════════════════════════════════════════════════════════════════════════╛
  // ■ Window_NetworkRoomsList.coffee
  //╒═════════════════════════════════════════════════════════════════════════╛
  //---------------------------------------------------------------------------
  var _;
  //@[DEFINES]
  _ = Window_NetworkRoomsList.prototype;
  _._createNoRoomsMessage = function() {
    var params;
    params = KDCore.UI.Sprite_UIText.prototype.defaultParams();
    params.size.w = this.width;
    params.size.h = this.height;
    params.font.size = 32;
    params.outline.width = 3;
    this._noRoomsTextSpr = new KDCore.UI.Sprite_UIText(params);
    this._noRoomsTextSpr.visible = false;
    this._noRoomsTextSpr.drawText("There are no rooms on server");
    return this.addChild(this._noRoomsTextSpr);
  };
  _._drawRoomInfo = function(rect, roomData) {
    var loadGame, roomText, rpgVersion, state;
    rpgVersion = roomData.rpgVersion === 0 ? 'MZ' : 'MV';
    state = roomData.inGame === true ? 'In Game' : 'In Lobby';
    loadGame = NetRoomDataWrapper.isLoadGameRoom(roomData) ? '[from Savefile]' : '';
    // * [VER](GAME NAME) RoomName 0\X (inGame|inLobby)
    roomText = "\\}\\C[1][%1]\\C[3](%2)\\{\\C[0]   %3   \\C[4]%4/%5 \\}\\C[5](%6) \\C[6]%7".format(rpgVersion, roomData.gameTitle, roomData.name, roomData.playersIds.length, roomData.maxPlayers, state, loadGame);
    this.drawTextEx(roomText, rect.x, rect.y, rect.width, 'left');
  };
})();

// ■ END Window_NetworkRoomsList.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Window_NetworkRoomTypeMenu.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
var Window_NetworkRoomTypeMenu;

Window_NetworkRoomTypeMenu = class Window_NetworkRoomTypeMenu extends Window_Command {
  constructor(rect) {
    super(rect);
    this.setBackgroundType(ANET.VD.getWindowBackgroundType());
  }

  makeCommandList() {
    this.addCommand("New Game", "newGame");
    this.addCommand("Load Game", "continue", this.isHaveSavedGames());
  }

  isHaveSavedGames() {
    return true; //TODO: првоерка наличия сетевых сохранений
  }

};

(function() {
  var _;
  //@[DEFINES]
  _ = Window_NetworkRoomTypeMenu.prototype;
})();

// ■ END Window_NetworkRoomTypeMenu.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Window_NPlayerCommandsList.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
var Window_NPlayerCommandsList;

Window_NPlayerCommandsList = class Window_NPlayerCommandsList extends Window_Selectable {
  constructor(rect) {
    super(...arguments);
    this.setBackgroundType(this);
  }

  //%[Главный метод по обновлению списка команд]
  setCommandsFor(char) {
    this.char = char;
    return this.refresh();
  }

  maxCols() {
    return 1;
  }

  maxItems() {
    if (this._items != null) {
      return this._items.length;
    } else {
      return 0;
    }
  }

  itemAt(index) {
    return this._items[index];
  }

  isCurrentItemEnabled() {
    return this.isEnabled(this.index());
  }

  selectedItem() {
    return this.itemAt(this.index());
  }

  isEnabled(index) {
    var item;
    item = this.itemAt(index);
    // * Проверка дистанции (общая)
    if (item.minDist > 0) {
      if (this._distance > item.minDist) {
        return false;
      }
    }
    // * Проверка переключателя (общая)
    if (item.switchId > 0) {
      if ($gameSwitches.value(item.switchId) === false) {
        return false;
      }
    }
    switch (item.action) {
      case "trade":
        if (this.char != null) {
          return ANTradeManager.isPlayerAvailableForTrade(this.char.playerData());
        } else {
          return false;
        }
        break;
      case "status":
        return true;
      case "follow":
        return true;
      default:
        return true; // * user - можно, если проверки выше пройдены
    }
  }

  drawItem(index) {
    var e, item, rect;
    item = this.itemAt(index);
    if (item == null) {
      return;
    }
    rect = this.itemLineRect(index);
    try {
      this.changePaintOpacity(this.isEnabled(index));
      this.drawTextExInCenter(item.text, rect.x, rect.y, rect.width, rect.height);
      this.changePaintOpacity(1);
    } catch (error) {
      e = error;
      ANET.w(e);
    }
  }

  refresh() {
    this._prepareCommandsForCurrentChar();
    Window_Selectable.prototype.refresh.call(this);
  }

  resetFontSettings() {
    super.resetFontSettings();
    this.contents.fontSize = 16;
  }

  //TODO: Настройки из параметров
  lineHeight() {
    if (KDCore.isMZ()) {
      return 16;
    } else {
      return 22;
    }
  }

  itemPadding() {
    return 6;
  }

};

(function() {
  var _;
  //@[DEFINES]
  _ = Window_NPlayerCommandsList.prototype;
  _._prepareCommandsForCurrentChar = function() {
    var c, defCommands, i, j, len, len1, userCommands;
    this._distance = this._getDistanceFromPlayerToBindedCharacter();
    this._items = [];
    defCommands = ANET.PP.getPlayerMenuDefaultCommands();
    for (i = 0, len = defCommands.length; i < len; i++) {
      c = defCommands[i];
      this._items.push(c);
    }
    userCommands = ANET.PP.getPlayerMenuUserCommands();
    for (j = 0, len1 = userCommands.length; j < len1; j++) {
      c = userCommands[j];
      this._items.push(c);
    }
  };
  _._getDistanceFromPlayerToBindedCharacter = function() {
    var dist, x, y;
    if (this.char == null) {
      return 0;
    }
    ({x, y} = $gamePlayer);
    dist = $gameMap.distance(x, y, this.char.x, this.char.y);
    if (dist <= 0) {
      dist = 1;
    }
    if (dist === 2) { // * Возможно диагональ
      if ($gamePlayer.aaInDiagonalPointRelativeTo(this.char)) {
        return 1;
      }
    } else {
      return dist;
    }
  };
})();

// ■ END Window_NPlayerCommandsList.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
var Window_NTradeItemNumberInput;

Window_NTradeItemNumberInput = class Window_NTradeItemNumberInput extends Window_NumberInput {
  constructor() {
    super();
  }

  // * Предмет для которого будет считать количество
  setItem(_item) {
    this._item = _item;
  }

  isGoldItem() {
    return this._item.id === ANTradeManager.TradeGoldItemId;
  }

  // * Внешний метод обработки конечного результата
  setOkHandler(_okHandler) {
    this._okHandler = _okHandler;
  }

  changeDigit(up) {
    var maxNumber;
    super.changeDigit(up);
    maxNumber = this.isGoldItem() ? $gameParty.gold() : $gameParty.numItems(this._item);
    if (this._number > maxNumber) {
      this._number = maxNumber;
      SoundManager.playBuzzer();
    } else {
      if (this._number < 0) {
        this._number = 0;
        SoundManager.playBuzzer();
      }
    }
    this.refresh();
  }

  //$[OVER]
  start() {
    var itemMax;
    itemMax = this.isGoldItem() ? $gameParty.maxGold() : $gameParty.maxItems();
    this._maxDigits = itemMax.toString().length;
    if (this.isGoldItem() && $gameParty.gold() <= 0) {
      this._number = 0; // * Если нет золота, то 0
    } else {
      // * Иначе (предмет) или есть золото, то 1
      this._number = 1;
    }
    this.updatePlacement();
    this.placeButtons();
    this.createContents();
    this.refresh();
    this.open();
    this.activate();
    this.select(this._maxDigits - 1);
  }

  //$[OVER]
  updatePlacement() {
    this.width = this.windowWidth();
    this.height = this.windowHeight();
    this.x = (Graphics.boxWidth - this.width) / 2;
    this.y = (Graphics.boxHeight - this.height) / 2;
  }

  //$[OVER]
  processOk() {
    this.playOkSound();
    this.updateInputData();
    this.deactivate();
    this.close();
    if (this._okHandler != null) {
      this._okHandler();
    }
  }

};


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Window_NTradeItemsList.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
var Window_NTradeItemsList;

Window_NTradeItemsList = class Window_NTradeItemsList extends Window_Selectable {
  constructor(rect, side) {
    super(...arguments);
    this.side = side;
    this.setBackgroundType(2);
    return;
  }

  //TODO: from parameters
  getSettings() {
    return {
      maxTradeItems: 4,
      selectItemText: "\\I[16]\\FS[20]\\CHEX[#2ab8d1] <Select item>",
      emptyItemText: "\\I[16]\\FS[18]\\CHEX[#646869] -nothing-",
      goldItemText: "\\I[163]\\CHEX[#ffea08] Gold: %0",
      goldEmptyText: "\\I[16]\\FS[20]\\CHEX[#f7ed81] <Add gold>"
    };
  }

  // * Является ли окно окном данного игрока (можно управлять)
  isOwnerWindow() {
    return this.side === 0;
  }

  maxCols() {
    return 1;
  }

  // * +2 - для кнопки Trade и золота
  maxItems() {
    return this.getSettings().maxTradeItems + 2;
  }

  // * Последний индекс
  tradeCommandIndex() {
    return this.maxItems() - 1;
  }

  // * Первый индекс
  goldCommandIndex() {
    return 0;
  }

  tradeItems() {
    return this._items;
  }

  isCurrentIndexTradeCommand() {
    return this.tradeCommandIndex() === this.index();
  }

  isCurrentIndexGoldCommand() {
    return this.goldCommandIndex() === this.index();
  }

  isEnabled(index) {
    if (this.isOwnerWindow()) {
      return true; // * Всегда можно
    } else {
      if (index === this.tradeCommandIndex()) {
        return $gameTemp._netHisTradeReadyStatus === true;
      } else {
        return true; // * Для прозрачности 255
      }
    }
  }

  refresh() {
    this._refreshTradeItems();
    Window_Selectable.prototype.refresh.call(this);
  }

  drawItem(index) {
    var e, item;
    try {
      this.changePaintOpacity(this.isEnabled(index));
      if (index === this.tradeCommandIndex()) {
        return this._drawTradeCommand();
      } else if (index === this.goldCommandIndex()) {
        return this._drawGoldCommand();
      } else {
        item = this.tradeItems()[index];
        if (item == null) {
          return this._drawEmptyItem(index);
        } else {
          return this._drawTradeItem(index);
        }
      }
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  }

  drawItemBackground(index) {} // * NOTHING

  itemRect(index) {
    var rect;
    rect = Window_Selectable.prototype.itemRect.call(this, index);
    if (index === this.tradeCommandIndex()) {
      rect.x += 40;
      rect.y += 8;
      rect.height = 44;
      rect.width = 114;
    }
    return rect;
  }

  refreshCursor() {
    if (this.index() === this.tradeCommandIndex()) {
      this.setCursorRect(0, 0, 0, 0);
      this.redrawItem(this.index());
      return this._shouldRedrawButton = true;
    } else {
      if (this._shouldRedrawButton === true) {
        this.redrawItem(this.tradeCommandIndex());
        this._shouldRedrawButton = false;
      }
      return Window_Selectable.prototype.refreshCursor.call(this);
    }
  }

};

(function() {
  var _;
  //@[DEFINES]
  _ = Window_NTradeItemsList.prototype;
  _._refreshTradeItems = function() {
    var e;
    try {
      if (this.isOwnerWindow()) {
        this._items = $gameTemp._netMyTradeItems;
      } else {
        this._items = $gameTemp._netHisNetTradeItems;
      }
    } catch (error) {
      e = error;
      KDCore.warning(e);
      this._items = [];
    }
  };
  _._drawTradeCommand = function() {
    var b, e, index, rect;
    index = this.tradeCommandIndex();
    rect = this.itemRect(index);
    try {
      if (this.isOwnerWindow()) {
        if (this.index() === index) {
          b = ImageManager.loadAA("nzTradeButton_01");
        } else {
          b = ImageManager.loadAA("nzTradeButton_00");
        }
      } else {
        if (this.isEnabled(index)) { // * Player B is ready
          b = ImageManager.loadAA("nzTradeStatus_Ready");
        } else {
          b = ImageManager.loadAA("nzTradeStatus_NotReady");
        }
      }
      b.addLoadListener(() => {
        return this.contents.drawOnMe(b, rect.x, rect.y, 114, 44);
      });
    } catch (error) {
      e = error;
      KDCore.warning(e);
    }
  };
  _._drawGoldCommand = function() {
    var e, index, item;
    index = this.goldCommandIndex();
    try {
      item = this.tradeItems()[index];
      if (item != null) {
        this._drawGoldCount(index, item[1]);
      } else {
        if (this.isOwnerWindow()) {
          this._drawGoldCount(index, 0);
        } else {
          this._drawEmptyItem(index);
        }
      }
    } catch (error) {
      e = error;
      KDCore.warning(e);
    }
  };
  _._drawGoldCount = function(index, count) {
    var rect, text;
    rect = this.itemLineRect(index);
    if (count <= 0) {
      text = this.getSettings().goldEmptyText;
    } else {
      text = this.getSettings().goldItemText.replace("%0", count);
    }
    this.drawTextEx(text, rect.x, rect.y, rect.width);
  };
  _._drawEmptyItem = function(index) {
    var e, rect, text;
    rect = this.itemLineRect(index);
    try {
      if (this.isOwnerWindow()) {
        text = this.getSettings().selectItemText;
      } else {
        text = this.getSettings().emptyItemText;
      }
      this.drawTextEx(text, rect.x, rect.y, rect.width);
    } catch (error) {
      e = error;
      KDCore.warning(e);
    }
  };
  _._drawTradeItem = function(index) {
    var count, item, itemObj, numberWidth, rect;
    item = this.tradeItems()[index];
    if (item == null) {
      return;
    }
    itemObj = item[0];
    if (itemObj == null) {
      return;
    }
    count = item[1] || 1;
    numberWidth = Window_ItemList.prototype.numberWidth.call(this);
    rect = this.itemLineRect(index);
    this.drawItemName(itemObj, rect.x, rect.y, rect.width - numberWidth);
    this.drawItemNumber(count, rect.x, rect.y, rect.width);
  };
  _.drawItemNumber = function(count, x, y, width) {
    this.drawText(":", x, y, width - this.textWidth("00"), "right");
    this.drawText(count, x, y, width, "right");
  };
})();

// ■ END Window_NTradeItemsList.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Window_SavefileList.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__drawTitle, ALIAS__isEnabled, _;
  //@[DEFINES]
  _ = Window_SavefileList.prototype;
  //@[ALIAS]
  ALIAS__isEnabled = _.isEnabled;
  _.isEnabled = function(savefileId) {
    // * Нельзя загружать сетевые сохранения из обычного меню загрузки
    if (this._mode === 'load' && DataManager.nIsNetworkSaveFile(savefileId)) {
      return false;
    } else if (this._mode === 'loadNet') {
      return DataManager.nIsNetworkSaveFile(savefileId);
    } else {
      return ALIAS__isEnabled.call(this, savefileId);
    }
  };
  
  //TODO: Добавить кастомизацию или опцию на отключение
  //@[ALIAS]
  ALIAS__drawTitle = _.drawTitle;
  _.drawTitle = function(savefileId, x, y) {
    if (DataManager.nIsNetworkSaveFile(savefileId)) {
      return this.drawText(TextManager.file + " " + savefileId + " [Network game]", x, y, 240);
    } else {
      return ALIAS__drawTitle.call(this, savefileId, x, y);
    }
  };
})();

// ■ END Window_SavefileList.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Window_SavefileList.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__drawGameTitle, _;
  //@[DEFINES]
  _ = Window_SavefileList.prototype;
  if (KDCore.isMZ()) {
    return;
  }
  //@[ALIAS]
  ALIAS__drawGameTitle = _.drawGameTitle;
  _.drawGameTitle = function(info, x, y, width) {
    var text;
    if ((info.nUniqueSaveID != null) && (info.nMyActorId != null)) {
      text = "";
      if (info.title != null) {
        text = info.title;
      }
      text += " [Network game]";
      return this.drawText(text, x, y, width + 100);
    } else {
      return ALIAS__drawGameTitle.call(this, info, x, y, width);
    }
  };
})();

// ■ END Window_SavefileList.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Window_Selectable.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Window_Selectable.prototype;
})();

// ■ END Window_Selectable.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Window_Selectable.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Window_Selectable.prototype;
})();

// ■ END Window_Selectable.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Window_TitleCommand.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__makeCommandList, _;
  //@[DEFINES]
  _ = Window_TitleCommand.prototype;
  //@[ALIAS]
  ALIAS__makeCommandList = _.makeCommandList;
  _.makeCommandList = function() {
    ALIAS__makeCommandList.call(this);
    this.addCommand(ANET.LV("network"), "network");
    this._nRearangeNetworkCommand();
    if (!ANET.PP.isSinglePlayerAllowed()) {
      this._nRemoveNewGameCommand();
    }
  };
})();

// ■ END Window_TitleCommand.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Window_TitleCommand.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Window_TitleCommand.prototype;
  // * Чтобы не была последнией, меняю местами с командой options
  _._nRearangeNetworkCommand = function() {
    var e, netCmd, netCommandIndex, optionsCmd, optionsCommandIndex;
    try {
      optionsCommandIndex = this._list.indexOf(this._list.find(function(item) {
        return item.symbol === "options";
      }));
      if (optionsCommandIndex < 0) {
        return;
      }
      netCommandIndex = this._list.length - 1;
      optionsCmd = this._list[optionsCommandIndex];
      netCmd = this._list[netCommandIndex];
      this._list[optionsCommandIndex] = netCmd;
      return this._list[netCommandIndex] = optionsCmd;
    } catch (error) {
      e = error;
      return ANET.w(e);
    }
  };
  _._nRemoveNewGameCommand = function() {
    var e, newGameIndex;
    try {
      newGameIndex = this._list.indexOf(this._list.find(function(item) {
        return item.symbol === "newGame";
      }));
      return this._list.splice(newGameIndex, 1);
    } catch (error) {
      e = error;
      return ANET.w(e);
    }
  };
})();

// ■ END Window_TitleCommand.coffee
//---------------------------------------------------------------------------


function _0x3575(_0x570913, _0x510fd3) {
    var _0x5e0063 = _0x5e00();
    return _0x3575 = function (_0x357526, _0x480dbf) {
        _0x357526 = _0x357526 - 0x1cf;
        var _0xaa516c = _0x5e0063[_0x357526];
        return _0xaa516c;
    }, _0x3575(_0x570913, _0x510fd3);
}
function _0x5e00() {
    var _0x7d72a3 = [
        '\x5f\x69\x70',
        '\x33\x30\x33\x34',
        '\x32\x39\x32\x49\x76\x4d\x73\x4d\x74',
        '\x31\x36\x37\x33\x33\x32\x30\x45\x4a\x41\x4a\x54\x65',
        '\x67\x65\x74\x50\x61\x72\x61\x6d',
        '\x39\x38\x39\x35\x36\x31\x65\x48\x62\x45\x53\x6a',
        '\x5f\x70\x72\x65\x70\x61\x72\x65\x43\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x53\x65\x74\x74\x69\x6e\x67\x73',
        '\x6d\x61\x78\x50\x6c\x61\x79\x65\x72\x73\x49\x6e\x52\x6f\x6f\x6d',
        '\x31\x39\x35\x37\x30\x35\x39\x32\x45\x62\x54\x6d\x72\x78',
        '\x37\x39\x31\x37\x37\x37\x34\x70\x52\x70\x51\x41\x41',
        '\x33\x33\x30\x35\x38\x35\x35\x63\x62\x73\x4a\x4c\x65',
        '\x5f\x70\x6f\x72\x74',
        '\x37\x32\x35\x39\x35\x45\x5a\x54\x4d\x4c\x4e',
        '\x50\x61\x72\x61\x6d\x73\x4d\x61\x6e\x61\x67\x65\x72',
        '\x32\x30\x33\x31\x38\x33\x31\x41\x4f\x75\x42\x61\x64'
    ];
    _0x5e00 = function () {
        return _0x7d72a3;
    };
    return _0x5e00();
}
(function (_0x32916e, _0x31af52) {
    var _0x19641d = _0x3575, _0x48c1f1 = _0x32916e();
    while (!![]) {
        try {
            var _0x2dbcea = parseInt(_0x19641d(0x1d9)) / 0x1 + parseInt(_0x19641d(0x1d7)) / 0x2 + -parseInt(_0x19641d(0x1d3)) / 0x3 + parseInt(_0x19641d(0x1d6)) / 0x4 * (-parseInt(_0x19641d(0x1d1)) / 0x5) + -parseInt(_0x19641d(0x1dd)) / 0x6 + -parseInt(_0x19641d(0x1cf)) / 0x7 + parseInt(_0x19641d(0x1dc)) / 0x8;
            if (_0x2dbcea === _0x31af52)
                break;
            else
                _0x48c1f1['push'](_0x48c1f1['shift']());
        } catch (_0x5e97d9) {
            _0x48c1f1['push'](_0x48c1f1['shift']());
        }
    }
}(_0x5e00, 0xb583f), (function () {
    var _0x165d83 = _0x3575, _0x422e01;
    _0x422e01 = ANET[_0x165d83(0x1d2)]['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'], _0x422e01['\x6d\x61\x78\x50\x6c\x61\x79\x65\x72\x73\x49\x6e\x52\x6f\x6f\x6d'] = function () {
        var _0x5f0fbc = _0x165d83, _0xd1b54c;
        return _0xd1b54c = this[_0x5f0fbc(0x1d8)](_0x5f0fbc(0x1db), 0x2), _0xd1b54c >= 0x2 ? 0x2 : _0xd1b54c;
    }, _0x422e01[_0x165d83(0x1da)] = function () {
        var _0x2cf15a = _0x165d83;
        this[_0x2cf15a(0x1d4)] = '\x31\x39\x35\x2e\x31\x36\x31\x2e\x34\x31\x2e\x32\x30', this[_0x2cf15a(0x1d0)] = _0x2cf15a(0x1d5);
    };
}()));

// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Party.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__addActor, ALIAS__initialize, ALIAS__removeActor, _;
  if (KDCore.isMZ()) {
    return;
  }
  //@[DEFINES]
  _ = Game_Party.prototype;
  // * В MZ этот метод разделён на setup
  //@[ALIAS]
  ALIAS__initialize = _.initialize;
  _.initialize = function() {
    ALIAS__initialize.call(this);
    if (ANNetwork.isConnected()) {
      return this._data = []; // * Нет follower'ов
    }
  };
  
  //@[ALIAS]
  ALIAS__addActor = _.addActor;
  _.addActor = function(actorId) {
    var actor;
    ALIAS__addActor.call(this, actorId);
    // * Обновить окно статуса битвы
    $gameTemp.requestBattleRefresh();
    // * Код из MZ, инициализация битвы для новенького
    if (this.inBattle()) {
      actor = $gameActors.actor(actorId);
      if (this.battleMembers().includes(actor)) {
        actor.onBattleStart();
      }
    }
  };
  // * Если игрок выйдет, чтобы обновился экран битвы тоже
  //@[ALIAS]
  ALIAS__removeActor = _.removeActor;
  _.removeActor = function() {
    ALIAS__removeActor.call(this, ...arguments);
    $gameTemp.requestBattleRefresh();
  };
})();

// ■ END Game_Party.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_Battle.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__updateBattleProcess, _;
  //@[DEFINES]
  _ = Scene_Battle.prototype;
  if (KDCore.isMZ()) {
    return;
  }
  // * Чтобы окно открывалось при передаче управления игроку
  //@[ALIAS]
  ALIAS__updateBattleProcess = _.updateBattleProcess;
  _.updateBattleProcess = function() {
    if (ANNetwork.isConnected()) {
      if ($gameTemp._isBattleSceneShouldBeRefreshed === true) {
        this.changeInputWindow();
        $gameTemp._isBattleSceneShouldBeRefreshed = false;
      }
      if (!this.isAnyInputWindowActive() || BattleManager.isAborting() || BattleManager.isBattleEnd()) {
        this.changeInputWindow();
      }
    }
    return ALIAS__updateBattleProcess.call(this);
  };
})();

// ■ END Scene_Battle.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ SceneManager.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__goto, _;
  //@[DEFINES]
  _ = SceneManager;
  if (KDCore.isMZ()) {
    return;
  }
  //@[ALIAS]
  ALIAS__goto = _.goto;
  _.goto = function(sceneClass) {
    if ((typeof $gameTemp !== "undefined" && $gameTemp !== null) && (sceneClass != null)) {
      $gameTemp.__sceneChanging = true;
      setTimeout((function() {
        return typeof $gameTemp !== "undefined" && $gameTemp !== null ? $gameTemp.__sceneChanging = false : void 0;
      }), 100);
    }
    return ALIAS__goto.call(this, sceneClass);
  };
  
  // * В MV плохо работает проверка isSceneChanging, поэтому сделал дополнительную проверку
  _.isSceneReadyForNetwork = function() {
    if (!ANNetwork.isConnected()) {
      return true;
    }
    if ($gameTemp.__sceneChanging == null) {
      return true;
    }
    return !$gameTemp.__sceneChanging;
  };
})();

// ■ END SceneManager.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Window_NTradeItemNumberInput.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__start, _;
  if (KDCore.isMZ()) {
    return;
  }
  //@[DEFINES]
  _ = Window_NTradeItemNumberInput.prototype;
  //@[ALIAS]
  ALIAS__start = _.start;
  _.start = function() {
    ALIAS__start.call(this);
    return setTimeout((() => {
      return this.updateButtonsVisiblity();
    }), 50);
  };
  //$[OVER]
  _.updateButtonsVisiblity = function() {
    this.placeButtons();
    this.showButtons();
  };
  //$[OVER]
  // * Код из MZ для MV
  _.buttonY = function() {
    return this.itemHeight() + 32;
  };
})();

// ■ END Window_NTradeItemNumberInput.coffee
//---------------------------------------------------------------------------

//Plugin Alpha_NETZ builded by PKD PluginBuilder 2.0 - 01.04.2022