import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { TranslateService } from '@ngx-translate/core';
import { setTheme } from 'ngx-bootstrap/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'test';
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('vi');
    translate.use('vi');
    setTheme('bs5'); // or 'bs4'
  }

  onTranslate(code: string) {
    this.translate.setDefaultLang(code);
    this.translate.use(code);
  }
}
