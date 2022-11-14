import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";

import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PersonIcon from '@mui/icons-material/Person';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

export default function AccountMenus() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={open? <KeyboardArrowUpIcon />:<KeyboardArrowDownIcon />}
      >
        <PersonIcon fontSize='medium' />&nbsp;
        Sign In / Up
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disableRipple>
          <Link style={{textDecoration: 'none', color: 'black'}} to="signIn">Sign In</Link>
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
        <Link style={{textDecoration: 'none', color: 'black'}} to="signUp">Create Account</Link>
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={handleClose} disableRipple>
        <Link style={{textDecoration: 'none', color: 'black'}} to="orders">Orders</Link>
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
        <Link style={{textDecoration: 'none', color: 'black'}} to="rewards">Rewards</Link>
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
        <Link style={{textDecoration: 'none', color: 'black'}} to="mylist">My List</Link>
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
        <Link style={{textDecoration: 'none', color: 'black'}} to="settings">Settings</Link>
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
        <Link style={{textDecoration: 'none', color: 'black'}} to="wallet">Wallet</Link>
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
        <Link style={{textDecoration: 'none', color: 'black'}} to="address">Address Preferences</Link>
        </MenuItem>
      </StyledMenu>
    </div>
  );
}