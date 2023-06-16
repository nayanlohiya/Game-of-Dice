var randomnumber1 = Math.floor(Math.random()*6)+1;
var randomdice1= "images/dice"+randomnumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomdice1);

var randomnumber2 = Math.floor(Math.random()*6)+1;
var randomdice2= "images/dice"+randomnumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomdice2);


if(randomnumber1>randomnumber2)
document.querySelector("h1").innerHTML="🚩 player 1 wins!";
else if(randomnumber1<randomnumber2)
document.querySelector("h1").innerHTML="🚩 player 2 wins!";
else
document.querySelector("h1").innerHTML=" Draw!";
