import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { ConfigService } from './config.service';
import { User } from './model/user.interface';
import { AuthenticationService } from './services/authentification-service/authentication.service';
import { UserService } from './services/user-service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'frontend';

  toolbarName = null;

  loggedUser: any = null;

  // user: any;

  // userId$: Observable<string> = this.authService.observeGetUserId();

  // user$: Observable<User> = this.userId$.pipe(
  //   switchMap((userId: string) => this.userService.findOne(userId))
  // )
  
  constructor(private router: Router, 
    private authService: AuthenticationService,
    private userService: UserService,
    private confService: ConfigService
    ) {}

    

  ngOnInit(): void {
      this.loggedUser = this.confService.getConfig();
       
      this.authService.currentUser.subscribe(
        x => {
          this.toolbarName = x;
        }
      )

      console.log(this.toolbarName);
      
      
      
      
    //   .subscribe(x => {
    //   this.loggedUser = x;
    //   this.toolbarName = x.nickname;
    // })
     
    // this.userService.setNickname()
    // this.userService._nickname.subscribe(x => {
    //   this.loggedUser = x;
    //   this.toolbarName = x.nickname;
    // })
    // const userId = this.authService.getUserId();
    // this.userService.findOne(userId).subscribe(user => {
    //   this.user = user;
    //   // this.ngOnInit()
    // })
    

  }

  navigateTo(value) {
    this.router.navigate(['../', value]);
  }

  logout() {
    this.authService.logout();
    document.location.reload();
  }
}
