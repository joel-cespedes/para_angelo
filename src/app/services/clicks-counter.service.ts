import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClicksCounterService {

  private clickCount = 2;
  private maxClicks = 9;

  private clickCountSubject = new BehaviorSubject<number>(this.clickCount);

  clickCount$ = this.clickCountSubject.asObservable();

  constructor() {}

  incrementClick() {
    if (this.clickCount < this.maxClicks) {
      this.clickCount++;
      this.clickCountSubject.next(this.clickCount);
    } else {
      this.resetClickCount();
    }
  }

  resetClickCount() {
    this.clickCount = 2;
    this.clickCountSubject.next(this.clickCount);
  }


}
