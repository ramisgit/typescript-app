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
import Snack from '../static/Snack';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

interface IProps {
	authenticate: () => void;
}

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
export default function Login(props: IProps) {
	let usernameInput:any = React.createRef();
	let passwordInput:any = React.createRef();
  	const classes = useStyles();
    const [response, setResponse] = React.useState("");
    const [open, setOpen] = React.useState(false)
    const [varient, setVarient] = React.useState<"success" | "error" | "warning" | "info">("info");
	function submitLogin(e: any){
		e.preventDefault();
		console.log("User logging in....");
		let usernameVal = usernameInput.current.value;
		let passwordVal = passwordInput.current.value;

		const response = post("/users/login", JSON.stringify({username:usernameVal, email:usernameVal, password:passwordVal}), true);
        response.onload = () => {
			setResponse(response.responseText)
            if (response.responseText.includes("Success")) {

                setVarient("success");
                setResponse("Successfully logged in")
                setOpen(true);
                localStorage.setItem("token", usernameVal + "?" + passwordVal); //encrypt this later
                props.authenticate();
            } else {
                setVarient("warning");
                setResponse("Invalid credentials")
                setOpen(true);
            }
		}
		
		
		
	}
    function openHandler(val: boolean) {
        setOpen(val);
    }
	return (
	
        <Container component="main" maxWidth="xs">
          <Snack openHandler={openHandler} open={open} varient={varient} message={response} />
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
			inputRef={usernameInput}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
			inputRef={passwordInput}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
			onClick={(e:any) => submitLogin(e)}
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/Register" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}