//import { BrowserModule } from '@angular/platform-browser';
//import { NgModule } from '@angular/core';
//import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//import { AppComponent } from './app.component';
//import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { HomeComponent } from './home/home.component';
import { PretupsNavComponent } from './pretups-nav/pretups-nav.component'
//import { PasswordPatternDirective } from './directives/password-pattern.directive';
//import { MatchPasswordDirective } from './directives/match-password.directive';
//import { ValidateUserNameDirective } from './directives/validate-user-name.directive';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ReactiveFormComponent,
    HomeComponent,
    PretupsNavComponent,
    //PasswordPatternDirective,
    //MatchPasswordDirective,
    //ValidateUserNameDirective
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    RouterModule.forRoot([
    { path: '', component: HomeComponent },
    { path: 'reactive-form', component: ReactiveFormComponent },
    { path: 'pretups-nav', component: PretupsNavComponent},
], { relativeLinkResolution: 'legacy' }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
