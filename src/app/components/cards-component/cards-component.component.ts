import {Component, OnInit} from '@angular/core';
import {ShareData} from '../shareData.service';
import {MomentModule} from 'angular2-moment';
import {trigger, transition, style, animate, state} from '@angular/animations';

@Component({
  selector: 'el-cards-component',
  templateUrl: './cards-component.component.html',
  styleUrls: ['./cards-component.component.scss'],
  animations: [
    trigger(
      'Animation',
      [
        transition(
          ':enter', [
            style({transform: 'translateX(100%)', opacity: 0}),
            animate('500ms', style({transform: 'translateX(0)', 'opacity': 1}))
          ]
        ),
        transition(
          ':leave', [
            style({transform: 'translateX(0)', 'opacity': 1}),
            animate('500ms', style({transform: 'translateX(100%)', 'opacity': 0}))
          ]
        )]
    )
  ]
})
export class CardsComponentComponent implements OnInit {
  dataCard: any;

  constructor(private shareData: ShareData) {
  }

  ngOnInit() {
    this.shareData.currentMessage.subscribe(data => this.updateData(data));
    localStorage['sendData'] ? this.dataCard = JSON.parse(localStorage['sendData']) : this.dataCard = null;
  }

  updateData(data) {
    this.dataCard = data;
  }
}
