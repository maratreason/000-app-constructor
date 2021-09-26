import React, {FC} from "react";
import "./Block.scss";

interface IBlock {
    key?: number | string;
    childItems?: any | undefined;
}

const Block: FC<IBlock> = ({children}) => {
    return <div className="block">{children}</div>;
};

export default Block;
