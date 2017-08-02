import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'
import store from './store'

function render() {
  const update = store.getState()
  ReactDOM.render(
    <App update={ update }/>,
    document.querySelector('#app')
  )
}

store.subscribe(render)

render()
