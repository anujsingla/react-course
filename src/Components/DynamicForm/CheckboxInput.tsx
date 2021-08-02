import { Form } from "react-bootstrap";
import { IFormFields } from "../../models/formFields";

interface IProps {
    field: IFormFields;
    value: string;
    onFieldChange: (fieldName: string, value: boolean) => void;
}
export function CheckboxInput(props: IProps) {
    const { field, value, onFieldChange } = props;
    return (
        <Form.Group className="mb-3" controlId={field.id}>
            <Form.Check
                type="checkbox"
                value={value}
                label={field.label}
                onChange={(e) => onFieldChange(field.id, e.target.checked)}
            />
        </Form.Group>
    );
}