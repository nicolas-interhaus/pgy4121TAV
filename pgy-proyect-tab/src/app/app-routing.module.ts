import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'inicio-aplicacion',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login-alumno/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home-alumno',
    loadChildren: () => import('./pages/home-alumno/home-alumno.module').then( m => m.HomeAlumnoPageModule)
  },
  {
    path: 'home-profesor',
    loadChildren: () => import('./pages/home-profesor/home-profesor.module').then( m => m.HomeProfesorPageModule)
  },
  {
    path: 'detalle-profesor',
    loadChildren: () => import('./pages/detalle-profesor/detalle-profesor.module').then( m => m.DetalleProfesorPageModule)
  },
  {
    path: 'detalle-alumno',
    loadChildren: () => import('./pages/detalle-alumno/detalle-alumno.module').then( m => m.DetalleAlumnoPageModule)
  },
  
  {
    path: 'inicio-aplicacion',
    loadChildren: () => import('./pages/inicio-aplicacion/inicio-aplicacion.module').then( m => m.InicioAplicacionPageModule)
  },

  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
