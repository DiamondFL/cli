import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'force'
})
export class ForcePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
