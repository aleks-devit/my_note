import React, {useContext} from 'react';
import {MainLayoutHeader} from './styles'
import {Context} from '../../context'

const Header = () => {
  const { state, dispatch } = useContext(Context);


  const handleSaveDocument = () => {
    dispatch({
      type: "SAVE_DOCUMENT",
      payload: true,
    })
  }

  return (
    <MainLayoutHeader>
      <button onClick={handleSaveDocument}>
        Сохранить
      </button>
    </MainLayoutHeader>
  );
};

export default Header;