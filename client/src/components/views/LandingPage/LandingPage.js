import React, { useState, useEffect } from 'react';
import { FaCode } from 'react-icons/fa';
import { getUser } from './../../../_actions/user_actions';
import './LandingPage.css';
import Loading from './../Loading/Loading';

function LandingPage() {
	let [user, setUser] = useState({});
	let [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		var data = getUser(localStorage.getItem('userId'));
		data.payload.then((result) => setUser(result));
		setTimeout(() => {
			setIsLoading(false);
		}, 1000);
	}, []);

	if (isLoading) {
		return <Loading />;
	} else {
		if (user.success) {
			return (
				<div className='container'>
					<div>
						<img className='user-image' src={user.data.image} />
						<h1>Welcome {user.data.name}</h1>
						<h2>Email: {user.data.email}</h2>
						<FaCode style={{ fontSize: '4rem' }} />
						<br></br>
						<a href='/todo' classList='todo-link'>
							<h2>See Todo list</h2>
						</a>
					</div>
				</div>
			);
		} else {
			return (
				<div className='container'>
					<h1>Please Login or Sign Up</h1>
				</div>
			);
		}
	}
}

export default LandingPage;
