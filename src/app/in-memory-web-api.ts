/**
 * Created by SergST on 26.04.2017.
 */

import {InMemoryDbService} from "angular-in-memory-web-api";
import {IUser} from "./shared/interface";

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

    return {
      users
    }
  }
}