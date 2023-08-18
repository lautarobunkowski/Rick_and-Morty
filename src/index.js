import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import store from "../src/redux/store";
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

// const root = ReactDOM.createRoot(document.getElementById('root'))
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

// root.render(
//   <BrowserRouter>
//     <App/>
//   </BrowserRouter>
// )
