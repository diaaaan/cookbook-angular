import { HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { switchMap, tap, map, catchError } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/services/authentification-service/authentication.service';
import { FunctionService } from 'src/app/services/function-service/function.service';
import { UserService } from 'src/app/services/user-service/user.service';
import { FullViewImageComponent } from '../../ui/full-view-image/full-view-image.component';

export interface File {
  data: any;
  progress: number;
  inProgress: boolean;
}

@Component({
  selector: 'app-update-user-profile',
  templateUrl: './update-user-profile.component.html',
  styleUrls: ['./update-user-profile.component.scss']
})
export class UpdateUserProfileComponent implements OnInit {

  @ViewChild("fileUpload", {static: false}) fileUpload: ElementRef;

  file: File = {
    data: null,
    inProgress: false,
    progress: 0
  };

  snackBarImageMessage = 'Фотография успешно обновлена!'
  snackBarInfoMessage = 'Информация успешно обновлена!'
  form: FormGroup;

  constructor(
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private userService: UserService,
    private functionService: FunctionService,
    private router: Router
  ) { }


  ngOnInit(): void {
    const userId = this.authService.getUserId();
    console.log(userId);
    this.userService.findOne(userId).subscribe(user => {
      console.log(user);      
      this.form = new FormGroup({
        id: new FormControl(userId),
        name: new FormControl(user.name),
        nickname: new FormControl(user.nickname),
        profileImage: new FormControl(user.profileImage),
        userDescription: new FormControl(user.userDescription),
      });
    });
  }

  updateImage() {
    console.log('Компонент - update-user-profile: updateImage() начал свою работу');
    console.log('Компонент - update-user-profile: updateImage() получил fileInput ->');   
    const fileInput = this.fileUpload.nativeElement;
    console.log(fileInput);
    
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
    console.log('Компонент - update-user-profile: uploadFile() начал свою работу');
    const formData = new FormData();
    formData.append('file', this.file.data);
    this.file.inProgress = true;
    

    this.userService.uploadProfileImage(formData).pipe(
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
      }),
      // tap(() => this.functionService.openSnackBar(this.snackBarImageMessage))
    ).subscribe((event: any) => {
      if(typeof (event) === 'object') {
        this.form.patchValue({profileImage: event.body.profileImage});
        this.functionService.openSnackBar(this.snackBarImageMessage);
      }
    })
  }

   
  // this.form.controls['tags'].setValue(this.tags);
  // console.log(this.form.getRawValue());
  // this.blogService.postToModerate(this.form.getRawValue()).pipe(
  //   tap(() => this.functionService.openSnackBar(this.snackBarMessage)),
  //   tap(() => this.router.navigate(['../']))
  // ).subscribe();
   
   update() {
    this.userService.updateOne(this.form.getRawValue()).subscribe();
    this.functionService.openSnackBar(this.snackBarInfoMessage);
    this.router.navigate(['../profile']);
    console.log('Компонент - update-user-profile: update() из update-user-profile.ts закончил работу.');   
   }

   showFullImage(postImage): void {
    const link = 'user/profile-image/'
    const dialogRef = this.dialog.open(FullViewImageComponent, {data: {link, postImage}});
  }
}
