import { guardarChat, deleteChat, getChat, updateChat } from "./socket.js";

const chatsList = document.querySelector("#chats");
// const title = document.querySelector("#title");
// const description = document.querySelector("#description");
const title = document.querySelector("#email");
const description = document.querySelector("#message");
let savedId = "";

const chatUI = (chat) => {
  const div = document.createElement("div");
  div.innerHTML = `
    <div class="mt-2 card card-body animate__animated animate__backInDown">
        <p>email: ${chat.email}</p>
        <p>mensaje: ${chat.message}</p>
        <div>
        <button class="update btn btn-info btn-sm" data-id="${chat._id}">Obtener</button>
        <button class="delete btn btn-secondary btn-sm" data-id="${chat._id}">Borrar</button>
        </div
    </div>
    `;
  const btnDelete = div.querySelector(".delete");
  const btnUpdate = div.querySelector(".update");

  btnDelete.addEventListener("click", (e) => deleteChat(btnDelete.dataset.id));

  btnUpdate.addEventListener("click", (e) => getChat(btnUpdate.dataset.id));
  return div;
};

export const renderChat = (chats) => {
  chatsList.innerHTML = "";
  chats.forEach((chat) => chatsList.append(chatUI(chat)));
};

export const fillForm = (chat) => {
  // title.value = chat.title;
  // description.value = chat.description;
  email.value = chat.email;
  message.value = chat.message;
  savedId = chat._id;
};

export const onHandleSubmit = (e) => {
  e.preventDefault();
  if (savedId) {
    // updateChat(savedId, title.value, description.value)
    updateChat(savedId, email.value, message.value);
  } else {
    //guardarChat(title.value, description.value);
    guardarChat(email.value, message.value);
  }

  savedId="";
  email.value ="";
  message.value = "";
};

export const appendChat = (chat) => {
  chatsList.append(chatUI(chat));
};
