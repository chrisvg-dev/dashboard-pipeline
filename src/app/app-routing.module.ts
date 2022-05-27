import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapsComponent } from './data/maps/maps.component';
import { MainComponent } from './views/main/main.component';

const routes: Routes = [
  {
    path: 'data', component: MapsComponent
  }, 
  {
    path: 'home', component: MainComponent
  }, 
  {
    path: '**', redirectTo: 'data', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
