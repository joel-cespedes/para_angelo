import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalSimpleComponent } from 'src/app/shared/modal-simple/modal-simple.component';



@Component({
  selector: 'app-card-modal-simple',
  templateUrl: './card-modal-simple.component.html',
  styleUrls: ['./card-modal-simple.component.scss']
})


export class CardModalSimpleComponent {

  constructor( public modalService: NgbModal) {}

  public openModalSimple() {
    const modalRef = this.modalService.open(ModalSimpleComponent);
  }

}
