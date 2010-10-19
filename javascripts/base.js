/* 
 * Player A: Arrow Keys
 * Player B: Á, S
 */


// ---- Game Init ---- //

// Creates the Game Canvas (canvasID, width, height, fullscreen)
var game = new Game('gameCanvas', 600, 400, false);

// Creates a new Player (name)
var playerA = game.addPlayer('Dave');
var playerB = game.addPlayer('Dave');

// Set a callback method whenever a hit happens
game.setCollisionCallback(function (playerID) {
	
	if (game.playerManager.numberOfPlayersAlive() < 2) {
		game.restart();
	}
});

// start the game
game.start();


// ---- Game Controlling Methods ----//
function onAddPlayer(name) {
	return game.addPlayer(name);	
}

function onRestartGame() {
	game.restart();
}

function onStopGame() {
	game.stop();	
}


 
 
 // ---- Game Controlling (Keyboard) ---- // 
var directionA = 0;
var directionB = 0;
 
setInterval(function() {
    game.handleControl(playerA, directionA);
    game.handleControl(playerB, directionB);
}, 10);


window.onkeydown = function(event) {
    switch (event.keyCode) {
        case 37:
            directionA = -1;
            break;
        case 39:
            directionA = 1;
            break;
        case 65:
            directionB = -1;
            break;
        case 83:
            directionB = 1;
            break;
    }
};

window.onkeyup = function(event) {
    switch (event.keyCode) {
        case 37:
            directionA = 0;
            break;
        case 39:
            directionA = 0;
            break;
        case 65:
            directionB = 0;
            break;
        case 83:
            directionB = 0;
            break;
    }
};

