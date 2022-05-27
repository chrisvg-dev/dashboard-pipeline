import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input('position') position: any = [];
  @Input('data') data: any = [];

  public label = {
    color: 'red',
    text: 'Marcador'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
