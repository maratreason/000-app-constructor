import React, {FC, useState} from "react";
import Block from "../../containers/Block";
import BlockContent from "../BlockContent";
import BlockTitle from "../BlockTitle";
import Button from "../ui/Button";
import Column from "../ui/Column";
import Input from "../ui/Input";
import Row from "../ui/Row/Row";
import Typography from "../ui/Typography";
import "./RightBarTabs.scss";
import { IBlock, IBlockChildItems } from "./types";

const RightBarTabs: FC = ({children}) => {
    const [sitebarHeaders, setSitebarHeaders] = useState([
        {id: 1, title: "Компоненты", show: "components", active: true},
        {id: 2, title: "Стили", show: "styles", active: false},
    ]);
    const [activeTab, setActiveTab] = useState("components");
    const [blocks, setBlocks] = useState<IBlock[]>([
        {
            id: 1,
            title: "Row",
            classes: "row",
            childItems: [
                {
                    id: 1,
                    title: "Row",
                    classes: "row",
                    tagname: "div"
                }
            ]
        },
        {
            id: 2,
            title: "Column",
            classes: "column",
            childItems: [
                {
                    id: 1,
                    title: "Col",
                    classes: "column",
                    tagname: "div"
                }
            ]
        },
        {
            id: 3,
            title: "Buttons",
            classes: "column",
            childItems: [
                {
                    id: 1,
                    title: "Button",
                    classes: "button",
                    tagname: "button",
                    buttonType: "primary",
                },
                {
                    id: 2,
                    title: "Button",
                    classes: "button",
                    tagname: "button",
                    buttonType: "warning",
                },
                {
                    id: 3,
                    title: "Button",
                    classes: "button",
                    tagname: "button",
                    buttonType: "success",
                },
                {
                    id: 4,
                    title: "Button",
                    classes: "button",
                    tagname: "Button",
                    buttonType: "danger",
                },
            ]
        },
        {
            id: 4,
            title: "Inputs",
            childItems: [
                {
                    id: 1,
                    classes: "input",
                    tagname: "input",
                }
            ]
        },
        {
            id: 5,
            title: "Typography",
            childItems: [
                {
                    id: 1,
                    classes: "typography",
                    tagname: "h1",
                    title: "Main Title",
                },
                {
                    id: 2,
                    classes: "typography",
                    tagname: "p",
                    title: "Some text in this field",
                }
            ]
        },
    ]);

    const changeTab = (showTab: string) => {
        setActiveTab(showTab);
    };

    return (
        <Block>
            <div className="rightbar-tabs">
                {sitebarHeaders &&
                    sitebarHeaders.map((header) => (
                        <div className={header.show === activeTab ? "rightbar-tabs-header active" : "rightbar-tabs-header"}
                            key={header.id}
                            onClick={() => changeTab(header.show)}
                        >
                            {header.title}
                        </div>
                    ))}
            </div>
            <div className="rightbar-tabs-content">
                {activeTab === "components" && blocks && blocks.map((block: any) => {
                    return <Block key={block.id}>
                        <BlockTitle>{block.title}</BlockTitle>
                        <BlockContent>
                            {block.childItems && block.childItems.map((el: IBlockChildItems) => {
                                if (el.classes === "button") {
                                    return React.cloneElement(<Button key={el.id}>{el.title}</Button>)
                                }
                                if (el.classes === "input") {
                                    return React.cloneElement(<Input key={el.id} />)
                                }
                                if (el.classes === "typography") {
                                    return React.cloneElement(
                                        <Typography key={el.id} Tagname={el.tagname} text={el.title} />
                                    )
                                }
                                if (el.classes === "row") {
                                    return React.cloneElement(<Row key={el.id}></Row>)
                                }
                                if (el.classes === "column") {
                                    return React.cloneElement(<Column key={el.id}></Column>)
                                }
                            })}
                        </BlockContent>
                    </Block>
                })}
                {activeTab === "styles" &&
                    <h1>Styles</h1>
                }
            </div>
        </Block>
    );
};

export default RightBarTabs;
