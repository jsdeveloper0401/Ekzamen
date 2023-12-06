window.onscroll = function() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0 ) {
    document.getElementById('navbar').classList.add('scrolled');
  } else {
    document.getElementById('navbar').classList.remove('scrolled');
  }
}
const loading = document.getElementById("loading");

const loadingDuration = 1500;
setTimeout(() => {
    loading.classList.add("loading-none");
}, loadingDuration);
// light-dark start
// light-dark start
let modeBtn = document.getElementById("mode__btn");

modeBtn.addEventListener("click", function () {
    if (document.body.className != "dark") {
        this.firstElementChild.src = "images/light.svg";
    } else {
        this.firstElementChild.src = "images/dark.svg";
    }
    document.body.classList.toggle("dark");
});
// light dark end

$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    center: false,
    items:3,
    loop:true,
    margin:10,
    nav: true,
    dots: false,
    responsive:{
       0: {
          items: 1,
        },
        750: {
          items: 2,
        },
        1000: {
          items: 3,
        },
        1300: {
          items: 4,
        },
    }
  });
  
  $('.owl-test').owlCarousel({
    center: true,
    items:3,
    loop:true,
    margin:10,
    nav: true,
    dots: false,
    responsive:{
       0: {
          items: 1,
        },
        800: {
          items: 2,
        },
        1200: {
          items: 3,
        },
    }
  });


});

window.addEventListener("scroll", function () {
  toggleBacktop();
});


let backtop = document.getElementById("backtop");

function toggleBacktop() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    backtop.classList.add('backtop-show')
  } else {
    backtop.classList.remove('backtop-show')
  }
}


function openNavbar() {
   document.getElementById("navbar-responsive").style.right = "0";
 }
 function closeNavbar() {
   document.getElementById("navbar-responsive").style.right = "-100%";
 }
 
 document.getElementById("navbar-open").addEventListener("click", openNavbar);
 document.getElementById("navbar-close").addEventListener("click", closeNavbar);
 
 $(".owl-carousel").owlCarousel({
   loop: true,
   margin: 50,
   // nav: true,
   dots: true,
   // center: true,
   slideBy: 2,
   responsive: {
     0: {
       items: 1,
     },
     400: {
       items: 1,
     },
     800: {
       items: 2,
     },
     1200: {
       items: 2,
     },
   },
 });
 
 window.addEventListener("scroll", function () {
   shrink();
 });
 
 let navbar = document.getElementById("navbar");
 
 function shrink() {
   if (scrollY > 100) {
     navbar.classList.add("navbar-shrink");
   } else {
       navbar.classList.remove("navbar-shrink");
    }
 }