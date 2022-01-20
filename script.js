const mobileMenu = document.querySelector(".mobile-menu")
const mobileToggle = document.querySelector(".hamburger-menu")
const menuItemTwo = document.querySelectorAll(".menu-item-2")
const menuItemThree = document.querySelector(".menu-item-3")
const menuItemFour = document.querySelector(".menu-item-4")
const sidebar = document.querySelector(".sidebar")

mobileToggle.addEventListener("click", () => {
    const visible = mobileMenu.getAttribute("data-visible")
    console.log(visible)
    visible === "true" ? mobileMenu.setAttribute("data-visible", "false") : mobileMenu.setAttribute("data-visible", "true")
})

menuItemTwo[0].addEventListener("click", () => {
    let cards = document.querySelectorAll(".product-container")
    cards.forEach(el => el.parentElement.removeChild(el))
})

menuItemTwo[1].addEventListener("click", () => {
    let cards = document.querySelectorAll(".product-container")
    cards.forEach(el => el.parentElement.removeChild(el))
})

menuItemThree.addEventListener("mouseenter", () => {
    sidebar.style.background = "red"
})

menuItemThree.addEventListener("mouseleave", () => {
    sidebar.style.background = "orange"
})

menuItemFour.addEventListener("click", sidebarText)

function sidebarText () {
    let tag = document.createElement("h1")
    tag.innerText = "Hola Mundo!"
    tag.setAttribute("class", "sidebar-text")
    sidebar.appendChild(tag)
    menuItemFour.removeEventListener("click", sidebarText)
}