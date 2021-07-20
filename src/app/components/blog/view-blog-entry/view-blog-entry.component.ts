import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable, Observer } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { BlogDto } from 'src/app/model/blog.interface';
import { AuthenticationService } from 'src/app/services/authentification-service/authentication.service';
import { BlogService } from 'src/app/services/blog-service/blog.service';
import { FavoriteService } from 'src/app/services/favorite-service/favorite.service';
import { FunctionService } from 'src/app/services/function-service/function.service';
import { FullViewImageComponent } from '../../ui/full-view-image/full-view-image.component';



@Component({
  selector: 'app-view-blog-entry',
  templateUrl: './view-blog-entry.component.html',
  styleUrls: ['./view-blog-entry.component.scss']
})
export class ViewBlogEntryComponent implements OnInit {

  snackBarInfoMessage: string = 'Пост успешно добавлен в избранное!';
  isJoined: boolean = false;

  blogDto$: Observable<BlogDto> = this.activatedRoute.params.pipe(
    switchMap((params: Params) => {
      const blogDtoId: string = (params['id']);
      return this.blogService.findOneBlog(blogDtoId).pipe(
        map((blogDto: BlogDto) => blogDto),
        tap((blogDto) => console.log(blogDto)
        )
      )
    })
  )

  constructor(
    private authService: AuthenticationService,
    private functionService: FunctionService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private blogService: BlogService,
    public dialog: MatDialog,
    private favoreteService: FavoriteService,

  ) {}

  ngOnInit(): void {
    const getUserId = this.authService.getUserId();
    if (getUserId !=null) {
      this.isJoined = true;
    }
  }

  showFullImage(postImage): void {
    const link = 'blogs/image/'
    const dialogRef = this.dialog.open(FullViewImageComponent, { data: { link, postImage } });
  }

  addPostToFavorites(post) {
    this.favoreteService.createFavPost(post).subscribe();
    this.functionService.openSnackBar(this.snackBarInfoMessage);

  }

  navigateToProfile(id) {
    this.router.navigate(['users/' + id]);
  }

}
