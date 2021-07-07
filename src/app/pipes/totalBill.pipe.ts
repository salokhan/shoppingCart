import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';


@Pipe({ name: 'totalBill' })
export class TotalBillPipe implements PipeTransform {
  transform(allProducts: any) {
    // const aggregates: Observable<any[]> = allProducts.map((valuesList:any) => valuesList
    //     .map((x:any) => ({ name: x.name, value: x.value }))
    //     .sort((a:any, b:any) => a.name.localeCompare(b.name))
    //     .reduce((pre:any, cur:any) => {
    //         const len = pre.length - 1;

    //         if (pre[len] && pre[len].name === cur.name) {
    //             pre[len].price += cur.price;
    //             return pre;
    //         }
    //         pre[len + 1] = cur;
    //         return pre;
    //     }, [])
    // );
    return allProducts;

  }
}
