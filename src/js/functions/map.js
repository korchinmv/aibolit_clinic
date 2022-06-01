let center = [55.706404578172915, 37.675477435134894];
let markerOne = [55.705201743384656, 37.66462045767209];
let markerTwo = [55.70750706903147, 37.68216149999998];

function init() {
	let map = new ymaps.Map('map', {
		center: center,
		zoom: 14,
	});


	let marker = new ymaps.Placemark(markerTwo, {
		balloonContentHeader: 'Айболит на Кожуховской',
		balloonContentBody: 'Телефон: +7 495-999-88-33',
		balloonContentFooter: 'Работаем круглосуточно'
	}, {
		iconLayout: 'default#image',
		iconImageHref: '../images/icons/icon-marker.svg',
		iconImageSize: [40, 40], //размер метки на карте
		iconImageOffset: [-20, -40]  //точные координаты иконки подстраиваем тут
	});
	//подключаем кастомную метку на карты
	let placemark = new ymaps.Placemark(markerOne, {
		balloonContentHeader: 'Айболит на Автозаводской',
		balloonContentBody: 'Телефон: +7 495-999-66-32',
		balloonContentFooter: 'Работаем круглосуточно'
	}, {
		iconLayout: 'default#image',
		iconImageHref: '../images/icons/icon-marker.svg',
		iconImageSize: [40, 40], //размер метки на карте
		iconImageOffset: [-20, -40]  //точные координаты иконки подстраиваем тут
	});

	map.controls.remove('geolocationControl'); // удаляем геолокацию
	map.controls.remove('searchControl'); // удаляем поиск
	map.controls.remove('trafficControl'); // удаляем контроль трафика
	map.controls.remove('typeSelector'); // удаляем тип
	map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
	// map.controls.remove('zoomControl'); // удаляем контрол зуммирования
	map.controls.remove('rulerControl'); // удаляем контрол правил
	map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

	map.geoObjects.add(placemark);
	map.geoObjects.add(marker);
}
ymaps.ready(init);