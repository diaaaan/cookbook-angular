import { HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map, tap, startWith } from 'rxjs/operators';
import { BlogService } from 'src/app/services/blog-service/blog.service';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatAutocompleteSelectedEvent, MatAutocomplete} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import { TagService } from 'src/app/services/tag-service/tag.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../../ui/snackbar/snackbar.component';
import { FunctionService } from 'src/app/services/function-service/function.service';
import { MatSelectChange } from '@angular/material/select';



export interface File {
  data: any;
  progress: number;
  inProgress: boolean;
}

@Component({
  selector: 'app-create-blog-entry',
  templateUrl: './create-blog-entry.component.html',
  styleUrls: ['./create-blog-entry.component.scss']
})
export class CreateBlogEntryComponent implements OnInit {

  ingredientSource$: Observable<any> = this.functionService.getAllIngredients();
  tagsSource$: Observable<any> = this.tagService.getAllTags();
  categorySource$: Observable<any> = this.functionService.getAllCategory();
  measureSource$: Observable<any>;


  ingredient: any;
  formGroup : FormGroup;
  formArray: FormArray;

  snackBarMessage: string = 'Рецепт успешно отправлен на модерацию!'

  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER];
  tagCtrl = new FormControl();
  tags: string[] = [];
  ingredients: string[] = [];
  
  measures: any[] = [
    {value: 'гр.'},
    {value: 'стакан'},
    {value: 'чайн. л.'},
    {value: 'ст. л.'},
    {value: 'дес. л.'},
    {value: 'шт.'},
    {value: 'кусок'},
    {value: 'щепотка'},
    {value: 'на вкус'},
    {value: 'л.'},
    {value: 'мл.'},

  ];

  @ViewChild('tagInput') tagInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;
  @ViewChild("fileUpload", {static: false}) fileUpload: ElementRef;

  file: File = {
    data: null,
    inProgress: false,
    progress: 0
  };

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private blogService: BlogService,
    private tagService: TagService,
    private functionService: FunctionService,
    private router: Router,
  ) {

    // this.form = this.formBuilder.group({
    //   published: true,
    //   credentials: this.formBuilder.array([]),
    // });
  }

  get tagsArr(): FormArray {
    return <FormArray>this.form.get('tags');
  }

  getIngredient(event) {
    console.log(event);
    
    // this.measures = {
    //   value: event.value,
    //   text: event.source.triggerValue
    // };
    // console.log(this.measures);
    
    
    // const ingId = this.ingredient;
    // console.log(ingId);
    // this.measureSource$ = this.functionService.getIngredientById(ingId).pipe(
    //   tap((x) => this.measures.push(x.measurementRu)
    //   )
    // )
    // console.log( this.measures)
  }
 

  add(event: MatChipInputEvent): void {
    console.log('add function');
    
    const input = event.input;
    const value = event.value;   
    if ((value || '').trim()) {
      this.tags.push(value.trim());
    }
    if (input) {
      input.value = '';
    }
    this.tagsArr.setValue(null);    
  }

  remove(tag: string): void {
    console.log('remove func');
    
    const index = this.tags.indexOf(tag);   
    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    console.log('selected function');
    
    // const a =  event.option.viewValue
    // this.tagsArr.push(a)
    this.tags.push(event.option.viewValue);
    this.tagInput.nativeElement.value = '';
    this.tagsArr.setValue(null);
  }

  // private _filter(value: string): string[] {
  //   const filterValue = value.toLowerCase();
  //   return this.allFruits.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
  // }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      id: [{value: null, disabled: true}],
      title: [null, [Validators.required]],
      slug: [{value: null, disabled: true}],
      description: [null, [Validators.required]],
      // body: [null, [Validators.required]],
      headerImage: [null, [Validators.required]],
      tags: [null],
      steps: this.formBuilder.array([this.init()]),
      timeForCooking: [null, [Validators.required]],
      category: [null],
      ingredients: this.formBuilder.array([this.initIng()]),
      servings: [null]
    })

    // this.formGroup = this._formBuilder.group({
    //   formArray : this._formBuilder.array([this.init()])
    // }) 
    this.addItem();
    this.addItemIng();

    console.log(this.tagsSource$);
    
  }

  init(){
    return this.formBuilder.group({
      stepPhoto: new FormControl("", []),
      step: new FormControl("", [Validators.required]),
    })
  }

  initIng(){
    return this.formBuilder.group({
      ingredient: new FormControl("", [Validators.required]),
      quantity: new FormControl("", [Validators.required]),
      measure: new FormControl("", [Validators.required]),
    })
  }

  addItem(){
    this.formArray = this.form.get("steps") as FormArray;
    this.formArray.push(this.init());
  }

  addItemIng(){
    this.formArray = this.form.get("ingredients") as FormArray;
    this.formArray.push(this.initIng());
    // this.formArray = this.form.get("quantity") as FormArray;
    // this.formArray.push(this.initIng());
  }

  deleteItemIng(i){
    let a = this.form.get("ingredients") as FormArray;
    a.removeAt(i);
  }

  deleteItemStep(i){
    let a = this.form.get("steps") as FormArray;
    a.removeAt(i);
  }


  post(){
    
    this.form.controls['tags'].setValue(this.tags);
    console.log(this.form.getRawValue());
    this.blogService.postToModerate(this.form.getRawValue()).pipe(
      tap(() => this.functionService.openSnackBar(this.snackBarMessage)),
      tap(() => this.router.navigate(['../']))
    ).subscribe();
  }

  // openSnackBar() {
  //   this._snackBar.openFromComponent(SnackbarComponent, {
  //     duration: this.durationInSeconds * 1000,
  //   });
  // }

  stepImageUpload() {
    console.log('stepimageupload');
    
    const fileInput = this.fileUpload.nativeElement;
    fileInput.click();
    fileInput.onchange = () => {
      this.file = {
        data: fileInput.files[0],
        inProgress: false,
        progress: 0
      };
      this.fileUpload.nativeElement.value = '';
      this.uploadStepFile();
    };

  }

  onClick() {
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
    };

  }

  deleteImage() {
    this.form.controls['headerImage'].setValue(null);
  }

  uploadFile() {
    console.log('Компонент - update-user-profile: uploadFile() начал свою работу');
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
      if(typeof (event) === 'object') {
        this.form.patchValue({headerImage: event.body.filename});
      }
    })
  }

  uploadStepFile() {
    console.log('Компонент -uploadStepFile() начал свою работу');
    const formData = new FormData();
    formData.append('file', this.file.data);
    this.file.inProgress = true;

    this.blogService.uploadStepImage(formData).pipe(
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
      if(typeof (event) === 'object') {
        this.form.patchValue({stepPhoto: event.body.filename});
      }
    })
  }

}
