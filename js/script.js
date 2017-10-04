let char = document.querySelector("img.hero");
let char2 = document.querySelector("img.hero2");
let char3 = document.querySelector("div.girl");
let char5 = document.querySelector("div.girl2");
let char4 = document.querySelector("div.litup");
let charBg = document.querySelector(".bg");
let charBodyParts = document.querySelectorAll(".body-parts");
let button = document.querySelectorAll("button");

let moveButton = document.querySelector("#move");
let shakeButton = document.querySelector("#shake");
let jumpButton = document.querySelector("#jump");
let onejumpButton = document.querySelector("#onejump");
let hitButton = document.querySelector("#hit");
let fallButton = document.querySelector("#fall");
let fadeButton = document.querySelector("#fade");
let glowButton = document.querySelector("#glow");
let mirrorButton = document.querySelector("#mirror");
let fancyButton = document.querySelector("#fancy");
let explodeButton = document.querySelector("#explode");



shakeButton.addEventListener("click", makeShake)

function makeShake(){
    console.log("make shake");
    char.classList.toggle("shakeCSS");
    button[0].classList.toggle("yellow");
}

jumpButton.addEventListener("click", makeJump)

function makeJump(){
    console.log("make jump");
    char.classList.toggle("jumpCSS");
    button[1].classList.toggle("yellow");
}

onejumpButton.addEventListener("click", makeoneJump)

function makeoneJump(){
    console.log("make onejump");
    char.classList.toggle("onejumpCSS");
    button[2].classList.toggle("yellow");
}

hitButton.addEventListener("click", makeHit)

function makeHit(){
    console.log("make hit");
    char.classList.toggle("hitCSS");
    char2.classList.toggle("awCSS");
    var audio = document.getElementById("audio");
    audio.play();
    button[3].classList.toggle("yellow");
}

fallButton.addEventListener("click", makeFall)

function makeFall(){
    console.log("make fall");
    char2.classList.toggle("fallCSS");
    button[4].classList.toggle("yellow");
}

moveButton.addEventListener("click", makeMove)

function makeMove(){
    console.log("make move");
    char3.classList.toggle("moveCSS");
    char5.classList.remove("girl2");
    charBg.classList.toggle("movebgCSS")
    button[5].classList.toggle("yellow");
}

fadeButton.addEventListener("click", makeFade)

function makeFade(){
    console.log("make fade");
    char.classList.toggle("fadeCSS");
    button[6].classList.toggle("yellow");
}

glowButton.addEventListener("click", makeGlow)

function makeGlow(){
    console.log("make glow");
    char4.classList.toggle("glowCSS");
    button[7].classList.toggle("yellow");
}

mirrorButton.addEventListener("click", makeMirror)

function makeMirror(){
    console.log("make mirror");
    char5.classList.add("girl2");
    char5.classList.toggle("mirrorCSS");
    button[8].classList.toggle("yellow");
}

fancyButton.addEventListener("click", makeFancy)

function makeFancy(){
    console.log("make fancy");
    char5.classList.add("girl2");
    char3.classList.toggle("fancyCSS");
    char5.classList.toggle("fancygirl2");
    button[9].classList.toggle("yellow");
}

explodeButton.addEventListener("click", makeExplode)

function makeExplode(){
    console.log("make explode");
    char2.classList.toggle("dissapearCSS");
    charBodyParts[0].classList.toggle("body-partsCSS");
    charBodyParts[1].classList.toggle("body-partsCSS");
    charBodyParts[2].classList.toggle("body-partsCSS");
    charBodyParts[3].classList.toggle("body-partsCSS");
    charBodyParts[4].classList.toggle("body-partsCSS");
    charBodyParts[5].classList.toggle("body-partsCSS");
    button[10].classList.toggle("yellow");
    var audio = document.getElementById("audio2");
    audio.play();
}
