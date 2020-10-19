var x = document.querySelector(".Player1").innerHTML = prompt("enter player 1 name")
var y = document.querySelector(".Player2").innerHTML = prompt("enter player 2 name")

document.querySelector(".button").addEventListener("click",run)

function run() {
var randomNumber1 = Math.floor((Math.random()*6)+1)
var randomNumber2 = Math.floor((Math.random()*6)+1)
//var dice1 =document.querySelector(".img1").setAttribute("src","images/dice1.png")

var dice1 =document.querySelector(".img1")
var dice2 =document.querySelector(".img2")

dice1.setAttribute("src","images/dice" + randomNumber1 + ".png")
dice2.setAttribute("src","images/dice" + randomNumber2 + ".png")

if(randomNumber1>randomNumber2){
		document.querySelector("h1").textContent = x + " Wins"
}else if(randomNumber2>randomNumber1){
	    document.querySelector("h1").textContent = y + " Wins"
}else{
		document.querySelector("h1").textContent = "It\'s a draw"
}

}