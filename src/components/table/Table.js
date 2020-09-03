import {ExcelComponent} from '@core/ExcelComponent';
import {createTable} from '@/components/table/table.template';
// import {$} from '@core/dom';
import {resizeHandler} from '@/components/table/table.resize.js';
import {shouldResize} from '@/components/table/table.functions.js';


export class Table extends ExcelComponent {
  constructor($root) {
    super($root, {
      listeners: ['mousedown'],
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

  onClick() {
    console.log('click');
  }

  onMousedown(event) {
    if (shouldResize(event)) {
      resizeHandler(this.$root, event);
    }
  }
  onMousemove() {
    console.log('mousemove');
  }

  onMouseup() {
    console.log('mouseup');
  }
}
