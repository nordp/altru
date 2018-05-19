import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from 'angularfire2/firestore';
import { Campaign } from '../../models/campaign';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items: Observable<Campaign[]>;
  constructor(
    public navCtrl: NavController,
    public db: AngularFirestore,
  ) {
    this.items = db.collection<Campaign>('campaigns').snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Campaign;
        const campaignId = a.payload.doc.id;
        return { campaignId, ...data };
      });
    });
  }
}
