import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  constructor(private http: HttpClient) { }

  createFavPost(blogDto): Observable<any> {
    return this.http.post<any>('/api/favorite', blogDto);
  }

  getUsersFavPosts(user): Observable<any> {
    return this.http.get('/api/favorite/user/' + user);
  }

   findOneBlog(id: string): Observable<any> {
    return this.http.get<any>('/api/favorite/' + id);
  }
}
