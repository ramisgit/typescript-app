import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		nav: {
			padding: "0px",
			margin: "0px",
		},
		paragraph: {
			color: "white",
			paddingLeft: "20px"
		},
		footer: {
			bottom: "0",
			width: "100vw",
			height: "8vh",
			background: "rgb(33, 37, 41)",
			maxHeight: "56px",
		}
	}),
	
);


export default function Footer() {
	const classes = useStyles();
	return (
		<footer className={classes.footer}>
			<nav className={classes.nav}>
				<p className={classes.paragraph}>© Ramis.io, 2019 Developed by Ramis.io</p>
			</nav>
		</footer>
	);
}
