import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { FunctionService } from 'src/app/services/function-service/function.service';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss']
})
export class IngredientsComponent implements OnInit {

  ingredientSource$: Observable<any> = this.functionService.getAllIngredients();


  constructor(
    public dialogRef: MatDialogRef<IngredientsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private functionService: FunctionService
  ) { }

  ngOnInit(): void {
  }

}
