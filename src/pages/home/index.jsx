import React, { PureComponent } from "react";
import { connect } from "react-redux";
import Topic from "./components/Topic";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Writer from "./components/Writer";
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from "./style";
import { actionCreators } from "./store";
class Home extends PureComponent {
	handleScrollTop = () => {
		window.scrollTo(0, 0);
	};
	bindEvents = () => {
		const { changeScrollTopShow } = this.props;
		window.addEventListener("scroll", changeScrollTopShow);
	};

	componentDidMount() {
		this.props.changeHomeData();
		this.bindEvents();
	}
	componentWillUnmount() {
		const { changeScrollTopShow } = this.props;
		window.removeEventListener("scroll", changeScrollTopShow);
	}
	shouldComponentUpdate() {}
	render() {
		return (
			<HomeWrapper>
				<HomeLeft>
					<img
						className="banner-img"
						src="https://cdn.pixabay.com/photo/2018/05/30/00/24/thunderstorm-3440450__340.jpg"
						alt="aa"
					></img>
					<Topic />
					<List />
				</HomeLeft>
				<HomeRight>
					<Recommend />
					<Writer />
				</HomeRight>
				{this.props.showScroll ? (
					<BackTop onClick={this.handleScrollTop}>↑</BackTop>
				) : null}
			</HomeWrapper>
		);
	}
}
const mapStateToProps = state => ({
	showScroll: state.getIn(["home", "showScroll"]),
});
const mapDispatchToProps = dispatch => ({
	changeHomeData() {
		dispatch(actionCreators.getHomeInfo());
	},
	changeScrollTopShow(e) {
		if (document.documentElement.scrollTop > 400) {
			dispatch(actionCreators.toggleScrollTopShow(true));
		} else {
			dispatch(actionCreators.toggleScrollTopShow(false));
		}
	},
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
