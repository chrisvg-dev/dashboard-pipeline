import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'alcaldias',
  templateUrl: './alcaldias.component.html',
  styleUrls: ['./alcaldias.component.css']
})
export class AlcaldiasComponent implements OnInit {
  @Input('data') alcaldias: any = [];

  constructor() { }

  ngOnInit(): void {
  }

}
