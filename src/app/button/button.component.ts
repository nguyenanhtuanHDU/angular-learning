import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() title = 'Button';
  @Input() mess = '';
  @Input() inputId: string | undefined;

  logMess(mess: string) {
    console.log('>>> check mess: ', mess);
  }
}
