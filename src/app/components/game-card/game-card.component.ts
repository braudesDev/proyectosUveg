import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IGame } from '../../interfaces/game/game.interface';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent implements OnInit {
  @Input() game: IGame;
  @Output() buyEvent: EventEmitter<IGame> = new EventEmitter<IGame>();
  @Output() notInterestedEvent: EventEmitter<string> = new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {
  }
  OnBuy() {
    this.buyEvent.emit(this.game);
  }


  OnNotInterested() {
    this.notInterestedEvent.emit('No estoy interesado')
  }

}
