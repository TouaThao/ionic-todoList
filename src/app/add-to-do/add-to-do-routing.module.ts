import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddToDoPage } from './add-to-do.page';

const routes: Routes = [
  {
    path: '',
    component: AddToDoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddToDoPageRoutingModule {}
