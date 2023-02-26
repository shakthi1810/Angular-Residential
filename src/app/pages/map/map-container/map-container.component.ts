import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-map-container',
  templateUrl: './map-container.component.html',
  styleUrls: ['./map-container.component.scss'],
})
export class MapContainerComponent implements OnChanges, OnInit {
  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges): void {}
  location: any;
  propertyList: any;

  loadCoord(e: any) {
    this.location = {
      city: e.city,
      code: e.code,
    };
  }

  loadList(e: any) {
    this.propertyList = e;
    console.log(e, 'sample');
  }
}
