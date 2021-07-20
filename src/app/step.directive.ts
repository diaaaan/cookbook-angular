import { Directive, HostListener } from '@angular/core';
import { CreateBlogEntryComponent } from './components/blog/create-blog-entry/create-blog-entry.component';
import { RecipeStepComponent } from './components/ui/recipe-step/recipe-step.component';

@Directive({
  selector: '[appStep]'
})
export class StepDirective {

  constructor(public recipeStep: CreateBlogEntryComponent) { }
  @HostListener('click', ['$event'])
  onClick() {
    console.log('directive');
    
    // this.recipeStep.list.push("new task")
  }

}
