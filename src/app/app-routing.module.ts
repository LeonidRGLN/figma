import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from '././not-found/not-found.component';
import { AuthorizationComponent } from './authorization/authorization.component';

import { BookComponent } from './book/book.component';
import { ChartsComponent } from './charts/charts.component';
import {RegistrationComponent} from './registration/registration.component'
import {bookRoutes} from "./book/book-routing.module";

const appRoutes: Routes = [

  {path: '', component: BookComponent, children:bookRoutes},
  {path: 'chart', component:ChartsComponent },
  {path: 'registration', component:  RegistrationComponent},
  {path: 'authorization', component: AuthorizationComponent},
  {path:'**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
