import { Component, Input, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Campaign } from '../../models/campaign';

@Component({
  selector: 'page-campaign-details',
  templateUrl: 'campaign-details.html'
})
export class CampaignDetailsPage implements OnInit {

  campaign: Campaign;

  constructor(
    private navParams: NavParams
  ) {}

  ngOnInit() {
    this.campaign = this.navParams.get('item');
    console.log(this.campaign);
  }
}
