import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalvavidasPage } from './salvavidas.page';

const routes: Routes = [
  {
    path: '',
    component: SalvavidasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalvavidasPageRoutingModule {}
