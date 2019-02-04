import React from 'react'
import {render} from 'react-dom'

import '../css/index.scss'
import App from './app'

render(
  React.createElement(App),
  document.getElementById('app')
)