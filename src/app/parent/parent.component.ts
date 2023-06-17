import { Component, ViewChild } from '@angular/core';
import { ChildrenComponent } from '../children/children.component';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserService } from "../services/user.service";

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
  providers: [UserService]
})
export class ParentComponent {
  @ViewChild(ChildrenComponent)
  child!: ChildrenComponent;

  constructor(
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private userService: UserService
  ) { }

  angle: number | undefined;

  onAngleChanged(angle: number) {
    this.angle = angle;
  }
}
