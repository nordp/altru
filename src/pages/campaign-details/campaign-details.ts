
import { Component, Input, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DonationsProvider } from '../../providers/donations/donations';
import { Donation } from '../../models/donation';
import { Campaign } from '../../models/campaign';
import { Device } from '@ionic-native/device';
import { SwishProvider } from '../../providers/swish/swish';

@Component({
  selector: 'page-campaign-details',
  templateUrl: 'campaign-details.html',
  providers: [DonationsProvider]
})
export class CampaignDetailsPage implements OnInit {
  @Input() campaign: Campaign;
  amount: number = 10

  constructor(
    private navParams: NavParams,
    private dp: DonationsProvider, 
    private swish: SwishProvider,
    private device: Device,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    this.campaign = this.navParams.get('item');
    console.log(this.campaign);
  }

  makeDonation() {
    let donation: Donation = {
      amount: this.amount,
      organisationId: this.campaign.organisationId,
      userId: this.device.uuid || 'simulated',
      campaignId: this.campaign.id,
    }

    console.log(donation);
    this.dp.saveDonation(donation);
    window.open(this.swish.createPaymentURL(this.campaign.number, this.amount),'_system');
  }

  navigateBack() {
    this.navCtrl.popToRoot();
  }
}
