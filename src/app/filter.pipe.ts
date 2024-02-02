import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(value: any[], keyword: string): any[] {
    if (!keyword) return value;
    return value.filter(task => task.name.toLowerCase().includes(keyword.toLowerCase()));
  }
}