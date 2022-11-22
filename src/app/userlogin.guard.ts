import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { MovieserviceService } from './Services/movieservice.service';
@Injectable({
  providedIn: 'root'
})
export class UserloginGuard implements CanActivate {
  constructor(private movieServices: MovieserviceService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (localStorage.getItem('token')) {
      return true
    }
    return this.movieServices.isUserLoggedIn;
  }

}
