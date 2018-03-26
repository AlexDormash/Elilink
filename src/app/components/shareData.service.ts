import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ShareData {

  private formData = new BehaviorSubject<any>(null);
  currentMessage = this.formData.asObservable();
  constructor() { }

  changeMessage(data: any) {
    this.formData.next(data);
  }

}
