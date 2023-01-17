import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageRedirectPage } from './page-redirect.page';

const routes: Routes = [
  {
    path: '',
    component: PageRedirectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageRedirectPageRoutingModule {}
