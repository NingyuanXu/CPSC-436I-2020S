import React from 'react';
import Headernav from './Headernav'
import MessageList from './MessageList'
import ContentForm from './ContentForm'
import './style.css';



const App = () => {   //this is how you make a functional component
  return (
	<div>
		<Headernav/>
  			<div class="container">
  				<ContentForm/>
  				<MessageList/>
			</div>
	</div>

);
}


export default App;
