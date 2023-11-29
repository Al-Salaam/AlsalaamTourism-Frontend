import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'
import ReactGA from "react-ga4";
ReactGA.initialize("G-G4SLDRZN3T");

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <Provider store={store}>
  <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
    

  </>,
)
