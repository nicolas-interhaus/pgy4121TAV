import { Injectable } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { ToastController, Platform } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {
  authState = new BehaviorSubject(false);

  constructor(
    private router: Router,
    private storage: Storage,
    private platform: Platform,
    public toastController: ToastController
  ) { 

    this.platform.ready().then(() => {
      this.ifLoggedIn();
    });
  }

  ifLoggedIn() {
    this.storage.get('USER_INFO').then((response) => {
      if (response) {
        this.authState.next(true);
      }
    });
  }

  Entrar(user:string, password:string){
    if (user == "nicolas"){
      var navigationExtrasOK: NavigationExtras = {
        state: {
          id: '1',
          user_name: 'Nicolas',
          message: 'Bienvenido alumno'
        }
      };
      this.storage.set('USER_INFO', navigationExtrasOK).then((response) => {
        this.router.navigate(['home-alumno'], navigationExtrasOK);
        this.authState.next(true);
      });
    }else{
      var navigationExtrasNOK: NavigationExtras = {
        state: {
          user_id: '',
          user_name: '',
          message: 'Nombre de usuario o contraseña inválidos'
        }
      };
      this.storage.set('USER_INFO', navigationExtrasNOK).then((response) => {
        this.router.navigate(['page-login'], navigationExtrasNOK);
        this.authState.next(false);
      });
    }

  }

  salirPerfil() {
    this.storage.remove('USER_INFO').then(() => {
      this.router.navigate(['page-login']);
      this.authState.next(false);
    });
  }
  isAuthenticated() {
    return this.authState.value;
  }

}