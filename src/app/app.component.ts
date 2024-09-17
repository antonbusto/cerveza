import { Component } from '@angular/core';

// import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { Cerveza } from './models/cerveza';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = "Mi lista con Angular";

   cervezaArray: Cerveza[] = [
  { id: 1, nombre: "1906 Reserva Especial", marca: "Estrella Galicia" },
  { id: 2, nombre: "1906 Red Vintage", marca: "Estrella Galicia" },
  { id: 3, nombre: "1906 Black Coupage", marca: "Estrella Galicia" },
  { id: 4, nombre: "1906 Galician Iris Red", marca: "Estrella Galicia" }
  ];
  selectedCerveza = new Cerveza();
  OpenForEdit(cerveza: Cerveza) {
    // mostrar la cerveza seleccionada
    this.selectedCerveza = cerveza;
    }  
  addOrEdit() {
    // editar el elemento selecionado
    if (this.selectedCerveza.id === 0) {
    this.selectedCerveza.id = this.cervezaArray.length + 1;
        // no permitir entradas vacías
        if (this.selectedCerveza.nombre !== "" && this.selectedCerveza.marca !== "") {
          // solo añade al array del cervezas si contiene datos  
          this.cervezaArray.push(this.selectedCerveza);
          }
    }

    // dejamos los inputs en blanco
    this.selectedCerveza = new Cerveza();
    }
  delete() {
    // para borrar la cerveza seleccionada de la lista
      if (confirm('¿Realmente quieres borrar la cerveza ' + this.selectedCerveza.nombre + " de la lista?")) {
      this.cervezaArray = this.cervezaArray.filter (x => x != this.selectedCerveza);
      this.selectedCerveza = new Cerveza();
      }
      }
}