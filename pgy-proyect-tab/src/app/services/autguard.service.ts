import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationServiceService } from './authentication-service.service';
@Injectable({
  providedIn: 'root'
})
export class AutguardService implements CanActivate {

  constructor(public authenticationService: AuthenticationServiceService, private router: Router) { }  

  canActivate(): boolean {
    if (!this.authenticationService.isAuthenticated()){
      this.router.navigate(['page-login']);
      return false;
    }
    return true;
  }
}
