function addNewBlock() {
  let parentRef = document.querySelector("#parent");

  let newblock = `<div class="primary">New Content</div>`;

  parentRef.innerHTML = parentRef.innerHTML + newblock;
}
