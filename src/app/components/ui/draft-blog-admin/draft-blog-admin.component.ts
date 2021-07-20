import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { tap } from 'rxjs/operators';
import { AdminService } from 'src/app/admin/services/admin.service';
import { FunctionService } from 'src/app/services/function-service/function.service';

@Component({
  selector: 'app-draft-blog-admin',
  templateUrl: './draft-blog-admin.component.html',
  styleUrls: ['./draft-blog-admin.component.scss']
})
export class DraftBlogAdminComponent implements OnInit {

  draftBlogName: string;
  snackBarMessage: string = 'Рецепт был успешно отклонен!';


  constructor(
    public dialogRef: MatDialogRef<DraftBlogAdminComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private functionService: FunctionService,
    private adminService: AdminService

  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.draftBlogName = this.data.blog.title;

  }

  draftBlog() {

    // this.blogService.post(blog).pipe(
    //   tap(() => this.functionService.openSnackBar(this.snackBarMessageAccepted))
    // ).subscribe();

    // this.adminService.updateIsAcceptedStatus(blog._id).subscribe();
    // window.location.reload();

    const blogId = this.data._id;
    this.adminService.updateIsDraftStatus(blogId)
    .pipe(
      tap(() => this.functionService.openSnackBar(this.snackBarMessage))
    ).subscribe(); 
    document.location.reload();
  }


}
