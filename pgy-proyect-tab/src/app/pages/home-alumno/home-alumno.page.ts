import { Component, OnInit } from '@angular/core';
import { Router,NavigationExtras, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-alumno',
  templateUrl: './home-alumno.page.html',
  styleUrls: ['./home-alumno.page.scss'],
})
export class HomeAlumnoPage implements OnInit {
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
  }

}
