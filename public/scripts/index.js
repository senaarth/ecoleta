const searchBtn = document.querySelector("#page-home main a")
const modal = document.querySelector("#modal")
const close = document.querySelector("#modal .header a")

searchBtn.addEventListener("click", () => {
    modal.classList.remove("hidden")
})

close.addEventListener("click", () => {
    modal.classList.add("hidden")
})