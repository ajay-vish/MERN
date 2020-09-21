import React from 'react';
import { Menu } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
	return (
		<Menu mode={props.mode}>
			<Menu.Item key='mail'>
				<a href='/'>Home</a>
			</Menu.Item>
			<SubMenu title={<span>TodoList</span>}>
				<MenuItemGroup title='Current'>
					<Menu.Item key='setting:1'>Today</Menu.Item>
				</MenuItemGroup>
				<MenuItemGroup title='Upcoming'>
					<Menu.Item key='setting:2'>Tomorrow</Menu.Item>
					<Menu.Item key='setting:3'>+2 Days</Menu.Item>
					<Menu.Item key='setting:4'>See All..</Menu.Item>
				</MenuItemGroup>
			</SubMenu>
		</Menu>
	);
}

export default LeftMenu;
