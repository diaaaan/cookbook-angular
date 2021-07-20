import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { map, tap, switchMap } from "rxjs/operators";
import { JwtHelperService } from "@auth0/angular-jwt";
import { Observable, of, Subject } from 'rxjs';
import { User } from 'src/app/model/user.interface';

export interface LoginForm {
  email: string;
  password: string;
};



export const JWT_NAME = 'user-token';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) { }

  currentUser = new Subject<User>();

  login(loginForm: LoginForm) {
    
    return this.http.post<any>('/api/user/login', {email: loginForm.email, password: loginForm.password}).pipe(
      map((token) => {
        localStorage.setItem(JWT_NAME, token.access_token);
        return token;
      }),
      map((a) => {
        this.getCurrentUser();
      })
    )
  }

  getCurrentUserObserv(): Observable<any> {
    return of(localStorage.getItem(JWT_NAME)).pipe(
      switchMap((jwt: string) => of(this.jwtHelper.decodeToken(jwt)).pipe(
        map((jwt: any) => jwt.user)
        // map((a)=> this.currentUser = a)
        )
      )
    )
  }

  getCurrentUser() {
    const token = localStorage.getItem(JWT_NAME);
    const decoded = this.jwtHelper.decodeToken(token);
    this.currentUser.next(decoded.user);
  }

  logout() {
    localStorage.removeItem(JWT_NAME);
  }

  register(user) {
    return this.http.post<any>('/api/user/', user).pipe(
      map(user => user)
    )
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem(JWT_NAME);
    const a = !this.jwtHelper.isTokenExpired(token)
    return a;
  }

  getUserId(): string {
    const token = localStorage.getItem(JWT_NAME);
    if (token) {
      const decoded = this.jwtHelper.decodeToken(token);
      return decoded.user._id;
      
    } else {
      return null;
    }
  }

  observeGetUserId(): Observable<string>{
    return of(localStorage.getItem(JWT_NAME)).pipe(
      switchMap((jwt: string) => of(this.jwtHelper.decodeToken(jwt)).pipe(
        map((jwt: any) => jwt.user._id))
      )
    )
  }

  getUserRole(): string {
    const token = localStorage.getItem(JWT_NAME);
    if (token) {
      const decoded = this.jwtHelper.decodeToken(token);
      return decoded.user.role;
    } else {
      return null;
    }
  }

  observeGetUserRole(): Observable<string>{
    return of(localStorage.getItem(JWT_NAME)).pipe(
      switchMap((jwt: string) => of(this.jwtHelper.decodeToken(jwt)).pipe(
        map((jwt: any) => jwt.user.role))
      )
    )
  }
  
}