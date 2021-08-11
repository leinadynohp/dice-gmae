var randomNumber1={};
var randomNumber2={};

function reload() {
    randomNumber1=Math.ceil(Math.random()*6);
    randomNumber2=Math.ceil(Math.random()*6); 

    if (randomNumber1===1) {
        document.querySelector(".dice-image-1").setAttribute("src", "./images/dice1.png");
    } else if (randomNumber1===2) {
        document.querySelector(".dice-image-1").setAttribute("src", "./images/dice2.png");
    } else if (randomNumber1===3) {
        document.querySelector(".dice-image-1").setAttribute("src", "./images/dice3.png");       
    } else if (randomNumber1===4) {
        document.querySelector(".dice-image-1").setAttribute("src", "./images/dice4.png");
    } else if (randomNumber1===5) {
        document.querySelector(".dice-image-1").setAttribute("src", "./images/dice5.png");
    } else {
        document.querySelector(".dice-image-1").setAttribute("src", "./images/dice6.png");
    }

    if (randomNumber2===1) {
        document.querySelector(".dice-image-2").setAttribute("src", "./images/dice1.png");
    } else if (randomNumber2===2) {
        document.querySelector(".dice-image-2").setAttribute("src", "./images/dice2.png");
    } else if (randomNumber2===3) {
        document.querySelector(".dice-image-2").setAttribute("src", "./images/dice3.png");
    } else if (randomNumber2===4) {
        document.querySelector(".dice-image-2").setAttribute("src", "./images/dice4.png");
    } else if (randomNumber2===5) {
        document.querySelector(".dice-image-2").setAttribute("src", "./images/dice5.png");
    } else {
        document.querySelector(".dice-image-2").setAttribute("src", "./images/dice6.png");
    }

    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML="<img src='./images/finish.png' width='100rem'> Player1 Won!"
    } else if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").innerHTML="Player2 Won <img src='./images/finish.png' width='100rem'>"
    } else {
        document.querySelector("h1").innerHTML="<img src='./images/finish.png' width='100rem'> You Are Tie <img src='./images/finish.png' width='100rem'>"
    }
}

reload()