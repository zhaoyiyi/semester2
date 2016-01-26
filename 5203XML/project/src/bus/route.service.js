System.register(['angular2/core', 'angular2/http', 'rxjs/add/operator/map'], function(exports_1) {
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
    var core_1, http_1;
    var URL, RouteService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            URL = "http://webservices.nextbus.com/service/publicXMLFeed?a=ttc";
            RouteService = (function () {
                function RouteService(_http) {
                    this._http = _http;
                }
                RouteService.prototype.getRouteList = function () {
                    return this.query('routeList')
                        .map(function (res) {
                        var routes = jQuery.parseXML(res.text()).querySelectorAll('route');
                        return jQuery.makeArray(routes).map(function (route) {
                            return {
                                tag: route.getAttribute('tag'),
                                title: route.getAttribute('title')
                            };
                        });
                    });
                };
                RouteService.prototype.getRoute = function (num) {
                    return this.query('routeConfig', "r=" + num)
                        .map(function (res) {
                        var info = jQuery.parseXML(res.text()).querySelectorAll('point');
                        return jQuery.makeArray(info).map(function (routeInfo) {
                            return {
                                lat: +routeInfo.getAttribute('lat'),
                                lng: +routeInfo.getAttribute('lon')
                            };
                        });
                    });
                };
                RouteService.prototype.query = function (cmd) {
                    var options = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                        options[_i - 1] = arguments[_i];
                    }
                    return this._http.get((URL + "&command=" + cmd + "&") + options.join('&'));
                };
                RouteService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], RouteService);
                return RouteService;
            })();
            exports_1("RouteService", RouteService);
        }
    }
});
