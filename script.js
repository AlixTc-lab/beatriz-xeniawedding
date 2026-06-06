/* =========================
   FADE IN ANIMATIONS
========================= */

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add('visible');
        }
    });
},{
    threshold:0.15
});

document.querySelectorAll('.fade-in').forEach(el=>{
    observer.observe(el);
});

/* =========================
   COUNTDOWN TIMER
========================= */

const weddingDate = new Date("July 31, 2026 00:00:00").getTime();

function updateCountdown(){

    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60))
        / 1000
    );

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

updateCountdown();
setInterval(updateCountdown,1000);





const music = document.getElementById("bg-music");

window.addEventListener("load", () => {

    const playPromise = music.play();

    if(playPromise !== undefined){
        playPromise.catch(() => {
            console.log("Autoplay bloqueado");
        });
    }

});


document.body.addEventListener("click", () => {
    music.play();
}, { once:true });



const starsContainer = document.querySelector('.stars');

if (starsContainer) {

    for (let i = 0; i < 120; i++) {

        const star = document.createElement('div');
        star.classList.add('star');

        const size = Math.random() * 3 + 1;

        star.style.left = Math.random() * 100 + '%';
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        star.style.animationDuration = (Math.random() * 6 + 4) + 's';
        star.style.animationDelay = Math.random() * 5 + 's';

        starsContainer.appendChild(star);
    }

}