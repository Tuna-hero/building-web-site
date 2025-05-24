    document.getElementById("menuToggle").addEventListener("click", function () {
      document.getElementById("navLinks").classList.toggle("active");
    });


const gifWrapper = document.getElementById('gifWrapper');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width = gifWrapper.clientWidth;
  canvas.height = gifWrapper.clientHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = Math.random() * 3 + 1;
    this.speedX = (Math.random() - 0.5) * 1;
    this.speedY = (Math.random() - 0.5) * 1;
    this.life = 100;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.life -= 1;
  }

  draw() {
    ctx.fillStyle = `rgba(169, 169, 169, ${this.life / 100})`;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

let particlesArray = [];

gifWrapper.addEventListener('mousemove', (e) => {
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  particlesArray.push(new Particle(x, y));
});

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < particlesArray.length; i++) {
    const particle = particlesArray[i];
    particle.update();
    particle.draw();

    if (particle.life <= 0) {
      particlesArray.splice(i, 1);
      i--;
    }
  }

  requestAnimationFrame(animateParticles);
}

animateParticles();



const words = ["İNŞA", "DİZAYN", "HAYAL"];
let currentIndex1 = 0;
const wordElement = document.getElementById('changingWord');

setTimeout(() => {
  setInterval(changeWord, 4000);
}, 5000);

function changeWord() {
  wordElement.style.opacity = 0;
  setTimeout(() => {
    currentIndex1 = (currentIndex1 + 1) % words.length;
    wordElement.textContent = words[currentIndex1];
    wordElement.style.opacity = 1;
  }, 1000);
}



const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const line3 = document.getElementById('line3');

window.addEventListener('load', () => {
  setTimeout(() => { line1.classList.add('show'); }, 500);
  setTimeout(() => { line2.classList.add('show'); }, 2000);
  setTimeout(() => { line3.classList.add('show'); }, 3500);
});



document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll(".counter-ozel");
  let started = false;

  function startCount() {
    counters.forEach(counter => {
      const target = +counter.getAttribute("data-target");
      let count = 0;
      const increment = Math.max(1, Math.ceil(target / 200));

      const updateCount = () => {
        if (count < target) {
          count += increment;
          counter.textContent = count > target ? target : count;
          requestAnimationFrame(updateCount);
        } else {
          counter.textContent = target;
        }
      };

      updateCount();
    });
  }

  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 0
    );
  }

  window.addEventListener("scroll", function () {
    const hakkimizda = document.getElementById("hakkimizda-ozel");
    if (!started && isInViewport(hakkimizda)) {
      startCount();
      started = true;
    }
  });
});



const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;

function goToSlide(index) {
  if (index < 0) index = slides.length - 1;
  if (index >= slides.length) index = 0;
  slider.style.transform = `translateX(-${index * 100}%)`;
  currentIndex = index;
  updateDots();
}

function updateDots() {
  dots.forEach(dot => dot.classList.remove('active'));
  dots[currentIndex].classList.add('active');
}

document.querySelector('.prev').addEventListener('click', () => {
  goToSlide(currentIndex - 1);
});

document.querySelector('.next').addEventListener('click', () => {
  goToSlide(currentIndex + 1);
});

dots.forEach(dot => {
  dot.addEventListener('click', () => {
    goToSlide(parseInt(dot.getAttribute('data-index')));
  });
});

setInterval(() => {
  goToSlide(currentIndex + 1);
}, 5000);