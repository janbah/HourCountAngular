import {Component, Injectable, Input, OnInit} from '@angular/core';
import {IworkingTimeDetail} from "./IworkingTimeDetail";
import {WorkingTimeDataService} from "../working-time-data.service";
import {Observable, of} from "rxjs";
import {WorkingTimeDataSource} from "../WorkingTimeDataSource";

@Component({
  selector: 'app-working-time-detail',
  templateUrl: './working-time-detail.component.html',
  styleUrls: ['./working-time-detail.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class WorkingTimeDetailComponent implements OnInit {

  @Input() selectedDate: any;

  columnsToDisplay = ['date', 'time','project', 'category', 'comment','edit', 'delete'];
  datasource : WorkingTimeDataSource;

  constructor(private _workingTimeDataService: WorkingTimeDataService, private  _datasource : WorkingTimeDataSource) {
    this.datasource = _datasource;
  }

  ngOnInit(): void {
    this.datasource.loadCurrentWorkingTimes();
  }


  editElement(workingTimeId: number) {

    //const index = this._workingTimes.findIndex((w)=>w.id===workingTimeId);
    //this._workingTimeDataService.newTimeEntry = this._workingTimes[index];
  }

  deleteElement(workingTimeId: number) {
    //ToDo: Api-Call
    //const index = this._workingTimes.findIndex((w)=>w.id===workingTimeId);
    //this._workingTimes.splice(index,1);
  }
}
