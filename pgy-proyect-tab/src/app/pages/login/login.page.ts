import { Component, OnInit } from '@angular/core';
 import { ReactiveFormsModule,Validators,FormGroup,FormControl  } from '@angular/forms'; 
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor() { }
  titulo_login = "Bienvenido a la aplicacion."
  
  ngOnInit() {
  }
   usuario = new FormGroup({
    user: new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(8)]),
    pass: new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(8)])
  }) 
  Validar_Alumno(){
    if(this.usuario.value.user=="nicolas" && this.usuario.value.pass=="1234aaa"){
      console.log("acceso concedido, bienvenido nicolas")
      
    }else{
      console.log("acceso denegado, intentalo de nuevo")
    }
  }
}


