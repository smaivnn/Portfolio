const all = document.querySelectorAll('.skillsContent');
const baby = document.querySelectorAll('.baby');
const user = document.querySelectorAll('.user');
const expert = document.querySelectorAll('.expert');

const allBtn = document.querySelector('.allBtn');
allBtn.addEventListener('click', () => {
    for(let i = 0; i < all.length; i++){
        all[i].classList.remove('showing');
    }
    for(let i = 0; i < all.length; i++){
        all[i].classList.add('showing');
    }
});

const babyBtn = document.querySelector('.babyBtn');
babyBtn.addEventListener('click', () => {
    for(let i = 0; i < all.length; i++){
        all[i].classList.remove('showing');
    }
    for(let i = 0; i < baby.length; i++){
        baby[i].classList.add('showing');
    }
});

const userBtn = document.querySelector('.userBtn');
userBtn.addEventListener('click', () => {
    for(let i = 0; i < all.length; i++){
        all[i].classList.remove('showing');
    }
    for(let i = 0; i < user.length; i++){
        user[i].classList.add('showing');
    }
});

const expertBtn = document.querySelector('.expertBtn');
expertBtn.addEventListener('click', () => {
    for(let i = 0; i < all.length; i++){
        all[i].classList.remove('showing');
    }
    for(let i = 0; i < expertBtn.length; i++){
        expert[i].classList.add('showing');
    }
});


