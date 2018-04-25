import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class BlogService {

    constructor(private http: Http) { }

    getBlogList(): Observable<any> {
        return this.http.get('http://localhost:8080/api/getbloglist')
            .map((response: Response) => {
                return response.json();
            }).catch((err: any) => {
                console.log(err);
                return Observable.throw(err);
            });
    }
}
