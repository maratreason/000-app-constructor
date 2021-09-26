import React, {FC} from "react";
import "./RightBar.scss";

const RightBar: FC = ({children}) => {
    return <div className="rightbar">{children}</div>;
};

export default RightBar;
