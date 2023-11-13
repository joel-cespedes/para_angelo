import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { FormBuilder, FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-modal-handler',
  templateUrl: './modal-handler.component.html',
  styleUrls: ['./modal-handler.component.scss']
})
export class ModalHandlerComponent implements OnInit {


  showModalSimple: boolean = false;
  showModalFormulario: boolean = false;

  constructor(
    private modalMain: ModalService,
    private formBuilder : FormBuilder
  ) {}

  ngOnInit() {
    this.modalMain.modal$.subscribe(modalType => {
      // Reiniciar estados de los modales
      this.showModalSimple = false;
      this.showModalFormulario = false;

      // Mostrar el modal correspondiente
      if (modalType === 'simple') {
        this.showModalSimple = true;
      } else if (modalType === 'formulario') {
        this.showModalFormulario = true;
      }
      // Puedes agregar más condiciones según el tipo de modal que necesites
    });
  }

  closeSimpleModal() {
    this.showModalSimple = false;
  }

  closeFormularioModal() {
    this.showModalFormulario = false;
  }




  modalForm: FormGroup = this.formBuilder.group({
    email: new FormControl( '',  [Validators.required, Validators.email]),
    name: new FormControl( '', Validators.required),
    number: new FormControl( '', Validators.required)

  });
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
        alert('Error en datos ingresados')
      }
      else{
        console.log('Se envio el formulario');
        console.log(this.modalForm.value);
        this.modalForm.reset();
        this.showModalFormulario = false;


      }
    }


}
