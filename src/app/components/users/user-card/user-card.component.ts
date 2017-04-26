import {Component, OnInit, Output, Input, EventEmitter} from '@angular/core';
import {IUser} from "../../../shared/interface";
import {DataService} from "../../../shared/services/data.service";

@Component({
  selector: 'shed-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  @Input() user: IUser;
  @Output() userCreated = new EventEmitter();

  isEdit: boolean = false;

  constructor(public dataService: DataService) {
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
      });
  }
}
