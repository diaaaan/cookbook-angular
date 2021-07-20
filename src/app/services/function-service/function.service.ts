import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { SnackbarComponent } from 'src/app/components/ui/snackbar/snackbar.component';
import { BlogDto } from 'src/app/model/blog.interface';

@Injectable({
  providedIn: 'root'
})
export class FunctionService {

  constructor(private http: HttpClient,
    private _snackBar: MatSnackBar
    
    ) { }

  durationInSeconds = 3;


  likeOneBlog(blog): Observable<BlogDto> {
    return this.http.put('api/functions/' + blog._id, blog);
  }

  dislikeOneBlog(blog): Observable<BlogDto> {
    blog.likes = blog.likes - 1;
    return this.http.put('api/functions/' + blog._id, blog);
  }

  openSnackBar(message: string) {
    const dialogRef = this._snackBar.open(message, null, {duration: 3000});

    dialogRef.afterDismissed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  getAllCategory(): Observable<any> {
    return this.http.get('/api/category')
  }

  getAllIngredients(): Observable<any> {
    return this.http.get('/api/ingredient')
  }

  getIngredientById(id): Observable<any> {
    return this.http.get('/api/ingredient/' + id)
  }
}
