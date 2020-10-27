import React from 'react'
import './App.scss';
import Logo from './components/logo/logo.component';

function App() {
  return (
    <div className={'wrapper'}>
      <header className={'wrapper__header'}>
        <h1>
          <Logo />
          Tobias <span>Secher</span>
        </h1>
      </header>
      <div className={'wrapper__content wc'}>
        <nav className={'wc__menu'}>
          Menu
        </nav>
        <main className={'wc__content'}>
          content
        </main>
      </div>
    </div>
  );
}

export default App;
