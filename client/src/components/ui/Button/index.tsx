import React, {FC, useState} from "react";
import "./Button.scss";

const Button: FC<any> = ({children}) => {
    const [id, setId] = useState(1);

    const dragstartHandler = (event: any) => {
        setId(id + 1);
        const Button = {
            id,
            tagname: "button",
            classes: "button",
            title: "Button",
            children: [],
        }
        event.dataTransfer.setData("targetElement", JSON.stringify(Button));
    };

    const dragoverHandler = (event: any) => {
        event.preventDefault();
        if (event.target.className === "site") {
            event.target.style.border = "1px solid red";
        }
    };

    const dragleaveHandler = (event: any) => {
        event.target.style.border = "1px solid #ccc";
    };

    const dragendHandler = (event: any) => {
        event.target.style.border = "1px solid #ccc";
    };

    const dropHandler = (event: any) => {
        event.preventDefault();
        event.target.style.border = "1px solid #eee";
    };

    return <button
        className="button"
        draggable={true}
        onDragStart={dragstartHandler}
        onDragOver={dragoverHandler}
        onDragLeave={(e) => dragleaveHandler(e)}
        onDragEnd={(e) => dragendHandler(e)}
        onDrop={(e) => dropHandler(e)}
    >{children}</button>;
};

export default Button;
