import React from 'react'

import { post, get} from '../static/axios';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import LinearProgress from '@material-ui/core/LinearProgress';
import Paper from '@material-ui/core/Paper';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Snack from '../static/Snack';

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
		root: {
			width: '100%',
			'& > * + *': {
				marginTop: theme.spacing(2),
			},
		},
		textField: {
			marginLeft: theme.spacing(1),
			marginRight: theme.spacing(1),
			width: "100%"
		},
		formControl: {
			margin: theme.spacing(3),
		},
		inputForm: {
			textAlign: "center",
			padding: "30px 0 0 0",
			width: "100vw",
			margin: "0px auto 50px auto",
		},
		form: {
			margin: "0px auto 10px auto",
			width: "100%"
		},
		inputFormInput: {
			width: "85%",
			display: "inline-block",
		},
		inputFormButton: {
			height: "100%",
			margin: "0px",
		}
	}),
);

interface ProgressProps {
	progressValue: number;
}
function ProgressBar(props: ProgressProps) {
	const classes = useStyles();
	const [completed, setCompleted] = React.useState(0);

	React.useEffect(() => {
		function progress() {
			setCompleted(oldCompleted => {
				if (oldCompleted === 100) {
					return 0;
				}
				return Math.min(props.progressValue, 100);
			});
		}

		const timer = setInterval(progress, 500);
		return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className={classes.root}>
      <LinearProgress variant="determinate" value={completed} />
    </div>
  );
}


interface loadingModalProps {
	progress: string;
	onHide: () => void;
	show: boolean;
}

function LoadingModal(props: loadingModalProps) {
  const classes = useStyles();

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.show}
        onClose={props.onHide}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}>
        <Fade in={props.show}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Downloading your file</h2>
			<ProgressBar progressValue={parseInt(props.progress)}/>
        <h4>Downloading... {props.progress} %</h4>
        <p>
          Please wait while your file is being downloaded. Feel free to use this service as many
          times as you want.<br/>

          A button link will be provided shortly....
        </p>
        <Button variant="contained" color="secondary" onClick={props.onHide}>
            Close
        </Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}


function SubmitForm() {
	const containerRef:any = React.createRef();
	const getRef: any = React.createRef();
	const downloadBtnRef: any = React.createRef();
	
	const [ext, setExt] = React.useState("mp4");
	const [type, setType] = React.useState("Audio");
	const [showLoading, setShowLoading] = React.useState(false);
	const [loadingProgress, setLoadingProgress] = React.useState("0");
	const [open, setOpen] = React.useState(false);
    const [message, setMessage] = React.useState("");
	const [varient, setVarient] = React.useState<"success" | "error" | "warning" | "info">("info");
	const classes = useStyles();


  const handleChangeType = (event: React.ChangeEvent<HTMLInputElement>) => {
    setType((event.target as HTMLInputElement).value);
  };
	const handleChangeExt = (event: React.ChangeEvent<HTMLInputElement>) => {
    setExt((event.target as HTMLInputElement).value);
  };	
	
	 function handleChangeAlertShow (event: any, show: boolean) {
		setOpen(show);
    }
    function openHandler(val: boolean) {
        setOpen(val);
    }
	function get (e: any) {
		e.preventDefault();
		setOpen(false);
        var URLinput = getRef.current.value.split("=")[1];

        console.log("as " + URLinput + ", " + type + ", " + ext)
		if (URLinput === undefined || null){
			setVarient("warning");
			setMessage("Invalid url try another or look carefully to correct it.");
			setOpen(true);
	  	} else {
            
			const response = post("/download", JSON.stringify({url:URLinput, type:type, extension:ext}), true);
			response.onload = () => {
				var sse:EventSource = new EventSource("http://localhost:8080/download/sse");
		  		sse.onopen = () => {
                    setShowLoading(true);
                    sse.onmessage = evt => {
                        setLoadingProgress(evt.data);
                        if (evt.data === "100") {
                            setShowLoading(false)
                            var url: string = "http://localhost:8080/download/video/" + URLinput;
                            containerRef.current.innerHTML = `<Button color='secondary' href=${url} onClick={downloadFromServer}>Download</Button>`;
                            containerRef.current.style.display = "block";
                            sse.close();
                        }
                    }
		  		}
	  			
				sse.onerror = () => {
  					console.log("EventSource failed.");
					setShowLoading(false);
  					console.log("Closing connecton...");
  					sse.close();
  				}
			}
  		}
  	}
  	function downloadFromServer () {
    	var url:string = downloadBtnRef.current.value;
    	window.location.href = url;
	}
	return (
		<React.Fragment>
            <Snack openHandler={openHandler} open={open} varient={varient} message={message}/>
            <Grid container xs={12} >
                <LoadingModal progress={loadingProgress} show={showLoading} onHide={() => setShowLoading(false)}/>
                <Container className={classes.inputForm}>
				    <form className={classes.form}>
					    <FormGroup>
						    <Grid container xs={12}>
							    <Grid item xs={10}>
								    <TextField
									    inputRef={getRef}
									    id="standard-basic"
									    className={classes.textField}
									    label="https://www.youtube.com"
									    variant="outlined"
								    />
							    </Grid>
							    <Grid container xs={2}  justify="flex-start" alignItems="flex-start">
								    <Button onClick={get} className={classes.inputFormButton} variant="contained" color="primary">GET</Button>
							    </Grid>
						    </Grid>
					    </FormGroup>
					    <FormGroup>
                            <Grid container xs={12}>
	                            <Grid item xs={4}>
						            <FormControl component="fieldset" className={classes.formControl}>
					                    <FormLabel component="legend">Data Type</FormLabel>
					                    <RadioGroup aria-label="gender" name="gender1" value={type} onChange={handleChangeType} row>
					                      <FormControlLabel value="Audio" control={<Radio  color="primary" />} label="Audio" labelPlacement="start"/>
					                      <FormControlLabel value="Video" control={<Radio  color="primary" />} label="Video" labelPlacement="start"/>
					                    </RadioGroup>
					                  </FormControl>
	                            </Grid>
	                            <Grid item xs={6}>
						            <FormControl component="fieldset" className={classes.formControl}>
					                    <FormLabel component="legend">File Type</FormLabel>
					                    <RadioGroup aria-label="gender" name="gender2" value={ext} onChange={handleChangeExt} row>
					                      <FormControlLabel value="mp4" control={<Radio />} label="mp4" labelPlacement="start"/>
					                      <FormControlLabel value="mp3" control={<Radio />} label="mp3" labelPlacement="start"/>
					                      <FormControlLabel value="wav" control={<Radio />} label="wav" labelPlacement="start"/>
					                      <FormControlLabel value="webm" control={<Radio />} label="webm" labelPlacement="start"/>
								            <FormControlLabel value="flv" control={<Radio />} label="flv" labelPlacement="start"/>
								            <FormControlLabel value="hls" control={<Radio />} label="hls" labelPlacement="start"/>
					                    </RadioGroup>
					                  </FormControl>
	                            </Grid>
	                        </Grid>
	                    </FormGroup>
	                </form>
                    <Grid container xs={12}>
	                    <Grid xs={4}>
                            <Container component="div" style={{ display: "none"}} className="container-fluid" ref={containerRef}>
                                
                            </Container>
	                    </Grid>
                    </Grid>
	            </Container>
			</Grid>
        </React.Fragment>
	);
}
class InfoPanel extends React.Component {
	render(){
		return (
			<Paper>
				<Container>
					<Typography variant="h5" component="h3">
						<i>This site is under construction.</i>
					</Typography>
					<Typography component="p">
						The main reason for this site is to download audio files from youtube/ soon will support more
						sites and possibly the ability to download the whole video including visual and audio. depending on
						what people want<br/><br/><br/>
						Testing URL: https://www.youtube.com/watch?v=pcPi4jPAR2c
					</Typography>
				</Container>
			</Paper>
		)
	}
}
export default class Index extends React.Component {
	render(){
		return (
			<React.Fragment>
				<SubmitForm/>
				<InfoPanel/>
			</React.Fragment>
		);
	}
}
