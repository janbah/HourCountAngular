import {Component, Output} from '@angular/core';
import {WorkingTimeDataService} from "./working-time-data.service";
import {WorkingTimeDetailComponent} from "./working-time-detail/working-time-detail.component";
import {WorkingTimeDataSource} from "./WorkingTimeDataSource";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HourCountAngular';



  constructor() {
  }



}
