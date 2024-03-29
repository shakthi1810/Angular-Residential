import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyComponent } from './property.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModuleModule } from '../common/common-module/common-module.module';
import { PropertyDetailsComponent } from './property-details/property-details.component';
import { MapModule } from '../map/map.module';
import { EmailValidationDirective } from 'src/app/directives/email-validation.directive';

@NgModule({
  declarations: [
    PropertyComponent,
    PropertyDetailsComponent,
    EmailValidationDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    CommonModuleModule,
    MapModule,
    ReactiveFormsModule,
  ],
})
export class PropertyModule {}
