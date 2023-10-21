import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { trigger, transition, style, animate } from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalFormComponent } from '../modal-form/modal-form.component';





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
})



export class CardModalFormComponent implements OnInit{



  modalSwitch!: boolean;


  constructor(private modalForm: ModalService) {
    modalForm.$modalF.subscribe(()=>{
      this.modalSwitch = false;
      console.log("click en cerrar")
    })

  }



  ngOnInit(): void {
    this.modalForm.$modal.subscribe((valor)=>{this.modalForm = valor})
  }



  openModal(){

    this.modalSwitch = true;


  }




}
