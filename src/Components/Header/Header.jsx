import React from 'react';
import Button from "../Button/Button";
import {useTelegram} from "../../hooks/useTelegram";

const Header = () => {
const {user,OnClose}= useTelegram()
    return (
      <div className={'header'}>
          <Button onClick = {OnClose()}>Close</Button>
          <span className={'username'}>
              {
                    user.username
              }
          </span>
      </div>
    );
};

export default Header;