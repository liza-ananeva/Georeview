import '../assets/sass/style.scss';

import reviewLayout from '../views/popup.hbs';
import carouselLayout from '../views/carousel.hbs';

import {initMap, geocoder} from './modules/yandex.api';
import config from './config.json';

(async () => {
    let {map, clusterer} = await initMap('map', config.map, reviewLayout(), carouselLayout());

    map.events.add('click', async (event) => {
        let coords = event.get('coords');
        let address = await geocoder(coords);
        
        map.balloon.open(coords, {address: address, coords: coords});
    });
})();