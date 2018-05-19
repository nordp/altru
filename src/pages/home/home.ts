import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from 'angularfire2/firestore';
import { Campaign } from '../../models/campaign';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items: Observable<Campaign[]>;
  filter: string = '';

  constructor(
    public navCtrl: NavController,
    public db: AngularFirestore,
  ) {
    // this.items = db.collection<Campaign>('campaigns')
    // .snapshotChanges()
    // .map(actions => {
    //   return actions
    //     .filter(campaign => {
    //       const data = campaign.payload.doc.data() as Campaign;
    //       const tagMatch = data.tags.some(tag => tag === filter);
    //       const nameMatch = true;
    //       return tagMatch || nameMatch;
    //     })
    //     .map(a => {
    //     const data = a.payload.doc.data() as Campaign;
    //     const id = a.payload.doc.id;
    //     return { id, ...data };
    //   });
    // });
    this.getItems();
  }

  getItems() {
    this.items = this.db.collection<Campaign>('campaigns')
    .snapshotChanges()
    .map(actions => {
      return actions
        .filter(campaign => {
          if (this.filter) {
            const regexp = new RegExp(`${this.filter.toLowerCase()}.*`, 'g');
            const data = campaign.payload.doc.data() as Campaign;
            const tagMatch = data.tags.some(tag => {
              return tag.match(regexp) !== null
            });
            const nameMatch = data.name.toLowerCase().match(regexp) !== null;
            console.log(tagMatch);
            return tagMatch || nameMatch;
          } else {
            return true;
          }
        })
        .map(a => {
        const data = a.payload.doc.data() as Campaign;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    });
  }
}
