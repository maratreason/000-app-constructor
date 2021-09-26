import styled from "styled-components";

export const NavbarContainer = styled.div`
    height: 50px;
    background: rgb(88, 88, 88);
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const NavbarItem = styled.div`
    display: flex;
    align-items: center;
`;

export const NavbarIcon = styled.div`
    padding: 10px 12px;
    font-size: 1.4rem;
    cursor: pointer;

    & > svg {
        position: relative;
    }
    
    &:hover {
        background: #ccc;
    }
`;

export const NavbarItemTitle = styled.div`
    font-weight: normal;
`;

export const NavbarItemGroup = styled.div`
    
`;

export const NavbarItemZoom = styled.div`
    font-size: 0.7rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 10px 12px;

    & > * {
        font-size: 0.8rem;
        margin-left: 3px;
    }
`;
