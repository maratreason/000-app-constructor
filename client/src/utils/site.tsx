import React from "react";
import Input from "../components/ui/Input";

export const renderInput = (child: any) => {
    return <child.tagname
        key={child.id}
        className={child.classes}
        data-id={child.id}
    />;
}

export const typographyRender = (editable: boolean, openEdit: any, closeEdit: any, inputValue: any, onChange: any, ch: any, children: any) => {
    if (editable) {
        return <Input
            key={ch.id}
            value={ch.text ? ch.text : inputValue}
            onChange={(e: any) => onChange(e, ch.id, children)}
            onBlur={closeEdit}
        />
    } else {
        return <ch.tagname
            key={ch.id}
            className={ch.classes}
            data-id={ch.id}
            edited={editable}
            onDoubleClick={openEdit}
        >{ch.text}</ch.tagname>;
    }
}
