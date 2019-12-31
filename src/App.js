import React, { Component } from 'react';
import HeaderFile from './Components/headerFile';
import {Provider} from 'react-redux';
import store from '../src/Store/store';
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Provider store={store}>
        <div>
          <HeaderFile/>
        </div>
        </Provider>
       
      </React.Fragment>
    )
  }
}
export default App;