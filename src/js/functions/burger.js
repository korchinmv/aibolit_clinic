const buttonMenu = document.querySelector('.burger');
const menuActive = document.querySelector('.menu');
const menuLink = document.querySelectorAll('.menu__link');

buttonMenu.onclick = function () {
	menuActive.classList.toggle('menu--active');
	buttonMenu.classList.toggle('burger--active');
};

menuLink.forEach(el => {
	el.addEventListener('click', (e) => {
		menuActive.classList.remove('menu--active');
		buttonMenu.classList.remove('burger--active');
	});
});