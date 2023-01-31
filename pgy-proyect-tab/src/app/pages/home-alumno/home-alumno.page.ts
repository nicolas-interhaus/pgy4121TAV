import { Component, OnInit } from '@angular/core';
import { Router,NavigationExtras, ActivatedRoute } from '@angular/router';
import { ZonaAPIService } from 'src/app/services/zona-api.service';  
import { AuthenticationServiceService } from 'src/app/services/authentication-service.service';

@Component({
  selector: 'app-home-alumno',
  templateUrl: './home-alumno.page.html',
  styleUrls: ['./home-alumno.page.scss'],
})
export class HomeAlumnoPage implements OnInit {
userHome:any;
message:any;
error:any;
listaCurso:any=[];
  constructor(private consumoApi:ZonaAPIService,private activeroute: ActivatedRoute, private router:Router) {
    this.activeroute.queryParams.subscribe(params=>{
      if (this.router.getCurrentNavigation()?.extras.state){
        this.userHome = this.router.getCurrentNavigation()?.extras.state?.['user'];
        console.log("Datos a mostrar: ",this.userHome);
      }
    })
   }
   ngOnInit() {
    
   }
  Mostrar(){
    this.consumoApi.getAlbums().subscribe((res)=>{
      
      this.listaCurso=res;
      console.log(this.listaCurso);
      
  },(error)=>{
    console.log(error)
  })
}

  Actualizar(){
    var post={
      "title": "Los mejores de programacion de aplicacion movil"
    }
    console.log(this.listaCurso);
    this.consumoApi.updateAlbum("1",post).subscribe((success)=>{
      console.log("success = "+success.title);
      this.listaCurso[0].title = success.title;
      
      
    })
    console.log(this.listaCurso);
  }

  
  navegar(){
    console.log("dato que enviare",this.userHome)
    let navigationExtras: NavigationExtras = {
        
      state: {user: this.userHome}
    };
    this.router.navigate(['/detalle-alumno'],navigationExtras);
  }


}
