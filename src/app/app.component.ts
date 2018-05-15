import { Component,ViewChild,Inject } from '@angular/core';
import {Router} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { StoreService } from './store.service';
import {MatTableDataSource, MatSort} from '@angular/material';
import {LOCAL_STORAGE,WebStorageService} from 'angular-webstorage-service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';
  // public data: any=[];
  // public studentdetails={FirstName:"",LastName:"",mailid:"",Password:"",DOB:"",Gender:""}
  constructor( private router:Router ){
  }
Onclick(){
  // this.connect.detail=this.studentdetails;
  this.router.navigateByUrl('Signin')
  // console.log("=============",this.studentdetails);
}
Onclick1(){
  this.router.navigateByUrl('View')
}
}
