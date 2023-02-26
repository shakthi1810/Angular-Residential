import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonModuleModule } from '../../common/common-module/common-module.module';
import { EnquiryComponent } from '../enquiry.component';
import { EnquiryDetailsComponent } from '../enquiry-details/enquiry-details.component';

@NgModule({
  declarations: [EnquiryComponent, EnquiryDetailsComponent],
  imports: [CommonModule, CommonModuleModule],
})
export class EnquiryModule {}
