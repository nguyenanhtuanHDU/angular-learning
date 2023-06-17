import { Component, EventEmitter, OnInit, Output, Self, SkipSelf } from '@angular/core';
import { UserService } from "../services/user.service";

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.scss'],
})
export class ChildrenComponent {
  @Output() angleChanged = new EventEmitter<number>();
  angle: number | undefined;

  constructor(@SkipSelf() private userService: UserService){

  }

  ngOnInit() {
    console.log(`🚀 ~ this.userService.getUser():`, this.userService.getUser())
  }

  onAngleChange() {
    this.angleChanged.emit(this.angle);
  }
}
