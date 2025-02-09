import {ExcelComponent} from '@core/ExcelComponent';
import {$} from '@core/dom';
import {changeTitle} from '../../redux/actions';
import {defaultTitle} from '@/constants';
import {ActiveRoute} from '../../core/ActiveRoute';

export class Header extends ExcelComponent {
  // static className = 'excel__header';
  static className() {
    const name = 'excel__header';
    return name;
  }

  constructor($root, options) {
    super($root, {
      name: 'Header',
      listeners: ['input', 'click'],
      ...options,
    });
  }

  toHTML() {
    const title = this.store.getState().title || defaultTitle;
    return `
    <input type="text" class="input" value="${title}" />
    <div>
      <div class="button" data-button="exit">
        <span class="material-icons" data-button="exit"> exit_to_app
      </div>
      <div class="button" data-button="remove">
      </span>
      <span class="material-icons" data-button="remove"> delete </span>
      </div>
    </div>
    `;
  }

  onClick(event) {
    const $target = $(event.target);

    if ($target.data.button === 'remove') {
      const decision = confirm('Do u rly wanna del this tab?');
      if (decision) {
        localStorage.removeItem('excel:' + ActiveRoute.param);
        ActiveRoute.navigate('');
      }
    } else if ($target.data.button === 'exit') {
      ActiveRoute.navigate('');
    }
  }

  onInput(event) {
    const $target = $(event.target);
    this.$dispatch(changeTitle($target.text()));
  }
}
