import Counter from "../Counter/Counter";
import {
  Container,
  ContainerInfo,
  ContainerPrice,
  Price,
} from "./Product.styled";

export default function Product({ image, name, producer, code, price }) {
  return (
    <Container>
      <img src={image} alt={name} />
      <ContainerInfo>
        <p>{name}</p>
        <p>{producer}</p>
        <p>{code}</p>
      </ContainerInfo>
      <ContainerPrice>
        <Counter />
        <Price>
          {price} <span>zł</span>
        </Price>
      </ContainerPrice>
    </Container>
  );
}
