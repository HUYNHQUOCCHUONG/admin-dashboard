import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class BaoveGuard implements CanActivate {
  constructor(public auth: AuthService, public router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //logic xét duyệt để trả về true/false ở đây
    if (this.auth.daDangNhap() == false) {
      this.router.navigate(['dangnhap']);
      return false;
    }
    else return true;
  }

}
