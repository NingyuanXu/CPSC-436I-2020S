import React from 'react';
import { clearMessages } from "../actions/index";
import { connect }from 'react-redux';

class ClearButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        fetch('http://localhost:9000/api/textsClear', {
            method: 'DELETE',
        }).then(res => this.props.clearMessages(res)).catch(
            console.log('not clear at all')
        );
    }

    render() {
        return (
            <button className={'clearButton'} onClick={this.handleClick}>
                Clear messages
            </button>
            )
    }
}

const mapStateToProps = state => ({
    list: state.list
});

export default connect(mapStateToProps,{ clearMessages })(ClearButton)