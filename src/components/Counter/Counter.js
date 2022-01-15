import { useState } from "react";
import { Container } from "./Counter.styled";

export default function Counter() {
  const [value, setValue] = useState(0);

  return (
    <Container>
      <button onClick={() => setValue(value - 1)} disabled={value === 0}>
        -
      </button>
      <p>{value}</p>
      <button onClick={() => setValue(value + 1)}>+</button>
    </Container>
  );
}
