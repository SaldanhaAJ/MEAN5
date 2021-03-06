import { Component, OnInit, AfterViewInit, ViewChild, Input } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Observable} from 'rxjs/Observable';
import {merge} from 'rxjs/observable/merge';
import {of as observableOf} from 'rxjs/observable/of';
import {catchError} from 'rxjs/operators/catchError';
import {map} from 'rxjs/operators/map';
import {startWith} from 'rxjs/operators/startWith';
import {switchMap} from 'rxjs/operators/switchMap';
import {DomSanitizer} from '@angular/platform-browser';
import { MatIconRegistry, MatDialog } from '@angular/material';

import {address } from '../../../address/address.model';
import { EditAddressDialogComponent } from '../../../address/edit-address-dialog.component';
import { PassangerDashboardService } from '../../passanger-dashboard.service';

import { Element, ELEMENT_DATA } from '../../models/GithubApi.interface';




@Component({
  selector: 'app-passanger-list',
  templateUrl: './passanger-list.component.html',
  styleUrls: ['./passanger-list.component.css']
})

export class PassangerListComponent implements OnInit, AfterViewInit {


    displayedColumns = ['firstname', 'lastname', 'address', 'city', 'editcol'];
  
   // exampleDatabase: ExampleHttpDao | null;
    dataSource = new MatTableDataSource();
  

    resultsLength = 0;
    isLoadingResults = false;
    isRateLimitReached = false;
  
    animal: string;
    name: string;
  
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
  

    
   @ViewChild(MatPaginator) paginator2: MatPaginator;
  
    @Input()
    items: Element[];


    displayedColumns2 = ['position', 'name', 'weight', 'symbol'];
    dataSource2 = new MatTableDataSource();
    
  constructor(
    private http: HttpClient, 
    iconRegistry: MatIconRegistry, 
    sanitizer: DomSanitizer,
    private passService: PassangerDashboardService,
    public dialog: MatDialog
  ) {
    iconRegistry.addSvgIconSetInNamespace(
      "action",
      sanitizer.bypassSecurityTrustResourceUrl("assets/svg-icons/svg-sprite-action.svg")
    );

    iconRegistry.addSvgIcon(
      'thumbs-up',
      sanitizer.bypassSecurityTrustResourceUrl('assets/thumbup-icon.svg'));


   }

  ngOnInit() {
    this.dataSource2 = new MatTableDataSource<Element>(this.items);
      
  }


  ngAfterViewInit() {
//    this.exampleDatabase = new ExampleHttpDao(this.http);
    
    this.dataSource2.paginator = this.paginator2;
    
    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    merge(this.sort.sortChange, this.paginator.page)
    
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          console.log (this.passService.getAddresses(
            this.sort.active, this.sort.direction, this.paginator.pageIndex));
          return this.passService.getAddresses(
            this.sort.active, this.sort.direction, this.paginator.pageIndex);
        }),
        map(data => {
          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          this.isRateLimitReached = false;
          this.resultsLength = data.total_count;

          return data.items;
        }),
        catchError(() => {
          this.isLoadingResults = false;
          // Catch if the GitHub API has reached its rate limit. Return empty data.
          this.isRateLimitReached = true;
          return observableOf([]);
        })
      ).subscribe(data => this.dataSource.data = data);
    }
}

/*
export interface GithubApi {
  items: address[];
  total_count: number;

}

export interface GithubIssue {
  created_at: string;
  number: string;
  state: string;
  title: string;
}
export class ExampleHttpDao {
  constructor(private http: HttpClient) {}
  //https://api.github.com/search/issues?q=repo:angular/material2&sort=created&order=asc&page=1
  getRepoIssues(sort: string, order: string, page: number): Observable<GithubApi> {
    const href = 'http://localhost:3000/api/addressesalt';
    const requestUrl =
        `${href}?q=repo:angular/material2&sort=${sort}&order=${order}&page=${page + 1}`;
    console.log (requestUrl);

    return this.http.get<GithubApi>(requestUrl);
  }
}
*/


