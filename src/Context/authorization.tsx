import React, { createContext, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import {v4 as uuid} from "uuid";
import {iChildren, iUser, iRegister, iLogin} from "../interface/interfaces"

interface iAuthoContext {

    user: iUser,
    setUser: React.Dispatch<React.SetStateAction<iUser>>,
    load: boolean,
    setLoad: React.Dispatch<React.SetStateAction<boolean>>,
    onSubmitLogin(data: iLogin): void,
    onSubmitRegister(data: iRegister): void,
    token: string | null,
    visible: boolean,
    setVisible: React.Dispatch<React.SetStateAction<boolean>>,
    users: iUser[]
    setUsers: React.Dispatch<React.SetStateAction<iUser[]>>

}

export const authoContext = createContext({} as iAuthoContext)

const AuthorizationContext = ({children}: iChildren) => {

    const [user, setUser]       = useState<iUser>({} as iUser)
    const [load, setLoad]       = useState(false)
    const [visible, setVisible] = useState(false)
    const [users, setUsers]     = useState<iUser[]>([])

    const token = localStorage.getItem('@TokenUser:')

    const navigate = useNavigate()

    const onSubmitLogin = async (data: iLogin) => {

        const findUser = users.find(user => user.email === data.email)
        
        if(!findUser){

            toast.error('email ou senha inavalido', {
                position: 'top-right',
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'dark'
            });

        }else if(findUser && findUser.password !== data.password){

            toast.error('Email ou Senha está inavalido', {
                position: 'top-right',
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'dark'
            });

        }else{

            toast.success('Login com sucesso', {
                position: 'top-right',
                autoClose: 700,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored'
            })

            setUser(findUser)

            navigate("/dashboard", {replace: true})

        }

    }

    const onSubmitRegister = async(dataRegister: iRegister) => {

        const findUser = users.find(user => user.email === dataRegister.email)

        if(findUser){

            toast.error('Email já cadastrado', {
                position: 'top-right',
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'dark'
            });

        }else{

            const newUser = {
                id: uuid(),
                ...dataRegister
            }

            setUsers([...users, newUser])

            toast.success('Usuário cria com sucesso', {
                position: 'top-right',
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'dark'
            });

            navigate("/")

        }

    }
    
    return(
        <authoContext.Provider value={{
            user, 
            setUser, 
            load, 
            setLoad, 
            onSubmitLogin, 
            onSubmitRegister, 
            token, 
            visible, 
            setVisible, 
            users, 
            setUsers
        }}>
          {children}
        </authoContext.Provider>
    )

}

export default AuthorizationContext