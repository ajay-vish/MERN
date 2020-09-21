import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { getUser } from './../../../../_actions/user_actions';
import './ProfilePage.css';

function ProfilePage() {
	let { id } = useParams();
	const [user, setUser] = useState({});

	useEffect(() => {
		var data = getUser(id);
		data.payload.then((result) => setUser(result));
	}, []);

	if (user.success) {
		return (
			<div className='container'>
				<div>
					<img className='user-image' src={user.data.image} />
					<h1>Welcome {user.data.name}</h1>
					<h2>Email: {user.data.email}</h2>
				</div>
			</div>
		);
	} else {
		return (
			<div className='container'>
				<h1>User not found</h1>
			</div>
		);
	}
}

export default ProfilePage;
