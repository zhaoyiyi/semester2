import {Injectable} from 'angular2/core';
declare var google;

@Injectable()
export class MapService{

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
    let map = new google.maps.Map(document.querySelector(mapName), {
     center: {
       lat: 43.59432,
       lng: -79.5340999
     },
     zoom: 13
    });

    let line = new google.maps.Polyline({
      strokeColor: '#FF0000',
      strokeOpacity: 1.0,
      strokeWeight: 2
    })
    line.setMap(map);
  }

  drawLine(coords){
    if(coords){
      console.log(coords)
      // let line = new google.maps.Polyline({
      //   path: coords,
      //   strokeColor: '#FF0000',
      //   strokeOpacity: 1.0,
      //   strokeWeight: 2
      // })
      // line.setMap(this.map);
    }
  }
}
