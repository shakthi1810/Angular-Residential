import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserRestrictGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    let user = sessionStorage.getItem('role');
    if (user == 'admin') {
      return true;
    }
    return false;
  }
}
