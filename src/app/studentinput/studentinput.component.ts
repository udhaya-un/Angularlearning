import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { StoreService } from '../store.service';
import {MatTableDataSource, MatSort} from '@angular/material';

@Component({
  selector: 'app-studentinput',
  templateUrl: './studentinput.component.html',
  styleUrls: ['./studentinput.component.css']
})
export class StudentinputComponent implements OnInit {

  public data: any=[];
  public studentdetails={FirstName:"",LastName:"",mailid:"",Password:""}
  constructor(private myservice:StoreService, private router:Router ){
  }

  ngOnInit() {
  }
  Onclick(){
    console.log("============= com AAAA - > ",this.studentdetails);
    this.myservice.detail.push(this.studentdetails)

  this.studentdetails = {FirstName:"",LastName:"",mailid:"",Password:""}
   
  }

  movetocom2(){
    this.router.navigateByUrl('View')
  }
  
}
