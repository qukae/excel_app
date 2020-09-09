import './scss/index.scss';
import {Router} from './core/routes/Router';
import {DashboardPage} from './pages/DashboardPage';


new Router('#app', {
  dashboard: DashboardPage,
});

