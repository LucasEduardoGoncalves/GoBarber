import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    background: var(--orange);
    color: var(--background);
    font-weight: 500;

    border-radius: 0.5rem;
    border: 0;
    
    padding: 0 1rem;
    margin-top: 1rem;

    height: 56px;
    width: 100%;    
       
    transition: background-color 0.2s;

    &:hover {
        background: ${shade(0.2, '#ff9000' )};
    }
`;
