import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import {Passanger} from './models/passanger.interface'
import {HttpClient} from '@angular/common/http';

import {GithubApi} from './models/GithubApi.interface';


const PASSANGER_API: string = '/api/passengers';


@Injectable()
export class PassangerDashboardService {
 
  
  
  constructor(
    private http: Http, 
    private httpClient: HttpClient
  ) { 
  

  }

  deletePassanger(passanger: Passanger): Observable<Passanger>{
    return this.http
      .delete("/api/passengers" + "/" + passanger._id)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json()));
  }

  
  updatePassanger(passanger: Passanger): Observable<Passanger>{
    return this.http
      .put("/api/passengers" + "/" + passanger.id,passanger)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json()));
  }

  getPassangers(): Observable<Passanger[]>{
    return this.http
      .get("/api/passengers")
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json()));
  }

  getPassanger(id: number): Observable<Passanger>{
    return this.http
      .get(PASSANGER_API + "/" + id)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json()));
  }

  getAddresses(sort: string, order: string, page: number): Observable<GithubApi> {
      const href = 'http://localhost:3000/api/addressesalt';
      const requestUrl =
          `${href}?q=repo:angular/material2&sort=${sort}&order=${order}&page=${page + 1}`;
     // console.log (requestUrl);
  
      return this.httpClient.get<GithubApi>(requestUrl);
  
  }
}
