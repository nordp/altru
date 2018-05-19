import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Firebase } from '@ionic-native/firebase';
import { Device } from '@ionic-native/device'
import { Platform } from 'ionic-angular';
import { AngularFirestore } from 'angularfire2/firestore';


/*
  Generated class for the FcmProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FcmProvider {

  constructor(
    public http: HttpClient,
    private firebaseNative: Firebase,
    private platform: Platform,
    private device: Device,
    private afs: AngularFirestore
  ) {
    console.log('Hello FcmProvider Provider');
  }

  async getToken() {

    let token;
  
    if (this.platform.is('android')) {
      token = await this.firebaseNative.getToken()
    } 
  
    if (this.platform.is('ios')) {
      token = await this.firebaseNative.getToken();
      await this.firebaseNative.grantPermission();
    } 
    
    return this.saveTokenToFirestore(token)
  }

  private saveTokenToFirestore(token) {
    if (!token) return;
  
    const devicesRef = this.afs.collection('devices')
  
    const docData = { 
      uuid: this.device.uuid,
      token,
      platform: this.device.platform,
    }
  
    return devicesRef.doc(this.device.uuid).set(docData)
  }

  listenToNotifications() {
    return this.firebaseNative.onNotificationOpen()
  }

}
