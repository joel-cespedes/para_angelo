
import { Injectable } from '@angular/core';

@Injectable()
export class RandomNumberService {

  values: number[] = [14, 34, 65];

  generateRandomValues() {
    this.values = [
      Math.floor(Math.random() * 81),
      Math.floor(Math.random() * 81),
      Math.floor(Math.random() * 81)
    ];
    setTimeout(() => {
      this.resetValuesToInitialState();
    }, 3000);
  }

  resetValuesToInitialState() {
    this.values = [14, 34, 65];
  }

}
