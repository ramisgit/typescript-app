import React from 'react';
import {NavLink } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AppBar from '@material-ui/core/AppBar'
import AccountCircle from '@material-ui/icons/AccountCircle';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles({
	header: {
		height: "56px",
		backgroundColor: "rgb(33, 37, 41)",
		position: "fixed",
		width: "100vw",
	},
	list: {
		width: 250,
		backgroundColor: "rgb(33, 37, 41)",
	},
	fullList: {
		width: 'auto',
		backgroundColor: "rgb(33, 37, 41)",
	},
	title: {
		flexGrow: 1,
	},
	navLink: {
		color:"white"
	},
	paper: {
		textAlign: 'center',
	},
	burger: {
		color: "white"
	},
});

interface IProps {
	auth: boolean;
}
export default function Header(props: IProps) {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const classes = useStyles();
	const [state, setState] = React.useState({
		left: false,
		navArray: ['']
	});
	if (!props.auth)  {
		state.navArray = ['Register', 'Login'];
	} else {
		state.navArray = [''];
	}
	type DrawerSide = 'left';
	const toggleDrawer = (side: DrawerSide, open: boolean) => (
		event: React.KeyboardEvent | React.MouseEvent,
	) => {
	if (
		event && event.type === 'keydown' &&
		((event as React.KeyboardEvent).key === 'Tab' ||
		(event as React.KeyboardEvent).key === 'Shift')
	) {
		return;
	}
	setState({ ...state, [side]: open });
	};
	
	const sideList = (side: DrawerSide) => (
	
	<div
		className={classes.list}
		role="presentation"
		onClick={toggleDrawer(side, false)}
		onKeyDown={toggleDrawer(side, false)}
		style={{height: "100vh"}}
	>
	<div>
		<IconButton onClick={toggleDrawer('left', true)}>
		<ChevronLeftIcon style={{color: "white"}}/>
		</IconButton>
	</div>
     <Divider />
	
	<List>
	<Grid container spacing={3}>
		
		<ListItem button>
			<Grid item md={6}>
				<NavLink to={`/Register`}>
					<ListItemText  className={`${classes.paper} ${classes.navLink}`} primary={"Register"} />
				</NavLink>
			</Grid>
			<Grid item md={6}>
				<NavLink to={`/Login`}>
					<ListItemText  className={`${classes.paper} ${classes.navLink}`} primary={"Login"} />
				</NavLink>
			</Grid>
		</ListItem>	
					
			
	</Grid>
	</List>
      <Divider />
		<List>
			<NavLink to={`/`}>          
				<ListItem button key={"Home"}>
					<ListItemIcon>{<InboxIcon />}</ListItemIcon>
					<ListItemText className={classes.navLink} primary={"Home"} />
          		</ListItem>
			</NavLink>
		
        {['Forum', 'Projects', 'Contact', 'About us'].map((text, index) => (
			<NavLink key={index} to={`/${text}`}>          
				<ListItem button key={text}>
					<ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
					<ListItemText className={classes.navLink} primary={text} />
          		</ListItem>
			</NavLink>
        ))}
      </List>
    </div>
  );
const handleClose = () => {
    setAnchorEl(null);
  };
const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <div className={classes.header}>
      <AppBar position="static">
		<Toolbar className={classes.header}>
				<IconButton
		            className={classes.burger}
		            aria-label="open drawer"
		            onClick={toggleDrawer('left', true)}
		            edge="start"
          		>
				 <MenuIcon />
				
				</IconButton>
				<Typography variant="h6" className={classes.title}>
	            	Converter
	          	</Typography>
			{props.auth && (
            <div>
				<NavLink to={"/Account"}>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
				style={{color: "white"}}
              >
                <AccountCircle />
              </IconButton>
           		</NavLink>
            </div>
          )}
		</Toolbar>
		</AppBar>
      <SwipeableDrawer
        open={state.left}
        onClose={toggleDrawer('left', false)}
        onOpen={toggleDrawer('left', true)}
		
      >
        {sideList('left')}
      </SwipeableDrawer>
    </div>
  );
}