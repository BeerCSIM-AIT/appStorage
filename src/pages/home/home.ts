import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { GetvaluePage } from '../getvalue/getvalue';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public storage: Storage) {
    storage.ready().then(()=>{
      storage.set('username','General User');
      storage.set('phone','0899999999');
      console.log(storage);
    });
  }

  goToGetvalue(){
    this.navCtrl.push(GetvaluePage);
  }

}
