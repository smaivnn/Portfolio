const email = document.querySelector(".email");
const phoneNum = document.querySelector(".phoneNum");
const instagram = document.querySelector(".instagram");
const facebook = document.querySelector(".facebook");
const github = document.querySelector(".github");
const tistory= document.querySelector(".tistory");



function setLocation() {
    instagram.addEventListener('click',() => {
        window.open('https://www.instagram.com/_m_inn/');
    });

    facebook.addEventListener('click',() => {
        window.open('https://www.facebook.com/profile.php?id=100006204343226');
    });

    github.addEventListener('click', () => {
        window.open('https://github.com/smaivnn');
    });

    tistory.addEventListener('click', () => {
        window.open('https://with-min.tistory.com/');
    });

    

}

function init() {
    setLocation();
}

init();