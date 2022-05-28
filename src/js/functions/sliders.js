/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Pagination, Navigation, Lazy, EffectFade, Autoplay } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Инициализация слайдеров
function initSliders() {
	// Перечень слайдеров
	// Проверяем, есть ли слайдер на стронице
	if (document.querySelector('.main-swiper')) { // Указываем класс нужного слайдера
		// Создаем слайдер
		new Swiper('.main-swiper', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Pagination, Lazy, EffectFade, Autoplay],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			// autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			preloadImages: false,
			lazy: true,


			// Эффекты
			effect: 'fade',
			fadeEffect: {
				crossFade: true
			},

			// autoplay: {
			// 	delay: 4000,
			// 	disableOnInteraction: false,
			// 	infinite: true
			// },


			// Пагинация
			pagination: {
				el: '.main-slider__pagination',
				clickable: true,
				renderBullet: function (index, className) {
					return '<span class=" ' + className + ' ">' + (index + 1) + '</span>';
				},

			},

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			// navigation: {
			// 	prevEl: '.swiper-button-prev',
			// 	nextEl: '.swiper-button-next',
			// },

			// Брейкпоинты
			/*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// События
			on: {

			}
		});
	}

	if (document.querySelector('.about-specialists-swiper')) { // Указываем класс нужного слайдера
		// Создаем слайдер
		new Swiper('.about-specialists-swiper', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Lazy],
			observer: true,
			observeParents: true,
			slidesPerView: 6,
			spaceBetween: 15,
			slidesPerGroup: 3,
			// autoHeight: true,
			speed: 800,
			loop: true,
			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			preloadImages: false,
			lazy: true,


			// Эффекты
			// effect: 'fade',
			// fadeEffect: {
			// 	crossFade: true
			// },

			// autoplay: {
			// 	delay: 4000,
			// 	disableOnInteraction: false,
			// 	infinite: true
			// },


			// Пагинация
			// pagination: {
			// 	el: '.main-slider__pagination',
			// 	clickable: true,
			// 	renderBullet: function (index, className) {
			// 		return '<span class=" ' + className + ' ">' + (index + 1) + '</span>';
			// 	},
			// },

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.about-specialists-swiper__prev',
				nextEl: '.about-specialists-swiper__next'
			},

			// Брейкпоинты

			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 4,
					spaceBetween: 15,
				},
				1268: {
					slidesPerView: 6,
					spaceBetween: 15,
				},
			},

			// События
			on: {

			}
		});
	}
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	// Добавление классов слайдера
	// при необходимости отключить
	bildSliders();

	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});