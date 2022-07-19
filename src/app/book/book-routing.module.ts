import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SampleComponent } from './sample/sample.component'
import { Sample2Component } from './sample2/sample2.component'
import { Sample3Component } from './sample3/sample3.component'
import { Sample4Component } from './sample4/sample4.component'
import { Sample5Component } from './sample5/sample5.component'
import { Sample6Component } from './sample6/sample6.component'
import { Sample7Component } from './sample7/sample7.component'
import { Sample8Component } from './sample8/sample8.component'
import { BookComponent } from './book.component';
import { TableSortingExample } from './table/table.component';



export const bookRoutes: Routes = [
  {path:'sample1', component: SampleComponent},
  {path:'sample2', component: Sample2Component},
  {path:'sample3', component: Sample3Component},
  {path:'sample', component: Sample4Component},
  {path:'sample4', component: Sample5Component},
  {path:'sample5', component: Sample6Component},
  {path:'sample6', component: Sample7Component},
  {path:'sample7', component: Sample8Component},
  {path:'table', component: TableSortingExample}
];

@NgModule({
  imports: [RouterModule.forChild(bookRoutes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
