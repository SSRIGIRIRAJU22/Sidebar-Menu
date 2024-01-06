const sidebarEl = document.querySelector(".sidebar")
const menuEl = document.querySelector(".fa-bars");
const closeBtnEl = document.querySelector(".fa-times");

menuEl.addEventListener("click", () => {
    sidebarEl.classList.add("show-sidebar");
});

closeBtnEl.addEventListener("click", () => {
    sidebarEl.classList.remove("show-sidebar");
});


