import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { DeleteBlogAdminComponent } from 'src/app/components/ui/delete-blog-admin/delete-blog-admin.component';
import { DraftBlogAdminComponent } from 'src/app/components/ui/draft-blog-admin/draft-blog-admin.component';
import { BlogService } from 'src/app/services/blog-service/blog.service';
import { FunctionService } from 'src/app/services/function-service/function.service';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-admin-recipie',
  templateUrl: './admin-recipie.component.html',
  styleUrls: ['./admin-recipie.component.scss']
})
export class AdminRecipieComponent implements OnInit {


  snackBarMessageAccepted = 'Рецепт был успешно опубликован!';
  snackBarMessageRejected = 'Рецепт отклонен';
  dataSource = null;

  displayedColumns: string[] = ['title', 'createdAt', 'category', 'isRecipieAccepted'];

  pageEvent: PageEvent;
  


  constructor(private adminService: AdminService,
              private blogService: BlogService,
              private functionService: FunctionService,
              public dialog: MatDialog,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.initDataSource();
  }

  initDataSource() {
    this.adminService.paginatePostsForModeration(1,10).pipe(
      map((postData) => this.dataSource = postData)
    ).subscribe();
  }

  acceptPost(blog) {
    this.blogService.post(blog).pipe(
      tap(() => this.functionService.openSnackBar(this.snackBarMessageAccepted))
    ).subscribe();

    this.adminService.updateIsAcceptedStatus(blog._id).subscribe();
    window.location.reload();
  }

  OpenDraftDialog(blog) {
    const dialogRef = this.dialog.open(DraftBlogAdminComponent, {data: {blog}});
  }

  openDeleteDialog(blog): void {
    // this.blogService.isBeDeleted = blogId;
    const dialogRef = this.dialog.open(DeleteBlogAdminComponent, {data: {blog}});
  }

  navigateToDetails(id) {
    this.router.navigate(['./' + id], {relativeTo: this.activatedRoute});
  }

  onPaginateChange(event: PageEvent) {
    let page = event.pageIndex;
    let size = event.pageSize;

    page = page + 1
    this.adminService.paginatePostsForModeration(page, size).pipe(
      map((postData) => this.dataSource = postData)
    ).subscribe();
   
  }

}
