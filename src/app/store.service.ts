import { Injectable } from '@angular/core';
import { StudentsubmitComponent } from './studentsubmit/studentsubmit.component';
import { StudentinputComponent } from './studentinput/studentinput.component';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
    detail: any=[];
  // private newdetails = new Subject ();
  constructor() { 
    // this.detail = this.newdetails.asObservable();
    // console.log("kjsksahlksaflsa",this.newdetails)
  }
//  detail(view){
//    this.newdetails.next(view);
//    console.log("ahfiasufdosaifoais",view);
//  }
}

