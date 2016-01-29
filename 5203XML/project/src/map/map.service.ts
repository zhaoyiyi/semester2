import {Injectable} from 'angular2/core';
declare var google;


// const SYMBOL = {
//   path: '',
//   strokeColor: '#F00',
//   fillColor: '#F00',
//   fillOpacity: 1
// };

@Injectable()
export class MapService{
  private _map: any;
  private _lines: any;
  private _buses: any;

  get isInitialized() {return !!this._map}



  // clears stored info on the map.
  clear(obj){
    obj.map( line => line.setMap(null));
  }
  // option to clean other lines before drawing
  drawPath(paths, clear=true){
    if(this._lines && clear) this.clear(this._lines);

    this._lines = paths.map( path => {
      let line = new google.maps.Polyline({
        path: path,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
      })
      line.setMap(this._map);
      return line;
    })
  }

  updateMarker(newPosition){
    if(this._buses) console.log(this._buses);
  }

  setMarker(buses){
    if(this._buses) this.clear(this._buses);

    this._buses = buses.map( bus => {
      return new google.maps.Marker({
        position: {lat: bus.lat, lng: bus.lng},
        icon: {
          path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
          scale: 5,
          strokeWeight: 2,
          strokeColor: '#00F',
          rotation: bus.heading
        },
        map: this._map
      });
    });
  }


  // init //
  loadMap(mapName){
    let script = document.createElement('script');
    script.type = 'text/javascript'
    script.async = true;
    script.defer = true;
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAlWFKOQSQvQx2Xr9qw7i8siK7ktQlGcco&callback=initMap`;
    document.body.appendChild(script);

    // attach initMap to window
    (window)['initMap'] = () => this.initMap(mapName);
  }

  initMap(mapName) {
    this._map = new google.maps.Map(document.querySelector(mapName), {
     center: {
       lat: 43.646389,
       lng: -79.408959
     },
     zoom: 13
    });
  }
}
