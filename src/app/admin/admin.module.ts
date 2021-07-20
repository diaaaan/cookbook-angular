import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { OwerviewComponent } from './components/owerview/owerview.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AdminRecipieComponent } from './components/admin-recipie/admin-recipie.component';
import { AdminUsersComponent } from './components/admin-users/admin-users.component';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AdminMainComponent } from './components/admin-main/admin-main.component';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { AdminService } from './services/admin.service';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatMenuModule} from '@angular/material/menu';
import {MatChipsModule} from '@angular/material/chips';
import { AdminRecipieDetailsComponent } from './components/admin-recipie-details/admin-recipie-details.component';
import { AdminUsersDetailsComponent } from './components/admin-users-details/admin-users-details.component';
import {MatExpansionModule} from '@angular/material/expansion';





@NgModule({
  declarations: [OwerviewComponent, AdminRecipieComponent, AdminUsersComponent, AdminMainComponent, AdminRecipieDetailsComponent, AdminUsersDetailsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    //Angular Material Modules
    MatSidenavModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    MatCardModule,
    MatChipsModule,
    MatExpansionModule,
    MatTableModule,
    MatFormFieldModule,
    MatButtonModule,
    MatPaginatorModule,
    MatMenuModule
  ],
  providers: [
    AdminService
  ]
})
export class AdminModule { }
