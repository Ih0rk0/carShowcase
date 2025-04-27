import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?:
    MouseEventHandler<HTMLButtonElement>,
    btnType?: "button" | "submit"
}

export interface SearchManufacturerProps {
    manufacturer: string,
    setManufacturer: (manufacturer: string) => void
    manufacturers: string[]
}
export type Car = {
    Model_ID: number;
    Model_Name: string;
    Make_ID: number;
    Make_Name: string;
};
// export type Links = {
//     raw: string,
//     full: string,
//     regular: string,
//     small: string,
//     thumb: string,
//     small_s3: string
// }
type UrlsItem = {
full:string, raw:string, regular:string, small:string , small_s3:string, thumb:string
  };

export interface CarInfo {
    name: string,
    model: string,
    imgLink:  UrlsItem[];
}
export type SearchbarProps = {
    render: (carInfo: Car) => React.ReactNode;
};
