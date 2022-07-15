import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BookComponent} from './book.component'
import { SampleComponent } from './sample/sample.component';
import { Sample2Component } from './sample2/sample2.component';
import { Sample3Component } from './sample3/sample3.component';
import { Sample4Component } from './sample4/sample4.component';
import { Sample5Component } from './sample5/sample5.component';
import { Sample6Component } from './sample6/sample6.component';
import { Sample7Component } from './sample7/sample7.component';
import { Sample8Component } from './sample8/sample8.component';
import { BookRoutingModule } from './book-routing.module';
import { TableSortingExample } from './table/table.component';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import { PaginationComponent } from './pagination/pagination.component';
/* import { TableHelperComponent } from './table-helper/table-helper.component';
 */
import { MatIconModule } from "@angular/material/icon";



@NgModule({
  declarations: [
    BookComponent,
    SampleComponent,
    Sample2Component,
    Sample3Component,
    Sample4Component,
    Sample5Component,
    Sample6Component,
    Sample7Component,
    Sample8Component,
    TableSortingExample,
    PaginationComponent
    
  ],
  imports: [
    BrowserModule,
    BookRoutingModule,
    MatSortModule,
    MatTableModule,
    MatIconModule
  ],
  exports:[],
  providers: [],
  bootstrap: [],

})
export class BookModule { }