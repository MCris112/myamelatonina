import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'textParser'
})
export class TextParserPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string, ...args: unknown[]): unknown {

    if (!value) {
      return value;
    }

    const regex = /\{\{(.*?)\}\}/g;
    const parsedValue = value.replace(regex, (match, p1) => {
      return `<span class="text-secondaryColor">${p1.trim()}</span>`;
    });

    return this.sanitizer.bypassSecurityTrustHtml(parsedValue);
  }

}
