import React from 'react';
import Footer from './Footer'
import Message from './Message'
import HeaderNav from './Headernav'
import './style.css';



const App = () => {  
  return (
	<div>
		<HeaderNav/>
		<div className="Container">
		<Footer />
		<Message />
		</div>
	</div>
);
}

export default App;
