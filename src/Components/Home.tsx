import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom"

export function Home() {
    const history = useHistory();
    const onClick = () => {
        history.push('./product');
    }
    return (
        <div>
            Home component
            <Button onClick={onClick}>Product route</Button>
        </div>
    )
}