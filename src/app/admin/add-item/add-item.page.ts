import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { HomeService } from 'src/app/home/home.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.page.html',
  styleUrls: ['./add-item.page.scss'],
})
export class AddItemPage implements OnInit {
  form: FormGroup;
  constructor(private itemsService: HomeService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    if(!form.valid){
      return;
    }
    const imageURL = form.value.imageURL;
    const type = form.value.type;
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
    this.itemsService.addItem(imageURL, type, merk, model, price, stock, base, boost, core, thread, chipset, processor, speed, size);
  }
}
