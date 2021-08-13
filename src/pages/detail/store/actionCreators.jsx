import axios from "axios";
import * as constants from "./constants";

const changeDetail = (title, content) => ({
	type: constants.CHANGE_DETAIL,
	title,
	content,
});

export const getDetail = id => {
	return dispatch => {
		axios.get("../api/detail.json?id=" + id).then(response => {
			const res = response.data.data;
			const { title, content } = res;
			dispatch(changeDetail(title, content));
		});
	};
};
