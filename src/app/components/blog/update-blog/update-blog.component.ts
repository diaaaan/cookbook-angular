import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { BlogDto } from 'src/app/model/blog.interface';
import { AuthenticationService } from 'src/app/services/authentification-service/authentication.service';
import { BlogService } from 'src/app/services/blog-service/blog.service';
import { FunctionService } from 'src/app/services/function-service/function.service';
import { TagService } from 'src/app/services/tag-service/tag.service';
import { UserService } from 'src/app/services/user-service/user.service';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { FullViewImageComponent } from '../../ui/full-view-image/full-view-image.component';


export interface File {
  data: any;
  progress: number;
  inProgress: boolean;
}

@Component({
  selector: 'app-update-blog',
  templateUrl: './update-blog.component.html',
  styleUrls: ['./update-blog.component.scss']
})
export class UpdateBlogComponent implements OnInit {

  ingredientSource$: Observable<any> = this.functionService.getAllIngredients();
  tagsSource$: Observable<any> = this.tagService.getAllTags();
  categorySource$: Observable<any> = this.functionService.getAllCategory();

  form: FormGroup;
  ingredient: any;
  formGroup: FormGroup;
  formArray: FormArray;

  blogCategory;
  blogTitle;

  snackBarMessage: string = 'Рецепт успешно обновлен!';
  snackBarImageMessage: string = 'Фотография успешно обновлена!'
  snackBarInfoMessage: string = 'Информация успешно обновлена!'

  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER];
  tagCtrl = new FormControl();
  tags: string[] = [];
  ingredients: string[] = [];

  measures: any[] = [
    { value: 'гр.' },
    { value: 'стакан' },
    { value: 'чайн. л.' },
    { value: 'ст. л.' },
    { value: 'дес. л.' },
    { value: 'шт.' },
    { value: 'кусок' },
    { value: 'щепотка' },
    { value: 'на вкус' },
    { value: 'л.' },
    { value: 'мл.' },

  ];

  @ViewChild('tagInput') tagInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;
  @ViewChild("fileUpload", { static: false }) fileUpload: ElementRef;

  file: File = {
    data: null,
    inProgress: false,
    progress: 0
  };

  constructor(
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    private functionService: FunctionService,
    private tagService: TagService,
    private authService: AuthenticationService,
    private blogService: BlogService,
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      const blogId = params.get('id');
      this.blogService.findOneBlog(blogId).subscribe(blog => {
        this.form = new FormGroup({
          _id: new FormControl(blogId),
          title: new FormControl(blog.title),
          description: new FormControl(blog.description),
          headerImage: new FormControl(blog.headerImage),
          timeForCooking: new FormControl(blog.timeForCooking),
          category: new FormControl(blog.category),
          servings: new FormControl(blog.servings)
        });
        this.blogCategory = blog.category;
        this.blogTitle = blog.title;
      });
    })
  }

  updateImage() {
    const fileInput = this.fileUpload.nativeElement;
    fileInput.click();
    fileInput.onchange = () => {
      this.file = {
        data: fileInput.files[0],
        inProgress: false,
        progress: 0
      };
      this.fileUpload.nativeElement.value = '';
      this.uploadFile();
    }
  }

  uploadFile() {
    const formData = new FormData();
    formData.append('file', this.file.data);
    this.file.inProgress = true;

    this.blogService.uploadHeaderImage(formData).pipe(
      map((event) => {
        switch (event.type) {
          case HttpEventType.UploadProgress:
            this.file.progress = Math.round(event.loaded * 100 / event.total);
            break;
          case HttpEventType.Response:
            return event;
        }
      }),
      catchError((error: HttpErrorResponse) => {
        this.file.inProgress = false;
        return of('Upload failed');
      })
    ).subscribe((event: any) => {
      if (typeof (event) === 'object') {
        this.form.patchValue({ headerImage: event.body.filename });
        this.functionService.openSnackBar(this.snackBarImageMessage);
      }
    })
  }

  updateBlog() {
    this.blogService.updateUserBlog(this.form.getRawValue()).subscribe();
    this.functionService.openSnackBar(this.snackBarInfoMessage);
    this.router.navigate(['../profile']);
  }

  showFullImage(postImage): void {
    const link = 'blogs/image/'
    const dialogRef = this.dialog.open(FullViewImageComponent, { data: { link, postImage } });
  }

}
