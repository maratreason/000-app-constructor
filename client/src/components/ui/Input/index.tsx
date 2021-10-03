import React, {FC, useState} from "react";
import "./Input.scss";

const Input: FC<any> = ({value, onChange}) => {
    const [id, setId] = useState(1);

    const dragstartHandler = (event: any) => {
        setId(id + 1);
        const Input = {
            id,
            tagname: "input",
            classes: "input",
            children: [],
        }
        event.dataTransfer.setData("targetElement", JSON.stringify(Input));
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

    return (
        <input
            className="input"
            draggable={true}
            onDragStart={dragstartHandler}
            onDragOver={dragoverHandler}
            onDragLeave={(e) => dragleaveHandler(e)}
            onDragEnd={(e) => dragendHandler(e)}
            onDrop={(e) => dropHandler(e)}
            type="text"
            placeholder="Введите что-нибудь"
            value={value}
            onChange={onChange}
        />
    );
};

export default Input;
