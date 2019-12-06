import * as React from 'react'
import { Document, Page } from 'react-pdf/dist/entry.webpack';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

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
const RowStyle:React.CSSProperties = {
	backgroundColor: "rgb(33, 37, 41)", 
	display: 'flex', 
	zIndex: 20, 
	justifyContent: 'top', 
	position: "fixed", 
	minWidth: "350px", 
	maxWidth: "1140px" ,
}
interface ViewPDFState {
	numPages: number;
	pageNumber: number;
	file: any;
	scale: number;
}
interface ViewPDFProps {
	
}
class ViewPDF extends React.Component<ViewPDFProps, ViewPDFState> {
	private scroller: any;
	public state:ViewPDFState = {
      numPages: 0,
      pageNumber: 0,
      file: null,
      scale: 1,
    }
  constructor(props: ViewPDFProps) {
    super(props);
      this.scroller = React.createRef();
  }

  onDocumentLoadSuccess = (numPages: any) => {
	console.log("loading " + numPages.numPages + " pages...")
    this.setState({ numPages: numPages.numPages });
  }
  nextPage = () => {
    this.setState({ pageNumber: this.state.pageNumber + 1});
  }
  previousPage = () => {
    this.setState({ pageNumber: this.state.pageNumber - 1});
  }
  onFileChange = (event: any) => {
    this.setState({
      file: event.target.files[0],
    });
  }
    onPageChange = (event: any) => {
        this.scroller.current.scrollTo(0, this.scroller.current.getElementsByTagName("canvas")[event.target.value - 1].getBoundingClientRect().top);

	}
    zoomIn = () => {
        this.setState({ scale: this.state.scale + 0.1})
        this.scroller.current.style.transform = 'scale(' + this.state.scale + ')';

    }
    zoomOut = () => {
        this.setState({ scale: this.state.scale - 0.1 })
        this.scroller.current.style.transform = 'scale(' + this.state.scale + ')';
    }
    render() {
        
		const { pageNumber, numPages, file } = this.state;
        if (file !== undefined && file !== null){
			
			function range() {
				let array:Array<number> = new Array<number>(numPages);
				for (let i = 1; i <= numPages; i++){
					array[i] = i;
				}
			  	return array;
			}
			
			var result = range();
			console.log("num: " + result)
	
	
	
	
	
            return (
                <Grid sm={12}>
                    <Grid sm={12}>
                        <p style={{ color: "white" }}><input type='file' onChange={this.onFileChange} /><input onChange={this.onPageChange} placeholder={this.state.pageNumber.toString()} style={{ width: "30px" }} />/{numPages}</p><Button onClick={this.zoomIn} > +</Button><Button onClick={this.zoomOut}>-</Button>
			        </Grid><br/><br/>
					<Grid container xs={12} justify="center" alignItems="center">
	                    <div ref={this.scroller} style={{ display: 'flex', justifyContent: 'center', overflow:"auto"}}>
	                        <Document file={file} onLoadSuccess={this.onDocumentLoadSuccess}>
				                {result.map( (page: any)  => (
				        	        <Page key={page} pageNumber={page}/>
				                ))}
					        </Document>
			            </div>
					</Grid>
                </Grid>
            );
        } else {
            return (
              <React.Fragment>
                <input type='file' onChange={this.onFileChange}/>
              </React.Fragment>
            )
        }

    }
}

export default ViewPDF;
