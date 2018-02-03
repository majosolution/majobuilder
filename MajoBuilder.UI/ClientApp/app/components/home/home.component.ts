import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { DatabaseConnectionDetailComponent } from '../databaseconnection-detail/databaseconnection-detail.component';

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent {
    public databases: DatabaseConnection[];

    constructor(http: Http, @Inject('ORIGIN_URL') originUrl: string) {
    }
}

interface DatabaseConnection {
    DatabaseConnectionID: string;
    DatabaseConnectionName: string;
    DatabaseConnectionString: string;
}
