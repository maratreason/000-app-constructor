import React, {FC, useState} from "react";
import Input from "../../components/ui/Input";
import { setTypographyText } from "../../utils/typography";
import "./Site.scss";

const Site: FC = () => {
    const [siteChildren, setSiteChildren] = useState<any>([]);
    const [editable, setEditable] = useState(false);

    const [value, setValue] = useState("");

    const changeHandler = (e: any, id: string, children: any) => {
        setValue(e.target.value);
        setTypographyText(e.target.value, id, children);
    }

    const dragstartHandler = (event: any) => {};

    const dragoverHandler = (event: any) => {
        event.preventDefault();
        event.target.style.border = "1px solid red";
        event.target.style.paddingBottom = "30px";
    };

    const dragleaveHandler = (event: any) => {
        event.target.style.border = "1px solid #ccc";
    };

    const dragendHandler = (event: any) => {
        event.target.style.paddingBottom = "10px";
        event.target.style.border = "1px solid #ccc";
    };

    const dropHandler = (event: any) => {
        event.preventDefault();
        let currentElem = null;
        event.target.style.paddingBottom = "10px";
        event.target.style.border = "1px solid #ccc";

        const transferElem = JSON.parse(
            event.dataTransfer.getData("targetElement"),
        );

        currentElem = transferElem;
        
        if (event.currentTarget.className === "site") {
            if (transferElem.classes === "row") {
                currentElem = transferElem;
                setSiteChildren([...siteChildren, currentElem]);
            }

            if (transferElem.classes === "column") {
                const col = transferElem;
                const updatedChildren = siteChildren.map((ch: any) => {
                    if (+event.target.dataset.id === ch.id) {
                        ch.children.push(col);
                    }
                    return ch;
                });
                setSiteChildren(updatedChildren);
            }

            if (
                transferElem.classes !== "column"
                && transferElem.classes !== "row"
            ) {
                const updatedChildren = siteChildren.map((ch: any) => {
                    ch.children.map((col: any) => {
                        if (+event.target.dataset.id === +col.id) {
                            col.children.push(transferElem);
                            return col;
                        }
                    });
                    return ch;
                });
                setSiteChildren(updatedChildren);
            }
        }

        console.log("children", siteChildren);
    };

    const renderTags = (child: any): any => {
        if (child.children) {
            return renderTags(child.children);
        }

        return child.map((ch: any) => {
            if (ch.tagname === "input") {
                return <ch.tagname
                    key={ch.id}
                    className={ch.classes}
                    data-id={ch.id}
                />;
            } else if (ch.classes === "typography") {
                if (editable) {
                    return <Input
                        key={ch.id}
                        value={ch.text ? ch.text : value}
                        onChange={(e: any) => changeHandler(e, ch.id, siteChildren)}
                        onBlur={() => {
                            setEditable(false);
                            ch.edited = false;
                        }}
                    />
                } else {
                    return <ch.tagname
                        key={ch.id}
                        className={ch.classes}
                        data-id={ch.id}
                        edited={editable}
                        onDoubleClick={() => {
                            setEditable(true);
                            ch.edited = true;
                        }}
                    >{ch.text}</ch.tagname>;
                }
                
            } else {
                return <ch.tagname
                    key={ch.id}
                    className={ch.classes}
                    data-id={ch.id}
                    onBlur={() => setEditable(false)}
                >
                    {ch.title ? ch.title : renderTags(ch.children)}
                </ch.tagname>;
            }
        });
    };

    return (
        <div
            className="site"
            onDragStart={dragstartHandler}
            onDragOver={dragoverHandler}
            onDragLeave={(e) => dragleaveHandler(e)}
            onDragEnd={(e) => dragendHandler(e)}
            onDrop={(e) => dropHandler(e)}
        >
            {renderTags(siteChildren)}
        </div>
    );
};

export default Site;
