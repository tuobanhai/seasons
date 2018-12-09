import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './spinner';

class App extends React.Component {
	// constructor(props) {
	// 	super(props);

	// 	this.state = { latt: null, errMessage: '' };

	// }	

	state= {latt: null, errMessage: ''};
	
	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
			position => this.setState({latt: position.coords.latitude }),
			err => this.setState({errMessage: err.message})
			);
	}
	
	renderContent() {
		if(this.state.errMessage && !this.state.latt){
				return <div>Error: {this.state.errMessage}</div>;
		}

		if(!this.state.errMessage&& this.state.latt){
				return <SeasonDisplay latt={this.state.latt}/>
		}

		return <Spinner message="Please accept location request" />;
	}

		//react ask to define render
	render(){
		return(
			<div className="border red">{this.renderContent()}</div>
		);
	};
}

ReactDOM.render(
    <App />, 
    document.querySelector('#root')
);