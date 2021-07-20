import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { AdminService } from 'src/app/admin/services/admin.service';
import { AuthenticationService } from 'src/app/services/authentification-service/authentication.service';

@Component({
  selector: 'app-user-drafts',
  templateUrl: './user-drafts.component.html',
  styleUrls: ['./user-drafts.component.scss']
})
export class UserDraftsComponent implements OnInit {

  
  private userId$: Observable<string> = this.authService.observeGetUserId();

  selected = 'Все рецепты';
  test: string;
  filters = [
    {value: 'Все рецепты'},
    {value: 'На проверке'},
    {value: 'Отклоненные'}
  ];

  @Input() draftEntries;
  constructor(
    private adminService: AdminService,
    private authService: AuthenticationService,
    private router: Router,
    private dialog: MatDialog
  ) { }

  filterDrafts(value) {
    console.log(value);
    
    if (value === 'Все рецепты') {
      this.getAllDrafts()
    }
    if (value === 'На проверке') {
      this.getOnModerationDrafts()
    }
    if (value === 'Отклоненные') {
      this.getRejectedDrafts()
    }
    
  }

  getAllDrafts() {
    this.draftEntries = this.userId$.pipe(
      switchMap((userId) => this.adminService.paginatePostForModerationByAuthorId(userId)),
      tap((a) => console.log(a)
        )
    )
  }

  getOnModerationDrafts() {
    this.test = 'На проверке'

  }

  getRejectedDrafts() {
    this.test = 'Отклоненные'

  }

  ngOnInit(): void {
  }

  navigate(id) {
    this.router.navigateByUrl('blogs/' + id);
  }

}
