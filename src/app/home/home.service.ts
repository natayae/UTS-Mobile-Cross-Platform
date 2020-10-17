import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Item } from './home.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private items: Item[] = [
    {
      id: 'p1',
      type: 'CPU',
      imageUrl: ['https://hexus.net/media/uploaded/2020/7/b1bf5a2c-bd32-48e1-89a8-07f4331a91d3.jpg'],
      merk: 'AMD',
      model: 'Ryzen™ Threadripper™ PRO 3995WX',
      baseclock: '2.7GHz',
      boostclock: 'Up to 4.2GHz',
      core: '64',
      thread: '128',
      chipset: '',
      processor: '',
      speed: '',
      size: '',
      stock: '50',
      price: 150000000
    },
    {
      id: 'p2',
      type: 'CPU',
      imageUrl: ['https://www.amd-id.com/wp-content/uploads/2020/10/AMD-Ryzen-9-5900X.png'],
      merk: 'AMD',
      model: 'Ryzen™ 9 5900X',
      baseclock: '3.7GHz',
      boostclock: 'Up to 4.8GHz',
      core: '12',
      thread: '24',
      chipset: '',
      processor: '',
      speed: '',
      size: '',
      stock: '50',
      price: 115000000
    },
    {
      id: 'p3',
      type: 'GPU',
      imageUrl: ['https://www.amd-id.com/wp-content/uploads/2015/08/R9_Nano_BlackRef_RGB_5inch.jpg'],
      merk: 'AMD',
      model: 'Radeon™ R9 Nano',
      baseclock: '',
      boostclock: '',
      core: '',
      thread: '',
      chipset: '',
      processor: '',
      speed: '',
      size: '',
      stock: '50',
      price: 8000000
    },
    {
      id: 'p4',
      type: 'GPU',
      imageUrl: ['https://clevo-computer.com/media/image/32/b1/c1/Sapphire-Radeon-RX-5700-XT-8G-8GB-GDDR6-HDMI-3x-DP-full-retail-21293-01-40G.jpg'],
      merk: 'AMD',
      model: 'Radeon™ RX 5700 XT',
      baseclock: '',
      boostclock: '',
      core: '',
      thread: '',
      chipset: '',
      processor: '',
      speed: '',
      size: '',
      stock: '50',
      price: 7300000
    },
    {
      id: 'p5',
      type: 'Motherboard',
      imageUrl: ['https://thesystemone.com/image/cache/catalog/mainboard/asus/crosshair-viii-hero-wifi-1-1000x1000.jpg'],
      merk: 'Asus',
      model: 'ROG Crosshair VIII Hero (WI-FI)',
      baseclock: '',
      boostclock: '',
      core: '',
      thread: '',
      chipset: 'AMD X570 ATX',
      processor: '3rd Gen AMD Ryzen™',
      speed: '',
      size: '',
      stock: '50',
      price: 9500000
    },
    {
      id: 'p6',
      type: 'Motherboard',
      imageUrl: ['https://www.biostar.com.tw/upload/Motherboard/b20200807_4.png'],
      merk: 'Biostar',
      model: 'Z490T-SILVER Ver. 5.0',
      baseclock: '',
      boostclock: '',
      core: '',
      thread: '',
      chipset: 'Intel Z490',
      processor: '10th Generation Intel Core™',
      speed: '',
      size: '',
      stock: '50',
      price: 900000
    },
    {
      id: 'p7',
      type: 'RAM',
      imageUrl: ['https://www.gigabyte.com/FileUpload/Global/WebPage/650/img/1.png'],
      merk: 'Gigabyte',
      model: 'GeForce RTX™ 3070 EAGLE 8G',
      baseclock: '',
      boostclock: '',
      core: '',
      thread: '',
      chipset: '',
      processor: '',
      speed: '1‎725 MHz',
      size: '8GB',
      stock: '50',
      price: 1100000
    },
    {
      id: 'p8',
      type: 'RAM',
      imageUrl: ['https://static.gigabyte.com/Product/53/7221/20200205114700508d97246833b4a81b11cad3c5d5a19410_big.png'],
      merk: 'Gigabyte',
      model: 'DESIGNARE Memory 64GB (2x32GB) 3200MHz',
      baseclock: '',
      boostclock: '',
      core: '',
      thread: '',
      chipset: '',
      processor: '',
      speed: '2‎666 MHz',
      size: '64GB',
      stock: '50',
      price: 3800000
    },
  ];

  constructor( 
    private alertCtrl: AlertController,
    private router: Router) { }

  getAllItems(){
    return [...this.items];
  }

  getItem(itemId:string){
    return {...this.items.find( item => {
      return item.id === itemId;
      }
    )};
  }

  deleteItem(itemId: string){
    this.items = this.items.filter( item => {
      return item.id !== itemId;
    });
    console.log('deleted');
  }

  addItem(id: string, imageURL: string, type: string, merk: string, model: string, price: number, stock: string, base: string, boost: string, core:string, thread: string, chipset: string, processor: string, speed:string, size: string) {
    var tempId = 'p1-';
    var length = this.items.length;
    tempId += length;
    this.items.push({ 
      id: tempId,
      type: type,
      imageUrl: [imageURL],
      merk: merk,
      model: model,
      price: price,
      stock: stock,
      baseclock: base,
      boostclock: boost,
      core: core,
      thread: thread,
      chipset: chipset,
      processor: processor,
      speed: speed,
      size: size,
    });
    console.log(this.items);
    this.router.navigate(['/admin']);
  }

  editItem(id:string, imageURL: string, type: string, merk: string, model: string, price: number, stock: string, base: string, boost: string, core:string, thread: string, chipset: string, processor: string, speed:string, size:string) {
    for(var i = 0; i < this.items.length; i++){
      if(this.items[i].id == id){
        this.items[i].id = id;
        this.items[i].type = type;
        this.items[i].imageUrl= [imageURL];
        this.items[i].merk = merk;
        this.items[i].model = model;
        this.items[i].price = price;
        this.items[i].stock = stock;
        this.items[i].baseclock = base;
        this.items[i].boostclock = boost;
        this.items[i].core = core;
        this.items[i].thread = thread;
        this.items[i].chipset = chipset;
        this.items[i].processor = processor;
        this.items[i].speed = speed;
        this.items[i].size= size;
        console.log(this.items[i]);
      }
    }
    this.router.navigate(['/admin']);
  }

  async deleteAlert(itemId: string) {
    const alert = await this.alertCtrl.create({
      header: 'Are you sure?',
      message: 'Do you really want to delete this product?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => this.deleteItem(itemId)
        }
      ]
    });
    await alert.present();
  }
}
