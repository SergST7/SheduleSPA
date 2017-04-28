import {Component, OnInit} from '@angular/core';
import {DataService} from "../../../shared/services/data.service";
import {NotificationService} from "../../../shared/services/notification.service";
import {SlimLoadingBarService} from "ng2-slim-loading-bar";
import {ISchedule} from "../../../shared/interface";

@Component({
  selector: 'shed-shedules-list',
  templateUrl: 'schedules-list.component.html',
  styleUrls: ['schedules-list.component.css']
})
export class SchedulesListComponent implements OnInit {
  public schedules: ISchedule[];

  constructor(private dataService: DataService,
              private notificationService: NotificationService,
              private loadingBarService: SlimLoadingBarService) {

  }

  ngOnInit() {
    this.loadSchedules();
  }

  loadSchedules() {
    this.loadingBarService.start();

    this.dataService.getSchedules()
      .subscribe((res: ISchedule[]) => {
          this.schedules = res;// schedules;
          this.loadingBarService.complete();
          console.log(this.schedules);
        },
        error => {
          this.loadingBarService.complete();
          this.notificationService.printErrorMessage('Failed to load schedules. ' + error);
        });
  }
}
