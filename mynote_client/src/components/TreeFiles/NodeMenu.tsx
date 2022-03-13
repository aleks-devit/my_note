import React from 'react';
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {Button, Menu, MenuItem} from "@mui/material";

const NodeMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <div>
      <div onClick={handleClick}>
        <MoreVertIcon />
      </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Создать документ</MenuItem>
        <MenuItem onClick={handleClose}>Создать папку</MenuItem>
        <MenuItem onClick={handleClose}>Переименовать</MenuItem>
        <MenuItem onClick={handleClose}>Удалить</MenuItem>
      </Menu>
    </div>
  );
};

export default NodeMenu;