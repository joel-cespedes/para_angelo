import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Subscriber } from 'rxjs';
import { ModalService } from 'src/app/services/modal.service';



@Component({
  selector: 'app-modal-simple',
  templateUrl: './modal-simple.component.html',
  styleUrls: ['./modal-simple.component.scss'],
})
export class ModalSimpleComponent implements OnInit{

  modalSwitch!: boolean;

  constructor(private modalSimple: ModalService) {}

  ngOnInit(): void {
    this.modalSimple.$modal.subscribe((valor)=>{this.modalSimple = valor})
  }

  openModal(){
    this.modalSwitch = true;
  }

  @Output() $modal = new EventEmitter<void>();

  closeModal(){
    // console.log("click en cerrar")
    this.modalSimple.$modal.emit(false);
  }


}
