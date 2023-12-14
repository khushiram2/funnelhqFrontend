import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import PrivateRoute from './PrivateRoute/PrivateRoute'
import HomePage from './pages/HomePage'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
function App() {

  return (
    <>
    <ToastContainer />
 <Routes>
 <Route path='/' element={ <Navigate replace to="/login" /> } />
 <Route path='/login' element={ <LoginPage/> } />
 <Route path='/register' element={ <RegisterPage/> } />
 <Route path='/private' element={ <PrivateRoute/> }>
 <Route path='/private/home' element={ <HomePage/> } />
 </Route>
 </Routes>
    </>
  )
}

export default App
