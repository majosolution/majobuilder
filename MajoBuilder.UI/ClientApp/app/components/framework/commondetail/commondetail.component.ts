import { Component, Input, ViewContainerRef } from '@angular/core';
import { NoRootTagComponent } from '../noroottag/noroottag.component';

@Component({
    selector: 'commonDetail',
    templateUrl: './commondetail.component.html'
})
export class CommonDetailComponent extends NoRootTagComponent {
    @Input() public detailData: any;

    constructor(vcRef: ViewContainerRef) {
        super(vcRef);
    }
}
