import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-map-container',
  templateUrl: './map-container.component.html',
  styleUrls: ['./map-container.component.scss'],
})
export class MapContainerComponent implements OnChanges, OnInit {
  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges): void {}
  coords: any;
  propertyList: any;

  loadCoord(e: any) {
    this.coords = {
      lat: e.lat,
      lng: e.lng,
      isRender: true,
    };
  }

  loadList(e: any) {
    this.propertyList = e;
    console.log(e, 'sample');
  }
}
