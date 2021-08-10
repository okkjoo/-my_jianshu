import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import Topic from "./components/Topic";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Writer from "./components/Writer";
import { HomeWrapper, HomeLeft, HomeRight } from "./style";
class Home extends Component {
	componentDidMount() {
		const { changeHomeData } = this.props;
		axios.get("/api/home.json").then(res => {
			const result = res.data.data;
			const action = {
				type: "change_home_data",
				topicList: result.topicList,
				articleList: result.articleList,
				recommendList: result.recommendList,
			};
			changeHomeData(action);
		});
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
	changeHomeData(action) {
		dispatch(action);
	},
});
export default connect(null, mapDispatchToProps)(Home);
