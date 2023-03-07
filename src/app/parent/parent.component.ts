import { Component, ViewChild } from '@angular/core';
import { ChildrenComponent } from '../children/children.component';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent {
  @ViewChild(ChildrenComponent)
  child!: ChildrenComponent;

  constructor(
    private toastr: ToastrService,
    private spinner: NgxSpinnerService
  ) {}
  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  // ngAfterViewInit(): void {
  //   this.toastr.success('Hello world!', 'Toastr fun!');
  //   console.log(this.child);
  //   if (this.child !== undefined) {
  //     this.child.count = this.child.count + 1;
  //   }
  // }
  onAdd() {
    this.toastr.success('Hello world!', 'Toastr fun!');
    console.log(this.child); // run
    if (this.child !== undefined) {
      this.child.count = this.child.count + 1;
    }
  }

  show() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 3000);
  }
}
