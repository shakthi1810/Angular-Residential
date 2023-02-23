import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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
// import { FilterBoxComponent } from './pages/common/filter-box/filter-box.component';
// import { PropertyCardComponent } from './pages/common/property-card/property-card.component';

// import { PropertyCardComponent } from './pages/common/property-card/property-card.component';
// import { SearchComponentComponent } from './pages/common/search-component/search-component.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SideMenuComponent,
    // FilterBoxComponent,
    // PropertyCardComponent,
    // PropertyCardComponent,
    // SearchComponentComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
