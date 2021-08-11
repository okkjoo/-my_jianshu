import { fromJS } from "immutable";
import * as constants from "./constants";
const defaultState = fromJS({
	topicList: [],
	articleList: [],
	recommendList: [],
	articlePage: 1,
	showScroll: false,
});
const reducer = (state = defaultState, action) => {
	const { type, list, nextPage, flag } = action;
	switch (type) {
		case constants.CHANGE_HOME_DATA:
			return state.merge({
				topicList: fromJS(action.topicList),
				articleList: fromJS(action.articleList),
				recommendList: fromJS(action.recommendList),
			});
		case constants.ADD_HOME_ARTICLE_LIST:
			return state.merge({
				articleList: state.get("articleList").concat(list),
				articlePage: nextPage,
			});
		case constants.TOGGLE_SCROLL_TOP_SHOW:
			return state.set("showScroll", flag);
		default:
			return state;
	}
};
export default reducer;
