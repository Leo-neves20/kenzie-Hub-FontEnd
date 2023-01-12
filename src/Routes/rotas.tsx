
import { Routes, Route } from "react-router-dom"

import Cadastro from "../Pages/register/register"
import DashBoard from "../Pages/DashBoard/DashBoard"
import Login from "../Pages/Login/Login"
import RotasAutorizadas from "./rotasAutorizadas"

const TodasRotas = () => {
    
    return(

        <Routes>
            
            <Route path='/' element={<Login />} />
            <Route path='/register'  element={<Cadastro />}  />
            <Route element={<RotasAutorizadas />} >
                <Route path='/dashboard' element={<DashBoard />} />
            </Route>
            
        </Routes>

    )

}

    



export default TodasRotas