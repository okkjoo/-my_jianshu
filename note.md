> 首发于[我的 yuque](https://www.yuque.com/qzhou/learning/jianshu)

<a name="FwKXs"></a>

# react 中的 CSS

<a name="QnzkD"></a>

## 使用 styled-components

[styled-components(需能访问外网）](https://styled-components.com/)<br />[styled-components（w3c 中文文档）](https://www.w3cschool.cn/styledcomponents/)
<a name="vbfxT"></a>

### 为什么用 styled-components

> **动机**
> styled-components 是作者对于如何增强 React 组件中 CSS 表现这个问题的思考结果 通过聚焦于单个用例,设法优化了开发者的体验和面向终端用户的输出.
> 除了提升开发者体验外, styled-components 同时提供以下特性:
>
> - Automatic critical CSS: styled-components 持续跟踪页面上渲染的组件,并向自动其注入且仅注入样式. 结合使用代码拆分, 可以实现仅加载所需的最少代码.
> - 解决了 class name 冲突: styled-components 为样式生成唯一的 class name. 开发者不必再担心 class name 重复,覆盖和拼写错误的问题.
> - CSS 更容易移除: 想要确切的知道代码中某个 class 在哪儿用到是很困难的. 使用 styled-components 则很轻松, 因为每个样式都有其关联的组件. 如果检测到某个组件未使用并且被删除,则其所有的样式也都被删除.
> - 简单的动态样式: 可以很简单直观的实现根据组件的 props 或者全局主题适配样式,无需手动管理数十个 classes.
> - 无痛维护: 无需搜索不同的文件来查找影响组件的样式.无论代码多庞大，维护起来都是小菜一碟。
> - 自动提供前缀: 按照当前标准写 CSS,其余的交给 styled-components handle 处理.
>
> 通过 styled-components 绑定样式到组件,开发者可以在编写熟知的 CSS 同时也获得上述全部的益处.
> ---来自[https://www.w3cschool.cn/styledcomponents/styledcomponents-nmlo38ix.html](https://www.w3cschool.cn/styledcomponents/styledcomponents-nmlo38ix.html)

<a name="kgkmB"></a>

### 使用

<a name="srbUz"></a>

#### 安装

`yarn add styled-components`<br />css 文件更名为 js 文件，注意引入也要改变<br />**​**<br />
<a name="iSdcz"></a>

#### 简单样例

```javascript
//style.js
import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
    body{
      margin:0;
      padding:0;
      background:green;
    }
`;
```

也就是 CSS 样式写在 `` 中

```javascript
//App.jsx
import React from "react";
import { GlobalStyled } from "./style.js";

function App() {
	return (
		<div>
			<GlobalStyled />
			hello world
		</div>
	);
}

export default App;
```

然后将全局的标签放在 APP 组件中。<br />单独的组件中创建单独的标签,大致语法：<br />`const xxx = styled.div```
<a name="panZy"></a>

### 遇到的问题/要注意一下的地方/自己犯的 CSS 错误

1. 模板字符串里写 css 失去了语法高亮，非常难受

解决方案 vscode 里的[vscode-styled-components 插件](https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components)

2. 老版本中定义全局 CSS 要使用`injectGlobal`，而我使用时报错 '`injectGlobal`' is not exported from 'styled-components'，原来是这个 API 已经废弃了，改用`createGlobalStyle `
3. 这样创造出来的组件仍能添加 className，在`style.js`中 `&.xxx{}`编写样式
4. 老版本 styled-components 中的 ref ==> innerRef，新版本中正常使用 ref 即可
5. 注意字符串拼接 设置样式时单位与数据之间 没有空格！！

​

​

​<br />
<a name="Dg6H5"></a>

# 一些小图标

<a name="rXK5P"></a>

## 使用 iconfont

[iconfont 官网](https://www.iconfont.cn/)
<a name="RxYGC"></a>

### 简单使用流程

登录后 -- 资源管理 -- 我的项目 -- 新建项目 -- 去找需要的图标 -- 添加到购物车 -- 添加到项目仓库 -- 下载到本地 -- 在 src 下创建 static (存放静态文件如 logo 、图标等) -- 里面创建 iconfont 文件夹 -- 将刚刚下载下来的压缩包中的必要文件移到这里面 -- `<i className='iconfont'>xxx</i>`,xxx 就是该图标的编号。<br />​<br />
<a name="BV0mV"></a>

# react 中的动画效果

<a name="vpfXW"></a>

## 使用 react-transition-group

用到[react-transition-group ](http://reactcommunity.org/react-transition-group/)来在 react 中添加动画效果
<a name="h72bk"></a>

### 使用

<a name="ZWyTN"></a>

#### 安装

`yarn add react-transition-group `
<a name="IBsoq"></a>

#### 简单使用方法：

在需要动画的地方 包裹一个 [CSSTransition](http://reactcommunity.org/react-transition-group/css-transition) 标签<br />在组件出现、进入、退出或完成转换时应用于组件的动画 classNames。可以提供单个名称，该名称将为每个阶段添加后缀，例如**classNames**="fade"适用：

- fade-appear, fade-appear-active,fade-appear-done
- fade-enter, fade-enter-active,fade-enter-done
- fade-exit, fade-exit-active,fade-exit-done
  <a name="Zq8LE"></a>

#### 小案例

```jsx
//header/index.jsx
import { CSSTransition } from "react-transition-group";
<CSSTransition in={focused} timeout={200} classNames="slide">
	//***
	<NavSearch
		className={focused ? "focused" : ""}
		onFocus={() => handleInputFoucus(list)}
		onBlur={handleInputBlur}
	></NavSearch>
</CSSTransition>;

//style.js
export const NavSearch = styled.input`
	//...
	&.slide-enter {
		transition: all 0.2s ease-out;
	}
	&.slide-enter-active {
		width: 240px;
	}
	&.slide-exit {
		transition: all 0.2s ease-out;
	}
	&.slide-exit-active {
		width: 160px;
	}
	//...
`;
```

**注意：这里是 classNames ,有 s 的 不然会把原来的 className 覆盖掉起不来效果**
<a name="aRh6b"></a>

### 遇到的问题

遇到一个警告<br />`index.js:1 Warning: findDOMNode is deprecated in StrictMode. findDOMNode was passed an instance of Transition which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: [https://reactjs.org/link/strict-mode-find-node](https://reactjs.org/link/strict-mode-find-node)` <br />搜索得知 把 index.js 里`**React.StrictMode**`标签删除即可解决<br />​<br />
<a name="B0ALh"></a>

# react 中的状态管理

<a name="XqXKU"></a>

## redux

**安装**<br />`yarn add redux`<br />**使用**<br />dispatch、store、subscribe(用了 react-redux 就用不上了）、createStor、compose、applyMiddleware、combineReducers（后续用到 immutable 会从 redux-immutable 中引用）
<a name="HAv3u"></a>

## react-redux

[redux-devtool | github](https://github.com/zalmoxisus/redux-devtools-extension)<br />之前写过一篇笔记[react-redux](https://www.yuque.com/qzhou/learning/fmr098)<br />**安装**<br />`yarn add react-redux`<br />**使用**​<br />connect、mapStatesToProps、mapDispatchToProps
<a name="fTFqQ"></a>

## immutable

immutable 库 以让某个数据成为不可改变的对象——如保证纯函数，常与 react-redux 配合使用<br />**安装**<br />` yarn add immutable`<br />**使用**<br />fromJS、 get、getIn 、set、merge

```javascript
import { fromJS } from "immutable";
```

<a name="PpLNx"></a>

## redux-immutable

**安装**<br />`yarn add redux-immutable`<br />**使用**<br />redux-immutable 使 mapStateToProps 中传入的 state 也变成 immutable 对象。这样就能统一写法来获取 state 中的值<br />`focused:state.getIn(['header','focused'])`<br />

```jsx
import { combineReducers } from "redux-immutable";
import { reducer as headerReducer } from "../common/header/store";
import { reducer as homeReducer } from "../pages/home/store";
import { reducer as detailReducer } from "../pages/detail/store";
import { reducer as loginReducer } from "../pages/login/store";
const reducer = combineReducers({
	header: headerReducer,
	home: homeReducer,
	detail: detailReducer,
	login: loginReducer,
});

export default reducer;
```

<a name="SvuKF"></a>

### 注意

immutable 对象和普通对象的操作不同，要统一为 immutable 类型
<a name="HjXZf"></a>

# react 中异步请求

<a name="DxxOo"></a>

## 使用 axios

我也写过笔记[axios](https://www.yuque.com/qzhou/learning/lberry)<br />要发送异步请求，则该 action 是一个 axios 函数，函数中调用另一个普通 action
<a name="JePLq"></a>

## 使用 redux-thunk

store 和 action 中间件<br />**安装**<br />`yarn add redux-thunk`<br />**使用**

```javascript
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
```

<a name="XzZ19"></a>

## 注意

AJAX 仅在第一次发送请求的话，就要放在 componentDidMount 钩子里
<a name="zLTKU"></a>

# 假数据模拟接口

<a name="DhjVk"></a>

## vscode-faker 插件

制造假数据，可以用 vscode-faker 插件来生成，具体用法自行搜索。
<a name="UnTAV"></a>

## public 下 api 文件夹

里面放各种 json 先模拟一下数据来进行操作。
<a name="yLKht"></a>

# 路由

<a name="dmgI6"></a>

### 使用 react-router-dom

**安装**<br />`yarn add react-router-dom`<br />**使用**​

- <Router>直接包在 APP 把所有都包了
- <Link> 一个参数 to='./xxx'
- 路由中 Redirect 组件 -- 重定向功能
  <a name="fQCB8"></a>

### 页面路由参数的传递

两种方法

1. **动态路由获取参数**

`<Link key={idx} to={"/detail/" + item.get("id")}>`<br />`<Route path="/detail/:id" exact component={Detail} />`<br />this.props 中有一个 match 里面有一个 params 可以接收<br />​<br />

2.  ​

`<Link key={idx} to={"/detail?id=" + item.get("id")}>`<br />`<Route path="/detail" exact component={Detail} />`<br />this.props 中有一个 location ，里面有一个 search 可以接收，但是接收的是一个字符串 `"?id=1"`，需要自己再处理一下，就比较麻烦。所以建议使用动态路由的方式
<a name="aVHoH"></a>

# 性能方面

store 改变，所有组件都要重新渲染 ，可以在 shouldComponentsUpdate 钩子里进行判断是否重新渲染来优化性能，也可以直接用**PureComponent** 组件才达到目的 。把所有 Component 换为 PureComponent 即可，使用 PureComponent 与 immutable 相结合不会产生什么副作用，如果没用 immutable 可能会遇到一些坑。**只用记住 两者结合使用就好了先。**<br />​<br />
<a name="hafYP"></a>

#

​<br />
<a name="hWs3X"></a>

# react 异步组件

异步组件也就是懒加载 就是进入该组件所在界面才加载这个组件 防止第一次加载时时间过长
<a name="iIRQy"></a>

## 使用 react-loadable

**安装**<br />` yarn add react-loadable`<br />**使用**<br />withRouter 为了让 懒加载的组件能获取到路由转递的信息

```jsx
//简单使用
import Loadable from "react-loadable";
const LoadableComponent = Loadable({
	loader: () => import("./"),
	loading() {
		return <div>Loading</div>;
	},
});

export default () => <LoadableComponent />;
```

<a name="faEzB"></a>

## 使用 lazyLoad

之前写过笔记[lazyLoad](https://www.yuque.com/qzhou/learning/pe14em)，个人认为代码更为简单<br />**关于两者的比较，**可以看这篇文章[React.lazy() vs React Loadable](https://stackoverflow.com/questions/53043447/react-lazy-vs-react-loadable#:~:text=No%2C%20React%20Loadable%20should%20not%20be%20used%20anymore%2C,server%20side%20rendering.%20Quote%20from%20the%20React%20documentation%3A)<br />​

<a name="uXYg2"></a>

# 其他

- `dangerouslySetInnerHTML={{ __html:xxx}}`使存储在字符串中的 html 不会被转义而能正常地展现出 html 内容
- 注意 header 组件想要更改 login 组件的数据时 要引入 login 组件的 actionCreators 方便管理
- 鉴权问题就是 设置重定向跳转
- 项目上线流程：前后端订好数据接口 后端服务器中要有与前端中发送请求的接口对应的带数据的文件，上线之后 public 里 api--即接口的模拟就要删掉了。前端打包`yarn build` 会打包生成一个 build 文件夹，把这个文件夹给到后端，前端的工作就完成了。
