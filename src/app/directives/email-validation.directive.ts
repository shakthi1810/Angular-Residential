import {
  Directive,
  ElementRef,
  OnInit,
  OnChanges,
  SimpleChanges,
  HostListener,
  Input,
} from '@angular/core';
import { regex } from '../regex/regex';

@Directive({
  selector: '[EmailValidation]',
})
export class EmailValidationDirective implements OnInit {
  constructor(private el: ElementRef) {}
  value: any;
  @Input() validate!: boolean;
  element = this.el.nativeElement;

  ngOnInit(): void {}

  @HostListener('keyup', ['$event']) onChange(event: any) {
    // console.log(this.el.nativeElement.value);
    if (regex.email.test(this.element.value)) {
      this.element.style.borderColor = 'green';
    } else this.element.style.borderColor = 'red';
  }
}
