import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the GetvaluePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-getvalue',
  templateUrl: 'getvalue.html',
})
export class GetvaluePage {
  username:string;
  phone:string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage:Storage) {
    this.storage.ready().then(()=>{
      this.storage.get('username').then((val)=>{ 
        this.username=val;
        console.log(val); 
      });
      this.storage.get('phone').then((val)=>{ 
        this.phone=val;
        console.log(val); 
      });
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GetvaluePage');
  }

  ionViewWillLeave(){
    this.storage.remove('username');
    this.storage.remove('phone');
    console.log('Removed');
  }

}
