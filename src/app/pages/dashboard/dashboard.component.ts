import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { SharedModule } from 'src/app/shared/shared.module';
// import { ModalSimpleComponent } from 'src/app/pages/dashboard/modal-simple/modal-simple.component';
import { ApiService } from 'src/app/services/api.service';
import { RandomNumberService } from 'src/app/services/random-number.service';
import { RandomNumbersComponent } from './random-numbers/random-numbers.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {


  listVisible : boolean = false;


  listActive : boolean = false;
  gridActive : boolean = true;

  mostrarLista() {
    this.listVisible = true;
    this.listActive = true;
    this.gridActive = false;
  }

  mostrarCuadricula() {
    this.listVisible = false;
    this.listActive = false;
    this.gridActive = true;
  }



  constructor() {}





}
