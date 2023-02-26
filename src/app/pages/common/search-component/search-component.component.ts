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
  state: string;
  code: string;
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

  @Output() location: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
    this.selectedArea();
  }

  async GenerateData(event: any) {
    (await this.searchCoord.getCoord()).subscribe((res: any) => {
      this.filteredArr = res.filter((cur: any) => {
        return cur.state.toLowerCase().startsWith(this.value.toLowerCase());
      });
    });
  }

  selectedArea() {
    let list = this.element.nativeElement.querySelector('#searchResult');
    list?.addEventListener('click', (e: any) => {
      let el = e.target.closest('.search-list');
      // this.latitude = el.dataset.city;
      // this.longitude = el.dataset.code;
      this.filteredArr = [];
      // console.log('hello');
      this.location.emit({
        city: el.dataset.state,
        code: el.dataset.code,
        renderMap: true,
      });
    });
  }
}
