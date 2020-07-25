import React from 'react';
import { connect } from 'react-redux';
import { addMessage } from '../actions';
import './style.css';
import axios from 'axios';


class Footer extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            inputMessage: '',
        }
    }

     handleChange = (e) => {
        const inputMessage = e.target.value;
        this.setState({
            inputMessage
        })
    }

addMessage = () => {
		const { inputMessage } = this.state;
		let idToBeAdded = 0;
		idToBeAdded += this.props.list.length;
		console.log(idToBeAdded);
		axios.post('https://murmuring-ravine-91107.herokuapp.com/api/texts', {
				id: idToBeAdded,
				text: inputMessage
		})
    	if (String(inputMessage)) {
    		this.props.addMessage(inputMessage);
    		this.setState({
    			inputMessage: '',
    		})
    	} else {
    		alert('You must enter a message!');
    	}
	}

    render() {
    	const {inputMessage} = this.state;
    	return (
    		<div className="row">
    			<label for="add-message">Enter the message:</label>
    			<input
    				   type = "search" 
    				   id = "add-message"
    				   value={inputMessage}
    				   placeholder="add text"
    				   onChange={this.handleChange}
    			/>
    			 <button onClick={this.addMessage}>Submit</button>
    		</div>

    	);
    }
}

const mapStateToProps = (state) => {
return {list: state.list};
}


export default connect(mapStateToProps,{ addMessage })(Footer);