import { useLocation, Link } from "react-router-dom"

export function NotFound() {
    const location = useLocation();
    return (
        <div>NotFound component {location.pathname}
            <div>Home URL:<Link to="/home">Home</Link> </div>
        </div>
    )
}