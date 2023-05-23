let index = 0
let idx = 0
const text = ["div.ChessZra {", "front-end-developer = True;", "}"]

function typeWriter() {
    if (index < text[idx].length) {
        document.getElementById("typeWriter" + idx).innerHTML += text[idx][index]
        index += 1
        setTimeout(typeWriter, 100)
    }
    else {
        idx += 1
        index = 0
        setTimeout(typeWriter, 100)
    }
}
typeWriter()
