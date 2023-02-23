import { Component, OnChanges, OnInit } from '@angular/core';
import { APIServicesService } from '../../../apiservices.service';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.scss'],
})
export class PropertyDetailsComponent implements OnInit {
  constructor(private propertyDetail: APIServicesService) {}

  propertyId = window.location.search.split('=')[1];
  propertyDetailArr: any;
  coords: any;
  calcData: any;

  ngOnInit(): void {
    this.loadProperty();
  }

  async loadProperty() {
    (await this.propertyDetail.getPropertyDetails()).subscribe((cur: any) => {
      let data = cur.filter((el: any) => {
        return el.property_id === this.propertyId;
      });

      this.propertyDetailArr = data[0];
      this.coords = this.coords = {
        lat: this.propertyDetailArr.location.address.coordinate.lat,
        lng: this.propertyDetailArr.location.address.coordinate.lon,
        isRender: true,
      };

      this.calcData = {
        price: this.propertyDetailArr.list_price,
      };

      console.log(this.propertyDetailArr);
    });
  }
}
