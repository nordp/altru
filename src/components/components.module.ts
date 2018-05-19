import { NgModule } from '@angular/core';
import { CampaignCardComponent } from './campaign-card/campaign-card';
import { ProgressComponent } from './progress/progress';
@NgModule({
	declarations: [CampaignCardComponent,
    ProgressComponent],
	imports: [],
	exports: [CampaignCardComponent,
    ProgressComponent]
})
export class ComponentsModule {}
