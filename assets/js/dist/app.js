'use strict';

var controllers = angular.module('cafehopApp.controllers', ["google-maps".ns()]);
var services = angular.module('cafehopApp.services', []);
var factories = angular.module('cafehopApp.factories', []);
var directives = angular.module('cafehopApp.directives', []);

var cafehop = angular.module('cafehopApp', 
	['cafehopApp.controllers', 'cafehopApp.services', 'cafehopApp.factories', 'cafehopApp.directives', 'ngRoute', 'ngSanitize', 'ngAutocomplete']);	

angular.module('cafehopApp').config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'app/map/views/map.html',
			title: 'Cafehop KL - Mapping unique cafes around Malaysia',
		})
		.when('/about', {
			templateUrl: 'app/about/views/about.html',
			controller: 'AboutController',
			title: 'About',
		})
		.when('/contact', {
			templateUrl: 'app/contact/views/contact.html',
			title: 'Contact',
		})
		.when('/faq', {
			templateUrl: 'app/faq/views/faq.html',
			controller: 'FaqController',
			title: 'FAQ',
		})
		.when('/map', {
			templateUrl: 'app/map/views/map.html',
			controller: 'MapController',
			title: 'Map',
		})
		.when('/cafe/:cafe_id/:cafe_name?', {
			templateUrl: 'app/cafe/views/cafe.html',
			controller: 'CafeController',
			title: 'Cafe',
		});

		// Enable CORS
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];

}]);

angular.module('cafehopApp').run(['$rootScope', function($rootScope){
    // Set title based on route
    $rootScope.$on("$routeChangeSuccess", function(event, currentRoute, previousRoute) {
 		window.document.title = currentRoute.title + ' | Cafehop KL';
 	});
}]);



angular.module('cafehopApp.controllers').controller('AboutController', ['$scope', '$http', function($scope, $http){
    var filename ='app/about/models/team.json';
    $http.get(filename)
        .success(function(data){
            $scope.team = data.team;
        })
        .error(function(){
            console.error(filename + ' not found.')
        })
}]);
angular.module('cafehopApp.controllers').controller('MapController', 
    ['$scope', '$http', '$rootScope', 'CafeService', 'MapCafes', 'MapDefaults', 'MarkerCallbacks', 
    function($scope, $http, $rootScope, CafeService, MapCafes, MapDefaults, MarkerCallbacks){
    
    // Only hide footer and span header for map view
    $rootScope.hideFooter = true;
    $rootScope.fullContainer = true;
    $rootScope.$on('$locationChangeStart', function(e, next, curr){
        $rootScope.hideFooter = false;
        $rootScope.fullContainer = false;
    });

    $scope.markers = [];
    $scope.markersControl = {};
    $scope.mapCafes = MapCafes;
    $scope.mapDefaults = MapDefaults;
    $scope.initialized = false;
    $scope.idKeyCounter = 0;

    $scope.cafes = $scope.mapCafes.cafes;
    $scope.legend = MapDefaults.legend;

    $scope.infoWindow = {
        marker: null,
        model: null,
        coords: {},
        options: $scope.mapDefaults.marker.windowOptions
    }

    $scope.userLocation = "Kuala Lumpur";

    $scope.sponsors = {
        0 : {
            name: 'Sponsor A'
        },
        1 : {
            name: 'Sponsor B'
        }
    }

    $scope.userLocationInput = {
        live: false,
    }

    $scope.showUserLocationInput = function(){
        $scope.userLocationInput.live = true;
        return false;
    }
    $scope.hideUserLocationInput = function(){
        $scope.userLocationInput.live = false;
        return false;
    }

    // PAN AND FIT 
    $scope.fitMarkerBounds = function(){
        
        if(!$scope.instance){
            return;
        }

        var bounds = new google.maps.LatLngBounds();

        // Fit all markers
        angular.forEach($scope.markers, function(marker, index){
            var coords = marker.coords;
            bounds.extend(new google.maps.LatLng(coords.latitude, coords.longitude));
        });

        $scope.instance.panToBounds(bounds);
        $scope.instance.fitBounds(bounds);
    }

    $scope.panToUser = function(){
        var user =  $scope.findMarker($scope.userMarker.idKey);
        if(user){
            var ll = user.getPosition();
            $scope.instance.panTo(ll);
        }
    }

    // Place marker in default center
    $scope.placeDefaultUser = function(marker){
        marker.coords = $scope.mapDefaults.center;
        var latlng = new google.maps.LatLng($scope.mapDefaults.center.latitude, $scope.mapDefaults.center.longitude);
        $scope.geolocateUser(latlng);
        $scope.instance.panTo(latlng);
    }

    $scope.getUserLocation = function(){
        $scope.panToUser();

        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(function(pos){
                $scope.loadingCafes = true;
                $scope.userMarker.coords = pos.coords;
                var latlng = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
                $scope.instance.panTo(latlng);
                $scope.getCafes(latlng);
                $scope.geolocateUser(latlng);
           });
        }

    }

    // Geolocate address using Places API
    $scope.geolocateUser = function(ll){
        console.log(ll);
        var service = new google.maps.places.PlacesService($scope.instance);
        service.nearbySearch({
            location: ll,
            radius: 1000
        }, function(results, status){
            if (status == google.maps.places.PlacesServiceStatus.OK) {
                $scope.cannotFindUser = false;
                $scope.userLocation = results[0].name;
                console.log($scope.userLocation);
            }
            else{
                $scope.cannotFindUser = true;
            }
        });
    }

    $scope.ready = function(map){
        if($scope.initialized){
            return;
        }
        $scope.initialized = true;

        $scope.instance = map;
        $scope.$apply(function(){
            // Create user marker
            $scope.userMarker = {
                idKey: $scope.idKeyCounter++, 
                icon: MapDefaults.icons.current,
                options:{
                    draggable: true
                },
                window: {
                    options: MapDefaults.marker.windowOptions,
                },
                isNotUser: function(){
                    return false;
                }
            };

            // Set KL as center if no user's location
            $scope.placeDefaultUser($scope.userMarker)
            
            // Get current user location
            $scope.getUserLocation();

            $scope.markers.push($scope.userMarker);
            $scope.setWindowMarker($scope.userMarker);

            if($scope.markers.length <= 1){
                $scope.addMarkers($scope.cafes);
            }

            // Initialize marker callbacks and events
            $scope.markerCallbacks = MarkerCallbacks.init({
                map: $scope.instance,
                llCallback: function(ll){
                    $scope.geolocateUser(ll);
                    $scope.getCafes(ll);
                },
                showWindow: $scope.setWindowMarker,
                userMarker: $scope.userMarker
            }); 

            $scope.markerEvents = $scope.markerCallbacks.getEvents();

        });
    }

    $scope.getCafes = function(ll){
        var llString;

        if(ll){
            llString = ll.lat() + "," + ll.lng();
        }

        var successCallback = function(cafes){
            $scope.loadingCafes = false;
            $scope.addMarkers(cafes);
        }

        $scope.mapCafes.getCafes({
            before: function(){
                $scope.loadingCafes = true;
            },
            success: successCallback,
            ll: llString
        })
    }

    $scope.map = {
        center: angular.copy($scope.mapDefaults.center),
        zoom: 13,
        events: {
            tilesloaded: $scope.ready
        },
        options: {
            scrollwheel: false,
            mapTypeControl: false
        },
        showWindow: false
    };

    $scope.addMarkers = function(cafes){
        if(cafes.length < 1 || !$scope.initialized){
            return;
        }

        $scope.markers = [];
        $scope.markers.push($scope.userMarker);
        // Create markers for each cafe
        angular.forEach(cafes, function(cafe, index){
            var m = {
                idKey: $scope.idKeyCounter++,
                icon:  MapDefaults.icons.cafe,
                coords: {
                    latitude: cafe.lat,
                    longitude: cafe.lng
                },
                cafe: cafe,
                window: {
                    iconVisible: true,
                    closeClick: true,
                    options: $scope.mapDefaults.marker.windowOptions
                },
                options:{
                    title: cafe.name,
                    draggable: false
                },
                isNotUser: function(){
                    return this.idKey != $scope.userMarker.idKey
                }
            }
            cafe.idKey = m.idKey;
            $scope.markers.push(m)
        });

        $scope.fitMarkerBounds();
    };

    $scope.getPhotoUrl = function(cafe){
        var photos = cafe.photos;
        if(photos.count > 0){
            var c = photos.items[0];
            return c.url;
        }

        return;
    }

    $scope.getPhotoStyle = function(cafe){
        return {
            'background-image' : 'url(' + $scope.getPhotoUrl(cafe) + ')'
        }
    }

    $scope.getCafeUrl = function(cafe){
        if(cafe){
            // Remove slashes from cafe name, browser address bars ignore encode %2F
            var clean = cafe.name.replace('/', '');
            return "#cafe/" + cafe.id + "/" + encodeURIComponent(clean);
        }
        return '#';
    }

    $scope.setWindowMarker = function(model){
        $scope.infoWindow.model = model;
        $scope.map.showWindow = true;
        $scope.infoWindow.coords = model.coords;
    }

    $scope.triggerMarkerMouseout = function(idKey){
        var m = $scope.findMarker(idKey);
        if(m){
            google.maps.event.trigger(m, 'mouseout')
        }
        
    }

    $scope.triggerMarkerMouseover = function(idKey){
        var m = $scope.findMarker(idKey);
        if(m){
            google.maps.event.trigger(m, 'mouseover')
        }
    }

    $scope.findMarker = function(idKey){
        var markers =  $scope.markersControl.getGMarkers();
        var m;

        for(var i in markers){
            if(markers[i].key == idKey){
                m = markers[i];
            }
        }
        return m;
    }

    $scope.init = function(){
        $scope.getCafes();
    }

    $scope.init();
}]);

angular.module('cafehopApp.controllers').controller('FaqController', ['$scope', '$http', function($scope, $http){
    var filename ='app/faq/models/faq.json';
    $scope.faq = "Loading FAQ..."; 

    $http.get(filename)
        .success(function(data){
            $scope.faqs = data.faqs;
        })
        .error(function(){
            console.error(filename + ' not found.')
        })
}]);
angular.module('cafehopApp.controllers').controller('CafeController', ['$scope', '$http', '$routeParams', '$sce', 'CafeService', 'GMapCredentials',
    function($scope, $http, $routeParams, $sce, CafeService, GMapCredentials){
    
    CafeService.init();
    
    window.scrollTo(0, 0);
    $scope.loading = true;

    var cafeId = $routeParams.cafe_id;
    $scope.cafe = CafeService.cafe;
    $scope.cafe.name = $routeParams.cafe_name;


    // Set title
    window.document.title = $routeParams.cafe_name + " | Cafehop KL";;


    CafeService.getCafe({
        id: cafeId,
        success: function(data){
            $scope.cafe = CafeService.cafe;
            $scope.loading = false;
            window.document.title = $scope.cafe.name + " | Cafehop KL";
            $scope.cafe.src = $sce.trustAsResourceUrl($scope.getEmbedMapSrc($scope.cafe));
        }
    });

    $scope.getEmbedMapSrc = function(cafe){
        var clean = encodeURIComponent(CafeService.getCafeNameAddress($scope.cafe));
        return "https://www.google.com/maps/embed/v1/search"
            + '?key=' + GMapCredentials.apiKey
            + '&q=' + clean
    }
}]);
angular.module('cafehopApp.services').service('CafeService', ['$http', function ($http) {
    var cafe = {};

    function getDirectionLink(cafe){
        var ll = cafe.ll;
        var desc = cafe.name + ", " + cafe.address1
        
        if(cafe.address2){
            desc += " " + cafe.address2;
        }
        
        var city = cafe.city? encodeURIComponent(cafe.city) : "" ;
        
        ll = encodeURIComponent(ll);
        desc = encodeURIComponent(desc)

        var linkToLoc = "http://maps.google.com/maps?f=d"
            + "&near=" + city
            + "&ll=" + ll
            + "&daddr=" + desc 
            + "&iwloc=addr&iwd=1" 

        return linkToLoc;
    }

    var service = {
        cafe: {},
        init: function(){
            this.cafe = {};
        },
        getCafe: function(options) {
            // Get cafes 
            var url = "http://cafehop.my/api/sherminn/cafe.php";
            $http({
                url: url,
                method: 'GET',
                params: {
                    id: options.id,
                },
            }).success(function(data){
                service.cafe = data.response.store;
                service.initCafe();

                if(options.success){
                    options.success(data);
                }
            }).error(function(){
                console.error(url + " cannot be accessed.");
            });
            return cafe;
        },

        getCafeNameAddress: function(cafe) {
            var nameAddr = cafe.name + ", "; 
            var addr1 = cafe.address1 || "";
            var addr2 = cafe.address2 || "";
            var city = cafe.city || "" ;
            
            nameAddr += addr1 + ", " + city;
            console.log(nameAddr);
            return nameAddr
        },

        setCafe: function(value) {
            cafe = value;
        },

        initCafe: function(cafe) {
            if(!cafe){
                cafe = service.cafe;
            }
            cafe.directions = getDirectionLink(cafe);
        }
    };

    return service;
}]);
angular.module('cafehopApp.services').service('MapCafes', ['$http', 'MapDefaults', function($http, MapDefaults) {
    var defaults = MapDefaults;
    var api_url  = "http://cafehop.my/api/sherminn/featured.php";

    var self = {
        getCount: 0, // getCafes() counter
        cafes: [],
        getCafes: function(options){
            var currCount = ++this.getCount;

            options.before();
            options = options || {};
            options.radius = options.radius || 3000;
            options.offset = options.offset || 0;
            options.limit = options.limit || 30;

            var id          = "";
            var secret      = "";
            var params = {
                ll: options.ll || defaults.center.latitude + "," + defaults.center.longitude,
                radius: options.radius,
                offset: options.offset,
                limit: options.limit
            }

            // Get cafes 
            $http({
                url: api_url,
                method: 'GET',
                params: params,
            }).success((function(currCount){
                return function(data){
                    // Only do success for latest call
                    if(currCount != self.getCount){
                        return;
                    }

                    var cafes = data.response.venues;
                    // Empty array
                    while(self.cafes.length > 0) {
                        self.cafes.pop();
                    }
                    self.cafes.push.apply(self.cafes, cafes)

                    if(options.success){
                        options.success(self.cafes);
                    }
                }
            })(currCount)).error(function(){
                console.error(api_url + " cannot be accessed.");
            });
        },

        setCafe: function(value) {
            cafe = value;
        }
    }

    return self;
}]);

angular.module('cafehopApp.factories').factory('MapDefaults', function() {
    var defaults = {
        center: {
            latitude: 3.1521286313632837, 
            longitude: 101.71000957489014
        },
        marker: {
            windowOptions: {
                maxWidth: 160,
                maxHeight: 500,
                pixelOffset: new google.maps.Size(0, -32)
            }
        },
        legend: [
            {
                img: "assets/images/map-icons/chkl-pin-03.png",
                text: "Open"
            }, {
                img: "assets/images/map-icons/chkl-pin-01.png",
                text: "Closed"
            }
        ],
        icons:  {
            current: "assets/images/map-icons/chkl-pin-me.png",
            cafe: "assets/images/map-icons/chkl-pin-03.png",
            cafeClosed: "assets/images/map-icons/chkl-pin-01.png",
            active: "assets/images/map-icons/chkl-pin-02.png",
        }
    };

    return defaults;
});
angular.module('cafehopApp.factories').factory('MarkerCallbacks', ['MapDefaults', function(MapDefaults) {
    var callbacks = {
        map                 : null,
        allowMouseover      : true,
        currMouseoverId     : -1,
        latLngChangeCallback: null,
        showWindow          : null,

        disableMouseover: function(){
            this.allowMouseover = false;
        },

        enableMouseover: function(){
            this.allowMouseover = true;
        },

        hideWindowMarker: function(){
            this.map.showWindow = false;
        },

        currentMarkerDragStart: function(marker, event, model){
            this.disableMouseover();
            this.hideWindowMarker();
        },

        currentMarkerDragEnd: function(marker, event, model){
            var latlng = marker.getPosition();
            this.map.panTo(latlng);
            
            this.latLngChangeCallback(latlng);

            model.coords = {
                latitude: marker.getPosition().lat(),
                longitude: marker.getPosition().lng(),
            }

            this.enableMouseover();
        },

        onMarkerMouseover: function(marker, event, model){
            if(!this.allowMouseover){
                return;
            }
            if(model && model.isNotUser()){
                marker.setIcon(MapDefaults.icons.active);
                marker.setZIndex(google.maps.Marker.MAX_ZINDEX + 1);
                this.currMouseoverId = model.idKey;
                this.showWindow(model)
            }
        },

        onMarkerMouseout: function(marker, event, model){
            if(!this.allowMouseover){
                return;
            }
            if(model && model.isNotUser()){
                marker.setIcon(model.icon);
            }
        },

        onMarkerClick: function(marker, event, model){
            // If already opened
            if(model.idKey == this.userMarker.idKey){
                return;
            }

            this.showWindow(model);

            // Scroll cafe into view
            var cafeTop = $('#'+model.idKey, ".cafe-list").position().top;
            $(".cafe-list").animate({scrollTop: cafeTop});
        },

        getEvents: function(){
            return {
                dragend: this.currentMarkerDragEnd.bind(callbacks),
                dragstart: this.currentMarkerDragStart.bind(callbacks),
                mouseover: this.onMarkerMouseover.bind(callbacks),
                mouseout: this.onMarkerMouseout.bind(callbacks),
                click: this.onMarkerClick.bind(callbacks)
            }
        },

        init: function(o){
            this.map = o.map;
            this.latLngChangeCallback = o.llCallback;
            this.showWindow = o.showWindow;
            this.userMarker = o.userMarker;
            return this;
        }
    }
    return callbacks;
}]);
angular.module('cafehopApp.factories').factory('GMapCredentials', function() {
    return {
        apiKey: 'AIzaSyCWxCU3sy8rPbxrFZf74O80GB5MH8PIFBI'
    }
}); 
angular.module('cafehopApp.directives').directive('resize', ['$window', function($window){
    return function(scope, element){
        var w = angular.element($window);

        scope.getWindowSize = function(){
            return {
                h: w.height(),
                w: w.width()
            }
        };

        scope.$watch(scope.getWindowSize, function(newV, oldV){
            scope.style = function(){
                var headerHeight = $('header').height();
                var h = (newV.h - headerHeight);
                $('.angular-google-map-container').height(h);
                return {
                    height: h + 'px',
                    maxHeight: (newV.h - headerHeight - 1) + 'px',
                }
            }
        }, true);
    }
}]);
