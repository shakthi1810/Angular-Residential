import { Component, Input, OnChanges, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  Validators,
  FormGroup,
} from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent implements OnChanges, OnInit {
  constructor(private fb: FormBuilder) {}
  @Input() calcValue: any;

  calculatorForm: any;
  priceVal: Number = 123469787;
  downPaymentVal: Number = 1000000;
  interestVal: Number = 10;
  loanTermVal: Number = 30;
  totalEmi: Number | undefined;

  ngOnChanges(): void {
    this.priceVal = this.calcValue.price;
  }

  ngOnInit(): void {
    this.calculatorForm = this.fb.group({
      price: [this.priceVal, Validators.required],
      downPayment: [this.downPaymentVal, Validators.required],
      interest: [this.interestVal, Validators.required],
      loanTerm: [this.loanTermVal, Validators.required],
    });

    this.calculatePrice();
  }

  get price() {
    return this.calculatorForm.get('price');
  }

  get downPayment() {
    return this.calculatorForm.get('downPayment');
  }

  get interest() {
    return this.calculatorForm.get('interest');
  }

  get loanTerm() {
    return this.calculatorForm.get('loanTerm');
  }

  calculatePrice() {
    const { price, downPayment, interest, loanTerm } =
      this.calculatorForm.value;

    const emiCalc =
      price - downPayment + (price - downPayment) * (interest / 100);
    this.totalEmi = Math.floor(emiCalc / loanTerm);
  }
}
