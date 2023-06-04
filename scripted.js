let menu = document.querySelector('.hero i');
let heading = document.querySelector('.heading');

menu.onclick = () => {
    menu.classList.toggle('i');
    heading.classList.toggle('open')
}