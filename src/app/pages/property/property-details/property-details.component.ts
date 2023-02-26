import { Component, OnChanges, OnInit } from '@angular/core';
import { APIServicesService } from '../../../apiservices.service';
import { EnquiryFormService } from '../../../services/enquiry-form.service';
import {
  FormControl,
  FormBuilder,
  Validators,
  FormGroup,
} from '@angular/forms';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.scss'],
})
export class PropertyDetailsComponent implements OnInit {
  constructor(
    private propertyDetail: APIServicesService,
    private fb: FormBuilder,
    private enquirySubmission: EnquiryFormService
  ) {}

  propertyId = window.location.search.split('=')[1];
  propertyDetailArr: any;
  coords: any;
  calcData: any;
  enquiryForm: any;
  initialCoord = {
    city: 'San Jose',
    cityCd: 'CA',
  };

  ngOnInit(): void {
    this.loadProperty();
    this.enquiryForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      title: ['', Validators.required],
      topic: ['', Validators.required],
      comments: ['', Validators.required],
    });
  }

  async loadProperty(
    city: string = this.initialCoord.city,
    cityCode: string = this.initialCoord.cityCd
  ) {
    (await this.propertyDetail.getPropertyDetails(city, cityCode)).subscribe(
      (cur: any) => {
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
      }
    );
  }

  enquirySubmit() {
    console.log(this.enquiryForm.value);
    let data = this.enquiryForm.value;
    data.property = this.propertyDetailArr.branding[0].name;
    data.date = new Date().toISOString();
    this.enquirySubmission.postEnquiryData(data);
  }
}
