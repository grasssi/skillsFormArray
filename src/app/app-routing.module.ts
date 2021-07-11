import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddskillsComponent } from './addskills/addskills.component';

const routes: Routes = [
  {
    path: 'addSkills',
    component:AddskillsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
