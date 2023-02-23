import {
  AfterViewInit,
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter,
} from '@angular/core';
import * as L from 'leaflet';
import { APIServicesService } from 'src/app/apiservices.service';

@Component({
  selector: 'app-leaflet-map',
  templateUrl: './leaflet-map.component.html',
  styleUrls: ['./leaflet-map.component.scss'],
})
export class LeafletMapComponent implements AfterViewInit, OnChanges, OnInit {
  constructor(private propertyList: APIServicesService) {}

  @Input() coordinate: any;
  @Output() locationList: EventEmitter<any> = new EventEmitter();

  private map: any;
  lat: any;
  long: any;
  isRender: boolean = false;
  greenIcon: any;
  propertyListArr: any;

  ngOnInit(): void {
    this.getPropertyList();

    this.greenIcon = L.icon({
      iconUrl: '../../../../assets/icon/location.svg',
      iconSize: [38, 95], // size of the icon
      shadowSize: [50, 64], // size of the shadow
      iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
      shadowAnchor: [4, 62], // the same for the shadow
      popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
    });
  }

  async getPropertyList() {
    (await this.propertyList.getPropertyDetails()).subscribe((el: any) => {
      console.log(el);
      this.propertyListArr = el;

      if (!this.coordinate) {
        this.propertyListArr.forEach((el: any) => {
          this.loadMarker(el);
        });

        this.locationList.emit(this.propertyListArr);
      } else {
        this.loadSingleMarker();
      }
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.isRender = this.coordinate?.isRender;
    if (this.isRender) {
      // this.lat = this.coordinate.lat;
      // this.long = this.coordinate.lng;
      // this.map.flyTo(new L.LatLng(this.lat, this.long));
      // const marker = new L.Marker([this.lat, this.long], {
      //   icon: this.greenIcon,
      // }).addTo(this.map);

      this.getPropertyList();
    }
  }

  ngAfterViewInit(): void {
    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition((position) => {
    //     this.lat = position.coords.latitude;
    //     this.long = position.coords.longitude;
    //     this.initMap();
    //   });
    // }

    this.lat = 37.717001;
    this.long = -122.464153;
    this.initMap();
    // console.log(this.propertyListArr);
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [this.lat, this.long],
      zoom: 15,
    });

    const tiles = L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 18,
        minZoom: 3,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }
    );
    tiles.addTo(this.map);
  }

  loadMarker(el: any) {
    const markup = `
      <div class="thumbnail-img">
        <img src="${el.primary_photo}">
      </div>
      <div class="popup-title-wrapper">
        <p>${el.branding[0].name}</p>
      </div>
    `;
    const marker = new L.Marker(
      [el.location.address.coordinate.lat, el.location.address.coordinate.lon],
      {
        icon: this.greenIcon,
      }
    )
      .addTo(this.map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: true,
          closeOnClick: false,
          className: `mapPopup-popup`,
        })
      )
      .setPopupContent(markup);
  }

  loadSingleMarker() {
    const marker = new L.Marker([this.coordinate.lat, this.coordinate.lon], {
      icon: this.greenIcon,
    })
      .addTo(this.map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: true,
          closeOnClick: false,
          className: `mapPopup-popup`,
        })
      );
  }
}
