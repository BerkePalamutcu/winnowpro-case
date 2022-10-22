import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  /*here math random may return a number between 0 inclusive and 1 exclusive
	if the number is 0 it can show no cards so I change the code so that there will
	always be cards showing up no matter what number there is
	*/
  cards = new Array(Math.floor(Math.random() * 15) + 1).fill({});

  ngOnInit(): void {}
}
