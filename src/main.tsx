import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { Provider } from 'jotai'
import { Progress } from './components/ui/progress'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider>
      <Suspense fallback={<Progress />}>
        <App />
      </Suspense>
    </Provider>
  </React.StrictMode>,
)
