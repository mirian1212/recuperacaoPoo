import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  raio: number;
  pi: number = 3.14;
  area: string;

  calcular(): void {
   let area = (Number(this.raio)* Number(this.raio)) * Number(this.pi);
   this.area = 'a área do circulo é: '+area;
 }
}
