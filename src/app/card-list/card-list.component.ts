import { Component, OnInit } from '@angular/core';
import {Person} from '../entity/person';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  public cards: Array<Person> = [];

  public addCard(card:Person){
    this.cards.push(card);
  }
  constructor() { }

  ngOnInit() {
  }

}
