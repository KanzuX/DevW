const add = document.getElementById("add")
const mainbar = document.querySelector("#mainbar")

const form = document.createElement("div")

const labelImgInput = document.createElement("label")
const imgInput = document.createElement("input")

const labelNameInput = document.createElement("label")
const nameInput = document.createElement("input")

const submit = document.createElement("button")
submit.innerText = "Submit"


    labelImgInput.innerText = "Thêm hình ảnh (url): "
    labelNameInput.innerText = "Nhập Tên: "
    imgInput.type = "text"
    nameInput.type = "text"


form.appendChild(labelImgInput)
form.appendChild(imgInput)
form.appendChild(labelNameInput)
form.appendChild(nameInput)
form.appendChild(submit)
form.classList.add("addForm")

add.addEventListener("click", () => {
    mainbar.appendChild(form)
})

submit.addEventListener("click", () => {
    const div = document.createElement("div")
    div.classList.add("news")
    const img = document.createElement("img")
    img.src = imgInput.value
    const para = document.createElement("p")
    para.innerText = nameInput.value
    div.appendChild(img)
    div.appendChild(para)
    mainbar.insertBefore(div, add)
    mainbar.removeChild(form)
})