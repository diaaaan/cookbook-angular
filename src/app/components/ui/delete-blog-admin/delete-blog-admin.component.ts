import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminService } from 'src/app/admin/services/admin.service';
import { FunctionService } from 'src/app/services/function-service/function.service';

@Component({
  selector: 'app-delete-blog-admin',
  templateUrl: './delete-blog-admin.component.html',
  styleUrls: ['./delete-blog-admin.component.scss']
})
export class DeleteBlogAdminComponent implements OnInit {

  deleteBlogName: string;

  constructor(
    public dialogRef: MatDialogRef<DeleteBlogAdminComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private functionService: FunctionService,
    private adminService: AdminService

  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  

  ngOnInit(): void {
    this.deleteBlogName = this.data.blog.title;
  }

  snackBarMessage: string = 'Рецепт, нарушающий правила, был успешно удален!'

  deleteBlog() {
    const blogId = this.data.blog._id;
    
    this.adminService.deletePost(blogId).subscribe(); 
    // this.blogService.isBeDeleted = null
    this.functionService.openSnackBar(this.snackBarMessage)
    document.location.reload();
  }

}
