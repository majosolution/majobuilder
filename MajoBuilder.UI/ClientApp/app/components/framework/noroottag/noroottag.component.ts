import { OnInit, TemplateRef, ViewContainerRef, ViewChild } from '@angular/core';

export class NoRootTagComponent implements OnInit {
    @ViewChild('templateref') template;

    constructor(private vcRef: ViewContainerRef) { }

    ngOnInit() {
        this.vcRef.createEmbeddedView(this.template);
    }
}