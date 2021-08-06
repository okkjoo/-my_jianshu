import React from "react";
import {connect} from 'react-redux'
import {CSSTransition} from 'react-transition-group'
import {actionCreators} from './store'
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

const Header =(props)=>{
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
					<CSSTransition
						in={props.focused}
						timeout={200}
						classNames='slide'
					>
						<NavSearch
							className={props.focused ? "focused" : ""}
							onFocus={props.handleInputFoucus}
							onBlur={props.handleInputBlur}
						>
						</NavSearch>
					</CSSTransition>							
					<i className={props.focused ? "focused iconfont" : "iconfont"}>
						&#xe6dd;
					</i>
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


const mapStateToProps = (state)=>{
	return{
		focused: state.header.focused
	}
}
const mapDispatchToProps = (dispatch) =>{
	return{
		handleInputFoucus(){
			dispatch(actionCreators.searchFocus())
		},
		handleInputBlur(){
			dispatch(actionCreators.searchBlur())
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Header)