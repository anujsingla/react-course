import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { IFormState } from "./MultiForm";

interface IProps {
    nextStep: () => void;
    formState: IFormState;
    handleChange: (value: string, fieldName: string) => void;
}

export function StudentForm1(props: IProps) {
    const { nextStep, formState, handleChange } = props;
    return (
        <div>
            <Form>
                <Form.Group controlId="formGroupEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        value={formState.name}
                        onChange={(event) => handleChange(event.target.value, 'name')}
                        type="text"
                    />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                    <Form.Label>Father Name</Form.Label>
                    <Form.Control
                        value={formState.fathername}
                        onChange={(event) => handleChange(event.target.value, 'fathername')}
                        type="text"
                    />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                    <Form.Label>Mother Name</Form.Label>
                    <Form.Control
                        value={formState.mothername}
                        onChange={(event) => handleChange(event.target.value, 'mothername')}
                        type="text"
                    />
                </Form.Group>
                <Form.Group>
                    <Button onClick={nextStep} type="submit">Continue</Button>
                </Form.Group>
            </Form>
        </div>
    )
}