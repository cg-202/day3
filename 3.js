/*function red() {
  let elementRef = document.querySelector("#id1");
  elementRef.style.color = "red";
}

function green() {
  let elementRef = document.querySelector("#id1");
  elementRef.style.color = "green";
}

function blue() {
  let elementRef = document.querySelector("#id1");
  elementRef.style.color = "blue";
}*/

function changeColor(inputColor) {
  let elementRef = document.querySelector("#id1");
  elementRef.style.color = inputColor;
}

function randomColor() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  let elementRef = document.querySelector("#id1");
  elementRef.style.color = `rgba(${red}, ${green}, ${blue}, 1)`;
}
