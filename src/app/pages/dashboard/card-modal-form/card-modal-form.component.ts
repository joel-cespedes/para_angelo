import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { trigger, transition, style, animate } from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalFormComponent } from '../modal-form/modal-form.component';
import { ClicksCounterService } from 'src/app/services/clicks-counter.service';





@Component({
  selector: 'app-card-modal-form',
  templateUrl: './card-modal-form.component.html',
  styleUrls: ['./card-modal-form.component.scss'],
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



export class CardModalFormComponent implements OnInit{



  modalSwitch!: boolean;
  clickCount: number | undefined;

  constructor(
    private modalForm: ModalService,
    private ClicksCounterService: ClicksCounterService
    ) {
    modalForm.$modalF.subscribe(()=>{
      this.modalSwitch = false;
      console.log("click en cerrar")
    });

    this.ClicksCounterService.clickCount$.subscribe((count) => {
      this.clickCount = count;
    });

  }



  ngOnInit(): void {
    this.modalForm.$modal.subscribe((valor)=>{this.modalForm = valor})
  }



  openModal(){

    this.modalSwitch = true;
    this.ClicksCounterService.incrementClick();

  }




}
