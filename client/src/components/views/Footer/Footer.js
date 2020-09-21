import React from 'react';

function Footer() {
	return (
		<div
			style={{
				position: 'fixed',
				bottom: '0',
				right: '0',
				left: '0',
				textAlign: 'center',
				fontSize: '1rem',
				// backgroundColor: '#f6f6f6',
				padding: '1rem	',
			}}>
			Created by &#9400;&nbsp;
			<a href='https://github.com/ajay-vish/MERN'>Ajay Vishwakarma</a>
		</div>
	);
}

export default Footer;
