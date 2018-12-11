import { Component, OnInit } from '@angular/core';
import {Person} from '../entity/person';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {

public card: Person;

constructor(private router: ActivatedRoute) {
  this.card = new Person();
}

ngOnInit() {
  this.card.name = this.router.snapshot.paramMap.get('name');
  this.card.age = +this.router.snapshot.paramMap.get('age');
}

  notAllowedAge() {
    if (this.card.age < 18) return true;
    else return false;
  }
}
