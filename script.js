

const addInfo = (input, output) => {
    input.addEventListener(("keypress"), e => {
        if (e.keyCode === 13) {
            var list = document.createElement("LI");
            var button = document.createElement("Button");
            var buttonContent = document.createTextNode("Delete")
            var listContent = document.createTextNode(e.target.value);
            localStorage.setItem('name', e.target.value);
            list.appendChild(listContent);
            button.appendChild(buttonContent);
            output.appendChild(list);
            list.appendChild(button);
            e.target.value = ""            
            button.addEventListener(("click"), e => {
                output.removeChild(list);
            })
        }
    })
}

console.log(localStorage);


addInfo(document.querySelector(".nameIn"), document.querySelector(".nameOutContainer"));
addInfo(document.querySelector(".titleIn"), document.querySelector(".titleOutContainer"));
addInfo(document.querySelector(".descriptionIn"), document.querySelector(".descriptionOutContainer"));





