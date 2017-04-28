import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//routing
import {routing} from "./app.routing";

//components
import { AppComponent } from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {FooterComponent} from './components/footer/footer.component';
import {HomeComponent} from './components/home/home.component';
import {MobileHideDirective} from './shared/mobile-hide.directive';
import {UserListComponent} from './components/users/user-list/user-list.component';
import {UserCardComponent} from './components/users/user-card/user-card.component';
import {SchedulesListComponent} from './components/schedules/schedules-list/schedules-list.component';

//fake api
import {InMemoryDataService} from "./in-memory-web-api";
import {InMemoryWebApiModule} from "angular-in-memory-web-api";

//services
import {DataService} from "./shared/services/data.service";
import {NotificationService} from "./shared/services/notification.service";
import {SlimLoadingBarModule} from "ng2-slim-loading-bar";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    MobileHideDirective,
    UserListComponent,
    UserCardComponent,
    SchedulesListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    BrowserAnimationsModule,
    SlimLoadingBarModule.forRoot(),
    InMemoryWebApiModule.forRoot(InMemoryDataService, {delay: 300}),
  ],
  providers: [
    DataService,
    NotificationService,
    SlimLoadingBarModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
