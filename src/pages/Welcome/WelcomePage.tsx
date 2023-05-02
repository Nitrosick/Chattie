import { FC } from 'react';
import './WelcomePage.css';

export const WelcomePage: FC = () => {
  return (
    <div className="welcome_page">
      <h1 className="welcome_page_title">
        Welcome to
        <mark className="welcome_page_mark">Chattie</mark>
        !
      </h1>
      <p className="welcome_page_desc">A simple chat to make it good</p>
    </div>
  );
}
