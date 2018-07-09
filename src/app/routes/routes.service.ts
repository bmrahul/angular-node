import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RoutesService {
  private actionUrl: string;
  private headers: Headers;
  private options: RequestOptions;
  constructor(public _http: Http) {
    this.actionUrl = 'http://localhost:4600';
  }

  get(): Observable<any> {
    return this._http.get(this.actionUrl + '/api/routes')
      .pipe(
        map(res => this.extractData(res)),
        catchError(this.handleError)
      );
  }

  private extractData(res: Response) {
    return res.json();
  }

  private handleError(error: Response) {
    console.log('Error', error);
    return throwError(error.json().error || 'Server error');
  }
}
