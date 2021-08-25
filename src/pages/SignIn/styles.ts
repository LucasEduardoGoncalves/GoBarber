import styled from 'styled-components';

import SignInBackground from '../../assets/sign-in-background.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    width: 100%;
    max-width: 41rem;

    form {
        margin: 4rem 0;
        width: 23rem;
        text-align: center;

        h1 {
           margin-bottom: 1.5rem; 
        }

        a {
            color: var(--white);
            display: block;
            margin-top: 24px;
            text-decoration: none;
            transition: filter 0.2s;

            &:hover {
                filter: brightness(0.9);
            }
        }
    }

    > a {
        color: var(--orange);
        display: block;
        margin-top: 24px;
        text-decoration: none;
        transition: filter 0.2s;
        display: flex;
        align-items: center;
        &:hover {
            filter: brightness(0.9);
        }

        svg {
            margin-right: 1rem;
        }
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${SignInBackground}) no-repeat center;
    background-size: cover;
`;

