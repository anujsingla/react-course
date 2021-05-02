import { useState } from "react";

export function ToggleButton() {
  const [checked, toggleButton] = useState(false);
  return (
    <div>
      <input
        type="checkbox"
        checked={checked}
        onClick={(event: any) => toggleButton(event.target.checked)}
      />
      Toggle with state management
    </div>
  );
}
