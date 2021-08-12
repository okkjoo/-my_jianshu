import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { DetailWrapper, Header, Content } from "./style";
import { actionCreators } from "./store";
class Detail extends PureComponent {
	componentDidMount() {
		const {
			match: { id },
		} = this.props;
		this.props.getDetail(id);
	}

	render() {
		const { title, content } = this.props;
		return (
			<DetailWrapper>
				<Header>{title}</Header>
				<Content dangerouslySetInnerHTML={{ __html: content }} />
			</DetailWrapper>
		);
	}
}

const mapStateToProps = state => ({
	title: state.getIn(["detail", "title"]),
	content: state.getIn(["detail", "content"]),
});
const mapDispatchToProps = dispatch => ({
	getDetail(id) {
		dispatch(actionCreators.getDetail(id));
	},
});
export default connect(mapStateToProps, mapDispatchToProps)(Detail);
