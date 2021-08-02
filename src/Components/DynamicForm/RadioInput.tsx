import { map } from "lodash";
import { Form } from "react-bootstrap";
import { IFormFields } from "../../models/formFields";

interface IProps {
    field: IFormFields;
    value: string;
    onFieldChange: (fieldName: string, value: string) => void;
}
export function RadioInput(props: IProps) {
    const { field, onFieldChange } = props;
    return (
        <Form.Group className="mb-3" controlId={field.id}>
            {map(field.fields, (f, index) => (
                <Form.Check
                    type="radio"
                    key={index}
                    inline
                    value={f.value}
                    name={field.id}
                    label={f.label}
                    onChange={(e) => {
                        onFieldChange(field.id, e.target.value)
                    }}
                />
            ))}
        </Form.Group>
    );
}