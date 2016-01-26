import {Component, OnInit, EventEmitter} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {Control} from 'angular2/common';

import {RouteService} from './route.service';


@Component({
  selector: 'route',
  template: `
    <h2>Route List</h2>
    <select [ngFormControl]="routeControl">
      <option *ngFor="#route of routes" [value]="route.tag">{{route.title}}</option>
    </select>
  `,
  providers: [HTTP_PROVIDERS, RouteService],
  outputs: ['routeChange']
})
export class RouteComponent implements OnInit{
  routes: any;
  routeControl: Control = new Control('');
  routeChange = new EventEmitter();

  constructor(private _routeService: RouteService){
    this.routeControl.valueChanges.subscribe(
      data => this.routeChange.emit( this.getRoute(data) ),
      err => this.routeChange.emit( err )
    )
  }

  ngOnInit(){
    this.getRouteList();
  }

  getRouteList(){
    this._routeService.getRouteList()
      .subscribe(
          data => this.routes = data,
          err => console.log(err),
          () => console.log('finish loading routes')
        );
  }
  // return observable
  getRoute(routeNum){
    return this._routeService.getRoute(routeNum)
  }
}
