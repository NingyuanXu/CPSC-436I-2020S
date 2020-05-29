import React from 'react';
import './style.css'; 


class Dialogue extends React.Component {
  render() {

    let dialogue = (
      <div>
        {this.props.children}
      </div>
      );

      if (!this.props.isOpen) {
        dialogue = null;
      }
    
      return (
        <div className="detailed-view">
          {dialogue}
        </div>
      );
  }
}

export default Dialogue;