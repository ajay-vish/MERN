import axios from 'axios';
import { TODO_SERVER } from '../components/Config.js';
import * as Types from './types';

export function addTodo(dataToSubmit) {
	const request = axios
		.post(`${TODO_SERVER}/add`, dataToSubmit)
		.then((response) => response.data);

	return {
		type: Types.ADD_TODO,
		payload: request,
	};
}

export function getTodo() {
	const request = axios
		.get(`${TODO_SERVER}/`)
		.then((response) => response.data);

	return {
		type: Types.TODO_LISTS,
		payload: request,
	};
}

export function getTodoByUser(user) {
	const request = axios
		.get(`${TODO_SERVER}/get/${user}`)
		.then((response) => response.data);

	return {
		type: Types.MY_TODO,
		payload: request,
	};
}

export function updateTodo(user) {
	const request = axios
		.patch(`${TODO_SERVER}/patch/${user}`)
		.then((response) => response.data);

	return {
		type: Types.UPDATE_TODO,
		payload: request,
	};
}
