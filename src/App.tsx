import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router, Route, Switch,
} from "react-router-dom";
import Logo from './components/logo/logo.component';
import Menu from './components/menu/menu.component';
import { MenuModel } from './models/menu.model';
import Home from './screens/home/home.screen';
import Work from './screens/work/work.screen';

const App = () => {

  const menu: MenuModel[] = [
    {
      icon: ['fas', 'home'],
      label: 'Home',
      route: '/home',
      screen: <Home />,
      exact: true,
      color: "blue"
    },
    {
      icon: ['fas', 'code-branch'],
      label: 'Work',
      route: '/work',
      screen: <Work />,
      exact: true,
      color: 'green'
    },
  ];

  const routes = menu.map((m, index) => {
    return (
      <Route key={m.label} path={m.route}>
        {m.screen}
      </Route>
    )
  })

  return (
    <Router>
      <div className={'wrapper'}>
        <header className={'wrapper__header'}>
          <h1>
            <Logo />
          Tobias <span>Secher</span>
          </h1>
        </header>
        <div className={'wrapper__content wc'}>
          <nav className={'wc__menu'}>
            <Menu menu={menu} />
          </nav>
          <main className={'wc__content'}>
            <Switch>
              {routes}
              <Route path={'/'}>
                <Home />
              </Route>
            </Switch>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
