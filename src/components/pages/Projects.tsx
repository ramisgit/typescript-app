import React from 'react'
import ViewPDF from '../static/pdf';

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



export default class Projects extends React.Component {
	render(){
		return (
			<React.Fragment>

					<h4 style={styles.center}>PDF Viewer</h4>
					<ViewPDF/>

      </React.Fragment>

		);
	}

}
