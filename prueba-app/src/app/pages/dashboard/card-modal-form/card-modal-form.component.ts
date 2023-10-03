import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalFormComponent } from 'src/app/shared/modal-form/modal-form.component';

@Component({
  selector: 'app-card-modal-form',
  templateUrl: './card-modal-form.component.html',
  styleUrls: ['./card-modal-form.component.scss']
})



export class CardModalFormComponent {

  constructor( public modalService: NgbModal) {}

  public openModalForm() {
    const modalRef = this.modalService.open(ModalFormComponent);
  }

}
