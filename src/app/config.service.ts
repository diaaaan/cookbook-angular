import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Subject } from 'rxjs';
import { User } from './model/user.interface';


export const JWT_NAME = 'user-token';


@Injectable()
export class ConfigService {

  user: Object = null;


  public _appConfig = new Subject<User>(); 
  constructor(private _http: HttpClient,
              private jwtHelper: JwtHelperService) { }

  getUserId(): string {
    const token = localStorage.getItem(JWT_NAME);
    if (token) {
      const decoded = this.jwtHelper.decodeToken(token);
      return decoded.user._id;
    } else {
      console.log('non authorized');
    }
  }

  public loadConfig() {
    let userId = this.getUserId();
    if (userId) {
      return this._http.get('/api/user/' + userId)
      .toPromise()
      .then(res=>{
        this.user = res;
        this._appConfig.next(this.user);
      });
    } else {
      console.log('non authorized');
    }
 
  }

  public getConfig() {
    return this.user;
  }
}
