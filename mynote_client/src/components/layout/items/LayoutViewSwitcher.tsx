import React from 'react';
import {LayoutViewSwitcherBtn, LayoutViewSwitcherWrapper} from "../styles";
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import ImageIcon from '@mui/icons-material/Image';
import {grey} from "kleur/colors";

const LayoutViewSwitcher = () => {
  return (
    <LayoutViewSwitcherWrapper
      container
      justifyContent="space-between"
      alignItems="center"
    >
      <LayoutViewSwitcherBtn size="small" variant="outlined"><FormatAlignJustifyIcon/></LayoutViewSwitcherBtn>
      <LayoutViewSwitcherBtn size="small" variant="outlined">
        <ImageIcon/>
        <FormatAlignJustifyIcon/>
      </LayoutViewSwitcherBtn>
      <LayoutViewSwitcherBtn size="small" variant="outlined">
        <ImageIcon/>
      </LayoutViewSwitcherBtn>
    </LayoutViewSwitcherWrapper>
  );
};

export default LayoutViewSwitcher;