import {Page} from '@core/Page';
import {$} from '@core/dom';


export class DashboardPage extends Page {
  getRoot() {
    return $.create('div', 'db').html(`
    <div class="db__header">
    <h1>Excel db</h1>
  </div>

  <div class="db__new">
    <div class="db__view">
    <a href="#" class="db__create">
      New <br> table
    </a>
  </div>
  </div>
  <div class="db_table db__view">

    <div class="db__list-header">
      <span>Table name</span>
      <span>Opening date</span>
    </div>

    <ul class="db__list">
      <li class="db__record">
        <a href="#">Table num.1</a>
        <strong>dd.mm.yyyy</strong>
      </li>
      <li class="db__record">
        <a href="#">Table num.1</a>
        <strong>dd.mm.yyyy</strong>
      </li>
      <li class="db__record">
        <a href="#">Table num.1</a>
        <strong>dd.mm.yyyy</strong>
      </li>
      <li class="db__record">
        <a href="#">Table num.1</a>
        <strong>dd.mm.yyyy</strong>
      </li>
    </ul>

  </div>
    `);
  }
}
