import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { UserData, UserService } from 'src/app/services/user-service/user.service';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-admin-main',
  templateUrl: './admin-main.component.html',
  styleUrls: ['./admin-main.component.scss']
})
export class AdminMainComponent implements OnInit {

  dataSource: UserData = null;
  postSource = null;
  displayedColumns: string[] = ['nickname', 'role'];
  displayedColumnsPosts: string[] = ['title', 'category', 'isRecipieAccepted'];

  constructor(private adminService: AdminService, 
              private router: Router,
              private userService: UserService, 
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.initDataSource();
  }

  initDataSource() {
    this.userService.findAll(1,10).pipe(
      map((userData: UserData) => this.dataSource = userData)
    ).subscribe();
    this.adminService.paginatePostsForModeration(1,10).pipe(
      map((postData) => this.postSource = postData)
    ).subscribe();
  }

  navigateTo(value) {
    this.router.navigate(['../admin/', value]);
  }


}
