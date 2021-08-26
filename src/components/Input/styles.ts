import styled, { css } from 'styled-components';
import { Tooltip } from '../Tooltip';

interface ContainerProps {
    isFocused: boolean;
    isFilled: boolean;
    isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    background: var(--inputs);
    border-radius: 0.5rem;
    border: 2px solid var(--inputs);
    
    padding: 1rem;
    width: 100%;
    color: var(--gray-hard);

    ${props => props.isErrored && css`
        border-color: var(--red);
    `}
    
    ${props => props.isFocused && css`
        border-color: var(--orange);
        color: var(--orange);
    `}

    ${props => props.isFilled && css`
        color: var(--orange);
    `}

    input {
        color: var(--white);
        background: transparent;

        flex: 1;
        height: 100%;
        outline: none;

        border: 0;
        &::placeholder {
            color: var(--gray-hard);
        }
    }

    svg {
        max-height: 20px;
    }


    & + div {
        margin-top: 0.5rem;
    }
`;

export const Error = styled(Tooltip)`
    span {
        background: var(--red);
        color: var(--white);

        &::before {
            border-color: var(--red) transparent;
        }
    }
`;
