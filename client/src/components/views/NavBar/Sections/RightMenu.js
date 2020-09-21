/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Menu } from 'antd';
import axios from 'axios';
import { USER_SERVER } from '../../../Config';
import { withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';

function eraseCookie(name) {
	createCookie(name, '', -1);
}

function createCookie(name, value, days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
		var expires = '; expires=' + date.toGMTString();
	} else var expires = '';
	document.cookie = name + '=' + value + expires + '; path=/';
}

function RightMenu(props) {
	const user = useSelector((state) => state.user);
	const logoutHandler = () => {
		axios.get(`${USER_SERVER}/logout`).then((response) => {
			if (response.status === 200) {
				var cookies = document.cookie.split(';');
				for (var i = 0; i < cookies.length; i++)
					eraseCookie(cookies[i].split('=')[0]);
				localStorage.removeItem('userId');
				props.history.push('/login');
			} else {
				alert('Log Out Failed');
			}
		});
	};

	if (user.userData && !user.userData.isAuth) {
		return (
			<Menu mode={props.mode}>
				<Menu.Item key='mail'>
					<a href='/login'>Signin</a>
				</Menu.Item>
				<Menu.Item key='app'>
					<a href='/register'>Signup</a>
				</Menu.Item>
			</Menu>
		);
	} else {
		return (
			<Menu mode={props.mode}>
				<Menu.Item key='logout'>
					<a onClick={logoutHandler}>Logout</a>
				</Menu.Item>
			</Menu>
		);
	}
}

export default withRouter(RightMenu);
