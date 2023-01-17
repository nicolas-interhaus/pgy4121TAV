import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule,Validators,FormGroup,FormControl  } from '@angular/forms'; 
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, AnimationController, IonButton } from '@ionic/angular';
import { createAnimation,Animation } from '@ionic/angular';
import { AuthenticationServiceService } from 'src/app/services/authentication-service.service';
import { ZonaAPIService } from '../../services/zona-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  
  userHome: any;
  primerTitulo: any;
  value = "nicolas";
  message: any;
  constructor(private consumoAPI:ZonaAPIService,
    private router:Router,
     private alertcontroler:AlertController,
      private animationCtrl:AnimationController,
      private autenticarServicio: AuthenticationServiceService) {
    
   }
  titulo_login = "Bienvenido a la aplicacion."
  
  ngOnInit() {
    this.animado()
    this.ShowData()
  }
   usuario = new FormGroup({
    user: new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(8)]),
    pass: new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(8)]),
    
 
  }) 

  animado(){
   const animation= this.animationCtrl.create()
  .addElement(document.querySelector('#card')!)
  .duration(1500)
  .iterations(Infinity)
  .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
  .fromTo('opacity', '1', '0.2');
  animation.play();
  }

  Validar_Usuario(){
    if(this.usuario.value.user=="nicolas" && this.usuario.value.pass=="1234aaa"){
      this.autenticarServicio.Entrar(this.usuario.value.user,this.usuario.value.pass)
    }else if(this.usuario.value.user=="profesor" && this.usuario.value.pass=="admin"){
        this.NavegarProfesor()
    }else{
        this.controlAlerta()
      }
  }
  async controlAlerta(){
    const alert = await this.alertcontroler.create({
      header: 'ERROR',
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
  NavegarProfesor(){
    console.log("datos a enviar",this.usuario.value.user)
    let navigationExtras: NavigationExtras = {
      state: {user: this.usuario.value.user}
    };
    this.router.navigate(['/home-profesor'],navigationExtras); 
  }

  ShowData(){
    this.consumoAPI.getPost().subscribe((res)=>{
      this.primerTitulo = '' + res[0].tittle;
      console.log(res[0].tittle +"++++" + this.primerTitulo);
    },(error)=>{
      console.log(error);
    });
  }
}