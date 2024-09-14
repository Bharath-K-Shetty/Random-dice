let random1 = (Math.floor((Math.random()) * 6)) + 1;
let random2 = (Math.floor((Math.random()) * 6)) + 1;
console.log(random1);

var link = "./images/dice" + random1 + ".png";
var link2 = "./images/dice" + random2 + ".png";
let img = document.querySelectorAll("img")[0];
let img1 = img.setAttribute("src", link);
let img2 = document.querySelectorAll("img")[1].setAttribute("src", link2);
if (random1 > random2) {
  document.querySelector("h1").textContent = "Player One Wins...!";
}
else if (random1 == random2) {
  document.querySelector("h1").textContent = "Its a Draw..!";
}
else {
  document.querySelector("h1").textContent = "Player Two Wins...!";
}