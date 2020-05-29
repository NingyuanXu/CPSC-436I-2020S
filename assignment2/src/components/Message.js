import React from 'react'
import { connect } from 'react-redux';
import { deleteMessage } from '../actions';
import "./style.css";
import Dialogue from './Dialogue';



class Message extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    deleteMessage = (index) => {
        this.props.deleteMessage(index);
    }

    showMessage = (index) => {
        this.setState({isOpen: !this.state.isOpen});
    }
 
    render() {
        const { list } = this.props;

        if (!list || !list.length) {
            return null;
        }
        return (
            <div className="message">
                {
                    list.map((item, index) => {
                        return (
                        	<ul>
                            <li key={index} className="messageItem">
                                <label onClick={(e) => this.showMessage(index)}>{item}</label>
                                <span className="close" onClick={() => this.deleteMessage(index)}>x</span>
                                <Dialogue isOpen={this.state.isOpen}>  Message id: {index}</Dialogue>
                            </li>
                            </ul>
                        )
                    })
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
return { list: state.list };
}

export default connect(mapStateToProps,{ deleteMessage })(Message);

