import {Component, OnInit} from '@angular/core';
import {IUser} from "../../../shared/interface";
import {DataService} from "../../../shared/services/data.service";
import {NotificationService} from "../../../shared/services/notification.service";

import * as _ from 'lodash';

@Component({
  selector: 'shed-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: IUser[];
  addingUser: boolean = false;

  constructor(private dataService: DataService,
              private notificationService: NotificationService) {
  }

  ngOnInit() {
    this.dataService.getUsers()
      .subscribe((users: IUser[]) => {
          this.users = users;
          console.log(users)
        },
        error => {
          this.notificationService.printErrorMessage('Failed to load users. ' + error);
        });
  }

  addUser() {
    this.addingUser = true;
    var newUser = {
      id: -1,
      name: '',
      avatar: `https://randomuser.me/api/portraits/men/${this.randomInteger(0, 99)}.jpg`,
      profession: '',
      schedulesCreated: 0
    };
    this.users.splice(0, 0, newUser);
  }

  cancelAddUser() {
    this.addingUser = false;
    this.users.splice(0, 1);
  }

  randomInteger(min, max) {
    let rand = min + Math.random() * (max - min);
    rand = Math.round(rand);
    return rand;
  }

  userCreated(user: any) {
    this.addingUser = false;
    this.notificationService.printSuccessMessage(user.name + ' has been created');
    console.log(user);
  }

  userRemoved(user: any) {
    _.remove(this.users, user);
    // inform user
    this.notificationService.printSuccessMessage(user.name + ' has been removed');
  }
}
