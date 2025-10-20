

import { useState } from 'react';

import Logo from './components/Logo/Logo';
import Button from '../../common/Button/Button';
import { BUTTON_TEXT } from '../../constants/uiText';

import './header.css';

const Header = () => {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <header className="header">
      <div className="container header__inner">
        <div className="header__left">
          <Logo />
        </div>

        <div className="header__right">
          <span className="header__user">Harry Potter</span>
          <Button
            buttonText={isAuth ? BUTTON_TEXT.LOGOUT : BUTTON_TEXT.LOGIN}
            variant="primary"
            onClick={() => setIsAuth(!isAuth)}
          />
          
        </div>
      </div>
    </header>
  );
};

export default Header;
