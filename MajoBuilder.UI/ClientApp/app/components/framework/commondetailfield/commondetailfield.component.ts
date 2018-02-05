import { Component, Input, ViewContainerRef } from '@angular/core';
import { NoRootTagComponent } from '../noroottag/noroottag.component';

@Component({
    selector: 'commondetailfield',
    templateUrl: './commondetailfield.component.html'
})
export class CommonDetailFieldComponent extends NoRootTagComponent {
    @Input('name') public name: string;
    @Input('item') public item: any;

    constructor(vcRef: ViewContainerRef) {
        super(vcRef);
    }
}
