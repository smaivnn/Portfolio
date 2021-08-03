const all = document.querySelectorAll('.skillsContent');
const baby = document.querySelectorAll('.baby');
const user = document.querySelectorAll('.user');
const expert = document.querySelectorAll('.expert');

const allBtn = document.querySelector('.allBtn');
allBtn.addEventListener('click', () => {
    removeShowing();
    addShowing(all);
});

const babyBtn = document.querySelector('.babyBtn');
babyBtn.addEventListener('click', () => {
    removeShowing();
    addShowing(baby);
});

const userBtn = document.querySelector('.userBtn');
userBtn.addEventListener('click', () => {
    removeShowing();
    addShowing(user);
});

const expertBtn = document.querySelector('.expertBtn');
expertBtn.addEventListener('click', () => {
    removeShowing();
    addShowing(expert);
});

function addShowing(level) {
    for(let i = 0; i < level.length; i++){
        level[i].classList.add('showing');
    }
}

function removeShowing() {
    for(let i = 0; i < all.length; i++){
        all[i].classList.remove('showing');
    }
}

function init() {
    addShowing(all);
}

init();