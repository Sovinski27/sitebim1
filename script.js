// script.js

// Menu interativo
const toggleBtn = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

toggleBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Contador regressivo
const contador = document.getElementById("contador");
const dataEvento = new Date("2025-04-27T09:00:00").getTime();

function atualizarContador() {
  const agora = new Date().getTime();
  const diferenca = dataEvento - agora;

  if (diferenca <= 0) {
    contador.textContent = "O evento começou!";
    clearInterval(intervalo);
    return;
  }

  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

  contador.textContent = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
}

const intervalo = setInterval(atualizarContador, 1000);
atualizarContador();

  const testimonials = document.querySelectorAll('.testimonial');
  let currents = 0;

  function showTestimonial(index) {
    testimonials.forEach((el, i) => {
      el.classList.remove('active');
      if (i === index) el.classList.add('active');
    });
  }

  setInterval(() => {
    current = (current + 1) % testimonials.length;
    showTestimonial(current);
  }, 4000);

  const testimonial = document.querySelectorAll('.testimonial');
  let current = 0;

  function showTestimonial(index) {
    testimonials.forEach((el, i) => {
      el.classList.remove('active');
      if (i === index) el.classList.add('active');
    });
  }

  setInterval(() => {
    current = (current + 1) % testimonials.length;
    showTestimonial(current);
  }, 4000);

  const form = document.getElementById('formInscricao');
  const modal = document.getElementById('modalConfirmacao');
  const fechar = document.getElementById('fecharModal');

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    modal.classList.remove('hidden');
    form.reset();
  });

  fechar.addEventListener('click', () => {
    modal.classList.add('hidden');
  });

  function atualizarContador() {
    const eventoData = new Date('2025-04-20T08:00:00');
    const agora = new Date();
    const diff = eventoData - agora;

    if (diff < 0) {
      document.getElementById('contador').innerHTML = "<h3>O evento já começou!</h3>";
      return;
    }

    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diff / (1000 * 60)) % 60);
    const segundos = Math.floor((diff / 1000) % 60);

    document.getElementById('dias').textContent = String(dias).padStart(2, '0');
    document.getElementById('horas').textContent = String(horas).padStart(2, '0');
    document.getElementById('minutos').textContent = String(minutos).padStart(2, '0');
    document.getElementById('segundos').textContent = String(segundos).padStart(2, '0');
  }

  setInterval(atualizarContador, 1000);
  atualizarContador();

  function abrirModalConfirmacao(event) {
    event.preventDefault();
    document.getElementById('modal-confirmacao').style.display = 'flex';
  }

  function fecharModalConfirmacao() {
    document.getElementById('modal-confirmacao').style.display = 'none';
  }

  setInterval(atualizarContador, 1000);
  atualizarContador();

  particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": { "value": "#ff0000" },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ff0000",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 2,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "repulse": {
          "distance": 100,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        }
      }
    },
    "retina_detect": true
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });
  