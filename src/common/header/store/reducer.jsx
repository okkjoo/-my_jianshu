import * as constants from "./constants";
import { fromJS } from "immutable";
const defaultState = fromJS({
	focused: false,
	list: [],
});
const reducer = (state = defaultState, action) => {
	const { type, data } = action;
	switch (type) {
		case constants.SEARCH_FOCUS:
			return state.set("focused", true);
		case constants.SEARCH_BLUR:
			return state.set("focused", false);
		case constants.CHANGE_LIST:
			return state.set("list", data);

		default:
			return state;
	}
};
export default reducer;
