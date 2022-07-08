import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '././not-found/not-found.component';
import { BookComponent } from '././book/book.component'
import { SampleComponent } from './book/sample/sample.component'
import { Sample2Component } from './book/sample2/sample2.component'
import { Sample3Component } from './book/sample3/sample3.component'
import { Sample4Component } from './book/sample4/sample4.component'
import { Sample5Component } from './book/sample5/sample5.component'
import { Sample6Component } from './book/sample6/sample6.component'
import { Sample7Component } from './book/sample7/sample7.component'
import { Sample8Component } from './book/sample8/sample8.component'
import { BookModule } from './book/book.module'

const routes: Routes = [
  {path:'', component: BookComponent}, 
  {path:'sample', component: SampleComponent},
  {path:'sample2', component: Sample2Component},
  {path:'sample3', component: Sample3Component},
  {path:'sample4', component: Sample4Component},
  {path:'sample5', component: Sample5Component},
  {path:'sample6', component: Sample6Component},
  {path:'sample7', component: Sample7Component},
  {path:'sample8', component: Sample8Component},
  {path:'**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),BookModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
