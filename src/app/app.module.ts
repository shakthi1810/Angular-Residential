import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MapModule } from './pages/map/map.module';
import { PropertyModule } from './pages/property/property.module';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SideMenuComponent } from './pages/common/side-menu/side-menu.component';
import { MainComponent } from './pages/main/main.component';
import { EnquiryModule } from './pages/enquiry/enquiry/enquiry.module';
import { CalculatorComponent } from './pages/calculator/calculator.component';
import { PageComponent } from './pages/page.component';
import { PropertyDetailsInterceptor } from './interceptors/property-details.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SideMenuComponent,
    MainComponent,
    CalculatorComponent,
    PageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    MapModule,
    PropertyModule,
    CommonModule,
    EnquiryModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: PropertyDetailsInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
