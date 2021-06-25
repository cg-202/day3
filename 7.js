function addNewBlock() {
  let inputRef = document.querySelector("#inputBox");
  let value = inputRef.value;

  // ADDING NEW BLOCKS
  let parentRef = document.querySelector("#parent");
  let newblock = `<div class='primary'>${value}</div>`;
  parentRef.innerHTML = parentRef.innerHTML + newblock;

  // cleaar the box
  inputRef.value = "";
}
