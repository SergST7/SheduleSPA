/**
 * Created by SergST on 24.04.2017.
 */

import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {UserListComponent} from "./components/users/user-list/user-list.component";
import {SchedulesListComponent} from "./components/shedules/shedules-list/shedules-list.component";


const appRoutes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'users', component: UserListComponent},
  {path: 'schedules', component: SchedulesListComponent},
  // { path: 'schedules/:id/edit', component: ScheduleEditComponent },
  {path: 'home', component: HomeComponent}
];

export const routing = RouterModule.forRoot(appRoutes);