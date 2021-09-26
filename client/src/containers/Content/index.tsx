import React, {FC} from "react";
import "./Content.scss";

const Content: FC = ({children}) => {
    return <div className="content">{children}</div>;
};

export default Content;
