import { APP_INITIALIZER, NgModule } from '@angular/core';
// import { CommonModule  } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './components/home/home.component';
import { MarkdownModule } from 'ngx-markdown';
import { UsersComponent } from './components/user/users/users.component';
import { UserProfileComponent } from './components/user/user-profile/user-profile.component';
import { UpdateUserProfileComponent } from './components/user/update-user-profile/update-user-profile.component';
import { AllBlogEntriesComponent } from './components/blog/all-blog-entries/all-blog-entries.component';
import { CreateBlogEntryComponent } from './components/blog/create-blog-entry/create-blog-entry.component';
import { ViewBlogEntryComponent } from './components/blog/view-blog-entry/view-blog-entry.component';
import { PersonalProfileComponent } from './components/user/personal-profile/personal-profile.component';
import { ConfigService } from './config.service';
import { UpdateBlogComponent } from './components/blog/update-blog/update-blog.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SnackbarComponent } from './components/ui/snackbar/snackbar.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DeleleBlogComponent } from './components/ui/delele-blog/delele-blog.component';
import { StepDirective } from './step.directive';
import { RecipeStepComponent } from './components/ui/recipe-step/recipe-step.component';
import { MatStepperModule } from '@angular/material/stepper';
import { WelcomeMessageComponent } from './components/ui/welcome-message/welcome-message.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { IngredientsComponent } from './components/ui/ingredients/ingredients.component';
import { UserBlogsComponent } from './components/user/user-blogs/user-blogs.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';
import { DeleteBlogAdminComponent } from './components/ui/delete-blog-admin/delete-blog-admin.component';
import { FullViewImageComponent } from './components/ui/full-view-image/full-view-image.component';
import { MatTabsModule } from '@angular/material/tabs';
import { UserFavoritesComponent } from './components/user/user-favorites/user-favorites.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { UserDraftsComponent } from './components/user/user-drafts/user-drafts.component';
import { DraftBlogAdminComponent } from './components/ui/draft-blog-admin/draft-blog-admin.component';

export function initConfig(config: ConfigService) {
  return () => config.loadConfig();
}


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UsersComponent,
    UserProfileComponent,
    UpdateUserProfileComponent,
    HomeComponent,
    AllBlogEntriesComponent,
    CreateBlogEntryComponent,
    ViewBlogEntryComponent,
    PersonalProfileComponent,
    UpdateBlogComponent,
    SnackbarComponent,
    DeleleBlogComponent,
    StepDirective,
    RecipeStepComponent,
    WelcomeMessageComponent,
    IngredientsComponent,
    UserBlogsComponent,
    DeleteBlogAdminComponent,
    FullViewImageComponent,
    UserFavoritesComponent,
    UserDraftsComponent,
    DraftBlogAdminComponent,
  ],
  imports: [
    CommonModule,
    // BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatChipsModule,
    MatProgressBarModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatIconModule,
    MatSidenavModule,
    MatDialogModule,
    MatTabsModule,
    MatTooltipModule,
    MatStepperModule,
    MarkdownModule.forRoot()
  ],
  providers: [
    ConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: initConfig,
      multi: true,
      deps: [ConfigService]
    },
    JwtHelperService,
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
