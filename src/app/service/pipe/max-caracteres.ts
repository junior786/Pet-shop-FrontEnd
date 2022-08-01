import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'maxChar' })
export class MaxChar implements PipeTransform {


  transform(value: any, ...args: any[]) {
    if (value.length > 25) {
      return value.slice(0,22) + '...';
    }
    else {
      return value;
    }
  }

}
