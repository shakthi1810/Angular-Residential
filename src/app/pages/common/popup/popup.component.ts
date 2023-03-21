import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

interface popupData {
  title: string;
  description: string;
}

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent implements OnInit {
  constructor() {}

  @Input() popData: any;
  @Output() continue: EventEmitter<boolean> = new EventEmitter();
  @Output() cancel: EventEmitter<boolean> = new EventEmitter();
  @Input() popupShow: boolean = false;

  ngOnInit(): void {
    console.log(this.popData);
  }

  proceed() {
    this.continue.emit(true);
  }

  cancelPopup() {
    this.cancel.emit(false);
  }
}
