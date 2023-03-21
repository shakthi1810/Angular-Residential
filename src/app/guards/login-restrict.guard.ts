import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginRestrictGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    let valid = sessionStorage.getItem('loginValid');
    if (valid) return true;
    return true;
  }
}
