import React from 'react';
import { Link } from 'react-router-dom';
import { post, get } from '../static/axios';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Input from '@material-ui/core/Input';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Post from './Post';
import Fade from '@material-ui/core/Fade';
import Modal from '@material-ui/core/Modal';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import TextField from '@material-ui/core/TextField';

const avatarStyle:React.CSSProperties = {
	margin: 10,
    width: 80,
    height: 80,
}
const usernameStyle:React.CSSProperties = {
	fontSize: "12px",
	margin: "0px 0px 0px 20px",
}
const titleStyle:React.CSSProperties = {
	margin: "5px 0px 0px 5px",
	padding: "0px 0px 0px 0px",
	color: "black",
}
const createPostBtnStyle:React.CSSProperties = {
	height: "38px"
}

interface ForumItemProps {
	src: string;
	title: string;
	description: string;
	username: string;
	date: string;
	authenticated: boolean;
	my_username: string | null;
	my_password: string | null;
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
	modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
	textField: {
		width: "100%"
	}
  }),
);
export class ForumItem extends React.Component<ForumItemProps> {
	
	
	render(){
		return (
			
				<Paper>
				<Grid container item xs={12}>
					<Grid item xs={2} justify="center" alignItems="center">
						<Grid item justify="center" alignItems="center">
							<Grid justify="center" alignItems="center">
	      						<Avatar alt="Avatar image" src={`http://localhost:8080/upload/user/${this.props.username}`} style={avatarStyle} />
							</Grid>
							<Grid justify="center" alignItems="center">
								<Typography variant="h6" gutterBottom>
		        					{this.props.username}
		      					</Typography>
							</Grid>
						</Grid>
    				</Grid>
					<Grid item xs={10} justify="flex-start" alignItems="flex-start" zeroMinWidth>
						<Link style={titleStyle} to={{pathname: `/Forum/Post/?title=${this.props.title}`,
							state: {
								src: this.props.src,
								description: this.props.description,
								username: this.props.username,
								time: this.props.date
							}
						}}>
							<Typography variant="h5" gutterBottom>
		        					{this.props.title}
		      				</Typography>
						</Link>
						<p style={{wordWrap: "break-word", overflow:"hidden"}}>{this.props.description}</p>
					</Grid>
					</Grid>
				</Paper>
			
		)
	}
}

function CommentModal (props: any) {
	const classes = useStyles();
	const descriptionRef: any = React.createRef();
	const [textLimit, setTextLimit] = React.useState(255);
	
  	const [open, setOpen] = React.useState(false);
	const titleRef:any = React.createRef();
	  const handleOpen = () => {
		if (props.authenticated){
			setOpen(true);	
		}else {
			alert("login to make a post")
		}
	    
	  };

	  const handleClose = () => {
	    setOpen(false);
	  };
	const textLimitChange = (event: any) => {
		setTextLimit(255 - event.target.value.length)
	}
		function postBtn (e: any) {
		const token = localStorage.getItem('token');
		if (token) {
			const response = post("/forum/post", JSON.stringify({username:token.split("?")[0], title:titleRef.current.value, description:descriptionRef.current.value}), true);
			response.onload = () => {
				if (response.responseText.includes("Success")){
					console.log("text: " + response.responseText)
					props.onHide();
					window.location.reload();
				}
			}
		} else {
			console.log("Create an account or login to make a post.")
		}
	}
		return (
			
			<div>
				<Button style={createPostBtnStyle} 
						onClick={handleOpen}
						variant="contained"
					 	color="primary">
        					Create Post
      			</Button>
		      <Modal
		        aria-labelledby="transition-modal-title"
		        aria-describedby="transition-modal-description"
		        className={classes.modal}
		        open={open}
		        onClose={handleClose}
		        closeAfterTransition
		        BackdropComponent={Backdrop}
		        BackdropProps={{
		          timeout: 500,
		        }}
		      >
		        <Fade in={open}>
		          <div className={classes.paper}>
					<form noValidate autoComplete="off">
				      <h2 id="transition-modal-title">Create a post</h2>
						<Grid xs={12}>
				      <TextField inputRef={titleRef} id="outlined-basic" className={classes.textField} label="Title" variant="outlined" />
						</Grid>
						<Grid xs={12}>
							<TextField
								onChange={(event) => textLimitChange(event)}
								inputRef={descriptionRef}
					          id="outlined-multiline-static"
					          label="Description"
					          multiline
					          rows="4"
					          className={classes.textField}
					          margin="normal"
					          variant="outlined"
					        />
						</Grid>
						<Grid container xs={12} justify="flex-end" alignItems="flex-end">
							<Typography component="p">
								{textLimit}
							</Typography>
						</Grid>
						<Grid xs={12}>
							<Button onClick={() => setOpen(false)}>Close</Button>
							<Button onClick={postBtn} variant="contained" color="primary" type="submit">Post</Button>
						</Grid>
				    </form>
					
		          </div>
		        </Fade>
		      </Modal>
		    </div>
		);
	}
export default class Forum extends React.Component<ForumProps, ForumState> {
	public state:ForumState = {
      data: [],
      showPostModal: false
    }
  	constructor(props:ForumProps){
	    super(props);
		const response = get("/forum/get");
		response.onload = () => {
			var jsonArray = JSON.parse(response.responseText);
			this.setState({ data: jsonArray})
		}
	}
	render(){
		return (
			<React.Fragment>
				
				<Container>
					<Grid item xs={12} container justify="flex-end" alignItems="flex-end">
						<CommentModal authenticated={this.props.authenticated}/>
						 
					</Grid>
				</Container><br/>
				<Divider />
				<GridList cellHeight={160} cols={12}>
					{(this.state.data).map((data: any) =>
						<GridListTile key={data.date} cols={12}>
							<ForumItem my_username={this.props.my_username} my_password={this.props.my_password} authenticated={this.props.authenticated} date={data.date} title={data.title} key={data.date} username={data.username} description={data.description} src={data.path}/>
						</GridListTile>
					)}
				</GridList>
			</React.Fragment>
		);
	}
}
export interface ForumProps {
	authenticated: boolean;
	my_username: string | null;
	my_password: string | null;
}
export interface ForumState {
    data: any;
    showPostModal: boolean;
}
