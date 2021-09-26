import React, {FC} from "react";
import "./BlockContent.scss";

const BlockContent: FC = ({children}) => {
    return <div className="block-content">{children}</div>;
};

export default BlockContent;
