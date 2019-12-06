import React from 'react'
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';



export default function About () {
	return (
		<React.Fragment>
			<Container>
				<h2>About us</h2><br/>
				<p>I am a software developer and work on many projects in my free time. After looking for a reliable way to download videos from places like youtube what I found was a bunch of sketchy websites.
				Due to my skeptical nature I didnt know what could possibly be going on in the background after 'converting' a youtube video that I liked. Due to this concern and my understanding of programming
				I decided to make my own converter with privacy and security as my priority. This website is the result of that project. </p>
				<p>If you like this website I would love to hear your <Link to="Contact">feedback</Link> or thoughts of how I could improve this service. Thank you very much for using my website</p>
	
				<p> Feel free to post your concerns questions or suggestions on the <Link to="Forum">forums</Link> or email me at <strong> Ramis_Tahmasebi@outlook.com</strong></p>
			</Container>
		</React.Fragment>

	);
}

