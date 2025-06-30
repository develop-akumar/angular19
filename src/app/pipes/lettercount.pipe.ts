import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lettercount'
})
export class LettercountPipe implements PipeTransform {

  transform(value: string): number {

    
    let count: number = 0
    if (String(value)) {
      for (let ch of value) {
        // if((ch >='a' && ch <='z') || (ch>='A' && ch <= 'Z') ){
        //   count++
        // }
        
        if (/[a-zA-Z]/.test(ch)) {
          count++
        }
      }


    }
    return count;
  }

}
