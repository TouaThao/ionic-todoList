import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddToDoPageRoutingModule } from './add-to-do-routing.module';

import { AddToDoPage } from './add-to-do.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddToDoPageRoutingModule
  ],
  declarations: [AddToDoPage]
})
export class AddToDoPageModule {}
