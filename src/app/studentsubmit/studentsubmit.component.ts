import { Component, OnInit, ViewChild } from '@angular/core';
import { StoreService } from '../store.service';
import {MatTableDataSource, MatSort} from '@angular/material';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'app-studentsubmit',
  templateUrl: './studentsubmit.component.html',
  styleUrls: ['./studentsubmit.component.css']
})
export class StudentsubmitComponent implements OnInit {
  displayedColumns = ['LastName','FirstName','Mail','Password']
  views : any=[];
  // @ViewChild(MatSort) sort: MatSort;
  constructor(private myservice:StoreService) { 
  }
  DataSource = new MatTableDataSource(this.myservice.detail);
  ngOnInit(  ) {
    console.log("asdjksdsajdh",DataSource);
    console.log("Com BBBB-------- > ",this.myservice.detail);
    this.views =this.myservice.detail;
  }
}
interface view{
  FirstName : string;
  LastName : string;
  mailid : string;
  Password : string;
}
