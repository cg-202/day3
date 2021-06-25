function addNewBlock() {
  let inputRef = document.querySelector("#inputBox");
  let value = inputRef.value;

  // ADDING NEW BLOCKS
  let parentRef = document.querySelector("#parent");
  let newblock = `<div class='primary'>${value}</div>`;
  parentRef.innerHTML = newblock + parentRef.innerHTML;

  // cleaar the box
  inputRef.value = "";
}
