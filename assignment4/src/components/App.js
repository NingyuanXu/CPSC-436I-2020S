import React from 'react';
import Footer from './Footer'
import Message from './Message'
import HeaderNav from './Headernav'
import ClearButton from './ClearButton'
import './style.css';



const App = () => {  
  return (
	<div>
		<HeaderNav/>
		<div className="Container">
		<Footer />
		<Message />
		<ClearButton />
		</div>
	</div>
);
}

export default App;
