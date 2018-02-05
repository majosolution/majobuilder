import { Component, ViewContainerRef, Input } from '@angular/core';
import { NoRootTagComponent } from '../../noroottag/noroottag.component';

@Component({
    selector: 'text',
    templateUrl: './text.component.html'
})
export class TextComponent {
    @Input() public value: string;
    @Input() public dataobject: any;
    @Input() public property: string;


}
