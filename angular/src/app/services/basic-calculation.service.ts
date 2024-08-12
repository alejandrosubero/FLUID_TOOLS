import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasicCalculationService {

  constructor() { }

  
  rulerThree(valor: number, valor100: number): number {
    return (valor * 100) / valor100;
}


linearInterpolation(x: number, x1: number, x2: number, y1: number, y2: number): number {
  const media = (y2 - y1) / (x2 - x1);
  return media * (x - x1) + y1;
}



}
