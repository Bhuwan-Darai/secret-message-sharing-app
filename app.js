//object destructuring of 'hash' property of the 'location' object
const { hash } = window.location;

const smessage = atob(hash.replace("#", ""));

if (smessage) {
  document.querySelector("#message-form").classList.add("hide");
  document.querySelector("#message-show").classList.remove("hide");

  document.querySelector("h1").innerHTML = smessage;
}

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  //toggle the visiblity
  document.querySelector("#message-form").classList.add("hide");
  document.querySelector("#link-form").classList.remove("hide");

  const message = document.querySelector("#message-input");

  const encrypted = btoa(message.value);

  const link = document.querySelector("#link-input");
  link.value = `${window.location}#${encrypted}`;
  link.select();
});
