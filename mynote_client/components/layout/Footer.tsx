import React, {useContext} from 'react';
import {MainLayoutFooter} from "./styles";
import {Context} from '../../context'
const Footer = () => {
  const {state, dispatch} = useContext(Context);

  return (
    <MainLayoutFooter>
      Статус: {state.status}
    </MainLayoutFooter>
  );
};

export default Footer;