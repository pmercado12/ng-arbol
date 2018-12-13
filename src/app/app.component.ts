import { Component } from '@angular/core';
import { ConfigArbol } from './arbol/model/config.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  elementos = [
    this.getElemento('1', 0),
    this.getElemento('2', 1),
    this.getElemento('3', 4)
  ];
  private config: ConfigArbol;

  constructor() {
    this.config = new ConfigArbol();
    this.config.maximoNivel = 5;
    this.config.descripcionElemento = "descItem";
  }

  private desplegar(elemento: any) {
    let respuesta;
    if (elemento.descripcion == "1") {
      respuesta = this.getElemento(elemento[this.config.descripcionElemento], 0);
    } else if (elemento.descripcion == "2") {
      respuesta = this.getElemento(elemento[this.config.descripcionElemento], 1);
    } else if (elemento.descripcion == "3") {
      respuesta = this.getElemento(elemento[this.config.descripcionElemento], 4);
    } else {
      respuesta = this.getElemento(elemento[this.config.descripcionElemento], Math.floor(Math.random() * 6) + 1);
    }
    elemento.lista = respuesta.lista;
  }

  private getElemento(codigo: string, nroElementos: number) {
    let lista = [];
    for (let i = 1; i <= nroElementos; i++) {
      lista.push({
        descItem: codigo + '.' + i,
        lista: []
      });
    }
    return {
      descItem: codigo,
      lista: lista
    };
  }
}
