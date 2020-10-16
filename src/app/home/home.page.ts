import { Component, OnInit } from '@angular/core';
import { Item } from './home.model';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  items: Item[]
  displayMode: number;

  constructor(private homeService: HomeService) {}

  ngOnInit(){
  }

  ionViewWillEnter(){
    this.displayMode = 1;
    this.items = this.homeService.getAllItems();
  }

  onDisplayModeChange(mode: number){
    this.displayMode = mode;
  }
}
