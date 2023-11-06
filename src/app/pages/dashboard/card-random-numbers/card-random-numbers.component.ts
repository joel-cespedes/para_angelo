import { Component, OnInit } from '@angular/core';
import { RandomNumberService } from 'src/app/services/random-number.service';
import { ClicksCounterService } from 'src/app/services/clicks-counter.service';

@Component({
  selector: 'app-card-random-numbers',
  templateUrl: './card-random-numbers.component.html',
  styleUrls: ['./card-random-numbers.component.scss'],
  providers: [ClicksCounterService]
})
export class CardRandomNumbersComponent {


  clickCount: number | undefined;

  constructor(
    private randomValueService: RandomNumberService,
    private ClicksCounterService: ClicksCounterService
    ) {
      this.ClicksCounterService.clickCount$.subscribe((count) => {
        this.clickCount = count;
      });
    }

  changeRandomValues() {
    this.randomValueService.generateRandomValues();
    this.ClicksCounterService.incrementClick();
  }

  getValues() {
    return this.randomValueService.values;
  }




}


