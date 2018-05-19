import { Component, Input } from '@angular/core';
import { Campaign } from '../../models/campaign';
import { CampaignDetailsPage } from '../../pages/campaign-details/campaign-details';
import { NavController } from 'ionic-angular';

/**
 * Generated class for the CampaignCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'campaign-card',
  templateUrl: 'campaign-card.html'
})
export class CampaignCardComponent {
  @Input() campaign: Campaign

  constructor(
    private navCtrl: NavController
  ) {}


  openDetails(campaign) {
    this.navCtrl.push(CampaignDetailsPage, {
      item: campaign
    });
  }
}


