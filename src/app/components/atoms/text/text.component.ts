import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss'],
})
export class TextComponent implements OnInit {
  @Input() Theme:any  = null;
  @Input() Type:any  = 'p';
  @Input() Label:any  = '';
  
  constructor() { }

  ngOnInit() {
  }

  getLabelWithTag(): string {
    return `<${this.Type}>${this.Label}</${this.Type}>`;
  } 

}
