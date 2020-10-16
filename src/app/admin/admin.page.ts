import { Component, OnInit } from '@angular/core';
import { IonItemSliding } from '@ionic/angular';
import { Item } from '../home/home.model';
import { HomeService } from '../home/home.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  items: Item[];

  constructor(private itemsService: HomeService) { }

  ngOnInit() {
    this.items = this.itemsService.getAllItems();
  }

  deleteItem(item: string, slidingItem: IonItemSliding){
    slidingItem.close();
    this.itemsService.deleteAlert(item);
  }
}