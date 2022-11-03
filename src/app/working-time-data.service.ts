import {Injectable, Output} from '@angular/core';
import {IworkingTime} from "./working-time-detail/IworkingTime";
import {IselectList} from "./working-time-form/IselectList";

@Injectable({
  providedIn: 'root'
})
export class WorkingTimeDataService {

  //ToDo: API calls for data

  private _categories = [{id:0,name:'Entwurf'}, {id:1,name:'Ausschreibung'}, {id:2,name:'Kommunikation'}];
  private _projects = [{id:0,name:'Standard'}, {id:1,name:'Enercon-HMI-2019'}, {id:2,name:'Hella-Automechanica-2019'},{id:3,name:'StBi-Showroom-2019'}];
  private _newTimeEntry: IworkingTime = {
    id: 0,
    date: new Date(),
    time: 0,
    project: this.projects[0],
    _category: this.categories[0],
    comment: ''
  }

  constructor() { }

  get projects():IselectList[] {
    return this._projects;
  }

  get categories(): IselectList[] {
    return this._categories;
  }

  get newTimeEntry(): IworkingTime {
    return this._newTimeEntry;
  }

  set newTimeEntry(value: IworkingTime) {
    this._newTimeEntry = value;
  }

}
