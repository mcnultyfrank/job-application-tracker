"use strict";

var addInfo = function addInfo(input, output) {
  input.addEventListener("keyup", function (e) {
    if (e.keyCode === 13) {
      var node = document.createElement("LI");
      var textnode = document.createTextNode(e.target.value);
      node.appendChild(textnode);
      output.appendChild(node);
      e.target.value = "";
      document.createElement("button").addEventListener("click", function (e) {});
    }
  });
};

addInfo(document.querySelector(".nameIn"), document.querySelector(".nameOutContainer"));
addInfo(document.querySelector(".titleIn"), document.querySelector(".titleOutContainer"));
addInfo(document.querySelector(".descriptionIn"), document.querySelector(".descriptionOutContainer"));