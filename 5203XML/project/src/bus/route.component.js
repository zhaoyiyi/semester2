System.register(['angular2/core', 'angular2/http', 'angular2/common', './route.service'], function(exports_1) {
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
    var core_1, http_1, common_1, route_service_1;
    var RouteComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (route_service_1_1) {
                route_service_1 = route_service_1_1;
            }],
        execute: function() {
            RouteComponent = (function () {
                function RouteComponent(_routeService) {
                    var _this = this;
                    this._routeService = _routeService;
                    this.routeControl = new common_1.Control('');
                    this.routeChange = new core_1.EventEmitter();
                    this.routeControl.valueChanges.subscribe(function (data) { return _this.routeChange.emit(_this.getRoute(data)); }, function (err) { return _this.routeChange.emit(err); });
                }
                RouteComponent.prototype.ngOnInit = function () {
                    this.getRouteList();
                };
                RouteComponent.prototype.getRouteList = function () {
                    var _this = this;
                    this._routeService.getRouteList()
                        .subscribe(function (data) { return _this.routes = data; }, function (err) { return console.log(err); }, function () { return console.log('finish loading routes'); });
                };
                RouteComponent.prototype.getRoute = function (routeNum) {
                    return this._routeService.getRoute(routeNum);
                };
                RouteComponent = __decorate([
                    core_1.Component({
                        selector: 'route',
                        template: "\n    <h2>Route List</h2>\n    <select [ngFormControl]=\"routeControl\">\n      <option *ngFor=\"#route of routes\" [value]=\"route.tag\">{{route.title}}</option>\n    </select>\n  ",
                        providers: [http_1.HTTP_PROVIDERS, route_service_1.RouteService],
                        outputs: ['routeChange']
                    }), 
                    __metadata('design:paramtypes', [route_service_1.RouteService])
                ], RouteComponent);
                return RouteComponent;
            })();
            exports_1("RouteComponent", RouteComponent);
        }
    }
});
