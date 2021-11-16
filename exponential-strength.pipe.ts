import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'exponentialStrength' })
export class ExponentialStrengthPipe implements PipeTransform {
  transform(value: number, exponent: number) {
    return Math.pow(value, exponent);
  }
}
