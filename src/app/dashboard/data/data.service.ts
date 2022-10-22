import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

/*
  Both reader and data component 
  uses data service so in order to transfer data change correctly 
  to the components that uses this service
  we must turn the service variable into BehaviorSubject and add a method that
  emits the changes.
*/

@Injectable()
export class DataService {
  public data = new BehaviorSubject<string>('');
  cast = this.data.asObservable();

  editData(newData: string) {
    this.data.next(newData);
  }
}
