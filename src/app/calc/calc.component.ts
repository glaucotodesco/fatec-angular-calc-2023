import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent {
  num1: number=10;
  num2: number=0;
  soma: number=0;

  somar(){
    this.soma = this.num1 + this.num2;
  }





}
