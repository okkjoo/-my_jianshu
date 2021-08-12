import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { LoginWrapper, LoginBox, Input, Button } from "./style";
import { actionCreators } from "./store";
class Login extends PureComponent {
	render() {
		const { login, loginStatus } = this.props;
		if (!loginStatus) {
			return (
				<LoginWrapper>
					<LoginBox>
						<Input
							placeholder="账号"
							ref={e => {
								this.account = e;
							}}
						/>
						<Input
							placeholder="密码"
							type="password"
							ref={e => {
								this.password = e;
							}}
						/>
						<Button onClick={() => login(this.account, this.password)}>
							登录
						</Button>
					</LoginBox>
				</LoginWrapper>
			);
		} else {
			return <Redirect to="/" />;
		}
	}
}

const mapStateToProps = state => ({
	loginStatus: state.getIn(["login", "login"]),
});
const mapDispatchToProps = dispatch => ({
	login(accountE, passwordE) {
		dispatch(actionCreators.login(accountE.value, passwordE.value));
	},
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);
