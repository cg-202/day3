console.log("Second Program!!");

function helloWorld() {
  console.log("Helloo Worlddd");
}

function helloDom() {
  // console.log(document);
  let elementRef = document.querySelector("#id1");

  // Access the style and Upadte the color
  elementRef.style.color = "red";
}

function red() {
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
}
