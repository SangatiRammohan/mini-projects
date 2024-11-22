let ultag = document.getElementById("list-items")
let inputdata = document.getElementById("search")
let addbtn = document.getElementById("btn")

addbtn.addEventListener("click", () => {
    if (inputdata.value === "") {
        alert("Please add task")
    } else {
        let litag = document.createElement("li")
        litag.textContent = inputdata.value
        ultag.appendChild(litag)
        let span = document.createElement("span")
        span.textContent = "\u00d7"
        litag.appendChild(span)
    }
    inputdata.value = ""
    getting()
})

ultag.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("litag")
        getting()
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove()
        getting()
    }
}, false)

function getting() {
    localStorage.setItem("data", ultag.textContent)
}

let storage = document.createElement("div")
storage.id = "display"
ultag.appendChild(storage)

storage.style.backgroundColor = "lightgreen"
function showing() {
    storage.textContent = localStorage.getItem("data")
}
showing()



