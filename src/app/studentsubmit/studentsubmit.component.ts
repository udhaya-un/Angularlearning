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

  // @ViewChild(MatSort) sort: MatSort;
  public view:any;
  constructor(private connect:StoreService) { 
    
  }
  public views: view[] = [];
  DataSource = new MatTableDataSource(this.views);
  ngOnInit(  ) {
    this.view=this.connect.detail;
    this.views.push(this.view);
    localStorage.viewdata=JSON.stringify(this.views)
    console.log("asdjksdsajdh",DataSource);
    console.log("kuasfiasgfjcbxj",this.views);
  }
}
interface view{
  FirstName : string;
  LastName : string;
  mailid : string;
  Password : string;
}
