import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageRedirectPageRoutingModule } from './page-redirect-routing.module';

import { PageRedirectPage } from './page-redirect.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageRedirectPageRoutingModule
  ],
  declarations: [PageRedirectPage]
})
export class PageRedirectPageModule {}
