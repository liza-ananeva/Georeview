let map;

function initMap(selector, config, reviewLayout, carouselLayout) {
    return new Promise((resolve, reject) => {
        try {
            ymaps.ready(() => {
                let clusterer = new ymaps.Clusterer({
                    clusterDisableClickZoom: true,
                    clusterOpenBalloonOnClick: true,
                    hideIconOnBalloonOpen: false,
                    clusterBalloonLayout: 'cluster#balloonCarousel',
                    clusterBalloonItemContentLayout: СarouselLayout(carouselLayout),
                    clusterBalloonPanelMaxMapArea: 0,
                    clusterBalloonContentLayoutWidth: 300,
                    clusterBalloonContentLayoutHeight: 195,
                    clusterBalloonPagerSize: 5,
                    preset: 'islands#invertedVioletClusterIcons'
                });

                map = new ymaps.Map(selector, config, {balloonLayout: ReviewLayout(reviewLayout, clusterer)});
                
                for (let i = 0; i < localStorage.length; i++) {
                    if (localStorage.key(i).includes('marker-')) {
                        let data = localStorage.getItem(localStorage.key(i));
                        data = JSON.parse(data);

                        for (let review of data.reviews) {
                            let record = {coords: data.coords, address: data.address, reviews: review};
                            addPlacemark(clusterer, data.coords, record);
                        }
                    }
                }

                map.geoObjects.add(clusterer);
                resolve({
                    map,
                    clusterer
                });
            });
        } catch (error) {
            reject(error);
        }
    });
}

function СarouselLayout(layout) {
    return ymaps.templateLayoutFactory.createClass(layout, {
        build: function() {
            this.constructor.superclass.build.call(this);

            const addressLink = document.querySelector('#address-link');
            
            addressLink.addEventListener('click', (event) => {
                event.preventDefault();
                
                let data = this.getData().properties._data;
                let key = 'marker-' + data.address;
                let localData = localStorage.getItem(key);

                if (!(localData === null)) {
                    localData = JSON.parse(localData);
                    map.balloon.open(data.coords, localData);
                }
            });
         }
    });
}

function addPlacemark(clusterer, coords, data) {
    let placemark = new ymaps.Placemark(coords, data, {
        preset: 'islands#violetIcon',
        hideIconOnBalloonOpen: false,
    });

    clusterer.add(placemark);

    return placemark;
}

function ReviewLayout(layout, clusterer) {
    return ymaps.templateLayoutFactory.createClass(layout, {
        build: function() {
            this.constructor.superclass.build.call(this);

            $('#add-review-button').on('click', $.proxy(this.onAddReview, this));
            $('#close').on('click', $.proxy(this.onClose, this));

            if (this.getData().geoObject) {
                let res = JSON.parse(JSON.stringify(this.getData().properties._data)) 
                
                if (!Array.isArray(res.reviews)) {
                    res.reviews = [res.reviews];
                }

                this.setData(res);
            }
        },
        onAddReview: function (event) {
            event.preventDefault();
            
            const addAuthorInput = document.querySelector('#add-author-input');
            const addSpotInput = document.querySelector('#add-spot-input');
            const addTextInput = document.querySelector('#add-text-input');
            // const addReviewButton = document.querySelector('#add-review-button');

            const review = {
                author: addAuthorInput.value,
                spot: addSpotInput.value,
                date: new Date().toLocaleString(),
                text: addTextInput.value
            };

            const coords = this.getData().coords;
            const address = this.getData().address;
            const data = this.getData();  
            
            let reviews = [];
            
            if (data.reviews) {
                if (!Array.isArray(data.reviews)) {
                    reviews.push(data.reviews);
                } else {
                    for(let item of data.reviews) {
                        reviews.push(item);
                    }
                }
            }
            reviews.push(review);
                
            let key = 'marker-' + address;
            let localData = localStorage.getItem(key);

            if (!(localData === null)) {
                localData = JSON.parse(localData);
                localData.reviews.push(review);
                localStorage.setItem(key, JSON.stringify(localData));
            } else {
                localStorage.setItem(key, JSON.stringify({coords: coords, address: address, reviews: reviews}));
            }

            addPlacemark(clusterer, coords, {coords: coords, address: address, reviews: review});
            
            this.setData({coords: coords, address: address, reviews: reviews});
            this.events.fire('addreview');
        },
        onClose: function (event) {
            event.preventDefault();
            this.events.fire('userclose');
        },
        clear: function () {
            $('#add-review-button').off('click');
            $('#close').off('click');
            this.constructor.superclass.clear.call(this);
        }
    });
}

async function geocoder(coords) {
    let response = await ymaps.geocode(coords);
    return response.geoObjects.get(0).getAddressLine();
}

export { 
    initMap,
    geocoder
}