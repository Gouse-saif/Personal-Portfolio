
// ======= Script For Navbar Style Color Changing =======
const header = document.querySelector("header");
window.addEventListener("scroll", () =>{
  header.classList.toggle("header__Color", window.scrollY > 0);
})


// ======= Script For Light-theme =======

let lightMode = localStorage.getItem('lightMode');

const lightmodetoggle = document.querySelector('#lightmodetoggle');

const enableLightMode = () => {
  document.body.classList.add('lightmode');
  localStorage.setItem('lightMode', 'enabled');
}

const disableLightMode = () => {
  document.body.classList.remove('lightmode');
  localStorage.setItem('lightMode', null);
}

if(lightMode === 'enabled'){
  enableLightMode();
}


lightmodetoggle.addEventListener('click', () => {

  lightMode = localStorage.getItem('lightMode');

  if(lightMode !== 'enabled'){
    enableLightMode();
  }
  else{
    disableLightMode();
  }
});
