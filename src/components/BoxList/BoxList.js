import Box from "../Box/Box";
import boxData from "./box-data.json";
import Title from "../Title/Title";
import { Container, ListItem } from "./BoxList.styled";

export default function BoxList() {
  return (
    <Container>
      <Title title={"Wybierz liczbę pudełek"} />
      <ul>
        {boxData.map((box) => (
          <ListItem key={box.size}>
            <Box size={box.size} />
          </ListItem>
        ))}
      </ul>
    </Container>
  );
}
