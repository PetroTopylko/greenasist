import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SolarComponent } from './solar/solar.component';

const routes: Routes = [
  { path: 'solar', component: SolarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
