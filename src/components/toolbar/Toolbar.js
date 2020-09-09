import {ExcelStateComponent} from '@core/ExcelStateComponent';
import {$} from '@core/dom';
import {createToolbar} from './toolbar.template';
import {defaultStyles} from '../../constants';

export class Toolbar extends ExcelStateComponent {
  static className() {
    const name = 'excel__toolbar';
    return name;
  }

  constructor($root, options) {
    super($root, {
      name: 'Toolbar',
      listeners: ['click'],
      subscribe: ['currentStyles'],
      ...options,
    });
  }

  prepare() {
    this.initState(defaultStyles);
  }

  get template() {
    return createToolbar(this.state);
  }

  toHTML() {
    return this.template;
  }

  storeChanged(changes) {
    this.setState(changes.currentStyles);
  }

  onClick(event) {
    const $target = $(event.target);
    if ($target.data.type === 'button') {
      const value = JSON.parse($target.data.value);
      this.$emit('toolbar:applyStyle', value);
    }
  }
}
