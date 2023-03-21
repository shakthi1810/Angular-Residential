import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyCardComponent } from '../property-card/property-card.component';
import { SearchComponentComponent } from '../search-component/search-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterBoxComponent } from '../filter-box/filter-box.component';
import { CalculatorComponent } from '../calculator/calculator.component';
import { PopupComponent } from '../popup/popup.component';
// import { SideMenuComponent } from '../side-menu/side-menu.component';

@NgModule({
  declarations: [
    PropertyCardComponent,
    SearchComponentComponent,
    FilterBoxComponent,
    CalculatorComponent,
    // SideMenuComponent,
    PopupComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],

  exports: [
    PropertyCardComponent,
    SearchComponentComponent,
    FilterBoxComponent,
    CalculatorComponent,
    PopupComponent,
  ],
})
export class CommonModuleModule {}
