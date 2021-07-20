import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { DeleteBlogAdminComponent } from 'src/app/components/ui/delete-blog-admin/delete-blog-admin.component';
import { FullViewImageComponent } from 'src/app/components/ui/full-view-image/full-view-image.component';
import { BlogDto } from 'src/app/model/blog.interface';
import { BlogService } from 'src/app/services/blog-service/blog.service';
import { FunctionService } from 'src/app/services/function-service/function.service';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-admin-recipie-details',
  templateUrl: './admin-recipie-details.component.html',
  styleUrls: ['./admin-recipie-details.component.scss']
})
export class AdminRecipieDetailsComponent implements OnInit {

  snackBarMessageAccepted = 'Рецепт был успешно опубликован!';
  snackBarMessageRejected = 'Рецепт отклонен';

  blogDto$: Observable<BlogDto> = this.activatedRoute.params.pipe(
    switchMap((params: Params) => {
      const blogDtoId: string = (params['id']);
      return this.adminService.findOnePostForModerate(blogDtoId).pipe(
        map((blogDto: BlogDto) => blogDto),
        tap((blogDto) => console.log(blogDto),
        )
      )
    })
  )

  constructor(
    private activatedRoute: ActivatedRoute,
    private adminService: AdminService,
    private blogService: BlogService,
    private functionService: FunctionService,
    public dialog: MatDialog

  ) { }

  ngOnInit(): void {
  }


  acceptPost(blog) {
    this.blogService.post(blog).pipe(
      tap(() => this.functionService.openSnackBar(this.snackBarMessageAccepted))
    ).subscribe();

    this.adminService.updateIsAcceptedStatus(blog._id).subscribe();
    window.location.reload();
  }

  rejectPost(blog) {
    console.log(blog);
    
  }

  openDeleteDialog(blog): void {
    // this.blogService.isBeDeleted = blogId;
    const dialogRef = this.dialog.open(DeleteBlogAdminComponent, {data: {blog}});
  }

  showFullImage(postImage): void {
    const link = 'blogs/image/'
    const dialogRef = this.dialog.open(FullViewImageComponent, {data: {link, postImage}});
  }

}
