import { Injectable } from '@angular/core';
import { ParentComponent } from "../parent/parent.component";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(){
    console.log('UserService khoi tao');
  }

  user: any = [
    {
      username: 'a',
      age: 12
    },
    {
      username: 'b',
      age: 23
    },
    {
      username: 'c',
      age: 39
    },
  ]

  getUser() {
    return this.user
  }

}
