import Loadable from "react-loadable";
const LoadableComponent = Loadable({
	loader: () => import("./"),
	loading() {
		return <div>Loading</div>;
	},
});
const loadableComponent = () => <LoadableComponent />;
export default loadableComponent;
