import { Component } from '@angular/core';
import { ProgressbarConfig } from 'ngx-bootstrap/progressbar';
import { TabsetConfig } from 'ngx-bootstrap/tabs';
import { TimepickerConfig } from 'ngx-bootstrap/timepicker';

interface IItemObject {
  id: number;
  name: string;
}

export function getTimepickerConfig(): TimepickerConfig {
  return Object.assign(new TimepickerConfig(), {
    allowEmptyTime: true,
  });
}

export function getTabsetConfig(): TabsetConfig {
  return Object.assign(new TabsetConfig(), {
    type: 'pills',
    isKeysAllowed: true,
  });
}

export function getProgressbarConfig(): ProgressbarConfig {
  return Object.assign(new ProgressbarConfig(), {
    animate: true,
    striped: true,
    max: 150,
  });
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  providers: [
    { provide: ProgressbarConfig, useFactory: getProgressbarConfig },
    { provide: TabsetConfig, useFactory: getTabsetConfig },
  ],
})
export class AboutComponent {
  dismissible = true;
  defaultAlerts: any[] = [
    {
      type: 'success',
      msg: `You successfully read this important alert message.`,
    },
    {
      type: 'info',
      msg: `This alert needs your attention, but it's not super important.`,
    },
    {
      type: 'danger',
      msg: `Better check yourself, you're not looking too good.`,
    },
  ];
  alerts = this.defaultAlerts;

  reset(): void {
    this.alerts = this.defaultAlerts;
  }

  onClosed(dismissedAlert: any): void {
    this.alerts = this.alerts.filter((alert) => alert !== dismissedAlert);
  }

  bsInlineValue = new Date();
  bsInlineRangeValue: Date[];
  maxDate = new Date();

  constructor() {
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsInlineRangeValue = [this.bsInlineValue, this.maxDate];
  }

  x = 5;
  y = 2;

  itemObjectsLeft: IItemObject[] = [
    { id: 1, name: 'Windstorm' },
    { id: 2, name: 'Bombasto' },
    { id: 3, name: 'Magneta' },
  ];

  itemObjectsRight: IItemObject[] = [
    { id: 4, name: 'Tornado' },
    { id: 5, name: 'Mr. O' },
    { id: 6, name: 'Tomato' },
  ];

  allowEmptyTime = true;
  myTime?: Date = new Date();
  isValid?: boolean;

  clear(): void {
    this.myTime = void 0;
  }
}
