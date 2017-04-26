import {Component, OnInit, Input} from '@angular/core';
import {IUser} from "../../../shared/interface";

@Component({
  selector: 'shed-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  @Input() user: IUser;

  constructor() {
  }

  ngOnInit() {
  }

}
