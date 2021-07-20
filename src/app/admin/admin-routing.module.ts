import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminMainComponent } from './components/admin-main/admin-main.component';
import { AdminRecipieDetailsComponent } from './components/admin-recipie-details/admin-recipie-details.component';
import { AdminRecipieComponent } from './components/admin-recipie/admin-recipie.component';
import { AdminUsersDetailsComponent } from './components/admin-users-details/admin-users-details.component';
import { AdminUsersComponent } from './components/admin-users/admin-users.component';
import { OwerviewComponent } from './components/owerview/owerview.component';


const routes: Routes = [
  {
    path: '',
    // pathMatch: 'full',
    component: OwerviewComponent,
    children: [
      {
        path: 'admin-main',
        component: AdminMainComponent
      },
      {
        path: 'moderation',
        children: [
          {
            path: '',
            component: AdminRecipieComponent
          },
          {
            path: ':id',
            component: AdminRecipieDetailsComponent
          }
        ]
      },
      {
        path: 'users',
        children: [
          {
            path: '',
            component:AdminUsersComponent
          },
          {
            path: ':id',
            component: AdminUsersDetailsComponent
          }
        ]
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'admin-main',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
