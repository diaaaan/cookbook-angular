import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-step',
  templateUrl: './recipe-step.component.html',
  styleUrls: ['./recipe-step.component.scss']
})
export class RecipeStepComponent implements OnInit {

  @Input() title: string;
  status: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
