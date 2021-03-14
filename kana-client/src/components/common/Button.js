import styled from 'styled-components'

const Button = styled.button`
    color: black;
    background: white;
    font-weight: bold;
    padding: 10px;
    border-radius: 8px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
    font-size: 1em;
    border: none;
    width: 200px;
    display: block;
    white-space: none;
    text-decoration: none;
    text-align: center;
    display: inline-block;
    margin-top: 10px;
    
    &:disabled{
        background: #eee;
        color: #666;
    }
`;

export {Button}