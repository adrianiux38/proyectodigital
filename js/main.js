document.addEventListener("DOMContentLoaded", function () {
  
  const home = document.querySelector("#home");
  const dashboard = document.querySelector('#dashboard-admin');
 
  if(dashboard){
    const menu_btn = document.querySelectorAll('.menu-btn-toggle');
    const sidebar = document.querySelector('#sidebar');
    const containerDashboard = document.querySelector('.container-dashboard');
    
    menu_btn.forEach(btn => {
        btn.addEventListener('click', function(){
          sidebar.classList.toggle('active-nav')
          containerDashboard.classList.toggle('active-cont')
        })
    });
  }

  if(home){
    $('.items-carrousel').slick({
      slidesToShow: 2,
      slidesToScroll: 2,
      infinite: true,
      dots:true,
      autoplay: true,
      autoplaySpeed: 5000,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
            arrows: false,
            slidesToScroll: 1,
            infinite: true
          }
        },
      ]
    });
  }


  cambiarColorNavbarScroll(home);
  activarCarrousel5('.carrousel-collection')
  activarCarrousel5('.carrousel-bids')
  AOS.init();
  
  
});

function activarCarrousel5(name){
  $(name).slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite:true,
    responsive:[
      {
        breakpoint:1024,
        settings:{
          slidesToShow:4,
          
        }
      },
      {
        breakpoint:991,
        settings:{
          slidesToShow:3,
        }        
      },
      {
        breakpoint:768,
        settings:{
          slidesToShow:2,
          arrows:false
        }        
      },
      {
        breakpoint:425,
        settings:{
          slidesToShow:1,
          arrows:false
        }        
      }
    ]
  });
}

function cambiarColorNavbarScroll(
  home,
  transparent = "navbar-obscuro-transparent",
  color = "navbar-obscuro"
) {
  
  const navbar = document.querySelector("#navbarNFT");
  let previusScroll = 0;

  if (home) {
    navbar.classList.add(transparent);
    window.addEventListener("scroll", function (event) {
      previusScroll = scrollActual(transparent, color, navbar);
    });

    
  }
}

function scrollActual(transparent, color, navbar) {
  const scroll = window.pageYOffset;
  const navbarClasslist = navbar.classList;
  const Colortransparent = transparent;
  const ColorObscuro = color;
  if (scroll > 80) {
    navbarClasslist.remove(Colortransparent);
    navbarClasslist.add(ColorObscuro);
  } else {
    navbarClasslist.remove(ColorObscuro);
    navbarClasslist.add(Colortransparent);
  }
  return scroll;
}

