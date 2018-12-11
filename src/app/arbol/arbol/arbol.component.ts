import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { of } from 'rxjs';

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

  private estaAbierto: boolean = false;
  constructor() { }

  ngOnInit() {
    if (this.elementos.length > 0) {
      this.estaAbierto = true;
    }
    if (!this.config.nivel) {
      this.config.nivel = 1;
    } else {
      this.config.nivel++;
    }
  }

  private abrir(elemento) {
    this.desplegarArbol.emit(elemento);
  }

  private cerrar(elemento) {
    elemento.lista = [];
    this.estaAbierto = false;
  }




  /*
  [
    {

    }
  ]

  */

}
