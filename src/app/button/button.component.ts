import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() title = 'Button';
  @Input() mess = '';

  logMess(mess: string) {
    console.log('>>> check mess: ', mess);
  }
}
