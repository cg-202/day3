function addNewBlock() {
  let parentRef = document.querySelector("#parent");

  let newblock = `<div>New Content</div>`;

  parentRef.innerHTML = parentRef.innerHTML + newblock;
}
