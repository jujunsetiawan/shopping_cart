import React from 'react';
import Navigation from './src/navigasi'
import { Provider } from 'react-redux'
import store from './src/store'

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}
export default App