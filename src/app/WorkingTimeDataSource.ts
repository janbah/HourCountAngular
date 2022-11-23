import {CollectionViewer, DataSource} from "@angular/cdk/collections";
import {IworkingTimeDetail} from "./working-time-detail/IworkingTimeDetail";
import {BehaviorSubject, Observable} from "rxjs";
import {WorkingTimeDataService} from "./working-time-data.service";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class WorkingTimeDataSource implements DataSource<IworkingTimeDetail>{

  private workingTimeSubject = new BehaviorSubject<IworkingTimeDetail[]>([]);

  constructor(private workingTimeService : WorkingTimeDataService) {}

  connect(collectionViewer: CollectionViewer): Observable<IworkingTimeDetail[]> {
    return this.workingTimeSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.workingTimeSubject.complete();
  }

  loadWorkingTimes(date: Date ){
    this.workingTimeService.getWorkingTimes(date).subscribe(workingTimes => this.workingTimeSubject.next(workingTimes))
    console.log('load wt: ' + this.workingTimeSubject.getValue()[0].date)
  }

  loadCurrentWorkingTimes(){
    let currentDate: Date= this.workingTimeService.getCurrentDate();
    this.loadWorkingTimes(currentDate);
  }


}
