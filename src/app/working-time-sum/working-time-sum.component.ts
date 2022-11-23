import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DatePipe} from '@angular/common';
import {IworkingTimeSum} from "./iworkingTimeSum";
import {WorkingTimeDataService} from "../working-time-data.service";
import {WorkingTimeDataSource} from "../WorkingTimeDataSource";

@Component({
  selector: 'app-working-time-sum',
  templateUrl: './working-time-sum.component.html',
  styleUrls: ['./working-time-sum.component.css']
})
export class WorkingTimeSumComponent implements OnInit {

  private _workingTimeOverview: IworkingTimeSum[] = [];

  constructor(private _workingTimeDataService: WorkingTimeDataService, private _datasource :WorkingTimeDataSource) { }

  ngOnInit(): void {
    this._workingTimeDataService.getWorkingTimeSum()
      .subscribe
      (
        data => {
          this._workingTimeOverview = data;
        }
      )
  }

  columnsToDisplay = ['date', 'time'];

  @Output() selectedDateEvent  = new EventEmitter<Date>();

  get workingTimeOverview(): IworkingTimeSum[] {
    return this._workingTimeOverview;
  }


  showDetails(workingTimeSum: IworkingTimeSum) {
    this._datasource.loadWorkingTimes(workingTimeSum.date)
  }
}
