import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioAplicacionPage } from './inicio-aplicacion.page';

const routes: Routes = [
  {
    path: '',
    component: InicioAplicacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioAplicacionPageRoutingModule {}
