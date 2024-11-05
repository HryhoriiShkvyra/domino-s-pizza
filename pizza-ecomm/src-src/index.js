import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { persistor, store } from './components/redux/store';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'


const root = ReactDOM.createRoot(document.getElementById('root'))


root.render(
    <Provider store={store}>
      <PersistGate loading='loading' persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>,
)

// ReactDOM.render (
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>,
//     document.getElementById('root')
//   </React.StrictMode>
// )
