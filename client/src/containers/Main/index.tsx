import React, {FC} from "react";
import "./Main.scss";

const Main: FC = ({children}) => {
    return <div className="main">{children}</div>;
};

export default Main;
