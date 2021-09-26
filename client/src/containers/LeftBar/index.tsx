import React, {FC} from "react";
import "./LeftBar.scss";

const LeftBar: FC = ({children}) => {
    return <div className="leftbar">{children}</div>;
};

export default LeftBar;
