import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejemplo 123';
  elementos = [
    this.getElemento('1', 0),
    this.getElemento('2', 1),
    this.getElemento('3', 4)
  ];
  config = {};

  private desplegar(elemento: any) {
    console.log(elemento);
  }

  private getElemento(codigo: string, nroElementos: number) {
    let lista = [];
    for (let i = 1; i <= nroElementos; i++) {
      lista.push({
        descripcion: codigo + '.' + i,
        lista: []
      });
    }
    return {
      descripcion: codigo,
      lista: lista
    };
  }
}
