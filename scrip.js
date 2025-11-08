const toggle = document.getElementById("burgerList");
const listHome = document.getElementById("menuList");

toggle.addEventListener('click', () => {
    listHome.classList.toggle("hidden");
})