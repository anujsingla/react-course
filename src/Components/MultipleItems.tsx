import { useState } from "react";

const defaultItems = [
  { id: "1", value: "value1" },
  { id: "2", value: "value2" },
  { id: "3", value: "value3" },
  { id: "4", value: "value4" },
];
export function MultipleItems() {
  const [items, setItems] = useState(defaultItems);
  const addItems = () => {
    const item = defaultItems.find((i) => !items.includes(i));
    if (item) {
      setItems([...items, item]);
    }
  };
  const removeItem = (item: any) => {
    setItems(items.filter((i) => i !== item));
  };
  return (
    <div>
      <button onClick={addItems}>Add Item</button>
      <ul style={{ listStyle: "none", paddingLeft: 0 }}>
        {items.map((item) => (
          <li key={item.id}>
            <button onClick={() => removeItem(item)}>Remove Item</button>
            <label>{item.id}</label>
            <input defaultValue={item.value}></input>
          </li>
        ))}
      </ul>
    </div>
  );
}
