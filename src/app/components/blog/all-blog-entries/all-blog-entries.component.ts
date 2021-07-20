import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BlogDto, BlogEntriesPageable } from 'src/app/model/blog.interface';
import { User } from 'src/app/model/user.interface';
import { AuthenticationService } from 'src/app/services/authentification-service/authentication.service';
import { BlogService } from 'src/app/services/blog-service/blog.service';
import { FunctionService } from 'src/app/services/function-service/function.service';
import { DeleleBlogComponent } from '../../ui/delele-blog/delele-blog.component';
import { IngredientsComponent } from '../../ui/ingredients/ingredients.component';


@Component({
  selector: 'app-all-blog-entries',
  templateUrl: './all-blog-entries.component.html',
  styleUrls: ['./all-blog-entries.component.scss']
})
export class AllBlogEntriesComponent implements OnInit {

  @Input() blogEntries: BlogEntriesPageable;
  @Output() paginate: EventEmitter<PageEvent> = new EventEmitter<PageEvent>();


  dataSource$: Observable<BlogEntriesPageable> = this.blogService.indexAll(1, 10);
  categorySource$: Observable<any> = this.functionService.getAllCategory();

  // userId$ = this.authService.getUserId();

  // isLiked = this.likeBlog(this.dataSource$.pipe) 
  pageEvent: PageEvent;
  isJoined: boolean = false;
  panelOpenState = false;

  constructor(private router: Router,
    private blogService: BlogService,
    private authService: AuthenticationService,
    private functionService: FunctionService,
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {
   const getUserId = this.authService.getUserId();
    if (getUserId !=null) {
      this.isJoined = true;
      this.userId = getUserId
    }
  }

  isLiked = false;
  userId: string = '0';
  value = '';
  allCategories = []

  openDialog() {
    console.log('Modal here');
    
    const dialogRef = this.dialog.open(IngredientsComponent, {
      width: '100%', height: '70%'
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  onPaginateChange(event: PageEvent) {
    console.log(event);
    // let page = event.pageIndex;
    // let limit = event.pageSize;

    // page = page +1;
    event.pageIndex = event.pageIndex + 1;
    // event.previousPageIndex = event.previousPageIndex +1;
    this.paginate.emit(event);
    // console.log(event);
    

    // this.dataSource = this.blogService.indexAll(page, limit);
    // this.paginate.emit(event)
  }
  
  navigate(id) {
    this.router.navigateByUrl('blogs/' + id);
  }

  navigateToUpdate(id) {
    this.router.navigate(['update-blog/', id]);
  }

  // likeLog() {
  //   this.isLiked = true
  // }

  likeBlog(blog: BlogDto) {
    const userId = this.authService.getUserId();
    console.log('likeblog');    
    this.blogService.toggle(blog, userId)
    // this.blogService.toggle(blog).subscribe(x => { } );
  }

  editBlog(blog) {
    console.log(blog);
    
  }

  deleteBlog(blog) {
    this.blogService.deleteBlogByUser(blog).subscribe();
  }
}
