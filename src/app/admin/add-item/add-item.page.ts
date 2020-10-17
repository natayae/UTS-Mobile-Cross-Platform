import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { Item } from 'src/app/home/home.model';
import { HomeService } from 'src/app/home/home.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.page.html',
  styleUrls: ['./add-item.page.scss'],
})
export class AddItemPage implements OnInit {
  form: FormGroup;
  loadedItem: Item;
  constructor(
    private itemsService: HomeService,
    private router: Router,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    this.presentLoading().then(() => {
      this.itemsService.addItem(form.value);
      this.router.navigate(['./admin']);
      this.presentToast();
    });
  }

  async presentLoading(){
    const loading = await this.loadingCtrl.create({
      message: 'Adding Product...',
      duration: 3000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed');
  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'Product added successfully',
      color: 'success',
      duration: 3000
    });
    toast.present();
  }
}
