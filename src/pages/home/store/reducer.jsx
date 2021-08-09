import { fromJS } from "immutable";

const defaultState = fromJS({
	topicList: [
		{
			id: 1,
			title: "社会热点",
			imgUrl:
				"https://cdn.pixabay.com/photo/2021/07/23/14/52/submarine-6487509_960_720.png",
		},
		{
			id: 2,
			title: "手绘",
			imgUrl:
				"https://cdn.pixabay.com/photo/2021/07/23/14/52/submarine-6487509_960_720.png",
		},
	],
});
const reducer = (state = defaultState, action) => {
	const { type } = action;
	switch (type) {
		default:
			return state;
	}
};
export default reducer;
