import styled from "styled-components";

export const HeaderDashBoard = styled.header`

    border-bottom: 1.5px solid var(--Grey-3);

    div{

        margin-left: 15px;
        width: 89%;
        margin: 0 auto;

    }

    h2{

        color: var(--Grey-0);
        font-size: 1.4rem;
        font-weight: 600;
        margin-top: 34px;

    }

    span{

        display: block;
        color: var(--Grey-1);
        font-size: 0.85rem;
        font-weight: 500;
        margin: 15px 0px 34px;
        
    }

    @media (min-width: 600px){

        div{

            width: 80%;
            margin: 0 auto;

        }

    }

    @media (min-width: 900px){

        div{

            width: 60%;
            display: flex;
            align-items: center;
            justify-content: space-between;

        }

        h2, span{

            margin: 34px 0px;

        }
        

    }

    @media (min-width: 1100px){

        div{

            width: 60%;

        }   

    }
    
`

/* ------------------------------------------------------ */

export const NavBar = styled.nav`

    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 26px 0;
    border-bottom: 1.5px solid var(--Grey-3);

    .containerNavBar{

        display: flex;
        width: 89%;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;

    }
    

    h1{

        color: var(--Color-primary);
        font-size: 1.5rem;

    }

    .btnSairNavBar{

        display: block;
        background-color: var(--Grey-2);
        border: none;
        text-decoration: none;
        font-weight: 500;
        font-size: 0.9rem;
        width: 20%;
        padding: 10px 0px;
        border-radius: 5px;
        text-align: center;
        color: var(--Grey-0);
        
        &:focus{

            background-color: var(--Grey-1);

        }

    }

    @media (min-width: 600px){

        .containerNavBar{

            width: 80%;

        }

        .btnSairNavBar{

            width: 80px;

        }

    }

    @media (min-width: 900px){

        .containerNavBar{

            width: 70%;

        }

    }

    @media (min-width: 900px){

        .containerNavBar{

            width: 60%;

        }

        h1{

            font-size: 1.2rem;

        }

    }

`
/* ------------------------------------------------------ */

export const MainDashBoard = styled.main`

    width: 89%;
    margin: 0 auto;

    h3{

        padding-top: 20px;
        font-size: 1rem;
        width: 100%;
        color: var(--Grey-0);
        font-weight: 500;

    }

    p{

        font-size: 0.7rem;
        color: var(--Grey-0);
        font-weight: 500;
        margin-top: 15px;

    }

    @media (min-width: 600px){

        width: 80%;

    }

    @media (min-width: 900px){

        width: 70%;
        
    }

    @media (min-width: 1100px){

        width: 60%;

        h3{

            font-size: 1.1rem;
            font-weight: 600;

        }

        p{

            font-size: 0.9rem;

        }

    }

`

/* ------------------------------------------------------ */

export const ContAddTechs = styled.div`

    .containerBtnToCreateCard{

     display: flex;
     justify-content: space-between;
     align-items: center;
     margin: 0 auto;
     padding: 10px 0px 20px;
     
        h3{

            width: auto;
            margin: 0;
            padding: 0;
            font-size: 0.9rem;

        }

        .btnOpenModal{

            width: 32px;
            background-color: var(--Grey-2);
            border: none;
            text-decoration: none;
            font-size: 0.9rem;
            padding: 7px 0px 5px;
            border-radius: 5px;
            color: var(--Grey-0);
            
            &:focus{

                background-color: var(--Grey-1);

            }

        }

   }

   

`

/* ------------------------------------------------------ */

export const UlCards = styled.ul`

   background-color: var(--Grey-3);
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   padding: 15px 0px;
   border-radius: 5px;
   margin-bottom: 30px;
   
`

export const Card = styled.li`

    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 95%;
    background-color: var(--Grey-4);
    margin: 7px 0px;
    padding: 15px 13px; 
    border-radius: 5px;
   
    h4{

        color: var(--Grey-0);
        font-weight: 500;
        width: 60%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

    }

   div{

    display: flex;
    align-items: center;

   }

`
export const Nivel = styled.span`

   display: block;
   margin-right: 10px;
   font-weight: 500;
   font-size: 0.8rem;
   color: var(--Grey-1);

`


