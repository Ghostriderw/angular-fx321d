import { Component, OnInit, Input } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil-component',
  templateUrl: './appareil-component.component.html',
  styleUrls: ['./appareil-component.component.css']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName: string;
  @Input() appareilStatus: string;
  @Input() index: number;
  @Input() isAuth: boolean = false;

  constructor(private appareilService: AppareilService) { }

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

onSwitch() {
    if(this.appareilStatus === 'Plein') {
      this.appareilService.switchOffOne(this.index);
    } else if(this.appareilStatus === 'Vide') {
      this.appareilService.switchOnOne(this.index);
    }
}


}