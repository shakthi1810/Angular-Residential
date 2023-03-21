import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { MapContainerComponent } from './pages/map/map-container/map-container.component';
import { PropertyComponent } from './pages/property/property.component';
import { PropertyDetailsComponent } from './pages/property/property-details/property-details.component';
import { MainComponent } from './pages/main/main.component';
import { EnquiryComponent } from './pages/enquiry/enquiry.component';
import { EnquiryDetailsComponent } from './pages/enquiry/enquiry-details/enquiry-details.component';
import { UserRestrictGuard } from './guards/user-restrict.guard';
import { LoginRestrictGuard } from './guards/login-restrict.guard';
import { PageComponent } from './pages/page.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: PageComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
        canActivate: [LoginRestrictGuard],
      },
      {
        path: 'map',
        component: MapContainerComponent,
        canActivate: [LoginRestrictGuard],
      },
      {
        path: 'property',
        component: PropertyComponent,
        canActivate: [LoginRestrictGuard],
      },
      {
        path: 'property-details',
        component: PropertyDetailsComponent,
      },
      {
        path: 'enquiry',
        component: EnquiryComponent,
        canActivate: [UserRestrictGuard, LoginRestrictGuard],
      },
      {
        path: 'enquiry-details',
        component: EnquiryDetailsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
