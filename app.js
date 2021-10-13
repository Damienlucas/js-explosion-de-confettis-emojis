const containerSlot = document.querySelector('.slot');
const btnConfettis = document.querySelector('.btn-confettis');
const emojis = ["🍰", "🍓", "🍑", "🍬"];

btnConfettis.addEventListener('click', fiesta);

function fiesta(){

    if(isTweening()) return;

    for(let i = 0; i < 50; i++){
        const confetti = document.createElement('div');
        // on créé un element div
        confetti.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    // cela prend un emoji au hasard dans le tableau  .length est la longueur du tableau emoji
        containerSlot.appendChild(confetti);
    // /ca permet de le rajouter a la classe slot
    }
    animateConfettis();
}
function animateConfettis(){
    const TLCONF = gsap.timeline();
    TLCONF
    .to('.slot div', { 
        y: "random(-100,100)",
        x: "random(-100,100)",
        z: "random(0,1000)",
        // permet de faire bouger de -100 a 100 sur axes x,y et z de 0 a 1000 pour s animer jusqu a l ecran 1000 grace a l attribut perspective qu on a mis en css
        rotation: "random(-90,90)",
        // on les fait tourner et ca dure 1 seconde
        duration: 1,
    })
    .to('.slot div', {autoAlpha: 0, duration: 0.3}, '-=0.2')
// autoAlpha joue sur la visibility et l opacity et la on dit que ca demarre a -=0.2
    .add(() => {
        containerSlot.innerHTML = "";
        // /pour vider la div et qu'on se retrouve pas avec des milliers d emojis
    })
}
function isTweening(){
    return gsap.isTweening('.slot div');
    // ca renvoie true si c est en train d etre anime et false autrement
}