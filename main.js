console.log('main.js conected');

const themeBtn = document.querySelector('.rounded.theme');
const themeIcon = themeBtn.querySelector("img");
console.log(themeBtn);
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        themeIcon.src = "./assets/sun.svg";
    } else {
        themeIcon.src = "./assets/moon.svg";
    }
})