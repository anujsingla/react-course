import { map } from "lodash";
import { useEffect, useState } from "react";
import { Button, Alert } from "react-bootstrap";
import { Table } from "react-bootstrap";
import { useDispatch } from "react-redux"
import { useAppSelector } from "../redux/reduxHook";
import { fetchUser } from "../redux/usersReducer";
import { UserEditModal } from './UserEditModal';

export const Mode = {
    NEW: 'New',
    EDIT: 'Edit'
}

export function UserList() {
    const dispatch = useDispatch();
    const { data, isError, errorMessage } = useAppSelector((state) => state.users.users)
    const [mode, setMode] = useState(Mode.EDIT);
    const [showModal, setShowModal] = useState(false);
    const [userData, setUserData] = useState(null);

    const onClose = () => setShowModal(false);

    const onUpdateModal = (data) => {
        setMode(Mode.EDIT);
        setUserData(data);
        setShowModal(true);
    }

    const onNewModal = () => {
        setMode(Mode.NEW);
        setUserData(null);
        setShowModal(true);
    }

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
        <Button onClick={onNewModal} className="mb-3" variant="outline-primary">Add User</Button>
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
                {map(data, (d, index) => (
                    <tr key={index}>
                        <td>{d.id}</td>
                        <td>{d.first_name}</td>
                        <td>{d.last_name}</td>
                        <td>{d.email}</td>
                        <td><Button onClick={() => onUpdateModal(d)} variant="outline-primary">Update</Button></td>
                    </tr>
                ))}
            </tbody>
        </Table>
        <UserEditModal mode={mode} userInfo={userData} show={showModal} onClose={onClose} />
    </div>
}

// Redux
//    - State management library for javascript application
//    - we can use it with React, angular, vue or other javascript framework or library
//    - A single centralized place to contain the global state and impose 
//      certain restrictions on how and when updates can happen.

// Redux three principles

// - Single source of truth
//     - Application has single store.
//     - Easier to debug.

// - State is read-only
//     - We can only change the state with action and reducer.
//     - State can not be changed by view or any network call.

// - Changes are made with pure functions
//     - Reducers are pure functions that take the previous state and and
//     action and return the next state.