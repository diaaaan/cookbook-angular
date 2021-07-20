import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-favorites',
  templateUrl: './user-favorites.component.html',
  styleUrls: ['./user-favorites.component.scss']
})
export class UserFavoritesComponent implements OnInit {

  @Input() favEntries;
  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    console.log(this.favEntries);
    
  }

  navigate(id) {
    this.router.navigateByUrl('blogs/' + id);
  }

  navigateToUpdate(id) {
    this.router.navigate(['update-blog/', id]);
  }

  // openDeleteDialog(blog): void {
  //   // this.blogService.isBeDeleted = blogId;
  //   const dialogRef = this.dialog.open(DeleleBlogComponent, {data: {blog}});
  // }



}
