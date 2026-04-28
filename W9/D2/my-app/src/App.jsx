import { useState } from 'react'
import './App.css'
import { FunctionName } from './components/FunctionalCompOne.jsx'
import { FunctionalComponentsBasics } from './components/FunctionalComponentsBasics.jsx'
import { ClassComponentsBasics } from './components/ClassComponentsBasics.jsx'
import { FunctionalComp } from './components/FunctionalComponentsAdv.jsx'
import { ClassComponentState } from './components/ClassComponentState.jsx'

function App() {
  //Fragment in react:<> </>
  return (
    <>
     {/* <FunctionName /> component name */}
    {/* <FunctionalComponentsBasics />  */}
     {/* <ClassComponentsBasics /> */}
     {/* <FunctionalComp /> */}
     <ClassComponentState />
    </>
  )
}

export default App