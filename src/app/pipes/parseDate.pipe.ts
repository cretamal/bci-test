import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({
  name: 'parseDate'
})
@Injectable()
export class ParseDatePipe implements PipeTransform {
  transform(value: string): Date | null {
    if (!value) return null;

    const parts = value.split('-');
    if (parts.length !== 3) return null;

    const year = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1; // Mes 0-indexed
    const day = parseInt(parts[2], 10);

    return new Date(year, month, day);
  }
}
