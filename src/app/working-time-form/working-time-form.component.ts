import {Component, OnInit, Output} from '@angular/core';
import {IworkingTime} from "../working-time-detail/IworkingTime";
import {WorkingTimeDataService} from "../working-time-data.service"
import {IselectList} from "./IselectList";
import {FormControl, FormGroup} from "@angular/forms";
import {IworkingTimeForm} from "./IworkingTimeForm";
import {Observable} from "rxjs";


@Component({
  selector: 'app-working-time-form',
  templateUrl: './working-time-form.component.html',
  styleUrls: ['./working-time-form.component.css']
})
export class WorkingTimeFormComponent implements OnInit {

  projects:Observable<IselectList[]>;
  categories:Observable<IselectList[]>;
  newTimeEntry: IworkingTimeForm; //ToDo: set values as default in form

  constructor(private workingTimeData: WorkingTimeDataService ) {
    this.projects = workingTimeData.projects;
    this.categories = workingTimeData.categories;
    this.newTimeEntry = workingTimeData.newTimeEntry
  }

  ngOnInit(): void {
  }

  workingTimeFormControl = new FormGroup({
    dateFormControl:new FormControl(),
    timeFormControl: new FormControl(),
    projectFormControl: new FormControl(),
    categoryFormControl: new FormControl(),
    commentFormControl: new FormControl()
  })

  saveEntry() {
    //Todo: handle difference between new and edited entry
    this.newTimeEntry.date = this.workingTimeFormControl.controls.dateFormControl.value;
    this.newTimeEntry.timeEntry = this.workingTimeFormControl.controls.timeFormControl.value;
    this.newTimeEntry.projectId = this.workingTimeFormControl.controls.projectFormControl.value;
    this.newTimeEntry.categoryId = this.workingTimeFormControl.controls.categoryFormControl.value;
    this.newTimeEntry.comment = this.workingTimeFormControl.controls.commentFormControl.value;



    this.workingTimeData.insertWorkingTime(this.newTimeEntry)



  }
}
