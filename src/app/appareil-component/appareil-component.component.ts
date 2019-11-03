import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-appareil-component',
  templateUrl: './appareil-component.component.html',
  styleUrls: ['./appareil-component.component.css']
})
export class AppareilComponentComponent implements OnInit {

  @Input() appareilName: string;
   @Input() appareilStatus: string;
  ;

  constructor() { }

  ngOnInit() {
  }

  getStatus() {
    return this.appareilStatus;
  }

  getColor() {
    if(this.appareilStatus === 'Plein') {
      return 'green';
    } else if(this.appareilStatus === 'Vide') {
      return 'red';
    }
}

}