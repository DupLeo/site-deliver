import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConnAuthPage } from './conn-auth.page';

const routes: Routes = [
  {
    path: '',
    component: ConnAuthPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConnAuthPageRoutingModule {}
