import React from 'react'
import Container from '@material-ui/core/Container';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
	formBtn: {
		width: "20%"
	},
	textArea: {
		display: "inline-block"
	},
	messageLbl: {
		width: "100%"
	},
	form: {
		border: "1px solid rgb(33, 37, 41)",
		padding: "10px 10px 10px 10px"
	}
});


export default function Contact () {
	const classes = useStyles();
	return (
		<React.Fragment>
			<h4>This page is essentially an email client and the email will be sent directly to my inbox at <strong>Ramis_tahmasebi@outlook.con</strong></h4>
			<Container>
				<form action="email" className={classes.form}>
					<FormGroup>
						<FormControlLabel control={<input name="name" type="text"/>} label="Name"/><br/>
						<FormControlLabel control={<textarea rows={4} cols={50} className={classes.textArea} name="message"></textarea>} label="Message" className={classes.messageLbl}/>
						<Button type="submit" className={classes.formBtn}>Send</Button>
					</FormGroup>
				</form> 
			</Container>
		</React.Fragment>
	);
}
