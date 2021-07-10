import { map } from "lodash";
import { useEffect } from "react";
import { Button, Alert } from "react-bootstrap";
import { Table } from "react-bootstrap";
import { useDispatch } from "react-redux"
import { useAppSelector } from "../redux/reduxHook";
import { fetchUser } from "../redux/usersReducer";

export function UserList() {
    const dispatch = useDispatch();
    const { data, isError, errorMessage } = useAppSelector((state) => state.users.users)
    console.log('data', data);
    useEffect(() => {
        dispatch(fetchUser());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (isError) {
        return <Alert variant='danger'>
            {errorMessage || 'Error in fetching user list'}
        </Alert>
    }

    return <div>
        <Button className="mb-3" variant="outline-primary">Add User</Button>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {map(data, (d) => (
                    <tr>
                        <td>{d.id}</td>
                        <td>{d.first_name}</td>
                        <td>{d.last_name}</td>
                        <td>{d.email}</td>
                        <td><Button variant="outline-primary">Update</Button></td>
                    </tr>
                ))}
            </tbody>
        </Table></div>
}