import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-campaign-details',
  templateUrl: 'campaign-details.html'
})
export class CampaignDetailsPage {

  @Input() campaign: any;

  constructor() {} 
}
