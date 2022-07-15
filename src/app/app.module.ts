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
import { PaginationComponent } from './book/pagination/pagination.component';

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
    AppRoutingModule,
    

    
  ],
  exports:[],
  providers: [AppServise],
  bootstrap: [AppComponent]
})
export class AppModule { }
