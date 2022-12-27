import {CollectionViewer, DataSource} from "@angular/cdk/collections";
import {IworkingTime} from "./working-time-detail/IworkingTime";
import {BehaviorSubject, Observable} from "rxjs";
import {WorkingTimeDataService} from "./working-time-data.service";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class WorkingTimeDataSource implements DataSource<IworkingTime>{

  private workingTimeSubject = new BehaviorSubject<IworkingTime[]>([]);

  constructor(private workingTimeService : WorkingTimeDataService) {}

  connect(collectionViewer: CollectionViewer): Observable<IworkingTime[]> {
    return this.workingTimeSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.workingTimeSubject.complete();
  }

  loadWorkingTimes(date: Date ){
    this.workingTimeService.getWorkingTimes(date).subscribe(workingTimes => this.workingTimeSubject.next(workingTimes));
    //console.log('load wt: ' + this.workingTimeSubject.getValue()[0].date)
  }

  loadCurrentWorkingTimes(){
    this.workingTimeService.getCurrentWorkingTimes().subscribe(wt=>this.workingTimeSubject.next(wt));
  }

}
