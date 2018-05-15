import { NgModule } from '@angular/core';
import {RouterModule, Routes, Router} from '@angular/router';
import { CommonModule } from '@angular/common';
import {StudentsubmitComponent} from './studentsubmit/studentsubmit.component';

const routes: Routes = [
  {path:"", redirectTo:"",pathMatch:"full"},
  {
    path:'Submit',
    component:StudentsubmitComponent
  }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
