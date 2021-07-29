import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.css'],
})
export class MessageComponent implements OnInit {
    @Input() type: string;
    @Input() message: string;
    title: string;

    ngOnInit(): void {
        if (this.type == "") this.type = "info";
        this.title = this.type[0].toUpperCase() + this.type.substring(1)
    }
}
