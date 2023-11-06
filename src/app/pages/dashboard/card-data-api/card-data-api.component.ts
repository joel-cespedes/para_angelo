import { Component } from '@angular/core';
import { ClicksCounterService } from 'src/app/services/clicks-counter.service';

@Component({
  selector: 'app-card-data-api',
  templateUrl: './card-data-api.component.html',
  styleUrls: ['./card-data-api.component.scss'],
  providers: [ClicksCounterService]
})
export class CardDataApiComponent {

  clickCount: number | undefined;

  constructor(
    private ClicksCounterService: ClicksCounterService
    ) {
      this.ClicksCounterService.clickCount$.subscribe((count) => {
        this.clickCount = count;
      });
    }


    changeDaysLeft() {
      this.ClicksCounterService.incrementClick();
    }



}
