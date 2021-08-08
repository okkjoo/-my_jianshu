import * as constants from "./constants";
import { fromJS } from "immutable";
const defaultState = fromJS({
	focused: false,
	mouseIn: false,
	list: [],
	page: 1,
	totalPage: 1,
});
const reducer = (state = defaultState, action) => {
	const { type, data, totalPage, targetPage } = action;
	switch (type) {
		case constants.SEARCH_FOCUS:
			return state.set("focused", true);
		case constants.SEARCH_BLUR:
			return state.set("focused", false);
		case constants.CHANGE_LIST:
			return state.merge({
				list: data,
				totalPage,
			});
		case constants.MOUSE_ENTER:
			return state.set("mouseIn", true);
		case constants.MOUSE_LEAVE:
			return state.set("mouseIn", false);
		case constants.CHANGE_PAGE:
			return state.set("page", targetPage);
		default:
			return state;
	}
};
export default reducer;
