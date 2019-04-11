import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
 name: 'shorten'
})
export class ShortenPipe implements PipeTransform {
  // {{ value | shorten: 10}}
  transform( value: any, limit: number) {
    // give back 10 characters starting from index 0
    return value.length > 10 ? value.substr(0, limit) + '...' : value ;
  }
}

@Pipe({
 name: 'filter',
 pure: false
})
export class FilterPipe implements PipeTransform {
  // {{ value | shorten: 10}}
  transform( value: any, filterString: string, propName: string) {

    if (value.length === 0 || filterString === '' ) {
      return value;
    }
    for ( const item of value) {
      const resultArray = [];
      if (item[propName] === filterString) {
        resultArray.push(item);
      }

      return resultArray;
    }
  }
}


