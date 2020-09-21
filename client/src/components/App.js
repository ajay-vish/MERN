import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Auth from '../hoc/auth';
// pages for this product
import LandingPage from './views/LandingPage/LandingPage';
import LoginPage from './views/LoginPage/LoginPage';
import RegisterPage from './views/RegisterPage/RegisterPage';
import NavBar from './views/NavBar/NavBar';
import Footer from './views/Footer/Footer';
import ProfilePage from './views/User/Profile/ProfilePage';
import TodoList from './views/User/TodoList/TodoList';

//null   Anyone Can go inside
//true   only logged in user can go inside
//false  logged in user can't go inside

function App() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<NavBar />
			<div
				style={{
					paddingTop: '69px',
					minHeight: '100vh',
				}}>
				<Switch>
					<Route exact path='/' component={Auth(LandingPage, null)} />
					<Route exact path='/user/:id' component={Auth(ProfilePage, true)} />
					<Route exact path='/todo' component={Auth(TodoList, true)} />
					<Route exact path='/login' component={Auth(LoginPage, false)} />
					<Route exact path='/register' component={Auth(RegisterPage, false)} />
				</Switch>
			</div>
			<Footer />
		</Suspense>
	);
}

export default App;
