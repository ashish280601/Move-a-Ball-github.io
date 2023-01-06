var ball = document.getElementById('ball');

ball.style.top = ball.offsetTop + "px";
ball.style.left = ball.offsetLeft + "px";

// calculating an height and width of an css proepty of an ball
var ballWidth = ball.offsetWidth;
var ballHeight = ball.offsetHeight;

function setValue(value){
    return value + "px";
}

function keyCode(keyPress){

    var top = parseInt(ball.style.top);
    var left = parseInt(ball.style.left);

    //  W is passed
    if (keyPress == 119 || keyPress == 87){
        if (top > 10){
            ball.style.top = setValue(top - 10);
        }
    }

    // A is passed
    else if (keyPress == 97 || keyPress == 65){
        if (left > 10){
            ball.style.left = setValue(left - 10);
        }
    }

    // S is passed
    else if (keyPress == 115 || keyPress == 83){
        if (top < (window.innerHeight - ballHeight) - 10){
            ball.style.top = setValue(top + 10);
        }
    }
    // D is passed
    else if (keyPress == 100 || keyPress == 68){
        if (left < (window.innerWidth - ballWidth) - 10){
            ball.style.left = setValue(left + 10);
        }
    }
};

window.addEventListener("keypress",function (event){
//    code(event.code); //- You can use this
//    key(event.key); //- You can also use this
    keyCode(event.keyCode);
});