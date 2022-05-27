import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  
  public position = {
    lat: 19.3174991607666,
    lng: -99.18779754638672
  };

  public label = {
    color: 'red',
    text: 'Marcador'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
