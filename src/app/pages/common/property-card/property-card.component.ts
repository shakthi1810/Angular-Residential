import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.scss'],
})
export class PropertyCardComponent implements OnInit, OnChanges {
  constructor(private route: Router) {}
  @Input() propertyList: any;
  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.propertyList);
  }

  viewDetails(e: any) {
    this.route.navigateByUrl(`/property-details?propertyId=${e}`);
    console.log(e);
  }
}
