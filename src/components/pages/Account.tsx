import React from 'react';
import { NavLink } from 'react-router-dom';
import { post } from '../static/axios';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
interface AccountProps {
	removeAuth: (arg: boolean) => void;
	username: string | null;
	password: string | null;
}
const useStyles = makeStyles({
  card: {
    maxWidth: 250,
  },
  media: {
    height: 160,
  },
});

export default function Account(props: AccountProps) {
	let oldPasswordRef:any = React.createRef();
	let newPasswordRef:any = React.createRef();
	let formRef:any = React.createRef();
	let imageFileRef:any = React.createRef();
	const classes = useStyles();
	
	function setImgSrc () {
		return `http://localhost:8080/upload/user/${props.username}`;
	}
	function deleteUser() {
		const response = post("/users/delete", JSON.stringify({username:props.username, email:props.username, password:props.password}), true);
		response.onload = () => {
			if (response.responseText.includes("Success")){
				localStorage.removeItem('token');
				props.removeAuth(false);
			}
		}
	}
	function logout () {
		localStorage.removeItem('token');
		props.removeAuth(false);
	}
	function updateUser (e: any) {
		e.preventDefault();
		
		const response = post("/users/update", JSON.stringify({username:props.username, oldPassword:props.password, newPassword:newPasswordRef.current.value}), true);
		response.onload = () => {
			if (response.responseText.includes("Success")){
				console.log("Successfully changed password");
				localStorage.removeItem("token");
				localStorage.setItem("token", `${props.username}?${newPasswordRef.current.value}`);
			}
		}
	}
	
	function uploadImage (e: any) {
		e.preventDefault();
		//////delte this later maybe....

		var formdata = new FormData();
		let username:any = props.username;
		formdata.append("username", username);
		formdata.append("file", imageFileRef.current.files[0]);
		console.log("dd" + imageFileRef.current.files[0].name)
		const response = post("/upload", formdata, false);
		response.onload = () => {
			console.log("rfeeee: " + response.responseText)
			if (response.responseText.includes("Success")){
				console.log("text: " + response.responseText)
				console.log("Successfully uploaded image")
			}
		}
		window.location.reload();
	}
		
	function justReturn () {
		return false;
	}
  	return (
	
		<React.Fragment>
			<Grid container justify="center" alignItems="center">
				<Grid item xs={3}>
					<Card className={classes.card}>
						<CardActionArea>
							<CardMedia
								className={classes.media}
								image={setImgSrc()}
								title="My profile picture"
								ref={imageFileRef}
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="h2">
									You are logged in as <strong>{props.username}</strong>
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
				</Grid>
			</Grid>
			<form>
				<FormGroup>
					<label>Change password:</label>
				</FormGroup>
				<FormGroup>
					<input ref={oldPasswordRef} placeholder="current password" type="password"/>
				</FormGroup>
				<FormGroup>
					<input ref={newPasswordRef} placeholder="new password" type="password"/>
				</FormGroup>
				<FormGroup>
					<Button type="submit" onClick={updateUser}>Submit</Button>
				</FormGroup>
			</form>
			<Container>
				<form encType="multipart/form-data" method="POST" onSubmit={justReturn} ref={formRef}>
						
							<FormGroup>
								<label>Upload profile picture:</label>
							</FormGroup>
						
						
							<FormGroup>
								<input ref={imageFileRef} type="file"/>
							</FormGroup>
							<FormGroup>
								<Button onClick={uploadImage}>Submit</Button>
							</FormGroup>
						
					</form>
				</Container>
	      <br/><br/><br/><br/>
	      	<NavLink onClick={logout} to="/Login" type="submit" className="form-control">Logout</NavLink>
			<NavLink onClick={deleteUser} to="/Login" type="submit" className="form-control">Delete Account</NavLink>
	      </React.Fragment>

    )

}
