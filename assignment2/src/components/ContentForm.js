import React from 'react';
import './style.css';

class ContentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div>
      <div class="row">
        <div class="col-25">
          <label for="fname">
            Full name
          </label>
        </div>
        <div class="col-75">
          <input type="text" id="fname" name="fullname" placeholder="Your name here..." />
        </div>
      </div>
      <div class="row">
        <div class="col-25">
          <label for="gender">
            Gender
          </label>
        </div>
      <div class="col-75">
        <select id= "gender" name="Gender">
          <option value="male">
            Male
          </option>
          <option value="female">
            Female
          </option>
          <option value="other">
            Other
          </option>
        </select>
        </div>
      </div>
      <div class="row">
        <div class="col-25">
          <label for="text">
            Text
          </label>
        </div>
        <div class="col-75">
          <textarea id="text" name="text" placeholder="Your message here..."></textarea>
        </div>
      </div>
      <div><input type="submit" id="add-submit" value="Add Message"/></div>
      </div>
    );
  }
}

export default ContentForm