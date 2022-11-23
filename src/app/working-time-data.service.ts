import {Injectable, Output} from '@angular/core';
import {IworkingTimeDetail} from "./working-time-detail/IworkingTimeDetail";
import {IselectList} from "./working-time-form/IselectList";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {IworkingTimeSum} from "./working-time-sum/iworkingTimeSum";
import {IworkingTimeForm} from "./working-time-form/IworkingTimeForm";

@Injectable({
  providedIn: 'root'
})
export class WorkingTimeDataService {


  //ToDo: API calls for data

  firstDay:Date = new Date("2022-04-28");
  secondDay:Date = new Date("2022-04-29");

  private _categories = [{id:0,name:'Entwurf'}, {id:1,name:'Ausschreibung'}, {id:2,name:'Kommunikation'}];
  private _projects = [{id:0,name:'Standard'}, {id:1,name:'Enercon-HMI-2019'}, {id:2,name:'Hella-Automechanica-2019'},{id:3,name:'StBi-Showroom-2019'}];
  private workingTimes1: IworkingTimeDetail[] = [
      {
        id: 1,
        date: this.firstDay,
        timeEntry: 1,
        categoryName : this._categories[0].name,
        projectName: this._projects[0].name,
        comment: ''
      },

    {
      id: 1,
      date: this.secondDay,
      timeEntry: 1,
      categoryName : this._categories[0].name,
      projectName: this._projects[0].name,
      comment: ''
    }];


//       {
//         id: 2,
//         date: this.firstDay,
//         timeEntry: 2,
//         categoryName : this._categories[1].name,
//         projectName: this._projects[0].name,
//         comment: ''
//       },
//       {
//         id: 3,
//         date: this.firstDay,
//         timeEntry: 3,
//         categoryName : this._categories[0].name,
//         projectName: this._projects[1].name,
//         comment: ''
//       }
//     ]
      private workingTimes2: IworkingTimeDetail[] =
[
    {
        id: 4,
        date: this.secondDay,
        timeEntry: 4,
        categoryName : this._categories[2].name,
        projectName: this._projects[2].name,
        comment: ''
      },
      {
        id: 5,
        date: this.secondDay,
        timeEntry: 5,
        categoryName : this._categories[1].name,
        projectName: this._projects[1].name,
        comment: ''
      },
    ];


  private _newTimeEntry: IworkingTimeForm = {
    id: 0,
    date: new Date(),
    timeEntry: 0,
    projectId: 0,
    categoryId: 0,
    comment: ''
  }

  constructor(private http:HttpClient) { }

  get projects():IselectList[] {
    return this._projects;
  }

  get categories(): IselectList[] {
    return this._categories;
  }

  get newTimeEntry(): IworkingTimeForm {
    return this._newTimeEntry;
  }

  set newTimeEntry(value: IworkingTimeForm) {
    this._newTimeEntry = value;
  }



  getWorkingTimes(selectedDate: Date):Observable<IworkingTimeDetail[]>{
    if( (new Date(selectedDate)).getDate() == 28){
      console.log('working times 1 ' + (new Date(selectedDate)).getDate());
      return of(this.workingTimes1);
    }
    else{
      console.log('working times 2 ' + (new Date(selectedDate)).getDate());
      return of(this.workingTimes2);
    }
    console.log('Call getWorkingTimes with date: ' + selectedDate);

    // let queryParams = new HttpParams();
    // queryParams = queryParams.append("selectedDate",selectedDate)
    // return  this.http.get<IworkingTimeDetail[]>('https://localhost:7166/WorkingTime', {params: queryParams});

  }

  getWorkingTimeSum():Observable<IworkingTimeSum[]>{
    return  this.http.get<IworkingTimeSum[]>('https://localhost:7166/WorkingTimeSum');
  }

  getCurrentDate():Date {
    return new Date('2022-04-28');
  }
}
