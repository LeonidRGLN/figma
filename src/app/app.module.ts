import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookModule } from './book/book.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppServise } from './app.servise'
import { RegistrationComponent } from './registration/registration.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { FormsModule} from "@angular/forms";
import {ReactiveFormsModule} from "@angular/forms";
import { ChartsComponent } from './charts/charts.component';
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../environments/environment";
import {FirebaseService} from "./services/firebase.service";




@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    RegistrationComponent,
    AuthorizationComponent,
    ChartsComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BookModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCTzeWev9FRViESc1K4PgLpM_7MZhawgJs",
      authDomain: "project-d0132.firebaseapp.com",
      projectId: "project-d0132",
      storageBucket: "project-d0132.appspot.com",
      messagingSenderId: "594175916181",
      appId: "1:594175916181:web:71ffffe6d9a958d03ec39c",
      measurementId: "G-7XYCPXQBCZ"}),
    AppRoutingModule,



  ],
  exports:[],
  providers: [AppServise,FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
