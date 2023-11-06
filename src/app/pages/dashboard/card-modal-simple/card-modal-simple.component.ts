import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { trigger, transition, style, animate } from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalSimpleComponent } from '../modal-simple/modal-simple.component';
import { ClicksCounterService } from 'src/app/services/clicks-counter.service';



@Component({
  selector: 'app-card-modal-simple',
  templateUrl: './card-modal-simple.component.html',
  styleUrls: ['./card-modal-simple.component.scss'],
  animations: [
    trigger('modalAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-in-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('300ms ease-in-out', style({ opacity: 0 })),
      ]),
    ]),
  ],
  providers: [ClicksCounterService]
})


export class CardModalSimpleComponent implements OnInit{




  modalSwitch!: boolean;
  clickCount: number | undefined;


  constructor(
    private modalSimple: ModalService,
    private ClicksCounterService: ClicksCounterService
    ) {
    modalSimple.$modal.subscribe(()=>{
      this.modalSwitch = false;
      console.log("click en cerrar")
    });

    this.ClicksCounterService.clickCount$.subscribe((count) => {
      this.clickCount = count;
    });

  }



  ngOnInit(): void {
    this.modalSimple.$modal.subscribe((valor)=>{this.modalSimple = valor})
  }



  openModal(){

    this.modalSwitch = true;

    this.ClicksCounterService.incrementClick();


  }







}
