import React from 'react';
import Header from './common/header';
import {GlobalStyled} from './style.js';
import {GlobalIconfontStyle} from './statics/iconfont/iconfont.js'
function App() {
  return (
    <div>
      <GlobalStyled />
      <GlobalIconfontStyle/>
      <Header/>
    </div>
  );
}

export default App;
