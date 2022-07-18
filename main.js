/*Abre e fecha o menu quando clicar no icone*/ 
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll("nav .toggle")

for(const element of toggle){
    element.addEventListener('click', function(){   //addEventListener serve pra ouvir e executar
        nav.classList.toggle('show')
    })
}

/*Quando escolher algum item do menu, esconder o menu*/
const links = document.querySelectorAll('nav ul li a')

for(const link of links){
    link.addEventListener('click', function(){
        nav.classList.remove('show')
    })
}

/*Mudar o header da página quando der o scroll*/
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function(){
    if(window.scrollY >= navHeight){
        //scroll maior que a altura do header
        header.classList.add('scroll')
    }
    else{
        //scroll menor que a altura do header
        header.classList.remove('scroll')
    }
})

/* Testimonials carousel slider swipper */
const swiper = new Swiper('.swiper-container',{
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true
})

/*ScrollReveal: mostrar elementos quando der scroll na página*/
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})

scrollReveal.reveal(
    `#home .text, #home .image,
    #about .tex, #about .image,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonials,
    #contact .text, #contact .links
    `, {interval: 100})