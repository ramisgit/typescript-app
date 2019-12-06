import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Container from '@material-ui/core/Container';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import About from './components/pages/About';
import Grid from '@material-ui/core/Grid';
import Register from './components/pages/Register';
import Index from './components/pages/Index';
import Contact from './components/pages/Contact';
import Account from './components/pages/Account';
import Projects from './components/pages/Projects';
import Support from './components/pages/Support';
import Forum from './components/pages/Forum';
import {post} from './components/static/axios';
import Post from './components/pages/Post';
import Login from './components/pages/Login';

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		paragraph: {
			color: "white",
			paddingLeft: "20px"
		},
		main: {
			maxWidth: "1140px",
			backgroundColor: "white",
			minHeight: "100vh",
			padding: "90px 30px 0px 30px"
		},
		mainContainer: {
			backgroundImage: "url(http://localhost:8080/upload/files/background.jpg)",
			minHeight: "100vh",
			padding: "0px",
			margin: "0px"
		}
	}),
	
);

export default function App () {
	const classes = useStyles();
	
	const [authenticated, setAuthenticated] = React.useState(false);
	const [username, setUsername] = React.useState<string | null>(null);
	const [password, setPassword] = React.useState<string | null>(null);
	
	function authenticate_user(){
		const token = localStorage.getItem('token');
		console.log("Authenticating user at top layer")
		if (token) {
			const u:null | string = token.split("?")[0]; setUsername(u);
			const p:null | string = token.split("?")[1]; setPassword(p);
			const response = post("/users/login", JSON.stringify({username:username, email:username, password:password}), true);
			response.onload = () => {
				if (response.responseText.includes("Success")){
					console.log("Successfully authenticated user")
					setAuth(true);
				}
			}
		}
	}
	
	function setAuth(val: boolean){
		setAuthenticated(val);
	}
	authenticate_user();
	return (
		<Router>
			<Grid container xs={12} className={classes.mainContainer}>
				<Header auth={authenticated}/>
				<Grid item container xs={12} justify="center" alignItems="center" >
					<Container className={classes.main}>
						<Switch>
							<Route exact path='/' render={(props) => (<Index/>)}/>
							<Route path='/Forum' render={(props) => (<Forum authenticated={authenticated} my_username={username} my_password={password} />)}/>
							<Route path='/Login' render={(props) => (<Login authenticate={authenticate_user} />)}/>
							<Route path='/Register' component={Register} />
							<Route path='/About us' component={About} />
							<Route path='/Account' render={(props) => (<Account removeAuth={setAuth} username={username} password={password}/>)}/>
							<Route path='/Forum/Post' render={(props) => (<Post authenticated={authenticated} username={username} password={password}/>)}/>
							<Route path='/Contact' component={Contact} />
							<Route path='/Projects' component={Projects} />
							<Route path='/Support' component={Support} />
						</Switch>
					</Container>
				</Grid>
				<Footer/>
			</Grid>
		</Router>
	);
}

