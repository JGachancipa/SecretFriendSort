let friendList = [];
const friend = document.querySelector("#amigo");
const friendListElement = document.querySelector("#listaAmigos");
const result = document.querySelector("#resultado");

let addFriend = () => {
  if (isEmpty(friend.value)) alert("Ingrese un nombre valido");
  friendList.push(friend.value);
  addElement(friend.value);
  friend.value = "";
};

let addElement = (value) => {
  let li = document.createElement("li");
  li.id = value;
  li.innerHTML = value;
  friendListElement.appendChild(li);
};

let sortFriend = () => {
  friendListElement.setAttribute("hidden", "");
  const randomIndex = Math.floor(Math.random() * friendList.length);
  result.textContent = `El amigo segreto es: ${friendList[randomIndex]}`;
};

let isEmpty = (value) => {
  return value === "";
};
