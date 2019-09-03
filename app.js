const navslide = () => {
    const burger =document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navlinks = document.querySelectorAll('.nav-links li')
  // toogle nav bar
    burger.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active');
        navlinks.forEach((link, index) => {
           if(link.style.animation){
            link.style.animation='';
           } 
           else{
            link.style.animation = `navlinkfade 0.5s ease forwards ${index/5 + 0.5}s`;
           }
        });
        burger.classList.toggle('toggle');
        });
        // animate links from 0 to 1 opacity
        
}

navslide();
