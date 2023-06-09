import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '@redux';
import { Navbar } from '@components/Navbar/Navbar';
import { Header } from '@components/Header/Header';
import { AppRoutes } from './AppRoutes';
import { AppAutologon } from './AppAutologon';
import './App.css';

export const App: FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="app">
          <AppAutologon />
          <Header />
          <Navbar />
          <main className="content">
            <AppRoutes />
          </main>
        </div>
      </BrowserRouter>
    </Provider>
  );
}
