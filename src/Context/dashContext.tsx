import React, { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { authoContext } from "./authorization";
import {v4 as uuid} from "uuid"
import {iChildren, iCard, iCardRequest} from "../interface/interfaces"

interface iContextDashProps {
    listTechs: iCard[]
    setListTechs: React.Dispatch<React.SetStateAction<iCard[]>>
    visibleEdit: boolean,
    setVisibleEdit: React.Dispatch<React.SetStateAction<boolean>>,
    cardSelected: iCard,
    deleteCard(): void,
    selectedCard(id: string | undefined): void,
    postEditedCard(data: iCardRequest): void,
    resgisterTechnology: (iCard: iCard) => void,
}

export const contextDash = createContext({} as iContextDashProps )

const DashContext = ({children}: iChildren) => {

    const [listTechs, setListTechs]     = useState<iCard[]>([])
    const [visibleEdit, setVisibleEdit ]  = useState<boolean>(false)
    const [cardSelected, setCardSelected] = useState<iCard>({} as iCard)

    const {user} = useContext(authoContext)

    const resgisterTechnology = async (data: iCard) => {

        const findCard = listTechs.find(card => card.title === data.title)
        
        if(findCard){

            toast.error('Tecnologia já registrada', {
                position: 'top-right',
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'dark'
            });
 
        }

        if(!findCard){

            const newTech = {
                ...data,
                id: uuid(),
                id_user: user.id,
                created_At: new Date(),
                updated_At: null
            }

            setListTechs([...listTechs, newTech])

            toast.success('Tecnologia registrada com sucesso', {
                position: 'top-right',
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'dark'
            });


        }
    
    }
    
    const deleteCard = () => {

        const withOutCard = listTechs.filter(tech => tech.id !== cardSelected.id)

        setListTechs(withOutCard)

        setVisibleEdit(false)

        toast.success('Card excluido com sucesso', {
            position: 'top-right',
            autoClose: 400,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark'
        });

    }
    
    const selectedCard = (id: string) => {

        const findCard = listTechs.find(card => card.id === id)

        if(findCard){

            setCardSelected(findCard)
            setVisibleEdit(true)

        }
    
    }
    
    const postEditedCard = async(data:  iCardRequest) => {

        if(cardSelected){

            const cardIndex = listTechs.findIndex(card => card.id === cardSelected.id)

            const cardUpdated = {
                ...cardSelected,
                ...data,
                updated_at: new Date()
            }

            listTechs.splice(cardIndex, 1)

            setListTechs([...listTechs, cardUpdated])

            toast.success('Status alterado com sucesso', {
                position: 'top-right',
                autoClose: 400,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark"
            });

        }
    
    }

    return (

        <contextDash.Provider value={{
            listTechs, 
            setListTechs, 
            visibleEdit, 
            setVisibleEdit, 
            cardSelected, 
            selectedCard, 
            deleteCard, 
            postEditedCard, 
            resgisterTechnology
        }}>
            {children}
        </contextDash.Provider>

    )

}

export default DashContext

