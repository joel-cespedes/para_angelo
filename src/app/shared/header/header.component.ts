import { Component } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';


@Component({
  selector: 'app-dashboard-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true
})
export class HeaderComponent {

  filtroGlobal: string = '';
  filtro: string = '';



}

