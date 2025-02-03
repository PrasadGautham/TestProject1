import { useState } from 'react'
import './App.css'
import FuncComp from './FuncComp'
import ClassComp from './ClassComp'

function App() {


  return (
   <div>
    <h1>
       This is myFirst React App
      </h1>
      <div>
   <FuncComp/>
      </div>
      <div>
         <ClassComp/>
      </div>
      </div>
      
   )
}

export default App
