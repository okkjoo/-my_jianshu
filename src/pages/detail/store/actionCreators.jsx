import axios from "axios";
import * as constants from "./constants";

const changeDetail = (title, content) => ({
	type: constants.CHANGE_DETAIL,
	title,
	content,
});

export const getDetail = () => {
	return dispatch => {
		axios.get("/api/detail.json").then(response => {
			const res = response.data.data;
			const { title, content } = res;
			dispatch(changeDetail(title, content));
		});
	};
};
