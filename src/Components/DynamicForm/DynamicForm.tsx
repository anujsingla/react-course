import { map, reduce } from "lodash";
import { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Fields, formFields, IFormFields } from "../../models/formFields";
import { CheckboxInput } from "./CheckboxInput";
import { OptionInput } from "./OptionInput";
import { RadioInput } from "./RadioInput";
import { TextareaInput } from "./TextareaInput";
import { TextInput } from "./TextInput";

export function DynamicForm() {
    const [formValue, setFormValue] = useState({});

    useEffect(() => {
        const fields = reduce(formFields, (obj, field) => {
            obj[field.id] = '';
            return obj;
        }, {});
        setFormValue(fields);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formFields]);

    const onChangeField = (field: string, value: any) => {
        setFormValue({
            ...formValue,
            [field]: value
        });
    }

    const onSubmitForm = () => {
        console.log('form submit');
        // backend api call
    };

    const renderForm = (f: IFormFields) => {
        switch (f.component) {
            case Fields.TEXT:
                return (
                    <TextInput
                        onFieldChange={onChangeField}
                        value={formValue[f.id]}
                        field={f}
                        key={f.id}
                    />
                )
            case Fields.TEXTAREA:
                return (
                    <TextareaInput
                        onFieldChange={onChangeField}
                        value={formValue[f.id]}
                        field={f}
                        key={f.id}
                    />
                )
            case Fields.CHECKBOX:
                return (
                    <CheckboxInput
                        onFieldChange={onChangeField}
                        value={formValue[f.id]}
                        field={f}
                        key={f.id}
                    />
                )
            case Fields.RADIO:
                return (
                    <RadioInput
                        onFieldChange={onChangeField}
                        value={formValue[f.id]}
                        field={f}
                        key={f.id}
                    />
                )
            case Fields.OPTIONS:
                return (
                    <OptionInput
                        onFieldChange={onChangeField}
                        value={formValue[f.id]}
                        field={f}
                        key={f.id}
                    />
                )
        }

    }
    console.log('formValue', formValue)
    return (
        <Form>
            <b>Dynamic form in react</b>
            {map(formFields, (f) => renderForm(f))}
            <Button className="mt-3" variant="primary" onClick={onSubmitForm}>
                Submit
            </Button>
        </Form>
    )
}