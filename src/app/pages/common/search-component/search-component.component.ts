import {
  Component,
  OnInit,
  ElementRef,
  EventEmitter,
  Output,
} from '@angular/core';
import { APIServicesService } from 'src/app/apiservices.service';

interface list {
  admin_name: string;
  capital: string;
  city: string;
  country: string;
  iso2: string;
  lat: string;
  lng: string;
  population: string;
  population_proper: string;
}

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.scss'],
})
export class SearchComponentComponent implements OnInit {
  constructor(
    private searchCoord: APIServicesService,
    private element: ElementRef
  ) {}
  value: any = 'Search by state';
  filteredArr: list[] = [];
  latitude: any;
  longitude: any;

  @Output() location: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
    this.selectedArea();
  }

  async GenerateData(event: any) {
    (await this.searchCoord.getCoord()).subscribe((res: any) => {
      this.filteredArr = res.filter((cur: any) => {
        return cur.city.toLowerCase().startsWith(this.value.toLowerCase());
      });
    });
  }

  selectedArea() {
    let list = this.element.nativeElement.querySelector('#searchResult');
    list?.addEventListener('click', (e: any) => {
      let el = e.target.closest('.search-list');
      this.latitude = el.dataset.lat;
      this.longitude = el.dataset.lng;

      console.log(this.latitude, this.longitude);

      this.filteredArr = [];

      this.location.emit({
        lat: this.latitude,
        lng: this.longitude,
        renderMap: true,
      });
    });
  }
}
