import React from 'react';
import Button from "../Button/Button";

const Header = () => {
    const Tg = window.Telegram.WebApp;
    const OnClose = () => {
        Tg.close();
    }
    return (
      <div className={'header'}>
          <Button onClick = {OnClose}>Close</Button>
          <span className={'username'}>
              {
                    Tg.initDataUnsafe?.user?.username
              }
          </span>
      </div>
    );
};

export default Header;