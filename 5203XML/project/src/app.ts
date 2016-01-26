import {Component, OnInit} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';


import {RouteComponent} from './bus/route.component';
import {MapComponent} from './map/map.component';

@Component({
  selector: `app`,
  template: `
    <map [path]="path"></map>
    <route (routeChange)="onRouteChange($event)"></route>
  `,
  directives: [RouteComponent, MapComponent],
  inputs: ['routeChange']
})
export class App implements OnInit{
  // take path coords emitted by route component and pass it to map
  path: any;
  constructor(){}

  ngOnInit(){

  }
  onRouteChange(routeInfo){
    routeInfo.subscribe(
      data => this.path = data
    )
  }

}
