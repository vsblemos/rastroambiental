// abre e fecha o menu hamburguer quando clicado no icone

const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle');

for(const element of toggle){
    element.addEventListener('click',()=>{
        nav.classList.toggle('show')
    })
};

const links = document.querySelectorAll('nav ul li a');
for(const link of links){
    link.addEventListener('click',()=>{
        nav.classList.remove('show')  
    })
}

// aplica sombra no header quando scroll

function changeHeaderWhenScroll(){
  const scroll = document.querySelector("#header");
  const navHeigth = scroll.offsetHeight
  
  if(window.scrollY >= navHeigth){
      scroll.classList.add('scroll')
  
  } else {
      scroll.classList.remove('scroll')
  }
}


// testemonial carrousel

const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
      767: {
        slidesPerView: 2,
        setWrapperSize: true
      }
    }
  })

// scrol;Reveal
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
    #testimonials header, #testimonials .testimonials
    #contact .text, #contact .links,
    footer .brand, footer .social
    `,
    { interval: 100 }
  )
  
  // back to top

function backToTop(){
  const backToTopButton = document.querySelector(".back-to-top");
  
  if(window.scrollY >= 560){
      backToTopButton.classList.add('show')
  
  } else {
      backToTopButton.classList.remove('show')
  }

}

/* Menu ativo conforme a seção visível na página */
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


window.addEventListener('scroll',()=>{
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
})

  

