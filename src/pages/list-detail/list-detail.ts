import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ListDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-detail',
  templateUrl: 'list-detail.html',
})
export class ListDetailPage {
  selectedItem: any;
  description: string[];
  ingredients: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedItem = this.navParams.get('item');
    this.description = this.selectedItem.description.split('\n');
    this.ingredients = this.selectedItem.ingredients.split('\n');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListDetailPage');
  }

}
