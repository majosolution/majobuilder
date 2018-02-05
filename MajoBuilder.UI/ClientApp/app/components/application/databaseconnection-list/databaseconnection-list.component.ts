import { Component, Inject, ViewChild } from '@angular/core';
import { Http } from '@angular/http';
import { DatabaseConnectionDetailComponent } from '../databaseconnection-detail/databaseconnection-detail.component';

@Component({
    selector: 'databaseConnectionList',
    templateUrl: './databaseconnection-list.component.html'
})
export class DatabaseConnectionListComponent {
    public databases: DatabaseConnection[];

    @ViewChild('databaseConnectionDetail')
    public databaseConnectionDetail: DatabaseConnectionDetailComponent;

    public buttonClick = (id: string) => {
        this.databaseConnectionDetail.initialize(id);
    }

    constructor(http: Http, @Inject('ORIGIN_URL') originUrl: string) {
        http.get(originUrl + '/api/DatabaseConnection/GetDatabaseConnections')
            .subscribe(result => {
                this.databases = result.json() as DatabaseConnection[];
            });
    }
}
