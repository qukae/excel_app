import {ExcelComponent} from '@core/ExcelComponent';

export class Header extends ExcelComponent {
  // static className = 'excel__header';
  static className() {
    const name = 'excel__header';
    return name;
  }

  constructor($root, options) {
    super($root, {
      name: 'Header',
      ...options,
    });
  }

  toHTML() {
    return `
    <input type="text" class="input" value="New table" />
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
}
