import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { useTheme } from "@mui/material/styles";
import * as React from 'react';

export default function AccountMenu() {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Box>
        {/* <Typography sx={{ minWidth: 100 }}>Contact</Typography>
        <Typography sx={{ minWidth: 100 }}>Profile</Typography> */}
        {/* <Chip
          sx={{
            height: "48px",
            alignItems: "center",
            borderRadius: "27px",
            transition: "all .2s ease-in-out",
            borderColor: theme.palette.primary.light,
            backgroundColor: theme.palette.primary.light,
            '&[aria-controls="menu-list-grow"], &:hover': {
              borderColor: theme.palette.primary.main,
              background: `${theme.palette.primary.main}!important`,
              color: theme.palette.primary.light,
              "& svg": {
                stroke: theme.palette.primary.light,
              },
            },
            "& .MuiChip-label": {
              lineHeight: 0,
            },
          }}
          icon={ */}
        <Avatar
          // src={User1}
          // sx={{
          //   ...theme.typography.mediumAvatar,
          //   margin: "8px 0 8px 8px !important",
          //   cursor: "pointer",
          // }}
          // ref={anchorRef}
          aria-controls={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          color="inherit"
          onClick={handleClick}
        />
        {/* } */}
        {/* // label={<IconSettings stroke={1.5} size="1.5rem" color={theme.palette.primary.main} />}
          label={<Icon icon="iconamoon:arrow-down-2" size="1.5rem" color={theme.palette.primary.main} />}
          variant="outlined"
          // ref={anchorRef}
          aria-controls={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          onClick={handleClick}
          color="primary"
        /> */}
        {/* <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
          </IconButton>
        </Tooltip> */}
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <Box
          sx={{
            margin: '20px 5px 20px 15px',
          }}
        >
          <Typography variant="h4">Ashik</Typography>
          <Typography sx={{ color: '#9e9e9e', marginTop: '3px' }}>
            ashikbhuyan.swe.diu@...
          </Typography>
        </Box>
        <Divider sx={{ borderStyle: 'dashed' }} />

        <Box
          sx={{
            margin: '10px 5px ',
          }}
        >
          {/* <MenuItem onClick={handleClose}>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar /> My account
        </MenuItem>
        <Divider sx={{ borderStyle: 'dashed' }} /> */}
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              {/* <PersonIcon fontSize="small" /> */}
            </ListItemIcon>
            My Account
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              {/* <PersonAdd fontSize="small" /> */}
            </ListItemIcon>
            Add another account
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              {/* <Settings fontSize="small" /> */}
            </ListItemIcon>
            Settings
          </MenuItem>
        </Box>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Box
          sx={{
            margin: '10px 5px ',
          }}
        >
          <MenuItem onClick={handleClose} sx={{ color: '#FC8D75' }}>
            <ListItemIcon sx={{ color: '#FC8D75' }}>
              {/* <Logout fontSize="small" /> */}
            </ListItemIcon>
            Logout
          </MenuItem>
        </Box>
      </Menu>
    </>
  );
}
