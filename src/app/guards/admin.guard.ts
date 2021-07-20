import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentification-service/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private authService: AuthenticationService, private router: Router) {}
  canActivate(): boolean {
    const userRole = this.authService.getUserRole();
    if(userRole === 'admin') {
      return true;
    } else {
      this.router.navigate(['']);
      return false;
    }
  }
  
}
