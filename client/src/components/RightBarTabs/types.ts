export interface IBlockChildItems {
    id: number;
    title?: string;
    tagname?: string;
    classes?: string;
    buttonType?: string;
}

export interface IBlock {
    id: number;
    title?: string;
    classes?: string;
    childItems?: IBlockChildItems[];
}
