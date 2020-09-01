import {ExcelComponent} from '@core/ExcelComponent';
import {createTable} from '@/components/table/table.template';

export class Table extends ExcelComponent {
  constructor($root) {
    super($root, {
      listeners: ['click', 'mousedown', 'mousemove', 'mouseup'],
    });
  }

  // static className = 'excel__table';
  static className() {
    const name = 'excel__table';
    return name;
  }

  toHTML() {
    return createTable();
  }

  // onClick() {
  //   console.log('click');
  // }

  // onMousedown(event) {
  //   console.log('mousedown', event.target);
  // }
  // onMousemove() {
  //   console.log('mousemove');
  // }

  // onMouseup() {
  //   console.log('mouseup');
  // }
}
