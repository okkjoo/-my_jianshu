import React, { Component } from "react";
import { TopicWrapper, TopicItem } from "../style";
export default class Topic extends Component {
	render() {
		return (
			<TopicWrapper>
				<TopicItem>
					<img
						className="topic-pic"
						src="https://cdn.pixabay.com/photo/2021/07/23/14/52/submarine-6487509_960_720.png"
						alt=""
					/>
					transmit
				</TopicItem>
			</TopicWrapper>
		);
	}
}
