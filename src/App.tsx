import './App.css';

import deepFocusLogo from './assets/deep-focus-color-logo.svg';

const App = () => {
  return (
    <div className={'page'}>
      <header className={'header'}>
        <a href='https://vitejs.dev' target='_blank' rel='noreferrer'>
          <img src={deepFocusLogo} className='logo' alt='Vite logo' />
        </a>
      </header>
      <main>
        <h1>Powerful and simple time tracker</h1>
      </main>
    </div>
  );
};

export default App;
