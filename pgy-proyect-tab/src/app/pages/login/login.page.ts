import { Component, OnInit } from '@angular/core';

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
  user={
    usuario:"ej nicolas"
  }

}
