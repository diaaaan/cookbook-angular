import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { BlogService } from 'src/app/services/blog-service/blog.service';
import { FunctionService } from 'src/app/services/function-service/function.service';

@Component({
  selector: 'app-delele-blog',
  templateUrl: './delele-blog.component.html',
  styleUrls: ['./delele-blog.component.scss']
})
export class DeleleBlogComponent implements OnInit {

  deleteBlogName: string;

  constructor(
    public dialogRef: MatDialogRef<DeleleBlogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private blogService: BlogService,
    private functionService: FunctionService,
    private router: Router,
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.deleteBlogName = this.data.blog.title;
  }


  snackBarMessage: string = 'Рецепт был успешно удален!'

  deleteBlog() {
    const blogId = this.data.blog._id;
    console.log(blogId);
    
    this.blogService.deleteBlogByUser(blogId).subscribe(); 
    // this.blogService.isBeDeleted = null
    this.functionService.openSnackBar(this.snackBarMessage)
    document.location.reload();
  }
}

