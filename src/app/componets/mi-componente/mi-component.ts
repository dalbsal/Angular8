import { Component } from "@angular/core";

@Component({
    selector: 'mi-componente',
    template: `
      <h1>Hola Mundo, soy MI PRIMER COMPONENTE</h1>
      <p>Este es mi componente</p>
    `
})
export class Micomponente{

    constructor(){
        console.log("Componente mi-componente cargado !!");
    }
    
}