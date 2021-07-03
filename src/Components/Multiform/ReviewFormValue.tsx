import { Button, ListGroup } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { IFormState } from "./MultiForm";

interface IProps {
    formState: IFormState;
    previousStep: () => void;
}

export function ReviewFormValue(props: IProps) {
    const { formState, previousStep } = props;

    const onConfirm = () => {
        console.log('onConfirm', onConfirm);
        // backend api call
        // reset form
    };

    return (
        <div>
            <ListGroup variant="flush">
                <ListGroup.Item>Name: {formState.name}</ListGroup.Item>
                <ListGroup.Item>Father Name: {formState.fathername}</ListGroup.Item>
                <ListGroup.Item>Mother Name: {formState.mothername}</ListGroup.Item>
                <ListGroup.Item>Phone Number: {formState.phonenumber}</ListGroup.Item>
                <ListGroup.Item>Email: {formState.email}</ListGroup.Item>
                <ListGroup.Item>Communication Address: {formState.address}</ListGroup.Item>
                <ListGroup.Item>Permanent Address: {formState.permanentAddress}</ListGroup.Item>
            </ListGroup>
            <Form>
                <Button className="mr-4 my-3" onClick={previousStep} variant="primary" type="submit">
                    Previous
                </Button>
                <Button onClick={onConfirm} variant="primary" type="submit">
                    Confirm
                </Button>
            </Form>
        </div>
    )
}