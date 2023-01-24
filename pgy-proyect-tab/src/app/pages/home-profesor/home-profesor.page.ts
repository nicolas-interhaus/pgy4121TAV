import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AuthenticationServiceService } from 'src/app/services/authentication-service.service';
import { ZonaAPIService } from 'src/app/services/zona-api.service';

@Component({
  selector: 'app-home-profesor',
  templateUrl: './home-profesor.page.html',
  styleUrls: ['./home-profesor.page.scss'],
})
export class HomeProfesorPage implements OnInit {
  userHome:any;
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

  ngOnInit() {
    this.Mostrar()
  }
  navegar(){
    console.log("dato que enviare",this.userHome)
    let navigationExtras: NavigationExtras = {
      
      state: {user: this.userHome}
    };
    this.router.navigate(['/detalle-profesor'],navigationExtras);
  }

}
