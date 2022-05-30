import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {
  @Input("data") dataTable: any = []; 

  constructor() { }

  ngOnInit(): void {
    console.log(this.dataTable)
  }

}
