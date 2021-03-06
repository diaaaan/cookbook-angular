import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-full-view-image',
  templateUrl: './full-view-image.component.html',
  styleUrls: ['./full-view-image.component.scss']
})
export class FullViewImageComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<FullViewImageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    console.log(this.data);
    
  }

}
