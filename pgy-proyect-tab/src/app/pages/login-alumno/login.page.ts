import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule,Validators,FormGroup,FormControl  } from '@angular/forms'; 
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router:Router, private alertcontroler:AlertController) { }
  titulo_login = "Bienvenido a la aplicacion."
  
  ngOnInit() {
  }
   usuario = new FormGroup({
    user: new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(8)]),
    pass: new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(8)]),
    /* user_profesor: new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(20)]),
    pass_alumno: new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(15)]),
 */
  }) 
  Validar_Alumno(){
    if(this.usuario.value.user=="nicolas" && this.usuario.value.pass=="1234aaa"){
      console.log("acceso concedido, bienvenido nicolas")
      this.sendDetailsWithState()
    }else{
      console.log("acceso denegado, intentalo de nuevo")
      this.controlAlerta()
    }
  }
  async controlAlerta(){
    const alert = await this.alertcontroler.create({
      header: 'ERROR',
      subHeader:'Tipo_validacion',
      message:'Usuario o contraseña incorrecta',
      buttons:['OK'],
    });
    await alert.present();
  }
  sendDetailsWithState(){
    console.log("datos a enviar",this.usuario.value.user)
    let navigationExtras: NavigationExtras = {
      state: {user: this.usuario.value.user}
    };
    this.router.navigate(['/home-alumno'],navigationExtras);
    
  }
  
  
}


