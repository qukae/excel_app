import {ExcelComponent} from '@core/ExcelComponent';
import {$} from '@core/dom';
import {changeTitle} from '../../redux/actions';
import {defaultTitle} from '@/constants';

export class Header extends ExcelComponent {
  // static className = 'excel__header';
  static className() {
    const name = 'excel__header';
    return name;
  }

  constructor($root, options) {
    super($root, {
      name: 'Header',
      listeners: ['input'],
      ...options,
    });
  }

  toHTML() {
    const title = this.store.getState().title || defaultTitle;
    return `
    <input type="text" class="input" value="${title}" />
    <div>
      <div class="button">
        <span class="material-icons"> exit_to_app
      </div>
      <div class="button">
      </span>
      <span class="material-icons"> delete </span>
      </div>
    </div>
    `;
  }

  onInput(event) {
    const $target = $(event.target);
    this.$dispatch(changeTitle($target.text()));
  }
}
