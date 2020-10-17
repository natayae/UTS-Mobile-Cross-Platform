import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, IonItemSliding, ToastController } from '@ionic/angular';
import { Item } from '../home/home.model';
import { HomeService } from '../home/home.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  items: Item[];
  selectedItem: Item;
  dataURL: string;

  constructor(
    private itemsService: HomeService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('productId')) { return; }
      const productId = paramMap.get('productId');
      this.selectedItem= this.itemsService.getItem(productId);
    });
  }

  ionViewWillEnter() {
    this.items = this.itemsService.getAllItems();
  }

  deleteSelectedProduct(itemId) {
    for (let i = 0; i < this.items.length; i++){
      let productIndex = this.items[i].id;
      if (productIndex == itemId){
        this.itemsService.deleteProduct(productIndex);
        this.items.splice(i, 1);
      }
    }
    this.router.navigate(['/admin']).then(nav => {
      this.presentToast();
    }, err => {
      console.log("error");
    });
  }

  //editProductSlide(product: Product, slidingItem: IonItemSliding) {
  //  slidingItem.close();
  //  console.log(`${product.merk} ${product.model} is set to editing mode`);
 // }

  async presentAlert(id) {
    const alert = await this.alertCtrl.create({
      header: 'Delete Product',
      message:  `Are you sure want to delete this product?`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Yes',
          handler: () => this.deleteSelectedProduct(id)
        }
      ]
    });
    await alert.present();
  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'Product deleted',
      color: 'success',
      duration: 3000
    });
    toast.present();
  }
}