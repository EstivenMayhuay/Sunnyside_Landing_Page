

function toggleMenuSide (btn) {
  let menu = document.querySelector('.menu');
  
  menu.classList.toggle('showMenu');
  btn.classList.toggle('active');
}

// Evento Toggle show Menu
if(document.body.contains(document.querySelector('.btnBurger')) === true) {
  let btnMenu = document.querySelector('#btnMenuSideBar');

  btnMenu.addEventListener('click', () => {
    toggleMenuSide(btnMenu);
  });
}