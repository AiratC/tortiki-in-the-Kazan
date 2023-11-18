const goldBtn = document.querySelector('.gold');
const pinkBtn = document.querySelector('.pink');
const imgBomb = document.querySelector('.img__bomb');


pinkBtn.addEventListener('click', function() {
    imgBomb.src = './images/cakes/bomb-pink.jpg'
});

goldBtn.addEventListener('click', function() {
    imgBomb.src = './images/cakes/bomb-gold.jpg'
})