import { useState } from "react"
import { StudentForm1 } from "./StudentForm1";
import { StudentForm2 } from "./StudentForm2";
import { StudentForm3 } from "./StudentForm3";
import { ReviewFormValue } from "./ReviewFormValue";


export interface IFormState {
    step: number;
    name: string;
    fathername: string;
    mothername: string;
    email: string;
    phonenumber: number | undefined;
    address: string;
    permanentAddress: string;
}

const defaultValue: IFormState = {
    step: 1,
    name: '',
    fathername: '',
    mothername: '',
    email: '',
    phonenumber: undefined,
    address: '',
    permanentAddress: '',
}

export function MultiForm() {
    const [formState, setFormState] = useState<IFormState>(defaultValue);

    const handleFieldUpdate = (value: string, fieldName: string) => {
        setFormState({
            ...formState,
            [fieldName]: value
        });
    }

    const handleNextStep = () => {
        setFormState({
            ...formState,
            step: formState.step + 1
        });
    }

    const handlePreviousStep = () => {
        setFormState({
            ...formState,
            step: formState.step - 1
        });
    }

    const renderForms = () => {
        if (formState.step === 1) {
            return <StudentForm1 nextStep={handleNextStep} handleChange={handleFieldUpdate} formState={formState} />
        }
        else if (formState.step === 2) {
            return <StudentForm2 previousStep={handlePreviousStep} nextStep={handleNextStep} handleChange={handleFieldUpdate} formState={formState} />
        }
        else if (formState.step === 3) {
            return <StudentForm3 previousStep={handlePreviousStep} nextStep={handleNextStep} handleChange={handleFieldUpdate} formState={formState} />
        }
        else if (formState.step === 4) {
            return <ReviewFormValue previousStep={handlePreviousStep} formState={formState} />
        }
        return <></>;
    }
    return (
        <div>{renderForms()}</div>
    )
}