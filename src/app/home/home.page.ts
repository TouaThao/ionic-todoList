import { Component } from '@angular/core';

import { AlertController, ModalController } from '@ionic/angular';
import { AddToDoPage } from '../add-to-do/add-to-do.page';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  todoList =[]
  today:number = Date.now();
  constructor(public modalCtlr: ModalController) {}

  async add(){
    const modal =await this.modalCtlr.create({
      component:AddToDoPage
    })
      modal.onDidDismiss().then(itemTask=>{
        if(typeof(itemTask.data) === "undefined"){
          return  modal.present()
        }
        else(this.todoList.push(itemTask.data))
      })
    return await modal.present()
  }

  Complete(index){
     this.todoList.splice(index,1)

  }
}
