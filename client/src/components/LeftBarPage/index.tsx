import React, {FC, useState} from "react";
import Block from "../../containers/Block";
import {IoChevronDownSharp} from "react-icons/io5";
import {CgHashtag} from "react-icons/cg";
import {MdTitle} from "react-icons/md";
import {BiFullscreen} from "react-icons/bi";
import "./LeftBarPage.scss";

export const renderIcon = (classes: string) => {
    let IconType;
    if (classes === "list-item folder") {
        IconType = <CgHashtag />;
    }
    if (classes === "list-item Typography") {
        IconType = <MdTitle />;
    }
    if (classes === "list-item Rectangle") {
        IconType = <BiFullscreen />;
    }

    return IconType;
};

const LeftBarPage: FC = () => {
    const [leftMenu, setLeftMenu] = useState([
        {
            id: 1,
            title: "frame 9",
            children: [],
            classes: "folder",
        },
        {
            id: 2,
            title: "frame 10",
            children: [],
            classes: "folder",
        },
        {
            id: 3,
            title: "frame 11",
            classes: "folder",
            children: [
                {
                    id: 4,
                    title: "T Поиск...",
                    classes: "Typography",
                },
                {
                    id: 5,
                    title: "Rectangle",
                    classes: "Rectangle",
                },
                {
                    id: 6,
                    title: "Group 114",
                    classes: "folder",
                    children: [
                        {
                            id: 7,
                            title: "Rectangle 8",
                            classes: "Rectangle",
                        },
                    ],
                },
            ],
        },
    ]);

    const renderMenu = (arr: any) => {
        return arr.map((item: any) => {
            const classes = item.classes
                ? "list-item " + item.classes
                : "list-item";
            if (item.children) {
                if (item.children.length > 0) {
                    return (
                        <ul className="leftbar-list list-2">
                            <li className={classes} key={item.id}>
                                {renderIcon(classes)} {item.title}
                            </li>
                            {renderMenu(item.children)}
                        </ul>
                    );
                }
            }
            return (
                <li className={classes} key={item.id}>
                    {renderIcon(classes)} {item.title}
                </li>
            );
        });
    };

    return (
        <>
            <Block>
                <div className="leftbar-page">
                    Page 1 <IoChevronDownSharp />
                </div>
            </Block>
            <Block>
                <div className="leftbar-page">
                    <ul className="leftbar-list">{renderMenu(leftMenu)}</ul>
                </div>
            </Block>
        </>
    );
};

export default LeftBarPage;
