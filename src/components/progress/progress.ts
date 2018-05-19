import { Component, Input } from '@angular/core';

@Component({
  selector: 'prog',
  templateUrl: 'progress.html'
})
export class ProgressComponent {

  @Input() progress: number;


  constructor() {}

}
