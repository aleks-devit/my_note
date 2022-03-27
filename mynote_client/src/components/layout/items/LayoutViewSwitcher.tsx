import React, {useContext} from 'react';
import {LayoutViewSwitcherBtn, LayoutViewSwitcherWrapper} from "../styles";
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import ImageIcon from '@mui/icons-material/Image';
import { Context } from '../../../context';

const LayoutViewSwitcher = () => {
  // @ts-ignore
  const {state, dispatch} = useContext(Context);

  const handleViewModeChange = (mode: string) => {
    dispatch({
      type: "CHANGE_VIEW_MODE",
      payload: mode,
    })
  };

  return (
    <LayoutViewSwitcherWrapper
      container
      justifyContent="space-between"
      alignItems="center"
    >
      <LayoutViewSwitcherBtn
        size="small"
        variant="outlined"
        onClick={() => handleViewModeChange('only-text')}
      >
        <FormatAlignJustifyIcon/>
      </LayoutViewSwitcherBtn>
      <LayoutViewSwitcherBtn
        size="small"
        variant="outlined"
        onClick={() => handleViewModeChange('mix')}
      >
        <FormatAlignJustifyIcon/>
        <ImageIcon/>
      </LayoutViewSwitcherBtn>
      <LayoutViewSwitcherBtn
        size="small"
        variant="outlined"
        onClick={() => handleViewModeChange('only-image')}
      >
        <ImageIcon/>
      </LayoutViewSwitcherBtn>
    </LayoutViewSwitcherWrapper>
  );
};

export default LayoutViewSwitcher;