import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database"; 

import 'rxjs/add/operator/map';

/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseProvider {

  constructor(public afd: AngularFireDatabase) { }

  getShoppingItems() {
    return this.afd.list('shoppingItems').valueChanges();
  }
 
  addItem(name) {
    this.afd.list('/shoppingItems/').push(name);
  }
 
  removeItem(id) {
    this.afd.list('/shoppingItems/').remove(id);
  }
}
