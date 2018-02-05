import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { DatabaseConnectionListComponent } from './components/application/databaseconnection-list/databaseconnection-list.component';
import { DatabaseConnectionDetailComponent } from './components/application/databaseconnection-detail/databaseconnection-detail.component';
import { CommonDetailComponent } from './components/framework/commondetail/commondetail.component';
import { CommonDetailFieldComponent } from './components/framework/commondetailfield/commondetailfield.component';
import { TextComponent } from './components/framework/input/text/text.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { ChartComponent } from './components/chart/chart.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { GridModule } from '@progress/kendo-angular-grid';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { FormsModule } from '@angular/forms';

export const sharedConfig: NgModule = {
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        NavMenuComponent,
        CommonDetailComponent,
        CommonDetailFieldComponent,
        TextComponent,
        DropdownComponent,
        ChartComponent,
        DatabaseConnectionListComponent, DatabaseConnectionDetailComponent,
        HomeComponent
    ],
    imports: [
        ButtonsModule,
        DropDownsModule,
        GridModule,
        ChartsModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'chart', component: ChartComponent },
            { path: 'dropdown', component: DropdownComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
};
