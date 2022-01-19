import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
@Component({
  selector: 'app-add-to-do',
  templateUrl: './add-to-do.page.html',
  styleUrls: ['./add-to-do.page.scss'],
})
export class AddToDoPage implements OnInit {
  categories = ['work', 'personal'];

  itemName: string;
  itemDueDate: Date;
  itemPriority: string;
  itemCategory: string;
  itemId: number;
  itemTask = {};

  constructor(public modelCrl: ModalController) {}

  ngOnInit() {}

  async dismis() {
    if( typeof(this.itemTask) === "undefined"){
     return await this.modelCrl.dismiss()
    } else (
      await  this.modelCrl.dismiss(this.itemTask)
    )

  }

  selectCategory(index) {
    this.itemCategory = this.categories[index];
  }

  addTask() {
    this.itemTask = ({
      itemId: Math.floor(Math.random() * 100 + 1 * 2),
      itemName: this.itemName,
      itemDueDate: this.itemDueDate,
      itemPriority: this.itemPriority,
      itemCategory: this.itemCategory,
    });
    this.dismis();
  }
}
