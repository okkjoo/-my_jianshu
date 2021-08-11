import { fromJS } from "immutable";
import * as constants from "./constants";
const defaultState = fromJS({
	title: "摸鱼摸鱼,摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼",
	content: `<img
	alt=""
	src="https://cdn.pixabay.com/photo/2021/07/23/14/52/submarine-6487509_960_720.png"
/>
<p>
	摸鱼摸鱼<b>摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼</b>
	摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼
</p>
<p>
	摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼
</p>
<p>
	摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼摸鱼
</p>`,
});
const reducer = (state = defaultState, action) => {
	const { type } = action;
	switch (type) {
		default:
			return state;
	}
};
export default reducer;
