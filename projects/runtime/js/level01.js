var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function (game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            "name": "Robot Romp",
            "number": 1,
            "speed": -3,
            "gameItems": [
                { type: "sawBlade", x: 400, y: groundY - 10 },
                { type: "sawBlade", x: 2500, y: groundY - 20 },
                { type: "sawBlade", x: 3100, y: groundY - 120 },
                { type: "bBall", x: 2000, y: groundY - 10 },
                { type: "bBall", x: 800, y: groundY - 120 },
                { type: "bBall", x: 1500, y: groundY - 10 },
                { type: "enemy", x: 2900, y: groundY - 50 },
                { type: "enemy", x: 800, y: groundY - 120 },
                { type: "enemy", x: 1400, y: groundY - 50 },
                { type: "reward", x: 3200, y: groundY - 120 },
                { type: "reward", x: 4000, y: groundY - 120 },
                { type: "reward", x: 1200, y: groundY - 50 },
            ]
        };

        for (var i = 0; i <= levelData.gameItems.length; i++) {
            var gameItem = levelData.gameItems[i];
            if (gameItem.type === "sawBlade") {
                createSawBlade(gameItem.x, gameItem.y);
            } else if (gameItem.type === "bBall") {
                createBBall(gameItem.x, gameItem.y);
            } else if (gameItem.type === "enemy") {
                createEnemy(gameItem.x, gameItem.y);
            } else if (gameItem.type === "reward") {
                createReward(gameItem.x, gameItem.y);
            }
        }



        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(false);

        // TODO 6 and on go here
        // BEGIN EDITING YOUR CODE HERE

        function createSawBlade(x, y) {
            var hitZoneSize = 25;
            var damageFromObstacle = 10;
            var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle)
            sawBladeHitZone.x = x;
            sawBladeHitZone.y = y;
            game.addGameItem(sawBladeHitZone);
            var obstacleImage = draw.bitmap("img/sawblade.png");
            obstacleImage.x = -25;
            obstacleImage.y = -25;
            sawBladeHitZone.addChild(obstacleImage);
        };

        // var hitZoneSize = 25;
        // var damageFromObstacle = 10;
        // var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle)
        // sawBladeHitZone.x = 2400;
        // sawBladeHitZone.y = 320;
        // game.addGameItem(sawBladeHitZone);
        // var obstacleImage = draw.bitmap("img/sawblade.png");
        // obstacleImage.x = -25;
        // obstacleImage.y = -25;
        // sawBladeHitZone.addChild(obstacleImage);

        // var hitZoneSize = 25;
        // var damageFromObstacle = 10;
        // var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle)
        // sawBladeHitZone.x = 1700;
        // sawBladeHitZone.y = 240;
        // game.addGameItem(sawBladeHitZone);
        // var obstacleImage = draw.bitmap("img/sawblade.png");
        // obstacleImage.x = -25;
        // obstacleImage.y = -25;
        // sawBladeHitZone.addChild(obstacleImage);


        // var hitZoneSize = 25;
        // var damageFromObstacle = 10;
        // var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle)
        // sawBladeHitZone.x = 5100;
        // sawBladeHitZone.y = 240;
        // game.addGameItem(sawBladeHitZone);
        // var obstacleImage = draw.bitmap("img/sawblade.png");
        // obstacleImage.x = -25;
        // obstacleImage.y = -25;
        // sawBladeHitZone.addChild(obstacleImage);

        // var hitZoneSize = 25;
        // var damageFromObstacle = 10;
        // var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle)
        // sawBladeHitZone.x = 5400;
        // sawBladeHitZone.y = 320;
        // game.addGameItem(sawBladeHitZone);
        // var obstacleImage = draw.bitmap("img/sawblade.png");
        // obstacleImage.x = -25;
        // obstacleImage.y = -25;
        // sawBladeHitZone.addChild(obstacleImage);

        // var hitZoneSize = 25;
        // var damageFromObstacle = 10;
        // var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle)
        // sawBladeHitZone.x = 4700;
        // sawBladeHitZone.y = 240;
        // game.addGameItem(sawBladeHitZone);
        // var obstacleImage = draw.bitmap("img/sawblade.png");
        // obstacleImage.x = -25;
        // obstacleImage.y = -25;
        // sawBladeHitZone.addChild(obstacleImage);



        function createBBall(x, y) {
            var hitZoneSize = 25;
            var damageFromObstacle = 10;
            var bballHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
            bballHitZone.x = x;
            bballHitZone.y = y;
            game.addGameItem(bballHitZone);
            var obstacleImage = draw.bitmap("https://img.icons8.com/external-inkubators-flat-inkubators/2x/external-basketball-sport-inkubators-flat-inkubators-2.png");
            obstacleImage.x = -25;
            obstacleImage.y = -25;
            bballHitZone.addChild(obstacleImage);
        }


        // createBball(400, 240);
        // createBball(750, 320);
        // createBball(1000, 240);
        // createBball(3400, 240);
        // createBball(3750, 320);
        // createBball(4000, 240);

        function createEnemy(x, y) {
            var enemy = game.createGameItem("enemy", 25);
            var redSquare = draw.rect(50, 50, "red");
            redSquare.x = -25;
            redSquare.y = -25;
            enemy.addChild(redSquare);
            enemy.x = x;
            enemy.y = y;
            game.addGameItem(enemy);
            enemy.velocityX = -3;
            enemy.rotationalVelocity = 4
            enemy.onPlayerCollision = function () {
                game.changeIntegrity(-20)
            };
            enemy.onProjectileCollision = function () {
                game.increaseScore(100);
                enemy.fadeOut();
            }
        }

        // createEnemy(2000, groundY - 10);
        // createEnemy(800, groundY - 120);
        // createEnemy(1500, groundY - 50);
        // createEnemy(6000, groundY - 10);
        // createEnemy(4800, groundY - 120);
        // createEnemy(5500, groundY - 50);


        function createReward(x, y) {
            var reward = game.createGameItem("reward", 25);
            var blueSquare = draw.rect(50, 50, "blue");
            blueSquare.x = -25;
            blueSquare.y = -25;
            reward.addChild(blueSquare);
            reward.x = x;
            reward.y = y;
            game.addGameItem(reward);
            reward.velocityX = -3;
            reward.rotationalVelocity = -4
            reward.onPlayerCollision = function () {
                game.changeIntegrity(50)
                reward.fadeOut();
            };
            reward.onProjectileCollision = function () {
                game.increaseScore(100);
                reward.fadeOut();
            }
        }

        // createReward(2500, groundY - 50);
        // createReward(6500, groundY - 50);



        // DO NOT EDIT CODE BELOW HERE
    }


    // DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
    if ((typeof process !== 'undefined') &&
        (typeof process.versions.node !== 'undefined')) {
        // here, export any references you need for tests //
        module.exports = level01;
    };
}
