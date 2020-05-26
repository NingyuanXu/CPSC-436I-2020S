import React from 'react';
import './style.css';

class ContentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: '',
      gender: 'male',
      text: ''};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  handleSubmit = event => {
    if (this.state.fullname === "" || this.state.text === "") {
      alert("Please fill in your name, gender, and text!");
    } 
    else {
     alert(this.state.text);
    }
  }

  handleChange = event => {
     this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    const { fullname, gender, text } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
      <div class="row">
        <div class="col-25">
          <label for="fname">
            Full name
          </label>
        </div>
        <div class="col-75">
          <input type="text" id="fname" name="fullname" value={this.state.fullname} placeholder="Your name here..." onChange={this.handleChange}/>
        </div>
      </div>
      <div class="row">
        <div class="col-25">
          <label for="gender">
            Gender
          </label>
        </div>
      <div class="col-75">
        <select id= "gender" name="gender" value={this.state.gender} onChange={this.handleChange}>
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
          <textarea id="text" name="text" value={this.state.text} placeholder="Your message here..." onChange={this.handleChange}></textarea>
        </div>
      </div>
      <div><input type="submit" id="add-submit" value="Add Message"/></div>
      </form>
    );
  }
}

export default ContentForm