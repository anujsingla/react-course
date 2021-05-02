import { useState } from "react";

interface IUserForm {
  name: string;
  age: number;
}

const defaultFormValue = {
  name: "",
  age: 0,
};

export function UserForm() {
  const [form, setForm] = useState<IUserForm>(defaultFormValue);

  const onChangeName = (event: any) => {
    setForm({
      ...form,
      name: event.target.value,
    });
  };

  const onChangeAge = (event: any) => {
    setForm({
      ...form,
      age: event.target.value,
    });
  };
  const onSubmitForm = () => {
    console.log("form", form);
    // api call to update db with the help of apis
  };
  return (
    <div>
      UserName:{" "}
      <input
        type="text"
        name="username"
        value={form.name}
        onChange={onChangeName}
      />
      <br />
      User Age:{" "}
      <input
        type="text"
        name="userage"
        value={form.age}
        onChange={onChangeAge}
      />
      <button onClick={onSubmitForm}>Submit</button>
    </div>
  );
}
