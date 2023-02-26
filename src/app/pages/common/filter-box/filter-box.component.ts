import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-filter-box',
  templateUrl: './filter-box.component.html',
  styleUrls: ['./filter-box.component.scss'],
})
export class FilterBoxComponent implements OnInit, OnChanges {
  @Output() filterValue: EventEmitter<any> = new EventEmitter();
  @Input() label: any | undefined;

  labelStr: String | undefined;
  options: any;

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    this.labelStr = this.label?.label;
    this.options = this.label?.option;
  }

  onInput(data: any) {
    let selectedState = this.options.filter((cur: any) => {
      return cur.code === data.target.value;
    });
    this.filterValue.emit({
      cd: data.target.value,
      state: selectedState[0].state,
    });
  }
}
