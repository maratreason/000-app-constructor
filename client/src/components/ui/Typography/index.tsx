import React, {FC, useState} from "react";
import "./Typography.scss";

const Typography: FC<any> = ({Tagname, text}) => {
    const [id, setId] = useState(1);

    const dragstartHandler = (event: any) => {
        setId(id + 1);
        const Button = {
            id,
            tagname: Tagname,
            classes: "typography",
            text,
            children: [],
        };
        event.dataTransfer.setData("targetElement", JSON.stringify(Button));
    };

    const dragoverHandler = (event: any) => {
        event.preventDefault();
        if (event.target.className === "site") {
            event.target.style.border = "1px solid red";
        }
    };

    const dragleaveHandler = (event: any) => {};

    const dragendHandler = (event: any) => {};

    const dropHandler = (event: any) => {
        event.preventDefault();
    };

    return (
        <Tagname
            className="typography"
            draggable={true}
            onDragStart={dragstartHandler}
            onDragOver={dragoverHandler}
            onDragLeave={(e: any) => dragleaveHandler(e)}
            onDragEnd={(e: any) => dragendHandler(e)}
            onDrop={(e: any) => dropHandler(e)}
        >
            {text}
        </Tagname>
    );
};

export default Typography;
