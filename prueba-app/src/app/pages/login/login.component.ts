import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  standalone: true,
  // selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm: FormGroup = this.fb.group({
    email: new FormControl( '',  [Validators.required, Validators.email]),
    password: new FormControl( '',  Validators.required)

  });



  constructor(
    private fb : FormBuilder,
    private router : Router
   ){}


   isValidField( field : string ) : boolean | null{
    return this.loginForm.controls[field].errors && this.loginForm.controls[field].touched;
   }

   getFieldError( field : string ) : string | null {

    if( !this.loginForm.controls[ field ] ) return null;

    const errors = this.loginForm.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      switch ( key ) {
        case 'required': return 'Campo requerido';
        case 'email': return 'Ingrese un correo valido';
      }

    }

    return null;
   }

   onSubmit():void{

    if( this.loginForm.invalid ){
      console.log(this.loginForm.value);
      alert('Error en iniciar sesion')
    }
    else{
      console.log('Se llama al servicio de login');
      this.router.navigateByUrl('/dashboard');
      this.loginForm.reset();

    }

   }




}
