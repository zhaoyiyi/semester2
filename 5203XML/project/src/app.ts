import {Component, OnInit} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';


import {RouteComponent} from './bus/route.component';
import {MapComponent} from './map/map.component';
import * as Rx from 'rxjs/Rx';



@Component({
  selector: `app`,
  template: `
    <map [routeInfoStream]="routeInfoStream" [busLocationsStream]="busLocationsStream"></map>

    <route (routeChange)="onRouteChange($event)"
      (locationChange)='onLocationChange($event)'></route>
  `,
  directives: [RouteComponent, MapComponent],
  inputs: ['routeChange', 'locationChange']
})
export class App implements OnInit{
  // take path coords emitted by route component and pass it to map
  routeInfoStream: any = {};
  busLocationsStream:  any;
  constructor(){}

  ngOnInit(){

  }
  // take observables emitted from route component
  // {route: ob, buses: ob}
  onRouteChange(routeInfo){
  /*  let routesStream = routeInfo.routes;
    let busesStream = routeInfo.buses;
    let info = Rx.Observable.combineLatest(routesStream, busesStream,
      (routes, buses) => {
        return {
          routes, buses
        }
      });
    info.subscribe(data => this.info = data);*/

    // routeInfo.subscribe(data => this.info = data);
    this.routeInfoStream = routeInfo;
    console.log('transferring route info...');
  }
  onLocationChange(busLocations){
    // busLocations.subscribe( data => this.busLocations = data);
    console.log('transferring bus locations...');
    this.busLocationsStream = busLocations;
  }

}
