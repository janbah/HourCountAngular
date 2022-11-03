import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DatePipe} from '@angular/common';
import {IworkingTimeSumItem} from "./iworkingTimeSumItem";

@Component({
  selector: 'app-working-time-sum',
  templateUrl: './working-time-sum.component.html',
  styleUrls: ['./working-time-sum.component.css']
})
export class WorkingTimeSumComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  columnsToDisplay = ['date', 'time'];

  @Output() selectedDateEvent  = new EventEmitter<Date>();

  //ToDo: move to service
  workingTimeOverviewItems: IworkingTimeSumItem[] = [
    {date: new Date("2022-4-25"), time: 4},
    {date: new Date("2022-4-26"), time: 5},
    {date: new Date("2022-4-27"), time: 6},
    {date: new Date("2022-4-28"), time: 7},
    {date: new Date("2022-4-29"), time: 8},
  ];

  showDetails(workingTimeSum: IworkingTimeSumItem) {
    this.selectedDateEvent.emit(workingTimeSum.date)
    console.log(workingTimeSum.date)
  }
}
