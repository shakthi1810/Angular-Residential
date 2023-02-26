import { Component, OnInit } from '@angular/core';
import { EnquiryFormService } from 'src/app/services/enquiry-form.service';

interface enquiryData {
  id: string;
  data: {
    email: string;
    topic: string;
    title: string;
    date: string;
    comments: string;
    name: string;
    property: string;
  };
}

@Component({
  selector: 'app-enquiry-details',
  templateUrl: './enquiry-details.component.html',
  styleUrls: ['./enquiry-details.component.scss'],
})
export class EnquiryDetailsComponent implements OnInit {
  constructor(private enquiryForm: EnquiryFormService) {}

  enquiryId = window.location.search.split('=')[1];
  data: any;

  ngOnInit(): void {
    this.getData();
  }

  async getData() {
    this.data = await this.enquiryForm.getCurrentData(this.enquiryId);
    console.log(this.data);
  }
}
