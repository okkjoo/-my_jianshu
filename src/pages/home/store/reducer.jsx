import { fromJS } from "immutable";
import * as constants from "./constants";
const defaultState = fromJS({
	topicList: [],
	articleList: [],
	recommendList: [],
	articlePage: 1,
});
const reducer = (state = defaultState, action) => {
	const { type, list, nextPage } = action;
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
		default:
			return state;
	}
};
export default reducer;
