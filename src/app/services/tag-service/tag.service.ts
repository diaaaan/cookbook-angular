import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Tag } from 'src/app/model/tag.interface';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  constructor(private http: HttpClient) { }

  getAllTags(): Observable<any> {
    return this.http.get('/api/tags');
  }

  getOneTagById(blogId: string): Observable<Tag> {
    return this.http.get('/api/tags' + blogId);
  }

  getOneByName(tagName: string): Observable<Tag> {
    let params = new HttpParams();
    params = params.append('tagName', String(tagName));
    return this.http.get('/api/tags', {params}).pipe(
      map((tags: Tag) => tags),
      catchError(err => throwError(err))
    )
  }

  createTag(tagDto: Tag): Observable<Tag> {
    return this.http.post<Tag>('/api/tags', tagDto);
  }

}
