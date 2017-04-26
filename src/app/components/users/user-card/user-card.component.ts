import {Component, OnInit, Output, Input, EventEmitter} from '@angular/core';
import {IUser} from "../../../shared/interface";
import {DataService} from "../../../shared/services/data.service";
import {NotificationService} from "../../../shared/services/notification.service";

@Component({
  selector: 'shed-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  @Input() user: IUser;
  @Output() userCreated = new EventEmitter();
  @Output() removeUser = new EventEmitter();

  isEdit: boolean = false;

  constructor(public dataService: DataService,
              private notificationService: NotificationService,) {
  }

  ngOnInit() {
    if (this.user.id < 0) {
      this.isEdit = !this.isEdit
    }
  }

  isUserValid(): boolean {
    return !(this.user.name.trim() === "")
      && !(this.user.profession.trim() === "")
      && !(this.user.avatar.trim() === "");
  }

  createUser() {
    this.dataService.createUser(this.user)
      .subscribe((userCreated) => {
          this.isEdit = false;
          this.userCreated.emit(userCreated);
        },
        error => {
          this.notificationService.printErrorMessage('Failed to created user');
          this.notificationService.printErrorMessage(error);
        });
  }

  removeUserModal() {
    this.notificationService.openConfirmationDialog('Are you sure you want to remove '
      + this.user.name + '?',
      () => {
        //this.slimLoader.start();
        this.dataService.deleteUser(this.user.id)
          .subscribe(res => {
            console.log(res);
            this.removeUser.emit(this.user);
            //this.slimLoader.complete();
          }, error => {
            this.notificationService.printErrorMessage(error);
            //this.slimLoader.complete();
          })
      });
  }
}
