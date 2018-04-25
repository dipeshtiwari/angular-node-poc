import { Headers, RequestOptions, Response } from '@angular/http';

export const header = Object.freeze({
  // private helper methods
  head() {
     // create authorization header with token
     let currentUser;
     currentUser = JSON.parse(localStorage.getItem('currentUser'));
     let headers;
     headers = new Headers();
     if (currentUser && currentUser.token) {
         headers.append('authToken', currentUser.token );
     }
     headers.append('Content-Type', 'application/json');
      return new RequestOptions({ headers: headers });
  }
});
