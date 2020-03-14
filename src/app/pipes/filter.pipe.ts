import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, substr?: string, lang?: string): unknown {
    if (substr) {
      return value.filter(architect => {
        if (architect[lang].name.toLowerCase().includes(substr.toLowerCase())) {
          return true;
        }
        return false;
      });
    }
    return value;
  }

}
