import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleComponent } from './book/sample/sample.component';
import { Sample2Component } from './book/sample2/sample2.component';
import { Sample3Component } from './book/sample3/sample3.component';
import { Sample4Component } from './book/sample4/sample4.component';
import { Sample5Component } from './book/sample5/sample5.component';
import { Sample6Component } from './book/sample6/sample6.component';
import { PaginationComponent } from './book/pagination/pagination.component';
import { Sample7Component } from './book/sample7/sample7.component';
import { Sample8Component } from './book/sample8/sample8.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BookComponent } from './book/book.component';
/* import { BookModule } from './book/book.module' */

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    Sample2Component,
    Sample3Component,
    Sample4Component,
    Sample5Component,
    Sample6Component,
    PaginationComponent,
    Sample7Component,
    Sample8Component,
    NotFoundComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
