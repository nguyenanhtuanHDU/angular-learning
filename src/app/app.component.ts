import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { setTheme } from 'ngx-bootstrap/utils';
import { PostService } from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'test';
  users = [
    {
      name: '1',
    },
    {
      name: '2',
    },
    {
      name: '3',
      city: ['thanh hoa', 'nghe an', 'ha tinh'],
    },
    {
      name: '4',
      city: ['thanh hoa', 'nghe an', 'ha tinh'],
    },
  ];
  count = 0;
  constructor(
    private translate: TranslateService,
    private postService: PostService
  ) {
    translate.setDefaultLang('vi');
    translate.use('vi');
    setTheme('bs5'); // or 'bs4'
  }

  onTranslate(code: string) {
    this.translate.setDefaultLang(code);
    this.translate.use(code);
  }

  loginFacebook() {
    this.postService.loginFacebook().subscribe((data) => {
      console.log(`🚀 ~ data:`, data);
    });
  }
}
