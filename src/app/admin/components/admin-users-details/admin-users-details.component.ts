import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { FullViewImageComponent } from 'src/app/components/ui/full-view-image/full-view-image.component';
import { BlogDto } from 'src/app/model/blog.interface';
import { User } from 'src/app/model/user.interface';
import { BlogService } from 'src/app/services/blog-service/blog.service';
import { UserService } from 'src/app/services/user-service/user.service';

@Component({
  selector: 'app-admin-users-details',
  templateUrl: './admin-users-details.component.html',
  styleUrls: ['./admin-users-details.component.scss']
})
export class AdminUsersDetailsComponent implements OnInit {

  panelOpenState = false;

  private userId$: Observable<string> = this.activatedRoute.params.pipe(
    map((params: Params) => (params['id']))
  )

  user$: Observable<User> = this.userId$.pipe(
    switchMap((userId: string) => this.userService.findOne(userId)) 
  )

  blogEntries$: Observable<BlogDto> = this.userId$.pipe(
    switchMap((userId: string) => this.blogService.indexByUser(userId)),
    tap((a) => console.log(a))
  )

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private blogService: BlogService,
    public dialog: MatDialog

  ) { }

  ngOnInit(): void {
  }

  showFullImage(postImage): void {
    const link = 'user/profile-image/'
    const dialogRef = this.dialog.open(FullViewImageComponent, {data: {link, postImage}});
  }

}
