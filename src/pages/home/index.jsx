import React, { Component } from "react";
import { connect } from "react-redux";
import Topic from "./components/Topic";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Writer from "./components/Writer";
import { HomeWrapper, HomeLeft, HomeRight } from "./style";
import { actionCreators } from "./store";
class Home extends Component {
	componentDidMount() {
		this.props.changeHomeData();
	}
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
			</HomeWrapper>
		);
	}
}
const mapDispatchToProps = dispatch => ({
	changeHomeData() {
		const action = actionCreators.getHomeInfo();
		dispatch(action);
	},
});
export default connect(null, mapDispatchToProps)(Home);
