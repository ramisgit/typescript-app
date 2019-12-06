import React from 'react'
import {post} from '../static/axios';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { withStyles, makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Box from '@material-ui/core/Box';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';

const dateStyle:React.CSSProperties = {
	color: "grey",
	fontSize: "12px"
}
const cardStyle:React.CSSProperties = {
	padding: "0px 0px 0px 0px",
	margin: "0px 0px 0px 0px",
}
const timeStampStyle:React.CSSProperties = {
	fontSize: "12px",
	color:"grey"
}
const styles = {
	left: {
		display: 'flex', justifyContent: 'left'
	},
	right: {
		display: 'flex', justifyContent: 'right'
	},
	center: {
		display: 'flex', justifyContent: 'center'
	},
	bottom: {
		display: 'flex', justifyContent: 'bottom'
	}
}

interface CommentModalProps {
	onHide: () => void;
	posthandler: (arg1: any, arg: string) => void;
	show: boolean;
}
interface CommentModalState {
	textLimit: number;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
	card: {
    	maxWidth: 345,
  	},
  	media: {
    	height: 140,
  	},
	likeDislike: {
		width: 30,
		height: 20,
	}
  }),
);
const ExpansionPanel = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiExpansionPanelDetails);
function CommentModal (props:CommentModalProps) {
	const descriptionRef: any = React.createRef();
	const [textLimit, setTextLimit] = React.useState(255);
	const classes = useStyles();
  	const [open, setOpen] = React.useState(false);

	  const handleOpen = () => {
	    setOpen(true);
	  };

	  const handleClose = () => {
	    setOpen(false);
	  };

		return (
			
			<div>
		      <button type="button" onClick={handleOpen}>
		        ReplyButton
		      </button>
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
		            <h2 id="transition-modal-title">Reply</h2>
		            <TextField onChange={() => setTextLimit(255 - descriptionRef.current.value.length)} ref={descriptionRef} rows="3" placeholder="response"/>
					<p>{textLimit}</p>
					<Button onClick={props.onHide}>Close</Button>
					<Button onClick={ (e:any) => props.posthandler(e, descriptionRef.current.value)} color="primary">Post</Button>
		          </div>
		        </Fade>
		      </Modal>
		    </div>
		);
	}
	interface CommentProps {
		childComments: any;
		username: string;
		src: string;
		time: string;
		comment: string;
		replyHandler: (event: any, comment: string, time: string) => void;
	}
function Comment (props: CommentProps) {
	const [childData, setChildData] = React.useState();
	const [parentComment, setParentComment] = React.useState();
	const [parentTime, setParentTime] = React.useState();
	const [likes, setLikes] = React.useState();
	const classes = useStyles();
	const commentRef:any = React.createRef();


	function loadData(){
		setChildData(props.childComments);
	}
	function upvoteBtn (e:any) {
		e.preventDefault();
		setLikes(likes + 1);
	}
	function downvoteBtn (e: any) {
		e.preventDefault();
		setLikes(likes - 1);
	}
	const [expanded, setExpanded] = React.useState<string | false>('panel1');

	  const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, newExpanded: boolean) => {
	    setExpanded(newExpanded ? panel : false);
	  };
	return (
		<React.Fragment>
			{loadData}
			<Grid container xs={2}>
				<Card className={classes.card}>
      				<CardActionArea>
        				<CardMedia
							className={classes.media}
							image={props.src}
							title="Avatar image"
						/>
						<CardContent>
							<Typography gutterBottom variant="h5" component="h2">
								<i>{props.username}</i>
							</Typography>
						</CardContent>
					</CardActionArea>
				</Card>
			</Grid>
			<Grid container xs={10}>
				<p style={timeStampStyle}>{props.time}</p>
				<p ref={commentRef}>{props.comment}</p>
				<Grid container xs={12}>
					<Avatar
						className={classes.likeDislike}
						onClick={upvoteBtn}
						src="http://localhost:8080/upload/files/thumbsup.jpg"
						alt="Generic placeholder"
					/><pre> </pre>
					<p>{likes}</p>
					<Avatar
						className={classes.likeDislike}
						onClick={downvoteBtn}
						src="http://localhost:8080/upload/files/thumbsdown.jpg"
						alt="Generic placeholder"
					/><pre> </pre>
					<Button onClick={(event: any) => props.replyHandler(event, props.comment, props.time)} variant="outlined" color="primary">REPLY</Button>
				</Grid>
			</Grid>
			<Grid container xs={12}>
				<ExpansionPanel square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
					<ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
						<Typography>
							<Box display="flex">
								<Box m={2}>
									<Badge badgeContent={childData.length} color="primary">
										unread messages <MailIcon />
									</Badge>
								</Box>
							</Box>
						</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography>
							{childData.map((data: any) => {
								console.log("childData: " + data)
								return (
									<>
									<Grid key={data.time} container xs={2}>
										<Card className={classes.card}>
											<CardActionArea>
												<CardMedia
													className={classes.media}
													image={data.src}
													title="Generic placeholder"
												/>
												<CardContent>
													<Typography gutterBottom variant="h5" component="h2">
														<p><i>{data.username}</i></p>
													</Typography>
												</CardContent>
											</CardActionArea>
										</Card>
									</Grid>
									<Grid container xs={10}>
										<p style={timeStampStyle}>{data.time}</p>
										<p>{data.comment}</p>
									</Grid>
									</>
								);
							})}
						</Typography>
					</ExpansionPanelDetails>
				</ExpansionPanel>
			</Grid>
				
				
		</React.Fragment>
		)
}
interface PostState {
	data: any;
	parentComment: string;
	childData: any;
	postTime: string;
	showCommentModal: boolean;
	likes: number;
	postDescription: string;
	postSrc:string;
}
interface PostProps {
	authenticated: boolean;
	username: string | null;
	password: string | null;
}
export default function Post (props: PostProps) {

	const blackoutRef:any = React.createRef();
	const [data, setData] = React.useState();
	const [parentComment, setParentComment] = React.useState();
	
	const [childData, setChildData] = React.useState();
	const [postDescription, setPostDescription] = React.useState();
	const [postSrc, setPostSrc] = React.useState();
	const [postTime, setPostTime] = React.useState();
	const [showCommentModal, setShowCommentModal] = React.useState();
	const [likes, setLikes] = React.useState();
	const classes = useStyles();
	function loadData(){
		const response:any = post("/forum/comment/get", getParam("title"), true);
		response.onload = () => {
			console.log("loading data for ..."+ console.log(location.search))
			let dat: any = JSON.parse(response.responseText);
			console.log(dat)
			
			setData(dat.commentData);
			setPostDescription(dat.description);
			setPostSrc(dat.src);
			setPostTime(dat.date);
			
			console.log("data: " + response.responseText);
		}
	}
	
	

	function getUrlParams(): URLSearchParams {
		console.log("FULL DATA: " + location.search)
	    return new URLSearchParams(location.search);
  	}
	
	function getParam(param: string): string {
	    let search = getUrlParams();
	    return search.get(param) || "";
  	}
	function postBtn(e: any, commentText:string) {
		e.preventDefault();
		let username: any = props.username;
		const response = post("/users/login", JSON.stringify({parentComment:parentComment, commentText:commentText,
			post:getParam("title"), parentTime: postTime, username:username.split("?")[0]}), true);
		response.onload = () => {
			console.log("Successfully posted comment")
		}
		window.location.reload();
  	}
	function upvoteBtn(e: any) {
		e.preventDefault();
		setLikes({ likes: likes + 1})
	}
	function downvoteBtn (e: any) {
		e.preventDefault();
		setLikes(likes - 1)
	}
	function replyBtn (e:any, parentCommentText:string, parentTimeText:string) {
		e.preventDefault();
		if (props.authenticated === true){
			setParentComment(parentCommentText);
			setPostTime(parentTimeText);
			setShowCommentModal(true);
	    } else {
	      alert("please log in or create an account to make a comment.");
	    }
		console.log("commenting");
	}
	function cancelBtn (e: any) {
    e.preventDefault();
    blackoutRef.current.style.display = "none";
  }
	function goBack(){
		window.history.back();
	}
		return (
			<React.Fragment>
			{loadData}
			<CommentModal posthandler={postBtn} show={showCommentModal} onHide={() => setShowCommentModal(false)}/>
			<Button onClick={goBack} className="btn" type="button">Back</Button>
			<Container>
				<Grid container xs={2}>
				<Card className={classes.card}>
			      <CardActionArea>
			        <CardMedia
			          className={classes.media}
			          image={postSrc}
			          title="Contemplative Reptile"
			        />
			        <CardContent>
			          <Typography gutterBottom variant="h5" component="h2">
			            <p style={styles.center}><i>{props.username}</i></p>
			          </Typography>
			     
			        </CardContent>
			      </CardActionArea>
			    </Card>
				</Grid>
				<Grid container xs={10}>
					<h3>{getParam("title")}</h3>
					<p>{postDescription}</p>
					<p style={dateStyle}>Post time: {postTime}</p>
				
				</Grid>
			</Container><hr/>
				<Grid container sm={12}>
					<Avatar
						className={classes.likeDislike}
						onClick={upvoteBtn}
						src="http://localhost:8080/upload/files/thumbsup.jpg"
						alt="Generic placeholder"
					/><pre> </pre>
					<p>{likes}</p>
					<Avatar
						className={classes.likeDislike}
						onClick={downvoteBtn}
						src="http://localhost:8080/upload/files/thumbsdown.jpg"
						alt="Generic placeholder"
					/><pre> </pre>
					<Button onClick={(e: any) => replyBtn(e, getParam("title"), getParam("date"))} variant="outlined" color="primary">REPLY</Button>
				</Grid>
				<hr/>
				<h4>Comments</h4>
				{data.map((data: any) => {
					return (
						<>
							<Grid container>
								<Paper>
										<Comment childComments={data.childComments} key={data.time} replyHandler={replyBtn} comment={data.comment} time={data.time} src={data.src} username={data.username}/>
								</Paper>
							</Grid>
						</>
					)
				})}
			</React.Fragment>
		);
}
