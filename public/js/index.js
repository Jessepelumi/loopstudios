const burger = document.getElementById("burger");
const close = document.getElementById("close");
const menu = document.getElementById("menu");

burger.addEventListener("click", () => {
    if (menu.classList.contains("hidden")) {
        menu.classList.remove("hidden");
    }
})

close.addEventListener("click", () => {
    menu.classList.add("hidden");
})