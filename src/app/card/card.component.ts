import {Component, Input, OnInit} from '@angular/core';
import {Router, Routes} from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {


  @Input() card:any;

  constructor(private router:Router) { }

  ngOnInit() {
  }
  public sendCard() {
    this.router.navigate(['/detail', {name: this.card.name, age: this.card.age}]);
  }

}

