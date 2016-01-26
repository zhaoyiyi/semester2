import {Component, OnInit, OnChanges} from 'angular2/core';
import {MapService} from './map.service';

@Component({
  selector: 'map',
  template:`
    <div id="map"></div>
  `,
  providers: [MapService],
  inputs: ['path']
})
export class MapComponent implements OnInit, OnChanges{
  path:any;
  map: any;
  mapName: string = '#map';
  constructor(private _mapService: MapService) { }

  ngOnInit(){
    this._mapService.loadMap('#map');
  }
  ngOnChanges(){
    console.log(this.map);
    this._mapService.drawLine(this.path);
  }
}
