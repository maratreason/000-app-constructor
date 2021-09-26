import React from "react";
import Block from "../../containers/Block";
import {LeftBarPageContainer} from "./styled";
import {IoChevronDownSharp} from "react-icons/io5";

const LeftBarPage = () => {
    return (
        <Block>
            <LeftBarPageContainer>
                Page 1 <IoChevronDownSharp />
            </LeftBarPageContainer>
        </Block>
    );
};

export default LeftBarPage;
