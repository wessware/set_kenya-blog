
const responsive = {
    0: {
        items: 1
    },
    320: {
        items:1
    },
    560: {
        items: 2
    },
    960: {
        items: 3
    }
}
$(document).ready(()=>{
    
    $nav = $('.nav');
    $toggleCollapse = $('toggle-collapse');
    

    /*click event on toggle menu */
    $toggleCollapse.click(()=>{
        $nav.toggleClass('collapse');
    })


    //owl carousel blog
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        dots: false,
        nav: true, 
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        responsive: responsive
    });

    //click to scroll to top
    $('.move-up span').click(()=>{
        $('html,body').animate({
            scrollTop:0
        }, 2000);
    })
    //animation on scroll instance
    AOS.init();
    
    //read more content response
  //  const readMoreBtn = document.querySelector('.post-btn');
 //   const text = document.querySelector('.text');
//
//    readMoreBtn.addEventListener('click', (e) => {
//        text.classList.toggle('.show-more');
 //   })
})

document.addEventListener('DOMContentLoaded', () => {
    const expandsMore = document.querySelectorAll('[expand-more]')
    

    function expand() {
        const showContent = document.getElementById(this.dataset.target)
        if (showContent.classList.contains('expand-active')) {
            this.innerHTML=this.dataset.showtext
        } else {
            this.innerHTML=this.dataset.hidetext
        }
        showContent.classList.toggle('expand-active')
    }
    expandsMore.forEach(expandMore => {
        expandMore.addEventListener('click', expand)
    })
})