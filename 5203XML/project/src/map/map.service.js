System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
        switch (arguments.length) {
            case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
            case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
            case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
        }
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var MapService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MapService = (function () {
                function MapService() {
                }
                MapService.prototype.loadMap = function (mapName) {
                    var _this = this;
                    var script = document.createElement('script');
                    script.type = 'text/javascript';
                    script.async = true;
                    script.defer = true;
                    script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyAlWFKOQSQvQx2Xr9qw7i8siK7ktQlGcco&callback=initMap";
                    document.body.appendChild(script);
                    (window)['initMap'] = function () { return _this.initMap(mapName); };
                };
                MapService.prototype.initMap = function (mapName) {
                    var map = new google.maps.Map(document.querySelector(mapName), {
                        center: {
                            lat: 43.59432,
                            lng: -79.5340999
                        },
                        zoom: 13
                    });
                    var line = new google.maps.Polyline({
                        strokeColor: '#FF0000',
                        strokeOpacity: 1.0,
                        strokeWeight: 2
                    });
                    line.setMap(map);
                };
                MapService.prototype.drawLine = function (coords) {
                    if (coords) {
                        console.log(coords);
                    }
                };
                MapService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], MapService);
                return MapService;
            })();
            exports_1("MapService", MapService);
        }
    }
});
