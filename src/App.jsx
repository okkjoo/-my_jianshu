import React from "react";
import { Provider } from "react-redux";
import Header from "./common/header";
import store from "./store";
import { GlobalStyled } from "./style.js";
import { GlobalIconfontStyle } from "./statics/iconfont/iconfont.js";
function App() {
	return (
		<Provider store={store}>
			<GlobalStyled />
			<GlobalIconfontStyle />
			<Header />
		</Provider>
	);
}

export default App;
