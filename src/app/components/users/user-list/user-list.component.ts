import {Component, OnInit} from '@angular/core';
import {IUser} from "../../../shared/interface";
import {DataService} from "../../../shared/services/data.service";

@Component({
  selector: 'shed-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: IUser[];
  addingUser: boolean = false;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.getUsers()
      .subscribe((users: IUser[]) => {
          this.users = users;
          console.log(users)
        },
        error => {
          console.log('Failed to load users. ' + error);
        });
  }

  addUser() {
    this.addingUser = true;
    var newUser = {
      id: -1,
      name: '',
      avatar: 'https://randomuser.me/api/portraits/lego/5.jpg',
      profession: '',
      schedulesCreated: 0
    };
    this.users.splice(0, 0, newUser);
  }

  cancelAddUser() {
    this.addingUser = false;
    this.users.splice(0, 1);
  }

}
