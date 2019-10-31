import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil-component',
  templateUrl: './appareil-component.component.html',
  styleUrls: ['./appareil-component.component.css']
})
export class AppareilComponentComponent implements OnInit {

  appareilName: string = 'Kraber';
  appareilStatus: string = 'chargé';

  constructor() { }

  ngOnInit() {
  }

  getStatus() {
    return this.appareilStatus;
  }

}