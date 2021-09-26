import React from "react";
import {
    NavbarContainer,
    NavbarItem,
    NavbarIcon,
    NavbarItemTitle,
    NavbarItemGroup,
    NavbarItemZoom,
} from "./styled";
import {
    IoKeypadOutline,
    IoNavigateOutline,
    IoHandRightOutline,
    IoChatbubbleOutline,
    IoChevronDownSharp,
} from "react-icons/io5";

const Navbar = () => {
    return (
        <NavbarContainer>
            <NavbarItem>
                <NavbarIcon>
                    <IoKeypadOutline />
                </NavbarIcon>
                <NavbarIcon>
                    <IoNavigateOutline
                        style={{transform: "scaleX(-1)", top: 2}}
                    />
                </NavbarIcon>
                <NavbarIcon>
                    <IoHandRightOutline />
                </NavbarIcon>
                <NavbarIcon>
                    <IoChatbubbleOutline />
                </NavbarIcon>
            </NavbarItem>
            <NavbarItem>
                <NavbarItemTitle>Training Site</NavbarItemTitle>
            </NavbarItem>
            <NavbarItem>
                <NavbarItemGroup></NavbarItemGroup>
                <NavbarItemZoom>20% <IoChevronDownSharp />
                </NavbarItemZoom>
            </NavbarItem>
        </NavbarContainer>
    );
};

export default Navbar;
