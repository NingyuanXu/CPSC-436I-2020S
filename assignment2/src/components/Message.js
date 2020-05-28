import React from 'react'
import { connect } from 'react-redux';
import { deleteMessage } from '../actions';
import "./style.css";



class Message extends React.Component {
    constructor(props) {
        super(props);
    }

    deleteMessage = (index) => {
        this.props.deleteMessage(index);
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
                                {item}
                                <span className="close" onClick={() => this.deleteMessage(index)}>x</span>
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

