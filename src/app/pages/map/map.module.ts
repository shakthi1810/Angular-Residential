import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapContainerComponent } from './map-container/map-container.component';
import { LeafletMapComponent } from './leaflet-map/leaflet-map.component';
import { FormsModule } from '@angular/forms';
import { CommonModuleModule } from '../common/common-module/common-module.module';

@NgModule({
  declarations: [MapContainerComponent, LeafletMapComponent],
  imports: [CommonModule, FormsModule, CommonModuleModule],
  exports: [LeafletMapComponent],
})
export class MapModule {}
