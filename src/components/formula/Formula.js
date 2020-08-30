import {ExcelComponent} from '@core/ExcelComponent';

export class Formula extends ExcelComponent {
  static className() {
    const name = 'excel__formula'
    return name;
     }

  toHTML() {
    return `
    <div class="info">fx</div>
    <div class="input" contenteditable spellcheck="false"></div>
    `
  }
}
