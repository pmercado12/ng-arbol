import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {CardDetailComponent} from './card-detail/card-detail.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'detail', component: CardDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
