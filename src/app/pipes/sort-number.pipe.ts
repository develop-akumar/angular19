import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortNumber'
})
export class SortNumberPipe implements PipeTransform {

  transform(value: number[], order: 'asc' | 'desc'): number[] {
    if (order === 'asc') {
      return value.sort((a, b) => a - b)
    }
    else if (order === 'desc') {
      return value.sort((a, b) => b - a)
    }
    return value;
  }

}
