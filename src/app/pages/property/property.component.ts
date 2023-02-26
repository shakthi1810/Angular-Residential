import { Component, OnInit, Input } from '@angular/core';
import { APIServicesService } from 'src/app/apiservices.service';

interface stateCd {
  city: string;
  code: string;
}

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss'],
})
export class PropertyComponent implements OnInit {
  constructor(private propertyListCard: APIServicesService) {}

  @Input() cardProperty: any;

  propertyDetail: [] = [];

  initialCoord = {
    city: 'San Jose',
    cityCd: 'CA',
  };

  State: any;
  selectedState: stateCd = {
    city: '',
    code: '',
  };

  ngOnInit(): void {
    this.loadState();
    this.getPropertyList();
  }

  async getPropertyList(city: string = 'San Jose', cityCode: string = 'CA') {
    (await this.propertyListCard.getPropertyDetails(city, cityCode)).subscribe(
      (cur: any) => {
        this.cardProperty = cur;
      }
    );
  }

  async loadState() {
    (await this.propertyListCard.getCoord()).subscribe((cur) => {
      this.State = {
        label: 'State',
        option: cur,
      };
    });
  }

  typedVal(data: any) {
    this.selectedState.city = data.state;
    this.selectedState.code = data.cd;

    this.getPropertyList(this.selectedState.city, this.selectedState.code);
  }
}
