import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-card-to-login',
  templateUrl: './card-to-login.component.html',
  styleUrls: ['./card-to-login.component.scss']
})
export class CardToLoginComponent {

  constructor(private router: Router) {}

  goToLogin() {
    this.router.navigateByUrl('/login');
  }


}
