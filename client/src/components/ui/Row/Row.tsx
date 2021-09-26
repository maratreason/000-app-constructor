import React, {FC, useState} from 'react';
import "./Row.scss";

const Row: FC<any> = () => {
    const [children, setChildren] = useState<any>([]);
    const [id, setId] = useState(1);

    const dragstartHandler = (event: any) => {
        setId(id + 1);
        const Row = {
            id,
            tagname: "div",
            classes: "row",
            children: [],
        }
        event.dataTransfer.setData("targetElement", JSON.stringify(Row));
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
        const transferElem = JSON.parse(
            event.dataTransfer.getData("targetElement")
        );

        if (
            event.currentTarget.className === "row"
            && transferElem.classes === "col"
        ) {
            setChildren([...children, transferElem]);
        }
    };

    return (
        <div 
            className="row"
            draggable={true}
            onDragStart={dragstartHandler}
            onDragOver={dragoverHandler}
            onDragLeave={(e) => dragleaveHandler(e)}
            onDragEnd={(e) => dragendHandler(e)}
            onDrop={(e) => dropHandler(e)}
        >
            {children && children.map((child: any) =>
                <child.tagname
                    key={child.id}
                    className={child.classes}
                    data-id={child.id}
                >{child.title}</child.tagname>
            )}
        </div>
    );
};

export default Row;
