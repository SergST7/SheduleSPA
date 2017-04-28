/**
 * Created by SergST on 26.04.2017.
 */

import {InMemoryDbService} from "angular-in-memory-web-api";
import {IUser, ISchedule} from "./shared/interface";

export class InMemoryDataService implements InMemoryDbService {

  createDb() {

    let users: IUser[] = [
      {
        "id": 1,
        "name": "Vladimir Litovka",
        "avatar": "https://randomuser.me/api/portraits/men/45.jpg",
        "profession": "developer",
        "schedulesCreated": 2
      },
      {
        "id": 2,
        "name": "Alexander Pasichnik",
        "avatar": "https://randomuser.me/api/portraits/men/83.jpg",
        "profession": "manager",
        "schedulesCreated": 1
      }
    ]


    let schedules: ISchedule[] = [
      {
        "id": 1,
        "title": "Skype coll",
        "description": "Lorem ipsum dolor sit amet, consectetur",
        "timeStart": new Date("February 4, 2016 10:13:00"),
        "timeEnd": new Date("February 4, 2016 10:13:00"),
        "location": "Office",
        "type": "coll",
        "status": "done",
        "dateCreated": new Date("February 4, 2016 10:13:00"),
        "dateUpdated": new Date("February 4, 2016 10:13:00"),
        "creator": "User",
        "creatorId": 1,
        "attendees": [],
        "statuses": [],
        "types": [],
      }]

    return {
      users,
      schedules
    }
  }
}