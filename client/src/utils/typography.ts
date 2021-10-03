export const setTypographyText = (text: string, id: string, data: any): any => {
    data.map((el: any) => {
        if (el.classes !== "typography" && el.children) {
            return setTypographyText(text, el.id, el.children,);
        } else {
            if (el.classes === "typography" && el.id === id) {
                el.text = text;
            }
        }
        return el;
    });
}
