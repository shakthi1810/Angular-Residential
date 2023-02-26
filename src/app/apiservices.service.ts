import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class APIServicesService {
  subscribe(arg0: (cur: any) => void) {
    throw new Error('Method not implemented.');
  }
  constructor(private http: HttpClient) {}
  data: any;
  async getLoginDetails() {
    return this.http.get('../../assets/JSON/loginDetails.json');
  }

  // async getLoginDetails() {
  //   return this.http.get(
  //     'https://realtor-real-estate-data-api.p.rapidapi.com/realtor_data/property/',
  //     {
  //       params: { city: 'San Jose', state_code: 'CA', offset: '0' },
  //       headers: {
  //         'X-RapidAPI-Key':
  //           '0f010c7f60msh9b257931edbe078p154deejsnc76221d6490f',
  //         'X-RapidAPI-Host': 'realtor-real-estate-data-api.p.rapidapi.com',
  //       },
  //     }
  //   );
  // }

  async getCoord() {
    return this.http.get('../../assets/JSON/in.json');
  }

  async getPropertyDetails(city: string, cityCd: string) {
    // return this.http.get(
    //   'https://realtor-real-estate-data-api.p.rapidapi.com/realtor_data/property/',
    //   {
    //     params: { city: city, state_code: cityCd, offset: '0' },
    //     headers: {
    //       'X-RapidAPI-Key':
    //         '0f010c7f60msh9b257931edbe078p154deejsnc76221d6490f',
    //       'X-RapidAPI-Host': 'realtor-real-estate-data-api.p.rapidapi.com',
    //     },
    //   }
    // );
    return this.http.get('../../assets/JSON/list.json');
  }
}
