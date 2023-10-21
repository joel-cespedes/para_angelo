import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { trigger, transition, style, animate } from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalSimpleComponent } from '../modal-simple/modal-simple.component';



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
})


export class CardModalSimpleComponent implements OnInit{




  modalSwitch!: boolean;


  constructor(private modalSimple: ModalService) {
    modalSimple.$modal.subscribe(()=>{
      this.modalSwitch = false;
      console.log("click en cerrar")
    })

  }



  ngOnInit(): void {
    this.modalSimple.$modal.subscribe((valor)=>{this.modalSimple = valor})
  }



  openModal(){

    this.modalSwitch = true;


  }

  // closeModal(){
  //   console.log("click en cerrar")
  //   this.modalSimple.$modal.emit(false);
  // }






}
