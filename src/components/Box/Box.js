import Counter from "../Counter/Counter";
import { Text } from "./Box.styled";

export default function Box({ size }) {
  return (
    <>
      <Text>
        Pudełko <span>{size}</span>
      </Text>
      <Counter />
    </>
  );
}
