import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import {CakeView} from "../src/features/cake/CakeView"
import {IcecreamView} from "../src/features/icecream/IcecreamView"
import {UserView} from "../src/features/user/UserView"
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <CakeView />
      <IcecreamView />
      <UserView />
    </div>
  )
}

export default App
