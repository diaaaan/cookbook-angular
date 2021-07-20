import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { User } from 'src/app/model/user.interface';
import { AuthenticationService } from '../authentification-service/authentication.service';

export interface UserData {
  docs: User[],
  totalDocs: number,
  limit: number,
  totalPages: number,
  page: number,
  pagingCounter: number,
  hasPrevPage: boolean,
  hasNextPage: boolean,
  prevPage: number
  }

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient,
              private authService: AuthenticationService
    ) { }

  _nickname = new Subject<User>();

  setNickname() {
    console.log('set nickname');    
    let userId = this.authService.getUserId();
    this.findOne(userId).pipe(
      map((user: User) => this._nickname.next(user))
    ).subscribe();
    
    // this._nickname.next(user);
    console.log(this._nickname);
    
  }

  // apply(o: {
  //   nickname: string
  // }) {
  //   this._nickname.next(o.nickname);
  // }


  findOne(id: string): Observable<User> {
    console.log('Сервис - user.service: findOne() из user.service.ts начал свою работу');
    console.log('Сервис - user.service: findOne() из user.service.ts. Получил id и вернул user', id);
    console.log('Сервис - user.service: findOne() из user.service.ts завершил свою работу');
    
    return this.http.get('/api/user/' + id);
  }

  updateOne(user): Observable<User> {
    console.log('Сервис - user.service: updateOne() из user.service.ts начал свою работу');    
    console.log('Сервис - user.service: updateOne() из user.service.ts. Получает user ->', user);    
    console.log('Сервис - user.service: updateOne() из user.service.ts. Берет user.id ->', user.id);    
    console.log('Сервис - user.service: updateOne() из user.service.ts. Возвращает на бэкенд сторону запрос ->', this.http.put('api/user/' + user.id, user));    
    console.log('Сервис - user.service: updateOne() из user.service.ts завершает свою работу');        
    return this.http.put('api/user/' + user.id, user);
  }


  findAll(page: number, size: number): Observable<UserData> {
    let params = new HttpParams();

    params = params.append('page', String(page));
    params = params.append('limit', String(size));

    return this.http.get('/api/user', {params}).pipe(
      map((userData: UserData) => userData),
      catchError(err => throwError(err))
    )
  }

  uploadProfileImage(formData: FormData): Observable<any> {
    return this.http.post<FormData>('/api/user/upload', formData, {
      reportProgress: true,
      observe: 'events'
    })
  }

  paginateByName(page: number, size: number, nickname: string): Observable<UserData> {
    let params = new HttpParams();

    params = params.append('page', String(page));
    params = params.append('limit', String(size));
    params = params.append('nickname', String(nickname));

    return this.http.get('/api/user', {params}).pipe(
      map((userData: UserData) => userData),
      catchError(err => throwError(err))
    )
  }
}
