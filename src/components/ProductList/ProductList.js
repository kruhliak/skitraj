import Product from "../Product/Product";
import { Container, Button } from "./ProductList.styled";

export default function ProductList({ text, children, productsData }) {
  return (
    <Container>
      {children}
      <h3>{text}</h3>
      <ul>
        {productsData.map((product) => (
          <li key={product.code}>
            <Product
              image={product.src}
              name={product.name}
              producer={product.producer}
              code={product.code}
              price={product.price}
            />
          </li>
        ))}
      </ul>
      <Button>Zobacz więcej</Button>
    </Container>
  );
}
