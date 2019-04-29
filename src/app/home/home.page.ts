import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  altura: number = 0;
  basemenor: number = 0;
  basemaior: number = 0;
  resultado: string;

  calcular(): void {
   let area = (Number(this.basemenor) + Number(this.basemaior)) * Number(this.altura) / 2;
   this.resultado = 'a área do trapezio é:'+area;
 }
}
