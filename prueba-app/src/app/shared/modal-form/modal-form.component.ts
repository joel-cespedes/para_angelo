import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({

  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  // selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.scss'],
})
export class ModalFormComponent {



  modalForm: FormGroup = this.formBuilder.group({
    email: new FormControl( '',  [Validators.required, Validators.email]),
    name: new FormControl( '', Validators.required),
    number: new FormControl( '', Validators.required)

  });



  constructor(
    private formBuilder : FormBuilder,
    private router : Router,
    private modalService: NgbModal
   ){}


   isValidField( field : string ) : boolean | null{
    return this.modalForm.controls[field].errors && this.modalForm.controls[field].touched;
   }

   getFieldError( field : string ) : string | null {

    if( !this.modalForm.controls[ field ] ) return null;

    const errors = this.modalForm.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      switch ( key ) {
        case 'required': return 'Campo requerido';
        case 'email': return 'Ingrese un correo valido';
        case 'name': return 'Ingrese un dato valido';
        case 'number': return 'Ingrese un dato valido';
      }

    }

    return null;
   }

   onSubmitModal():void{

    if( this.modalForm.invalid ){
      console.log(this.modalForm.value);
      alert('Error en iniciar sesion')
    }
    else{
      console.log('Se envio el formulario');
      this.modalForm.reset();
      this.modalService.dismissAll();

    }

   }




}

