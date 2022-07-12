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
import { RegistrationComponent } from './registration/registration.component'
/* import { TableExpandableRowsExample } from './table/table.component' */
import {AuthorizationComponent} from './authorization/authorization.component'

export const bookRoutes: Routes = [
  {path:'home', component: BookComponent},
  {path:'home/sample', component: SampleComponent},
  {path:'home/sample2', component: Sample2Component},
  {path:'home/sample3', component: Sample3Component},
  {path:'home/sample4', component: Sample4Component},
  {path:'home/sample5', component: Sample5Component},
  {path:'home/sample6', component: Sample6Component},
  {path:'home/sample7', component: Sample7Component},
  {path:'home/sample8', component: Sample8Component},
  {path:'home/table', component: TableSortingExample},
  {path: 'registration', component:  RegistrationComponent},
  {path: 'authorization', component: AuthorizationComponent}
  /* {path:'home/table', component: TableExpandableRowsExample} */
];

@NgModule({
  imports: [RouterModule.forChild(bookRoutes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
