
import { Component, Input, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DonationsProvider } from '../../providers/donations/donations';
import { Donation } from '../../models/donation';
import { Campaign } from '../../models/campaign';
import { Device } from '@ionic-native/device';

@Component({
  selector: 'page-campaign-details',
  templateUrl: 'campaign-details.html'
})
export class CampaignDetailsPage implements OnInit {

  @Input() campaign: Campaign;
  constructor(
    private navParams: NavParams,
    private dp: DonationsProvider, 
    private device: Device
  ) {}

  ngOnInit() {
    this.campaign = this.navParams.get('item');
    console.log(this.campaign);
  }
  
  amount: number

  makeDonation(){
    let donation: Donation = {
      amount: this.amount,
      organisationId: this.campaign.organisationId,
      userId: this.device.uuid,
      campaignId: this.campaign.id,
    }
  }
}
