import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/services/authentification-service/authentication.service';
import { UserData, UserService } from 'src/app/services/user-service/user.service';

@Component({
  selector: 'app-owerview',
  templateUrl: './owerview.component.html',
  styleUrls: ['./owerview.component.scss']
})
export class OwerviewComponent implements OnInit {



  isExpanded: boolean = false;

  currentUser$ = this.authService.getCurrentUserObserv();

  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {
  }

 
  

}
