import { Injectable } from '@angular/core';
import { 
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument 
} from 'angularfire2/firestore';

import { Observable } from 'rxjs';
import { Bike } from '../models/bike';

@Injectable()
export class BikesService {
  private bikesCollection: AngularFirestoreCollection<Bike>;
  bikes: Observable<Bike[]>;
  bikeDoc: AngularFirestoreDocument<Bike>;

  constructor(public afs:AngularFirestore) {
    this.bikesCollection = this.afs.collection('bikes');
    this.bikes = this.bikesCollection.valueChanges();
  }

  getBikes() {
    return this.bikes; 
  }

  addBike(bike: Bike) {
    this.bikesCollection.add(bike);
  }

  deleteBike(bike: Bike) {
    this.bikeDoc = this.afs.doc(`bikes/${bike.id}`);
    this.bikeDoc.delete();
  }

  updateBike(bike: Bike) {
    this.bikeDoc = this.afs.doc(`bikes/${bike.id}`);
    this.bikeDoc.update(bike);
  }
}