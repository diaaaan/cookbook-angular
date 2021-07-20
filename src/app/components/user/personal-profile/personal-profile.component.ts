import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable, Observer } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { AdminService } from 'src/app/admin/services/admin.service';
import { BlogDto } from 'src/app/model/blog.interface';
import { User } from 'src/app/model/user.interface';
import { AuthenticationService } from 'src/app/services/authentification-service/authentication.service';
import { BlogService } from 'src/app/services/blog-service/blog.service';
import { DraftServiceService } from 'src/app/services/draft-service/draft-service.service';
import { FavoriteService } from 'src/app/services/favorite-service/favorite.service';
import { UserService } from 'src/app/services/user-service/user.service';
import { FullViewImageComponent } from '../../ui/full-view-image/full-view-image.component';


@Component({
  selector: 'app-personal-profile',
  templateUrl: './personal-profile.component.html',
  styleUrls: ['./personal-profile.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class PersonalProfileComponent implements OnInit {


  user: any;
  dataSource: BlogDto = null;

  private userId$: Observable<string> = this.authService.observeGetUserId();

  user$: Observable<User> = this.userId$.pipe(
    switchMap((userId: string) => this.userService.findOne(userId)) 
  )

  blogEntries$: Observable<BlogDto> = this.userId$.pipe(
    switchMap((userId: string) => this.blogService.indexByUser(userId)),
    tap((a) => console.log(a))
  )

  favEntries$: Observable<any> = this.userId$.pipe(
    switchMap((userId) => this.favService.getUsersFavPosts(userId)),
    tap((a) => console.log(a))
  )

  draftEntries$: Observable<any> = this.userId$.pipe(
    switchMap((userId) => this.adminService.paginatePostForModerationByAuthorId(userId)),
    tap(() => console.log('here')),
    tap((a) => console.log(a)
      )
  )



  form: FormGroup;


  constructor(private router: Router,
    private adminService: AdminService,
    private authService: AuthenticationService,
    private userService: UserService,
    private blogService: BlogService,
    public dialog: MatDialog,
    private favService: FavoriteService,
    private draftService: DraftServiceService
  ) {  

  }

  ngOnInit(): void {
    console.log(this.blogEntries$);
}


navigateTo(value) {
  this.router.navigate(['../', value]);
}

navigateToAdmin(value) {
  this.router.navigate(['../admin/', value]);
}

showFullImage(postImage): void {
  const link = 'user/profile-image/'
  const dialogRef = this.dialog.open(FullViewImageComponent, {data: {link, postImage}});
}

}
