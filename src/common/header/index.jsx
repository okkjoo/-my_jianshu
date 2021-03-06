import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { actionCreators } from "./store";
import { actionCreators as loginActionCreators } from "../../pages/login/store";
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

class Header extends PureComponent {
	getListArea = () => {
		const {
			focused,
			mouseIn,
			list,
			page,
			totalPage,
			handleMouseEnter,
			handleMouseLeave,
			handleChangePage,
		} = this.props;
		if (focused || mouseIn) {
			return (
				<SearchInfo
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
				>
					<SearchInfoTitle>
						热门搜索
						<SearchInfoSwitch
							onClick={() => handleChangePage(page, totalPage, this.spinIcon)}
						>
							<i
								ref={icon => {
									this.spinIcon = icon;
								}}
								className="iconfont spin"
							>
								&#xe647;
							</i>
							换一批
						</SearchInfoSwitch>
					</SearchInfoTitle>
					<SearchInfoList>
						{list.slice((page - 1) * 10, page * 10).map((item, idx) => (
							<SearchInfoItem key={`${idx}-${item}`}>{item}</SearchInfoItem>
						))}
					</SearchInfoList>
				</SearchInfo>
			);
		} else {
			return null;
		}
	};
	render() {
		const { focused, handleInputFoucus, handleInputBlur, list, login, logout } =
			this.props;
		return (
			<HeaderWrapper>
				<Link to="/">
					<Logo />
				</Link>
				<Nav>
					<NavItem className="left active">首页</NavItem>
					<NavItem className="left">下载APP</NavItem>
					{login ? (
						<NavItem onClick={logout} className="right">
							退出
						</NavItem>
					) : (
						<Link to="/login">
							<NavItem className="right">登录</NavItem>
						</Link>
					)}

					<NavItem className="right">
						<i className="iconfont">&#xe636;</i>
					</NavItem>
					<SearchWrapper>
						<CSSTransition in={focused} timeout={200} classNames="slide">
							<NavSearch
								className={focused ? "focused" : ""}
								onFocus={() => handleInputFoucus(list)}
								onBlur={handleInputBlur}
							></NavSearch>
						</CSSTransition>
						<i className={focused ? "focused iconfont zoom" : "iconfont zoom"}>
							&#xe6dd;
						</i>
						{this.getListArea()}
					</SearchWrapper>
				</Nav>
				<Addition>
					<Link to="/write">
						<Button className="writing">
							<i className="iconfont">&#xe6eb;</i>
							写文章
						</Button>
					</Link>

					<Button className="reg">注册</Button>
				</Addition>
			</HeaderWrapper>
		);
	}
}

const mapStateToprops = state => {
	return {
		focused: state.getIn(["header", "focused"]),
		list: state.getIn(["header", "list"]),
		page: state.getIn(["header", "page"]),
		mouseIn: state.getIn(["header", "mouseIn"]),
		totalPage: state.getIn(["header", "totalPage"]),
		login: state.getIn(["login", "login"]),
	};
};
const mapDispatchToprops = dispatch => {
	return {
		handleInputFoucus(list) {
			!list.size && dispatch(actionCreators.getList());
			dispatch(actionCreators.searchFocus());
		},
		handleInputBlur() {
			dispatch(actionCreators.searchBlur());
		},
		handleMouseEnter() {
			dispatch(actionCreators.mouseEnter());
		},
		handleMouseLeave() {
			dispatch(actionCreators.mouseLeave());
		},
		handleChangePage(page, totalPage, spinIcon) {
			let originAngle = spinIcon.style.transform.replace(/[^0-9]/gi, "");
			if (originAngle) {
				originAngle = parseInt(originAngle, 10);
			} else {
				originAngle = 0;
			}
			spinIcon.style.transform = "rotate(" + (originAngle + 360) + "deg)";

			switch (page) {
				case totalPage:
					dispatch(actionCreators.changePage(1));
					break;
				default:
					dispatch(actionCreators.changePage(page + 1));
			}
		},
		logout() {
			dispatch(loginActionCreators.logout());
		},
	};
};

export default connect(mapStateToprops, mapDispatchToprops)(Header);
