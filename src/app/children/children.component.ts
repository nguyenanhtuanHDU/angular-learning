import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.scss'],
})
export class ChildrenComponent implements OnInit {
  count = 1;

  ngOnInit() {
    console.log('run');
  }

  add() {
    this.count += 1;
  }
}
