import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'string'
})
export class StringPipe implements PipeTransform {

  transform(value: string, option: any, args?: any): string {

    let newStr: string = '';

    switch (option) {
      case 'reverse':
        for (let i = value.length - 1; i >= 0; i--) {
          newStr += value.charAt(i);
        }
        break;

      case 'firstCap':
        if (value) {
          newStr = value.charAt(0).toUpperCase() + value.slice(1);
        }
        break;

        case 'sentenceCap':
        if (value) {
          const rg = /(^\w{1}|\.\s*\w{1})/gi;
          newStr = value.replace(rg, function(toReplace) {
            return toReplace.toUpperCase();
          });
          // newStr = value.charAt(0).toUpperCase() + value.slice(1);
        }
        break;

      case 'capAllWords':
        if (value) {
          newStr = value.replace(/\b\w/g, first => first.toLocaleUpperCase());
        }
        break;

      case 'noSpaces':
        if (value) {
          newStr = value.replace(/ /g, '');
        }
        break;

      case 'truncate':
        if (value) {
          const limit = args.length > 0 ? parseInt(args[0], 10) : 10;
          const trail = args.length > 1 ? args[1] : '...';
          newStr = value.length > limit ? value.substring(0, limit) + trail : value;
        }
        break;

      default:
        break;
    }



    return newStr;
  }

}
