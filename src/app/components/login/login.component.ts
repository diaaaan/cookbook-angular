import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { ConfigService } from 'src/app/config.service';
import { AuthenticationService } from 'src/app/services/authentification-service/authentication.service';
import { UserService } from 'src/app/services/user-service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  loginForm: FormGroup;

  constructor(private authService: AuthenticationService,
    private router: Router,
    private userService: UserService,
    private confService: ConfigService
  ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(3)
      ])
    })
  }

  onSubmit() {
    if(this.loginForm.invalid) {
      return;
    }
    this.authService.login(this.loginForm.value).pipe(
      map(a => this.confService.getConfig()),
      map(b => this.router.navigate(['profile']))
      )
      .subscribe();
    // this.userService.setNickname();
  }

  navigateTo(value) {
    this.router.navigate(['../', value]);
  }

  // login() {
  //   this.authService.login('admin1@email.com', 'admin1').subscribe(data => console.log('SUCCESS'));
  // }

}
