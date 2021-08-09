import React, { Component } from "react";
import { ListItem, ListInfo } from "../style";
import { connect } from "react-redux";
class List extends Component {
	render() {
		const { articleList } = this.props;
		return (
			<div>
				{articleList.map((item, idx) => (
					<ListItem key={item.get("id")}>
						<img className="list-pic" src={item.get("imgUrl")} alt="" />
						<ListInfo>
							<h3 className="title">{item.get("title")}</h3>
							<p className="desc">{item.get("desc")}</p>
						</ListInfo>
					</ListItem>
				))}
			</div>
		);
	}
}
const mapStateToProps = state => ({
	articleList: state.getIn(["home", "articleList"]),
});
export default connect(mapStateToProps, null)(List);
