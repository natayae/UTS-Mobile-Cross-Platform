import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../home.model';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  loadedItem: Item;

  constructor(
    private activatedRoute: ActivatedRoute,
    private homeService: HomeService
  ) { 
    
  }

  ngOnInit() {
    this. activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('itemId')) {return;}
      const itemId = paramMap.get('itemId');
      this.loadedItem= this.homeService.getItem(itemId);
    });
  }

}
