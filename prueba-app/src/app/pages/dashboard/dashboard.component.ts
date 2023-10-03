import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ModalSimpleComponent } from 'src/app/shared/modal-simple/modal-simple.component';
import { ApiService } from 'src/app/services/api.service';
import { RandomNumberService } from 'src/app/services/random-number.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {


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



  currentValues: number[] = [45, 24, 62]; // Inicializa los valores actuales

  constructor(private numberService: RandomNumberService) {}

  ngOnInit(): void {
    // Suscribe a los valores actuales para los tres elementos
    for (let i = 0; i < 3; i++) {
      this.numberService.getCurrentValue(i).subscribe((value) => {
        this.currentValues[i] = value;
      });
    }
  }

  startRandomChange(index: number): void {
    // Inicia el cambio aleatorio para el elemento específico
    this.numberService.startRandomChange(index);
  }





}
