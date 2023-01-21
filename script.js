const popUp = document.getElementById("modal")
const acceptBtn = document.getElementById("accept-btn")
const modalCloseBtn = document.getElementById("modal-close-btn")
const declineBtn = document.getElementById("decline-btn")

setTimeout(() => {
    popUp.style.display = "inline-block"
},1500)

acceptBtn.addEventListener("click", (e) => {
    const modalText = document.getElementById("modal-text")
    const formData = new FormData(test) // ID of form field
    const formName = formData.get("fullName")

    e.preventDefault()

    modalText.innerHTML = `
    <div class="modal-inner-loading">
        <img src="images/loading.svg" class="loading">
        <p id="upload-text">Uploading your data to the dark web...</p>
    </div>
    `
    setTimeout(() => {
        document.getElementById("upload-text").textContent = "Making the sale..."
    }, 1500)

    setTimeout(() => {
        document.getElementById("modal-inner").innerHTML = `
        <h2>Thanks <span class="modal-display-name">${formName}</span>, you sucker! </h2>
        <p>We just sold the rights to your eternal soul.</p>
        <div class="idiot-gif">
            <img src="images/pirate.gif">
        </div>
        `
        modalCloseBtn.disabled = false
    }, 3000)
})

modalCloseBtn.addEventListener("click", () => {
    popUp.style.display = "none"
})

declineBtn.addEventListener("mouseenter", () => {
    document.querySelector("#modal-choice-btns").classList.toggle("reversed")
})
