import { Component, ViewChild } from '@angular/core';
import { ChildrenComponent } from '../children/children.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent {
  @ViewChild(ChildrenComponent) child: ChildrenComponent | undefined;

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngAfterViewInit(): void {
    console.log(this.child);
    if (this.child !== undefined) {
      this.child.count = this.child.count + 1;
    }
  }
  onAdd() {
    console.log(this.child); // run
    if (this.child !== undefined) {
      this.child.count = this.child.count + 1;
    }
  }
}
