const burger = document.getElementById("burger");
const listHeader = document.getElementById("listHeader");

burger.addEventListener('click', () =>{
    listHeader.classList.toggle('active');
});