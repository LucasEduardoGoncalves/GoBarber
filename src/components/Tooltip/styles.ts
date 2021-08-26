import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    
    svg{ 
        color: var(--red);
        height: 20px;
    }
    
    span{
        width: 160px;
        background: var(--orange);
        padding: 8px;
        border-radius: 4px;
        font-size: 14px;
        font-weight: 500;
        opacity: 0;
        transition: all 0.2s;
        text-align: center;
        visibility: hidden;
        position: absolute;
        bottom: calc(100% + 12px);
        left: 50%;
        transform: translateX(-50%);
        color: var(--gray-hard);
        &::before{
            content: '';
            border-style: solid;
            border-color: var(--orange) transparent;
            border-width: 6px 6px 0 6px;
            top: 100%;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
        }
    }
    
    &:hover span{
        opacity: 1;
        visibility: visible;
    }
`;