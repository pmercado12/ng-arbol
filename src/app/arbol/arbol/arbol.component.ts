import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-arbol',
  templateUrl: './arbol.component.html',
  styleUrls: ['./arbol.component.css']
})
export class ArbolComponent implements OnInit {

  @Input('elementos')
  private elementos: any[];
  @Input('config')
  private config: any;

  @Output('desplegar')
  private desplegarArbol: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  private abrir(elemento) {
    this.desplegarArbol.emit(elemento);
  }

  


  /*
  [
    {

    }
  ]

  */

}