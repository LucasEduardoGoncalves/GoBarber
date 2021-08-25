import styled, { css } from 'styled-components';

interface ContainerProps {
    isFocused: boolean;
    isFilled: boolean;
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


    & + div {
        margin-top: 0.5rem;
    }
`;
