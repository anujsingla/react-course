import { Form } from "react-bootstrap";
import { IFormFields } from "../../models/formFields";

interface IProps {
    field: IFormFields;
    value: string;
    onFieldChange: (fieldName: string, value: string) => void;
}
export function TextInput(props: IProps) {
    const { field, value, onFieldChange } = props;
    return (
        <Form.Group className="mb-3" controlId={field.id}>
            <Form.Label>{field.label}</Form.Label>
            <Form.Control
                type={field.type}
                value={value}
                onChange={(e) => onFieldChange(field.id, e.target.value)}
            />
        </Form.Group>
    );
}