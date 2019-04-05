import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from '@angular/router';

import { AuthenticationService } from '../authentication/authentication.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.chekUser(route, state);

  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.chekUser(route, state);
  }

  private chekUser(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const isLogin: boolean = this.authenticationService.isLogin();
    if (isLogin && state.url === '/home') {
      return true;
    } else if (isLogin && state.url === '/login') {
      this.router.navigate(['/home']);
    } else if (!isLogin && state.url === '/home') {
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    } else {
      return true;
    }
  }
}

