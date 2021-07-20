import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { JWT_NAME } from '../services/authentification-service/authentication.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('Интерсептор: intercept() из intercept.ts начал работу.');
    // console.log('Интерсептор: intercept() из intercept.ts. Получает токен и отправляет в header всю информацию из него. Если нет, возвращает запрос');
    const token = localStorage.getItem(JWT_NAME);
    // console.log('Интерсептор: intercept() из intercept.ts. Получил токен из localStorage ->', token);    
    
    if(token) {
      const cloneReq = request.clone({
        headers: request.headers.set('Authorization',
        'Bearer ' + token)
      });
      // console.log('Интерсептор: intercept() из intercept.ts. Из полученного токен отправил инфу в headers и сделал запрос ->', cloneReq);
      // console.log('Интерсептор: intercept() из intercept.ts. Возвращает ->', next.handle(cloneReq));
      console.log('Интерсептор: intercept() из intercept.ts завершил работу');
      return next.handle(cloneReq);
    } else {
      // console.log('Интерсептор: intercept() из intercept.ts. Не получил токен, сделал запрос ->', request);
      // console.log('Интерсептор: intercept() из intercept.ts. Возвращает ->', next.handle(request));
      console.log('Интерсептор: intercept() из intercept.ts завершил работу');
      return next.handle(request);
    }
  }
}
