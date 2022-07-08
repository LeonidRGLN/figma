import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from '././not-found/not-found.component';
import { BookComponent } from '././book/book.component'
import { bookRoutes } from './book/book-routing.module';



const appRoutes: Routes = [
  /* {path:'home', component: BookComponent}, */
  /* {path: '', redirectTo:'/home', pathMatch: 'full'}, */
  {path:'**', component: NotFoundComponent },
  {path:'home', children: bookRoutes}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
