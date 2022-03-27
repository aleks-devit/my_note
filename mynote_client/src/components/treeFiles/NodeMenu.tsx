import React, {FC} from 'react';
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {Menu, MenuItem} from "@mui/material";


interface NodeMenuProps {
    onRename: (boolean: boolean) => void;
}

const NodeMenu: FC<NodeMenuProps> = ({onRename}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleRename = () => {
    onRename(true);
    handleClose()
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
        <MenuItem onClick={handleRename}>Переименовать</MenuItem>
        <MenuItem onClick={handleClose}>Удалить</MenuItem>
      </Menu>
    </div>
  );
};

export default NodeMenu;