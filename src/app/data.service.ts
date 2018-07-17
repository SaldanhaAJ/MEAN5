import { Injectable } from '@angular/core';

//import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { address } from './address//address.model';


import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
@Injectable()
export class DataService {
    errorMessage: any;
    result: any;
    _temp: string;
    private _productURL ='./address/addresses.json';
    
    constructor(private _http: HttpClient) { }

    getAddresses() : Observable<address[]>{
        return this._http.get<address[]>("/api/addresses");
    }


    getAddresses4() : Observable<address[]>{
        return this._http.get<address[]>("/api/addresses");
    }


    getAddresses3() : Observable<address[]>{
        return this._http.get<address[]>("/api/addresses")
        .do(data => console.log('All: ' + JSON.stringify(data))
        )


    }

    getProducts(): Observable<address[]> {
        this._http.get<address[]>("/api/addresses")
        .do((data => this._temp = JSON.stringify(data)))
        .do(data => console.log('All: ' + JSON.stringify(data)))
        .catch(this.handleError);

        
        return this._http.get<address[]>("/api/addresses")
        .do(data => console.log('All: ' + JSON.stringify(data)))
        .catch(this.handleError);
    }


    private handleError(err: HttpErrorResponse) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage = '';
        if (err.error instanceof Error) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return Observable.throw(errorMessage);
    }


  

    getUsers() {
/*
        return this._http.get("/api/users")
            .map(result => this.result = result.json().data);
*/
        return this._http.get("/api/items")
//        .map(result => this.result = result.json().data);
    }

    updateItem (item: any): Observable<any> {
        let body = JSON.stringify(item);
        return this._http.put('/api/edititem/' + item._id, body, httpOptions);
        
//        return this._http.put("/api/edititem", item, httpOptions).pipe(
//            catchError(this.handleError<any>('addHero'))
//          );

       }




}