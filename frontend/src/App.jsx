import './App.css'
import Home from './components/Home'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Register from './components/Register'
import Login from './components/Login'
function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
        
          <Route path='/register' element=<Register/>/>
          <Route path='/' element=<Home/>/>
          <Route path='/login' element=<Login/>/>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
