import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { MapContainerComponent } from './pages/map/map-container/map-container.component';
import { PropertyComponent } from './pages/property/property.component';
import { PropertyDetailsComponent } from './pages/property/property-details/property-details.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'map',
    component: MapContainerComponent,
  },
  {
    path: 'property',
    component: PropertyComponent,
  },
  {
    path: 'property-details',
    component: PropertyDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
