import React, {FC} from "react";
import {BlockTitleWrapper} from "./styled";

const BlockTitle: FC = ({children}) => {
    return <BlockTitleWrapper>{children}</BlockTitleWrapper>;
};

export default BlockTitle;
