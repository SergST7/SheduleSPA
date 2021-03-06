import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {IUser, ISchedule} from "../interface";

@Injectable()
export class DataService {

  private _baseUrl: string = '';

  constructor(private http: Http) {
    this._baseUrl = 'api/';
  }

  getUsers(): Observable<IUser[]> {
    return this.http.get(this._baseUrl + 'users')
      .map((res: Response) => {
        return res.json().data as IUser[];
      })
      .catch(this.handleError);
  }

  createUser(user: IUser): Observable<IUser> {
    console.log(user);
    user.id = null;
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post(this._baseUrl + 'users/', JSON.stringify(user), {
      headers: headers
    })
      .map((res: Response) => {
        console.log(res.json().data);
        return res.json().data;
      })
      .catch(this.handleError);
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete(this._baseUrl + 'users/' + id)
      .map((res: Response) => {
        return res
      })
      .catch(this.handleError);
  }

  updateUser(user: IUser): Observable<void> {

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put(this._baseUrl + 'users/' + user.id, JSON.stringify(user), {
      headers: headers
    })
      .map((res: Response) => {
        return;
      })
      .catch(this.handleError);
  }


  // SCHEDULES

  getSchedules(): Observable<ISchedule[]> {
    return this.http.get(this._baseUrl + 'schedules')
      .map((res: Response) => {
        return res.json().data as ISchedule[];
      })
      .catch(this.handleError);
  }



  private handleError(error: any) {
    var applicationError = error.headers.get('Application-Error');
    var serverError = error.json();
    var modelStateErrors: string = '';

    if (!serverError.type) {
      console.log(serverError);
      for (var key in serverError) {
        if (serverError[key])
          modelStateErrors += serverError[key] + '\n';
      }
    }

    modelStateErrors = modelStateErrors = '' ? null : modelStateErrors;

    return Observable.throw(applicationError || modelStateErrors || 'Server error');
  }
}