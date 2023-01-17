import { Component, OnInit } from '@angular/core';
import { Router,NavigationExtras, ActivatedRoute } from '@angular/router';
import { ZonaAPIService } from 'src/app/services/zona-api.service';  

@Component({
  selector: 'app-home-alumno',
  templateUrl: './home-alumno.page.html',
  styleUrls: ['./home-alumno.page.scss'],
})
export class HomeAlumnoPage implements OnInit {
userHome:any;
message:any;
error:any;
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
      this.message = ''+res[10].title;
      console.log(this.message);
  },(error)=>{
    console.log(error)
  })
}

  Actualizar(){
    var post={
      "title": "Los Bakanes de programacion de aplicacion mobil"
    }
    this.consumoApi.updateAlbum("1",post).subscribe((success)=>{
      this.message = success.title;
      console.log(this.message);
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
