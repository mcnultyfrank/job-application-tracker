

const addInfo = (input, output) => {
    input.addEventListener(("keyup"), e => {
        if (e.keyCode === 13) {
            var list = document.createElement("LI");
            // var button = document.createElement("Button");
            // var buttonContent = document.createTextNode("Delete")
            var listContent = document.createTextNode(e.target.value);
            list.appendChild(listContent);
            // button.appendChild(buttonContent);
            output.appendChild(list);
            // output.appendChild(button);
            e.target.value = ""
        }
    })
}

addInfo(document.querySelector(".nameIn"), document.querySelector(".nameOutContainer"));
addInfo(document.querySelector(".titleIn"), document.querySelector(".titleOutContainer"));
addInfo(document.querySelector(".descriptionIn"), document.querySelector(".descriptionOutContainer"));





