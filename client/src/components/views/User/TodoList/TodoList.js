import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';
import SendTwoToneIcon from '@material-ui/icons/SendTwoTone';
import './TodoList.css';

const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
			width: '30vh',
		},
	},
}));

function TodoList() {
	const [todoList, setTodoList] = useState([]);
	const [todo, setTodo] = useState('');
	const classes = useStyles();

	// useEffect =
	// 	(() => {
	// 		//get data from server
	// 	},
	// 	[]);
	return (
		<div className='container'>
			<div>
				<ul>
					{/* {todoList.map((todo) => {
						<li>todo</li>;
					})} */}
					<li>Hello</li>
					<li>{todo}</li>
				</ul>
				<form className={classes.root} noValidate autoComplete='off'>
					<div className='flex-container'>
						<TextField
							label='Todo'
							value={todo}
							onChange={(e) => setTodo(e.target.value)}
						/>
						<label htmlFor='icon-button-file'>
							<IconButton color='primary' className='button' component='span'>
								<SendTwoToneIcon />
							</IconButton>
						</label>
					</div>
				</form>
			</div>
		</div>
	);
}

export default TodoList;
