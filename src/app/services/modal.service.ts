import { Injectable, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService implements OnInit, OnChanges {
  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {}

  openModal() {
    return true;
  }

  closeModal() {
    return false;
  }
}
