import React from 'react';

class MessageList extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
    	<div>
			<div class="row">
				<ul id="my-list">
					<li>
						Will (male) says: I love sweety fish!
						<span class="close">x</span>
					</li>
					<li> 
						Yue (female) says: I love milky piggy!
						<span class="close">x</span>
					</li>
				</ul>
			</div>

			<div class="rows">
				<input type="submit" id="show" value="Show Messages"/>
				<input type="submit" id="hide" value="Hide Messages"/>
				<input type="submit" id="clear" value="Clear All Messages"/>
			</div>
		</div>
    );
  }
}

export default MessageList;