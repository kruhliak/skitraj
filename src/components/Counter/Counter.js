import { useState } from "react";

export default function Counter() {
  const [value, setValue] = useState(0);

  return (
    <div>
      <button onClick={() => setValue(value - 1)} disabled={value === 0}>
        -
      </button>
      <p>{value}</p>
      <button onClick={() => setValue(value + 1)}>+</button>
    </div>
  );
}
