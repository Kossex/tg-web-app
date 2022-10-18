import React from 'react';
import Button from "../Button/Button";
import {useTelegram} from "../../hooks/useTelegram";

const Header = () => {
const {user,Tg}= useTelegram()
    return (
      <div className={'header'}>
          <Button onClick = {()=>{
              Tg.close();
          }}>Close</Button>
          <span className={'username'}>
              {
                    user.username
              }
          </span>
      </div>
    );
};

export default Header;