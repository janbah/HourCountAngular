import {Injectable, Output} from '@angular/core';
import {IworkingTime} from "./working-time-detail/IworkingTime";
import {IselectList} from "./working-time-form/IselectList";
import {HttpClient, HttpParams} from "@angular/common/http";
import {async, Observable, of} from "rxjs";
import {IworkingTimeSum} from "./working-time-sum/iworkingTimeSum";
import {IworkingTimeForm} from "./working-time-form/IworkingTimeForm";
import {formatDate} from "@angular/common";

@Injectable({
  providedIn: 'root'
})

export class WorkingTimeDataService {


  private _newTimeEntry: IworkingTimeForm = {

    employeeId: 1,
    date: new Date(),
    timeEntry: 0,
    projectId: 0,
    categoryId: 0,
    comment: ''
  }

  constructor(private http:HttpClient) { }

  get projects():Observable<IselectList[]> {
    return  this.http.get<IselectList[]>('https://localhost:7166/api/projects');
  }

  get categories(): Observable<IselectList[]>{
    return  this.http.get<IselectList[]>('https://localhost:7166/api/categories');
  }

  get newTimeEntry(): IworkingTimeForm {
    return this._newTimeEntry;
  }

  set newTimeEntry(value: IworkingTimeForm) {
    this._newTimeEntry = value;
  }

  getWorkingTimes(selectedDate: Date):Observable<IworkingTime[]>{

    let queryParams = new HttpParams()
    console.log('Call getWorkingTimes with date: ' + selectedDate)

    queryParams = queryParams.append("employeeId",1);
    queryParams = queryParams.append("selectedDate",''+selectedDate);

    return  this.http.get<IworkingTime[]>('https://localhost:7166/api/working-times', {params: queryParams});
  }

  getCurrentWorkingTimes():Observable<IworkingTime[]>{
    return this.http.get<IworkingTime[]>('https://localhost:7166/api/working-times');
  }

  getWorkingTimeSum():Observable<IworkingTimeSum[]>{
    let queryParams = new HttpParams()
    queryParams = queryParams.append("employeeId",1);
    return  this.http.get<IworkingTimeSum[]>('https://localhost:7166/api/working-time-sums', {params: queryParams});
  }

  insertWorkingTime(workingTime:IworkingTimeForm){

    console.log("insert workingTimes..." + workingTime.date);

    let result = this.http.post('https://localhost:7166/api/working-times',workingTime);

    result.subscribe(()=>{
      console.log('posted...');
    })

  }
}
