

const addInfo = (input, output) => {
    input.addEventListener(("keyup"), e => {
        if (e.keyCode === 13) {
            var list = document.createElement("LI");
            var listContent = document.createTextNode(e.target.value);
            list.appendChild(listContent);
            output.appendChild(list);
            e.target.value = ""
            document.createElement("button").addEventListener("click", e => {
                
            })
        }
    })
}
addInfo(document.querySelector(".nameIn"), document.querySelector(".nameOutContainer"));
addInfo(document.querySelector(".titleIn"), document.querySelector(".titleOutContainer"));
addInfo(document.querySelector(".descriptionIn"), document.querySelector(".descriptionOutContainer"));





