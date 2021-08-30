import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectivesComponent } from './directives/directives.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PipesComponent } from './pipes/pipes.component';
import { ZomatoComponent } from './zomato/zomato.component';

const routes: Routes = [
  {path:'interpolation', component:InterpolationComponent},
  {path:'pipes', component:PipesComponent},
  {path:'directives', component:DirectivesComponent},
  {path:'zomato', component:ZomatoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
