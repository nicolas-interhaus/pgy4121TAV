import { Component, OnInit } from '@angular/core';
import { AlertController, AnimationController, IonButton } from '@ionic/angular';
import { Router,NavigationExtras, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detalle-profesor',
  templateUrl: './detalle-profesor.page.html',
  styleUrls: ['./detalle-profesor.page.scss'],
})
export class DetalleProfesorPage implements OnInit {

  userHome:any;
  constructor(private activeroute: ActivatedRoute, private router:Router) {
    this.activeroute.queryParams.subscribe(params=>{
      if (this.router.getCurrentNavigation()?.extras.state){
        this.userHome = this.router.getCurrentNavigation()?.extras.state?.['user'];
        console.log("Datos a mostrar: ",this.userHome);
      }
    })
   }

  ngOnInit() {
    this.controlAlerta()
  }
  async controlAlerta(){
    const alert = await this.alertcontroler.create({
      header: 'El dispositivo necesita tener acceso a la cámara para continuar',
      subHeader:'Uso de la camara',
      message:'Aqui aparecera la cámara',
      buttons:['OK'],
    });
    await alert.present();
  }

}
