burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
rightnav = document.querySelector('.rightnav')
burger.addEventListener('click',()=>{
    rightnav.classList.toggle('v-class-resp');
    rightnav.classList.toggle('h-resp');
    navbar.classList.toggle('h-resp');
    
    nav-list.classList.toggle('v-class-resp');
})