import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';
import jquery from 'jquery';


const URL: string = `http://webservices.nextbus.com/service/publicXMLFeed?a=ttc`;

@Injectable()
export class RouteService{
  constructor(private _http: Http){}

  getRouteList(){
    return this.query('routeList')
      .map( res => {
        // 1. get response text
        // 2. use jQuery parse to XML
        // 3. return value of node `title` and `tag`
        let routes = jQuery.parseXML( res.text() ).querySelectorAll('route');
        return jQuery.makeArray(routes).map( route => {
          return {
            tag: route.getAttribute('tag'),
            title: route.getAttribute('title')
          }
        })
      })
  }
  getRoute(num){
    return this.query( 'routeConfig', `r=${num}`)
      .map( res => {
        let info = jQuery.parseXML( res.text() ).querySelectorAll('point');
        return jQuery.makeArray(info).map( routeInfo => {
          return {
            // call it lng so it can be directly used in google map,
            // and make sure it's a number
            lat: +routeInfo.getAttribute('lat'),
            lng: +routeInfo.getAttribute('lon')
          };
          // return routeInfo.getAttribute('path');
        })
      })
  }


  query(cmd: string, ...options: string[]){
    return this._http.get( `${URL}&command=${cmd}&` + options.join('&') );
  }
}
