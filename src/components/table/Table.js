import {ExcelComponent} from '@core/ExcelComponent';
import {createTable} from '@/components/table/table.template';

export class Table extends ExcelComponent {
  // static className = 'excel__table';
  static className() {
    const name = 'excel__table';
    return name;
  }

  toHTML() {
    return createTable();
  }
}
