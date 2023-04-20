"use strict";
window.addEventListener("load", start);

function start() {
  console.log("script is scripting..");

  document.querySelector("form#signUp").addEventListener("submit", clickSubmit);

  document.querySelector("#terms").addEventListener("click", clickAccept);
}

function clickAccept(event) {
  console.log("accept changed");
  console.log(event.target.checked);

  // if (event.target.checked === true) {
  //     console.log("terms acceptet");
  //     document.querySelector("#btn-submit").disabled = false;
  // } else {
  //     document.querySelector("#btn-submit").disabled = true;
  // }
  document.querySelector("#btn-submit").disabled = !event.target.checked;
}

function clickSubmit(event) {
  console.log("submit clicked");
  console.log(event);
  event.preventDefault();

  const signUp = {
    // elements: console.log(document.querySelector("form").elements),
    name: document.querySelector("form").elements.namedItem("fullname").value,
    email: document.querySelector("form").elements.namedItem("email").value,
    username: document.querySelector("form").elements.namedItem("username")
      .value,
    password: document.querySelector("form").elements.namedItem("password")
      .value,
    payment: document.querySelector("form").elements.namedItem("pay").value,
    payEvery: document.querySelector("form").elements.namedItem("payEvery")
      .value,
    spamEmail: document.querySelector("form").elements.namedItem("spam")
      .checked,
  };
  console.log(signUp);
}
