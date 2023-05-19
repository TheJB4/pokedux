import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

/*Redux Thunk for async petitions*/ 
import thunk from "redux-thunk"

/*Middlewares*/
import { logger,filteredPokemons} from './middlewares/index.js'

/*Create a store global of redux*/
import { rootReducer } from './reducers/rootReducers.js'
import { Provider } from 'react-redux'


import { configureStore} from '@reduxjs/toolkit';

const store = configureStore({
  reducer:rootReducer,
  middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(thunk,logger,filteredPokemons),
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
