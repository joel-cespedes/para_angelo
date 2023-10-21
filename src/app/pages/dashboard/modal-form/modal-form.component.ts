import { CommonModule } from '@angular/common';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscriber } from 'rxjs';
import { ModalService } from 'src/app/services/modal.service';



@Component({

  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.scss'],
})
export class ModalFormComponent implements OnInit{


  modalSwitch!: boolean;



  modalForm: FormGroup = this.formBuilder.group({
    email: new FormControl( '',  [Validators.required, Validators.email]),
    name: new FormControl( '', Validators.required),
    number: new FormControl( '', Validators.required)

  });

  @Output() $modalF = new EventEmitter<void>();

  constructor(
    private formBuilder : FormBuilder,
    private router : Router,
    private modalFormMain: ModalService
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

   ngOnInit(): void {
    this.modalFormMain.$modalF.subscribe((valor)=>{this.modalForm = valor})
  }



   onSubmitModal():void{

    if( this.modalForm.invalid ){
      console.log(this.modalForm.value);
      alert('Error en datos ingresados')
    }
    else{
      console.log('Se envio el formulario');
      console.log(this.modalForm.value);
      this.modalForm.reset();
      this.modalFormMain.$modalF.emit(false);


    }

   }



  //  closeModal(){
  //   // console.log("click en cerrar")
  //   this.modalForm.$modal.emit(false);
  // }


}

