window.onload = () => {
  const form = document.getElementById("classList");
  const cancelButton = document.querySelector(
    "#buttonBox button[type='button']"
  );
  cancelButton.onclick = function () {
    const hasConfirmed = confirm("Are you sure you want to delete your data?");
    if (hasConfirmed) {
      form.reset();
    }
  };
};
let form = document.getElementById("classList");
form.onsubmit = function (e) {
  e.preventDefault();
  const liTry = document.getElementById("List");
  const list = liTry.value;

  const main = document.getElementsByTagName("main")[0];

  const mainListCard = document.createElement("div");
  mainListCard.className = "listCard";

  const li = document.createElement("li");
  li.innerText = list;
  const button = document.createElement("button");
  button.innerText = "Delete";

  button.onclick = function (e) {
    const clickButton = e.target;
    clickButton.parentNode.remove();
  };

  const lineThrough = document.ge;

  mainListCard.appendChild(li);
  mainListCard.appendChild(button);
  main.appendChild(mainListCard);

  liTry.value = "";
};
