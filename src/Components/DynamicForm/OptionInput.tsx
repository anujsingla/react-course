import { map } from "lodash";
import { Form } from "react-bootstrap";
import { IFormFields } from "../../models/formFields";

interface IProps {
    field: IFormFields;
    value: string;
    onFieldChange: (fieldName: string, value: string) => void;
}
export function OptionInput(props: IProps) {
    const { field, value, onFieldChange } = props;
    return (
        <Form.Group className="mb-3" controlId={field.id}>
            <Form.Label>{field.label}</Form.Label>
            <Form.Select className="me-sm-2" value={value} onChange={(e: any) => onFieldChange(field.id, e?.target?.value)}>
                {map(field.fields, (f, index) => (
                    <option key={index} value={f.value}>{f.label}</option>
                ))}
            </Form.Select>
        </Form.Group>
    );
}