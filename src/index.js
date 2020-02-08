import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.scss';
import App from './Components/App/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/reducers';


// const store = createStore(rootReducer, composeWithDevTools());

// ReactDOM.render(
//   <Provider store={store} >
//     <App />
//   </Provider>, 
//   document.getElementById('root')
// );


ReactDOM.render(<App />, document.getElementById('root'));