import productsData from "./products-data.json";
import Product from "../Product/Product";
import { Container } from "./ProductList.styled";

export default function ProductList(props) {
  return (
    <Container>
      {props.children}
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
      <button>Zobacz więcej</button>
    </Container>
  );
}
