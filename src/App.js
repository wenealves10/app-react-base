import React from 'react';
import { Router } from 'react-router-dom';
import history from './services/history';
import Header from './components/Header';
import Global from './styles/Global';
import Routes from './routes';

function App() {
  return (
    <Router history={history}>
      <Header />
      <Routes />
      <Global />
    </Router>
  );
}
export default App;
