/**
 * Created by SergST on 26.04.2017.
 */

export interface IUser {
  id: number;
  name: string;
  avatar: string;
  profession: string;
  schedulesCreated: number;
}

export interface ISchedule {
  id: number;
  title: string;
  description: string;
  timeStart: Date;
  timeEnd: Date;
  location: string;
  type: string;
  status: string;
  dateCreated: Date;
  dateUpdated: Date;
  creator: string;
  creatorId: number;
  attendees: IUser[];
  statuses: string[];
  types: string[];
}
