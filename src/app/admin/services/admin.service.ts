import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  paginatePostsForModeration(page: number, size: number): Observable<any> {
    let params = new HttpParams();

    params = params.append('page', String(page));
    params = params.append('limit', String(size));
    
    return this.http.get('/api/moderator', {params});
  }

  getUsersFavPosts(user): Observable<any> {
    return this.http.get('/api/favorite/user/' + user);
  }

  paginatePostForModerationByAuthorId(id: string): Observable<any> {
    // let params = new HttpParams();

    // params = params.append('page', String(page));
    // params = params.append('limit', String(size));
    
    return this.http.get('/api/moderator/user/'+ id);
  }

  updateIsAcceptedStatus(id): Observable<any> {
    return this.http.put('/api/moderator/' + id, {isRecipieAccepted: true});
  }

  updateIsDraftStatus(id): Observable<any> {
    return this.http.put('/api/moderator/' + id, {isRecipieDraft: true});
  }

  findOnePostForModerate(id: string): Observable<any> {
    return this.http.get<any>('/api/moderator/' + id);
  }

  deletePost(blogId): Observable<any> {
    return this.http.delete('/api/moderator/' + blogId)
  }

  draftPost(blogId): Observable<any> {
    return this.http.post('/api/draft/', blogId)
  }

}
