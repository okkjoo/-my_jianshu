import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./common/header";
import Home from "./pages/home";
import Detail from "./pages/detail";
import store from "./store";
import { GlobalStyled } from "./style.js";
import { GlobalIconfontStyle } from "./statics/iconfont/iconfont.js";
function App() {
	return (
		<Provider store={store}>
			<GlobalStyled />
			<GlobalIconfontStyle />
			<BrowserRouter>
				<Header />
				<Route path="/" exact component={Home} />
				<Route path="/detail" component={Detail} />
			</BrowserRouter>
		</Provider>
	);
}

export default App;
