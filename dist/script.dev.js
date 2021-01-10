"use strict";

var addInfo = function addInfo(input, output) {
  input.addEventListener("keypress", function (e) {
    if (e.keyCode === 13) {
      var list = document.createElement("LI");
      var button = document.createElement("Button");
      var buttonContent = document.createTextNode("Delete");
      var listContent = document.createTextNode(e.target.value);
      list.appendChild(listContent);
      button.appendChild(buttonContent);
      output.appendChild(list);
      list.appendChild(button);
      e.target.value = "";
      button.addEventListener("click", function (e) {
        output.removeChild(list);
      });
    }
  });
};

console.log(document.body);
addInfo(document.querySelector(".nameIn"), document.querySelector(".nameOutContainer"));
addInfo(document.querySelector(".titleIn"), document.querySelector(".titleOutContainer"));
addInfo(document.querySelector(".descriptionIn"), document.querySelector(".descriptionOutContainer"));