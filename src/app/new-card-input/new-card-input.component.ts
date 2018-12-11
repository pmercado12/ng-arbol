import {Component, EventEmitter, HostListener, OnChanges, OnInit, Output, SimpleChanges, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Person} from '../entity/person';

@Component({
  selector: 'app-new-card-input',
  templateUrl: './new-card-input.component.html',
  styleUrls: ['./new-card-input.component.css']
})
export class NewCardInputComponent implements OnInit, OnChanges {
  @Output() onCardAdd = new EventEmitter<Person>();
  @ViewChild('form') public form: NgForm;

  //public newCard: any = {text: ''};

  newCardForm: FormGroup;
  constructor(fb: FormBuilder) {
    this.newCardForm = fb.group({ 'text': ['', Validators.compose([Validators.required, Validators.minLength(6)])], });
  }


  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit() {
  }


  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
      if (event.code === "Enter" && this.newCardForm.valid) {
      console.log(event.code);
      //this.addCard(this.newCard.text);
        let temp = new Person();
        temp.name = this.newCardForm.controls['text'].value;
        this.addCard(temp);
        //this.addCard(this.newCardForm.controls['text'].value);
    }
  }

  public addCard(text) {
    console.log(text);
    this.onCardAdd.emit(text);
    //this.newCard.text = '';
    this.newCardForm.controls['text'].setValue('');
  }



}
