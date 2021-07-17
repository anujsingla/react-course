import { addNewUser, IUser, updateUser } from "../redux/usersReducer";
import { Modal, Button, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { isEmpty } from "lodash";
import { Mode } from "./UserList";

interface IProps {
    show: boolean;
    onClose: () => void;
    onSave?: () => void;
    userInfo: IUser;
    mode: string;
}

export function UserEditModal(props: IProps) {
    const { show, onClose, mode, userInfo } = props;
    const [userInfoState, setUserInfoState] = useState(userInfo);
    const disptach = useDispatch();

    useEffect(() => {
        if (isEmpty(userInfo)) {
            setUserInfoState(null);
        } else {
            setUserInfoState({
                ...userInfoState,
                ...userInfo
            });
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userInfo]);

    console.log('userInfo', userInfoState, userInfo);

    const onSaveModal = () => {
        if (mode === Mode.EDIT) {
            disptach(updateUser(userInfoState));
        } else {
            disptach(addNewUser(userInfoState));
        }

        onClose();
    }

    const onChangeValue = (fieldName: string, value: string) => {
        setUserInfoState({
            ...userInfoState,
            [fieldName]: value
        });
    }
    return (
        <Modal show={show} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>{mode} Modal</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="firstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            value={userInfoState?.first_name}
                            onChange={(event) => onChangeValue('first_name', event.target.value)}
                            type="text" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="lastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            value={userInfoState?.last_name}
                            onChange={(event) => onChangeValue('last_name', event.target.value)}
                            type="text" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            value={userInfoState?.email}
                            onChange={(event) => onChangeValue('email', event.target.value)}
                            type="text" />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={onSaveModal}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    )

}