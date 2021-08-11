import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { ListItem, ListInfo, LoadMore } from "../style";
import { actionCreators } from "../store";
import { Link } from "react-router-dom";
class List extends PureComponent {
	render() {
		const { articleList, getMoreList, page } = this.props;
		return (
			<div>
				{articleList.map((item, idx) => (
					<Link key={idx} to="/detail">
						<ListItem>
							<img className="list-pic" src={item.get("imgUrl")} alt="" />
							<ListInfo>
								<h3 className="title">{item.get("title")}</h3>
								<p className="desc">{item.get("desc")}</p>
							</ListInfo>
						</ListItem>
					</Link>
				))}
				<LoadMore onClick={() => getMoreList(page)}>更多内容</LoadMore>
			</div>
		);
	}
}
const mapStateToProps = state => ({
	articleList: state.getIn(["home", "articleList"]),
	page: state.getIn(["home", "articlePage"]),
});
const mapDispatchToProps = dispatch => ({
	getMoreList(page) {
		dispatch(actionCreators.getMoreList(page));
	},
});
export default connect(mapStateToProps, mapDispatchToProps)(List);
