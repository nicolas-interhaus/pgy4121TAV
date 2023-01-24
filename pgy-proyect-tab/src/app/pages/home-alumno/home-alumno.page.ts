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
      "title": "Los Bakanes de programacion de aplicacion mobil"
    }
    this.consumoApi.updateAlbum("1",post).subscribe((success)=>{
      this.listaCurso = success.title;
      console.log(this.listaCurso);
    })
  }

  ngOnInit() {
    
  }
  navegar(){
    console.log("dato que enviare",this.userHome)
    let navigationExtras: NavigationExtras = {
        
      state: {user: this.userHome}
    };
    this.router.navigate(['/detalle-alumno'],navigationExtras);
  }


}
