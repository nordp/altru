import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Firebase } from '@ionic-native/firebase';
import { AngularFirestore } from 'angularfire2/firestore';
import { Donation } from '../../models/donation';
import { Campaign } from '../../models/campaign';

/*
  Generated class for the DonationsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DonationsProvider {

  constructor(private db: AngularFirestore) {}

  saveDonation(donation: Donation, campaign: Campaign){
    this.db.collection('donations').add(donation);
    this.db.collection('campaigns').doc(donation.campaignId).update({raised: (campaign.raised || 0) + donation.amount})
  }

}
