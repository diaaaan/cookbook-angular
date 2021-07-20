import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable, Observer, Subscription } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { BlogDto, BlogEntriesPageable } from 'src/app/model/blog.interface';
import { User } from 'src/app/model/user.interface';
import { BlogService } from 'src/app/services/blog-service/blog.service';
import { UserService } from 'src/app/services/user-service/user.service';
import { FullViewImageComponent } from '../../ui/full-view-image/full-view-image.component';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {


  panelOpenState = false;



  private userId$: Observable<string> = this.activatedRoute.params.pipe(
    map((params: Params) => (params['id']))
  )
  // private sub: Subscription;
  // user: User = null;


  user$: Observable<User> = this.userId$.pipe(
    switchMap((userId: string) => this.userService.findOne(userId)) 
  )

  blogEntries$: Observable<BlogDto> = this.userId$.pipe(
    switchMap((userId: string) => this.blogService.indexByUser(userId)),
    tap((a) => console.log(a))
  )

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private blogService: BlogService,
    public dialog: MatDialog
  ) {  }

  onPaginateChange(event: PageEvent) {
    return this.userId$.pipe(
      tap((userId: string) => this.blogEntries$ = this.blogService.indexByUser(userId))
    ).subscribe();
  }

  showFullImage(postImage): void {
    const link = 'user/profile-image/'
    const dialogRef = this.dialog.open(FullViewImageComponent, {data: {link, postImage}});
  }

  
  navigate(id) {
    this.router.navigateByUrl('blogs/' + id);
  }
  // ngOnInit(): void {
  //   this.sub = this.activatedRoute.params.subscribe(params => {
  //     this.userId = (params['id']);
  //     this.userService.findOne(this.userId).pipe(
  //       map((user: User) => this.user = user)
  //     ).subscribe()
  //   });
  // }


  // ngOnDestroy() {

  //   this.sub.unsubscribe();
  //   //Called once, before the instance is destroyed.
  //   //Add 'implements OnDestroy' to the class.
    
  // }
}
