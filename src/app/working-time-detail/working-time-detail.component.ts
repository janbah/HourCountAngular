import {Component, Input, OnInit} from '@angular/core';
import {IworkingTime} from "./IworkingTime";
import {WorkingTimeDataService} from "../working-time-data.service";

@Component({
  selector: 'app-working-time-detail',
  templateUrl: './working-time-detail.component.html',
  styleUrls: ['./working-time-detail.component.css']
})
export class WorkingTimeDetailComponent implements OnInit {

  //ToDo: move to Service
  workingTimes: IworkingTime[] = [
    {id:1, date: new Date("2022-4-25"), time: 2,project:'Enercon-HMI-2019', _category: 'Entwurf', comment:''},
    {id:2, date: new Date("2022-4-25"), time: 2,project:'Hella-Automechanica-2019', _category: 'Ausschreibung', comment:'dies'},
    {id:3, date: new Date("2022-4-26"), time: 1,project:'Hella-Automechanica-2019', _category: 'Kommunikation', comment:''},
    {id:4, date: new Date("2022-4-26"), time: 1.5,project:'StBi-Showroom-2019', _category: 'Entwurf', comment:'das'},
    {id:5, date: new Date("2022-4-26"), time: 2.5,project:'Hella-Automechanica-2019', _category: 'Ausschreibung', comment:''},
    {id:6, date: new Date("2022-4-27"), time: 3,project:'Hella-Automechanica-2019', _category: 'Kommunikation', comment:'details'},
    {id:7, date: new Date("2022-4-27"), time: 6,project:'StBi-Showroom-2019', _category: 'Ausschreibung', comment:''},
    {id:8, date: new Date("2022-4-28"), time: 4,project:'Hella-Automechanica-2019', _category: 'Entwurf', comment:'details'},
    {id:9, date: new Date("2022-4-28"), time: 1,project:'StBi-Showroom-2019', _category: 'Ausschreibung', comment:'hiho'},
    {id:10, date: new Date("2022-4-28"), time: 1,project:'Enercon-HMI-2019', _category: 'Kommunikation', comment:'details'},
    {id:11, date: new Date("2022-4-28"), time: 1,project:'Hella-Automechanica-2019', _category: 'Ausschreibung', comment:''},
    {id:12, date: new Date("2022-4-29"), time: 4,project:'StBi-Showroom-2019', _category: 'Kommunikation', comment:'details'},
    {id:13, date: new Date("2022-4-29"), time: 8,project:'Enercon-HMI-2019', _category: 'Ausschreibung', comment:''},
  ]

  @Input() selectedDate: any = new Date();

  columnsToDisplay = ['date', 'time','project', 'category', 'comment','edit', 'delete'];

  constructor(private workingTimeData: WorkingTimeDataService) {

  }

  ngOnInit(): void { }

  getWorkingTimes() {
    return this.workingTimes.filter((w) => w.date.getDay() == this.selectedDate.getDay());
  }

  editElement(workingTimeId: number) {
    const index = this.workingTimes.findIndex((w)=>w.id===workingTimeId);
    this.workingTimeData.newTimeEntry = this.workingTimes[index];
  }

  deleteElement(workingTimeId: number) {
    //ToDo: Api-Call
    const index = this.workingTimes.findIndex((w)=>w.id===workingTimeId);
    this.workingTimes.splice(index,1);
  }

}
