import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BlogEntriesPageable } from 'src/app/model/blog.interface';
import { BlogService } from 'src/app/services/blog-service/blog.service';
import { DeleleBlogComponent } from '../../ui/delele-blog/delele-blog.component';

@Component({
  selector: 'app-user-blogs',
  templateUrl: './user-blogs.component.html',
  styleUrls: ['./user-blogs.component.scss']
})
export class UserBlogsComponent implements OnInit {

  blogEntriesLength: number = 0

  @Input() blogEntries: BlogEntriesPageable;
  constructor(
    private router: Router,
    private blogService: BlogService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }



  navigate(id) {
    this.router.navigateByUrl('blogs/' + id);
  }

  navigateToUpdate(id) {
    this.router.navigate(['update-blog/', id]);
  }

  openDeleteDialog(blog): void {
    // this.blogService.isBeDeleted = blogId;
    const dialogRef = this.dialog.open(DeleleBlogComponent, {data: {blog}});
  }


}
