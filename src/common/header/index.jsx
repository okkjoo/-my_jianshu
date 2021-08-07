import React,{Component} from "react";
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
	SearchInfo,
	SearchInfoTitle,
	SearchInfoSwitch,
	SearchInfoList,
	SearchInfoItem,
	Addition,
	Button,
} from "./style";



class Header extends Component {
	getListArea = ()=>{
		if(this.props.focused){
			return (
				<SearchInfo>
					<SearchInfoTitle>
						热门搜索
						<SearchInfoSwitch>换一批</SearchInfoSwitch>
					</SearchInfoTitle>
					<SearchInfoList>
						{
							this.props.list.map((item,idx)=>{
								return <SearchInfoItem key={`${idx}-${item}`}>{item}</SearchInfoItem>
							})
						}
					</SearchInfoList>
				</SearchInfo>
			)
		}else{
			return null
		}
	}
	render(){
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
						in={this.props.focused}
						timeout={200}
						classNames='slide'
					>
						<NavSearch
							className={this.props.focused ? "focused" : ""}
							onFocus={this.props.handleInputFoucus}
							onBlur={this.props.handleInputBlur}
						>
						</NavSearch>
					</CSSTransition>							
					<i className={this.props.focused ? "focused iconfont" : "iconfont"}>
						&#xe6dd;
					</i>
					{this.getListArea()}
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



const mapStateToprops = (state)=>{
	return{
		focused:state.getIn(['header','focused']),
		list:state.getIn(['header','list'])
	}
}
const mapDispatchToprops = (dispatch) =>{
	return{
		handleInputFoucus(){
			dispatch(actionCreators.getList())
			dispatch(actionCreators.searchFocus())
		},
		handleInputBlur(){
			dispatch(actionCreators.searchBlur())
		}
	}
}

export default connect(
	mapStateToprops,
	mapDispatchToprops,
)(Header)