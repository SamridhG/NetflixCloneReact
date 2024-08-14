
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import RootRouter from './Routes/RootRouter'
import { Provider } from 'react-redux'
import { persistor, store } from './store'
import { PersistGate } from 'redux-persist/integration/react'

function App() {
 

  return (
    <>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <BrowserRouter>
       <RootRouter/>
      </BrowserRouter>
      </PersistGate>
      </Provider>
    </>
  )
}

export default App
