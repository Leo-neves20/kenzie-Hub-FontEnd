import styled from "styled-components"

export const Header = styled.header`

    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 85%;
    margin: 0 auto;
    height: 110px;

    h1{

        font-size: 1.5rem;
        color: var(--Color-primary);
        
    }

    a{

        display: block;
        background-color: var(--Grey-2);
        border: none;
        text-decoration: none;
        font-weight: 500;
        font-size: 0.8rem;
        width: 25%;
        padding: 10px 0px;
        border-radius: 5px;
        text-align: center;
        color: var(--Grey-0);
        
        
        &:focus{

            background-color: var(--Grey-1);

        }

    }

    @media (min-width: 500px){

        width: 450px;

    }

`

export const Register = styled.form`

  width: 90%;
  margin: 20px auto;
  background-color: var(--Grey-3);
  border-radius: 5px;

  .cabecalhoForm{

    padding: 40px 0px 15px 0px;

  }

  .cabecalhoForm > h2{

    color: var(--Grey-0);
    font-size: 1rem;
    text-align: center;

  }

  .cabecalhoForm > span{

    display: block;
    font-size: 0.75rem;
    font-weight: 500;
    color: var(--Grey-1);
    text-align: center;
    margin-top: 15px;

  }

  .containerInputs{

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

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
    
  .btnCadastrar{

    margin: 30px 0px;
    width: 90%;
    padding: 12px 0px;
    font-size: 0.9rem;
    font-weight: 600;
    border-radius: 5px;

  }

  @media (min-width: 500px){

    width: 450px;

    .nextui-c-cwdhZi{

      font-size: 0.7rem;
      font-weight: 600;

    }

  }
        
`