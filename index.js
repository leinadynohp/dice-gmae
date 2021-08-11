function diceRoll() {
    var randomNumber1 = Math.ceil(Math.random()*6);
    var randomNumber2 = Math.ceil(Math.random()*6);

    var diceImage1 = "./images/dice" + randomNumber1 + ".png";
    var diceImage2 = "./images/dice" + randomNumber2 + ".png";

    document.querySelector('.dice-image-1').setAttribute('src', diceImage1);
    document.querySelector('.dice-image-2').setAttribute('src', diceImage2);

    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML="<img src='./images/finish.png' width='100rem'> Player1 Won!"
    } else if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").innerHTML="Player2 Won! <img src='./images/finish.png' width='100rem'>"
    } else {
        document.querySelector("h1").innerHTML="<img src='./images/finish.png' width='100rem'> Draw! &nbsp <img src='./images/finish.png' width='100rem'>"
    }
}