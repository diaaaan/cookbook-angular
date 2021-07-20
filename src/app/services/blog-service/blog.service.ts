import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogDto, BlogEntriesPageable } from 'src/app/model/blog.interface';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  indexAll(page: number, size: number): Observable<BlogEntriesPageable> {
    let params = new HttpParams();

    params = params.append('page', String(page));
    params = params.append('limit', String(size));

    return this.http.get<BlogEntriesPageable>('/api/blogs', {params});
  }

  indexByUser(userId: string): Observable<BlogDto> {
    return this.http.get('/api/blogs/user/' + userId);
  }

  postToModerate(blogDto): Observable<any> {
    return this.http.post<BlogDto>('/api/moderator', blogDto);
  }

  post(blogDto: BlogDto): Observable<BlogDto> {
    console.log('post');
    console.log(blogDto);
    
    
    return this.http.post<BlogDto>('/api/blogs', blogDto);
  }

  uploadHeaderImage(formData: FormData): Observable<any> {
    return this.http.post<FormData>('/api/blogs/image/upload', formData, {
      reportProgress: true,
      observe: 'events'
    });
  }

  uploadStepImage(formData: FormData): Observable<any> {
    return this.http.post<FormData>('/api/blogs/image/step-image-upload', formData, {
      reportProgress: true,
      observe: 'events'
    });
  }


  findOneBlog(id: string): Observable<BlogDto> {
    return this.http.get<BlogDto>('/api/blogs/' + id);
  }

  updateUserBlog(blog): Observable<BlogDto> {
    console.log(blog);
    console.log(blog._id);
    
    
    return this.http.put('/api/blogs/' + blog._id, blog);
  }

  deleteBlogByUser(blogId): Observable<BlogDto> {
    return this.http.delete('/api/blogs/' + blogId);
  }

  toggle(blog, userId): Observable<boolean> {
    if (blog.likeUserId != 0) {
      blog.likeUserId.forEach(function (v) {
          if(v === userId) { return true; }
        })
    }
  
    // if (blog.likeUserid === userId) {
    //   console.log('Айди есть');
    // } else {
    //   console.log('айди нет');
      
    // }
    console.log(blog);
    console.log(userId);
    
    return
     
    
    // return this.toggled ? this.likeOneBlog(blog) : this.dislikeOneBlog(blog);
  }
  // toggle(blog): Observable<BlogDto> {
  //   return blog
    
  //   // return this.toggled ? this.likeOneBlog(blog) : this.dislikeOneBlog(blog);
  // }

}
