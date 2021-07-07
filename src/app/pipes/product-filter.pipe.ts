import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filterProducts' })
export class FilterProductsPipe implements PipeTransform {
  transform(allProducts: any[], name: string) {
    if (name && name !== '') {
      return allProducts.filter((obj)=>{
        return Object.keys(obj).reduce((acc)=>{
              return acc || obj['name'].toLowerCase().includes(name);
        }, false);
   });
    } else {
      return allProducts;
    }
  }
}
