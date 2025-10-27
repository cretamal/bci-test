import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textWrapper'
})
export class TextWrapperPipe implements PipeTransform {

  transform(value: string, limit: number = 120, ellipsis: boolean = true): string {
    if (!value) return '';
    if (value.length <= limit) return value;

    const truncated = value.substring(0, limit).trim();
    return ellipsis ? `${truncated}…` : truncated;
  }

}
