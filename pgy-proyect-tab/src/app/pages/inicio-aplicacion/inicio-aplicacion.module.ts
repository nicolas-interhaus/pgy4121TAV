import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioAplicacionPageRoutingModule } from './inicio-aplicacion-routing.module';

import { InicioAplicacionPage } from './inicio-aplicacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioAplicacionPageRoutingModule
  ],
  declarations: [InicioAplicacionPage]
})
export class InicioAplicacionPageModule {}
