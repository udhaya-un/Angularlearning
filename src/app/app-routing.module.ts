import { NgModule } from '@angular/core';
import {RouterModule, Routes, Router} from '@angular/router';
import { CommonModule } from '@angular/common';
import {StudentsubmitComponent} from './studentsubmit/studentsubmit.component';
import {StudentinputComponent} from './studentinput/studentinput.component';
const routes: Routes = [
  // {path:"", redirectTo:"",pathMatch:"full"},
  {
    path:'Signin',
    component:StudentinputComponent
  },
  {
    path:'View',
    component:StudentsubmitComponent
  }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
