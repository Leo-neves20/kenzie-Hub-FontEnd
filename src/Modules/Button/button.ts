
import styled from "styled-components"

export const BtnPrimary = styled.button`

    background-color: var(--Color-primary);
    font-weight: 500;
    color: var(--Grey-0);
    border: none;

    &:focus{

        background-color: var(--Color-primary-Focus);

    }
`

export const BtnGrey = styled.button`

    background-color: var(--Grey-1);
    color: var(--Grey-0);
    font-weight: 500;
    border: none;

    &:focus{

        background-color: var(--Grey-2);

    }

    a{

        color: var(--Grey-0);
        text-decoration: none;
        font-weight: 500;

    }

`