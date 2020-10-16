import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Item } from 'src/app/home/home.model';
import { HomeService } from 'src/app/home/home.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.page.html',
  styleUrls: ['./edit-item.page.scss'],
})
export class EditItemPage implements OnInit {
  loadedItem: Item;

  constructor(
    private activatedRoute: ActivatedRoute,
    private itemsService: HomeService
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe( paramMap => {
      if(!paramMap.has('itemId')) { return; }
      const itemId = paramMap.get('itemId');
      this.loadedItem = this.itemsService.getItem(itemId);
    });
  }

  onSubmit(form: NgForm) {
    if(!form.valid){
      return;
    }

    const id = this.loadedItem.id;
    const imageURL = form.value.imageURL;
    const type = this.loadedItem.type;
    const merk = form.value.merk;
    const model = form.value.model;
    const price = form.value.price;
    const stock = form.value.stock;

    var base, boost, core, thread, chipset, processor, speed, size;

    if( type === 'CPU' ) {

      base = form.value.baseclock;
      boost = form.value.boostclock;
      core = form.value.core;
      thread = form.value.thread;

      speed = '';
      size = '';
      chipset = '';
      processor = '';

    } else if ( type === 'GPU' ) {

      base = '';
      boost = '';
      core = '';
      thread = '';
      chipset = '';
      processor = '';
      speed = '';
      size = '';

    } else if ( type === 'Motherboard' ) {

      chipset = form.value.chipset;
      processor = form.value.comp;

      base = '';
      boost = '';
      core = '';
      thread = '';
      speed = '';
      size = '';

    } else if ( type === 'RAM') {

      speed = form.value.speed;
      size = form.value.size;

      base = '';
      boost = '';
      core = '';
      thread = '';
      chipset = '';
      processor = '';
    }
    this.itemsService.editItem(id, imageURL, type, merk, model, price, stock, base, boost, core, thread, chipset, processor, speed, size);
  }
}