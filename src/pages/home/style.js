import styled from "styled-components";
export const HomeWrapper = styled.div`
	width: 960px;
	margin: 0 auto;
	&::after {
		content: "";
		display: block;
		clear: both;
	}
`;
export const HomeLeft = styled.div`
	margin-left: 15px;
	padding-top: 30px;
	width: 625px;
	float: left;
	.banner-img {
		width: 625px;
		height: 270px;
	}
`;
export const HomeRight = styled.div`
	width: 280px;
	float: right;
	height: 900px;
`;
export const TopicWrapper = styled.div`
	padding: 20px 0 10px 0;
	overflow: hidden;
	margin-left: -18px;
	border-bottom: 1px solid #dcdcdc;
`;
export const TopicItem = styled.div`
	float: left;
	background-color: #f7f7f7;
	padding-right: 10px;
	margin-left: 18px;
	margin-bottom: 16px;
	height: 32px;
	line-height: 32px;
	font-size: 14px;
	color: #000;
	border: 1px solid #dcdcdc;
	border-radius: 4px;
	.topic-pic {
		display: block;
		float: left;
		width: 32px;
		height: 32px;
		margin-right: 10px;
	}
`;
export const ListItem = styled.div`
	overflow: hidden;
	padding: 20px 0;
	border-bottom: 1px solid #dcdcdc;
	width: 625px;
	.list-pic {
		display: block;
		width: 125px;
		height: 100px;
		float: right;
		border-radius: 10px;
	}
`;
export const ListInfo = styled.div`
	width: 500px;
	float: left;
	.title {
		font-size: 18px;
		line-height: 27px;
		font-weight: bold;
		color: #333;
	}
	.desc {
		font-size: 13px;
		line-height: 24px;
		color: #999;
	}
`;

export const RecommendWrapper = styled.div`
	margin: 30px 0;
	width: 280px;
`;
export const RecommendItem = styled.div`
	width: 280px;
	height: 50px;
	background: url(${props => props.imgUrl});
	background-size: contain;
`;
export const WriterWrapper = styled.div`
	width: 278px;
	border: 1px solid #dcdcdc;
	border-radius: 3px;
	height: 300px;
	line-height: 300px;
	text-align: center;
`;
export const LoadMore = styled.div`
	width: 100%;
	height: 40px;
	line-height: 40px;
	font-weight: bold;
	margin: 30px 0;
	text-align: center;
	background: #a5a5a5;
	border-radius: 20px;
	color: #fff;
	cursor: pointer;
`;

export const BackTop = styled.div`
	position: fixed;
	width: 30px;
	height: 30px;
	right: 50px;
	bottom: 50px;
	line-height: 30px;
	text-align: center;
	border: 1px solid #ccc;
	font-size: 30px;
	font-weight: 900;
`;
