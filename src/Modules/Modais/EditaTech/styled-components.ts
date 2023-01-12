import styled from "styled-components";

export const Header = styled.header`

    background-color: red;
    display: flex;
    justify-content: space-between;
    background-color: var(--Grey-2);

    h2{

        font-size: 0.9rem;
        margin: 10px 0px 10px 13px;
        color: var(--Grey-0);
        font-weight: 500;

    }

    button{

        margin-right: 13px;
        font-size: 1rem;
        background-color: transparent;
        border: none;
        color: var(--Grey-0);
    
    }

`
export const FormMain = styled.form`

    width: 90%;
    margin: 0 auto;

    .containerNameTech{

        padding: 0;
        margin: 0;

        .nextui-input-block-label{

            text-align: left;
            font-size: 500;
            color: var(--Grey-0);

        }
    
    }

    .containerSelect{
        
        text-align: left;
        width: 100%;

        .chakra-select__icon-wrapper.css-162mkon{
            width: 0px;
        }

        label{

            display: block;
            font-size: 0.8rem;
            margin-bottom: 5px;

        }
        
    }

    .BtnModalEdit{

        display: grid;
        justify-content: space-between;
        grid-template-columns: 63% 31%;

        button{

            width: 100%;
            padding: 13px 0px;
            font-size: 0.9rem;
            margin-bottom: 28px;
            border-radius: 5px;

        }

    }

`


