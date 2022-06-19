import ReactDOM from 'react-dom/client'
import { App } from './components/App'
import { store } from './redux/store'
import { Provider } from 'react-redux'

const rootNode = document.getElementById('root')
if (rootNode === null) throw new Error('Root container missing in index.html')

const root = ReactDOM.createRoot(rootNode)
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
