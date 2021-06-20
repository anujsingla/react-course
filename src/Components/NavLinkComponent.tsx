import { Nav } from "react-bootstrap";
import { NavLink } from 'react-router-dom'

export function NavLinkComponent() {
    return (
        <Nav
            activeKey="/home"
        >
            <Nav.Item>
                <NavLink activeClassName="active" className="nav-link" to="/home">Home</NavLink>
            </Nav.Item>
            <Nav.Item>
                <NavLink activeClassName="active" className="nav-link" to="/about">About</NavLink>
            </Nav.Item>
            <Nav.Item>
                <NavLink activeClassName="active" className="nav-link" to="/dashboard">Dashboard</NavLink>
            </Nav.Item>
        </Nav>
    )
}