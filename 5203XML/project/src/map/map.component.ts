import {Component, OnInit, OnChanges} from 'angular2/core';
import {MapService} from './map.service';
import 'rxjs/add/operator/distinctUntilChanged';

declare var google;
@Component({
  selector: 'map',
  template:`
    <div id="map"></div>
  `,
  providers: [MapService],
  inputs: ['routeInfoStream', 'busLocationsStream']
})
export class MapComponent implements OnInit, OnChanges{

  routeInfo: any;
  routeInfoStream: any;
  busLocations: any;
  busLocationsStream: any;
  mapName: string = '#map';

  constructor(private _mapService: MapService) { }

  ngOnInit(){
    this._mapService.loadMap('#map');
  }
  ngOnChanges(){
    if(this._mapService.isInitialized){
      this.updateRoute();
    }
    if(this.busLocationsStream) {
      // this._mapService.setMarker(this.busLocations);
      this.updateBusLocation();
    }

  }

  updateRoute(){

    this.routeInfoStream
      .distinctUntilChanged()
      .subscribe(
        data => this._mapService.drawPath(data),
        err => console.log(err),
        () => console.log('route info updated')
      );

  }
  updateBusLocation(){
    this.busLocationsStream
      .distinctUntilChanged()
      .subscribe(
        data => {
          this._mapService.setMarker(data);
          console.log(data);
        },
        err => console.log(err),
        () => console.log('bus locations updated')
      );
  }
}
