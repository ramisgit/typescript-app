import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {post} from '../static/axios';
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright � '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

interface WarningProps {
	val: string;
}
class Warning extends React.Component<WarningProps> {
	determineClass = () => {
		if (this.props.val.includes("Success")){
			return "alert alert-success";
		} else {
			return "alert alert-danger";
		}
	}
	render(){
		return (
			<div style={{display: this.props.val === "" ? "none" : "block" }} className={this.determineClass()} role="alert">{this.props.val}</div>
		);
	}
}
export default function SignUp() {
	let usernameRef:any = React.createRef<HTMLInputElement>();
	let emailRef:any = React.createRef<HTMLInputElement>();
	let passwordRef:any = React.createRef<HTMLInputElement>();
	const [response, setResponse ] = React.useState("");
	
	function focusSubmitInput(e: any){
		e.preventDefault();
		
		console.log("dat: " + usernameRef.current.value)
		
		const username:string = usernameRef.current.value;
		const email:string = emailRef.current.value;
		const password:string = passwordRef.current.value;
		
		
		console.log("username: " + username + ", email: " + email + ", pass: " + password)
		const response = post("/users/register", JSON.stringify({username:username, email:email, password:password}), true);
			response.onload = () => {
				setResponse(response.responseText)
			}
		}
			//clear all input fields
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
		<Warning val={response}/>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
				inputRef={usernameRef}
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Username"
                name="Username"
                autoComplete="username"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
				inputRef={emailRef}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
				inputRef={passwordRef}                
				variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
			onClick={focusSubmitInput}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/Login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}