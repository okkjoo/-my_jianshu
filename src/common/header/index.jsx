import React, { Component } from "react";
import {
	HeaderWrapper,
	Logo,
	Nav,
	SearchWrapper,
	NavItem,
	NavSearch,
	Addition,
	Button,
} from "./style";

export default class Header extends Component {
	render() {
		return (
			<HeaderWrapper>
				<Logo />
				<Nav>
					<NavItem className="left active">首页</NavItem>
					<NavItem className="left">下载APP</NavItem>
					<NavItem className="right">登录</NavItem>
					<NavItem className="right">
						<i className="iconfont">&#xe636;</i>
					</NavItem>
					<SearchWrapper>
						<NavSearch/>
						<i className="iconfont">&#xe6dd;</i>
					</SearchWrapper>
				</Nav>
				<Addition>
					<Button className="writing">
						<i className="iconfont">&#xe6eb;</i>
						写文章
					</Button>
					<Button className="reg">注册</Button>
				</Addition>
			</HeaderWrapper>
		);
	}
}
