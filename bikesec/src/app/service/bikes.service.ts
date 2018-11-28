import { Injectable } from '@angular/core';
import { 
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument 
} from '@angular/fire/firestore';

import { Observable } from 'rxjs';
import { Bike } from '../models/bike';
import { LoginService } from './login.service';

@Injectable()
export class BikesService {
  private bikesCollection: AngularFirestoreCollection<Bike>;
  bikes: Observable<Bike[]>;
  bikesUsers : Observable<Bike[]>;
  private bike : Bike = {
    uid: '',
    nickName: '',
    id: '',
    marca: '',
    modelo: '',
    serial: '',
    color: '',
    rin: '',
    tipo: '',
    talla: '',
    description: '',
    image: ''
  };

  bikesUser : any;
  bikeDoc: AngularFirestoreDocument<Bike>;
  private user : string;

  constructor(public afs:AngularFirestore, private login : LoginService) {
    this.bikesCollection = this.afs.collection('bikes');
    this.bikes = this.bikesCollection.valueChanges();
  }

  getBikes() {
    return this.bikes; 
  }

  getBikesByUID() {
    this.bike.uid = this.login.getUserDetails.uid;
    console.log('User: '+ this.user) ;
    
    this.bikesCollection = this.afs.collection('bikes', ref => ref.where('uid', '==', this.bike.uid ) )
    
    this.bikesUser = this.bikesCollection.valueChanges()
    console.log(this.bikes)
    return this.bikesUser; 
  }

  getBikesByUsers() {
    this.bike.nickName = this.login.getUserDetails.email.split('@')[0];

    console.log('User: '+ this.user) ;
    this.bikesUser = this.afs.doc(`bikes/${this.bike.nickName}`);
    console.log(console.info, this.bikesUser);
    return this.bikesUser; 
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