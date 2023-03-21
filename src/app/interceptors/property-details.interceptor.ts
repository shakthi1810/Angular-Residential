import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';

@Injectable()
export class PropertyDetailsInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): any {
    let response = request.clone({
      headers: request.headers
        .set(
          'X-RapidAPI-Key',
          '0f010c7f60msh9b257931edbe078p154deejsnc76221d6490f'
        )
        .set(
          'X-RapidAPI-Host',
          'realtor-data-api-for-real-estate.p.rapidapi.com'
        ),
    });
    return next.handle(response);
  }
}
