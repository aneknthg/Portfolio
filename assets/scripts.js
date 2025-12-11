const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
if(hamburger){
  hamburger.addEventListener('click', ()=>{
    mobileMenu.classList.toggle('hidden');
  });
}

// init lucide icons
if(typeof lucide !== 'undefined') lucide.createIcons();