import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClicksCounterService } from 'src/app/services/clicks-counter.service';


@Component({
  selector: 'app-card-to-login',
  templateUrl: './card-to-login.component.html',
  styleUrls: ['./card-to-login.component.scss'],
  providers: [ClicksCounterService]
})
export class CardToLoginComponent {

  clickCount: number | undefined;

  constructor(
    private router: Router,
    private ClicksCounterService: ClicksCounterService
    ) {
      this.ClicksCounterService.clickCount$.subscribe((count) => {
        this.clickCount = count;
      });
    }

  goToLogin() {
    this.router.navigateByUrl('/login');
    this.ClicksCounterService.incrementClick();
  }


}
