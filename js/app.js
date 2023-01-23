const hamberger  = document.querySelector(".hamberger"),
      nav= document.querySelector(".main-nav"),
      header = document.querySelector("#main-header"),
      logoHeader = document.querySelector("#main-header .logo img"),
      mainNavLink = document.querySelectorAll(".main-nav-links"),
      headerBtn = document.querySelector("#main-header .header-btn"),
      headeBar = document.querySelectorAll("#main-header .bar"),
      body = document.querySelector("html"),
      sections = document.querySelectorAll("section"),
      navLink = document.querySelectorAll(" .main-nav-lists a")
    console.log(headeBar)

document.addEventListener("scroll",()=>{
  header.classList.add("active-header")
  logoHeader.src="./img/logo.svg"
  Array.from(mainNavLink).forEach(link=>{
    link.classList.add("cheng-color")
  })
  headerBtn.classList.add("active-header")
  Array.from(headeBar).forEach(bar=>{
    bar.style.backgroundColor ="black"

    bar.classList.add("active-header")
  })
  let y = body.scrollTop;
  if(y=== 0){
    header.classList.remove("active-header")
    logoHeader.src="./img/white-logo.svg"
    Array.from(mainNavLink).forEach(link=>{
      link.classList.remove("cheng-color")
    })
    headerBtn.classList.remove("active-header")
    Array.from(headeBar).forEach(bar=>{
    bar.style.backgroundColor ="white"

      bar.classList.remove("active-header")
    })
  }
  
})
// window.addEventListener("scroll" ,function(){
//   // let top_offset = ;
  
// })
window.onscroll=()=>{


  sections.forEach(section=>{
      let top =window.scrollY;
      let hight = section.offsetHeight;
      let offset = section.offsetTop - 150;
      let id = section.getAttribute("id");

      if (top >= offset && top < offset + hight){
          navLink.forEach(link =>{
              link.classList.remove("active-nav-bar");
              document.querySelector('header .main-nav-lists a[href*='+id+']').classList.add("active-nav-bar")
          })
      }
      let y = body.scrollTop;
      let navlinkActive= document.querySelector(".active-link")
      if(y=== 0){
        
        navlinkActive.style.color ="#fff"
      }else{
        navlinkActive.style.color ="black"
      }

  })
}
hamberger.addEventListener("click",()=>{
    hamberger.classList.toggle("active")
    nav.classList.toggle("active")
})


    
var swiper = new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '"></span>';
    },
  },
});



// 



let acurdion = document.querySelector(".acurdion")
Array.from(acurdion.children).forEach(wrapper =>{
    wrapper.querySelector("span").addEventListener("click",e=>{
        let span =e.target
        let wrapper = span.parentElement
        console.log(span)
        
        wrapper.classList.toggle("show")
        Array.from(acurdion.children).forEach(w =>{
           if(w != wrapper){
            w.classList.remove("show")
           }
        })
    })
})



window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }