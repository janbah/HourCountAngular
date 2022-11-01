import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatToolbarModule} from "@angular/material/toolbar";
import { WorkingTimeSumComponent } from './working-time-overview/working-time-sum.component';
import {MatTableModule} from "@angular/material/table";
import { WorkingTimeDetailComponent } from './working-time-detail/working-time-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkingTimeSumComponent,
    WorkingTimeDetailComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NoopAnimationsModule,
        MatGridListModule,
        MatToolbarModule,
        MatTableModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
