import {
  Component,
  OnInit,
  OnChanges,
  HostListener,
  ElementRef,
} from '@angular/core';
import { EnquiryFormService } from 'src/app/services/enquiry-form.service';
import { Data, Event, Router } from '@angular/router';
import { ModalService } from 'src/app/services/modal.service';

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

interface popupData {
  title: string;
  description: string;
}

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.scss'],
})
export class EnquiryComponent implements OnInit, OnChanges {
  constructor(
    private enquires: EnquiryFormService,
    private Routes: Router,
    private element: ElementRef,
    private modal: ModalService
  ) {}

  initialArr: enquiryData[] = [];
  enquiryArr: enquiryData[] = [];
  State = {};
  showOverlay: boolean = false;
  popupDetail: any;
  popupCancel: boolean = false;
  showPopup: boolean = false;
  deleteId: string = '';

  ngOnInit(): void {
    this.getEnquiry();
    this.State = {
      label: 'Submission Type',
      option: [
        {
          state: 'Schedule Visit',
          code: 'Schedule Visit',
        },
        {
          state: 'Payment',
          code: 'payment',
        },
        {
          state: 'Sales',
          code: 'sales',
        },
        {
          state: 'Information',
          code: 'information',
        },
      ],
    };
    this.popupDetail = {
      title: 'Warning',
      description:
        'Are you sure you want to delete the Enquiry Form submission to delete',
    };
  }

  ngOnChanges(): any {
    this.getEnquiry();
  }

  async getEnquiry() {
    let a = await this.enquires.getEnquiryData();
    this.enquiryArr = a;
    this.initialArr = a;
  }

  typedVal(e: any) {
    this.enquiryArr = this.initialArr.filter((cur) => {
      return cur.data.topic === e.state;
    });
  }

  navigation(e: any, id: string) {
    if (!e.target.closest('button')) {
      console.log('out side the button', id);
      this.Routes.navigateByUrl(`/enquiry-details?id=${id}`);
    }
  }

  openDropdown(e: any) {
    e.target.closest('.enquiry-header').classList.add('showEnqOption');
    this.showOverlay = true;
  }

  deleteEntry(id: string) {
    this.showPopup = true;
    this.deleteId = id;
  }

  popupSuccess(e: boolean) {
    this.showPopup = false;
    if (e) {
      this.enquires.deleteEntries(this.deleteId);
      // this.element.nativeElement.querySelector(`.${this.deleteId}`).remove();
    }
  }

  popupCancell(e: boolean) {
    this.showPopup = e;
  }

  @HostListener('click') clearPopup() {
    let dropdown = this.element.nativeElement.querySelector('.showEnqOption');
    if (dropdown && this.showOverlay === false) {
      dropdown.classList.remove('showEnqOption');
    }

    this.showOverlay = false;
  }
}
