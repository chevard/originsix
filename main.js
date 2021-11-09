/* quando clicar abrir e fechar o menu */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* quando clicar em algum ítem do menu */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}
/* Mudar Header da Página quando der Scroll */
const header = document.querySelector('#header')
const navHeith = header.offsetHeight

function changeHeaderWhenScoll() {
  if (window.scrollY >= navHeith) {
    header.classList.add('scroll')
    // scroll é maior que a altura do header
  } else {
    // scroll é menor que a altura do header
    header.classList.remove('scroll')
  }
}
/* SWIPER */
const swiper = new Swiper('.swiper', {
  slidePerview: 1,
  pagination: { el: '.swiper-pagination' },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: 2
    }
  }
})

/* Scroll Reveal - Mostrar elementos quando der scroll na página */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text, 
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .text,
  #contact .text, #contact .links,
  footer .brand, footer .social`,
  {
    interval: 100
  }
)

/* BOTÃO VOLTAR PARA O TOPO */
const backToButton = document.querySelector('.back-to-top')

function backToTop() {
  if (window.scrollY >= 560) {
    backToButton.classList.add('show')
  } else {
    backToButton.classList.remove('show')
  }
}
/* MENU ATIVO CONFORME A SEÇÃO VISÍVEL NA PÁGINA */
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4
  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

/* WHen Scroll */
window.addEventListener('scroll', function () {
  changeHeaderWhenScoll()
  backToTop()
  activateMenuAtCurrentSection()
})
