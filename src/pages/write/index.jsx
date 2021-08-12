import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
class Write extends PureComponent {
	render() {
		const { loginStatus } = this.props;
		if (loginStatus) {
			return <div>写文章...待完善</div>;
		} else {
			return <Redirect to="/login" />;
		}
	}
}
const mapStateToProps = state => ({
	loginStatus: state.getIn(["login", "login"]),
});
const mapDispatchToProps = dispatch => ({});
export default connect(mapStateToProps, mapDispatchToProps)(Write);
