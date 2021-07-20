import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentification-service/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthenticationService, private router: Router) {}
  canActivate(): boolean {
    // console.log('Гуарды: функция canActivate() в authguard начала свою работу');    
    // console.log('Гуарды: выполняется функция canActivate в authguard. Смотрит, зарегистрированны мы или нет. Если нет - переводит на страницу логина. Выполняет функцию isAuthenticated');
    
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['login']);
      // console.log('Гуарды: выполняется функция canActivate в authguard. authguard вернул false и перевел на страницу логина');
      
      return false;
    }
    // console.log('Гуарды: выполняется функция canActivate в authguard. authguard вернул true - мы авторизованы');
    // console.log('Гуарды: функция canActivate() в authguard завершила свою работу');    
    
    return true;
  }
  
}
