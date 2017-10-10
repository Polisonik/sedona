'use strict';
(function (){
  var toggleOpen = document.querySelector('.page-header__togle--open');
	var toggleClose = document.querySelector('.page-header__togle--close');
	var menu = document.querySelector('.main-menu');
	
	menu.classList.remove('main-menu__menu‐‐open');	
	toggleOpen.addEventListener('click', openMenu);	
	
	function openMenu() {
		menu.classList.add('main-menu__menu‐‐open');
		toggleClose.addEventListener('click', closeMenu);
	}
	
	function closeMenu() {
		menu.classList.remove('main-menu__menu‐‐open');
		toggleClose.removeEventListener('click', closeMenu);
	}

})();