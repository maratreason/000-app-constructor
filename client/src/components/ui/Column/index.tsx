import React, {useState} from "react";
import "./Column.scss";

const Column = () => {
    const [children, setChildren] = useState<any>([]);
    const [id, setId] = useState(1);

    const dragstartHandler = (event: any) => {
        setId(id + 1);
        const Col = {
            id,
            tagname: "div",
            classes: "column",
            children: [],
        }
        event.dataTransfer.setData("targetElement", JSON.stringify(Col));
    };

    const dragoverHandler = (event: any) => {
        event.preventDefault();
        event.target.style.border = "1px solid red";
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
        const transferElem = JSON.parse(
        event.dataTransfer.getData("targetElement"));
        setChildren([...children, transferElem]);
    };


    return (
        <div
            className="column"
            draggable={true}
            onDragStart={dragstartHandler}
            onDragOver={dragoverHandler}
            onDragLeave={(e) => dragleaveHandler(e)}
            onDragEnd={(e) => dragendHandler(e)}
            onDrop={(e) => dropHandler(e)}
        >
            {children.map((child: any) =>
                <child.tagname
                    key={child.id}
                    className={child.classes}
                >{child.title}</child.tagname>
            )}
        </div>
    );
};

export default Column;
