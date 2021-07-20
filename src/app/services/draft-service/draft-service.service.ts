import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DraftServiceService {

  constructor(private http: HttpClient) { }

  getUsersDraftPosts(user): Observable<any> {
    return this.http.get('/api/draft/draft/' + user);
  }

}
