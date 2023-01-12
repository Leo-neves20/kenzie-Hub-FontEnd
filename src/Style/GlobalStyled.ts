import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    body, main, div, section, ul, li, h1, h2, h3, h4, h5, h6, select, input, span, p, a{

        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter Tight', sans-serif;
        list-style: none;
        
    }

    :root{

        --Color-primary          : #FF577F;
        --Color-primary-Focus    : #FF427F;
        --Color-primary-Negative : #59323F;

        --Grey-0: #F8F9FA;
        --Grey-1: #868E96;
        --Grey-2: #343B41;
        --Grey-3: #212529;
        --Grey-4: #121214;

        --Sucess   : #3FE864;
        --Negative : #E83F5B;

    }

    #root{

        width: 100%;

    }
    
    body{

        background-color: var(--Grey-4);
        display: flex;
        justify-content: center;

    }

    label{

        color: var(--Grey-0);
        font-size: 0.75rem;

    }

/* -------------------------INPUT-----------------------   */

    .nextui-c-eXOOPO-ccrOPm-underlined-false .nextui-c-jeuecp,
    .nextui-c-eXOOPO-lkBNdM-isTextarea-false{

        background-color: var(--Grey-2);
        color: var(--Grey-0);
        
    }

    .nextui-c-eXOOPO-lkBNdM-isTextarea-false{

        border-radius: 5px;
        border: 2px solid transparent;
        margin: 0 auto;

    }

/* -------------------------SELECT---------------------- */

    .containerSelect{

        width: 90%;

    }

    .css-1zozx4{

        width: 100%;
        height: 38px;
        border-radius: 5px;
        color: var(--Grey-0);
        padding: 0px 10px;
        outline: none;
        margin-top: 5px;

    }

/* -----------------------HELPTEXT----------------------- */

    .nextui-c-cwdhZi{

        color: var(--Negative);
        transform: translateY(-4px);

    }

/* ------------------------------------------------------ */

.menssagenSemToken{

    color: var(--Grey-0);
    margin: 15px;
    display: block;

}

.modalAdd{

    background-color: var(--Grey-3);
    width: 85%;
    border-radius: 5px;
    margin: auto;
    
}


`
export default GlobalStyle