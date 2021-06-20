import { Link } from "react-router-dom"

export function ProductName() {
    return (
        <div>
            <ul>
                <li>
                    <Link to={`/product/product1`}>Product1</Link>
                </li>
                <li>
                    <Link to={`/product/product2`}>Product2</Link>
                </li>
                <li>
                    <Link to={`/product/product3`}>Product3</Link>
                </li>
                <li>
                    <Link to={`/product/product4`}>Product4</Link>
                </li>
            </ul>
        </div>
    )
}