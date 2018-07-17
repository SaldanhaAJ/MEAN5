import { Component } from '@angular/core';

// Import the DataService
import { DataService } from './data.service';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    // Define a users property to hold our user data
    users: Array<any>;
    routeLinks: any[];
    activeLinkIndex = -1;
    
    // Create an instance of the DataService through dependency injection
    constructor(private _dataService: DataService, private router: Router, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {

        this.routeLinks = [
            {
                label: 'Home',
                link: './home',
                index: 0
            }, {
                label: 'Items',
                link: './itemlist',
                index: 1
            }, {
                label: 'Addresses',
                link: './addresses',
                index: 2
            }, {
                label: 'Tables',
                link: './indextables',
                index: 3
            }, {
                label: 'Emitters',
                link: './indexemitters',
                index: 3
            }, {
                label: 'Overlays',
                link: './indexoverlays',
                index: 4
            },
            {
                label: 'Passengers',
                link: './indexpassengers',
                index: 4
            }        ];

    }

    ngOnInit() {
        this.router.events.subscribe((res) => {
            this.activeLinkIndex = this.routeLinks.indexOf(this.routeLinks.find(tab => tab.link === '.' + this.router.url));
        });
    }      
}