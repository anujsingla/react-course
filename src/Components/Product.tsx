import { useParams } from "react-router-dom"
import { ProductName } from "./ProductName";

export interface IPageParams {
    name: string;
}

export function Product() {
    const { name } = useParams<IPageParams>();
    return (
        <div>
            <ProductName />
            Product Name: {name}
        </div>
    )
}