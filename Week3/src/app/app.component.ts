import { Component } from '@angular/core';

export class PlayingCard {
  cardVal: string;
  suit: string;
}

@Component({
  selector: 'app-root',
  // Multi-line content allowed with back ticks.
  template: `<h1>Hello world!  {{title}} <br/>
    {{card.cardVal}} of {{card.suit}}.</h1>
  Card: <input [(ngModel)]="card.cardVal"><br>
  Suit: <input [(ngModel)]="card.suit">`
})

export class AppComponent {
  public title = 'This is Angular 4!';

  // Declare a PlayingCard object.
  public card: PlayingCard = {
    cardVal: 'Ace',
    suit: 'Spades'
  };
}
