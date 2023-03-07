import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {
  @Input() inputId: string | undefined
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() { }



}
