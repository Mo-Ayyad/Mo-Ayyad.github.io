var init = function (window) {
    'use strict';
    var
        draw = window.opspark.draw,
        physikz = window.opspark.racket.physikz,

        app = window.opspark.makeApp(),
        canvas = app.canvas,
        view = app.view,
        fps = draw.fps('#000');


    window.opspark.makeGame = function () {

        window.opspark.game = {};
        var game = window.opspark.game;

        ////////////////////////////////////////////////////////////
        ///////////////// PROGRAM SETUP ////////////////////////////
        ////////////////////////////////////////////////////////////

        // TODO 1 : Declare and initialize our variables
        // TODO 1: Declare our variables //
        var circle;
        var circles = [];
        var drawCircle

        // TODO 2 : Create a function that draws a circle 
        function drawCircle() {
            // Code to draw a circle
            circle = draw.randomCircleInArea(canvas, true, true, '#999', 2);
            physikz.addRandomVelocity(circle, canvas, 20, 20);
            view.addChild(circle);
            circles.push(circle);
        }

        // TODO 3 / 7 : Call the drawCircle() function 
        drawCircle()
        drawCircle()
        drawCircle()
        drawCircle()
        drawCircle()
        drawCircle()
        drawCircle()
        drawCircle()
        drawCircle()
        drawCircle()
        drawCircle()
        drawCircle()
        drawCircle()
        drawCircle()
        drawCircle()
        drawCircle()
        drawCircle()
        drawCircle()
        drawCircle()
        drawCircle()
        drawCircle()
        drawCircle()
        drawCircle()
        drawCircle()
        drawCircle()
        drawCircle()
        drawCircle()
        drawCircle()
        drawCircle()
        drawCircle()
        drawCircle()
        drawCircle()
        drawCircle()
        drawCircle()
        drawCircle()
        drawCircle()
        drawCircle()
        drawCircle()
        drawCircle()
        drawCircle()
        drawCircle()
        drawCircle()
        drawCircle()
        drawCircle()
        drawCircle()
        drawCircle()
        drawCircle()
        drawCircle()
        drawCircle()
        drawCircle()
        drawCircle()
        drawCircle()
        drawCircle()
        drawCircle()
        drawCircle()
        drawCircle()
        drawCircle()
        drawCircle()
        drawCircle()
        drawCircle()
        drawCircle()
        drawCircle()
        drawCircle()
        drawCircle()
        drawCircle()
        drawCircle()
        drawCircle()
        drawCircle()
        drawCircle()
        drawCircle()
        drawCircle()
        drawCircle()
        drawCircle()
        drawCircle()
        drawCircle()
        drawCircle()
        drawCircle()
        drawCircle()
        drawCircle()
        drawCircle()
        drawCircle()
        drawCircle()
        drawCircle()
        drawCircle()
        drawCircle()
        drawCircle()
        drawCircle()
        drawCircle()
        drawCircle()
        drawCircle()
        drawCircle()
        drawCircle()
        drawCircle()
        drawCircle()
        drawCircle()
        drawCircle()
        drawCircle()
        drawCircle()
        drawCircle()
        drawCircle()

        // for (circle = 0; circle > 100; circle++){
        //     drawCircle()
        // }
        ///////////////// PROGRAM LOGIC ////////////////////////////
        ////////////////////////////////////////////////////////////

        /* 
        This Function is called 60 times/second producing 60 frames/second.
        In each frame, for every circle, it should redraw that circle
        and check to see if it has drifted off the screen.         
        */
        function update() {
            // TODO 4 : Update the circle's position //


            physikz.updatePosition(circles[0]);
            physikz.updatePosition(circles[1]);
            physikz.updatePosition(circles[2]);
            physikz.updatePosition(circles[3]);
            physikz.updatePosition(circles[4]);
            physikz.updatePosition(circles[5]);
            physikz.updatePosition(circles[6]);
            physikz.updatePosition(circles[7]);
            physikz.updatePosition(circles[8]);
            physikz.updatePosition(circles[9]);
            physikz.updatePosition(circles[10]);
            physikz.updatePosition(circles[11]);
            physikz.updatePosition(circles[12]);
            physikz.updatePosition(circles[13]);
            physikz.updatePosition(circles[14]);
            physikz.updatePosition(circles[15]);
            physikz.updatePosition(circles[16]);
            physikz.updatePosition(circles[17]);
            physikz.updatePosition(circles[18]);
            physikz.updatePosition(circles[19]);
            physikz.updatePosition(circles[20]);
            physikz.updatePosition(circles[21]);
            physikz.updatePosition(circles[22]);
            physikz.updatePosition(circles[23]);
            physikz.updatePosition(circles[24]);
            physikz.updatePosition(circles[25]);
            physikz.updatePosition(circles[26]);
            physikz.updatePosition(circles[27]);
            physikz.updatePosition(circles[28]);
            physikz.updatePosition(circles[29]);
            physikz.updatePosition(circles[30]);
            physikz.updatePosition(circles[31]);
            physikz.updatePosition(circles[32]);
            physikz.updatePosition(circles[33]);
            physikz.updatePosition(circles[34]);
            physikz.updatePosition(circles[35]);
            physikz.updatePosition(circles[36]);
            physikz.updatePosition(circles[37]);
            physikz.updatePosition(circles[38]);
            physikz.updatePosition(circles[39]);
            physikz.updatePosition(circles[40]);
            physikz.updatePosition(circles[41]);
            physikz.updatePosition(circles[42]);
            physikz.updatePosition(circles[43]);
            physikz.updatePosition(circles[44]);
            physikz.updatePosition(circles[45]);
            physikz.updatePosition(circles[46]);
            physikz.updatePosition(circles[47]);
            physikz.updatePosition(circles[48]);
            physikz.updatePosition(circles[49]);
            physikz.updatePosition(circles[50]);
            physikz.updatePosition(circles[51]);
            physikz.updatePosition(circles[52]);
            physikz.updatePosition(circles[53]);
            physikz.updatePosition(circles[54]);
            physikz.updatePosition(circles[55]);
            physikz.updatePosition(circles[56]);
            physikz.updatePosition(circles[57]);
            physikz.updatePosition(circles[58]);
            physikz.updatePosition(circles[59]);
            physikz.updatePosition(circles[60]);
            physikz.updatePosition(circles[61]);
            physikz.updatePosition(circles[62]);
            physikz.updatePosition(circles[63]);
            physikz.updatePosition(circles[64]);
            physikz.updatePosition(circles[65]);
            physikz.updatePosition(circles[66]);
            physikz.updatePosition(circles[67]);
            physikz.updatePosition(circles[68]);
            physikz.updatePosition(circles[69]);
            physikz.updatePosition(circles[70]);
            physikz.updatePosition(circles[71]);
            physikz.updatePosition(circles[72]);
            physikz.updatePosition(circles[73]);
            physikz.updatePosition(circles[74]);
            physikz.updatePosition(circles[75]);
            physikz.updatePosition(circles[76]);
            physikz.updatePosition(circles[77]);
            physikz.updatePosition(circles[78]);
            physikz.updatePosition(circles[79]);
            physikz.updatePosition(circles[80]);
            physikz.updatePosition(circles[81]);
            physikz.updatePosition(circles[82]);
            physikz.updatePosition(circles[83]);
            physikz.updatePosition(circles[84]);
            physikz.updatePosition(circles[85]);
            physikz.updatePosition(circles[86]);
            physikz.updatePosition(circles[87]);
            physikz.updatePosition(circles[88]);
            physikz.updatePosition(circles[89]);
            physikz.updatePosition(circles[90]);
            physikz.updatePosition(circles[91]);
            physikz.updatePosition(circles[92]);
            physikz.updatePosition(circles[93]);
            physikz.updatePosition(circles[94]);
            physikz.updatePosition(circles[95]);
            physikz.updatePosition(circles[96]);
            physikz.updatePosition(circles[97]);
            physikz.updatePosition(circles[98]);
            physikz.updatePosition(circles[99]);
            

            // for(var circles = 0; circles < eachCircle.length; circles++) {
            //     var eachCircle = eachCircle[circles];
            // }

            // TODO 5 / 10 : Call game.checkCirclePosition() on your circles.
            // TODO 5 : Call game.checkCirclePosition() on your circles.


            game.checkCirclePosition(circles[0]);
            game.checkCirclePosition(circles[1]);
            game.checkCirclePosition(circles[2]);
            game.checkCirclePosition(circles[3]);
            game.checkCirclePosition(circles[4]);
            game.checkCirclePosition(circles[6]);
            game.checkCirclePosition(circles[7]);
            game.checkCirclePosition(circles[8]);
            game.checkCirclePosition(circles[9]);
            game.checkCirclePosition(circles[10]);
            game.checkCirclePosition(circles[11]);
            game.checkCirclePosition(circles[12]);
            game.checkCirclePosition(circles[13]);
            game.checkCirclePosition(circles[14]);
            game.checkCirclePosition(circles[15]);
            game.checkCirclePosition(circles[16]);
            game.checkCirclePosition(circles[17]);
            game.checkCirclePosition(circles[18]);
            game.checkCirclePosition(circles[19]);
            game.checkCirclePosition(circles[20]);
            game.checkCirclePosition(circles[21]);
            game.checkCirclePosition(circles[22]);
            game.checkCirclePosition(circles[23]);
            game.checkCirclePosition(circles[24]);
            game.checkCirclePosition(circles[25]);
            game.checkCirclePosition(circles[26]);
            game.checkCirclePosition(circles[27]);
            game.checkCirclePosition(circles[28]);
            game.checkCirclePosition(circles[29]);
            game.checkCirclePosition(circles[30]);
            game.checkCirclePosition(circles[31]);
            game.checkCirclePosition(circles[32]);
            game.checkCirclePosition(circles[33]);
            game.checkCirclePosition(circles[34]);
            game.checkCirclePosition(circles[35]);
            game.checkCirclePosition(circles[36]);
            game.checkCirclePosition(circles[37]);
            game.checkCirclePosition(circles[38]);
            game.checkCirclePosition(circles[39]);
            game.checkCirclePosition(circles[40]);
            game.checkCirclePosition(circles[41]);
            game.checkCirclePosition(circles[42]);
            game.checkCirclePosition(circles[43]);
            game.checkCirclePosition(circles[44]);
            game.checkCirclePosition(circles[45]);
            game.checkCirclePosition(circles[46]);
            game.checkCirclePosition(circles[47]);
            game.checkCirclePosition(circles[48]);
            game.checkCirclePosition(circles[49]);
            game.checkCirclePosition(circles[50]);
            game.checkCirclePosition(circles[51]);
            game.checkCirclePosition(circles[52]);
            game.checkCirclePosition(circles[53]);
            game.checkCirclePosition(circles[54]);
            game.checkCirclePosition(circles[56]);
            game.checkCirclePosition(circles[57]);
            game.checkCirclePosition(circles[58]);
            game.checkCirclePosition(circles[59]);
            game.checkCirclePosition(circles[60]);
            game.checkCirclePosition(circles[61]);
            game.checkCirclePosition(circles[62]);
            game.checkCirclePosition(circles[63]);
            game.checkCirclePosition(circles[64]);
            game.checkCirclePosition(circles[66]);
            game.checkCirclePosition(circles[67]);
            game.checkCirclePosition(circles[68]);
            game.checkCirclePosition(circles[69]);
            game.checkCirclePosition(circles[70]);
            game.checkCirclePosition(circles[71]);
            game.checkCirclePosition(circles[72]);
            game.checkCirclePosition(circles[73]);
            game.checkCirclePosition(circles[74]);
            game.checkCirclePosition(circles[76]);
            game.checkCirclePosition(circles[77]);
            game.checkCirclePosition(circles[78]);
            game.checkCirclePosition(circles[79]);
            game.checkCirclePosition(circles[80]);
            game.checkCirclePosition(circles[81]);
            game.checkCirclePosition(circles[82]);
            game.checkCirclePosition(circles[83]);
            game.checkCirclePosition(circles[84]);
            game.checkCirclePosition(circles[86]);
            game.checkCirclePosition(circles[87]);
            game.checkCirclePosition(circles[88]);
            game.checkCirclePosition(circles[89]);
            game.checkCirclePosition(circles[90]);
            game.checkCirclePosition(circles[91]);
            game.checkCirclePosition(circles[92]);
            game.checkCirclePosition(circles[93]);
            game.checkCirclePosition(circles[94]);
            game.checkCirclePosition(circles[96]);
            game.checkCirclePosition(circles[97]);
            game.checkCirclePosition(circles[98]);
            game.checkCirclePosition(circles[99]);

            // TODO 9 : Iterate over the array


        }

        /* 
        This Function should check the position of a circle that is passed to the 
        Function. If that circle drifts off the screen, this Function should move
        it to the opposite side of the screen.
        */
        game.checkCirclePosition = function (circle) {

            // if the circle has gone past the RIGHT side of the screen then place it on the LEFT
            if (circle.x > canvas.width) {
                circle.x = 0;
            }

            // TODO 6 : YOUR CODE STARTS HERE //////////////////////
            // if the circle has gone past the TOP side of the screen then place it on the BOTTOM
            if (circle.y > canvas.height) {
                circle.y = 0;
            }
            // if the circle has gone past the LEFT side of the screen then place it on the RIGHT
            if (circle.y < 0) {
                circle.x = 0;
            }
            // if the circle has gone past the BOTTOM side of the screen then place it on the TOP
            if (circle.x < 0) {
                circle.y = 0;
            }

            // YOUR TODO 6 CODE ENDS HERE //////////////////////////
        }

        /////////////////////////////////////////////////////////////
        // --- NO CODE BELOW HERE  --- DO NOT REMOVE THIS CODE --- //
        /////////////////////////////////////////////////////////////

        view.addChild(fps);
        app.addUpdateable(fps);

        game.circle = circle;
        game.circles = circles;
        game.drawCircle = drawCircle;
        game.update = update;

        app.addUpdateable(window.opspark.game);
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if ((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = init;
}
