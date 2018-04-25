import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

// Helpers
import { BaseConstants } from '../_helpers/apiEndpoint';
import { header } from '../_helpers/header.helper';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Injectable()
export class UsersService {

  constructor(
    private http: Http
  ) { }

  // Get user list
  getUsersList() {
    return this.http.get(BaseConstants.GETALLUSER, header.head())
      .map((response: Response) => response.json())
      .catch((err: any) => {
        return Observable.throw(err);
      });
  }

  // getById(id: number) {
  //   return this.http.get('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
  // }

  // Create User
  create(user: Object) {
    console.log(user);
    return this.http.post(BaseConstants.CREATEUSER, user)
      .map((response: Response) => response.json())
      .catch((err: any) => {
        return Observable.throw(err);
      });
  }

  // update(user: User) {
  //   return this.http.put('/api/users/' + user.id, user, this.jwt()).map((response: Response) => response.json());
  // }

  // Delete User
  delete(userId: string) {
    return this.http.delete(BaseConstants.DELETEUSER + userId)
      .map((response: Response) => {
        return response.json();
      }).catch((err: any) => {
        return Observable.throw(err);
      });
  }
}
