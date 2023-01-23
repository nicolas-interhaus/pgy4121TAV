import { Component, OnInit,ViewChild } from '@angular/core';
import { AlertController, AnimationController, IonButton } from '@ionic/angular';
import { Router,NavigationExtras, ActivatedRoute } from '@angular/router';
import { createAnimation,Animation } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-detalle-alumno',
  templateUrl: './detalle-alumno.page.html',
  styleUrls: ['./detalle-alumno.page.scss'],
})
export class DetalleAlumnoPage implements OnInit {


  userDetail:any;
  constructor(private camarita: Camera,
    private activeroute: ActivatedRoute, private router:Router,private alertcontroler:AlertController, private animationCtrl:AnimationController) {
    this.activeroute.queryParams.subscribe(params=>{
      if (this.router.getCurrentNavigation()?.extras.state){
        this.userDetail = this.router.getCurrentNavigation()?.extras.state?.['userHome'];
        console.log("Datos a mostrar: ",this.userDetail);
      }
    })
   }

  ngOnInit() {
    this.controlAlerta()
    this.animado()
  }
  animado(){
    const animation= this.animationCtrl.create()
   .addElement(document.querySelector('#fotito')!)
   .duration(1500)
   .iterations(Infinity)
   .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
   .fromTo('opacity', '1', '0.2');
   animation.play();
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
  AbrirCamara(){
    const options: CameraOptions ={
      quality: 100,
      destinationType: this.camarita.DestinationType.FILE_URI,
      encodingType: this.camarita.EncodingType.JPEG,
      mediaType: this.camarita.MediaType.PICTURE
    }
    this.camarita.getPicture(options).then((ImageData: any)=>{
      let base64Image = 'data:image/jpeg;base64,'+ImageData;
      console.log(base64Image);
    },(err: any)=>{

    });
  }
}
