import styled from "styled-components"

export const HeaderLogin = styled.header`

    text-align: center;
    margin: 180px 0px 10px 0px;
    font-size: 0.75rem;
    color: var(--Color-primary );

`
export const LoginForm = styled.form`

    width: 90%;
    margin: 20px auto;
    background-color: var(--Grey-3);
    border-radius: 5px;


    header{

        color: var(--Grey-0);
        font-size: 0.75rem;
        text-align: center;
        padding: 35px 0px 20px 0px;
    
    }

    .containerLogin{

        width: 93%;
        margin: 0 auto;

    }

    label{

        color: var(--Grey-0);

    }

/* -------------------------INPUT-----------------------   */

    .nextui-c-eXOOPO-ccrOPm-underlined-false .nextui-c-jeuecp,
    .nextui-c-eXOOPO-lkBNdM-isTextarea-false{

        background-color: var(--Grey-2);
        color: var(--Grey-0);
       
    }

    .nextui-c-iwmZdB-idPoLKt-css {

        width: 100%;

    }

    .nextui-c-eXOOPO-lkBNdM-isTextarea-false{

        border-radius: 5px;
        border: 2px solid transparent;
        margin: 0 auto;
        

    }

/* ------------------------------------------------------- */

    .btnLogin{

        width: 100%;
        margin: 20px 0 30px 0px;
        padding: 11.5px 0px;
        font-size: 1rem;
        border-radius: 5px;

    }

    .spanLoginMensagem{

        display: block;
        text-align: center;
        font-size: 0.75rem;
        color: var(--Grey-1);
        font-weight: 500;

    }

    a{

        display: block;
        background-color: var(--Grey-2);
        border: none;
        text-decoration: none;
        font-weight: 500;
        font-size: 0.8rem;
        width: 100%;
        padding: 11.5px 0px;
        border-radius: 5px;
        text-align: center;
        color: var(--Grey-0);
        margin: 60px 0px 0px 0px;
        transform: translateY(-40px);
        
        
        &:focus{

            background-color: var(--Grey-1);

        }

    }

    @media (min-width: 500px){

        width: 350px;

        header{

            padding: 50px 0px 30px 0px;

        }

    }

`

