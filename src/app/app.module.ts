import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatToolbarModule} from "@angular/material/toolbar";
import { WorkingTimeSumComponent } from './working-time-sum/working-time-sum.component';
import {MatTableModule} from "@angular/material/table";
import { WorkingTimeDetailComponent } from './working-time-detail/working-time-detail.component';
import {MatCardModule} from "@angular/material/card";
import { WorkingTimeFormComponent } from './working-time-form/working-time-form.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {MatNativeDateModule} from "@angular/material/core";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {IworkingTime} from "./working-time-detail/IworkingTime";
import {WorkingTimeDataSource} from "./WorkingTimeDataSource";
import {WorkingTimeDataService} from "./working-time-data.service";

@NgModule({
  declarations: [
    AppComponent,
    WorkingTimeSumComponent,
    WorkingTimeDetailComponent,
    WorkingTimeFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatGridListModule,
    MatToolbarModule,
    MatTableModule,
    MatCardModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatSelectModule,
    MatInputModule,
    MatNativeDateModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
