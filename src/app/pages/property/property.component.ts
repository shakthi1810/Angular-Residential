import { Component, OnInit, Input } from '@angular/core';
import { APIServicesService } from 'src/app/apiservices.service';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss'],
})
export class PropertyComponent implements OnInit {
  constructor(private propertyListCard: APIServicesService) {}

  @Input() cardProperty: any;

  propertyDetail: [] = [];

  State: any = {
    label: 'State',
    option: '',
  };
  City: any = {
    label: 'City',
    option: '',
  };
  District: any = {
    label: 'District',
    option: '',
  };

  ngOnInit(): void {
    this.getPropertyList();

    this.State.option = [
      { key: 'New York', value: 'New York' },
      { key: 'California', value: 'California' },
      { key: 'Los Angeles', value: 'Los Angeles' },
      { key: 'Los Vagaes', value: 'Los Vagaes' },
      { key: 'Landon', value: 'Landon' },
      { key: 'Israel', value: 'Israel' },
      { key: 'Denmark', value: 'Denmark' },
    ];

    this.City.option = [
      { key: 'Ny', value: 'New york' },
      { key: 'CA', value: 'California' },
      { key: 'LA', value: 'Los Angeles' },
      { key: 'LV', value: 'Los Vagas' },
    ];

    this.District.option = [
      { key: 'Ny', value: 'New york' },
      { key: 'CA', value: 'California' },
      { key: 'LA', value: 'Los Angeles' },
      { key: 'LV', value: 'Los Vagas' },
    ];
  }

  async getPropertyList() {
    (await this.propertyListCard.getPropertyDetails()).subscribe((cur: any) => {
      this.cardProperty = cur;

      console.log(cur);
    });
  }

  typedVal(data: any) {
    console.log(data);
  }

  typedValTwo(data: any) {
    console.log(data);
  }

  typedValThree(data: any) {
    console.log(data);
  }
}
