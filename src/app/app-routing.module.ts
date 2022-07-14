import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from '././not-found/not-found.component';
import { ChartsComponent } from './charts/charts.component';

const appRoutes: Routes = [
  {path: '', redirectTo:'/home', pathMatch: 'full'},
  {path: 'chart', component:ChartsComponent },
  {path:'**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
