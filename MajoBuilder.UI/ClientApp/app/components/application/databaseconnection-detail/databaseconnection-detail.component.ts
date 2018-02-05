import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'databaseConnectionDetail',
    templateUrl: './databaseconnection-detail.component.html'
})
export class DatabaseConnectionDetailComponent {
    public databaseConnection: DatabaseConnection;

    constructor(private _http: Http, @Inject('ORIGIN_URL') private _originUrl: string) { }

    public initialize: Function = (databaseConnectionId: string) => {
        this._http.get(this._originUrl + '/api/DatabaseConnection/GetDatabaseConnection?databaseConnectionId=' + databaseConnectionId).subscribe(result => {
            this.databaseConnection = result.json() as DatabaseConnection;
        });
    };
}

