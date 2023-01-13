import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalvavidasPageRoutingModule } from './salvavidas-routing.module';

import { SalvavidasPage } from './salvavidas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SalvavidasPageRoutingModule
  ],
  declarations: [SalvavidasPage]
})
export class SalvavidasPageModule {}
