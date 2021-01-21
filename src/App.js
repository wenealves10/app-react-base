import React from 'react';
import { HashRouter } from 'react-router-dom';
import history from './services/history';
import Header from './components/Header';
import Global from './styles/Global';
import Routes from './routes';

function App() {
  return (
    <HashRouter history={history}>
      <Header />
      <Routes />
      <Global />
    </HashRouter>
  );
}
export default App;
