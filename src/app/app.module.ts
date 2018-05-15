import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { StudentsubmitComponent } from './studentsubmit/studentsubmit.component';
import { FormsModule } from '@angular/forms';
import {NoopAnimationsModule} from '@angular/platform-browser/animations'
import { RouterModule } from '@angular/router';
import {StorageServiceModule} from 'angular-webstorage-service'

@NgModule({
  declarations: [
    AppComponent,
    StudentsubmitComponent,
  ],
  imports: [
    BrowserModule,
    StorageServiceModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    RouterModule,
    MatCardModule,
    MatTableModule,
    MatRadioModule,
    MatInputModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
