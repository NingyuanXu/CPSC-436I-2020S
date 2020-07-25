import React from 'react'
import { connect } from 'react-redux';
import { deleteMessage,getMessages } from '../actions';
import "./style.css";
import Dialogue from './Dialogue';
import axios from 'axios';

class Message extends React.Component {
    async componentDidMount() {
		try {
			let response = await fetch('https://murmuring-ravine-91107.herokuapp.com/api/texts', {
				method: 'GET'
			});
            const data = await response.json();
            const retval = [];
            for (let i in data) {
                retval.push(data[i].text);
            }
            console.log(retval);
            this.props.getMessages(retval);
		} catch(e) {
            console.log(e.message);
        }
    }
    
    constructor(props) {
        super(props);
        this.state = {
            isOpen: -1
        }
    }

    deleteMessage = (index, item) => {
        console.log(index);
        (async() => {
            console.log("hhhhhh");
            await axios.delete('https://murmuring-ravine-91107.herokuapp.com/api/texts', {
                data: {
                    text: item
                }
            });
        })();
        this.props.deleteMessage(index);
    }

    showMessage = (index) => {
        this.setState({isOpen: index});
    }
 
    render() {
        const { list } = this.props;

        if (!list || !list.length) {
            return null;
        }
        return (
            <div className="message">
                                            <ul>

                {
                    list.map((item, index) => {
                        return (
                            <li key={index} className="messageItem">
                                <label onClick={(e) => this.showMessage(index)}>{item}</label>
                                <span className="close" onClick={() => this.deleteMessage(index,item)}>x</span>
                                <Dialogue isOpen={this.state.isOpen} id={index} onClose={(e) => this.setState({isOpen: -1})}>  message position: {index} - length: {item.length}</Dialogue>
                            </li>
                        )
                    })
                }
                                            </ul>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
return { list: state.list };
}

export default connect(mapStateToProps,{ deleteMessage, getMessages })(Message);

