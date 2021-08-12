import { fromJS } from "immutable";
import * as constants from "./constants";
const defaultState = fromJS({
	title: "",
	content: "",
});
const reducer = (state = defaultState, action) => {
	const { type } = action;
	switch (type) {
		case constants.CHANGE_DETAIL:
			return state.merge({
				title: action.title,
				content: action.content,
			});
		default:
			return state;
	}
};
export default reducer;
