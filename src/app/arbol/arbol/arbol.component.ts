import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { of } from 'rxjs';
import { ConfigArbol } from '../model/config.model';

@Component({
  selector: 'app-arbol',
  templateUrl: './arbol.component.html',
  styleUrls: ['./arbol.component.css']
})
export class ArbolComponent implements OnInit {

  @Input('elementos')
  private elementos: any[];
  @Input('config')
  private config: ConfigArbol;
  @Output('desplegar')
  private desplegarArbol: EventEmitter<any> = new EventEmitter();

  private estaAbierto: boolean = false;
  private configHijo: ConfigArbol;
  constructor() { }

  ngOnInit() {
    if (this.elementos.length > 0) {
      this.estaAbierto = true;
    }
    if (this.config) {
      this.configHijo = Object.assign({}, this.config);
      if (!this.config.nivel) {
        this.config.nivel = 1;
      }
      this.configHijo.nivel = this.config.nivel + 1;
    }
  }

  private abrir(elemento) {
    this.desplegarArbol.emit(elemento);
  }

  private cerrar(elemento) {
    elemento[this.config.descripcionLista] = [];
    this.estaAbierto = false;
  }
}
